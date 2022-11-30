

// 引入css 资源
import "./assets/css/index.css"

import "./assets/less/index.less"

import "./assets/css/iconfont.css"


// import count from "./js/count.js"

document.getElementById("btn").onclick = function (){
    
    /// import动态导入：将动态导入的文件代码拆封成一个而单独的文件，在需要使用时单独加载
    // webpack chunk 魔法名
    import(/*webpackChunkName:"Math"*/"./js/count.js").then((res)=>{
        console.log(res.default(6,100));
    },err=>{
        console.log("fail import");
    })
}
