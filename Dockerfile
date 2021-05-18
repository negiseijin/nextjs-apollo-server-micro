FROM node:16-alpine

WORKDIR /usr/src/app

RUN apk update && apk --no-cache add \
    git \
    vim
