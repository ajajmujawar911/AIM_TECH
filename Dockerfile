FROM node:23-alpine.20

WORKDIR /node-aim

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]