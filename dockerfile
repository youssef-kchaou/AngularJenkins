FROM node:20.15.0 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/tp-foyer-front /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

