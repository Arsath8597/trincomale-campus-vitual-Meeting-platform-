/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(120deg, #2c3e50 0%, #fd746c 100%)',
        'custom-gradient1': 'linear-gradient(80deg, #2c3e50 10%, #fd746c 100%)',
        'card': 'radial-gradient(circle at 7.5% 24%, rgb(237, 161, 193) 0%, rgb(250, 178, 172) 25.5%, rgb(190, 228, 210) 62.3%, rgb(215, 248, 247) 93.8%);',
        "tx-color":"linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)"
      },
    },
  },
  plugins: [],
  backgroundImage:{
    
  }
}

