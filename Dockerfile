FROM node:18-alpine3.19 

WORKDIR /test/app

COPY package*.json .

RUN npm ci

COPY ./src ./src
COPY ./templates ./templates
COPY server.js .

EXPOSE 3300

CMD ["node","server.js"]
