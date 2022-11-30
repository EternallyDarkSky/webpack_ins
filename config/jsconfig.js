const paths = require("path")
function JSConfig(threads) {
    return {
        test: /\.js$/,
        // exclude:/node_modules/,
        
        // 排除的解析目录
        include: paths.resolve(__dirname, "../src"),
        use: [
            // JS多线程编译
            {
                loader: "thread-loader",
                options: {
                    works: threads
                }
            },
            // Babel cahce + Babel辅助代码插入变引用
            {
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,    // 开启babel 缓存
                    cacheCompression: false, // 关闭缓存文件压缩
                    plugins: ["@babel/plugin-transform-runtime"],// 减少代码体积 TreeShaking
                }
            }
        ]
    }
}
module.exports = JSConfig