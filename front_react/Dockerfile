

FROM node:13.14.0-alpine AS build_image

# couchbase sdk requirements
RUN apk update && apk add yarn curl bash python3 g++ make && rm -rf /var/cache/apk/*

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --no-optional
RUN npm i -g webpack \
    babel-cli
COPY . .


RUN npm run build

# remove development dependencies
RUN npm prune --production

# build application

FROM node:13.14.0-alpine

WORKDIR /usr/src/app

COPY --from=build_image /usr/src/app/package*.json ./
COPY --from=build_image /usr/src/app/dist ./dist
COPY --from=build_image /usr/src/app/build ./build
COPY --from=build_image /usr/src/app/node_modules ./node_modules
CMD ["npm", "start"]
