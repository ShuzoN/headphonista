UI_PORT=8080
DOCKER=$(shell which docker)
DOCKER_COMPOSE=UI_PORT=$(UI_PORT) $(shell which docker-compose)
DOCKER_COMPOSE_SERVICES=$(shell cat docker-compose.yml|awk '/^services/,/^network/' | grep -E '^\s{2}\S+' | sed 's/://g' | xargs)
MAKE=$(shell which make)

logs:
	$(DOCKER_COMPOSE) logs -f

server/up:
	$(DOCKER_COMPOSE) up --build  --remove-orphans -d $(DOCKER_COMPOSE_SERVICES)

server/down:
	$(DOCKER_COMPOSE) down

ui/rebuild:
	$(DOCKER_COMPOSE) rm --force --stop ui
	$(DOCKER_COMPOSE) up --build -d ui
