module.exports = {
  content: ['./src/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter'
      },
      gridTemplateColumns: {
        navbar: '50% 50%',
        skills_row: '30% 30% 30% 30%',
        skills_row_mobile: '50% 50%',
        projs: '33% 33% 33%',
      },
      screens: {
        tablet: '800px',
        md1: '1070px',
        xl1: '1520px',
        mobile: {'max': '380px'}
      }
    }
  },
  plugins: []
}
