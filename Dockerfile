# Set the base image to Node 8.7
FROM node:8-alpine

# File Author / Maintainer
MAINTAINER Sawyer Blue Burnett

# Copy files needed for Node app to install / run
COPY package.json ./
COPY yarn.lock ./
COPY next.config.js ./

COPY .babelrc ./

COPY containers ./
COPY pages ./
COPY src ./
COPY static ./

RUN yarn install
RUN yarn build
RUN yarn start