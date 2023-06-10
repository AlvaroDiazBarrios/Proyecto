# Etapa de construcción
FROM node:14 AS builder
WORKDIR /app

# Copiar archivos de configuración y dependencias de la aplicación
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copiar el código fuente de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Configurar Nginx para redirigir todas las solicitudes a index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos generados por la compilación de React
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
