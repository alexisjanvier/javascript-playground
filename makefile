.PHONY: default install

.DEFAULT_GOAL := help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install project depencies
	docker-compose run --rm --no-deps back yarn install

start: ## Start development environment in Docker
	docker-compose up -d

stop: ## Stop development environment in Docker
	docker-compose down

logs: ## Show all logs for development environment
	docker-compose logs -f

logs-back: ## Show logs for back service (API)
	docker-compose logs -f back

logs-front: ## Show logs for front service (CRA)
	docker-compose logs -f front

connect-server: ## Start a terminal session in server container
	docker-compose exec back ash
