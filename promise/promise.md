# promise
- promise是一个类,参数是executor,参数resolve(成功的回调),reject(失败的回调)
- 链式调用： 靠的是返回一个新的promise
- 链式调用特点：会将第一个then中的返回值作为下一次成功的回调函数的参数
