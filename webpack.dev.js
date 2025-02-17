const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.config')

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 5500, 
        hot: true,
        open: true,
    }
})