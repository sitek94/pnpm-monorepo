# Pnpm + Turbo Monorepo

## TODO

- [x] move linters and shared packages to root
- [x] extend `tsconfig.json` from root based on app
- [x] create simple Dockerfile for NestJS
- [x] create simple Dockerfile for Remix
- [x] update docker compose
- [x] create CI workflow (lint + build only)
- [x] add simple tests to CI workflow
- [x] manually deploy to fly.io
- [x] create CI deployment workflow to fly.io
- [x] improve CI deployment workflow to trigger only for changed apps
- [x] run typecheck, lint, test and build in parallel
- [x] setup tailwindcss in remix
- [x] create shared ui lib
- [x] setup Storybook in shared ui lib
- [x] build and deploy Storybook
- [x] set unified path aliases for all apps and shared libs (done for `apps/`, because `libs/` probably don't need them anyway)
- [x] add unused imports plugin to eslint
- [x] research if it's worth using `turbo` - probably yes, to make it easier to run tasks that depend on each other
- [x] use turbo repo and ensure the following works: lint, test, build, develop, gh actions
- [ ] use turbo prune options to build docker images
- [x] add some examples for ui lib (use tailwindcss + shadcn/ui)
- [ ] create diagram
- [ ] setup renovate

## Links

| App              | URL                                                             |
| ---------------- | --------------------------------------------------------------- |
| NestJS           | https://pnpm-monorepo-nestjs.fly.dev/                           |
| Remix            | https://pnpm-monorepo-remix.fly.dev/                            |
| Docs (Storybook) | https://6562c63f0bbf6184dd3b3f1e-aulbjawzef.chromatic.com       |
| MongoDB Project  | https://cloud.mongodb.com/v2/65616305afb5120f9b3a3536#/overview |
| Fly.io Dashboard | https://fly.io/apps/                                            |

## Getting started

### Pre-requisites

- [pnpm](https://pnpm.io/installation)
- [Docker](https://docs.docker.com/get-docker/)

### Install dependencies

```sh
pnpm install
```

### Database

If you want to use NestJS app, run MongoDB first.

```sh
docker compose up mongo
```

### Run NestJS app

```sh
pnpm develop:nestjs
```

### Run Remix app

Runs Remix app and all its build dependencies, e.g. `ui` lib. Whenever you make changes to `ui` lib, it will be automatically rebuilt and Remix app will be reloaded.

```sh
pnpm develop:remix
```

### Run Docs (Storybook)

```sh
pnpm develop:docs
```

## References

- https://pnpm.io/next/filtering
- https://github.com/remix-run/indie-stack/tree/main - remix app example
- https://github.com/sveltejs/kit/tree/master - svelte kit - pnpm monorepo
- https://github.com/nestjs/nest/tree/master/sample - nestjs samples
- https://docs.nestjs.com/cli/overview
- https://fly.io/docs/reference/configuration/#the-processes-section - fly.io config
- https://github.com/vercel/turbo/tree/main/examples - turbo repo examples
- https://github.com/storybookjs/storybook
- https://storybook.js.org/tutorials/design-systems-for-developers/react/en/architecture/
- https://turbo.build/repo/docs/getting-started/existing-monorepo
- https://github.com/vercel/style-guide/tree/canary
- https://ui.shadcn.com/docs
- https://tailwindcss.com/docs/installation
