import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'lg+': { 'max': '1200px' },
      'lg': { 'max': '992px' },
      'md': { 'max': '768px' },
      'sm+': { 'max': '620px' },
      'sm': { 'max': '480px' },
      'mobil': { 'max': '376px' },
    },

    container: {
      padding: '20px',
      center: true
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      flex: {
        '10100': '1 0 100%'
      },
      colors: {
        'maincolor': '#69c7f7'
      }
    },
  },
  plugins: [],
}

export default config
