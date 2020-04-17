//利用时间戳实现首次立即执行
function throttle(func, wait) {
    var timeout, oldTime = 0;
    throttled = function(params) {
        let nowTime = new Date().valueOf();
        if (nowTime - oldTime > wait) {
            func.apply(this, arguments);
            oldTime = nowTime;
        }
    }
    return throttled;
}