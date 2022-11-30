module.exports = {
    presets:[
        // "@babel/preset-env"
         [
            //" 指定环境插件"
            "@babel/preset-env",
            // 配置信息
            {
                // // 指定要兼容的浏览去
                // targets: {
                //     // 浏览器的型号：浏览器版本 【兼容带chrome 的88版本】
                //     "chrome":"80" ,
                //     'ie':"12",
                // },
                // 对老版本提供特殊功能，如Promise
                "corejs":"3" ,     // 指定刚才下载的core-js 版本
                // 使用corejs 的方式: useage=按需加载 , 
                "useBuiltIns": "usage" , 
            }
        ]
    ]
}