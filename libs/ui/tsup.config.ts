import type { Options } from 'tsup'
import { defineConfig } from 'tsup'

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ['src/**/*.{ts,tsx}'],
  format: ['esm', 'cjs'],
  dts: true,
  minify: true,
  clean: true,
  external: ['react'],
  ...options,
}))
