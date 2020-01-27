const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = options => {
  let outputDir = path.resolve(__dirname, 'dist')

  return {
    mode: options.mode,
    entry: {
      index: './src/index.ts'
    },
    output: {
      path: outputDir,
      filename: '[name].js',
      library: 'react-typed-components',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    optimization: options.optimization,
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader'
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          use: 'file-loader'
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                // inline files smaller than 10 kB
                limit: 10 * 1024,
                noquotes: true
              }
            }
          ]
        },
        {
          test: /\.(jpg|png|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                // inline files smaller than 10 kB
                limit: 10 * 1024
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  enabled: false
                  // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                  // Try enabling it in your environment by switching the config to:
                  // enabled: true,
                  // progressive: true,
                },
                gifsicle: {
                  interlaced: false
                },
                optipng: {
                  optimizationLevel: 7
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                }
              }
            }
          ]
        }
      ]
    },
    plugins: options.plugins.concat([
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
      new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true })
    ]),
    resolve: {
      ...(options.resolve && options.resolve),
      modules: ['node_modules', 'src'],
      extensions: ['.js', '.jsx', '.ts', '.tsx']
      // mainFields: ['browser', 'jsnext:main', 'main']
    },
    devtool: options.devtool,
    target: 'web',
    performance: options.performance || {},
    externals: ['react', 'react-dom', 'classnames', 'prop-types']
  }
}
