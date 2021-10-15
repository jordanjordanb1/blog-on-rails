process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')
const { merge } = require('@rails/webpacker')
const pathResolve = require('path').resolve
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const development = {
  plugins: [
    new ForkTSCheckerWebpackPlugin({
      typescript: {
        configFile: pathResolve(__dirname, '../../tsconfig.json'),
      },
      async: false,
    }),
  ],
}

module.exports = merge({}, environment, development)
