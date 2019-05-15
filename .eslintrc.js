module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  // 'extends': 'standard',
  'extends': 'eslint:recommended',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', {'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always'}],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always']
  }
}
