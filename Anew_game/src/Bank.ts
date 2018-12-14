class Bank extends egret.Sprite {


  private _bg: Background;

  // 银行弹框显示容器
  private mainCont;

  // 关闭按钮
  static close: egret.Bitmap;

  // 确定按钮
  private sure: egret.Bitmap;

  // 金币数
  private goldNum: number;
  private goldCont;

  // 存款
  private depNum: number;

  // 存 or 取 (save 或 draw)
  private bankType;

  // 存取钱的因子（1/2，1）
  private divisor: number;

  private _modal = new Modal();


  public constructor(money, moneyCont) {
    super();
    this.goldNum = money;
    this.goldCont = moneyCont;
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }
  private onAddToStage(event: egret.Event) {

    this._bg = new Background();

    this.depNum = Number(egret.localStorage.getItem("deposit"));

    this.bankType = "save";
    this.divisor = 1 / 2;


    // 弹框总容器，加一层透明黑色底层
    let bankBaseCont = new egret.Sprite();

    this.addChild(bankBaseCont);
    bankBaseCont.graphics.beginFill(0x000000, 0.6);
    bankBaseCont.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
    bankBaseCont.graphics.endFill();

    bankBaseCont.touchEnabled = true;
    bankBaseCont.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { }, this);

    // 弹框显示容器
    this.mainCont = new egret.Sprite();
    this.mainCont.x = 320;
    this.mainCont.y = this.stage.height / 2;
    this.mainCont.width = 540;
    this.mainCont.height = 500;
    // this.mainCont.graphics.beginFill(0x00ffff, 0.6);
    // this.mainCont.graphics.drawRect(0, 0, 540, 500);
    // this.mainCont.graphics.endFill();
    this.mainCont.anchorOffsetX = this.mainCont.width / 2;
    this.mainCont.anchorOffsetY = this.mainCont.height / 2;
    bankBaseCont.addChild(this.mainCont);


    // 动态出现
    this.mainCont.scaleX = 0.1;
    this.mainCont.scaleY = 0.1;

    egret.Tween.get(this.mainCont).to({ x: 100, y: 530 }, 1).to({ scaleX: 1, scaleY: 1, x: 320, y: this.stage.height / 2 }, 500);

    // 银行弹框外框
    let bankFrame = this._bg.element({ "name": "bank_json.bankbg", "x": 270, "y": 250 });
    this.mainCont.addChild(bankFrame);

    // 关闭按钮
    Bank.close = this._bg.element({ "name": "bank_json.close", "x": 180, "y": 460 });
    this.mainCont.addChild(Bank.close);

    // 确定按钮
    this.sure = this._bg.element({ "name": "bank_json.sure", "x": 360, "y": 460 });
    this.mainCont.addChild(this.sure);
    this.sure.touchEnabled = true;
    this.sure.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {


      if (this.bankType == "save") {

        if (this.goldNum > 0) {

          // 存钱成功音效
          if (Sound.soundOpen) {
            Sound.getLuckyBagSound.play(0, 1);
          }

          let changeNum = Math.ceil(this.goldNum * this.divisor);
          // 改变存款并存储
          this.depNum += changeNum;
          egret.localStorage.setItem("deposit", this.depNum.toString());
          //存钱的时间
          egret.localStorage.setItem("deposit_time", egret.localStorage.getItem("curDate"));

          // 改变金币数并存储
          this.goldNum -= changeNum;
          this.goldCont.text = Math.floor(this.goldNum / 1000) + "k";
          egret.localStorage.setItem("money", this.goldNum.toString());

          bankBaseCont.removeChildren();
          this.removeChild(bankBaseCont);

          this.addChild(this._modal);
          this._modal.bankSuccess();

          let successClose = Modal.btnCont.getChildAt(0);

          new Game().bankSucClose(successClose, this.parent);


        } else {
          // 提示资金不足音效
          if (Sound.soundOpen) {
            Sound.wrongTipSound.play(0, 1);
          }
          this.addChild(this._modal);
          this._modal.tip("当前资金不足！");
        }

      } else if (this.bankType == "draw") {
        if (this.depNum > 0) {

          // 取钱成功音效
          if (Sound.soundOpen) {
            Sound.getLuckyBagSound.play(0, 1);
          }

          let changeNum = Math.ceil(this.depNum * this.divisor);
          // 改变存款并存储
          this.depNum -= changeNum;
          egret.localStorage.setItem("deposit", this.depNum.toString());

          // 改变金币数并存储
          this.goldNum += changeNum;
          this.goldNum = this.goldNum + Number(egret.localStorage.getItem("interest"));
          this.goldCont.text = Math.floor(this.goldNum / 1000) + "k";
          egret.localStorage.setItem("interest", "0");
          egret.localStorage.setItem("money", this.goldNum.toString());


          bankBaseCont.removeChildren();
          this.removeChild(bankBaseCont);

          this.addChild(this._modal);
          this._modal.bankSuccess();

          let successClose = Modal.btnCont.getChildAt(0);

          new Game().bankSucClose(successClose, this.parent);
        } else {

          // 提示资金不足音效
          if (Sound.soundOpen) {
            Sound.wrongTipSound.play(0, 1);
          }

          this.addChild(this._modal);
          this._modal.tip("当前没有存款金额！");
        }
        Global.updateApi();
      }


    }, this);

    // 当前存款
    let deposit = new egret.Sprite();
    deposit.width = 400;
    deposit.height = 50;
    deposit.x = 80;
    deposit.y = 130;
    this.mainCont.addChild(deposit);

    let coin = this._bg.element({ "name": "bank_json.coin", "x": 22, "y": 26 });
    deposit.addChild(coin);

    let depTxt = this._bg.addtxt({ "text": `当前存款：${this.depNum} 元`, "color": "0xffffff", "x": 50, "y": 14, "size": 24 });
    depTxt.bold = true;
    depTxt.strokeColor = 0x3A230A;
    depTxt.stroke = 2;
    deposit.addChild(depTxt);

    // 存钱取钱
    let save = this._bg.oElement({ "name": "bank_json.save", "x": 71, "y": 195 });
    this.mainCont.addChild(save);

    let draw = this._bg.oElement({ "name": "bank_json.draw", "x": 71, "y": 195 });
    this.mainCont.addChild(draw);
    draw.visible = false;

    let drawGray = this._bg.oElement({ "name": "bank_json.drawTxtGray", "x": 269, "y": 195 });
    this.mainCont.addChild(drawGray);


    drawGray.touchEnabled = true;
    drawGray.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      // tab转换音效
      if (Sound.soundOpen) {
        Sound.switchSound.play(0, 1);
      }

      save.visible = false;
      drawGray.visible = false;
      draw.visible = true;
      saveGray.visible = true;

      this.bankType = "draw";

    }, this);


    let saveGray = this._bg.oElement({ "name": "bank_json.saveTxtGray", "x": 74, "y": 195 });
    this.mainCont.addChild(saveGray);
    saveGray.visible = false;

    saveGray.touchEnabled = true;
    saveGray.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      // tab转换音效
      if (Sound.soundOpen) {
        Sound.switchSound.play(0, 1);
      }

      save.visible = true;
      drawGray.visible = true;
      draw.visible = false;
      saveGray.visible = false;

      this.bankType = "save";

    }, this);



    // 选中
    let select = this._bg.element({ "name": "bank_json.selecte", "x": 170, "y": 335 });
    select.rotation = 90;
    this.mainCont.addChild(select);

    // 额度
    let half = this._bg.addtxt({ "text": `一半`, "color": "0xffffff", "x": 134, "y": 302, "size": 30 });
    half.width = 70;
    half.height = 70;
    half.verticalAlign = egret.VerticalAlign.MIDDLE;
    half.textAlign = egret.HorizontalAlign.CENTER;
    half.bold = true;
    half.strokeColor = 0x894000;
    half.stroke = 3;
    this.mainCont.addChild(half);

    half.touchEnabled = true;
    half.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      // tab转换音效
      if (Sound.soundOpen) {
        if (this.divisor == 1) {
          Sound.switchSound.play(0, 1);
        }
      }

      egret.Tween.get(select).to({ x: 170 }, 400, egret.Ease.quintOut);
      this.divisor = 1 / 2;
    }, this);


    let all = this._bg.addtxt({ "text": `全部`, "color": "0xffffff", "x": 324, "y": 302, "size": 30 });
    all.width = 70;
    all.height = 70;
    all.verticalAlign = egret.VerticalAlign.MIDDLE;
    all.textAlign = egret.HorizontalAlign.CENTER;
    all.bold = true;
    all.strokeColor = 0x894000;
    all.stroke = 3;
    this.mainCont.addChild(all);

    all.touchEnabled = true;
    all.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      // tab转换音效
      if (Sound.soundOpen) {
        if (this.divisor == 1 / 2) {
          Sound.switchSound.play(0, 1);
        }
      }

      egret.Tween.get(select).to({ x: 356 }, 400, egret.Ease.quintOut);
      this.divisor = 1;
    }, this);


  }



}