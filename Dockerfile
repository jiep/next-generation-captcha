FROM node:9.4.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk update && apk upgrade

COPY . /usr/src/app/
RUN yarn

EXPOSE 3000

CMD [ "yarn", "dev" ]
