FROM node:alpine

WORKDIR /usr/app

ENV PATH /usr/app/node_modules/.bin:$PATH

COPY ./package.json /usr/app/package.json
RUN yarn

COPY . .

EXPOSE 11111

CMD ["yarn", "run", "dev"]