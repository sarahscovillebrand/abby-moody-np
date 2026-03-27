import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        linen:  '#EEF0E8',
        stone:  '#DCE4D8',
        sage: {
          light: '#C3D8BF',
          DEFAULT: '#7A9B7C',
          mid:   '#6A8B68',
        },
        slate: {
          DEFAULT: '#486858',
          deep:    '#2F4A3A',
        },
        clay: {
          light:   '#C9967E',
          DEFAULT: '#B07A5F',
          dark:    '#9A6A50',
        },
        text: {
          DEFAULT: '#2C3A30',
          mid:     '#526055',
          light:   '#7E9480',
        },
      },
      fontFamily: {
        serif: ['var(--font-crimson)', 'Georgia', 'serif'],
        sans:  ['Garet', 'DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
