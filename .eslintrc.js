module.exports = {
  env: {
    browser: true,
    es2021: true,
    webextensions: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:json/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'json',
  ],
  rules: {
    'max-len': ['error', { code: 120 }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'webpack/*.js',
      ],
      optionalDependencies: true,
      peerDependencies: true,
    }],
  },
};
