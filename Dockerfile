FROM node:20-alpine

WORKDIR /app

COPY . .

COPY package*.json ./
RUN npm install

RUN npm run lint
RUN npm run build

EXPOSE 3000

CMD ["npm","start"]