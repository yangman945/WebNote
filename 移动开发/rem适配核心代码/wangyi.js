; (function(win,) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var dpr = 0;
    var scale = 0;
    var tid;
    if (metaEl) {
        console.warn("将根据已有的meta标签来设置缩放比例");
        var match = metaEl.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseInt(1 / scale)
        }
    } 
    if (!dpr && !scale) {
        var isAndroid = win.navigator.appVersion.match(/android/gi);
        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
                dpr = 3
            } else {
                if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
                    dpr = 2
                } else {
                    dpr = 1
                }
            }
        } else {
            dpr = 1
        }
        scale = 1 / dpr
    }
    docEl.setAttribute("data-dpr", dpr);
    if (!metaEl) {
        metaEl = doc.createElement("meta");
        metaEl.setAttribute("name", "viewport");
        if ( !! win.webPageScalable) {
            metaEl.setAttribute("content", "initial-scale=" + scale + ", user-scalable=yes")
        } else {
            metaEl.setAttribute("content", "initial-scale=" + scale + ", maximum-scale=" + scale + ", minimum-scale=" + scale + ", user-scalable=no viewport-fit=cover")
        }
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl)
        } else {
            var wrap = doc.createElement("div");
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML)
        }
    }
    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        var ua = navigator.userAgent.toLowerCase();
        if (!/ipad.*yanxuan/.test(ua)) {
            if (width / dpr > 750) {
                width = 750 * dpr
            }
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + "px";
        flexible.rem = win.rem = rem
    }
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
    if (doc.readyState === "complete") {
        doc.body.style.fontSize = 12 * dpr + "px"
    } else {
        doc.addEventListener("DOMContentLoaded",
        function(e) {
            doc.body.style.fontSize = 12 * dpr + "px"
        },
        false)
    }
    refreshRem();
})(window);