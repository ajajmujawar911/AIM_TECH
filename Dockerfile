FROM node:latest

WORKDIR /node-aim

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000:3000

CMD ["node","app.js"]
