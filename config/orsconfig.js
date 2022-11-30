


function ORSConfig (relativePath="static",keepnum=6){
    const filename_ = `[hash:${keepnum}][ext][query]`
    return [
        {
            test: /\.(jpg|jpe?g|gif|webp)$/,
            type: "asset",
            parser: {
                // 小图片使用base64
                dataUrlCondition: {
                    maxSize: 50 * 1024  // 50kB
                }
            },
            generator: {
                // 输出图片名称和位置
                filename: relativePath+`/imgs/`+filename_
            }
        },
        {
            test: /\.(ttf|woff2?)$/,
            type: "asset/resource",
            generator: {
                filename: relativePath+`/fonts/`+filename_
            }
        },
        {
            test: /\.(mp3|mp4|avi)$/,
            type: "asset/resource",
            generator: {
                filename: relativePath+`/meida/`+filename_
            }
        }
    ]
}

module.exports = ORSConfig