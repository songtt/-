class House extends egret.DisplayObjectContainer {
  //游戏场景背景
  private _bg: Background;

  // 我的房屋
  private mHouse;

  // 去玩游戏
  private goGame: egret.Bitmap;
  // 地图
  private map: egret.Bitmap;
  // 好友房屋
  private fHouse: egret.Bitmap;
  // 整修房屋
  private fixHouse: egret.Bitmap;
  // 升级房屋
  private upHouse: egret.Bitmap;
  // 背包
  private package: egret.Bitmap;
  // 消息
  private message;
  private news;
  // 金币数
  private goldText: egret.TextField;

  // 房屋等级
  private houseGrade: egret.TextField;

  private ugUp;
  private ugDown;

  private fixLeft;
  private fixRight;

  //好友互动
  private socketRes: egret.TextField;
  private web_socket;

  private modal: Modal = new Modal();

  // 数据 
  private playerLandId: string;       // 玩家大陆等级
  private playerHouseId;      // 房屋等级
  private goldNum: number;    // 金币数
  private houseLoss: number;  // 房屋折损等级

  private curDate;  //服务器时间
  private defenseUse;  //防御卡特效


  public constructor() {
    super();
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);

  }

  private onAddToStage(event: egret.Event) {

    // 数据
    // 房屋等级
    if (egret.localStorage.getItem("house")) {
      this.playerHouseId = egret.localStorage.getItem("house");
    }

    // 金币数
    if (egret.localStorage.getItem("money")) {
      this.goldNum = Number(egret.localStorage.getItem("money"));
    }

    // 大陆等级
    if (egret.localStorage.getItem("land")) {
      this.playerLandId = egret.localStorage.getItem("land");
    }

    // 房屋折损等级
    if (egret.localStorage.getItem("house_loss")) {
      this.houseLoss = Number(egret.localStorage.getItem("house_loss"));
    }

    //背景
    this._bg = new Background();
    this.addChild(this._bg.stage_bg({ "name": "houseBg_png", "width": this.stage.stageWidth, "height": this.stage.stageHeight }));

    let mhTitle = this._bg.element({ "name": `houseEl_json.mhtitle`, "x": this.stage.stageWidth / 2, "y": 60 });
    this.addChild(mhTitle);

    //普渡终生卡特效
    let saveUse = this._bg.element({ "name": "cardUse_json.save", width: 680, height: 830, "x": 310, "y": 550 });
    saveUse.alpha = 0;
    Global.save = saveUse;
    this.addChild(saveUse);

    
                // Global.save.x = 280;
                // Global.save.y = 530;
                // Global.save.width = 620;
                // Global.save.height = 770;



    //陨石卡特效
    Global.rock = Global.rockEffect();
    this.addChild(Global.rock);

    // 我的房屋
    this.mHouse = new HouseSwitch();
    this.addChild(this.mHouse);
    this.mHouse.house(this.playerLandId, this.playerHouseId);
    this.mHouse.hLoss(this.playerLandId, this.houseLoss);//房屋折损特效
    Global.mHouse = this.mHouse;
    // this.mHouse.touchEnabled = true;
    this.mHouse.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showHouseMap, this);

    //防御卡特效
    this.curDate = new Date().getTime(); //当天的时间戳
    this.defenseUse = this._bg.element({ "name": "cardUse_json.defense", width: 620, height: 530, "x": 320, "y": 540 });
    this.addChild(this.defenseUse);
    let defenseTime = this.curDate - Number(egret.localStorage.getItem("defense_time"));
    if (Number(egret.localStorage.getItem("defense")) == 1 && defenseTime > 0 && defenseTime <= 86400000) {
      this.defenseUse.alpha = 1;
    } else {
      egret.localStorage.setItem("defense", '0');
      this.defenseUse.alpha = 0;
    }

    // 底部基座
    let bottom = this._bg.oElement({ "name": `houseEl_json.bottom`, "x": 20, "y": 1033 });
    this.addChild(bottom);



    // 去玩游戏
    this.goGame = this._bg.element({ "name": `houseEl_json.game`, "x": this.stage.stageWidth / 2 - 5, "y": 1030 });
    this.addChild(this.goGame);
    this.goGame.touchEnabled = true;
    this.goGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backToGame, this);

    // 地图
    this.map = this._bg.element({ "name": `houseEl_json.worldmap`, "x": 130, "y": 1050 });
    this.addChild(this.map);

    this.map.touchEnabled = true;
    this.map.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goWorldMap, this);

    // 好友房屋
    this.fHouse = this._bg.element({ "name": `houseEl_json.fhouse`, "x": 500, "y": 1050 });
    this.addChild(this.fHouse);

    this.fHouse.touchEnabled = true;
    this.fHouse.addEventListener(egret.TouchEvent.TOUCH_TAP, this.friendHouse, this);

    // 整修房屋
    this.fixHouse = this._bg.element({ "name": `houseEl_json.fix`, "x": 180, "y": 870 });
    this.addChild(this.fixHouse);
    this.fixHouse.touchEnabled = true;
    this.fixHouse.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hFix, this);


    // 升级房屋
    this.upHouse = this._bg.element({ "name": `houseEl_json.up`, "x": 470, "y": 870 });
    this.addChild(this.upHouse);
    this.upHouse.touchEnabled = true;
    this.upHouse.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hUp, this);

    // 背包
    this.package = this._bg.element({ "name": `houseEl_json.package`, "x": 580, "y": 260 });
    this.addChild(this.package);
    this.package.touchEnabled = true;
    this.package.addEventListener(egret.TouchEvent.TOUCH_TAP, this.packageFun, this);

    // 消息
    this.message = this._bg.element({ "name": `houseEl_json.message`, "x": 580, "y": 400 });
    let testnum = (Global.newget()).data.length;
    //消息个数
    this.news = this._bg.addpoint({ "text": '', "color": "0xff0000", "strokeColor": "0xFFFFFF", "x": 600, "y": 355, "size": 22 });
    if (testnum > 0) {
      this.news.text = "+" + testnum;
    }
    this.addChild(this.message);
    this.addChild(this.news);
    this.message.touchEnabled = true;
    this.message.addEventListener(egret.TouchEvent.TOUCH_TAP, this.messageFun, this);

    //金币数
    let goldFrame = this._bg.element({ "name": "day_json.dayscore", "x": 557, "y": 110 });
    this.addChild(goldFrame);


    this.goldText = this._bg.addtxt({ "text": Math.floor(this.goldNum / 1000) + "k", "color": "0x610C1e", "x": 537, "y": 100 });
    this.addChild(this.goldText);

    // 房屋等级
    let gradeFrame = this._bg.element({ "name": "houseEl_json.grade", "width": 160, "height": 80, "x": 85, "y": 110 });
    this.addChild(gradeFrame);

    this.houseGrade = this._bg.addtxt({ "text": "等级: " + this.playerHouseId, "color": "0x610C1e", "x": 65, "y": 98, "size": 20 });
    this.houseGrade.fontFamily = "Microsoft YaHei";
    this.addChild(this.houseGrade);


    //全局通知
    this.addChild(Global.notice);

    //设置攻击的各种动态效果
    if (Global.special) {
      this.addChild(Global.special);
    } else {
      let special = this._bg.addpoint({ "text": "", "color": "0xFFFFFF", "x": 500, "y": 900, "size": 22 });
      this.addChild(special);
      Global.special = special;
    }

    //地震特效
    Global.earth = Global.earthEffect();
    this.addChild(Global.earth);

    // 房屋升级特效图片
    this.ugUp = this._bg.oElement({ "name": "ugUp_png", "width": 642, "x": 640, "y": -300 });
    this.ugDown = this._bg.oElement({ "name": "ugDown_png", "x": -640, "y": 950 });

    // 整修特效图片
    this.fixLeft = this._bg.oElement({ "name": "houseFix_json.left", "width": 642, "x": -600, "y": 350 });
    this.fixRight = this._bg.oElement({ "name": "houseFix_json.right", "x": 640, "y": 350 });
    
    
  }
  // 房屋升级特效
  private upEffects(){
    this.addChild(this.ugUp);
    this.ugUp.alpha = 0;
    this.addChild(this.ugDown);
    this.ugDown.alpha = 0;
    this.ugUp.touchEnabled = true;
    this.ugDown.touchEnabled = true;
  }
  // 房屋整修特效
  private fixEffectes(){
    this.addChild(this.fixLeft);
    this.fixLeft.alpha = 0;
    this.addChild(this.fixRight);
    this.fixRight.alpha = 0;
    this.fixLeft.touchEnabled = true;
    this.fixRight.touchEnabled = true;
  }

  // 点击地图
  private goWorldMap() {
    if (Sound.soundOpen) {
      Sound.cancelSound.play(0, 1);
    }
    Newscenes.getInstance().changeScene('WorldMap');
  }
  // 点击好友房屋
  private friendHouse() {
    // 音效
    if (Sound.soundOpen) {
      Sound.modalSound.play(0, 1);
    }
    let rank = new Rank();
    this.addChild(rank);
  }

  // 返回事件
  private backToGame() {
    if (Sound.soundOpen) {
      Sound.cancelSound.play(0, 1);
    }
    Newscenes.getInstance().changeScene('Game');
  }

  // 出现房屋地图
  private showHouseMap() {
    let houseMap = new HouseMap(this.playerLandId.toString());
    this.addChild(houseMap);

    // 动态出现房屋等级地图
    egret.Tween.get(HouseMap.effectsCont).to({ scaleX: 1, scaleY: 1 }, 500);
  }

  // 整修房屋
  private hFix() {
    if (Sound.soundOpen) {
      Sound.tipSound.play(0, 1);
    }
    if (egret.localStorage.getItem("house_loss")) {
      this.houseLoss = Number(egret.localStorage.getItem("house_loss"));
    }

    let fixPrice = Global.fixPrice;

    if (this.houseLoss == 0) {
      this.addChild(this.modal);
      this.modal.tip(`当前房屋满级，不需要整修！`);
    } else {
      this.fixModal(this.houseLoss, fixPrice[this.houseLoss]);
    }
  }

  // 整修房屋弹出框
  private fixModal(grade, price) {
    this.addChild(this.modal);
    this.modal.houseFix(grade, price);

    let close = Modal.btnCont.getChildAt(0);
    let sure = Modal.btnCont.getChildAt(1);

    // 点击关闭。
    close.touchEnabled = true;
    close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeModal, this);

    // 点击确定。
    sure.touchEnabled = true;
    sure.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      this.closeModal();
      if (this.goldNum >= price) {
        if (Sound.soundOpen) {
          Sound.luckySound.play(0, 1);
        }
        // 整修房屋特效
        this.fixEffectes();
        egret.Tween.get(this.fixLeft).to({ x: -100, y: 350, alpha: 1 }, 500).wait(500).to({ x: -600, y: 350, alpha: 0 }, 500);
        egret.Tween.get(this.fixRight).to({ x: 100, y: 350, alpha: 1 }, 500).call(function () {

          this.mHouse.hLoss(this.playerLandId, 0);

        }, this).wait(500).to({ x: 640, y: 350, alpha: 0 }, 500).call(function(){
          this.removeChild(this.fixLeft);
          this.removeChild(this.fixRight);
        }, this);


        // 改变金币并存储
        this.goldNum -= price;
        this.goldText.text = Math.floor(this.goldNum / 1000) + "k";
        egret.localStorage.setItem("money", this.goldNum.toString());

        // 改变房屋折损等级并存储
        egret.localStorage.setItem("house_loss", "0");

      } else {
        this.poorModal(price);
      }
    }, this);
  }

  //升级房屋
  private hUp() {
    this.houseLoss = Number(egret.localStorage.getItem("house_loss"));
    if (this.houseLoss > 0) {
      if (Sound.soundOpen) {
        Sound.wrongTipSound.play(0, 1);
      }
      this.addChild(this.modal);
      this.modal.tip("当前房屋有折损，请先整修再升级！");
    } else {
      this.houseUp('money');
    }
  }

  private houseUp(type) {
    let landArr = Global.landData[Number(this.playerLandId) - 1].houseUpPrice;

    let upPrice = landArr[Number(this.playerHouseId) % 8];

    // 提示解锁下一大陆
    if (Number(this.playerHouseId) % 8 == 0) {
      if (Sound.soundOpen) {
        Sound.tipSound.play(0, 1);
      }
      this.addChild(this.modal);
      this.modal.nextLand();

      let close = Modal.btnCont.getChildAt(0);
      let cancel = Modal.btnCont.getChildAt(1);
      let goMap = Modal.btnCont.getChildAt(2);

      // 点击关闭。
      close.touchEnabled = true;
      close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeModal, this);

      // 点击取消。
      cancel.touchEnabled = true;
      cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeModal, this);

      // 打开地图
      goMap.touchEnabled = true;
      goMap.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        this.closeModal();
        this.goWorldMap();
      }, this);

    } else if (this.goldNum >= upPrice || type == "card") {
      // 房屋升级音效
      if (Sound.soundOpen) {
        Sound.upgradeSound.play(0, 1);
      }

      // 升级房屋动画
      this.upEffects();
      let houseId = Number(this.playerHouseId) + 1;
      egret.Tween.get(this.ugUp).to({ x: 0, y: 0, alpha: 1 }, 500).wait(500).to({ x: 640, y: -300, alpha: 0 }, 500);
      egret.Tween.get(this.ugDown).to({ x: 0, y: 337, alpha: 1 }, 500).call(function () {
        this.mHouse.house(this.playerLandId, houseId);
      }, this).wait(500).to({ x: -640, y: 950, alpha: 0 }, 500).call(function(){
        this.removeChild(this.ugUp);
        this.removeChild(this.ugDown);
      }, this);

      // 改变金币并存储
      if (type != 'card') {
        this.goldNum -= upPrice;
        this.goldText.text = Math.floor(this.goldNum / 1000) + "k";
        egret.localStorage.setItem("money", this.goldNum.toString());
      }
      // 改变房屋等级并存储
      this.playerHouseId = Number(this.playerHouseId) + 1;
      this.houseGrade.text = "等级：" + this.playerHouseId;
      egret.localStorage.setItem("house", this.playerHouseId);

    } else {
      this.poorModal(upPrice);
    }
  }

  // 资金不足弹出框
  private poorModal(price) {
    if (Sound.soundOpen) {
      Sound.wrongTipSound.play(0, 1);
    }
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
      this.backToGame();
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


  //消息列表弹框
  private messageFun() {
    // 音效
    if (Sound.soundOpen) {
      Sound.modalSound.play(0, 1);
    }
    let news = new News();
    this.addChild(news);
  }


  // 背包——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
  private packageCont: egret.Sprite;
  private backpack: egret.Sprite;

  // 卡券容器
  private cardCont: egret.Sprite;

  // 礼包容器
  private giftCont: egret.Sprite;

  // 打开礼包
  private openGift() {
    let base = this._bg.addAlphafun();
    this.addChild(base);
    base.touchEnabled = true;

    let giftShining = new egret.Sprite();
    giftShining.width = 600;
    giftShining.height = 600;
    giftShining.x = 320;
    giftShining.y = 570;
    giftShining.anchorOffsetX = 300;
    giftShining.anchorOffsetY = 300;
    base.addChild(giftShining);
    giftShining.scaleX = 0.1;
    giftShining.scaleY = 0.1;
    egret.Tween.get(giftShining).to({ scaleX: 1.2, scaleY: 1.2 }, 800, egret.Ease.quartOut).to({ scaleX: 0.2, scaleY: 0.2, x: 230, y: 230 }, 300).call(function () {
      if (base && base.parent) {
        base.removeChildren();
        this.removeChild(base);
      }
    }, this);

    let shining = this._bg.element({ "name": "shining_png", "x": 300, "y": 300 });
    giftShining.addChild(shining);

    // 随机卡片类别
    let cardArr = ["attack", "defense", "rock"];
    let i = Math.floor(Math.random() * 3);
    let card = this._bg.element({ "name": `card_json.${cardArr[i]}Front`, "x": 300, "y": 300 });
    giftShining.addChild(card);

    // 改变相应卡片数量存储
    let newNum = Number(egret.localStorage.getItem(`${cardArr[i]}_card`)) + 1;
    egret.localStorage.setItem(`${cardArr[i]}_card`, newNum.toString());
  }


  private packageFun() {
    // 音效
    if (Sound.soundOpen) {
      Sound.modalSound.play(0, 1);
    }
    // 加一层透明底层
    this.packageCont = this._bg.addAlphafun();
    this.addChild(this.packageCont);
    this.packageCont.touchEnabled = true;

    //背包容器
    this.backpack = new egret.Sprite();

    this.backpack.width = 580;
    this.backpack.height = 1000;
    this.backpack.anchorOffsetX = this.backpack.width / 2;
    this.backpack.anchorOffsetY = this.backpack.height / 2;
    this.packageCont.addChild(this.backpack);

    // 动态出现
    this.backpack.scaleX = 0.1;
    this.backpack.scaleY = 0.1;
    this.backpack.x = 580;
    this.backpack.y = 360;
    egret.Tween.get(this.backpack).to({ scaleX: 1, scaleY: 1, x: 320, y: 570 }, 500);

    // 关闭按钮
    let closeImg = this._bg.element({ "name": "cardCenter_json.close", "x": this.backpack.anchorOffsetX, "y": 900 });
    this.backpack.addChild(closeImg);
    closeImg.touchEnabled = true;
    closeImg.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      if (Sound.soundOpen) {
        Sound.cancelSound.play(0, 1);
      }
      this.packageCont.removeChildren();
      this.removeChild(this.packageCont);
    }, this);

    // 背包外框
    let bpImg = this._bg.element({ "name": "package_json.pagbg", "x": this.backpack.anchorOffsetX, "y": 435 });
    this.backpack.addChild(bpImg);



    //选项卡——————
    let tab = new egret.Sprite();
    tab.x = 110;
    tab.y = 120;
    tab.width = 360;
    tab.height = 60;
    this.backpack.addChild(tab);

    let tabbg = this._bg.element({ "name": "package_json.cardbg", "x": 180, "y": 30 });
    tab.addChild(tabbg);

    // 卡券
    let cards = this._bg.element({ "name": "package_json.carddone", "x": 92, "y": 31 });
    tab.addChild(cards);
    cards.touchEnabled = true;
    cards.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      if (this.giftCont && this.giftCont.parent) {
        if (Sound.soundOpen) {
          Sound.switchSound.play(0, 1);
        }
        this.backpack.addChild(this.cardCont);
        this.showCard();
        this.backpack.removeChild(this.giftCont);
        gift.texture = RES.getRes("package_json.giftup");
        cards.texture = RES.getRes("package_json.carddone");
      }
    }, this);

    //礼包
    let gift = this._bg.element({ "name": "package_json.giftup", "x": 268, "y": 31 });
    tab.addChild(gift);
    gift.touchEnabled = true;
    gift.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      if (this.cardCont && this.cardCont.parent) {
        if (Sound.soundOpen) {
          Sound.switchSound.play(0, 1);
        }
        this.cardCont.removeChildren();
        this.backpack.removeChild(this.cardCont);
        this.backpack.addChild(this.giftCont);
        gift.texture = RES.getRes("package_json.giftdone");
        cards.texture = RES.getRes("package_json.cardup");
      }

    }, this);


    // 礼包容器
    this.giftCont = this.tabElCont();
    // 礼包项
    let giftEl = new egret.Sprite();
    giftEl.x = 0;
    giftEl.y = 0;
    giftEl.width = 440;
    giftEl.height = 155;
    this.giftCont.addChild(giftEl);
    let giftFrame = this._bg.npc({ "name": "package_json.gift_num", "x": 214, "y": 76 });
    giftEl.addChild(giftFrame);

    let giftNum: number = Number(egret.localStorage.getItem("luckBag"));
    let giftNumTxt = this._bg.addpoint({ "text": giftNum + "个", "color": "0xFFFFFF", "x": 140, "y": 90, "size": 24, "strokeColor": 0x126305 });
    giftEl.addChild(giftNumTxt);

    let openBtn = this._bg.element({ "name": "package_json.open", "x": 320, "y": 76 });
    giftEl.addChild(openBtn);
    let openTxt = this._bg.addpoint({ "text": "打 开", "color": "0xFFFFFF", "x": 290, "y": 62, "size": 28, "strokeColor": 0x126305 });
    giftEl.addChild(openTxt);
    openBtn.touchEnabled = true;
    openBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      if (giftNum > 0) {
        if (Sound.soundOpen) {
          Sound.openBagSound.play(0, 1);
        }
        // 改变福袋数并存储
        giftNum--;
        giftNumTxt.text = giftNum + "个";
        egret.localStorage.setItem("luckBag", giftNum.toString());
        this.openGift();

      } else if (giftNum <= 0) {
        if (Sound.soundOpen) {
          Sound.wrongTipSound.play(0, 1);
        }
        this.addChild(this.modal);
        this.modal.tip(`当前福袋数为0！`);
      }

    }, this);


    //卡券容器
    this.cardCont = this.tabElCont();
    this.backpack.addChild(this.cardCont);

    this.showCard();
  }

  private showCard() {
    //展示所拥有的所有卡片
    let cardsArr = ["attack", "defense", "interest", "upgrade", "rock", "earth", "save"];
    let num_arr = new Array;
    let a = 0;
    for (let i = 0; i < cardsArr.length; i++) {
      let getNum = Number(egret.localStorage.getItem(cardsArr[i] + "_card"));
      if (getNum > 0) {
        let x; let y; let nx; let ny;
        switch (a) {
          case 0:
            x = 60; y = 100; nx = 95; ny = 155;
            break;
          case 1:
            x = 215; y = 100; nx = 250; ny = 155;
            break;
          case 2:
            x = 370; y = 100; nx = 410; ny = 155;
            break;
          case 3:
            x = 60; y = 295; nx = 95; ny = 350;
            break;
          case 4:
            x = 215; y = 295; nx = 250; ny = 350;
            break;
          case 5:
            x = 370; y = 295; nx = 410; ny = 350;
            break;
          case 6:
            x = 60; y = 500; nx = 95; ny = 545;
            break;

          default:
            x = 60; y = 100; nx = 95; ny = 155;
            break;
        }
        num_arr[a] = { cardName: cardsArr[i], num: getNum, x: x, y: y, nx: nx, ny: ny };
        a++;
      }
    }

    for (let ai = 0; ai < num_arr.length; ai++) {
      this.helement(num_arr[ai]);
    }
  }

  private cards_num;
  private helement(obj) {
    let cardFront = this._bg.npc({ "name": "card_json." + obj.cardName + "Front", "x": obj.x, "y": obj.y });
    this.cards_num = this._bg.addpoint({ "text": obj.num, "color": "0xFFFFFF", "x": obj.nx, "y": obj.ny, "size": 22 });
    this.cardCont.addChild(cardFront);
    this.cardCont.addChild(this.cards_num);
    cardFront.touchEnabled = true;
    cardFront.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      this.cardsFun(obj.cardName);
    }, this)

  }

  //背包卡券
  private cardsFun(cardName) {
    switch (cardName) {
      case 'attack':
        //攻击卡   
        if (Sound.soundOpen) {
          Sound.modalSound.play(0, 1);
        }

        let rank = new Rank();
        this.addChild(rank);
        break;
      case 'defense':
        //防御卡 对自己使用
        this.web_defense();
        break;
      case 'interest':  ///
        //利息翻倍  对自己使用  0.05%
        this.web_interest();
        //待写
        break;
      case 'upgrade':
        //房屋升级  对自己使用
        this.web_upHouse();
        //待写
        break;
      case 'rock':
        this.web_rock();
        break;
      case 'earth':
        this.selectLand("earth");
        break;
      case 'save':
        this.selectLand("save");
        break;
    }
  }

  //请求socket   
  private gotoWebsocket(obj) {
    //websocket互动
    this.web_socket = Connection.webSocket;
    let cmd = JSON.stringify(obj);
    this.web_socket.writeUTF(cmd);
  }

  //防御卡特效
  private web_defense() {
    Sound.defenseSound.play(0, 1);
    if (Number(egret.localStorage.getItem("defense")) != 1) {
      this.defenseFun();
      let numloc = Number(egret.localStorage.getItem("defense_card")) - 1;
      this.cards_num.text = numloc.toString();
      egret.localStorage.setItem("defense_card", numloc.toString());
    }else {
      this.addChild(this.modal);
      this.modal.tip("正在防御中……请明天再来使用！");
    }
    egret.setTimeout(function () {
      this.packageCont.removeChildren();
      this.removeChild(this.packageCont);
    }, this, 200)
  }

  //房屋升级卡特效
  private web_upHouse() {
    this.packageCont.removeChildren();
    this.removeChild(this.packageCont);
    this.houseLoss = Number(egret.localStorage.getItem("house_loss"));
    if (this.houseLoss > 0) {
      this.addChild(this.modal);
      this.modal.tip("当前房屋有折损，请先整修再升级！");
    } else {
      this.houseUp('card');
      let numloc = Number(egret.localStorage.getItem("upgrade_card")) - 1;
      this.cards_num.text = numloc.toString();
      egret.localStorage.setItem("upgrade_card", numloc.toString());
    }
  }

  //陨石卡特效
  private web_rock() {
    egret.setTimeout(function () {
      if (Sound.soundOpen) {
        Sound.rockSound.play(0, 1);
      }
    }, this, 1200)


    this.gotoWebsocket({ do: "rock", userId: egret.localStorage.getItem("userId"), coust: '' });
    let rocknumloc = Number(egret.localStorage.getItem("rock_card")) - 1;
    this.cards_num.text = rocknumloc.toString();
    egret.localStorage.setItem("rock_card", rocknumloc.toString());
    egret.setTimeout(function () {
      this.packageCont.removeChildren();
      this.removeChild(this.packageCont);
    }, this, 200)
  }

  //利息翻倍卡
  private web_interest() {
    if (Sound.soundOpen) {
      Sound.interestSound.play(0, 1);
    }
    let interest_num = Number(egret.localStorage.getItem("interest")) * 2;
    egret.localStorage.setItem("interest", interest_num.toString());
    this.addChild(this.modal);
    this.modal.tip("翻倍后利息：" + interest_num + " ,当前存款：" + egret.localStorage.getItem("deposit"));
    if (interest_num > 0) {
      let interestNum = Number(egret.localStorage.getItem("interest_card")) - 1;
      this.cards_num.text = interestNum.toString();
      egret.localStorage.setItem("interest_card", interestNum.toString());
    }
    this.packageCont.removeChildren();
    this.removeChild(this.packageCont);
  }

  //选择大陆提示框
  private modalFrameLand;
  private selectLand(params) {
    if (Sound.soundOpen) {
      Sound.tipSound.play(0, 1);
    }
    // 加一层透明底层
    let bigland = this.bigModal();
    this.addChild(bigland);

    let landnum = Number(egret.localStorage.getItem('land'));
    let txtTop = this._bg.addtxt({ "text": "请选择对那个大陆使用", "color": "0x000000", "x": 60, "y": 50, "size": 22 });
    this.modalFrameLand.addChild(txtTop);
    let x = 50;
    let y = 100;
    for (let i = 0; i < landnum; i++) {
      if (i == 0) {
        x = x;
      } else if (i > 0 && i < 3) {
        x = x + 120;
        y = 100;
      } else if ((i == 3)) {
        x = 50;
        y = 150;
      } else if (i > 3 && i < 6) {
        x = x + 120;
      } else if (i == 6) {
        x = 50;
        y = 200;
      } else if (i > 6 && i <= 8) {
        x = x + 120;
        y = 200;
      }

      let num = this._bg.addpoint({ "text": Global.landData[i].landName, "color": "0xFFFFFF", "x": x, "y": y, "size": 22 });
      this.modalFrameLand.addChild(num);
      num.touchEnabled = true;
      num.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {

        if (Number(this.playerLandId) > i + 1) {
          if (params == "earth") {
            if (Sound.soundOpen) {
              Sound.earthSound.play(0, 1);
            }
          } else if (params == "save") {
            if (Sound.soundOpen) {
              Sound.saveSound.play(0, 1);
            }
          }
        }

        this.gotoWebsocket({ do: params, userId: egret.localStorage.getItem("userId"), coust: 'all', land: i + 1 });
        num.textColor = 0x000000;
        let numloc = Number(egret.localStorage.getItem(params + "_card")) - 1;
        this.cards_num.text = numloc.toString();
        egret.localStorage.setItem(params + "_card", numloc.toString());
        egret.setTimeout(function () {
          bigland.removeChildren();
          this.removeChild(bigland);
          this.removeChild(this.packageCont);
        }, this, 500);
      }, this);
    }
  }

  //防御卡
  private defenseFun() {
    //存入时间
    egret.localStorage.setItem("defense_time", this.curDate);
    this.defenseUse.alpha = 1;
    egret.localStorage.setItem("defense", "1");
    //更新数据库
    Global.updateApi();
  }

  private bigModal() {
    //模态框总容器，加一层透明黑色底层
    let modalCont = this._bg.addAlphafun();
    modalCont.touchEnabled = true;
    modalCont.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { }, this);

    // 模态框容器
    this.modalFrameLand = new egret.Sprite();
    this.modalFrameLand.x = 320;
    this.modalFrameLand.y = 570;
    this.modalFrameLand.width = 430;
    this.modalFrameLand.height = 270;
    this.modalFrameLand.anchorOffsetX = this.modalFrameLand.width / 2;
    this.modalFrameLand.anchorOffsetY = this.modalFrameLand.height / 2;
    modalCont.addChild(this.modalFrameLand);

    // 动态出现
    this.modalFrameLand.scaleX = 0.3;
    this.modalFrameLand.scaleY = 0.3;
    egret.Tween.get(this.modalFrameLand).to({ scaleX: 1, scaleY: 1 }, 200);
    // 模态框外框
    let mfImg = this._bg.element({ "name": "tipamend_json.tipBig", "x": 215, "y": 135, });
    this.modalFrameLand.addChild(mfImg);

    // 关闭按钮
    let closeImg = this._bg.element({ "name": "tipamend_json.tipclose", "x": 422, "y": 12 });
    this.modalFrameLand.addChild(closeImg);
    closeImg.touchEnabled = true;
    closeImg.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      if (Sound.soundOpen) {
        Sound.cancelSound.play(0, 1);
      }
      modalCont.removeChildren();
      this.removeChild(modalCont);
    }, this);
    return modalCont;
  }

  // 背包选项卡容器
  private tabElCont() {
    let elContainer = new egret.Sprite();
    elContainer.x = 80;
    elContainer.y = 200;
    elContainer.width = 440;
    elContainer.height = 600;
    return elContainer;
  }


}