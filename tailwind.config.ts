import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'oklch(0.145 0 0)',
        surface: 'oklch(0.175 0 0)',
        foreground: 'oklch(1 0 0)',
        'muted-foreground': 'oklch(0.72 0.005 270)',
        border: 'oklch(0.25 0 0)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
