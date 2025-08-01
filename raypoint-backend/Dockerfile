# ──────────────  RayPoint Backend  ──────────────
FROM node:20-alpine

# 1. Create app directory
WORKDIR /usr/src/app

# 2. Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm install

# 3. Copy the rest of the source
COPY . .

# 4. Expose API port
EXPOSE 3001

# 5. Run in dev mode with nodemon (hot-reload)
CMD [ "npm", "run", "dev" ]
