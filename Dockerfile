# Set the base image to Node 10
FROM node:10-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# File Author / Maintainer
LABEL author="Sawyer Burnett"

# Copy files needed for Node app to install / run
COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 80