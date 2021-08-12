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
        args[0].title = '獅白ぼたん一周年記念プロジェクト Shishiro Botan 1st Anniversary Celebration Project'
        args[0].description = 'ししろん一周年おめでとう！！！！！'
        args[0].image = 'https://raywarthog.github.io/botan-1st-anniversary/cover.png'
        return args
      })
  }
}
