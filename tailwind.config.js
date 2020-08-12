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
      'md-introdescription': '20px'
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
