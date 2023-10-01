export default{
  content: [
    './**/*.jsx',
    './index.html'
  ],
  theme: {
    screens: {
      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        work: ['Work Sans', 'sans'],
        Merri: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}

