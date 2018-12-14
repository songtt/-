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
var FriendHouse = (function (_super) {
    __extends(FriendHouse, _super);
    function FriendHouse() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        _this.playerLandId = egret.localStorage.getItem("land");
        return _this;
    }
    FriendHouse.prototype.onAddToStage = function (event) {
        var _this = this;
        //背景
        this._bg = new Background();
        this.addChild(this._bg.stage_bg({ "name": "housebg_png", "width": this.stage.stageWidth, "height": this.stage.stageHeight }));
        // 我的房屋
        this.mHouse = this._bg.element({ "name": "mhouse_json.house1", "x": this.stage.stageWidth / 2 + 30, "y": 750 });
        this.mHouse.width = this.mHouse.width * 0.9;
        this.mHouse.height = this.mHouse.height * 0.9;
        this.addChild(this.mHouse);
        this.mHouse.touchEnabled = true;
        this.mHouse.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            var houseMap = new HouseMap(_this.playerLandId);
            _this.addChild(houseMap);
            // 动态出现
            egret.Tween.get(HouseMap.effectsCont).to({ scaleX: 0.3, scaleY: 0.3 }, 1).to({ scaleX: 1, scaleY: 1 }, 500);
        }, this);
        // 去玩游戏
        this.goGame = this._bg.element({ "name": "mhouse_json.game", "x": this.stage.stageWidth / 2 - 5, "y": 1030 });
        this.addChild(this.goGame);
        this.goGame.touchEnabled = true;
        this.goGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backToGame, this);
        // 地图
        this.map = this._bg.element({ "name": "mhouse_json.map", "x": 100, "y": 1025 });
        this.addChild(this.map);
        var mapTxt = this._bg.element({ "name": "mhouse_json.maptxt", "x": 100, "y": 1100 });
        this.addChild(mapTxt);
        this.map.touchEnabled = true;
        this.map.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goWorldMap, this);
        // 好友房屋
        this.fHouse = this._bg.element({ "name": "mhouse_json.fhouse", "x": 540, "y": 1025 });
        this.addChild(this.fHouse);
        var fHouseTxt = this._bg.element({ "name": "mhouse_json.fhousetxt", "x": 540, "y": 1100 });
        this.addChild(fHouseTxt);
        this.fHouse.touchEnabled = true;
        this.fHouse.addEventListener(egret.TouchEvent.TOUCH_TAP, this.friendHouse, this);
        // 整修房屋
        this.fixHouse = this._bg.element({ "name": "mhouse_json.fix", "x": 150, "y": 380 });
        this.addChild(this.fixHouse);
        // this.fixHouse.touchEnabled = true;
        // this.fixHouse.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hFix, this);
        // 升级房屋
        this.upHouse = this._bg.element({ "name": "mhouse_json.up", "x": 430, "y": 380 });
        this.addChild(this.upHouse);
        // this.upHouse.touchEnabled = true;
        // this.upHouse.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hUp, this);
        // 背包
        this.package = this._bg.element({ "name": "mhouse_json.package", "x": 580, "y": 360 });
        this.addChild(this.package);
        // this.package.touchEnabled = true;
        // this.package.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hUp, this);
        // 消息
        this.message = this._bg.element({ "name": "mhouse_json.message", "x": 580, "y": 500 });
        this.addChild(this.message);
        // this.message.touchEnabled = true;
        // this.message.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hUp, this);
        //金币数
        var goldFrame = this._bg.element({ "name": "day_json.dayscore", "x": 557, "y": 110 });
        this.addChild(goldFrame);
        if (egret.localStorage.getItem("money")) {
            this.goldNum = Number(egret.localStorage.getItem("money"));
        }
        this.goldText = this._bg.addtxt({ "text": this.goldNum.toString(), "color": "0x610C1e", "x": 537, "y": 100 });
        this.addChild(this.goldText);
        // 房屋等级
        var gradeFrame = this._bg.element({ "name": "mhouse_json.grade", "width": 160, "height": 80, "x": 85, "y": 110 });
        this.addChild(gradeFrame);
        if (egret.localStorage.getItem("house")) {
            this.gradeTxt = Number(egret.localStorage.getItem("house"));
        }
        this.houseGrade = this._bg.addtxt({ "text": "等级: " + this.gradeTxt.toString(), "color": "0x610C1e", "x": 65, "y": 98, "size": 20 });
        this.houseGrade.fontFamily = "Microsoft YaHei";
        this.addChild(this.houseGrade);
    };
    // 点击地图
    FriendHouse.prototype.goWorldMap = function () {
        Newscenes.getInstance().changeScene({ 'name': 'WorldMap', "value": "" });
    };
    // 点击好友房屋
    FriendHouse.prototype.friendHouse = function () {
        var rank = new Rank();
        this.addChild(rank);
    };
    // 返回事件
    FriendHouse.prototype.backToGame = function () {
        Newscenes.getInstance().changeScene({ 'name': 'Game' });
    };
    return FriendHouse;
}(egret.DisplayObjectContainer));
__reflect(FriendHouse.prototype, "FriendHouse");
