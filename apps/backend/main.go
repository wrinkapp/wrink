package main

import (
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
	log "github.com/sirupsen/logrus"
	"github.com/wrinkapp/wrink/apps/backend/routes"
	"github.com/wrinkapp/wrink/apps/backend/services"
)

var app = fiber.New()

func init() {
	// load .env file
	if err := godotenv.Load(".env.local"); err != nil {
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
	// connect services
	services.ConnectRedis()

	// middleware
	app.Use(logger.New())
	app.Use(cors.New())

	// routes
	app.Post("/waitlist", routes.Waitlist)

	// start server
	err := app.Listen(getPort())
	if err != nil {
		log.Panic(err)
	}
}
