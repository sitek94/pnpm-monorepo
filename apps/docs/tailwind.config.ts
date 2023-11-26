import type { Config } from 'tailwindcss'
import sharedConfig from '@repo/tailwind-config/tailwind.config'

const config: Pick<Config, 'presets'> = {
  presets: [sharedConfig],
}

export default config
