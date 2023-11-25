import aspectRatioPlugin from '@tailwindcss/aspect-ratio'
import containerQueriesPlugin from '@tailwindcss/container-queries'
import formsPlugin from '@tailwindcss/forms'
import typographyPlugin from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import tailwindColors from 'tailwindcss/colors'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: tailwindColors.zinc,
      },
    },
  },
  plugins: [
    typographyPlugin,
    formsPlugin,
    aspectRatioPlugin,
    containerQueriesPlugin,
  ],
} satisfies Config
