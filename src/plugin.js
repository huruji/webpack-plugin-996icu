const chalk = require('chalk')

module.exports = class ICU {
  constructor(opts) {
    this.opts = opts
  }

  /* eslint-disable */
  apply(compiler) {
    compiler.hooks.entryOption.tap('webpack-plugin-996icu', () => {
      let msg = ''
      const day = (new Date()).getDay()
      const hour = (new Date()).getHours()

      if (day > 4) {
        msg = 'webpack 拒绝在 周末 加班编译打包'
      } else if (hour >= 18) {
        msg = 'webpack 拒绝在每天 18:00 之后加班编译打包'
      } else if (hour < 9) {
        msg = 'webpack 拒绝在每天 9:00 之前加班编译打包'
      }

      if (msg) {
        chalk.red(msg)
        process.exit()
      }
    })
  }
}
