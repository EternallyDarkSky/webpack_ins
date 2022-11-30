// 开发模式配置文件

// Null
const paths = require("path")
// CSS 减重封装
const CSSConfig = require("./cssconfig")
// 其他资源封装减重
const ORSConfig = require("./orsconfig")
// JS 减重封装
const JSConfig = require("./jsconfig")

// 获取cpu核心数量
const os = require("os")
const threads = os.cpus().length  // 8
// Null
const webpack = require('webpack')
// HTML 网页自动编译插件
const htmlwebpackplugin = require('html-webpack-plugin')
// JS 代码规范插件
const ESLintPlugin = require('eslint-webpack-plugin');
// Css 文件提取插件，替代style-loader的方案
const MiNiCssExtractPlugin = require("mini-css-extract-plugin")
// JS 多进程压缩
const TerserWebpackPlugin = require("terser-webpack-plugin")

// 代码分割 
const splitChunks =require('./splitchunk')
// preload|prefetch
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');

// common js 模块化
module.exports = {
    // 入口/出口配置
    entry: ["./src/main1.js", "./src/main2.js", "./src/main3.js"],
    output: {
        // JS 输出路径及文件名设置
        filename: "static/js/[name].[contenthash:8].js",
        // 开发模式没有输出  
        path: undefined,
        chunkFilename:"static/js/[name].[contenthash:8].chunk.js" , // 使用的就是webpack m魔法名
        // assetModuleFilename:""
    },

    module: {
        rules: [
            {
                oneOf: [
                    ...CSSConfig(MiNiCssExtractPlugin),
                    ...ORSConfig(),
                    JSConfig(threads)
                ]
            }
        ],
    },
    plugins: [
        // Null
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        // 网页自动编译
        new htmlwebpackplugin({
            template: "./public/index.html"
        }),
        // 重编译历史文件清除
            // new CleanWebpackPlugin(),
        //  JS 语法规范
            // 多线程编译 + cache 开启 + 文件排除
        new ESLintPlugin({
            context: paths.resolve(__dirname, '../src'),// 需要回退一层
            exclude: "node_modules",
            cache: true,									// 开启eslint 缓存   
            cacheLocation: paths.resolve(__dirname, "../node_modules/.cache/eslintcache"),
            threads,
        }),
        // CSS 文件提取
        new MiNiCssExtractPlugin({
            filename: "static/css/[name].[contenthash:8].css",
            chunkFilename:"static/css/[name].[contenthash:8].chunk.css"
        }),
        // preload|prefetch
        new PreloadWebpackPlugin({
            rel: 'prefetch',
        })
    ],
    // 压缩单独写出
        // JS 多进程压缩TreeShaking
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                parallel: threads
            })
        ],
        // splitCode
        splitChunks,
        // networkCache
        runtimeChunk:{
            name:entrypoint=>`runtime~${entrypoint.name}.js`
        }
    },
    
    // 开发服务器(仅开发模式使用)
    devServer: {
        host: "localhost",
        port: "3000",
        open: true,      //自动开启浏览器
        hot: true,       // 开启热模块更新
    },
    // 优化:快速排错
    devtool: "cheap-module-source-map", //开发模式推荐使用
    // 开发模式
    mode: "development",
    
    // Null
    performance: { hints: false },
}