module.exports = {
    
    "extends": "eslint:recommended",
    env:{
        node:true ,   // 启动node全局变量
        browser:true, // 启用浏览器全局变量
    },
    "parserOptions":{
        "sourceType": "module",
        "ecmaVersion": 6,
        "allowImportExportEverywhere": true
    },
    rules:{
        "no-var":2 ,    // 禁止使用var 变量
    }
    
}