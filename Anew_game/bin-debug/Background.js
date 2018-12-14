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
var Background = (function (_super) {
    __extends(Background, _super);
    function Background() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Background.prototype.onAddToStage = function (event) {
        //背景
        this.addChild(this.stage_bg({ "name": "bg_jpg", "width": this.stage.stageWidth, "height": this.stage.stageHeight }));
        //初始场景元素
        // this.addChild(this.npc({"name":"scene_json.bank","width":90,"height":90,"x":465,"y":120}));
        // this.addChild(this.npc({"name":"scene_json.card","x":280,"y":68}));
        // this.addChild(this.npc({"name":"scene_json.luck","x":160,"y":226}));
        // this.addChild(this.npc({"name":"scene_json.badluck","x":440,"y":250}));
    };
    /**
 * 场景元素通用函数
 */
    Background.prototype.npc = function (obj) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(obj.name);
        result.texture = texture;
        result.width = obj.width ? obj.width : result.width;
        result.height = obj.height ? obj.height : result.height;
        result.anchorOffsetX = result.width / 2;
        result.anchorOffsetY = result.height / 2;
        result.x = obj.x;
        result.y = obj.y;
        return result;
    };
    /**
     *  场景主背景通用函数
     */
    Background.prototype.stage_bg = function (obj) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(obj.name);
        result.texture = texture;
        result.width = obj.width ? obj.width : result.width;
        result.height = obj.height ? obj.height : result.height;
        result.touchEnabled = true;
        result.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getLocation, this);
        return result;
    };
    Background.prototype.getLocation = function (e) {
        console.log(e.stageX, e.stageY);
    };
    return Background;
}(egret.DisplayObjectContainer));
__reflect(Background.prototype, "Background");
//# sourceMappingURL=Background.js.map