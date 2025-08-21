FROM node:22 AS builder

# Create app directory
WORKDIR /usr/src/app

# Copy package files and prisma schema
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install

# Generate prisma client
RUN npx prisma generate

# Copy all files
COPY . .

# Build the project
RUN npm run build


# --- Production stage ---
FROM node:22

WORKDIR /usr/src/app

# Copy only what's needed for production
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma

EXPOSE 3000

CMD npx prisma migrate deploy && node dist/main
