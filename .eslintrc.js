module.exports = {
  env: {
    browser: true
  },
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  plugins: ['prettier', 'react'],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    impliedStrict: true,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    semi: 'error'
  }
};
