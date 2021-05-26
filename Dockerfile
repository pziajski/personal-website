FROM node:12
WORKDIR /app
COPY package.json tsconfig.json ./
RUN npm i -f
COPY . .
EXPOSE 3000
CMD ["npm", "start"]