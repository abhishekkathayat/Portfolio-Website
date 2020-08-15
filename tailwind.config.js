module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    fontSize: {
      'base-introname': '14px',
      'md-introname': '15px',
      'lg-introname': '16px',
      'base-introhead': '2.5rem',
      'sm-introhead': '3.125rem',
      'md-introhead': '3.75rem',
      'lg-introhead': '4.375rem',
      'xl-introhead': '5rem',
      'base-introdescription': '18px',
      'md-introdescription': '20px',
      'sm-sectionindex': '18px',
      'md-sectionindex': '20px',
      'sm-sectionheadings': '24px',
      'md-sectionheadings': '30px',
      'sm-contentsize': '18px',
      'md-contentsize': '20px',
      'sm-getintouchindex': '14px',
      'md-getintouchindex': '16px',
      'sm-getintouchheader': '40px',
      'md-getintouchheader': '50px',
      'lg-getintouchheader': '60px'
    },
    extend: {
      lineHeight: {
        'extra-tight': '1.1'
      }
    }
  },
  variants: {},
  plugins: [],
}
