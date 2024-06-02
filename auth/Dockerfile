FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm ci --only=production

EXPOSE 8000

CMD [ "node", "./auth/src/server.js" ]