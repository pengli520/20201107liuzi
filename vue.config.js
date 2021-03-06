/*
 * @Author: your name
 * @Date: 2020-11-09 17:53:47
 * @LastEditTime: 2020-11-09 17:57:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \20201107liuzi\vue.config.js
 */

const webpack = require('webpack')
module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/': { //访问路径，可以自己设置，
                target: 'http://bbd.manlongdyf.com/', //代理接口，即后端运行所在的端口
                changeOrigin: true, //设置是否跨域
                ws: true,
                // pathRewrite: { //访问路径重写
                //     '^/activity/babao_dan/save': 'sss'
                // }
            }
        }
    }
}
