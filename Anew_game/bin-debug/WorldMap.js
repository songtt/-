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
var WorldMap = (function (_super) {
    __extends(WorldMap, _super);
    function WorldMap() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    WorldMap.prototype.onAddToStage = function (event) {
        //背景
        this._bg = new Background();
        this.addChild(this._bg.stage_bg({ "name": "wmapbg_png", "width": this.stage.stageWidth, "height": this.stage.stageHeight }));
        // 大陆
        this.land({ landId: 1, x: 110, y: 240, landName: "蛮荒大陆", isLock: "unlock" });
        this.land({ landId: 2, x: 355, y: 305, landName: "神幽大陆", isLock: "lock" });
        this.land({ landId: 3, x: 530, y: 320, landName: "灵源大陆", isLock: "lock" });
        this.land({ landId: 4, x: 420, y: 510, landName: "封澜大陆", isLock: "lock" });
        this.land({ landId: 5, x: 140, y: 525, landName: "冰寅大陆", isLock: "lock" });
        this.land({ landId: 6, x: 125, y: 795, landName: "迷失大陆", isLock: "lock" });
        this.land({ landId: 7, x: 295, y: 807, landName: "雾隐大陆", isLock: "lock" });
        this.land({ landId: 8, x: 540, y: 825, landName: "青色大陆", isLock: "lock" });
        this.land({ landId: 9, x: 450, y: 1015, landName: "幻神大陆", isLock: "lock" });
        this.land({ landId: 10, x: 225, y: 1065, landName: "解锁新大陆", isLock: "lock" });
        // 返回
        var back = this._bg.element({ "name": "day_json.wmapback", "x": 70, "y": 80 });
        this.addChild(back);
        back.touchEnabled = true;
        back.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            Newscenes.getInstance().changeScene({ 'name': 'House' });
        }, this);
    };
    WorldMap.prototype.land = function (obj) {
        var _this = this;
        // obj = {
        //   landId: id,
        //   x: x,
        //   y: y,
        //   landName: name,
        //   isLock : lock / unlock,
        // }
        var landCont = new egret.Sprite();
        landCont.x = obj.x;
        landCont.y = obj.y;
        this.addChild(landCont);
        // userId
        var landId = new egret.TextField();
        landId.text = obj.landId;
        ;
        landCont.addChild(landId);
        landId.visible = false;
        var lock = this._bg.element({ "name": "day_json." + obj.isLock, "x": 0, "y": 0 });
        landCont.addChild(lock);
        var landText = this._bg.addtxt({ "text": obj.landName, "color": "0xffffff", "x": 0, "y": 32, "size": 24 });
        landText.x = -landText.width / 2;
        landText.stroke = 3;
        landText.strokeColor = 0x3499D9;
        landCont.addChild(landText);
        landCont.touchEnabled = true;
        landCont.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var land = landCont.getChildAt(0);
            var landId = land.text;
            var houseMap = new HouseMap(landId);
            _this.addChild(houseMap);
            // 动态出现
            egret.Tween.get(HouseMap.effectsCont).to({ scaleX: 0.3, scaleY: 0.3, x: e.stageX, y: e.stageY }, 1).to({ scaleX: 1, scaleY: 1, x: _this.stage.width / 2, y: _this.stage.height / 2 }, 500);
        }, this);
    };
    return WorldMap;
}(egret.DisplayObjectContainer));
__reflect(WorldMap.prototype, "WorldMap");
