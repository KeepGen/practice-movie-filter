const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
   content: [
      'index.html',
      './dist/assets/**/*.{html,js}',
      './src/**/*.{html,js}'
   ],
   theme: {
      screens: {
         'mobile': '360px', /* min-width: 360px */
         'tablet': '768px', /* min-width: 640px */
         'laptop': '1024px', /* min-width: 1024px */
         'desktop': '1280px', /* min-width: 1280px */
         'full': '1576px', /* min-width: 1576px */
      },
      extend: {
         colors: {
            'blue': '#1fb6ff',
            'purple': '#8B5CF6',
            'pink': '#ff49db',
            'orange': '#ef8009',
            'green': '#13ce66',
            'yellow': '#ffe32c',
            'grey-dark': '#273444',
            'grey': '#8492a6',
            'gray-light': '#d3dce6',
            'black': '#181818',
         },
         fontFamily: {
            satisfy: ['Satisfy', ...defaultTheme.fontFamily.sans],
            domine: ['Domine', ...defaultTheme.fontFamily.serif],
            rubik: ['Rubik Pixels', ...defaultTheme.fontFamily.serif],
         },
         spacing: {
            '8xl': '96rem',
            '9xl': '128rem',
         },
         borderRadius: {
            '4xl': '2rem',
         },
         dropShadow: {
            'purple-btn': [
               '10px 0 10px rgba(127, 17, 224, 0.20)',
               '-10px 0 10px rgba(127, 17, 224, 0.20)',
            ],
         }
      },
      container: {
         center: true,
         padding: {
            mobile: '12px',
            tablet: '24px',
            laptop: '48px',
            desktop:  '120px',
         },
      }
   }
}
