# Pnpm Monorepo

## TODO

- [x] move linters and shared packages to root
- [x] extend `tsconfig.json` from root based on app
- [ ] create Dockerfile for NestJS
- [ ] create Dockerfile for Remix
- [ ] update docker compose
- [ ] create CI workflow (lint + build only)
- [ ] create CI deployment workflow (Fly.io?)
- [ ] create shared ui lib
- [ ] setup Storybook in shared ui lib
- [x] set unified path aliases for all apps and shared libs (done for `apps/`, because `libs/` probably don't need them anyway)
