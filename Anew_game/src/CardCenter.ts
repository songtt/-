class CardCenter extends egret.Sprite {


  private _bg: Background;

  // 卡券元素滚动容器
  private elScroll: egret.Sprite;

  // 卡券弹框显示容器
  private cardCont;

  // 关闭按钮
  static close: egret.Bitmap;

  private goldNum;

  private goldCont;


  public constructor(money, moneyCont) {
    super();
    this.goldNum = money;
    this.goldCont = moneyCont;
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }
  private onAddToStage(event: egret.Event) {

    this._bg = new Background();

    this.common();
  }

  private common() {

    // 弹框总容器，加一层透明黑色底层
    let CardBaseCont = new egret.Sprite();

    this.addChild(CardBaseCont);
    CardBaseCont.graphics.beginFill(0x000000, 0.6);
    CardBaseCont.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
    CardBaseCont.graphics.endFill();

    CardBaseCont.touchEnabled = true;
    CardBaseCont.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { }, this);

    // 弹框显示容器
    this.cardCont = new egret.Sprite();
    this.cardCont.width = this.stage.width;
    this.cardCont.height = this.stage.height;
    this.cardCont.anchorOffsetX = this.stage.width / 2;
    this.cardCont.anchorOffsetY = this.stage.height / 2;
    CardBaseCont.addChild(this.cardCont);

    // 动态出现
    this.cardCont.scaleX = 0.3;
    this.cardCont.scaleY = 0.3;
    this.cardCont.x = 495;
    this.cardCont.y = 465;
    egret.Tween.get(this.cardCont).to({ scaleX: 1, scaleY: 1, x: this.stage.width / 2, y: 530 }, 500);

    // 关闭按钮
    CardCenter.close = this._bg.element({ "name": "cardCenter_json.close", "x": this.stage.width / 2 - 10, "y": 970 });
    this.cardCont.addChild(CardCenter.close);

    // 卡券中心外框
    let cardFrame = this._bg.element({ "name": "cardbg_png", "x": this.stage.width / 2 - 20, "y": 550 });
    this.cardCont.addChild(cardFrame);


    // 滚动条
    let scroll = new egret.Sprite();
    scroll.x = 560;
    scroll.y = 450;
    scroll.width = 10;
    scroll.height = 500;
    this.cardCont.addChild(scroll);

    // 滚动条底层
    let scrollBase = this._bg.oElement({ "name": "rank_json.scroll", "height": 440, "x": 0, "y": -20 });
    scroll.addChild(scrollBase);

    // 滚动条
    let scrollHandle = this._bg.oElement({ "name": "rank_json.handle", "width": 9, "height": 400, "x": 0, "y": 0 });
    scrollHandle.scale9Grid = new egret.Rectangle(3, 3, 1, 40);

    // 卡券元素滚动容器
    this.elScroll = this.elScrollCont();

    // 卡券滚动区域
    var worldScrollView = this.scorllView(this.elScroll, scrollHandle);
    this.cardCont.addChild(worldScrollView);


    // 获取卡券数据，添加滚动条
    this.getData(this.elScroll, scrollHandle);
    scroll.addChild(scrollHandle);


  }





  // 滚动区域
  private scorllView(object, handle) {
    let view: egret.ScrollView = new egret.ScrollView();
    view.width = 465;
    view.height = 550;
    view.x = 80;
    view.y = 320;
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

    elContainer.graphics.beginFill(0x00ffff, 0);
    elContainer.graphics.drawRect(0, 0, 465, 550);
    elContainer.graphics.endFill();

    return elContainer;
  }


  // 获取卡券信息，并设置滚动条
  private getData(container, handle) {
    this.element({ y: 0, cardName: "attack", cardTitle: "攻击卡", price: "1000000" });
    this.element({ y: 140, cardName: "defense", cardTitle: "防御卡", price: "1000000" });
    this.element({ y: 280, cardName: "interest", cardTitle: "利息翻倍卡", price: "1500000" });
    this.element({ y: 420, cardName: "upgrade", cardTitle: "房屋升级卡", price: "40000000" });
    this.element({ y: 560, cardName: "rock", cardTitle: "陨石卡", price: "100000000" });
    this.element({ y: 700, cardName: "earth", cardTitle: "地震卡", price: "800000000" });
    this.element({ y: 840, cardName: "save", cardTitle: "普渡众生卡", price: "800000000" });

    egret.Tween.get(handle).to({ height: 400 * 550 / container.height }, 200);
  }

  private element(obj) {
    // 参数的格式
    // obj = {
    //   y：y,
    //   cardName: "卡券名称",
    //   cardTitle: "卡券中文名称",
    //   price: price
    // }

    let cardEl = new egret.Sprite();
    cardEl.x = 0;
    cardEl.y = obj.y;
    cardEl.graphics.beginFill(0x000000, 0);
    cardEl.graphics.drawRect(0, 0, 465, 140);
    cardEl.graphics.endFill();

    this.elScroll.addChild(cardEl);

    // 外框
    let elframe = this._bg.oElement({ "name": "cardCenter_json.base", "x": 0, "y": 0 });
    cardEl.addChild(elframe);

    // 卡片
    let cardImg = this._bg.element({ "name": `cardCenter_json.${obj.cardName}`, "x": 80, "y": 65 });
    cardEl.addChild(cardImg);
    cardImg.touchEnabled = true;
    cardImg.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
      // 卡券音效
      switch (obj.cardName) {
        case "earth":
          if (Sound.soundOpen) {
            Sound.earthSound.play(0, 1);
          }
          break;

        case "save":
          if (Sound.soundOpen) {
            Sound.saveSound.play(0, 1);
          }
          break;

        case "rock":
          if (Sound.soundOpen) {
            Sound.rockSound.play(0, 1);
          }
          break;

        case "upgrade":
          if (Sound.soundOpen) {
            Sound.upgradeSound.play(0, 1);
          }
          break;

        case "attack":
          if (Sound.soundOpen) {
            Sound.attackSound.play(0, 1);
          }
          break;

        case "defense":
          if (Sound.soundOpen) {
            Sound.defenseSound.play(0, 1);
          }
          break;

        case "interest":
          if (Sound.soundOpen) {
            Sound.interestSound.play(0, 1);
          }
          break;

        default:
          if (Sound.soundOpen) {
            Sound.cancelSound.play(0, 1);
          }
          break;

      }

      let _cardCont = new egret.Sprite();
      _cardCont.graphics.beginFill(0x000000, 0.6);
      _cardCont.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
      _cardCont.graphics.endFill();

      _cardCont.touchEnabled = true;
      _cardCont.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        // 取消音效
        if (Sound.soundOpen) {
          Sound.cancelSound.play(0, 1);
        }

        _cardCont.removeChildren();
        this.cardCont.removeChild(_cardCont);
      }, this);

      this.cardCont.addChild(_cardCont);

      let _card = new Card();
      _cardCont.addChild(_card);

      let cardFront = _card.front(obj.cardName);
      _card.addChild(cardFront);

      let cardBack = _card.back(obj.cardName);

      egret.Tween.get(cardFront).to({ scaleX: 0.1, scaleY: 0.1, x: e.stageX, y: e.stageY }, 1).to({ scaleX: 1.5, scaleY: 1.5, x: 320, y: 550, rotation: 720 }, 800);

      _card.addChild(cardBack);
      egret.Tween.get(cardBack).to({ scaleX: 0.1, scaleY: 0.1, x: e.stageX, y: e.stageY, alpha: 0 }, 1).to({ scaleX: 1, scaleY: 1, x: 320, y: 550, rotation: 720, alpha: 1 }, 800);

    }, this);


    // 卡片名称
    let cardName = this._bg.addtxt({ "text": obj.cardTitle, "x": 147, "y": 30, "color": "0xffffff", "size": 24 });
    cardName.strokeColor = 0x3A230A;
    cardName.stroke = 2;
    cardEl.addChild(cardName);

    // 价格
    let priceCont = new egret.Sprite();
    priceCont.x = 145;
    priceCont.y = 60;
    priceCont.width = 140;
    priceCont.height = 40;
    cardEl.addChild(priceCont);

    let coin = this._bg.element({ "name": `cardCenter_json.coin`, "x": 11, "y": 20 });
    coin.scaleX = 1.2;
    coin.scaleY = 1.2;
    priceCont.addChild(coin);

    let price = this._bg.addtxt({ "text": obj.price, "x": 27, "y": 10, "color": "0xffffff", "size": 22 });
    price.strokeColor = 0x157505;
    price.stroke = 2;
    priceCont.addChild(price);

    // 购买
    let buyBtn = this._bg.element({ "name": "cardCenter_json.buyBtn", "x": 380, "y": 60 });
    cardEl.addChild(buyBtn);

    let buyTxt = this._bg.addtxt({ "text": "购买", "x": 357, "y": 47, "color": "0xffffff", "size": 24 });
    buyTxt.bold = true;
    buyTxt.strokeColor = 0x157505;
    buyTxt.stroke = 2;

    cardEl.addChild(buyTxt);

    buyBtn.touchEnabled = true;
    buyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {

      if (this.goldNum >= obj.price) {

        // 购买卡券成功音效
        if (Sound.soundOpen) {
          Sound.buyCardSound.play(0, 1);
        }

        let cardBuyCont = new egret.Sprite();
        cardBuyCont.graphics.beginFill(0x000000, 0);
        cardBuyCont.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
        cardBuyCont.graphics.endFill();
        cardBuyCont.touchEnabled = true;
        cardBuyCont.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { }, this);

        this.addChild(cardBuyCont);

        let _card = new Card();
        cardBuyCont.addChild(_card);

        let cardFront = _card.front(obj.cardName);
        _card.addChild(cardFront);

        egret.Tween.get(cardFront).to({ scaleX: 0.1, scaleY: 0.1, x: e.stageX - 300, y: e.stageY }, 1).to({ scaleX: 0.5, scaleY: 0.5, x: e.stageX - 160, y: e.stageY - 150 }, 300).to({ scaleX: 0.1, scaleY: 0.1, x: 545, y: 1047, alpha: 0.3 }, 600).call(function () {
          cardBuyCont.removeChildren();
          cardBuyCont.parent.removeChild(cardBuyCont);
        });

        // 改变卡片数量并存储
        let oldNum = egret.localStorage.getItem(`${obj.cardName}_card`);
        let newNum = Number(oldNum) + 1;
        egret.localStorage.setItem(`${obj.cardName}_card`, newNum.toString());

        // 改变金币数并存储
        this.goldNum -= obj.price;
        this.goldCont.text = Math.floor(this.goldNum / 1000) + "k";
        egret.localStorage.setItem("money", this.goldNum.toString());

      } else {
        // 资金不足提示音效
        if (Sound.soundOpen) {
          Sound.wrongTipSound.play(0, 1);
        }

        let _modal = new Modal();
        this.addChild(_modal);
        _modal.smallTip("资金不足！");
      }





    }, this)


  }



}