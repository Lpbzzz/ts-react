const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


const { ProgressPlugin } = webpack

const config = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename:'[name][contenthash:8].js',
    clean: true
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin()
  ],
  resolve:{
    extensions: ['.ts', '.js','.tsx','.jsx'],
    alias:{
      '@': path.resolve(__dirname, '../src')
    }
  },
  module:{
    rules:[
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test:/\.(png|jpg|gif|jpeg)$/,
        type: 'asset/resource'
      }
    ]
  },
  devServer:{
    static:{
      directory: path.join(__dirname, '../dist')
    },
    compress: true,
    port: 9000,
    open: true,
    hot: true
  }
}

module.exports = config