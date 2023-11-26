# Pnpm Monorepo

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
- [ ] research if it's worth using `turbo` - probably yes, to make it easier to run tasks that depend on each other
- [ ] create diagram
- [ ] setup renovate

## Deployments

<!--  table -->

| App              | URL                                   |
| ---------------- | ------------------------------------- |
| NestJS           | https://pnpm-monorepo-nestjs.fly.dev/ |
| Remix            | https://pnpm-monorepo-remix.fly.dev/  |
| Docs (Storybook) | fdasfsa                               |

## References

- https://pnpm.io/next/filtering
- https://github.com/remix-run/indie-stack/tree/main - remix app example
- https://github.com/sveltejs/kit/tree/master - svelte kit - pnpm monorepo
- https://github.com/nestjs/nest/tree/master/sample - nestjs samples
- https://fly.io/docs/reference/configuration/#the-processes-section - fly.io config
- https://github.com/vercel/turbo/tree/main/examples - turbo repo examples
- https://github.com/storybookjs/storybook
- https://storybook.js.org/tutorials/design-systems-for-developers/react/en/architecture/
-
