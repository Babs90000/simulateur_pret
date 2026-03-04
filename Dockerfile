FROM cgr.dev/chainguard/node:latest AS build

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

FROM cgr.dev/chainguard/nginx:latest

COPY --from=build /app/dist /usr/share/nginx/html

RUN printf "server { listen 8080; location / { root /usr/share/nginx/html; index index.html; try_files $uri $uri/ /index.html; } server_tokens off; add_header X-Frame-Options SAMEORIGIN; add_header X-Content-Type-Options nosniff; }" > /etc/nginx/conf.d/default.conf

EXPOSE 8080