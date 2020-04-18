/**
 * 选项卡
 * @param {DOM}} warp 选项卡外部容器 
 */
function TabSwitch(warp) {
    this.tablist = warp.children[0].getElementsByTagName('li');
    this.content = warp.getElementsByTagName('div');
    var _this = this;
    for (let i = 0; i < this.tablist.length; i++) {
        this.tablist[i].onclick = function() {
            _this.clickFunc(i);
        }
    }
}
TabSwitch.prototype.clickFunc = function(n) {
    for (let j = 0; j < this.tablist.length; j++) {
        this.tablist[j].className = "";
        this.content[j].style.display = "none";
    }
    this.tablist[n].className = "active";
    this.content[n].style.display = "block";
}