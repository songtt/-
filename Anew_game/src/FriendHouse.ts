class FriendHouse extends egret.DisplayObjectContainer {
  //好友房屋全部信息
  private friendInfo;
  //游戏场景背景
  private _bg: Background;

  // 好友房屋
  private fHouse;

  private modal: Modal = new Modal();


  // 房屋信息
  private fhMessage: egret.Bitmap;
  private fhmloss;
  private fhmneed;

  // 整修房屋
  private helpfriend: egret.Bitmap;
  private fixLeft;
  private fixRight;


  // 破坏好友房屋
  private destroy: egret.Bitmap;

  // 金币数
  private goldText: egret.TextField;
  private goldNum: number;

  //好友互动
  private web_socket;

  //攻击次数
  private attackNum;

  //通知文字
  private noticBg;
  private noticeTxt;
  private notic;
  private noticBag;


  // 数据
  private playerId;  // 玩家大陆等级
  private playerLandId;  // 玩家大陆等级
  private playerHouseId;  // 玩家房屋等级
  private playerHouseLoss;  // 玩家房屋折损程度
  private playerDefe;  // 玩家是否使用了防御卡
  private defenseUse; //玩家的防御卡
  private playerDefeTime; //玩家的防御卡时效


  public constructor() {
    super();
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }
  private onAddToStage(event: egret.Event) {
    //好友房屋的信息
    this.friendInfo = Global.randget();
    this.playerId = this.friendInfo.data.id;
    this.playerLandId = this.friendInfo.data.land;
    this.playerHouseId = this.friendInfo.data.house;
    this.playerHouseLoss = this.friendInfo.data.house_loss;
    this.playerDefe = this.friendInfo.data.defense;
    this.playerDefeTime = this.friendInfo.data.defense_time;

    


    //背景
    this._bg = new Background();
    this.addChild(this._bg.stage_bg({ "name": "houseBg_png", "width": this.stage.stageWidth, "height": this.stage.stageHeight }));

    // 标题
    let mhTitle = this._bg.element({ "name": `houseEl_json.fhtitle`, "x": this.stage.stageWidth / 2, "y": 60 });
    this.addChild(mhTitle);

    // 好友房屋
    this.fHouse = new HouseSwitch();
    this.addChild(this.fHouse);
    this.fHouse.house(this.playerLandId, this.playerHouseId);
    this.fHouse.hLoss(this.playerLandId, this.playerHouseLoss);
    Global.fHouse = this.fHouse;
    this.addChild(this.fHouse);

    //防御卡效果
    this.defenseUse = this._bg.element({ "name": "cardUse_json.defense", width: 620, height: 530, "x": 320, "y": 540 });
    this.addChild(this.defenseUse);
    let ctime = new Date().getTime(); //当天的时间戳
    let defeTime = ctime - Number(this.playerDefeTime);
    if (this.playerDefe == 1 && defeTime > 0 && defeTime <= 86400000) {
      this.defenseUse.alpha = 1;
    } else {
      this.defenseUse.alpha = 0;
    }

    // 房屋信息
    let fhMessage = new egret.Sprite();
    fhMessage.x = 430;
    fhMessage.y = 170;
    fhMessage.width = 200;
    fhMessage.height = 200;
    this.addChild(fhMessage);

    let fhmframe = this._bg.element({ "name": "houseEl_json.fhmessage", "x": 100, "y": 100 });
    fhMessage.addChild(fhmframe);


    let gradeText = `${Global.landData[Number(this.playerLandId) - 1].landName} / ${this.playerHouseId} 级`;
    let fhmhouse = this._bg.addtxt({ "text": "等级：" + gradeText, color: 0x3E0F00, x: 5, y: 130, size: 19 })
    fhMessage.addChild(fhmhouse);

    Global.friendlossNum = this.friendInfo.data.house_loss;
    this.fhmloss = this._bg.addtxt({ "text": "折损程度：" + Global.friendlossNum, color: 0x3E0F00, x: 5, y: 155, size: 19 })
    fhMessage.addChild(this.fhmloss);
    Global.friendHLoss = this.fhmloss;

    this.fhmneed = this._bg.addtxt({ "text": `整修所需金币：${Global.fixPrice[this.playerHouseLoss]}`, color: 0x3E0F00, x: 5, y: 180, size: 19 })
    fhMessage.addChild(this.fhmneed);



    //设置攻击的各种动态效果
    this.addChild(Global.special);


    // 回家
    let goHome = this._bg.element({ "name": "houseEl_json.gohome", "x": 85, "y": 90 });
    this.addChild(goHome);
    goHome.touchEnabled = true;
    goHome.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backToHome, this);


    // 帮好友整修
    this.helpfriend = this._bg.element({ "name": `houseEl_json.helpfriend`, "x": 200, "y": 950 });
    this.addChild(this.helpfriend);
    this.helpfriend.touchEnabled = true;
    this.helpfriend.addEventListener(egret.TouchEvent.TOUCH_TAP, this.friendFix, this);
    // 整修特效图片
    this.fixLeft = this._bg.oElement({ "name": "houseFix_json.left", "width": 642, "x": -600, "y": 350 });
    this.fixRight = this._bg.oElement({ "name": "houseFix_json.right", "x": 640, "y": 350 });


    // 破坏好友房屋
    this.destroy = this._bg.element({ "name": `houseEl_json.destroy`, "x": 450, "y": 950 });
    this.addChild(this.destroy);
    let aegis = this._bg.addpoint({ "text": "", "color": "0xFFFFFF", "y": 148, "size": 22 });

    this.destroy.touchEnabled = true;
    this.destroy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.destroyfun, this);

    if(Number(this.playerId) == Number(egret.localStorage.getItem("userId"))){
      this.removeChild(this.helpfriend);
      this.removeChild(this.destroy);
    }


    //金币数
    let goldFrame = this._bg.element({ "name": "day_json.dayscore", "x": 557, "y": 110 });
    this.addChild(goldFrame);

    if (egret.localStorage.getItem("money")) {
      this.goldNum = Number(egret.localStorage.getItem("money"));
    }
    this.goldText = this._bg.addtxt({ "text": Math.floor(this.goldNum / 1000) + "k", "color": "0x610C1e", "x": 537, "y": 100 });
    this.addChild(this.goldText);

    //通知
    this.noticBg = this.modal.noticBg({ y: 148, width: 640, height: 40, ap: 0.3 });
    this.notic = this._bg.addpoint({ "text": " ", "color": "0xFFFFFF", x: 10, "y": 160, "size": 22 });
    this.noticBg.addChild(this.notic);
    this.noticBg.alpha = 0;
    this.addChild(this.noticBg);
  }

  //折损满级提醒
  private aegisFun() {
    this.noticBg.alpha = 1;
    this.destroy.touchEnabled = false;
    this.notic.text = "通知：该玩家已被打残，进入系统保护阶段不可被攻击！";
    egret.Tween.get(this.notic).to({ x: 640, y: 160 }, 1).to({ x: 0, y: 160 }, 12000, );
    egret.setTimeout(function () {
      this.notic.text = '';
      this.noticBg.alpha = 0;
      this.destroy.touchEnabled = true;
    }, this, 20000);
  }

  // 整修好友房屋
  private friendFix() {

    let fixPrice = Global.fixPrice[Global.friendlossNum];

    if (Global.friendlossNum == 0) {
      if (Sound.soundOpen) {
        Sound.tipSound.play(0, 1);
      }
      this.addChild(this.modal);
      this.modal.tip(`当前房屋满级，不需要整修！`);
    } else if (this.goldNum >= fixPrice) {
      if (Sound.soundOpen) {
        Sound.tipSound.play(0, 1);
      }
      this.helpFixModal(fixPrice);
    } else {
      if (Sound.soundOpen) {
        Sound.wrongTipSound.play(0, 1);
      }
      this.goGameModal(fixPrice);
    }

  }
  // 房屋整修特效
  private fixEffectes() {
    this.addChild(this.fixLeft);
    this.fixLeft.alpha = 0;
    this.addChild(this.fixRight);
    this.fixRight.alpha = 0;
    this.fixLeft.touchEnabled = true;
    this.fixRight.touchEnabled = true;
  }
  // 整修模态框
  private helpFixModal(fixPrice) {
    this.addChild(this.modal);
    this.modal.helpFriendFix(fixPrice);

    let close = Modal.btnCont.getChildAt(0);
    let cancel = Modal.btnCont.getChildAt(1);
    let sure = Modal.btnCont.getChildAt(2);

    // 点击关闭。
    close.touchEnabled = true;
    close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeModal, this);
    // 点击取消
    cancel.touchEnabled = true;
    cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeModal, this);

    // 点击确定。
    sure.touchEnabled = true;
    sure.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      if (Sound.soundOpen) {
        Sound.luckySound.play(0, 1);
      }
      Global.friendlossNum = 0;
      this.destroy.touchEnabled = true;
      this.notic.text = '';
      this.noticBg.alpha = 0;
      //发送websocket给好友
      this.websocketAttack("help");
      this.closeModal();

      // 整修房屋特效
      this.fixEffectes();
      egret.Tween.get(this.fixLeft).to({ x: -100, y: 350, alpha: 1 }, 500).wait(500).to({ x: -600, y: 350, alpha: 0 }, 500);
      egret.Tween.get(this.fixRight).to({ x: 100, y: 350, alpha: 1 }, 500).call(function () {

        this.fHouse.hLoss(this.playerLandId, 0);

      }, this).wait(500).to({ x: 640, y: 350, alpha: 0 }, 500).call(function () {
        this.removeChild(this.fixLeft);
        this.removeChild(this.fixRight);
      }, this);




      // 改变金币并存储
      this.goldNum -= fixPrice;
      this.goldText.text = Math.floor(this.goldNum / 1000) + "k";
      egret.localStorage.setItem("money", this.goldNum.toString());
      // 改变房屋折损等级并传至后台
      this.playerHouseLoss = 0;
      // 改变房屋信息
      this.fhmloss.text = "折损程度：0";
      this.fhmneed.text = "整修所需金币：0";
      Global.updateParam({ userId: this.playerId, name: "house_loss", params: 0 })
    }, this);
  }
  // 资金不足模态框
  private goGameModal(price) {
    this.addChild(this.modal);
    this.modal.poorModal(price);

    let close = Modal.btnCont.getChildAt(0);
    let cancel = Modal.btnCont.getChildAt(1);
    let sure = Modal.btnCont.getChildAt(2);

    // 点击关闭。
    close.touchEnabled = true;
    close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeModal, this);

    // 点击取消。
    cancel.touchEnabled = true;
    cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeModal, this);

    // 返回游戏
    sure.touchEnabled = true;
    sure.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      this.closeModal();
      Newscenes.getInstance().changeScene('Game');
    }, this);
  }

  // 关闭模态框
  private closeModal() {
    if (Sound.soundOpen) {
      Sound.cancelSound.play(0, 1);
    }
    this.modal.removeChildren();
    this.removeChild(this.modal);
  }

  // 返回事件
  private backToHome() {
    if (Sound.soundOpen) {
      Sound.backSound.play(0, 1);
    }
    Global.fHouse = '';
    Global.friendlossNum = '';

    Newscenes.getInstance().changeScene('House');
  }

  //破坏好友房屋的互动事件
  private destroyfun() {
    //如果使用了防御卡则不可被攻击
    let ctime = new Date().getTime(); //当天的时间戳
    let defeTime = ctime - Number(this.playerDefeTime);
    if (this.playerDefe == 1 && defeTime > 0 && defeTime <= 86400000) {
      if (Sound.soundOpen) {
        Sound.defenseSound.play(0, 1);
      }
      this.playDefe();
    } else {
      //如果房子折损到达5级  则提示打残
      if (Global.friendlossNum == 5) {
        if (Sound.soundOpen) {
          Sound.wrongTipSound.play(0, 1);
        }
        this.aegisFun();
      } else {
        //每日5次免费攻击机会
        let curDate = egret.localStorage.getItem("curDate");
        if (!egret.localStorage.getItem("attackTime")) {
          egret.localStorage.setItem("attackTime", curDate);
        }
        if (!egret.localStorage.getItem("attackNum")) {
          egret.localStorage.setItem("attackNum", "5");
        }
        if (egret.localStorage.getItem("attackTime") < curDate) {

          egret.localStorage.setItem("attackTime", curDate);
          egret.localStorage.setItem("attackNum", "5");
        }
        this.attackNum = Number(egret.localStorage.getItem("attackNum"));

        if (this.attackNum <= 0) {
          if (Sound.soundOpen) {
            Sound.tipSound.play(0, 1);
          }
          //弹出使用攻击卡的弹框
          this.auseAttack();
        } else {
          if (Sound.soundOpen) {
            Sound.attackSound.play(0, 1);
          }
          console.log(this.attackNum);
          this.attackNum = this.attackNum - 1;
          egret.localStorage.setItem("attackNum", this.attackNum);
          this.websocketAttack("attack");
        }
      }
    }

  }

  //攻击好友
  private websocketAttack(param) {
    if (param == "attack") {
      Global.friendlossNum = Global.friendlossNum + 1;
      Global.friendHLoss.text = "折损程度：" + Global.friendlossNum;
      this.fhmneed.text = `整修所需金币：${Global.fixPrice[Global.friendlossNum]}`;
      Global.fHouse.hLoss(this.playerLandId, Global.friendlossNum);
      //发送更新接口
      Global.updateParam({ userId: this.playerId, name: 'house_loss', params: Global.friendlossNum });
    }
    //websocket互动
    this.web_socket = Connection.webSocket;
    //攻击某个好友的房屋
    let obj = { do: param, userId: egret.localStorage.getItem("userId"), coust: this.friendInfo.data.id };
    let cmd = JSON.stringify(obj);
    this.web_socket.writeUTF(cmd);
  }

  //好友使用了防御卡提醒弹窗
  private playDefe() {
    this.addChild(this.modal);
    this.modal.attacktoDefe();

    let close = Modal.btnCont.getChildAt(0);
    let sure = Modal.btnCont.getChildAt(1);
    close.touchEnabled = true;
    close.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      if (Sound.soundOpen) {
        Sound.cancelSound.play(0, 1);
      }
      this.modal.removeChildren();
      this.removeChild(this.modal);
    }, this); //关闭

    sure.touchEnabled = true;
    sure.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      if (Sound.soundOpen) {
        Sound.cancelSound.play(0, 1);
      }
      this.modal.removeChildren();
      this.removeChild(this.modal);
    }, this); //关闭
  }


  //没有攻击次数  展示使用攻击卡弹窗
  private auseAttack() {
    this.addChild(this.modal);
    this.modal.useAttack();

    let close = Modal.btnCont.getChildAt(0);
    let join = Modal.btnCont.getChildAt(1); //使用卡片
    let share = Modal.btnCont.getChildAt(2);

    close.touchEnabled = true;
    close.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      if (Sound.soundOpen) {
        Sound.cancelSound.play(0, 1);
      }
      this.modal.removeChildren();
      this.removeChild(this.modal);
    }, this); //关闭

    join.touchEnabled = true;
    join.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      this.modal.removeChildren();
      this.removeChild(this.modal);
      if (Number(egret.localStorage.getItem("attack_card")) <= 0) {
        this.onshare();     //攻击卡为0时直接跳分享        
      } else {
        if (Sound.soundOpen) {
          Sound.attackSound.play(0, 1);
        }
        let numloc = Number(egret.localStorage.getItem("attack_card")) - 1;
        egret.localStorage.setItem("attack_card", numloc.toString());
        this.websocketAttack("attack");
      }
    }, this);  //使用攻击卡

    share.touchEnabled = true;
    share.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      this.modal.removeChildren();
      this.removeChild(this.modal);
      this.onshare();
    }, this); //分享
  }
  //分享
  private onshare() {
    if (Sound.soundOpen) {
      Sound.tipSound.play(0, 1);
    }
    wx.shareAppMessage({
      title: "来呀~互相伤害~",
      imageUrl: "https://dfw.hebzycw.com/resource/assets/share1.png",
      query: ""
    });
  }
}