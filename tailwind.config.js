/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1C9FDA',
        'dark-blue-1': '#093549',
        'dark-blue-2': '#06202C',
        'gray-1': '#667085',
        'gray-2': '#475467',
        'gray-3': '#D4DFE4',
        'gray-4': '#EDEDED',
        'stroke-black': 'rgba(18, 18, 18, 0.12)',
        'off-white': '#F7F7F8',
      },
    },
  },
  plugins: [],
};
