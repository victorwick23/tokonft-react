module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'base' : ['RNS'],
        'nav' : ['OCR-B']
      },
      colors:{
        prime: '#2FEA91',
        purple : '#473FF4',
        dark : '#1C1B17',
        softDark : '#292C31',
        greygrad : '#43464C'
      },
      backgroundImage: {
        'background': "url('./assets/background.png')",
        'bg-detail-nft' : "url('./assets/background-detail.jpg')",
        'bg-front' : "url('./assets/front-stone.png')",
        'bg-galaxy' : "url('./assets/galaxy.png')",
        'bg-footer' : "url('./assets/footer.png')"
      },
      animation: {
        'heromove': 'heromove 11s infinite',
        'heromove-2': 'heromove 15s infinite',
        'heromove-3': 'heromove 7s infinite',
      },
      keyframes : {
        heromove :{
          '0%, 100%' : {transform : 'translateY(-6%)'},
          '50%' : {transform : 'translateY(0)'}
        }
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
