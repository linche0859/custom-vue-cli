const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // 合併 webpack.common.js 的設定
  mode: 'development',
  entry: {
    main: ['./src/index.js'],
  },
  devtool: 'source-map',
  plugins: [],
  output: {},
});
