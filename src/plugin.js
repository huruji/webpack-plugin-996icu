module.exports = class ICU {
  constructor(opts) {
    this.opts = this.opts
  }
  apply(compiler) {
    compiler.hooks.entryOption.tap('webpack-plugin-996icu', () => {
      console.error('996icu')
      process.exit()
    })
  }
}
