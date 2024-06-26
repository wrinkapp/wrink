ARG GO_VERSION=1.22.2
FROM golang:${GO_VERSION}-bookworm as builder

WORKDIR /usr/src/app
COPY go.mod go.sum ./
RUN go mod download && go mod verify
COPY . .
RUN go build -v -o /wrink main.go


FROM debian:bookworm

COPY --from=builder /wrink /usr/local/bin/
CMD ["wrink"]
