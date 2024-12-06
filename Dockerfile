FROM node:18-alpine

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

ENV NUXT_PORT=3000

EXPOSE 3000

CMD ["npm", "run", "start"]