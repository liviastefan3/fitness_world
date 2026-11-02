# Imagine oficială de Node.js compactă
FROM node:20-alpine

# Setează folderul de lucru în container
WORKDIR /app

# Copiază fișierele de configurare pentru dependențe
COPY package*.json ./

# Instalează dependențele de producție
RUN npm install --omit=dev

# Copiază restul codului în container
COPY . .

# Expune portul 8080 (standard GCP Cloud Run)
EXPOSE 8080

# Comanda de start
CMD ["node", "server.js"]