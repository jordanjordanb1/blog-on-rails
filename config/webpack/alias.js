const pathResolve = require('path').resolve

module.exports = {
  resolve: {
    alias: {
      '@/components': pathResolve(
        __dirname,
        '../..',
        'app/javascript/components'
      ),
      '@/hooks': pathResolve(__dirname, '../..', 'app/javascript/hooks'),
      '@axios': pathResolve(__dirname, '../../app/javascript/setup/axios'),
    },
  },
}
