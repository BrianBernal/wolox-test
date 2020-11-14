module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'linebreak-style': 0, // linebreak linux/windows
    'jsx-quotes': [
      'error',
      'prefer-single',
    ],
    'react/jsx-one-expression-per-line': [
      0,
      {
        allow: 'single-child',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [
          'src',
        ],
      },
    },
  },
};
