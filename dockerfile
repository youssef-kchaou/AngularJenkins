# Étape 1 : Construction de l'application Angular
FROM node:20.9.0 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --output-path=../dist  

# Étape 2 : Configuration de Nginx
FROM nginx:alpine
COPY --from=build /dist /usr/share/nginx/html  
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
