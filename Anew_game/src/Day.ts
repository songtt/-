class Day extends egret.DisplayObjectContainer {
  private _bg: Background;

  private goldText: egret.TextField;
  private goldNum: number;
  private timeText: egret.TextField;
  private second: number;

  // 福袋
  private luckybagNum: number;


  private startGold: egret.Bitmap;

  private _gameStatus: Boolean = false;

  private startPart: egret.Sprite;
  private goldPart: egret.Sprite;

  private i: number;

  public constructor() {
    super();
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }

  private onAddToStage() {
    this._bg = new Background();

    this.addChild(this._bg.stage_bg({ "name": "daybg_png", "width": this.stage.stageWidth, "height": this.stage.stageHeight }));

    // 福袋
    if (egret.localStorage.getItem("luckBag")) {
      this.luckybagNum = Number(egret.localStorage.getItem("luckBag"));
    } else {
      this.luckybagNum = 0;
    }

    // 初始化游戏
    this.gameInit();

  }


  // 游戏逻辑—————————————————————↓↓

  // 游戏初始化
  private gameInit() {
    this._gameStatus = false;
    // 返回按钮
    this.back();
    // 初始金币数和初始时间
    this.dayScore();
    // 箱子
    this.goldBox();
    // 游戏开始按钮
    this.start();

    this.i = 0;
  }


  // 点击开始游戏按钮
  private gameStart() {

    this.removeChild(this.startPart);
    if (this.second <= 0) {
      if (Sound.soundOpen) {
        Sound.wrongTipSound.play(0, 1);
      }
      this.showShareModal();
      this.shareModalEvent();
    } else {
      if (Sound.soundOpen) {
        Sound.dayStartSound.play(0, 1);
      }
      this._gameStatus = true;
      this.dayTime();
      this.showGold();
      this.boxEvent();
    }

  }

  // 游戏重新开始
  private gameRestart() {
    this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backToGame, this);
    if (this.goldPart && this.goldPart.parent) {
      this.goldPart.parent.removeChild(this.goldPart);
    }
    this.addChild(this.startPart);
  }



  // 游戏暂停
  private gamePause() {
    this.boxCancelEvent();
    this._gameStatus = false;
    this.secondTimer.stop();
    this.goldTimer.stop();
    this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
  }

  // 游戏继续
  private gameContinue() {
    this.boxEvent();
    this._gameStatus = true;
    this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backToGame, this);
    this.secondTimer.start();
    this.goldTimer.start();
    this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);

  }

  // 退出游戏
  private gameQuit() {
    this.boxCancelEvent();
    this._gameStatus = false;
    egret.localStorage.setItem("daySecond", this.second.toString());
    egret.localStorage.setItem("money", this.goldNum.toString());

    Newscenes.getInstance().changeScene('Game');
  }

  // 游戏结束
  private gameOver() {
    this._gameStatus = false;
    this.boxRest();
    this.goldTimer.stop();
    this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);

  }


  // 游戏逻辑↑↑—————————↑↑————————————————↑↑



  // 金币——————————————↓↓
  private goldArray: any[];
  //设置动画的移动速度
  private speed: number = 0.5;
  private goldTimer: egret.Timer;
  private goldCount: number;

  // 金币层的容器

  private showGold() {
    this.goldArray = [];
    this.goldCount = 0;

    this.goldPart = new egret.Sprite();
    this.addChild(this.goldPart);


    this.goldTimer = new egret.Timer(100, 0);
    this.goldTimer.addEventListener(egret.TimerEvent.TIMER, this.goldTimerFunc, this);

    this.goldTimer.start();

    this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);

  }

  // 生成元素的计时器函数
  private goldTimerFunc() {
    this.goldCount++;
    if (this.goldCount % 100 == 0) {
      this.goldCont("luckyBag");
    } else if (this.goldCount % 40 == 0) {
      this.goldCont("boom");
    } else if (this.goldCount % 5 == 0) {
      this.goldCont("gold");
    }
  }


  // 元素容器（金币、炸弹、福袋等）
  private elContainer: egret.Sprite;
  private elCont() {
    let randomX = Math.ceil(Math.random() * (this.stage.width - 200) + 50);
    this.elContainer = new egret.Sprite();

    this.elContainer.width = 60;
    this.elContainer.height = 100;
    this.elContainer.y = 0;
    this.elContainer.x = randomX;
    this.goldPart.addChild(this.elContainer);
  }

  // 生成元素（金币数量 + 元素图片）
  private goldCont(el) {
    this.elCont();
    let eltext = new egret.TextField();
    eltext.text = el;
    eltext.visible = false;


    if (el == "gold") {
      let random1 = Math.ceil(Math.random() * 11);
      // 金币数
      let goldContNum = this._bg.addtxt({ "text": `+${random1 * 888}`, "x": 0, "y": 0, "color": "0xFFFF00", "size": 22 });
      // 金币图片
      let gold = this._bg.element({ "name": `day_json.gold${random1}`, "x": 30, "y": goldContNum.height + 20 });
      gold.y = goldContNum.height + gold.height / 2 + 10;

      this.elContainer.addChild(eltext);
      this.elContainer.addChild(goldContNum);
      this.elContainer.addChild(gold);

    } else if (el == "boom") {
      let random2 = Math.ceil(Math.random() * 2);
      // 金币数
      let boomContNum = this._bg.addtxt({ "text": `-${random2 * 666}`, "x": 0, "y": 0, "color": "0x2B2B34", "size": 22 });
      // 炸弹图片
      let boomImg = this._bg.element({ "name": `day_json.boom${random2}`, "x": 30, "y": boomContNum.height + 20 });

      boomImg.y = boomContNum.height + boomImg.height / 2 + 10;

      this.elContainer.addChild(eltext);
      this.elContainer.addChild(boomContNum);
      this.elContainer.addChild(boomImg);
    } else if (el == "luckyBag") {

      // 福袋图片
      let luckyBag = this._bg.element({ "name": `day_json.luckyBag`, "x": 30, "y": 0 });

      luckyBag.y = luckyBag.height / 2;

      this.elContainer.addChild(eltext);
      this.elContainer.addChild(luckyBag);
    }


    this.goldArray.push(this.elContainer);

  }


  // 每一帧的动画，改变每个金币的 y 坐标。并判断是否落入箱子中
  private onEnterFrame(e: egret.Event) {

    for (var i = 0; i < this.goldArray.length; i++) {
      // let rnd = Math.random()*10+10;
      this.goldArray[i].y += this.speed * 15;

      let hitX = this.goldArray[i].x + this.goldArray[i].width / 2;
      let hitY = this.goldArray[i].y + this.goldArray[i].height - 30;


      if (this.hitZone.hitTestPoint(hitX, hitY)) {

        let elStr = this.goldArray[i].getChildAt(0).text;
        if (elStr == "luckyBag") {
          this.luckybagNum++;
          egret.localStorage.setItem("luckBag", this.luckybagNum.toString());
          if (Sound.soundOpen) {
            Sound.getLuckyBagSound.play(0, 1);
          }

        } else {
          let goldHitNum = Number(this.goldArray[i].getChildAt(1).text.slice(1));
          if (elStr == "gold") {
            this.goldNum += goldHitNum;
            if (Sound.soundOpen) {
              Sound.coinSound.play(0, 1);
            }
          } else {
            if (Sound.soundOpen) {
              Sound.dayBombSound.play(0, 1);
            }
            this.goldNum -= goldHitNum;
          }
          this.goldText.text = Math.floor(this.goldNum / 1000) + "k";
          // egret.localStorage.setItem("money", this.goldNum.toString());
        }
        this.goldPart.removeChild(this.goldArray[i]);
        this.goldArray.splice(i, 1);
      } else if (this.goldArray[i].y > this.stage.height - 110) {

        this.goldPart.removeChild(this.goldArray[i]);
        this.goldArray.splice(i, 1);


      }
    }



  }


  // 金币——————————————↑↑
















  // 倒计时————————————————————————————↓↓
  private secondTimer: egret.Timer;
  private count: number;
  private dayTime() {
    this.count = 0;
    this.secondTimer = new egret.Timer(100, 10 * this.second);
    this.secondTimer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
    this.secondTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
    this.secondTimer.start();
  }

  // 改变秒数
  private timerFunc() {
    this.count++;
    if (this.count % 10 == 0) {
      this.second--;
      if (this.second <= 0) {
        this.second = 0;
      }
    }

    this.timeText.text = this.second + " s";
    // egret.localStorage.setItem("daySecond", this.second.toString());

  }

  // 时间到，弹出分享框。
  private timerComFunc() {
    this.gameOver();
    this.showShareModal();
    this.shareModalEvent();

  }
  // ↑↑倒计时——↑↑——————————↑↑———————————↑↑



  // 开始场景 startPart

  private mcStart: egret.MovieClip;

  private start() {
    this.startPart = new egret.Sprite();
    this.addChild(this.startPart);

    this.startGold = this._bg.element({ "name": "day_json.start", "x": 332, "y": 543 });
    this.startPart.addChild(this.startGold);

    var startBtn = RES.getRes("daystart_json");
    var txtr = RES.getRes("daystart_png");
    var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(startBtn, txtr);
    this.mcStart = new egret.MovieClip(mcFactory.generateMovieClipData("start"));
    this.mcStart.anchorOffsetX = this.mcStart.width / 2;
    this.mcStart.anchorOffsetY = this.mcStart.height / 2;
    this.mcStart.x = 325;
    this.mcStart.y = 515;

    this.startPart.addChild(this.mcStart);
    this.mcStart.play(-1);

    this.mcStart.touchEnabled = true;
    this.mcStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameStart, this);
  }





  // 返回主游戏———————————————————————↓↓
  private backBtn: egret.Bitmap;
  private back() {
    // 添加返回按钮
    this.backBtn = this._bg.element({ "name": "day_json.dayback", "x": 50, "y": 60 });
    this.addChild(this.backBtn);

    // 给返回按钮添加点击事件
    this.backBtn.touchEnabled = true;
    this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backToGame, this);
  }

  // 返回事件
  private backToGame() {
    if (this._gameStatus) {
      if (this.second > 0) {
        if (Sound.soundOpen) {
          Sound.tipSound.play(0, 1);
        }
        this.gamePause();
        this.showBackModal(this.second);
        this.backModalEvent();
      } else {
        this.gameQuit();
      }
    } else {
      if (this.modal && this.modal.parent) {
        this.backBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.backToGame, this);
      } else {
        // 返回音效
        if (Sound.soundOpen) {
          Sound.backSound.play(0, 1);
        }
        this.gameQuit();
      }
    }
  }
  // 返回主游戏———↑↑——————————↑↑———————————↑↑


  // 箱子移动事件————————————————————————————↓↓
  private box: egret.Sprite;
  private _touchStatus: boolean = false;              //当前触摸状态，按下时，值为true
  private _distance: egret.Point = new egret.Point(); //鼠标点击时，鼠标全局坐标与移动对象的位置差
  private hitZone: egret.Sprite;

  private goldBox() {
    // 添加箱子图片
    this.box = new egret.Sprite();
    let boxImg = this._bg.element({ "name": "day_json.box", "x": 150, "y": 106 });
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

  }

  // 添加箱子移动事件
  private boxEvent() {
    this.box.touchEnabled = true;
    this.box.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
    this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
  }

  // 取消箱子移动事件
  private boxCancelEvent() {
    this.box.touchEnabled = false;
    this.box.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
    this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
  }

  // 箱子复位
  private boxRest() {
    this.boxCancelEvent();
    egret.Tween.get(this.box).to({ x: 320 }, 200);
  }

  private mouseDown(evt) {
    evt.preventDefault();
    this._touchStatus = true;
    this._distance.x = evt.stageX - this.box.x;
    this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);

  }

  private mouseMove(evt: egret.TouchEvent) {
    evt.preventDefault();
    if (this._touchStatus) {
      this.box.x = evt.stageX - this._distance.x;
      if (this.box.x <= 60) {
        this.box.x = 60;
      } else if (this.box.x >= 600) {
        this.box.x = 600;
      }
    }
  }

  private mouseUp(evt) {
    evt.preventDefault();
    this._touchStatus = false;
    this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
  }



  // 箱子移动事件————————————————————————————↑↑






  // 初始金币数和初始时间
  private dayScore() {
    let gold = new egret.Sprite();
    gold.width = 170;
    gold.height = 285;
    gold.x = 470;
    gold.y = 65;
    this.addChild(gold);

    // 添加金币框
    let goldFrame = this._bg.element({ "name": "day_json.dayscore", "x": 87, "y": 44 });
    gold.addChild(goldFrame);

    // 添加金币数
    if (egret.localStorage.getItem("money")) {
      this.goldNum = Number(egret.localStorage.getItem("money"));
    }
    this.goldText = this._bg.addtxt({ "text": Math.floor(this.goldNum / 1000) + "k", "color": "0x610C1e", "x": 63, "y": 35 });
    gold.addChild(this.goldText);

    // 添加时间
    if (egret.localStorage.getItem("curDate")) {
      let curDate = egret.localStorage.getItem("curDate");
      if (egret.localStorage.getItem("gameDate")) {
        let gameDate = egret.localStorage.getItem("gameDate");
        let curArr = curDate.split("-");
        let gameArr = gameDate.split("-");

        if (Number(curArr[0]) > Number(gameArr[0])) {
          this.second = 60;
        } else if (Number(curArr[1]) > Number(gameArr[1])) {
          this.second = 60;
        } else if (Number(curArr[2]) > Number(gameArr[2])) {
          this.second = 60;
        } else {
          if (egret.localStorage.getItem("daySecond")) {
            this.second = Number(egret.localStorage.getItem("daySecond"));

          } else {
            this.second = 60;
          }
        }
      } else {
        this.second = 60;
      }
      egret.localStorage.setItem("gameDate", curDate);

    } else {
      this.second = 30;
    }

    this.timeText = this._bg.addtxt({ "text": this.second + " s", "color": "0xEDE0E3", "x": 45, "y": 100, "size": 46 });
    this.timeText.bold = true;
    gold.addChild(this.timeText);
  }



  // 模态框———————————↓↓
  private modal: Modal = new Modal();

  // 显示分享模态框
  private showShareModal() {
    if (Sound.soundOpen) {
      Sound.tipSound.play(0, 1);
    }
    this.addChild(this.modal);
    this.modal.dayModal();
  }

  // 模态框不可见
  private removeModal() {
    this.modal.removeChildren();
    this.removeChild(this.modal);
  }
  // 分享模态框事件
  private shareModalEvent() {
    let close = Modal.btnCont.getChildAt(0);
    let cancel = Modal.btnCont.getChildAt(1);
    let share = Modal.btnCont.getChildAt(2);

    // 点击关闭，出现开始游戏。
    close.touchEnabled = true;
    close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeShare, this);

    // 点击取消，出现开始游戏。
    cancel.touchEnabled = true;
    cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeShare, this);

    // 点击分享
    share.touchEnabled = true;
    share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shareClick, this);
  }
  // 点击取消和关闭分享模态框
  private closeShare() {
    if (Sound.soundOpen) {
      Sound.cancelSound.play(0, 1);
    }
    this.removeModal();
    this.gameRestart();
  }
  // 分享
  private shareClick() {
    if (Sound.soundOpen) {
      Sound.cancelSound.play(0, 1);
    }
    this.removeModal();

    wx.shareAppMessage({
      title: "来呀~造作呀~",
      imageUrl: "https://dfw.hebzycw.com/resource/assets/share1.png",
      query: ""
    });
    this.gameRestart();

  }

  // 显示返回主游戏模态框
  private showBackModal(second) {
    this.addChild(this.modal);
    this.modal.dayBack(second);
  }

  // 返回模态框事件
  private backModalEvent() {
    let close = Modal.btnCont.getChildAt(0);
    let cancel = Modal.btnCont.getChildAt(1);
    let sure = Modal.btnCont.getChildAt(2);

    // 点击关闭，游戏继续。
    close.touchEnabled = true;
    close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeBack, this);

    // 点击取消，游戏继续。
    cancel.touchEnabled = true;
    cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeBack, this);

    // 点击确定 退出游戏
    sure.touchEnabled = true;
    sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sureClick, this);
  }

  // 关闭模态框
  private closeBack() {
    if (Sound.soundOpen) {
      Sound.cancelSound.play(0, 1);
    }
    this.removeModal();
    this.gameContinue();
  }

  // 退出
  private sureClick() {
    if (Sound.soundOpen) {
      Sound.backSound.play(0, 1);
    }
    this.removeModal();
    this.gameQuit();
  }


  // 模态框———————————————↑↑











}