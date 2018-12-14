class Modal extends egret.DisplayObjectContainer {

  private _bg: Background;

  private modalFrame: egret.Sprite;

  static btnCont: egret.Sprite;

  public constructor() {
    super();
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }

  private onAddToStage() {

    this._bg = new Background();

    //模态框总容器，加一层透明黑色底层
    let modalCont = new egret.Sprite();
    this.addChild(modalCont);
    modalCont.graphics.beginFill(0x000000, 0.4);
    modalCont.graphics.drawRect(0, 0, 640, 1138);
    modalCont.graphics.endFill();

    modalCont.touchEnabled = true;
    modalCont.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { }, this);


    // 模态框容器
    this.modalFrame = new egret.Sprite();
    this.modalFrame.x = 320;
    this.modalFrame.y = 570;
    this.modalFrame.width = 430;
    this.modalFrame.height = 270;
    // this.modalFrame.graphics.beginFill(0x00ff00, 0.6);
    // this.modalFrame.graphics.drawRect(0, 0, 430, 270);
    // this.modalFrame.graphics.endFill();
    this.modalFrame.anchorOffsetX = this.modalFrame.width / 2;
    this.modalFrame.anchorOffsetY = this.modalFrame.height / 2;
    modalCont.addChild(this.modalFrame);

    // 动态出现
    this.modalFrame.scaleX = 0.3;
    this.modalFrame.scaleY = 0.3;
    egret.Tween.get(this.modalFrame).to({ scaleX: 1, scaleY: 1 }, 200);


    // 模态框外框
    let mfImg = this._bg.element({ "name": "tipamend_json.tipframe", "x": 215, "y": 135 });
    this.modalFrame.addChild(mfImg);


    // 按钮容器
    Modal.btnCont = new egret.Sprite();
    Modal.btnCont.x = 0;
    Modal.btnCont.y = 0;
    Modal.btnCont.width = 430;
    Modal.btnCont.height = 270;
    this.modalFrame.addChild(Modal.btnCont);



    // 关闭
    let closeImg = this._bg.element({ "name": "tipamend_json.tipclose", "x": 422, "y": 50 });
    Modal.btnCont.addChild(closeImg);

  }

  // 好运模态框
  public luckModal() {
    let randomGold = Math.ceil(Math.random() * 10) * 100;  // 100-1000
    let message = [
      `踩到狗屎啦！获得${randomGold}金币安慰奖！`,
      `出门捡到${randomGold}金币！`,
      `捡到钱包，获得失主${randomGold}金币感谢！`,
      `买彩票中奖啦！恭喜获得${randomGold}金币！`,
      `天上掉馅饼，被${randomGold}金币砸中啦！`
    ]
    let rdmMessage = Math.floor(Math.random() * message.length);
    this.modalFrame.addChild(this.info(message[rdmMessage]));
    Modal.btnCont.addChild(this.button("确定", 135, 180));

    let goldNum = this._bg.addtxt({ text: randomGold, textColor: 0xffffff, x: 0, y: 0 })
    Modal.btnCont.addChild(goldNum);
    goldNum.visible = false;

  }

  // 坏运模态框
  public badLuckModal() {
    let randomGold = Math.ceil(Math.random() * 10) * 100;  // 100-1000
    let message = [
      `酒驾被拘留，罚款${randomGold}金币！`,
      `太善良，被骗子骗了${randomGold}金币！`,
      `朋友找你借走了${randomGold}金币！`,
      `打碎商店的玻璃瓶，赔偿${randomGold}金币！`,
      `打…打…打劫，交出${randomGold}金币过路费！`
    ]
    let rdmMessage = Math.floor(Math.random() * message.length);
    this.modalFrame.addChild(this.info(message[rdmMessage]));
    Modal.btnCont.addChild(this.button("确定", 135, 180));

    let goldNum = this._bg.addtxt({ text: randomGold, textColor: 0xffffff, x: 0, y: 0 })
    Modal.btnCont.addChild(goldNum);
    goldNum.visible = false;

  }

  // 医院模态框
  public hospitModal() {
    let randomGold = Math.ceil(Math.random() * 10) * 100;  // 100-1000
    let message = [
      `被流浪狗咬伤，打狂犬疫苗用掉${randomGold}金币！`,
      `下雪天滑倒摔伤，住院用掉${randomGold}金币！`,
      `吃夜宵吃坏了肚子，看病用掉${randomGold}金币！`,
      `长了蛀牙，拔牙用掉${randomGold}金币！`
    ]
    let rdmMessage = Math.floor(Math.random() * message.length);
    this.modalFrame.addChild(this.info(message[rdmMessage]));
    Modal.btnCont.addChild(this.button("确定", 135, 180));

    let goldNum = this._bg.addtxt({ text: randomGold, textColor: 0xffffff, x: 0, y: 0 })
    Modal.btnCont.addChild(goldNum);
    goldNum.visible = false;

  }

  // 活动板模态框
  public actModal() {
    this.customTip("Big");
    this.modalFrame.addChild(this.info("每日活动得福袋啦！有机会获得稀缺卡片哦！攻击好友绝不手软！邀请好友一起来互相伤害吧~"));

    Modal.btnCont.addChild(this.button("福袋", 40, 205));

    let share = this.button("邀请", 230, 205);
    let shareBtn: any = share.getChildAt(0);
    shareBtn.texture = RES.getRes("tipamend_json.greenBtn");
    let shareTxt: any = share.getChildAt(1);
    shareTxt.strokeColor = 0x157505;

    Modal.btnCont.addChild(share);

  }




  // 每日活动模态框
  public dayModal() {
    this.modalFrame.addChild(this.info("没有时间啦！分享给好友一起玩！"));
    Modal.btnCont.addChild(this.button("取消", 40, 180));
    Modal.btnCont.addChild(this.button("分享", 230, 180));
  }

  // 每日活动返回主游戏模态框
  public dayBack(second) {
    this.modalFrame.addChild(this.info(`还剩余${second}s，确定要返回吗？`));
    Modal.btnCont.addChild(this.button("取消", 40, 180));
    Modal.btnCont.addChild(this.button("确定", 230, 180));
  }


  // 提示解锁下一大陆
  public nextLand() {
    this.modalFrame.addChild(this.info(`当前大陆已满级，请前往地图解锁下一大陆！`));
    Modal.btnCont.addChild(this.button("取消", 40, 180));
    Modal.btnCont.addChild(this.button("地图", 230, 180));
  }

  // 确定解锁
  public unlockModal(price) {
    this.modalFrame.addChild(this.info(`解锁需要${price}金币，确定解锁？`));
    Modal.btnCont.addChild(this.button("确定", 135, 180));
  }

  // 确定解锁
  public poorModal(gold) {
    this.modalFrame.addChild(this.info(`需要${gold}金币，资金不足，去玩游戏获得金币吧！`));
    Modal.btnCont.addChild(this.button("取消", 40, 180));
    Modal.btnCont.addChild(this.button("确定", 230, 180));
  }

  // 房屋整修所需金币提醒
  public houseFix(grade, price) {
    this.modalFrame.addChild(this.info(`折损程度${grade}级，整修需要${price}金币！`));
    Modal.btnCont.addChild(this.button("确定", 135, 180));
  }

  // 房屋整修所需金币提醒
  public helpFriendFix(price) {
    this.modalFrame.addChild(this.info(`需要${price}金币，确定帮好友整修吗？`));
    Modal.btnCont.addChild(this.button("取消", 40, 180));
    Modal.btnCont.addChild(this.button("确定", 230, 180));
  }

  public bankSuccess() {
    this.customTip("Small");
    let info = this.info(`操作成功！`);
    info.y += 20;
    this.modalFrame.addChild(info);
  }

  // 其他尺寸模态框基础外框 type = Big / Small
  private customTip(type) {

    this.modalFrame.removeChildAt(0);
    let frame = this._bg.element({ "name": `tipamend_json.tip${type}`, "x": 215, "y": 135 });
    this.modalFrame.addChildAt(frame, 0);

    Modal.btnCont.removeChildAt(0);
    var close;
    if (type == "Big") {
      close = this._bg.element({ "name": "tipamend_json.tipclose", "x": 420, "y": 18 });

    } else {
      close = this._bg.element({ "name": "tip_json.tipclose", "x": 340, "y": 100 });
    }

    Modal.btnCont.addChildAt(close, 0);
  }

  // 小型模态框提示型，1s 后自动关闭
  public smallTip(message) {
    this.customTip("Small");
    let info = this.info(message);
    info.y += 20;
    this.modalFrame.addChild(info);


    Modal.btnCont.removeChildAt(0);
    egret.setTimeout(() => {
      this.removeChildren();
      this.parent.removeChild(this);
    }, this, 1000);

  }


  // 信息提示型模态框，带确定按钮，带关闭按钮
  public tip(message) {
    this.modalFrame.addChild(this.info(message));
    Modal.btnCont.addChild(this.button("确定", 135, 180));

    let close = Modal.btnCont.getChildAt(0);
    let cancel = Modal.btnCont.getChildAt(1);

    // 点击关闭。
    close.touchEnabled = true;
    close.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      // 音效
      if (Sound.soundOpen) {
        Sound.cancelSound.play(0, 1);
      }
      this.removeChildren();
      this.parent.removeChild(this);
    }, this);

    // 点击取消。
    cancel.touchEnabled = true;
    cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
      if (Sound.soundOpen) {
        Sound.cancelSound.play(0, 1); // 音效
      }
      this.removeChildren();
      this.parent.removeChild(this);
    }, this);

  }


  // 攻击弹框
  public useAttack() {
    this.customTip("Big");
    this.modalFrame.addChild(this.info("每日可免费攻击好友5次，您已超过次数，可选择使用攻击卡或者通过分享获得相应的攻击次数！"));

    Modal.btnCont.addChild(this.button("使用", 230, 205));

    let share = this.button("分享", 40, 205);
    let shareBtn: any = share.getChildAt(0);
    shareBtn.texture = RES.getRes("tipamend_json.greenBtn");
    let shareTxt: any = share.getChildAt(1);
    shareTxt.strokeColor = 0x157505;
    Modal.btnCont.addChild(share);
  }

  //攻击被防御弹窗
  public attacktoDefe() {
    this.modalFrame.addChild(this.info("该玩家使用了防御卡，暂不可被攻击！"));
    Modal.btnCont.addChild(this.button("确定", 135, 180));
  }


  // 模态框提示信息
  private info(message) {
    let mmtxt = this._bg.addtxt({ "text": message, color: 0xffffff, x: 10, y: 80, size: 22 });
    mmtxt.width = 415;
    mmtxt.height = 100;
    mmtxt.strokeColor = 0x3A230A;
    mmtxt.stroke = 2;
    mmtxt.lineSpacing = 10;
    mmtxt.textAlign = egret.HorizontalAlign.CENTER;
    mmtxt.verticalAlign = egret.VerticalAlign.MIDDLE;
    return mmtxt;
  }


  // 按钮
  private button(text, x, y) {
    let modalBtn = new egret.Sprite();
    modalBtn.x = x;
    modalBtn.y = y;
    modalBtn.width = 164;
    modalBtn.height = 54;
    let btn = this._bg.element({ "name": "tip_json.tipbtn", "x": 82, "y": 27 });
    modalBtn.addChild(btn);

    let btnTxt = this._bg.addtxt({ "text": text, color: 0xffffff, x: 0, y: 0, size: 24 });
    btnTxt.width = 164;
    btnTxt.height = 54;
    btnTxt.strokeColor = 0x894000;
    btnTxt.stroke = 2;
    btnTxt.textAlign = egret.HorizontalAlign.CENTER;
    btnTxt.verticalAlign = egret.VerticalAlign.MIDDLE;
    modalBtn.addChild(btnTxt);

    return modalBtn;
  }

  public tankuang() {
    let modalCont = new egret.Sprite();
    this.addChild(modalCont);
    modalCont.graphics.beginFill(0x000000, 0.4);
    modalCont.graphics.drawRect(0, 0, 300, 300);
    modalCont.graphics.endFill();
  }


  //通知容器
  public noticBg(obj) {
    let modalCont = new egret.Sprite();
    modalCont.graphics.beginFill(0x000000, obj.ap);
    let x = obj.x ? obj.x : 0;
    let y = obj.y ? obj.y : 0;
    let width = obj.width ? obj.width : 640;
    let height = obj.height ? obj.height : 30;
    modalCont.graphics.drawRect(x, y, width, height);
    modalCont.graphics.endFill();
    return modalCont;
  }
}