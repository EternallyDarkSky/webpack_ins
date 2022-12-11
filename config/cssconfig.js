
// CSS 封装减重
function getStyleLoader(MiNiCssExtractPlugin,others) {
    return [
        // MiNiCssExtractPlugin.loader,
        "style-loader",
        {
            loader:"css-loader",
            options:{
                importLoaders:1
            }
        },
        "postcss-loader",
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