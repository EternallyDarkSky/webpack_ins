
// CSS 封装减重
function getStyleLoader(MiNiCssExtractPlugin,others) {
    return [
        MiNiCssExtractPlugin.loader,
        "css-loader",
        {
            loader: "postcss-loader",
            options: {
                // css兼容智能预设
                postcssOptions: {
                    plugins: ["postcss-preset-env"], //能够解决大多数样式兼容性问题
                }
            }
        },
        others
    ].filter(Boolean)  // 自动过滤undefined
}
function CSSConfig(MiNiCssExtractPlugin) {
    return [// CSS+Less 样式解析
        {
            test: /\.css$/i,
            use: getStyleLoader(MiNiCssExtractPlugin),
        },
        {
            test: /\.less$/i,
            use: getStyleLoader(MiNiCssExtractPlugin,"less-loader"),
        }]
}

module.exports = CSSConfig