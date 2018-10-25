const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  /*入口*/
  entry: [
    //path.join(__dirname, 'src/index.js')
    "@babel/polyfill",
  ],

  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    path: path.join(__dirname, './dist'),
    chunkFilename: '[name].[chunkhash:8].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
  ],
  module: {
    rules: [
      // 编译js, ES6, jsx
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
      },
      // 编译图片
      {
        test: /\.(png|jpg|jpeg|bpm|gif)$/,
        use:[
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  optimization: {
    // 抽取公共代码
    splitChunks:{
      //chunks: 'initial',
      //name: true,
      automaticNameDelimiter: '-',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors_zzp',
          chunks: 'all',
        }
      }
    },
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
