
// 引入css 资源
import "./assets/css/test.css"

import "./assets/less/index.less"

import "./assets/css/iconfont.css"



document.getElementById("btn").onclick = function () {

    /// import动态导入：将动态导入的文件代码拆封成一个而单独的文件，在需要使用时单独加载
    // webpack chunk 魔法名
    import(/*webpackChunkName:"Math"*/"./js/count.js").then((res) => {
        console.log(res.default(6, 100));
        console.log("14");
    }, err => {
        console.log("fail import");
    })
}

console.log("he is girl");

if (module.hot) {
    module.hot.accept("./js/count.js", () => {
        console.log("count change");
    })
}

new Promise((r,j)=>{
    r("ok")
}).then((data)=>{
    console.log(data);
})


// pwa
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("SW registered: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }