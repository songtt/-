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
var Day = (function (_super) {
    __extends(Day, _super);
    function Day() {
        var _this = _super.call(this) || this;
        _this._gameStatus = false;
        //设置动画的移动速度
        _this.speed = 0.5;
        _this._touchStatus = false; //当前触摸状态，按下时，值为true
        _this._distance = new egret.Point(); //鼠标点击时，鼠标全局坐标与移动对象的位置差
        // 模态框———————————↓↓
        _this.modal = new Modal();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Day.prototype.onAddToStage = function () {
        this._bg = new Background();
        this.addChild(this._bg.stage_bg({ "name": "daybg_png", "width": this.stage.stageWidth, "height": this.stage.stageHeight }));
        // 初始化游戏
        this.gameInit();
    };
    // 游戏逻辑—————————————————————↓↓
    // 游戏初始化
    Day.prototype.gameInit = function () {
        this._gameStatus = false;
        // 返回按钮
        this.back();
        // 初始金币数和初始时间
        this.dayScore();
        // 箱子
        this.goldBox();
        // 游戏开始按钮
        this.start();
    };
    // 点击开始游戏按钮
    Day.prototype.gameStart = function () {
        this.removeChild(this.startPart);
        if (this.second <= 0) {
            this.showShareModal();
            this.shareModalEvent();
        }
        else {
            this._gameStatus = true;
            this.dayTime();
            this.showGold();
            this.boxEvent();
        }
    };
    // 游戏重新开始
    Day.prototype.gameRestart = function () {
        this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backToGame, this);
        if (this.goldPart && this.goldPart.parent) {
            this.goldPart.parent.removeChild(this.goldPart);
        }
        this.addChild(this.startPart);
    };
    // 游戏暂停
    Day.prototype.gamePause = function () {
        this.boxCancelEvent();
        this._gameStatus = false;
        this.secondTimer.stop();
        this.goldTimer.stop();
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    // 游戏继续
    Day.prototype.gameContinue = function () {
        this.boxEvent();
        this._gameStatus = true;
        this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backToGame, this);
        this.secondTimer.start();
        this.goldTimer.start();
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    // 退出游戏
    Day.prototype.gameQuit = function () {
        this.boxCancelEvent();
        this._gameStatus = false;
        egret.localStorage.setItem("daySecond", this.second.toString());
        egret.localStorage.setItem("money", this.goldNum.toString());
        Newscenes.getInstance().changeScene({ 'name': 'Game' });
    };
    // 游戏结束
    Day.prototype.gameOver = function () {
        this._gameStatus = false;
        this.boxRest();
        this.goldTimer.stop();
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    // 金币层的容器
    Day.prototype.showGold = function () {
        this.goldArray = [];
        this.goldCount = 0;
        this.goldPart = new egret.Sprite();
        this.addChild(this.goldPart);
        this.goldTimer = new egret.Timer(100, 0);
        this.goldTimer.addEventListener(egret.TimerEvent.TIMER, this.goldTimerFunc, this);
        this.goldTimer.start();
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    // 生成元素的计时器函数
    Day.prototype.goldTimerFunc = function () {
        this.goldCount++;
        if (this.goldCount % 100 == 0) {
            this.goldCont("luckyBag");
        }
        else if (this.goldCount % 40 == 0) {
            this.goldCont("boom");
        }
        else if (this.goldCount % 5 == 0) {
            this.goldCont("gold");
        }
    };
    Day.prototype.elCont = function () {
        var randomX = Math.ceil(Math.random() * (this.stage.width - 200) + 50);
        this.elContainer = new egret.Sprite();
        this.elContainer.width = 60;
        this.elContainer.height = 100;
        this.elContainer.y = 0;
        this.elContainer.x = randomX;
        this.goldPart.addChild(this.elContainer);
    };
    // 生成元素（金币数量 + 元素图片）
    Day.prototype.goldCont = function (el) {
        this.elCont();
        var eltext = new egret.TextField();
        eltext.text = el;
        eltext.visible = false;
        if (el == "gold") {
            var random1 = Math.ceil(Math.random() * 11);
            // 金币数
            var goldContNum = this._bg.addtxt({ "text": "+" + random1 * 888, "x": 0, "y": 0, "color": "0xFFFF00", "size": 22 });
            // 金币图片
            var gold = this._bg.element({ "name": "day_json.gold" + random1, "x": 30, "y": goldContNum.height + 20 });
            gold.y = goldContNum.height + gold.height / 2 + 10;
            this.elContainer.addChild(eltext);
            this.elContainer.addChild(goldContNum);
            this.elContainer.addChild(gold);
        }
        else if (el == "boom") {
            var random2 = Math.ceil(Math.random() * 2);
            // 金币数
            var boomContNum = this._bg.addtxt({ "text": "-" + random2 * 666, "x": 0, "y": 0, "color": "0x2B2B34", "size": 22 });
            // 炸弹图片
            var boomImg = this._bg.element({ "name": "day_json.boom" + random2, "x": 30, "y": boomContNum.height + 20 });
            boomImg.y = boomContNum.height + boomImg.height / 2 + 10;
            this.elContainer.addChild(eltext);
            this.elContainer.addChild(boomContNum);
            this.elContainer.addChild(boomImg);
        }
        else if (el == "luckyBag") {
            // 福袋内容
            // let boomContNum = this._bg.addtxt({ "text": `-${random2 * 6666}`, "x": 0, "y": 0, "color": "0xFF0000", "size": 22 });
            // 福袋图片
            var luckyBag = this._bg.element({ "name": "day_json.luckyBag", "x": 30, "y": 0 });
            luckyBag.y = luckyBag.height / 2;
            this.elContainer.addChild(eltext);
            // this.elContainer.addChild(boomContNum);
            this.elContainer.addChild(luckyBag);
        }
        this.goldArray.push(this.elContainer);
    };
    // 每一帧的动画，改变每个金币的 y 坐标。
    Day.prototype.onEnterFrame = function (e) {
        for (var i = 0; i < this.goldArray.length; i++) {
            // let rnd = Math.random()*10+10;
            this.goldArray[i].y += this.speed * 15;
            var hitX = this.goldArray[i].x + this.goldArray[i].width / 2;
            var hitY = this.goldArray[i].y + this.goldArray[i].height - 30;
            if (this.hitZone.hitTestPoint(hitX, hitY)) {
                var elStr = this.goldArray[i].getChildAt(0).text;
                if (elStr == "luckyBag") {
                    console.log("福袋");
                }
                else {
                    var goldHitNum = Number(this.goldArray[i].getChildAt(1).text.slice(1));
                    if (elStr == "gold") {
                        this.goldNum += goldHitNum;
                    }
                    else {
                        this.goldNum -= goldHitNum;
                    }
                    this.goldText.text = this.goldNum.toString();
                    // egret.localStorage.setItem("money", this.goldNum.toString());
                }
                this.goldPart.removeChild(this.goldArray[i]);
                this.goldArray.splice(i, 1);
            }
            else if (this.goldArray[i].y > this.stage.height - 110) {
                this.goldPart.removeChild(this.goldArray[i]);
                this.goldArray.splice(i, 1);
            }
        }
    };
    Day.prototype.dayTime = function () {
        this.count = 0;
        this.secondTimer = new egret.Timer(100, 10 * this.second);
        this.secondTimer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.secondTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        this.secondTimer.start();
    };
    // 改变秒数
    Day.prototype.timerFunc = function () {
        this.count++;
        if (this.count % 10 == 0) {
            this.second--;
            if (this.second <= 0) {
                this.second = 0;
            }
        }
        this.timeText.text = this.second + " s";
        // egret.localStorage.setItem("daySecond", this.second.toString());
    };
    // 时间到，弹出分享框。
    Day.prototype.timerComFunc = function () {
        this.gameOver();
        this.showShareModal();
        this.shareModalEvent();
    };
    Day.prototype.start = function () {
        this.startPart = new egret.Sprite();
        this.addChild(this.startPart);
        this.startGold = this._bg.element({ "name": "day_json.start", "x": 332, "y": 543 });
        this.startPart.addChild(this.startGold);
        var startBtn = RES.getRes("daystart_json");
        var txtr = RES.getRes("daystart_png");
        var mcFactory = new egret.MovieClipDataFactory(startBtn, txtr);
        this.mcStart = new egret.MovieClip(mcFactory.generateMovieClipData("start"));
        this.mcStart.anchorOffsetX = this.mcStart.width / 2;
        this.mcStart.anchorOffsetY = this.mcStart.height / 2;
        this.mcStart.x = 325;
        this.mcStart.y = 515;
        this.startPart.addChild(this.mcStart);
        this.mcStart.play(-1);
        this.mcStart.touchEnabled = true;
        this.mcStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameStart, this);
    };
    Day.prototype.back = function () {
        // 添加返回按钮
        this.backBtn = this._bg.element({ "name": "day_json.dayback", "x": 50, "y": 60 });
        this.addChild(this.backBtn);
        // 给返回按钮添加点击事件
        this.backBtn.touchEnabled = true;
        this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backToGame, this);
    };
    // 返回事件
    Day.prototype.backToGame = function () {
        if (this._gameStatus) {
            if (this.second > 0) {
                this.gamePause();
                this.showBackModal(this.second);
                this.backModalEvent();
            }
            else {
                this.gameQuit();
            }
        }
        else {
            if (this.modal && this.modal.parent) {
                this.backBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.backToGame, this);
            }
            else {
                this.gameQuit();
            }
        }
    };
    Day.prototype.goldBox = function () {
        // 添加箱子图片
        this.box = new egret.Sprite();
        var boxImg = this._bg.element({ "name": "day_json.box", "x": 150, "y": 106 });
        this.box.width = 300;
        this.box.height = 212;
        this.box.x = 320;
        this.box.y = 990;
        this.box.anchorOffsetX = this.box.width / 2;
        this.box.anchorOffsetY = this.box.height / 2;
        this.box.addChild(boxImg);
        this.addChild(this.box);
        // 箱子与金币碰撞区域
        this.hitZone = new egret.Sprite();
        this.hitZone.graphics.beginFill(0x000000, 0);
        this.hitZone.graphics.drawRect(70, 100, 130, 40);
        this.hitZone.graphics.endFill();
        this.box.addChild(this.hitZone);
    };
    // 添加箱子移动事件
    Day.prototype.boxEvent = function () {
        this.box.touchEnabled = true;
        this.box.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
    };
    // 取消箱子移动事件
    Day.prototype.boxCancelEvent = function () {
        this.box.touchEnabled = false;
        this.box.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
    };
    // 箱子复位
    Day.prototype.boxRest = function () {
        this.boxCancelEvent();
        egret.Tween.get(this.box).to({ x: 320 }, 200);
    };
    Day.prototype.mouseDown = function (evt) {
        evt.preventDefault();
        this._touchStatus = true;
        this._distance.x = evt.stageX - this.box.x;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    Day.prototype.mouseMove = function (evt) {
        evt.preventDefault();
        if (this._touchStatus) {
            this.box.x = evt.stageX - this._distance.x;
            if (this.box.x <= 60) {
                this.box.x = 60;
            }
            else if (this.box.x >= 600) {
                this.box.x = 600;
            }
        }
    };
    Day.prototype.mouseUp = function (evt) {
        evt.preventDefault();
        this._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    // 箱子移动事件————————————————————————————↑↑
    // 初始金币数和初始时间
    Day.prototype.dayScore = function () {
        var gold = new egret.Sprite();
        gold.width = 170;
        gold.height = 285;
        gold.x = 470;
        gold.y = 65;
        this.addChild(gold);
        // 添加金币框
        var goldFrame = this._bg.element({ "name": "day_json.dayscore", "x": 87, "y": 44 });
        gold.addChild(goldFrame);
        // 添加金币数
        if (egret.localStorage.getItem("money")) {
            this.goldNum = Number(egret.localStorage.getItem("money"));
        }
        this.goldText = this._bg.addtxt({ "text": this.goldNum.toString(), "color": "0x610C1e", "x": 63, "y": 35 });
        gold.addChild(this.goldText);
        // 添加时间
        if (egret.localStorage.getItem("curDate")) {
            var curDate = egret.localStorage.getItem("curDate");
            if (egret.localStorage.getItem("gameDate")) {
                var gameDate = egret.localStorage.getItem("gameDate");
                var curArr = curDate.split("-");
                var gameArr = gameDate.split("-");
                if (curArr[0] > gameArr[0]) {
                    this.second = 60;
                }
                else if (curArr[1] > gameArr[1]) {
                    this.second = 60;
                }
                else if (curArr[2] > gameArr[2]) {
                    this.second = 60;
                }
                else {
                    if (egret.localStorage.getItem("daySecond")) {
                        this.second = Number(egret.localStorage.getItem("daySecond"));
                    }
                    else {
                        this.second = 60;
                    }
                }
            }
            else {
                this.second = 60;
            }
            egret.localStorage.setItem("gameDate", curDate);
        }
        else {
            this.second = 30;
        }
        this.timeText = this._bg.addtxt({ "text": this.second + " s", "color": "0xEDE0E3", "x": 45, "y": 100, "size": 46 });
        this.timeText.bold = true;
        gold.addChild(this.timeText);
    };
    // 显示分享模态框
    Day.prototype.showShareModal = function () {
        this.addChild(this.modal);
        this.modal.dayModal();
    };
    // 模态框不可见
    Day.prototype.removeModal = function () {
        this.modal.removeChildren();
        this.removeChild(this.modal);
    };
    // 分享模态框事件
    Day.prototype.shareModalEvent = function () {
        var _this = this;
        var cancel = this.modal.getChildAt(2);
        var share = this.modal.getChildAt(3);
        // 点击取消，出现开始游戏。
        cancel.touchEnabled = true;
        cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.removeModal();
            _this.gameRestart();
        }, this);
        // 点击分享
        share.touchEnabled = true;
        share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shareClick, this);
    };
    // 分享
    Day.prototype.shareClick = function () {
        this.removeModal();
        wx.shareAppMessage({
            title: "来呀~造作呀~",
            imageUrl: "resource/assets/share.jpg",
            query: ""
        });
        this.gameRestart();
    };
    // 显示返回主游戏模态框
    Day.prototype.showBackModal = function (second) {
        this.addChild(this.modal);
        this.modal.dayBack(second);
    };
    // 返回模态框事件
    Day.prototype.backModalEvent = function () {
        var _this = this;
        var cancel = this.modal.getChildAt(2);
        var sure = this.modal.getChildAt(3);
        // 点击取消，游戏继续。
        cancel.touchEnabled = true;
        cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.removeModal();
            _this.gameContinue();
        }, this);
        // 点击确定 退出游戏
        sure.touchEnabled = true;
        sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sureClick, this);
    };
    // 退出
    Day.prototype.sureClick = function () {
        this.removeModal();
        this.gameQuit();
    };
    return Day;
}(egret.DisplayObjectContainer));
__reflect(Day.prototype, "Day");
