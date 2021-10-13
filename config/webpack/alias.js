const pathResolve = require('path').resolve

module.exports = {
  resolve: {
    alias: {
      '@/components': pathResolve(
        __dirname,
        '../..',
        'app/javascript/components'
      ),
    },
  },
}
