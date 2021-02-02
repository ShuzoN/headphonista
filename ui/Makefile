YARN=$(shell which yarn)
NODE_MODULES=./node_modules


.PHONY: install build run

install: 
	[ -d $(NODE_MODULES) ] || $(YARN) install

build: install
	$(YARN) build

run: install
	$(YARN) start


