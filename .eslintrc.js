module.exports = {
  'env': {
    'react-native/react-native': true,
    'node': true,
    'es6': true
  },
  'extends': ['eslint:recommended', 'plugin:react-native/all'],
  'parserOptions': {
    'ecmaVersion': 2017,
    "ecmaFeatures": {
        'jsx': true,
        "experimentalObjectRestSpread": true
    },
    'sourceType': 'module'
  },
  'plugins': [
    'react-native'
  ],
  'rules': {
    'react-native/no-unused-styles': 2,
    'react-native/no-color-literals': 2,
    'indent': [
      'error',
      2
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
        1
    ],
    'no-console': [
        0,
        // 'always'
    ]
  }
};