/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*'],

  // Bundle UI lib, so that it's not necessary to include build step within the lib itself.
  serverDependenciesToBundle: ['@company/ui'],
  // Restart server when UI lib changes
  watchPaths: ['../../libs/ui/**/*'],
}
