//第一步，可以看到只需要几行代码就能实现一个最初级的防抖函数
function debounce(fnc, wait) {
    let timeout = null;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fnc();
        }, wait);
    }
};