#!/bin/make -f
SHELL=/bin/sh

DC = docker compose
DC_CLI = $(DC) run --rm cli

.PHONY: dist
dist: node_modules
	$(DC_CLI) run dist

.PHONY: cli
cli:
	$(DC) run --entrypoint '' --rm cli sh

node_modules:
	$(DC_CLI) install