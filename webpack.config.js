'use strict';

var webpack = require('webpack');
var path = require('path');

var fs = require('fs');
// 定义函数判断是否是在当前生产环境，这个很重要，一位开发环境和生产环境配置上有一些区别
var isProduction = function () {
  return process.env.NODE_ENV === 'production';
};



var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: APP_PATH,
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
   filename: "output.[hash].bundle.js",
   chunkFilename: "[id].[hash].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css','sass'],
        include: APP_PATH
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      }
    ]
  },
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello webpack app',    
      filename: 'index.html',
      template: path.join(__dirname, '/app/temp/index.html'),
      inject: 'body'
    })
  ]
};
