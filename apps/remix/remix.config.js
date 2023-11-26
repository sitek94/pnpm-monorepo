/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*'],

  // Restart server when UI lib changes as described in this discussion:
  // https://github.com/remix-run/remix/pull/3188
  watchPaths: ['../../libs/ui/**/*'],
}
