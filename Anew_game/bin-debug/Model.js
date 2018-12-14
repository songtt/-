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
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Modal.prototype.onAddToStage = function () {
        // 模态框定位
        this.width = 300;
        this.height = 180;
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.x = this.stage.stageWidth / 2;
        this.y = this.stage.stageHeight * 0.6;
        // 模态框外框，可用图片
        this.addChild(this.frame());
    };
    // 卡券中心模态框
    Modal.prototype.cardModal = function () {
        this.addChild(this.info("进入卡券中心，是否购买卡片？"));
        this.addChild(this.button({ "btnColor": "0x3e30c4", "x": 30, "y": 110, "width": 80, "height": 36, "btnText": "确定", "btnTextColor": "0xffffff" }));
        this.addChild(this.button({ "btnColor": "0x3E30C4", "x": 170, "y": 110, "width": 80, "height": 36, "btnText": "取消", "btnTextColor": "0xffffff" }));
    };
    // 运气模态框
    Modal.prototype.luckModal = function () {
        this.addChild(this.info("中奖啦，点击确定进入金币之路！"));
        this.addChild(this.button({ "btnColor": "0x3e30c4", "x": 110, "y": 110, "width": 80, "height": 36, "btnText": "确定", "btnTextColor": "0xffffff" }));
    };
    // 坏运模态框
    Modal.prototype.badLuckModal = function () {
        this.addChild(this.info("被恶狗咬了，打狂犬疫苗用掉2000金币！"));
        this.addChild(this.button({ "btnColor": "0x3e30c4", "x": 110, "y": 110, "width": 80, "height": 36, "btnText": "关闭", "btnTextColor": "0xffffff" }));
    };
    // 银行模态框
    Modal.prototype.bankModal = function () {
        this.addChild(this.info("进入银行，是否存钱获取利息?"));
        this.addChild(this.button({ "btnColor": "0x3e30c4", "x": 30, "y": 110, "width": 80, "height": 36, "btnText": "确定", "btnTextColor": "0xffffff" }));
        this.addChild(this.button({ "btnColor": "0x3E30C4", "x": 170, "y": 110, "width": 80, "height": 36, "btnText": "取消", "btnTextColor": "0xffffff" }));
    };
    // 金币之路模态框
    Modal.prototype.goldModal = function () {
        this.addChild(this.info("次数用完啦，去分享得次数！"));
        this.addChild(this.button({ "btnColor": "0x3e30c4", "x": 110, "y": 110, "width": 80, "height": 36, "btnText": "分享", "btnTextColor": "0xffffff" }));
    };
    // 外框，可用图片
    Modal.prototype.frame = function () {
        var spr = new egret.Sprite;
        spr.graphics.beginFill(0x079AC6, 0.9);
        spr.graphics.drawRect(0, 0, this.width, this.height);
        spr.graphics.endFill();
        return spr;
    };
    // 模态框信息
    Modal.prototype.info = function (message) {
        var label = new egret.TextField();
        label.text = message;
        label.width = this.width;
        label.height = 70;
        label.y = 30;
        label.size = 16;
        label.textColor = 0x000000;
        label.textAlign = egret.HorizontalAlign.CENTER;
        label.verticalAlign = egret.VerticalAlign.MIDDLE;
        return label;
    };
    // 按钮的参数
    // private btnObj = {
    //   "btnColor":"",
    //   "x":"",
    //   "y":"",
    //   "width":"",
    //   "height":"",
    //   "btnText":"",
    //   "btnTextColor":""
    // }
    // 关闭按钮
    Modal.prototype.button = function (btnObj) {
        var btn = new egret.Sprite();
        btn.graphics.beginFill(btnObj.btnColor, 0.9);
        btn.graphics.drawRect(btnObj.x, btnObj.y, btnObj.width, btnObj.height);
        btn.graphics.endFill();
        var btnText = new egret.TextField();
        btnText.text = btnObj.btnText;
        btnText.width = btnObj.width;
        btnText.height = btnObj.height;
        btnText.x = btnObj.x;
        btnText.y = btnObj.y;
        btnText.size = 14;
        btnText.textColor = btnObj.btnTextColor;
        btnText.textAlign = egret.HorizontalAlign.CENTER;
        btnText.verticalAlign = egret.VerticalAlign.MIDDLE;
        btn.addChild(btnText);
        return btn;
    };
    return Modal;
}(egret.DisplayObjectContainer));
__reflect(Modal.prototype, "Modal");
//# sourceMappingURL=Model.js.map