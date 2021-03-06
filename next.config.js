const withCSS = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')

module.exports = (
  {distDir: 'build'},
  withTypescript(),
  withCSS({
    cssLoaderOptions: {
      url: false
    }
  })
)