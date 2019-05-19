# Set the base image to Node 10
FROM node:10-alpine

# File Author / Maintainer
MAINTAINER Sawyer Blue Burnett

# Copy files needed for Node app to install / run
COPY package.json ./
COPY yarn.lock ./
COPY next.config.js ./
COPY .babelrc ./

RUN yarn install

COPY containers ./containers
COPY pages ./pages
COPY src ./src
COPY static ./static

RUN yarn build