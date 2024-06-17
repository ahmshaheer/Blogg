# Use the official Node image to create the build artifacts.
# Use the latest Long Term Support (LTS) version of Node.js
FROM node:17-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json .

# Install the project dependencies
RUN npm install

COPY . .

EXPOSE 3000

# Start Nginx server
CMD ["npm", "start"]

