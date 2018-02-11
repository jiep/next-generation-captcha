FROM node:9.4.0-alpine

ENV HOST 0.0.0.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk update && apk upgrade

COPY . /usr/src/app/
RUN yarn

EXPOSE 3000
RUN yarn build
CMD [ "yarn", "start" ]
