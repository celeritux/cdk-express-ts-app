FROM node:alpine

ARG APP_PATH=/usr/src/www

RUN mkdir -p ${APP_PATH}
WORKDIR ${APP_PATH}
COPY . .
RUN npm install --production
CMD [ "node", "webpage.js" ]
