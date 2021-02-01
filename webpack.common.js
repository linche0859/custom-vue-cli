const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {},
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name].bundle.js', // 根據 entry 的 key name 決定 name
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: '$color: blue;',
            },
          },
        ],
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: (
          file // 排除 node_modules 中非 .vue 檔
        ) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: '3',
                modules: false,
              },
            ],
          ],
          plugins: [
            [
              '@babel/plugin-transform-runtime',
              {
                corejs: '3',
              },
            ],
          ],
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
        use: {
          // file-loader 的輸入是依照程式碼裡的檔案路徑，找到相對應的檔案之後，輸出成 webpack config 指定的位置與檔名格式
          // url-loader works like file-loader, but can return a DataURL if the file is smaller than a byte limit
          loader: 'url-loader',
          options: {
            // limit: 1000, // 1000 bytes 以下壓縮
            name: '[hash:7].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Custom Vue Cli',
      // 輸出的檔案名稱
      filename: 'index.html',
      template: '../public/index.html',
    }),
  ],
};
