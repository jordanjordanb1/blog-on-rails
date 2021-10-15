const { webpackConfig, merge } = require('@rails/webpacker')
const aliases = require('./alias')

const commonOptions = {
  resolve: {
    extensions: ['.css', '.ts', '.tsx'],
  },
}

module.exports = merge({}, webpackConfig, aliases, commonOptions)
