import sharedConfig from '@repo/tailwind-config/tailwind.config'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [sharedConfig],
}

export default config
