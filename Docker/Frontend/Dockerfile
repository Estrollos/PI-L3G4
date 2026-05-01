# ---------- Build stage ----------
FROM node:20-alpine AS build
WORKDIR /subsonic

# Install dependencies
COPY ./subsonic/package*.json ./
RUN npm ci

# Copy source and build
COPY ./subsonic ./
RUN npm run build -- --configuration production

# ---------- Runtime stage ----------
FROM nginx:alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular app
COPY --from=build ./subsonic/dist/subsonic/browser /usr/share/nginx/html

# Copy nginx config (for SPA routing)
COPY ./Docker/Frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]