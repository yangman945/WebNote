##### promise的含义

promise是一种异步编程的解决方案，

简单来说promise是一个容器，里面保存着某个未来才会结束的事件结果，从语法上来说，promise是一个对象，从他可以获取异步消息，promise又提供统一的API，各种异步操作都可以用同样的方法处理

**promise对象的两个特点**

1、对象的状态不受外界影响。promise对象代表一个异步操作，有三种状态：`pending:进行中`，`fulfilled:已成功`，`rejected:已失败`。只有异步操作结果能决定当前状态，promise即承诺

2、promise状态的改变只会得到两个结果：`resolved:成功`（即fulfilled），`rejected:失败`。当结果产生时，我们可以在promise中添加回调函数来处理这个结果

##### promise的基本用法

首先更正自己之前错误两个点

- promise里的代码会在promise新建之后立即执行
- promise里面的异步操作结果只有在调用的时候执行



es6中规定，promise对象是一个构造函数，用来生成promise实例

```js
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

- promise作为构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`
- promise实例生成后，可以通过`then`方法分别制定两种状态的回调函数



**then**

```js
promise.then(function(value) {
  // success
}, function(error) {
  // failure 可选可不选
});

let miao = new Promise(()=>{
    resolve(222)
    console.log(111)
})
miao.then((val)=>{
    console.log(val)
})
结果 1、2
如果.then是原来实例的话，会怎么样呢
```

- `then`方法返回的是一个新的promise实例（已经不是原来那个了，看上面理解一下就懂了），因此可以采用链式写法
- `then`方法可以接受两个回调函数作为参数，第一个回调函数是promise对象的状态变为resolved时调用，第二个是rejected时，可选可不选
- 采用链式调用的.then，会按照顺序执行一一执行，前一个回调函数的返回值，会被下一个.then作为参数使用，如果返回的参数是一个promise对象，后面的参数也会等其执行完确定状态后在执行

**catch**

`catch`方法用于promise状态为`rejected`，使用该方法处理错误，`catch`比`then`的第二个参数处理错误时的好处在于`catch`也能捕获`then`内部的错误

注意点：promise如果已经resolve了，其后面再抛出错误将不会被捕获

**finally**

`finally`方法是不管promise状态如何，都会被执行的函数

##### 经典题目

```js
Promise.resolve(1) //这里理解为对象.方法
  .then(2) //这里传递的参数无效 解析为null
  .then(Promise.resolve(3)) // 之前已经resolve过了
  .then(console.log) //这里我就不知道了
结果为1
解析
Promise.resolve 方法的参数如果是一个原始值，或者是一个不具有 then 方法的对象，则 Promise.resolve 方法返回一个新的 Promise 对象，状态为resolved，Promise.resolve 方法的参数，会同时传给回调函数。

then 方法接受的参数是函数，而如果传递的并非是一个函数，它实际上会将其解释为 then(null)，这就会导致前一个 Promise 的结果会穿透下面。
```

