/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'sm' : '640px',
      'md' : '769px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1440px',
    },
    backgroundColor: {
      'Soft-Blue': 'hsl(231, 69%, 60%)',
      'Soft-Red': 'hsl(0, 94%, 66%)',
      'Grayish-Blue': 'hsl(229, 8%, 60%)',
      'Very-Dark-Blue': 'hsl(229, 31%, 21%)',
      'White': 'hsl(229, 31%, 100%)',
    },
    backgroundImage: {
      'Hero-illustration': "url('./images/illustration-hero.svg')",
      'Illustration-features-tab-1': "url('./images/illustration-features-tab-1.svg')",
      'Illustration-features-tab-2': "url('./images/illustration-features-tab-2.svg')",
      'Illustration-features-tab-3': "url('./images/illustration-features-tab-3.svg')",
      'Illustration-features-tab-3': "url('./images/illustration-features-tab-3.svg')",
    },
    extend: {
      colors: {
        'Soft-Blue': 'hsl(231, 69%, 60%)',
        'Soft-Red': 'hsl(0, 94%, 66%)',
        'Grayish-Blue': 'hsl(229, 8%, 60%)',
        'Very-Dark-Blue': 'hsl(229, 31%, 21%)',
        'A-text': 'hsl(228, 45%, 44%)'
      },
      boxShadow: {
        'lg': '0px 2px 3px 2px rgba(0, 0, 0, .2)'
      },
      gridTemplateColumns: {
        'feature-col': 'repeat(3, minmax(100%, 1fr))',
      }
    },
  },
  plugins: [],
}

