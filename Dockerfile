# Use an official Node.js runtime as a parent image for building your React app
FROM node:14-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your React app source code into the container
COPY . .

# Build the React app for production
RUN npm run build

# Use an official Nginx runtime as a parent image to serve the built React app
FROM nginx:alpine

# Copy the built React app from the previous stage into the Nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default Nginx port (usually 80)
EXPOSE 80

# The Nginx container will start serving your React app automatically
