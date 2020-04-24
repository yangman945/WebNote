// 匿名自知型函数 (function(){})()
;(function(win){
 let doc = win.document //获取document对象
 let docEl = doc.documentElement //获取document的元素
 let metaEl = doc.querySelector('meta[name="viewport"]') //获取匹配指定选择器的第一个元素

 let dpr = 0
 let tid;

 let devicePixelRatio = win.devicePixelRatio // 设备像素比 DPR
 
 function refreshRem(){
    let width = docEl.getBoundingClientRect().width // 获取视口宽度
    console.log(width,"视口大小")
    var ua = navigator.userAgent.toLowerCase() //获取浏览器的信息转小写
    // 判断ua里如果没有 ipad.*yanxuan 执行（非ipad下执行）
    if (!/ipad.*yanxuan/.test(ua)) { 
        if (width / dpr > 750) {
            width = 750 * dpr
        }
    }
    var rem = width / 10;
    docEl.style.fontSize = rem + "px";
    // addEventListener(事件类型 resize调整大小 pageshow网页显示 ,回调函数,false冒泡传递 捕获传递)
    win.addEventListener("resize",
    function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300)
    },
    false);
    win.addEventListener("pageshow",
    function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300)
        }
    },
    false);
 }
 refreshRem()
})(window)