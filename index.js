'use strict';

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    }
  },
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors"
  ],
  plugins: [
    "react",
    "import"
  ],
  rules: {
    'no-cond-assign': 2,
    'no-console': 1,
    'no-debugger': 1,
    'no-irregular-whitespace': 2,
    'no-unexpected-multiline': 2,
    'no-unsafe-negation': 2,
    'valid-jsdoc': [2, {
      requireParamDescription: false,
      requireReturn: false,
      prefer: {returns: 'return'},
    }],
    'curly': 2,
    'default-case': 2,
    'dot-notation': 2,
    'eqeqeq': 2,
    'guard-for-in': 2,
    'no-alert': 1,
    'no-caller': 2,
    'no-empty-function': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-global-assign': 2,
    'no-invalid-this': 2,
    'no-labels': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-void': 2,
    'no-warning-comments': 2,
    'no-with': 2,
    'radix': [2, "as-needed"],
    'no-shadow': 0,
    'no-undef': 2,
    'no-undefined': 2,
    'no-unused-vars': [2, {args: 'none'}],
    'no-use-before-define': 2,
    'array-bracket-spacing': [2, 'never'],
    'brace-style': 2,
    'camelcase': 2,
    'comma-dangle': [2, 'always-multiline'],
    'comma-spacing': 2,
    'comma-style': 2,
    'computed-property-spacing': 2,
    'consistent-this': 2,
    'eol-last': 2,
    'func-call-spacing': 2,
    'jsx-quotes': [2, 'prefer-double'],
    'key-spacing': 2,
    'keyword-spacing': 2,
    'linebreak-style': 0,
    'max-len': [2, {
      code: 120,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],
    'new-cap': 2,
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, {max: 2}],
    'no-new-object': 2,
    'no-trailing-spaces': 2,
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var': [2, {
      var: 'never',
      let: 'never',
      const: 'never',
    }],
    'operator-linebreak': [2, 'before'],
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'as-needed'],
    'quotes': [2, 'single', {allowTemplateLiterals: true}],
    'require-jsdoc': 0,
    'semi-spacing': 2,
    'semi': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'spaced-comment': [2, 'always'],
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': 2,
    'constructor-super': 2,
    'generator-star-spacing': [2, 'before'],
    'no-new-symbol': 2,
    'no-this-before-super': 2,
    'no-var': 2,
    'prefer-const': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'rest-spread-spacing': 2,
    'yield-star-spacing': [2, 'before'],
  },
};
