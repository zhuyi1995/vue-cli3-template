const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  runtimeCompiler: true,
  lintOnSave: true,
  transpileDependencies: [
    /\/node_modules\/vue-echarts\//,
    /\/node_modules\/resize-detector\//
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule("svg")
    svgRule.uses.clear()
    svgRule.use("svg-sprite-loader").loader("svg-sprite-loader")

    const vueRule = config.module.rule("vue")
    vueRule.uses.clear()
    vueRule
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        return options
      })

    config.plugin("html").tap(() => {
      return [
        {
          filename: "index.html",
          template: "public/index.html",
          inject: true,
          title: "cli3-template"
        }
      ]
    })
  },
  // gz压缩
  configureWebpack: () => {
    if (process.env.NODE_ENV == "production") {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css/,
            threshold: 10240,
            deleteOriginalAssets: false
          })
        ]
      }
    }
  },
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      sass: {
        data: `@import "@/styles/index.scss";`
      }
    },
    modules: false
  },
  parallel: require("os").cpus().length > 1,
  pwa: {},
  devServer: {
    open: true,
    host: "localhost",
    https: false,
    hot: true,
    proxy: {
      "/": {
        ws: false,
        target: "https://live-wcloud-cdn.ysp.cctv.cn/",
        changeOrigin: true
      }
    },
    overlay: {
      warnings: false,
      errors: true
    }
  },
  pluginOptions: {}
}
