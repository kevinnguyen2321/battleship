const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
console.log('Loading webpack.dev.js');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './src',
    open: true,
    hot: false,
  },
});
