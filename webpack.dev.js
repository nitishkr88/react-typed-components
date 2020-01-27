/**
 * development mode webpack configuration
 */
module.exports = require('./webpack.base')({
  mode: 'development',
  plugins: [],

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

  resolve: {
    alias: {}
  },

  // emit a source map for easier debugging
  devtool: 'eval-source-map',

  performance: {
    hints: false
  }
})
