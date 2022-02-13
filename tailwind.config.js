module.exports = {
    content: [
        "./resources/**/*.{js,jsx,ts,tsx}",

    ],
  theme: {
    extend: {
        fontFamily : {
            'inter' : ['Inter','Regular']
        },
        colors : {
            'black-dark' : '#010414',
            'pink-dark' : '#EF1083',
            'gray-light' : '#BFC0C4',
            'gray-dark' : '#808189',
            'custom-green' : '#10EF7C',
            'custom-blue' : '#1013EF',
            'custom-red' : '#FA1B1B'
        },
        fontSize : {
            'large' : '25px'
        },
        padding : {
            '4.5' : '18px',
            '27' : '6.75rem',
            '42' : '10.25rem'
        },
        borderRadius : {
            '4xl' : '28px'
        }
    },
  },
  plugins: [],
}
