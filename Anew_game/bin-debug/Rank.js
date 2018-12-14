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
var Rank = (function (_super) {
    __extends(Rank, _super);
    function Rank() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Rank.prototype.onAddToStage = function (event) {
        this._bg = new Background();
        this.friend = Global.friendget();
        this.world = Global.worldget();
        console.log(this.friend);
        console.log(this.world);
        this.common();
    };
    Rank.prototype.common = function () {
        var _this = this;
        // 排行榜总容器，加一层透明黑色底层
        var friendCont = new egret.Sprite();
        this.addChild(friendCont);
        friendCont.graphics.beginFill(0x000000, 0.6);
        friendCont.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
        friendCont.graphics.endFill();
        friendCont.touchEnabled = true;
        friendCont.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { }, this);
        // 排行榜显示容器
        this.rankCont = new egret.Sprite();
        this.rankCont.x = this.stage.width / 2;
        this.rankCont.y = this.stage.height / 2;
        this.rankCont.width = this.stage.width;
        this.rankCont.height = this.stage.height;
        this.rankCont.anchorOffsetX = this.rankCont.width / 2;
        this.rankCont.anchorOffsetY = this.rankCont.height / 2;
        friendCont.addChild(this.rankCont);
        // 动态出现
        egret.Tween.get(this.rankCont).to({ scaleX: 0.3, scaleY: 0.3, x: 540, y: 1025 }, 1).to({ scaleX: 1, scaleY: 1, x: this.stage.width / 2, y: this.stage.height / 2 }, 500);
        // 关闭按钮
        var close = this._bg.element({ "name": "rank_json.close", "x": this.stage.width / 2, "y": 870 });
        this.rankCont.addChild(close);
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this && _this.parent) {
                _this.parent.removeChild(_this);
            }
        }, this);
        // 排行榜显示容器
        var rankFrame = this._bg.element({ "name": "rank_json.rank", "x": this.stage.width / 2, "y": 500 });
        this.rankCont.addChild(rankFrame);
        // 滚动条
        var scroll = new egret.Sprite();
        scroll.x = 530;
        scroll.y = 380;
        scroll.width = 10;
        scroll.height = 500;
        this.rankCont.addChild(scroll);
        // 滚动条底层
        var scrollBase = this._bg.oElement({ "name": "rank_json.scroll", "height": 400, "x": 0, "y": 0 });
        scroll.addChild(scrollBase);
        // 世界元素容器
        this.worldElCont = this.elScrollCont();
        // 世界滚动条
        var worldHandle = this._bg.oElement({ "name": "rank_json.handle", "width": 9, "height": 400, "x": 0, "y": 0 });
        worldHandle.scale9Grid = new egret.Rectangle(3, 3, 1, 40);
        // 世界滚动区域
        var worldScrollView = this.scorllView(this.worldElCont, worldHandle);
        this.rankCont.addChild(worldScrollView);
        // 获取世界数据
        this.getData(this.world, this.worldElCont, worldHandle);
        scroll.addChild(worldHandle);
        // 我的好友元素容器
        this.friendElCont = this.elScrollCont();
        var friendHandle = this._bg.oElement({ "name": "rank_json.handle", "width": 9, "height": 400, "x": 0, "y": 0 });
        friendHandle.scale9Grid = new egret.Rectangle(3, 3, 1, 40);
        var friendScrollView = this.scorllView(this.friendElCont, friendHandle);
        // 世界排行
        var world = this._bg.element({ "name": "rank_json.worldTxt", "x": 230, "y": 310 });
        this.rankCont.addChild(world);
        world.touchEnabled = true;
        world.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (friendScrollView && friendScrollView.parent) {
                friend.texture = RES.getRes("rank_json.fhtxt");
                world.texture = RES.getRes("rank_json.worldTxt");
                _this.rankCont.removeChild(friendScrollView);
                _this.rankCont.addChild(worldScrollView);
                scroll.removeChild(friendHandle);
                scroll.addChild(worldHandle);
            }
        }, this);
        // 好友排行
        var friend = this._bg.element({ "name": "rank_json.fhtxt", "height": 55, "x": 402, "y": 310 });
        this.rankCont.addChild(friend);
        friend.touchEnabled = true;
        friend.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (worldScrollView && worldScrollView.parent) {
                friend.texture = RES.getRes("rank_json.friendTxt");
                world.texture = RES.getRes("rank_json.whtxt");
                _this.rankCont.removeChild(worldScrollView);
                if (_this.friendElCont.$children.length) {
                    _this.rankCont.addChild(friendScrollView);
                }
                else {
                    // 获取数据
                    _this.rankCont.addChild(friendScrollView);
                    _this.getData(_this.friend, _this.friendElCont, friendHandle);
                }
                scroll.addChild(friendHandle);
                scroll.removeChild(worldHandle);
            }
        }, this);
    };
    // 滚动区域
    Rank.prototype.scorllView = function (object, handle) {
        var view = new egret.ScrollView();
        view.width = 400;
        view.height = 420;
        view.x = 110;
        view.y = 360;
        view.horizontalScrollPolicy = "off";
        view.setContent(object);
        // 通过监听滚动实现滚动条的滚动
        view.addEventListener(egret.Event.CHANGE, function () {
            if (view.scrollTop <= 0) {
                handle.y = 0;
            }
            else if (view.scrollTop >= view.getMaxScrollTop()) {
                handle.y = 400 * view.getMaxScrollTop() / object.height;
            }
            else {
                handle.y = 400 * view.scrollTop / object.height;
            }
        }, this);
        return view;
    };
    // 滚动视图容器
    Rank.prototype.elScrollCont = function () {
        var elContainer = new egret.Sprite();
        elContainer.x = 0;
        elContainer.y = 0;
        elContainer.graphics.beginFill(0x3399DB, 0);
        elContainer.graphics.drawRect(0, 0, 400, 420);
        elContainer.graphics.endFill();
        return elContainer;
    };
    // 获取排行榜信息
    Rank.prototype.getData = function (type, container, handle) {
        var worldData = type.data;
        this.oneByOne(worldData, container, handle);
        // this.allIn(worldData,container);
    };
    // 获取每一条数据，并设置滚动条。
    Rank.prototype.oneByOne = function (data, container, handle) {
        var i = 0;
        var time = egret.setInterval(function () {
            if (i >= data.length) {
                egret.clearInterval(time);
                return;
            }
            this.element({
                container: container,
                userId: data[i].id,
                y: 100 * i,
                rankNum: data[i].rank,
                url: data[i].avatarUrl,
                nickName: data[i].nickName,
                land: data[i].land,
                house: data[i].house,
            });
            i++;
            egret.Tween.get(handle).to({ height: 420 * 400 / container.height }, 200);
        }, this, 200);
    };
    Rank.prototype.allIn = function (data, container) {
        for (var i = 0; i < data.length; i++) {
            this.element({
                container: container,
                userId: data[i].id,
                y: 100 * i,
                rankNum: data[i].rank,
                url: data[i].avatarUrl,
                nickName: data[i].nickName,
                land: data[i].land,
                house: data[i].house,
            });
        }
    };
    Rank.prototype.element = function (obj) {
        // 参数的格式
        // obj = {
        //   container: egret.Bitmap,
        //   id : data.id,
        //   y : 110*i,
        //   rankNum : data.rank,
        //   url : data.avatarUrl,
        //   nickName:data.nickName,
        //   land: data.land,
        //   house: data.house,
        // }
        var worldEl = new egret.Sprite();
        worldEl.x = -100;
        worldEl.y = obj.y;
        worldEl.graphics.beginFill(0x3399DB, 0);
        worldEl.graphics.drawRect(0, 0, 400, 100);
        worldEl.graphics.endFill();
        obj.container.addChild(worldEl);
        egret.Tween.get(worldEl).to({ x: 0 }, 1000, egret.Ease.bounceOut);
        // userId
        var id = new egret.TextField();
        id.text = obj.userId;
        ;
        worldEl.addChild(id);
        id.visible = false;
        // 头像
        var portrait = new egret.Bitmap();
        portrait.x = 66;
        portrait.y = 8;
        portrait.width = 70;
        portrait.height = 70;
        var resUrl;
        if (obj.url) {
            resUrl = obj.url;
        }
        else {
            resUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529996800391&di=37858454b834f5a8353212c8f0945700&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-09-27%2F123319877.jpg";
        }
        RES.getResByUrl(resUrl, function (event) {
            portrait.texture = event;
        }, this, RES.ResourceItem.TYPE_IMAGE);
        worldEl.addChild(portrait);
        // 外框
        var elframe = this._bg.oElement({ "name": "rank_json.elframe", "x": 0, "y": 0 });
        worldEl.addChild(elframe);
        // 名次
        var rank = new egret.TextField();
        rank.x = 5;
        rank.y = 0;
        rank.width = 60;
        rank.height = 90;
        rank.text = obj.rankNum;
        rank.bold = true;
        rank.size = 32;
        rank.textColor = 0xffffff;
        rank.strokeColor = 0xE88C12;
        rank.stroke = 2;
        rank.textAlign = egret.HorizontalAlign.CENTER;
        rank.verticalAlign = egret.VerticalAlign.MIDDLE;
        worldEl.addChild(rank);
        // 昵称
        var nickName = new egret.TextField();
        nickName.x = 150;
        nickName.y = 0;
        nickName.width = 170;
        nickName.height = 90;
        if (obj.nickName) {
            nickName.text = obj.nickName;
        }
        else {
            nickName.text = "大陆王者";
        }
        nickName.fontFamily = "Microsoft YaHei";
        nickName.size = 22;
        nickName.textColor = 0xffffff;
        nickName.strokeColor = 0x3A230A;
        nickName.stroke = 2;
        nickName.textAlign = egret.HorizontalAlign.LEFT;
        nickName.verticalAlign = egret.VerticalAlign.MIDDLE;
        worldEl.addChild(nickName);
        // 串门
        var around = this._bg.oElement({ "name": "rank_json.around", "x": 330, "y": 12 });
        worldEl.addChild(around);
        around.touchEnabled = true;
        around.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            var friend = around.parent.getChildAt(0);
            var friendId = friend.text;
            console.log(friendId);
            Newscenes.getInstance().changeScene({ 'name': 'FriendHouse', "value": "" });
        }, this);
        return worldEl;
    };
    return Rank;
}(egret.Sprite));
__reflect(Rank.prototype, "Rank");
