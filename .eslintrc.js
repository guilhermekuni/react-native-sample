module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-filename-extension': [
      'warn', {
        extensions: ['.jsx', '.js'],
      }
    ],
    'import/prefer-default-export': 'off',
    'react/sort-comp': 'off',
    'react/static-property-placement': 'off',
    'camelcase': 'off',
  },
};
