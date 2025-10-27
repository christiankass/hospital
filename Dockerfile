# Build image that installs dependencies and produces a zip with node_modules
FROM node:18-slim AS builder
WORKDIR /app

# Copy package files for caching
COPY package.json package-lock.json* ./
RUN npm ci --silent

# Copy project files
COPY . .

# Optional build (in case)
RUN npm run build --silent || true

# install zip utility and create zip with node_modules
RUN apt-get update && apt-get install -y zip &&     zip -r /hospital-management-installed.zip . -x node_modules/.cache/*

FROM scratch
COPY --from=builder /hospital-management-installed.zip /hospital-management-installed.zip
