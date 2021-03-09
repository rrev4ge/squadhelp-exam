FROM node:14.16.0-alpine3.11

ENV NODE_ENV="production"

RUN mkdir ./server

RUN mkdir -p /var/www/html/images/

WORKDIR /server

COPY . .

RUN npm install

EXPOSE 5000

RUN npm run build

CMD node ./dist/index.js
