# ── Étape 1 : Build ──────────────────────────────────────────────
FROM cgr.dev/chainguard/node:latest AS build

WORKDIR /app

# On copie les dépendances en premier (optimise le cache Docker)
COPY package*.json ./

# Installation propre
RUN npm ci

# On copie le reste du code source
COPY . .

# On génère le dossier dist
RUN npm run build

# ── Étape 2 : Image de production ────────────────────────────────
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80