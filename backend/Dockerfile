FROM node:10.16.0

WORKDIR /app

RUN npm install @prisma/client

RUN prisma generate 

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]