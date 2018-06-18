module.exports = {
  'env': {
    'react-native/react-native': true,
    'node': true,
    'es6': true
  },
  'extends': ['eslint:recommended', 'plugin:react-native/all'],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2017,
    'ecmaFeatures': {
        'jsx': true,
        'experimentalObjectRestSpread': true
    },
    'sourceType': 'module'
  },
  'plugins': [
    'react-native'
  ],
  'rules': {
    'react-native/no-unused-styles': 1,
    'react-native/no-color-literals': 1,
    'react-native/no-inline-styles': 1,
    'indent': [
      'error',
      2
    ],
    'no-undef': [
        1
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-unused-vars':[
        0
    ],
    'no-console': [
        0
    ]
  }
};