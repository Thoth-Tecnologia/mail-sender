FROM node:alpine

WORKDIR /usr/app

ENV PATH /usr/app/node_modules/.bin:$PATH

COPY . /usr/app/package.json
RUN yarn

COPY . .

EXPOSE 9999

CMD ["yarn", "run", "dev"]