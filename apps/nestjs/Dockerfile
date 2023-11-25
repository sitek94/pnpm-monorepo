FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm build:nestjs
RUN pnpm deploy --filter=nestjs --prod /prod/nestjs

FROM node:20-alpine
COPY --from=build /prod/nestjs/node_modules /prod/nestjs/node_modules
COPY --from=build /prod/nestjs/build /prod/nestjs/build

WORKDIR /prod/nestjs

CMD [ "node", "build/main.js" ]

