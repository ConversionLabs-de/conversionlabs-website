module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
        colors: {
            'blue': {  DEFAULT: '#ABC1F8',  '50': '#FFFFFF',  '100': '#F6F9FE',  '200': '#D1DDFB',  '300': '#ABC1F8',  '400': '#779BF4',  '500': '#4375EF',  '600': '#1350E7',  '700': '#0F3EB4',  '800': '#0B2C80',  '900': '#061A4C'},
            'yellow': {  DEFAULT: '#FFE200',  '50': '#FFF7B8',  '100': '#FFF5A3',  '200': '#FFF07A',  '300': '#FFEB52',  '400': '#FFE729',  '500': '#FFE200',  '600': '#C7B000',  '700': '#8F7F00',  '800': '#574D00',  '900': '#1F1B00'},
            'pink': {  DEFAULT: '#FFBDF2',  '50': '#FFFFFF',  '100': '#FFFFFF',  '200': '#FFE6FA',  '300': '#FFBDF2',  '400': '#FF85E7',  '500': '#FF4DDC',  '600': '#FF15D1',  '700': '#DC00B0',  '800': '#A40083',  '900': '#6B0056'},
            'wood': {  DEFAULT: '#F1EFE3',  '50': '#FFFFFF',  '100': '#FFFFFF',  '200': '#FFFFFE',  '300': '#F1EFE3',  '400': '#DEDABE',  '500': '#CCC498',  '600': '#B9AF73',  '700': '#A29751',  '800': '#7D743F',  '900': '#58512C'},
        },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
