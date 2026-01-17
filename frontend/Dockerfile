# Use Node.js 20.9.0 as specified in package.json
FROM node:20.9.0-alpine as builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
ARG VITE_BACKEND_SERVER
ARG VITE_DEV_REMOTE
ENV VITE_BACKEND_SERVER=$VITE_BACKEND_SERVER
ENV VITE_DEV_REMOTE=$VITE_DEV_REMOTE
RUN npm run build -- --mode production

# Production stage
FROM nginx:alpine

# Copy built app to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]