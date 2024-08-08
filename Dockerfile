FROM node:18-alpine

WORKDIR /app

COPY src/ src/
COPY webpack/ webpack/
COPY .babelrc .babelrc
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY tsconfig.json tsconfig.json

RUN yarn install --frozen-lockfile

CMD [ "yarn", "start" ]
