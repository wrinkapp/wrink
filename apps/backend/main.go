package main

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
	log "github.com/sirupsen/logrus"
)

var app = fiber.New()

func init() {
	// load .env file
	if err := godotenv.Load(".env.local"); err != nil {
		log.Fatal("No .env.local file found")
		return
	}

	log.SetOutput(os.Stdout)
	log.SetLevel(log.InfoLevel)
	log.SetFormatter(&log.JSONFormatter{})
}

// main function
func main() {
	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "Hello, World!",
		})
	})

	app.Listen(os.Getenv("PORT"))
}
