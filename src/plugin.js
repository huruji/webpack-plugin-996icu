const chalk = require('chalk')

const HOLIDAY_ERROR = 'webpack 拒绝在 周末 加班编译打包'
const MORNING_ERROR = 'webpack 拒绝在每天 9:00 之前加班编译打包'
const NIGHT_ERROR = 'webpack 拒绝在每天 18:00 之后加班编译打包'
const WEBPACK_ERROR = 'Some errors with webpack, our team is fixing now, please waiting'
const SLOGAN = '工作996，生病ICU。加班不规范，亲人两行泪。'
module.exports = class ICU {
  constructor(opts) {
    this.opts = Object.assign(opts, {
      focusWork: false,
      type: 'normal',
      message: '',
      holiday: false
    })
  }

  apply(compiler) {
    const {
      focusWork, type, message, holiday
    } = this.opts

    compiler.hooks.entryOption.tap('webpack-plugin-996icu', () => {
      if (focusWork) return

      let msg = ''
      const day = (new Date()).getDay()
      const hour = (new Date()).getHours()

      if (day > 4 || holiday) {
        msg = message || (type === 'webpack' ? WEBPACK_ERROR : `${HOLIDAY_ERROR}\n${SLOGAN}`)
      } else if (hour >= 18) {
        msg = message || (type === 'webpack' ? WEBPACK_ERROR : `${NIGHT_ERROR}\n${SLOGAN}`)
      } else if (hour < 9) {
        msg = message || (type === 'webpack' ? WEBPACK_ERROR : `${MORNING_ERROR}\n${SLOGAN}`)
      }

      if (msg) {
        chalk.red(msg)
        process.exit()
      }
    })
  }
}
