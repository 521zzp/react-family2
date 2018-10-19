const path = require('path');
const webpack = require('webpack');


module.exports = {
  mode: 'development',
  /*入口*/
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.js')
  ],

  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  /*
  * 内置web服务器：
  * */
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 8000,
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, 'src')
    }]
  },
  /*
  * 文件路径优化
  * */
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },

};
