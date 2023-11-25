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

FROM base
COPY --from=build /prod/nestjs /prod/nestjs
WORKDIR /prod/nestjs
EXPOSE 3000
CMD [ "pnpm", "start" ]

