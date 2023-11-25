# Pnpm Monorepo

## TODO

- [x] move linters and shared packages to root
- [x] extend `tsconfig.json` from root based on app
- [x] create simple Dockerfile for NestJS
  - Pnpm docs: https://pnpm.io/docker
  - use pnpm deploy
  - make sure to copy from root tsconfig package.json etc
- [ ] create simple Dockerfile for Remix
- [ ] update docker compose
- [x] create CI workflow (lint + build only)
- [ ] add simple tests to CI workflow
- [ ] create CI deployment workflow (Fly.io?)
- [ ] create shared ui lib
- [ ] setup Storybook in shared ui lib
- [x] set unified path aliases for all apps and shared libs (done for `apps/`, because `libs/` probably don't need them anyway)
