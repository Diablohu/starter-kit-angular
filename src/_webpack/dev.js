"use strict"

const webpack = require('webpack')
const path = require('path')

const browserList = [
    'last 2 versions'
]

let config = require('./_base.js')({
    browserList: browserList
})

// for (let i in config.entry) {
//     config.entry[i].unshift('webpack/hot/dev-server')
// }

// config.module.rules.some(rule => {
//     if (rule.test('test.js')) {
//         if (rule.use && rule.use.length && rule.use.push) {
//             rule.use.unshift({
//                 loader: 'ng-annotate-loader'
//             })
//         }else if( rule.loaders && rule.loaders.length && rule.loaders.push ){
//             rule.loaders.unshift('ng-annotate-loader')
//         }else if( rule.loader ){
//             rule.loader = 'ng-annotate-loader!' + rule.loader
//         }
//         return true
//     }

//     return false
// })

// config.devtool = 'source-map'
config.devServer = {
    // contentBase: path.join(__dirname, "app"),
    contentBase: 'app',
    publicPath: '/dist/'
}
// config.plugins = [
//     new webpack.HotModuleReplacementPlugin()
// ]

module.exports = config