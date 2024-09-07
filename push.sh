#!/bin/bash

docker build . --tag ghcr.io/amirwebd3v/amirweb.dev:latest
docker push ghcr.io/amirwebd3v/amirweb.dev:latest
