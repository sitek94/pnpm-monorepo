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
- [ ] run typecheck, lint, test and build in parallel
- [ ] setup tailwindcss in remix
- [ ] create shared ui lib
- [ ] setup Storybook in shared ui lib
- [ ] (?) build and deploy Storybook to fly.io
- [x] set unified path aliases for all apps and shared libs (done for `apps/`, because `libs/` probably don't need them anyway)
- [x] add unused imports plugin to eslint
- [ ] research if it's worth using `turbo`

## References

- https://pnpm.io/next/filtering
- https://github.com/remix-run/indie-stack/tree/main
- https://github.com/sveltejs/kit/tree/master
- https://github.com/nestjs/nest/tree/master/sample
- https://fly.io/docs/reference/configuration/#the-processes-section
