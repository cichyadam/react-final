module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "indent":["error", 4],
    "react/jsx-indent":["error", 4],
    "react/jsx-indent-props":["error",4],
    "react/jsx-filename-extension":[1,{"extensions":[".js",".jsx"]}],
    "react/prop-types": 0,
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-console": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/button-has-type": "off",
    "react/no-array-index-key": "off",
  },
};
