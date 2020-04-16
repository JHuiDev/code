// 防抖函数优化
// 1.函数事件处理函数的this需要指向DOM元素
// 2.事件处理函数能够获取到event对象
// 3.事件清除功能
function debounce(func, wait, immediate = false) {
    var timeout = null;
    var debounced = function(event) {
        let resoult;
        clearTimeout(timeout);
        let callNow = !timeout;
        if (immediate) {
            // 使用apply更改this执行，并传入参数即可
            if (callNow) resoult = func.apply(this, arguments);
            timeout = setTimeout(() => {
                timeout = null;
            }, wait);
        } else {
            timeout = setTimeout(() => {
                resoult = func.apply(this, arguments);
            }, wait);
        }
        return resoult;
    };
    // 在返回函数上定义一个方法，清除定时器即可
    debounced.cancel = function() {
        clearTimeout(timeout);
        // 防止使用闭包后内存泄漏
        timeout = null;
    }
    return debounced;
};