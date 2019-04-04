# webpack-plugin-996icu

一个帮助前端开发者，拒绝 996，提高工作效率的 webpack 插件

## 使用

```bash
npm i webpack-plugin-996icu
```

```js
// webpack.config.js
const WebpackPlugin996ICU = require('webpack-plugin-996icu')

const config = {
  // other config options
  plugins: [
    new WebpackPlugin996ICU()
  ]
}
```