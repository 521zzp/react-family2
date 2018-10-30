const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const util = require('./webpack.config.util')

// 公共配置
const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
  mode: 'production',
  /*入口*/
  entry: [
    // 生产环境关闭热更新
    // 'react-hot-loader/patch',
    path.join(__dirname, 'src/index.js')
  ],

  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    // path: path.join(__dirname, './dist'),
    filename: '[name].[chunkhash:8].js',
    // chunkFilename: '[name].[chunkhash:8].js',
    //publicPath : '/'
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    //new webpack.NamedModulesPlugin(),
    // 生产环境关闭热更新
    // new webpack.HotModuleReplacementPlugin(),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: path.join(__dirname, 'src/index.html')
    // }),
    // 指定环境
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // 打包前清空dist
    new CleanWebpackPlugin(['dist/*']),
    // css抽取
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      //filename: "[name][chunkhash:8].css",
      //filename: path.posix.join('static', 'css/[name].[chunkhash:8].css'),
      filename: util.assetsPath('css/[name].[chunkhash:8].css'),
      chunkFilename: util.assetsPath('css/[name].[chunkhash:8].css')
    })

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
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
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
    // 抽取公共代码
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
    // },
    // webpack4 代码压缩
    minimizer: [
      // js压缩
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      // css压缩
      new OptimizeCSSAssetsPlugin({})
    ]
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
})(commonConfig, publicConfig)
