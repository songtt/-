class WorldMap extends egret.DisplayObjectContainer {
  //游戏场景背景
  private _bg: Background;

  private modal: Modal = new Modal();
  private playerHouseId;

  private playerLandId;

  // 金币数
  private goldText: egret.TextField;
  private goldNum: number;

  public constructor() {
    super();
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);



  }
  private onAddToStage(event: egret.Event) {
    // 数据
    // 房子等级
    if (egret.localStorage.getItem("house")) {
      this.playerHouseId = egret.localStorage.getItem("house");
    }
    // 大陆等级
    if (egret.localStorage.getItem("land")) {
      this.playerLandId = Number(egret.localStorage.getItem("land"));
    }


    // 金币数
    if (egret.localStorage.getItem("money")) {
      this.goldNum = Number(egret.localStorage.getItem("money"));
    }


    //背景
    this._bg = new Background();
    this.addChild(this._bg.stage_bg({ "name": "wmapbg_png", "width": this.stage.stageWidth, "height": this.stage.stageHeight }));

    // 大陆
    let landArr = Global.landData;
    for (let i = 0; i < landArr.length; i++) {
      this.land({ landId: landArr[i].landId, x: landArr[i].mapLocation[0], y: landArr[i].mapLocation[1], landName: landArr[i].landName, price: landArr[i].landPrice })
    }

    // 返回
    let back = this._bg.element({ "name": `day_json.wmapback`, "x": 70, "y": 80 });
    this.addChild(back);

    back.touchEnabled = true;
    back.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      // 返回音效
      if (Sound.soundOpen) {
        Sound.backSound.play(0, 1);
      }
      Newscenes.getInstance().changeScene('House');
    }, this);


    //金币数
    let goldFrame = this._bg.element({ "name": "day_json.dayscore", "x": 557, "y": 110 });
    this.addChild(goldFrame);

    this.goldText = this._bg.addtxt({ "text": Math.floor(this.goldNum / 1000) + "k", "color": "0x610C1e", "x": 537, "y": 100 });
    this.addChild(this.goldText);


  }

  private land(obj) {
    // obj = {
    //   landId: id,
    //   x: x,
    //   y: y,
    //   landName: name,
    //   price : price
    // }
    let landCont = new egret.Sprite();
    landCont.x = obj.x;
    landCont.y = obj.y;
    this.addChild(landCont);

    // landId
    let landId: egret.TextField = new egret.TextField();
    landId.text = obj.landId;;
    landCont.addChild(landId);
    landId.visible = false;


    let isLock = this.playerLandId >= obj.landId ? "unlock" : "lock";
    let lock = this._bg.element({ "name": `day_json.${isLock}`, "x": 0, "y": 0 });
    landCont.addChild(lock);

    let landText = this._bg.addtxt({ "text": obj.landName, "color": "0xffffff", "x": 0, "y": 32, "size": 24 });
    landText.x = -landText.width / 2;
    landText.stroke = 3;
    landText.strokeColor = 0x3499D9;
    landCont.addChild(landText);


    landCont.touchEnabled = true;
    landCont.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {

      let land: any = landCont.getChildAt(0);
      let landId = land.text;

      if (this.playerLandId == 9 && Number(landId) == 10) {
        // 音效
        if (Sound.soundOpen) {
          Sound.luckySound.play(0, 1);
        }
        let houseMap = new HouseMap(landId);
        this.addChild(houseMap);
        // 动态出现 敬请期待
        egret.Tween.get(HouseMap.effectsCont).to({ x: e.stageX, y: e.stageY }, 1).to({ scaleX: 1, scaleY: 1, x: 320, y: 570 }, 500);
      } else if (isLock == "unlock") {
        // 音效
        if (Sound.soundOpen) {
          Sound.luckySound.play(0, 1);
        }
        let houseMap = new HouseMap(landId);
        this.addChild(houseMap);
        // 动态出现房屋地图
        egret.Tween.get(HouseMap.effectsCont).to({ x: e.stageX, y: e.stageY }, 1).to({ scaleX: 1, scaleY: 1, x: 320, y: 570 }, 500);
      } else if (Number(this.playerHouseId) % 8 == 0 && Number(landId) == this.playerLandId + 1) {
        // 音效
        if (Sound.soundOpen) {
          Sound.tipSound.play(0, 1);
        }

        this.addChild(this.modal);
        this.modal.unlockModal(obj.price);

        let close = Modal.btnCont.getChildAt(0);
        let sure = Modal.btnCont.getChildAt(1);

        // 点击关闭。
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
          if (Sound.soundOpen) {
            Sound.cancelSound.play(0, 1);
          }
          this.modal.removeChildren();
          this.removeChild(this.modal);
        }, this);

        // 点击确定。
        sure.touchEnabled = true;
        sure.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
          if (this.goldNum >= obj.price) {
            // 升级音效
            if (Sound.soundOpen) {
              Sound.upgradeSound.play(0, 1);
            }
            this.modal.removeChildren();
            this.removeChild(this.modal);
            lock.texture = RES.getRes("day_json.unlock");


            // 改变金币并存储
            this.goldNum -= obj.price;
            this.goldText.text = Math.floor(this.goldNum / 1000) + "k";
            egret.localStorage.setItem("money", this.goldNum.toString());


            // 改变大陆等级并存储
            this.playerLandId = Number(this.playerLandId) + 1;
            egret.localStorage.setItem("land", this.playerLandId);


            // 改变房屋等级并存储
            this.playerHouseId = Number(this.playerHouseId) + 1;
            egret.localStorage.setItem("house", this.playerHouseId);

            isLock = "unlock";
          } else {
            // 资金不足提示音效
            if (Sound.soundOpen) {
              Sound.wrongTipSound.play(0, 1);
            }

            let _modal = new Modal();
            this.addChild(_modal);
            _modal.smallTip("资金不足！");
          }


        }, this);

      } else if (isLock == "lock") {
        // 音效
        if (Sound.soundOpen) {
          Sound.tipSound.play(0, 1);
        }
        this.addChild(this.modal);
        this.modal.smallTip(`尚未解锁！`);
      }

    }, this);
  }























}