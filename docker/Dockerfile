FROM node:alpine

WORKDIR /usr/app

ENV PATH /usr/app/node_modules/.bin:$PATH

COPY ./../app/package.json /usr/app/package.json
RUN yarn

COPY ./../app/ .

EXPOSE 9999

CMD ["yarn", "run", "dev"]