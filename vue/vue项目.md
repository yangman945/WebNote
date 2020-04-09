##### vue项目处理开发环境下的跨域问题

```js
// 开发环境主要实现的是热更新,不要压缩代码，完整的sourceMap 
const Webpack = require('webpack') //热更新
const webpackConfig = require('./webpack.config.js') //引入公共文件配置
const WebpackMerge = require('webpack-merge') //合并配置
module.exports = WebpackMerge(webpackConfig,{
  mode: 'development',
  devtool:'cheap-module-eval-source-map',
  devServer:{
    port:3000,
    hot:true,
    contentBase:'../dist',
    proxy:{ // 利用代理实现
    '/v1':{
      target:"https://suggest-follow-api-ms.juejin.im",
      changeOrigin:true,
      pathRewrite:{
        '^/v1':'/v1'
        //这里理解成用面的地址，后面组件中我们掉接口时直接用/v1代替 比如我要调用 'http://425.0.100.100:8888/user/add'，
        //直接写‘ /v1 / user / add’ 即可
      }
    }
  }
  },
  plugins:[
    new Webpack.HotModuleReplacementPlugin()
  ]
})
```

