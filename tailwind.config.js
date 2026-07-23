/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        },
        accent: {
          50: '#fff8ff',
          100: '#fee9ff',
          200: '#f9d7ff',
          300: '#f0b8ff',
          400: '#e08aff',
          500: '#d35cff'
        }
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
        heading: ['Playfair Display', 'ui-serif', 'Georgia', 'Times New Roman', 'serif']
      },
      colors: Object.assign({}, {
        'primary-50': '#f5f9ff',
        'primary-100': '#e6f0ff',
        'primary-200': '#cfe0ff',
        'primary-400': '#5b8df7',
        primary: '#2563EB',
        'primary-700': '#1d4ed8',
        accent: '#d63fff',
        cyan: '#06b6d4',
        magenta: '#db2777'
      }),
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(16,24,40,0.08), 0 2px 6px rgba(16,24,40,0.04)'
      }
    },
  },
  plugins: [],
};
