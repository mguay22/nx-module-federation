FROM node:latest AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install 

COPY . .
RUN npx nx build store

FROM nginx:alpine

COPY --from=build ./app/dist/apps/store /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
