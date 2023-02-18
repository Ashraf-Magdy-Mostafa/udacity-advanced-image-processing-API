module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jasmine: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 2,
    '@typescript-eslint/no-var-requires': 0,
    'require-yield': 0,
  },
};
