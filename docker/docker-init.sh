#!/usr/bin/env bash

set -e

if [ "$(command -v docker-compose)" ];
  then
    cp -r ../docks ./docs && docker-compose down --remove-orphans && docker-compose up --build -d
  else
    echo "Docker is not installed, please install docker and try again." && exit 1
fi