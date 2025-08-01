# ──────────────  RayPoint Mobile (Expo)  ──────────────
FROM node:20

# 2. Create app directory
WORKDIR /usr/src/app

# 3. Install JS dependencies
COPY package*.json ./
RUN npm install
RUN npm install -g @expo/ngrok

# 4. Copy the rest of the source
COPY . .

# 5. Expose Metro bundler port
EXPOSE 8081
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

# 6. Start Expo in tunnel mode so any device can connect
CMD [ "npx", "expo", "start", "--tunnel", "--non-interactive", "--clear" ]
