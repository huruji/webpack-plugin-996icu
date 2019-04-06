<p>
<img src="./logo.png" width="500"/>
<p>

一个帮助前端开发者，拒绝 996，提高工作效率的 webpack 插件



## 使用

```bash
npm i webpack-plugin-nns-icu -D
```

> nns 为 996 英文首字母缩写

```js
// webpack.config.js
const WebpackPlugin996ICU = require('webpack-plugin-nns-icu')

const config = {
  // other config options
  plugins: [
    new WebpackPlugin996ICU()
  ]
}
```

