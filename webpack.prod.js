/**
 * production mode webpack configuration
 */

const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = require('./webpack.base')({
  mode: 'production',
  // emit a source map for easier debugging
  devtool: 'source-map',

  tsLoaders: [
    // Babel also have typescript transpiler. Uncomment this if you prefer and comment-out ts-loader
    // { loader: 'babel-loader' },
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true, // fork-ts-checker-webpack-plugin is used for type checking
        logLevel: 'info'
      }
    }
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            comparisons: false
          },
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true
          }
        },
        parallel: true,
        cache: true,
        sourceMap: true
      })
    ],
    nodeEnv: 'production',
    sideEffects: true,
    concatenateModules: true
  },

  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],

  performance: {
    assetFilter: assetFilename =>
      !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)
  }
})
