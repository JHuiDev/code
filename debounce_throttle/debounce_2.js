// 现在我们使用immediate对事件处理函数调用的控制，当immediate为true时立即执行，为false事件结束后执行
function debounce(fnc, wait, immediate = false) {
    let timeout = null;
    return function() {
        clearTimeout(timeout);
        let callNow = !timeout;
        if (immediate) {
            if (callNow) fnc();
            timeout = setTimeout(() => {
                // 当事件停止经过wait毫秒后，将timeout = null，以便下一次执行callNow=true
                timeout = null;
            }, wait);
        } else {
            timeout = setTimeout(() => {
                fnc();
            }, wait);
        }
    }
};