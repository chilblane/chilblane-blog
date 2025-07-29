/** @type {import('stylelint').Config} */
export default {
  plugins: ['stylelint-plugin-defensive-css'],
  rules: {
    'plugin/use-defensive-css': [true, { severity: 'warning' }],
  },
};
