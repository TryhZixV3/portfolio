import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#ffffff',
        fg: '#000000',
        muted: '#666666',
      },
    },
  },
  plugins: [],
}
export default config
