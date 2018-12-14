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
var HouseMap = (function (_super) {
    __extends(HouseMap, _super);
    function HouseMap(id) {
        var _this = _super.call(this) || this;
        _this.landId = id;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        _this.playerHouseId = egret.localStorage.getItem("house");
        return _this;
    }
    HouseMap.prototype.onAddToStage = function (event) {
        this._bg = new Background();
        // 房屋等级总容器，加一层透明黑色底层
        this.houseCont = new egret.Sprite();
        this.addChild(this.houseCont);
        this.houseCont.graphics.beginFill(0x000000, 0.6);
        this.houseCont.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
        this.houseCont.graphics.endFill();
        this.houseCont.touchEnabled = true;
        this.houseCont.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { }, this);
        // 动态特效容器
        HouseMap.effectsCont = new egret.Sprite();
        HouseMap.effectsCont.x = this.stage.width / 2;
        HouseMap.effectsCont.y = this.stage.height / 2;
        HouseMap.effectsCont.width = this.stage.width;
        HouseMap.effectsCont.height = this.stage.height;
        HouseMap.effectsCont.anchorOffsetX = HouseMap.effectsCont.width / 2;
        HouseMap.effectsCont.anchorOffsetY = HouseMap.effectsCont.height / 2;
        this.houseCont.addChild(HouseMap.effectsCont);
        // 房屋等级显示容器
        this.gradeCont = new egret.Sprite();
        this.gradeCont.x = this.stage.width / 2;
        this.gradeCont.y = this.stage.height / 2;
        this.gradeCont.width = this.stage.width;
        this.gradeCont.height = this.stage.height;
        this.gradeCont.anchorOffsetX = this.gradeCont.width / 2;
        this.gradeCont.anchorOffsetY = this.gradeCont.height / 2;
        HouseMap.effectsCont.addChild(this.gradeCont);
        // 关闭按钮
        var close = this._bg.element({ "name": "rank_json.close", "x": this.stage.width / 2, "y": 990 });
        this.gradeCont.addChild(close);
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeEvent, this);
        // 房屋弹出框外框
        var houseFrame = this._bg.element({ "name": "hmapbg2_png", "x": 322, "y": 560 });
        this.gradeCont.addChild(houseFrame);
        this.houseGrade(this.landId);
    };
    HouseMap.prototype.housePath = function () {
        // 房屋线路
        var housePath = this._bg.element({ "name": "basic_png", "x": 335, "y": 580 });
        this.gradeCont.addChild(housePath);
    };
    HouseMap.prototype.closeEvent = function () {
        if (this && this.parent) {
            this.parent.removeChild(this);
        }
    };
    // 房子等级
    HouseMap.prototype.houseGrade = function (id) {
        switch (id) {
            case "1":
                this.housePath();
                // 房子名称
                this.houseName({ houseId: "1", x: 163, y: 324, name: "山洞" });
                this.houseName({ houseId: "2", x: 378, y: 350, name: "砖房" });
                this.houseName({ houseId: "3", x: 416, y: 517, name: "楼房" });
                this.houseName({ houseId: "4", x: 248, y: 517, name: "小洋房" });
                this.houseName({ houseId: "5", x: 181, y: 657, name: "别墅" });
                this.houseName({ houseId: "6", x: 328, y: 670, name: "海景房" });
                this.houseName({ houseId: "7", x: 459, y: 743, name: "园林" });
                this.houseName({ houseId: "8", x: 292, y: 834, name: "宫殿" });
                break;
            case "2":
                this.housePath();
                this.houseName({ houseId: "9", x: 163, y: 324, name: "2-1" });
                this.houseName({ houseId: "10", x: 378, y: 350, name: "2-2" });
                this.houseName({ houseId: "11", x: 416, y: 517, name: "2-3" });
                this.houseName({ houseId: "12", x: 248, y: 517, name: "2-4" });
                this.houseName({ houseId: "13", x: 181, y: 657, name: "2-5" });
                this.houseName({ houseId: "14", x: 328, y: 670, name: "2-6" });
                this.houseName({ houseId: "15", x: 459, y: 743, name: "2-7" });
                this.houseName({ houseId: "16", x: 292, y: 834, name: "2-8" });
                break;
            case "3":
                this.housePath();
                this.houseName({ houseId: "17", x: 163, y: 324, name: "3-1" });
                this.houseName({ houseId: "18", x: 378, y: 350, name: "3-2" });
                this.houseName({ houseId: "19", x: 416, y: 517, name: "3-3" });
                this.houseName({ houseId: "20", x: 248, y: 517, name: "3-4" });
                this.houseName({ houseId: "21", x: 181, y: 657, name: "3-5" });
                this.houseName({ houseId: "22", x: 328, y: 670, name: "3-6" });
                this.houseName({ houseId: "23", x: 459, y: 743, name: "3-7" });
                this.houseName({ houseId: "24", x: 292, y: 834, name: "3-8" });
                break;
            case "4":
                this.housePath();
                this.houseName({ houseId: "25", x: 163, y: 324, name: "4-1" });
                this.houseName({ houseId: "26", x: 378, y: 350, name: "4-2" });
                this.houseName({ houseId: "27", x: 416, y: 517, name: "4-3" });
                this.houseName({ houseId: "28", x: 248, y: 517, name: "4-4" });
                this.houseName({ houseId: "29", x: 181, y: 657, name: "4-5" });
                this.houseName({ houseId: "30", x: 328, y: 670, name: "4-6" });
                this.houseName({ houseId: "31", x: 459, y: 743, name: "4-7" });
                this.houseName({ houseId: "32", x: 292, y: 834, name: "4-8" });
                break;
            case "5":
                this.housePath();
                this.houseName({ houseId: "33", x: 163, y: 324, name: "5-1" });
                this.houseName({ houseId: "34", x: 378, y: 350, name: "5-2" });
                this.houseName({ houseId: "35", x: 416, y: 517, name: "5-3" });
                this.houseName({ houseId: "36", x: 248, y: 517, name: "5-4" });
                this.houseName({ houseId: "37", x: 181, y: 657, name: "5-5" });
                this.houseName({ houseId: "38", x: 328, y: 670, name: "5-6" });
                this.houseName({ houseId: "39", x: 459, y: 743, name: "5-7" });
                this.houseName({ houseId: "40", x: 292, y: 834, name: "5-8" });
                break;
            case "6":
                this.housePath();
                this.houseName({ houseId: "41", x: 163, y: 324, name: "6-1" });
                this.houseName({ houseId: "42", x: 378, y: 350, name: "6-2" });
                this.houseName({ houseId: "43", x: 416, y: 517, name: "6-3" });
                this.houseName({ houseId: "44", x: 248, y: 517, name: "6-4" });
                this.houseName({ houseId: "45", x: 181, y: 657, name: "6-5" });
                this.houseName({ houseId: "46", x: 328, y: 670, name: "6-6" });
                this.houseName({ houseId: "47", x: 459, y: 743, name: "6-7" });
                this.houseName({ houseId: "48", x: 292, y: 834, name: "6-8" });
                break;
            case "7":
                this.housePath();
                this.houseName({ houseId: "49", x: 163, y: 324, name: "7-1" });
                this.houseName({ houseId: "50", x: 378, y: 350, name: "7-2" });
                this.houseName({ houseId: "51", x: 416, y: 517, name: "7-3" });
                this.houseName({ houseId: "52", x: 248, y: 517, name: "7-4" });
                this.houseName({ houseId: "53", x: 181, y: 657, name: "7-5" });
                this.houseName({ houseId: "54", x: 328, y: 670, name: "7-6" });
                this.houseName({ houseId: "55", x: 459, y: 743, name: "7-7" });
                this.houseName({ houseId: "56", x: 292, y: 834, name: "7-8" });
                break;
            case "8":
                this.housePath();
                this.houseName({ houseId: "57", x: 163, y: 324, name: "8-1" });
                this.houseName({ houseId: "58", x: 378, y: 350, name: "8-2" });
                this.houseName({ houseId: "59", x: 416, y: 517, name: "8-3" });
                this.houseName({ houseId: "60", x: 248, y: 517, name: "8-4" });
                this.houseName({ houseId: "61", x: 181, y: 657, name: "8-5" });
                this.houseName({ houseId: "62", x: 328, y: 670, name: "8-6" });
                this.houseName({ houseId: "63", x: 459, y: 743, name: "8-7" });
                this.houseName({ houseId: "64", x: 292, y: 834, name: "8-8" });
                break;
            case "9":
                var waitRegular = this._bg.element({ "name": "waitRegular_png", "x": this.houseCont.width / 2, "y": 600 });
                this.gradeCont.addChild(waitRegular);
                break;
            case "10":
                var waitCursive = this._bg.element({ "name": "waitCursive_png", "x": this.houseCont.width / 2, "y": 600 });
                this.gradeCont.addChild(waitCursive);
                break;
            default:
                this.gradeCont.addChild(waitRegular);
                break;
        }
    };
    HouseMap.prototype.houseName = function (obj) {
        // obj = {
        //   houseId: id,
        //   x:x,
        //   y:y,
        //   name:name
        // }
        var _this = this;
        var hTextCont = new egret.Sprite();
        hTextCont.width = 80;
        hTextCont.height = 80;
        hTextCont.x = obj.x;
        hTextCont.y = obj.y;
        hTextCont.anchorOffsetX = hTextCont.width / 2;
        hTextCont.anchorOffsetY = hTextCont.height / 2;
        this.gradeCont.addChild(hTextCont);
        var id = new egret.TextField();
        id.text = obj.houseId;
        hTextCont.addChild(id);
        id.visible = false;
        var houseText = this._bg.addtxt({ "text": obj.name, "color": "0xffffff", "x": 40, "y": 40, "size": 26 });
        houseText.width = 80;
        houseText.height = 80;
        houseText.anchorOffsetX = houseText.width / 2;
        houseText.anchorOffsetY = houseText.height / 2;
        houseText.textAlign = egret.HorizontalAlign.CENTER;
        houseText.verticalAlign = egret.VerticalAlign.MIDDLE;
        houseText.bold = true;
        houseText.stroke = 2;
        houseText.strokeColor = 0xA75B00;
        hTextCont.addChild(houseText);
        if (obj.houseId == this.playerHouseId) {
            egret.Tween.get(houseText, { loop: true }).to({ alpha: 0.5 }, 800).wait(600).to({ alpha: 1 }, 800).wait(600);
            egret.Tween.get(houseText, { loop: true }).to({ rotation: 360 }, 10000);
            hTextCont.touchEnabled = true;
            hTextCont.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.closeEvent();
                Newscenes.getInstance().changeScene({ 'name': 'House' });
            }, this);
        }
    };
    return HouseMap;
}(egret.Sprite));
__reflect(HouseMap.prototype, "HouseMap");
