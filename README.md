# Pnpm Monorepo

## TODO

- [x] move linters and shared packages to root
- [x] extend `tsconfig.json` from root based on app
- [x] create simple Dockerfile for NestJS
- [x] create simple Dockerfile for Remix
- [x] update docker compose
- [x] create CI workflow (lint + build only)
- [x] add simple tests to CI workflow
- [x] manually deploy to Fly.io
- [ ] create CI deployment workflow to Fly.io
- [ ] improve CI deployment workflow to trigger only for changed apps
- [ ] create shared ui lib
- [ ] setup Storybook in shared ui lib
- [x] set unified path aliases for all apps and shared libs (done for `apps/`, because `libs/` probably don't need them anyway)
