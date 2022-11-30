
function ImageMinimizer(ImageMinimizerPlugin){
    // 图片压缩
    return new ImageMinimizerPlugin({
        minimizer: {
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
                // 无损压缩配置
                plugins: [
                    ['gifsicle', { interlaced: true }],
                    ['jpegtran', { progressive: true }],
                    ['optipng', { optimizationLevel: 5 }],
                    ['svgo', {
                        plugins: [
                            "preset-default",
                            "prefixIds",
                            {
                                name: 'sortAttrs',
                                params: {
                                    xmlnsOrder: "alphabetical"
                                }
                            }
                        ]
                    }]
                ]
            }
        }
    })
}


module.exports = ImageMinimizer