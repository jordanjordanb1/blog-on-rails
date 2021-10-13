const { environment } = require('@rails/webpacker')
const aliases = require('./alias')

// Add aliases to webpack
environment.config.merge(aliases)

module.exports = environment
