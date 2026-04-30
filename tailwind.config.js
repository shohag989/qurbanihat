/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#013023', // Deep Forest Green from logo
        accent: '#d4af37', // Golden amber
        cream: '#faf8f3', // Light cream background
        charcoal: '#013023', // Matching primary for text consistency
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        soft: '0 4px 15px rgba(0, 0, 0, 0.08)',
        'soft-md': '0 8px 25px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
