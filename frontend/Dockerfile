# Frontend Dockerfile – Next.js tətbiqi
# Multi‑stage build: Node ilə build, sonra nginx ilə serve (sadə static export)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* .
RUN npm install
COPY . .
RUN npm run build

# Production image – using node to serve (can replace with nginx later)
FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json .
COPY --from=builder /app/next.config.js .
EXPOSE 3000
ENV NODE_ENV production
CMD ["npm","run","start"]
