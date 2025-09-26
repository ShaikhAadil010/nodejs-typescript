# ------------------------
# 1. Base image for build
# ------------------------
FROM node:20 AS build

#Set working directory
WORKDIR/APP

# Copy package.json and package-lock.json (if exists)
COPY package*.json tsconfig.json ./
# Install all dependencies (dev included for build)
RUN npm install

# Copy source code
COPY . .

# Build TypeScript to dist/
RUN npm run build

# Install only production dependencies
RUN npm install --omit=dev

# Copy built JS files from build stage
COPY --from=build /app/dist ./dist
# Copy .env if needed (optional, you usually mount it in Jenkins/k8s)
# COPY .env .env
# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "dist/index.js"]