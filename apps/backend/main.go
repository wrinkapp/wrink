package main

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
	log "github.com/sirupsen/logrus"
)

var app = fiber.New()

func init() {
	// load .env file
	if err := godotenv.Load(".env"); err != nil {
		// log.Panic("No .env file found")
		return
	}

	log.SetOutput(os.Stdout)
	log.SetLevel(log.InfoLevel)
	log.SetFormatter(&log.JSONFormatter{})
}

func getPort() string {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8000"
	}
	return "0.0.0.0:" + port

}

// main function
func main() {
	app.Use(logger.New())
	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "Hello, World!",
		})
	})

	app.Listen(getPort())

	log.Info("Server is live")
}
