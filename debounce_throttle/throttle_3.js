// 将时间戳和定时器双剑合并
function throttle(func, wait, options) {
    options = options || { leading: true, trailing: false };
    let oldTime = 0,
        timeout = null,
        resolut;
    throttled = function() {
        nowTime = new Date().valueOf();
        if (options.leading === false && !oldTime) oldTime = nowTime;
        if (nowTime - oldTime > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null
            }
            oldTime = nowTime;
            resolut = func.apply(this, arguments);
        } else if (options.trailing !== false && !timeout) {
            timeout = setTimeout(() => {
                func.apply(this, arguments);
                timeout = null;
                oldTime = 0;
            }, wait);
        }
    };

    return throttled;
}