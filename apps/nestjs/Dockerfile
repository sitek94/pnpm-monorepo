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
RUN pnpm build:nestjs
RUN pnpm deploy --filter=nestjs --prod /prod/nestjs

# Stage 3: Production
# Copy the built app and run it
FROM node:20-alpine AS production
COPY --from=build /prod/nestjs/node_modules /prod/nestjs/node_modules
COPY --from=build /prod/nestjs/build /prod/nestjs/build

WORKDIR /prod/nestjs

USER node

CMD [ "node", "build/main.js" ]

