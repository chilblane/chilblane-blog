/** @type {import('stylelint').Config} */
export default {
  // The stylesheets are SCSS (Dart Sass via Hugo); without this parser
  // stylelint throws CssSyntaxError on @use, mixins, and // comments.
  customSyntax: 'postcss-scss',
  plugins: ['stylelint-plugin-defensive-css'],
  rules: {
    'plugin/use-defensive-css': [true, { severity: 'warning' }],
  },
};
