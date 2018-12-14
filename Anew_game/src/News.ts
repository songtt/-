//消息
class News extends egret.Sprite {
    private _bg: Background;
    // 消息
    private news;
    private newCount;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        this._bg = new Background();

        this.news = Global.newget();
        console.log(this.news);
        this.init();
    }

    //消息
    private init() {
        // // 加一层透明底层
        let newAlpha = this._bg.addAlphafun();
        this.addChild(newAlpha);
        newAlpha.touchEnabled = true;
        newAlpha.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { }, this);


        //消息显示容器
        this.newCount = new egret.Sprite();
        this.newCount.x = 320;
        this.newCount.y = 570;
        this.newCount.width = 640;
        this.newCount.height = 1138;
        this.newCount.anchorOffsetX = this.newCount.width / 2;
        this.newCount.anchorOffsetY = this.newCount.height / 2;
        newAlpha.addChild(this.newCount);
        // 动态出现
        egret.Tween.get(this.newCount).to({ scaleX: 0.3, scaleY: 0.3, x: 540, y: 1025 }, 1).to({ scaleX: 1, scaleY: 1, x: 320, y: 570 }, 500);

        // 模态框外框
        let mfImg = this._bg.element({ "name": "news_json.new", "x": 320, "y": 500 });
        this.newCount.addChild(mfImg);

        // 关闭按钮
        let closeImg = this._bg.element({ "name": "cardCenter_json.close", "x": 320, "y": 870 });
        this.newCount.addChild(closeImg);
        closeImg.touchEnabled = true;
        closeImg.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            if (Sound.soundOpen) {
                Sound.cancelSound.play(0, 1);
            }
            this.removeChild(newAlpha);
        }, this);

        // 滚动条
        let scroll = new egret.Sprite();
        scroll.x = 530;
        scroll.y = 275;
        scroll.width = 10;
        scroll.height = 500;
        this.newCount.addChild(scroll);

        // 滚动条底层
        let scrollBase = this._bg.oElement({ "name": "rank_json.scroll", "height": 500, "x": 0, "y": 0 });
        scroll.addChild(scrollBase);

        let elContainer = new egret.Sprite();
        elContainer.x = 0;
        elContainer.y = 0;
        elContainer.graphics.beginFill(0x3399DB, 0);
        elContainer.graphics.drawRect(0, 0, 400, 500);
        elContainer.graphics.endFill();

        // 滚动条
        let handle = this._bg.oElement({ "name": "rank_json.handle", "width": 9, "height": 500, "x": 0, "y": 0 });
        //添加滚动视图
        let view: egret.ScrollView = new egret.ScrollView();
        view.width = 400;
        view.height = 480;
        view.x = 110;
        view.y = 280;
        view.horizontalScrollPolicy = "off";
        view.setContent(elContainer);
        this.newCount.addChild(view);
        // 通过监听滚动实现滚动条的滚动
        view.addEventListener(egret.Event.CHANGE, () => {
            if (view.scrollTop <= 0) {
                handle.y = 0;
            } else if (view.scrollTop >= view.getMaxScrollTop()) {
                handle.y = 400 * view.getMaxScrollTop() / elContainer.height;
            } else {
                handle.y = 400 * view.scrollTop / elContainer.height;
            }
        }, this);
        scroll.addChild(handle);

        this.oneByOne(this.news.data, elContainer, handle)

    }

    // 获取每一条数据，并设置滚动条。
    private oneByOne(data, container, handle) {
        var i = 0;
        var time = egret.setInterval(function () {
            if (i >= data.length) {
                egret.clearInterval(time);
                return;
            }
            this.element({
                container: container,
                txt: "玩家" + data[i].userId + "累计" + data[i].do_type + "了你的房子" + data[i].do_num + "次",
                id: data[i].id,
                userId: data[i].userId,
                y: 100 * i
            }, i);
            i++;

            egret.Tween.get(handle).to({ height: 480 * 500 / container.height }, 200);

        }, this, 200);
    }
    private element(obj, i) {
        let newsBg = new egret.Sprite();
        newsBg.x = -50;
        newsBg.y = obj.y;
        newsBg.graphics.beginFill(0x3399DB, 0);
        newsBg.graphics.drawRect(0, 0, 400, 100);
        newsBg.graphics.endFill();
        obj.container.addChild(newsBg);
        egret.Tween.get(newsBg).to({ x: 0 }, 1000, egret.Ease.bounceOut);

        // 外框
        let elframe = this._bg.oElement({ "name": "news_json.newsup", "x": 0, "y": 0 });
        elframe.height = elframe.height - 10;
        newsBg.addChild(elframe);

        //消息内容
        let txt = new egret.TextField();
        txt.x = 30;
        txt.y = 0;
        txt.width = 300;
        txt.height = 90;
        txt.text = obj.txt;
        txt.fontFamily = "Microsoft YaHei";
        txt.size = 22;
        txt.textColor = 0xffffff;
        txt.strokeColor = 0x3A230A;
        txt.stroke = 2;
        txt.textAlign = egret.HorizontalAlign.LEFT;
        txt.verticalAlign = egret.VerticalAlign.MIDDLE;
        newsBg.addChild(txt);
        txt.touchEnabled = true;
        txt.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            if (Sound.soundOpen) {
                Sound.bankSound.play(0, 1);
            }
            elframe.texture = RES.getRes("news_json.newsdone");
            this.lookMessage(obj.id, obj.userId, i);
        }, this)

        return newsBg;
    }

    //此处的userId是攻击者的id
    private lookMessage(id, userId, i) {
        //跳转至攻击方的房子
        this.getFriendInfo(userId);

        //删除当前点击的信息 并更新全局变量
        this.news.data.splice(i, 1);
        Global.newset(this.news);

        //更新数据库的消息
        this.requestfun(id);

    }

    //更新数据库的消息
    private requestfun(id) {
        wx.request({
            url: "https://dfw.hebzycw.com/api/News/updateNews",
            data: {
                id: id,
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            dataType: "json",
            success: (res: any) => {
            },
            fail: (res: any) => {
                console.log("更新消息失败重新请求");
                this.requestfun(id);
            },
            complete: (res: any) => { }
        });
    }


    //跳转至攻击方的房子
    private getFriendInfo(friendId) {
        //好友排行
        wx.request({
            url: "https://dfw.hebzycw.com/api/house/friends",
            data: {
                friendId: friendId,
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            dataType: "json",
            success: (res: any) => {
                console.log("获取去串门好友信息成功");
                console.log(res);
                Global.randset(res);
                Newscenes.getInstance().changeScene('FriendHouse');
            },
            fail: (res: any) => {
                console.log("获取串门好友信息失败，请稍后在试！");
                this.getFriendInfo(friendId);
            },
            complete: (res: any) => { }
        });
    }

}