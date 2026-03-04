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
FROM cgr.dev/chainguard/nginx:latest

# On copie les fichiers buildés depuis l'étape précédente
COPY --from=build /app/dist /usr/share/nginx/html

# Copie explicite de l'index (évite les erreurs de permission)
COPY --from=build /app/dist/index.html /usr/share/nginx/html/index.html

# Port non-root requis par Chainguard
EXPOSE 8080