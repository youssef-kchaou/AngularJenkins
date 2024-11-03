# Étape 1 : Utilisation de l'image officielle de Node.js pour construire l'application
FROM node:18 AS build

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Copie des fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du code source dans le conteneur
COPY . .

# Construction de l'application Angular
RUN npm run build -- --output-path=dist

# Étape 2 : Utilisation d'une image NGINX pour servir l'application
FROM nginx:alpine

# Copie des fichiers construits dans le répertoire nginx pour le servir
COPY --from=build /app/dist /usr/share/nginx/html

# Exposition du port 80 pour l'accès HTTP
EXPOSE 80

# Lancement de NGINX en mode non-bloquant
CMD ["nginx", "-g", "daemon off;"]
