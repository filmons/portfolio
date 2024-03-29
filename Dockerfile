FROM node:16-alpine as builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files

COPY . .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm install -f
# Build the app
RUN npm run build

# Bundle static assets with nginx

# Expose port
EXPOSE 3000
# Start nginx
CMD ["npm", "start"]
