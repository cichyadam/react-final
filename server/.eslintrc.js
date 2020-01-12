module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "indent":["error", 4],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-console": "off",
  },
};
