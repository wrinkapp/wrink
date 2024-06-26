ARG GO_VERSION=1
FROM golang:${GO_VERSION}-bookworm as builder

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download && go mod verify
COPY . .
RUN go build -v -o /backend-api .


FROM debian:bookworm

COPY --from=builder /backend-api /usr/local/bin/
CMD ["backend-api"]
