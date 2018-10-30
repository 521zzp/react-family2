const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
  mode: 'development',
  /*入口*/
  entry: [
    path.join(__dirname, 'src/index.js')
  ],

  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    // path: path.join(__dirname, './dist'),
    filename: '[name].[hash:8].js',
    // chunkFilename: '[name].[chunkhash:8].js'
  },
  devtool: 'inline-source-map',
  /*
  * 内置web服务器：
  * */
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    port: 8001,
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: path.join(__dirname, 'src/index.html')
    // })
  ],
  module: {
    rules: [
      // 编译js, ES6, jsx
      // {
      //   test: /\.js$/,
      //   use: ['babel-loader?cacheDirectory=true'],
      //   include: path.join(__dirname, 'src')
      // },
      // 编译CSS
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[local]-[hash:base64:5]',
          'postcss-loader'
        ]
      },
      // 编译图片
      // {
      //   test: /\.(png|jpg|jpeg|bpm|gif)$/,
      //   use:[
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192
      //       }
      //     }
      //   ]
      // }
    ]
  },
  optimization: {
    // splitChunks:{
    //   //chunks: 'initial',
    //   //name: true,
    //   automaticNameDelimiter: '-',
    //   cacheGroups: {
    //     commons: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors_zzp',
    //       chunks: 'all',
    //     }
    //   }
    // }
  },
  /*
  * 文件路径优化
  * */
  // resolve: {
  //   alias: {
  //     '@': path.join(__dirname, 'src')
  //   }
  // },

};

module.exports = merge({
  customizeArray(a, b, key) {
    /*entry.app不合并，全替换*/
    /*if (key === 'entry') {
      return b;
    }*/
    return undefined;
  }
})(commonConfig, devConfig)

