/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F7F3',
        softgrey: '#F1F2F4',
        navy: {
          950: '#0A1122',
          900: '#101B35', // Deep Executive Navy
          850: '#152345',
          800: '#1B2C56',
          700: '#263C70',
          100: '#E9ECF3',
          50: '#F4F6FA',
        },
        charcoal: {
          900: '#1A1E26',
          800: '#252A34', // Refined Charcoal Body
          600: '#4A5260',
          500: '#5A6474',
          400: '#848E9F',
          200: '#D5DAE3',
        },
        brand: {
          orange: '#FF8A00', // Signature Orange Accent
          amber: '#FFC400',  // Warm Gold/Amber Accent
          cyan: '#1FD2FF',   // Subtle Cyan Accent
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'corporate': '0 4px 20px -2px rgba(16, 27, 53, 0.06)',
        'corporate-lg': '0 12px 35px -4px rgba(16, 27, 53, 0.1)',
        'corporate-hover': '0 20px 40px -8px rgba(16, 27, 53, 0.14)',
      }
    },
  },
  plugins: [],
}
