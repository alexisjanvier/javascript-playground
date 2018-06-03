FROM node:9-alpine

RUN apk update && apk add python g++ make && rm -rf /var/cache/apk/*

CMD ["yarn --version"]
