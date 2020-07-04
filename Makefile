UI_PORT=8080
API_PORT=8000
UI_NGINX_PORT=80
API_NGINX_PORT=8001
DOCKER=$(shell which docker)
DOCKER_COMPOSE=API_PORT=$(API_PORT) UI_PORT=$(UI_PORT) UI_NGINX_PORT=$(UI_NGINX_PORT) API_NGINX_PORT=$(API_NGINX_PORT)  $(shell which docker-compose)
DOCKER_COMPOSE_SERVICES=$(shell cat docker-compose.yml|awk '/^services/,/^network/' | grep -E '^\s{2}\S+' | sed 's/://g' | xargs)
MAKE=$(shell which make)

.PHONY: docker/tmp logs ui/build

logs:
	$(DOCKER_COMPOSE) logs -f

server/up: docker/tmp
	$(DOCKER_COMPOSE) up --build  --remove-orphans -d $(DOCKER_COMPOSE_SERVICES)

server/down:
	$(DOCKER_COMPOSE) down

rebuild: server/down server/up

api/rebuild:
	$(DOCKER_COMPOSE) rm --force --stop api
	$(DOCKER_COMPOSE) up --build -d api

ui-nginx/rebuild:
	$(DOCKER_COMPOSE) rm --force --stop ui_nginx
	$(DOCKER_COMPOSE) up --build -d ui_nginx

ui/rebuild:
	$(DOCKER_COMPOSE) rm --force --stop ui
	$(DOCKER_COMPOSE) up --build -d ui

ui/build:
	$(MAKE) -C ui build

push: ui/build build/image
	$(DOCKER) push shuzon21/headphonista:latest

docker/tmp:
	rm -rf ./$@
	mkdir ./$@
	cp -r ./ui/build ./$@

build/image: docker/tmp
	$(DOCKER_COMPOSE) build --pull --no-cache ui_nginx
