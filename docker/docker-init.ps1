#!/usr/bin/env pwsh

if (-Not (Get-Command docker-compose)) {
   Write-Output "Docker is not installed, please install and try again" ; exit 1
}
else
{
    Copy-Item "../docs" "./docs" ; docker-compose down --remove-orphans ; docker-compose up --build -d ; exit 0
}