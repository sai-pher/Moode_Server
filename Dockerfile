# Use node as the base image
FROM node:current as builder

# Define how verbose should npm install be
ARG NPM_LOG_LEVEL=silent
# Hide Open Collective message from install logs
ENV OPENCOLLECTIVE_HIDE=1
# Hiden NPM security message from install logs
ENV NPM_CONFIG_AUDIT=false
# Hide NPM funding message from install logs
ENV NPM_CONFIG_FUND=false

# Add python dependancy
# RUN apt-get install g++ gcc make python3

# Update npm to version 7
RUN npm i -g npm@8.7.0

# Set the working directory
WORKDIR /app

# Copy files specifying dependencies
COPY package.json package-lock.json ./
COPY .env ./

# COPY admin-ui/package.json admin-ui/package-lock.json ./admin-ui/

# Install dependencies
RUN npm i --loglevel=$NPM_LOG_LEVEL;
# RUN cd admin-ui; npm ci --loglevel=$NPM_LOG_LEVEL;

# Copy Prisma schema
COPY prisma/schema.prisma ./prisma/

# Generate Prisma client
RUN npm run prisma:generate;

# Generate Prisma client
# RUN cd server; npm run db:init;

# Copy all the files
COPY . .

# Build code
RUN set -e; (npm run build)

# Expose the port the server listens to
EXPOSE 3000

# Make server to serve admin built files
# ENV SERVE_STATIC_ROOT_PATH=admin-ui/build

# Run server
CMD [ "node", "dist/main"]
