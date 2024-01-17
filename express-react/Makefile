#ROOT:=$(dir $(realpath $(firstword $(MAKEFILE_LIST))))
ROOT:=$(shell pwd)
RED="\033[1;31m"
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
BLUE="\033[1;34m"
NOCOLOR="\033[0m\033[K"

COMPOSE=docker-compose -p pas-v11-stack -f ${ROOT}/.devcontainer/docker-compose.yml --env-file ${ROOT}/.devcontainer/.env
LOGTAIL=--tail=300 -t -f

.PHONY: start start_client build publish_docker deploy_dev ci create_fake_data restore%
.DEFAULT_GOAL := help

##
## Main targets
##
help: ## display enhanced help message
	@echo "Current Directory: ${ROOT}"
	@grep -E '(^[%0-9a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-15s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

##
## API targets
##
api-start: ## start API container
	cd api; npx ts-node server.ts
api-stop: ## stop API container
	${COMPOSE} stop api

##
## app targets
##
app-start: ## start app container
	cd app; npm run dev
app-stop: ## stop  app container
	${COMPOSE} stop app-solid

