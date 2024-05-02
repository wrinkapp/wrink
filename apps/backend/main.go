package main

import "github.com/gofiber/fiber/v2"

var app = fiber.New()

// main function
func main() {
	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "Hello, World!",
		})
	})

	app.Listen(":8080")
}
