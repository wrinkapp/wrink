package routes

import (
	"context"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/wrinkapp/wrink/apps/backend/services"
	"github.com/wrinkapp/wrink/apps/backend/utils"
)

func Waitlist(c *fiber.Ctx) error {
	type request struct {
		EmailAddress string `json:"email_address" validate:"required,email"`
	}

	input := new(request)
	if err := c.BodyParser(input); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "Invalid JSON",
		})
	}

	invalid := utils.Validate(input)
	if invalid == "EmailAddress" {
		return c.Status(400).JSON(fiber.Map{
			"error": "Invalid email address",
		})
	}

	// Sanitize email address
	input.EmailAddress = strings.TrimSpace(input.EmailAddress)
	input.EmailAddress = strings.ToLower(input.EmailAddress)

	res := services.Redis.SAdd(context.Background(), "wrink:waitlist", input.EmailAddress).Val()
	if res == 0 {
		return c.Status(400).JSON(fiber.Map{
			"error": "Email address already exists",
		})
	}

	return c.SendStatus(200)
}
