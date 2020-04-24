window.onload = function(){
    // 1实现序号轮播
    // 1.1获取轮播框架
    let ul = this.document.getElementById('imgList')
    // 1.2获取小圆点 数组形式保存
    let circles = this.document.querySelectorAll('.list > i')
    // 1.3定义一个变量 保存轮播图片宽度
    let imgList = ul.children[0].offsetWidth
    circles.forEach((item,index)=>{
        //  1.4item为i元素 给序号注册鼠标移入事件 
        item.onmouseover = function(){
            // 1.5计算出ul(图片)应该出在的位置
            // ul = 图片宽度 * 对应索引 *-1（-1为方向）
            let targetWidth = imgList * index *- 1
            // 1.6设置给ul样式 利用position的left移动
            ul.style.left = targetWidth +'px'
            // 1.7给小圆点设置样式，使其与图片对应
            circles.forEach(e=>{
                e.classList.remove('current')
            })
            this.classList.add('current')
        }
    })
    // 2实现序号轮播
    // 2.1默认当前的轮播为第0张
    let currentIndex = 0
    // 2.2 默认从右轮播轮播
    function moveRight(){
        if(currentIndex === ul.children.length - 1){
            // 当前为最后一张时让其回到第一张
            currentIndex = 0
        }else{
            currentIndex++
        }
        // 2.3处理ul位置
        let targetWidth = imgList * currentIndex *- 1
        ul.style.left = targetWidth +'px'
        circles.forEach(e=>{
            e.classList.remove('current')
        })
        circles[currentIndex].classList.add('current')
    }

    // 3开始自动轮播
    let timer = setInterval(moveRight,1000)
    // 鼠标移入停止轮播
    document.getElementById("box").onmouseover = function(){
        clearInterval(timer)
    }
    // 鼠标移出重新轮播
    document.getElementById("box").onmouseout = function(){
        timer = setInterval(moveRight,1000)
    }

    // 4实现左右按钮轮播
    let leftBtn = document.getElementById('left')
    let rightBtn = document.getElementById('right')
    console.log(rightBtn)
    rightBtn.onclick = moveRight
    leftBtn.onclick = function(){
        console.log(22222)
        if(currentIndex === 0){
            currentIndex = ul.children.length -1
        }else{
            currentIndex--
        }
        let targetWidth = imgList * currentIndex *- 1
        ul.style.left = targetWidth +'px'
        circles.forEach(e=>{
            e.classList.remove('current')
        })
        circles[currentIndex].classList.add('current')
    }
}