FROM node:latest AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install 

COPY . .
RUN npx nx build products --deploy-url /products/

FROM nginx:alpine

COPY --from=build ./app/dist/apps/products /usr/share/nginx/html
RUN sed -i '/types {/a \ \ \ \ application/x-javascript   mjs;' /etc/nginx/mime.types

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
