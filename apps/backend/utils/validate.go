package utils

import (
	"regexp"

	"github.com/go-playground/validator/v10"
)

var Validator = validator.New()
var UsernameRegex = regexp.MustCompile(`^[A-Za-z0-9_\.]+$`)

func Validate(s interface{}) (invalid string) {
	err := Validator.Struct(s)
	if err != nil {
		for _, err := range err.(validator.ValidationErrors) {
			invalid = err.Field()
			return
		}
	}

	return
}
