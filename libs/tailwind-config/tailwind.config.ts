import typographyPlugin from '@tailwindcss/typography'
import formsPlugin from '@tailwindcss/forms'
import type { Config } from 'tailwindcss'

import tailwindColors from 'tailwindcss/colors'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: tailwindColors.zinc,
      },
      backgroundImage: {
        'glow-conic':
          'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
      },
    },
  },
  plugins: [typographyPlugin, formsPlugin],
} satisfies Config
