const path = require('path');

process.env.BABEL_ENV = 'production';

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'drizzle.js',
    library: 'drizzle',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [{
      test: /\.(js)$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
      options: {
        presets: ['env'],
        plugins: [
          require('babel-plugin-transform-runtime'),
          require('babel-plugin-transform-es2015-arrow-functions'),
          require('babel-plugin-transform-object-rest-spread'),
          require('babel-plugin-syntax-async-functions')
        ]
      }
    }]
  },
  externals: {
    'eth-block-tracker': 'eth-block-tracker-es5',
    'redux': 'redux',
    'redux-saga': 'redux-saga',
    'web3': 'web3'
  }
};
