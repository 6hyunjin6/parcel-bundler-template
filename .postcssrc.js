// common.js -> node.js
const autoprefixer = require('autoprefixer');
const { plugin } = require('postcss');
module.exports = {
  plugins : [
    autoprefixer
  ]
};
// esm -> javascript(vanila)
// import auto from 'autoprefixer';
// export {
//   plugins : [
//     auto
//   ]
// };