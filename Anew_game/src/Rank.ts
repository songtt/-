class Rank extends egret.Sprite {


  // 世界排行榜
  private world;
  // 好友排行榜
  private friend;

  private _bg: Background;

  // 世界好友容器
  private worldElCont: egret.Sprite;

  // 我的好友容器
  private friendElCont: egret.Sprite;

  private rankCont;


  public constructor() {
    super();
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }
  private onAddToStage(event: egret.Event) {

    this._bg = new Background();

    this.friend = Global.friendget();
    this.world = Global.worldget();

    console.log(this.friend);
    console.log(this.world);



    this.common();
  }

  // 关闭
  private closeSelf() {
    if (Sound.soundOpen) {
      Sound.cancelSound.play(0, 1);
    }
    if (this && this.parent) {
      this.parent.removeChild(this);
    }
  }

  private common() {

    // 排行榜总容器，加一层透明黑色底层
    let friendCont = this._bg.addAlphafun();
    this.addChild(friendCont);

    friendCont.touchEnabled = true;
    friendCont.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { }, this);

    // 排行榜显示容器
    this.rankCont = new egret.Sprite();
    this.rankCont.width = 640;
    this.rankCont.height = 1138;
    this.rankCont.anchorOffsetX = this.rankCont.width / 2;
    this.rankCont.anchorOffsetY = this.rankCont.height / 2;
    friendCont.addChild(this.rankCont);

    // 动态出现
    this.rankCont.x = 540;
    this.rankCont.y = 1025;
    this.rankCont.scaleX = 0.3;
    this.rankCont.scaleY = 0.3;
    egret.Tween.get(this.rankCont).to({ scaleX: 1, scaleY: 1, x: this.rankCont.anchorOffsetX, y: this.rankCont.anchorOffsetY }, 500);

    // 关闭按钮
    let close = this._bg.element({ "name": "rank_json.close", "x": 320, "y": 870 });
    this.rankCont.addChild(close);
    close.touchEnabled = true;
    close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeSelf, this);


    // 排行榜显示容器
    let rankFrame = this._bg.element({ "name": "rank_json.rank", "x": 320, "y": 500 });
    this.rankCont.addChild(rankFrame);


    // 滚动条
    let scroll = new egret.Sprite();
    scroll.x = 530;
    scroll.y = 380;
    scroll.width = 10;
    scroll.height = 500;
    this.rankCont.addChild(scroll);

    // 滚动条底层
    let scrollBase = this._bg.oElement({ "name": "rank_json.scroll", "height": 440, "x": 0, "y": -20 });
    scroll.addChild(scrollBase);



    // 世界元素容器
    this.worldElCont = this.elScrollCont();

    // 世界滚动条
    let worldHandle = this._bg.oElement({ "name": "rank_json.handle", "width": 9, "height": 400, "x": 0, "y": 0 });
    worldHandle.scale9Grid = new egret.Rectangle(3, 3, 1, 40);

    // 世界滚动区域
    var worldScrollView = this.scorllView(this.worldElCont, worldHandle);
    this.rankCont.addChild(worldScrollView);

    // 获取世界数据
    this.getData(this.world, this.worldElCont, worldHandle);
    scroll.addChild(worldHandle);


    // 我的好友元素容器
    this.friendElCont = this.elScrollCont();

    let friendHandle = this._bg.oElement({ "name": "rank_json.handle", "width": 9, "height": 400, "x": 0, "y": 0 });
    friendHandle.scale9Grid = new egret.Rectangle(3, 3, 1, 40);

    var friendScrollView = this.scorllView(this.friendElCont, friendHandle);


    // 世界排行
    let world = this._bg.element({ "name": "rank_json.worldTxt", "x": 226, "y": 311 });
    this.rankCont.addChild(world);
    world.touchEnabled = true;
    world.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      if (friendScrollView && friendScrollView.parent) {
        if (Sound.soundOpen) {
          Sound.switchSound.play(0, 1);
        }
        friend.texture = RES.getRes("rank_json.fhtxt");
        world.texture = RES.getRes("rank_json.worldTxt");
        this.rankCont.removeChild(friendScrollView);
        this.rankCont.addChild(worldScrollView);
        scroll.removeChild(friendHandle);
        scroll.addChild(worldHandle);
      }
    }, this);


    // 好友排行
    let friend = this._bg.element({ "name": "rank_json.fhtxt", "height": 55, "x": 400, "y": 311 });
    this.rankCont.addChild(friend);

    friend.touchEnabled = true;
    friend.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      if (worldScrollView && worldScrollView.parent) {
        if (Sound.soundOpen) {
          Sound.switchSound.play(0, 1);
        }
        friend.texture = RES.getRes("rank_json.friendTxt");
        world.texture = RES.getRes("rank_json.whtxt");
        this.rankCont.removeChild(worldScrollView);

        if (this.friendElCont.$children.length) {
          this.rankCont.addChild(friendScrollView);
        } else {
          // 获取数据
          this.rankCont.addChild(friendScrollView);
          this.getData(this.friend, this.friendElCont, friendHandle);
        }
        scroll.addChild(friendHandle);
        scroll.removeChild(worldHandle);
      }
    }, this);

  }





  // 滚动区域
  private scorllView(object, handle) {
    let view: egret.ScrollView = new egret.ScrollView();
    view.width = 400;
    view.height = 420;
    view.x = 110;
    view.y = 360;
    view.horizontalScrollPolicy = "off";
    view.setContent(object);

    // 通过监听滚动实现滚动条的滚动
    view.addEventListener(egret.Event.CHANGE, () => {
      if (view.scrollTop <= 0) {
        handle.y = 0;
      } else if (view.scrollTop >= view.getMaxScrollTop()) {
        handle.y = 400 * view.getMaxScrollTop() / object.height;
      } else {
        handle.y = 400 * view.scrollTop / object.height;
      }
    }, this);
    return view;
  }


  // 滚动视图容器
  private elScrollCont() {
    let elContainer = new egret.Sprite();
    elContainer.x = 0;
    elContainer.y = 0;

    elContainer.graphics.beginFill(0x3399DB, 0);
    elContainer.graphics.drawRect(0, 0, 400, 420);
    elContainer.graphics.endFill();

    return elContainer;
  }


  // 获取排行榜信息
  private getData(type, container, handle) {
    let worldData = type.data;
    this.oneByOne(worldData, container, handle);
    // this.allIn(worldData,container);
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
  }

  private allIn(data, container) {
    for (let i = 0; i < data.length; i++) {
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
  }

  private element(obj) {
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

    let worldEl = new egret.Sprite();
    worldEl.x = -100;
    worldEl.y = obj.y;
    worldEl.graphics.beginFill(0x3399DB, 0);
    worldEl.graphics.drawRect(0, 0, 400, 100);
    worldEl.graphics.endFill();

    obj.container.addChild(worldEl);
    egret.Tween.get(worldEl).to({ x: 0 }, 1000, egret.Ease.bounceOut);


    // userId
    let id: egret.TextField = new egret.TextField();
    id.text = obj.userId;;
    worldEl.addChild(id);
    id.visible = false;

    // 头像
    let portrait = new egret.Bitmap();
    portrait.x = 66;
    portrait.y = 8;
    portrait.width = 70;
    portrait.height = 70;
    var resUrl;
    if (obj.url) {
      resUrl = obj.url;
    } else {
      resUrl = "https://dfw.hebzycw.com/resource/assets/logo.png";
    }
    RES.getResByUrl(resUrl, (event) => {
      portrait.texture = <egret.Texture>event;
    }, this, RES.ResourceItem.TYPE_IMAGE);
    worldEl.addChild(portrait);


    // 外框
    let elframe = this._bg.oElement({ "name": "rank_json.elframe", "x": 0, "y": 0 });
    worldEl.addChild(elframe);


    // 名次
    let rank = new egret.TextField();
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
    let nickName = new egret.TextField();
    nickName.x = 150;
    nickName.y = 0;
    nickName.width = 170;
    nickName.height = 90;
    if (obj.nickName) {
      nickName.text = obj.nickName;
    } else {
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
    let around = this._bg.oElement({ "name": "rank_json.around", "x": 330, "y": 12 });
    worldEl.addChild(around);

    around.touchEnabled = true;
    around.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      if (Sound.soundOpen) {
        Sound.bankSound.play(0, 1);
      }
      let friend: any = around.parent.getChildAt(0);
      let friendId = friend.text;
      this.closeSelf();
      //获取串门好友信息 并切换场景至好友房屋场景
      this.getFriendInfo(friendId);
    }, this)

    return worldEl;


  }

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
        this.getFriendInfo(friendId)
      },
      complete: (res: any) => { }
    });
  }


}