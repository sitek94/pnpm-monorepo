# Stage 1: Base
# Set up base Node.js environment and enable pnpm
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Stage 2: Build
# Install dependencies and build the app
FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm build:remix
RUN pnpm deploy --filter=remix --prod /prod/remix

# Stage 3: Production
# Copy the built app and run it
FROM node:20-alpine AS production

ENV NODE_ENV=production
ENV PORT=3333

WORKDIR /prod/remix

COPY --from=build /prod/remix/node_modules ./node_modules
COPY --from=build /prod/remix/build ./build
COPY --from=build /prod/remix/public ./public
COPY --from=build /prod/remix/package.json ./package.json

USER node

CMD [ "npm", "run", "start" ]

