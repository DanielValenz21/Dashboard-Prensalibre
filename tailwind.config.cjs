/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-night': '#001D39',
        'navy-wave' : '#0A4174',
        'steel-sky' : '#49769F',
        'teal-sea'  : '#4E8EA2',
        'drift-foam': '#6EA2B3',
        'ice-blue'  : '#7BBDE8',
        'cloud-mist': '#BDD8E9'
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
      }
    }
  },
  plugins: []
}; 