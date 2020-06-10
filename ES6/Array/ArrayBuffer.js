let array = new ArrayBuffer(10);
// 使用slice方法對數組緩衝區進行切片
let cutarr = array.slice(2, 5);
console.log(cutarr);
// 創建視圖
// 接受三個參數，ArrayBuffer 緩衝區，2偏移量，3視圖長度
let view = new DataView(array, 2, 5);
console.log(view);