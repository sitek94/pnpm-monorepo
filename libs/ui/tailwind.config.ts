import sharedConfig from '@repo/tailwind-config/tailwind.config'
import type { Config } from 'tailwindcss'

const config: Pick<Config, 'presets'> = {
  presets: [sharedConfig],
}

export default config
