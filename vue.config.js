module.exports = {
  publicPath: '/botan-1st-anniversary/',
  chainWebpack: config => {
    config.module
      .rule('csv')
      .test(/\.csv$/)
      .use('csv-loader')
      .loader('csv-loader')
      .options({
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true
      })
      .end()
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Shishiro Botan 1st Anniversary'
        args[0].description = 'Congratulations for Botan\'s 1st anniversary!!'
        args[0].image = 'https://raywarthog.github.io/botan-1st-anniversary/cover.jpg'
        return args
      })
  }
}
