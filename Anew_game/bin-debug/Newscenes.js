var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// 默认添加开始场景
var Newscenes = (function (_super) {
    __extends(Newscenes, _super);
    // 升级房子场景
    // private House: House;
    // private GoldPath: GoldPath;
    function Newscenes() {
        var _this = _super.call(this) || this;
        // 实例化两个场景
        _this.Game = new Game();
        // this.House = new House("default");
        // this.GoldPath = new GoldPath();
        // 默认添加开始场景
        _this.addChild(_this.Game);
        return _this;
    }
    // 实例化单例获取方法
    Newscenes.getInstance = function () {
        if (!Newscenes.instance) {
            Newscenes.instance = new Newscenes();
        }
        return Newscenes.instance;
    };
    // private type = {
    //     "name":"House",
    //     "value":"",
    // }
    // 切换场景
    Newscenes.prototype.changeScene = function (type) {
        //
        //可添加切换场景动画
        // let shp: egret.Shape = new egret.Shape()
        // shp.graphics.beginFill(0x00ff00);
        // shp.graphics.drawRect(0, 0, 50, 50);
        // shp.graphics.endFill();
        // this.addChild(shp);
        // var tw = egret.Tween.get(shp);
        // tw.to({ x: 300, y: 100 }, 1000);
        // var idTimeout: number = egret.setTimeout(function () {
        // 移除所有显示列表中的对象
        this.removeChildren();
        // 释放资源
        // if (type.name == 'House') { //游戏场景转至房屋场景
        //   this.Game.freed();
        //   this.addChild(this[type.name]);
        // } else if (type.name == 'Game') { //游戏场景 通过好运转至金币之路
        //   this.addChild(new Game("gold"));
        // }else if(type.name == "houseToGame"){ //房子场景转至游戏场景
        //   this.addChild(this.Game);
        // }else if(type.name == "myselfHouse" || type.name == "friendsHouse"){ //好友排行版返回自己的房子  或者 串门去好友的房屋
        //   this.addChild(new House(type));
        // } else {
        // 添加下一个场景
        this.addChild(this[type.name]);
        // }
        // }, this, 1000);
    };
    return Newscenes;
}(egret.Sprite));
__reflect(Newscenes.prototype, "Newscenes");
//# sourceMappingURL=Newscenes.js.map