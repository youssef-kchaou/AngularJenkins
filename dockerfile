# Étape 1 : Utilisation de l'image officielle de Node.js pour construire l'application
FROM node:12.22.9 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --output-path=dist

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]