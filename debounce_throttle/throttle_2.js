//利用定时器实现所有事件结束后执行最后一次
function throttle(func, wait) {
    let timeout;
    return function() {
        if (!timeout) {
            timeout = setTimeout(() => {
                func.apply(this, arguments);
                timeout = null;
            }, wait);
        }
    }
}