FROM node:23-alpine AS base
ENV CI=true
RUN corepack enable

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile --dangerously-allow-all-builds

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

FROM node:23-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 astro

COPY --from=builder /app/public ./public
COPY --from=builder --chown=astro:nodejs /app/dist ./

USER astro
EXPOSE 4321
ENV PORT=4321
ENV HOSTNAME="0.0.0.0"

CMD [ "node", "server/entry.mjs" ]
