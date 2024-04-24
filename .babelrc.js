const { plugins } = require('./.postcssrc');

module.exports = {
  presets : [
    '@babel/preset-env'
  ],
  plugins : [
    '@babel/plugin-transform-runtime'
  ]
};