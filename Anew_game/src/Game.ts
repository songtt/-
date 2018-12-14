// 默认添加开始场景
class Game extends egret.DisplayObjectContainer {
    //游戏背景
    private _bg;
    //npc  元素：色子，游戏人物，开始按钮
    private hero: egret.Bitmap;
    private dice: egret.Bitmap;
    private gored: egret.Bitmap;  //开始按钮
    private myhouse: egret.Bitmap; //我的房屋
    private day: egret.Bitmap; //每日活动
    private mcDice: egret.MovieClip;


    //色子基数
    private _shaizi: number = 0;
    //游戏人物移动步数
    private stepsnum: number = 0;
    private heronum: number = 1;
    private money; //金币数
    private moneyNum;
    private activity: egret.Bitmap;
    public _modal: Modal = new Modal();

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        //异步加载排行榜数据
        if(!Global.friendget() || !Global.worldget()){
            this.requestRank();
        }
        //添加背景
        this._bg = new Background();
        this.addChild(this._bg);

        //设置全局好友互动提示信息
        let point = this._bg.addpoint({ "text": "", "color": "0xFFFFFF", "y": 148, "size": 22 });
        this.addChild(point);
        Global.notice = point;

        //地震特效
        Global.earth = Global.earthEffect();
        this.addChild(Global.earth);

        //初始色子
        this.dice = this._bg.npc({ "name": "dice_json.1", "x": 326, "y": 651 });
        this._bg.addChild(this.dice);
        this.diceShake();

        // 音乐和音效
        let music: egret.Bitmap = this._bg.element({ "name": "element_json.music", "x": 34, "y": 70 });
        let sound: egret.Bitmap = this._bg.element({ "name": "element_json.sound", "x": 93, "y": 70 });
        if(!Sound.bgOpen) {
            music.texture = RES.getRes("element_json.musicClose");
        }
        if(!Sound.soundOpen) {
            sound.texture = RES.getRes("element_json.soundClose");
        }
        this._bg.addChild(music);
        this._bg.addChild(sound);
        music.touchEnabled = true;
        music.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            if (Sound.bgOpen) {
                Sound.backSound.play(0,1);
                Sound.bgOpen = false;
                egret.localStorage.setItem("bgOpen", "false");
                Newscenes.bgm.stop();
                music.texture = RES.getRes("element_json.musicClose");
            } else {
                Sound.bgOpen = true;
                egret.localStorage.removeItem("bgOpen");
                Newscenes.bgm = Sound.bgSound.play()
                music.texture = RES.getRes("element_json.music");
            }
        }, this);

        sound.touchEnabled = true;
        sound.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            if (Sound.soundOpen) {
                Sound.backSound.play(0,1);
                Sound.soundOpen = false;
                egret.localStorage.setItem("soundOpen", "false");
                sound.texture = RES.getRes("element_json.soundClose");
            } else {
                Sound.soundOpen = true;
                egret.localStorage.removeItem("soundOpen");
                sound.texture = RES.getRes("element_json.sound");
            }
        }, this);

        //我的英雄

        this.hero = this._bg.npc({ "name": "hero_json.c1", "x": 578, "y": 665 });
        this.hero.name = "c1";
        this.heroInit();
        this._bg.addChild(this.hero);

        //开始按钮
        //动画
        // var mcStart = this._bg.moveGif({json:"daystart_json",img:"daystart_png",name:"start",x:"325",y:"515"});
        // this._bg.addChild(mcStart);
        this.gored = this._bg.npc({ "name": "element_json.go_up", "x": 318, "y": 1020 });
        this._bg.addChild(this.gored);

        //我的房屋场景 
        this.myhouse = this._bg.npc({ "name": "element_json.myhouse", "x": 545, "y": 1047 });
        this._bg.addChild(this.myhouse);


        //每日活动
        this.day = this._bg.npc({ "name": "element_json.day", "x": 88, "y": 1047 });
        this._bg.addChild(this.day);

        //金币数
        let moneyBg = this._bg.element({ "name": "element_json.money", "x": 555, "y": 97 });
        this._bg.addChild(moneyBg);

        if (egret.localStorage.getItem("money")) {
            this.money = egret.localStorage.getItem("money");
        } else {
            this.money = 5000;
        }

        this.moneyNum = this._bg.addtxt({ "text": Math.floor(this.money / 1000) + "k", "x": 533, "y": 88, color: "0x000000" });
        this._bg.addChild(this.moneyNum);

        //活动展示
        this.activity = this._bg.npc({ "name": "element_json.activity", "x": 520, "y": 269, "width": 185, "height": 180 });
        this._bg.addChild(this.activity);
        //获取当前日期  设定的每日活动的黄道吉时
        let mydate = this._bg.getDate();
        let time = this._bg.addtxt({ "text": mydate.month + "/" + mydate.day, "x": 490, "y": 245, color: "0x000000" });
        // let time = this._bg.addtxt({ "text": mydate.month + "/" + mydate.day + " " + "20:00", "x": 490, "y": 245, color: "0x000000" });

        this._bg.addChild(time);

        this.elClick();


    }

    // 人物初始化
    private heroInit() {
        if (egret.localStorage.getItem("heroX")) {
            this.hero.x = Number(egret.localStorage.getItem("heroX"));
        }
        if (egret.localStorage.getItem("heroY")) {
            this.hero.y = Number(egret.localStorage.getItem("heroY"));
        }
        if (egret.localStorage.getItem("anchorOffsetX")) {
            this.hero.anchorOffsetX = Number(egret.localStorage.getItem("anchorOffsetX"));
        }
        if (egret.localStorage.getItem("anchorOffsetY")) {
            this.hero.anchorOffsetY = Number(egret.localStorage.getItem("anchorOffsetY"));
        }
        if (egret.localStorage.getItem("direction")) {
            let direction = egret.localStorage.getItem("direction")
            this.hero.texture = RES.getRes(`hero_json.${direction}`);
            this.hero.name = direction;
        }
    }


    // 点击开始按钮，添加色子动图
    private onclickfunc(event: egret.Event) {
        // 色子音效
        if (Sound.soundOpen) {
            Sound.diceSound.play(0, 1);
        }

        // 点击开始按钮后，移除所有点击事件，直到人物移动完后再添加点击。
        this.cancelElClick();

        // 添加色子动图
        this.addChild(this.mcDice);
        this._bg.removeChild(this.dice);
        this.mcDice.play(2);

    }

    // 色子gif图

    private diceShake() {
        var data = RES.getRes("dicegif_json");
        var txtr = RES.getRes("dicegif_png");
        var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
        this.mcDice = new egret.MovieClip(mcFactory.generateMovieClipData("dicegif"));
        this.mcDice.anchorOffsetX = this.mcDice.width / 2;
        this.mcDice.anchorOffsetY = this.mcDice.height / 2;
        this.mcDice.x = 306;
        this.mcDice.y = 605;
        this.mcDice.addEventListener(egret.Event.COMPLETE, (e: egret.Event) => {
            this.stepsnum = Math.ceil(Math.random() * 6);
            this.diceComp();
        }, this);

    }

    // 计时结束随机指定色子点数，触发人物移动
    private diceComp() {
        this.removeChild(this.mcDice);
        this._bg.addChild(this.dice);

        this.stepsnum = Math.ceil(Math.random() * 6);
        this.dice.texture = RES.getRes("dice_json." + this.stepsnum);
        this.heroWalkfunc();
    }


    //人物移动
    private heroWalkfunc() {
        let timer: egret.Timer = new egret.Timer(200, this.stepsnum);
        //注册监听
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerherofunc, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerheroend, this);
        timer.start();
    }

    //人物移动事件过程改变坐标
    private timerherofunc(event: egret.Event) {
        //判断小人坐标
        if (this.hero.x <= 578 && this.hero.y >= 665 && this.hero.x > 338 && this.hero.y < 805) {
            this.hero.x -= 60;
            this.hero.y += 35;
            if (this.hero.x == 338 && this.hero.y == 805) {
                this.addHero("hero_json.b1", 45, -6, "b1");
            }
        } else if (this.hero.x <= 338 && this.hero.y <= 805 && this.hero.x > 98 && this.hero.y > 665) {
            this.hero.x -= 60;
            this.hero.y -= 35;
            if (this.hero.x == 98 && this.hero.y == 665) {
                this.addHero("hero_json.c3", 45, -6, "c3");
            }
        } else if (this.hero.x >= 98 && this.hero.y <= 665 && this.hero.x < 338 && this.hero.y > 525) {
            this.hero.x += 60;
            this.hero.y -= 35;
            if (this.hero.x == 338 && this.hero.y == 525) {
                this.addHero("hero_json.c2", 45, -6, "c2");
            }
        } else if (this.hero.x >= 338 && this.hero.y >= 525 && this.hero.x < 578 && this.hero.y < 665) {
            this.hero.x += 60;
            this.hero.y += 35;

            if (this.hero.x == 578 && this.hero.y == 665) {
                this.addHero("hero_json.c1", 10, -1, "c1");
            }
        }
        //每步应加的金币数
        let random = Math.floor(Math.random() * (800 - 400 + 1) + 400);
        let data = { money: random, symbol: "+" };
        this.countMoney(data);

        // 人物走动音效
        if (Sound.soundOpen) {
            Sound.walkSound.play(0, 1);
        }
    }

    //英雄转身
    private addHero(name, offsetX, offsetY, direction) {
        this.hero.texture = RES.getRes(name);
        this.hero.anchorOffsetX = this.hero.width / 5 + offsetX;
        this.hero.anchorOffsetY = this.hero.height + offsetY;
        this.hero.name = direction;
    }





    //人物移动结束
    private timerheroend(event: egret.Event) {
        this.removeEventListener(egret.TimerEvent.TIMER, this.timerherofunc, this);
        this.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerheroend, this);

        // 判断是否触发弹框
        let isCardHit = this.isHitScene(398, 560, 40, 40);
        let isLuckHit = this.isHitScene(398, 770, 40, 40);
        let isBadLuckHit = this.isHitScene(218, 735, 40, 40);
        let isBankHit = this.isHitScene(98, 665, 40, 40);
        let ishospitalHit = this.isHitScene(278, 560, 40, 40);

        if (isCardHit) {
            egret.setTimeout(this.cardModal, this, 200);
            // this.cardModal();
        } else if (isLuckHit) {
            egret.setTimeout(this.luckyModal, this, 200);
            // this.luckyModal();
        } else if (isBadLuckHit) {
            egret.setTimeout(this.badLuckyModal, this, 200);
            // this.badLuckyModal();
        } else if (isBankHit) {
            egret.setTimeout(this.bankModal, this, 200);
            // this.bankModal();
        } else if (ishospitalHit) {
            egret.setTimeout(this.hospitalModal, this, 200);
            // this.hospitalModal();
        } else {
            //人物移动完重新添加点击事件
            this.elClick();
        }
    }


    // 碰撞检测
    private isHitScene(x, y, width, height): boolean {
        let shp: egret.Shape = new egret.Shape();
        shp.graphics.beginFill(0xff0000, 0);
        shp.graphics.drawRect(x, y, width, height);
        shp.graphics.endFill();
        return shp.hitTestPoint(this.hero.x, this.hero.y + 40);
    }

    //金币计算   以及每一步增加金币动画
    private countMoney(data) {
        let num = 0;  //金币总数
        let color = "";
        if (data.symbol == "+") {
            num = parseInt(this.money) + data.money;
            color = "0xFFFF00";
        } else {
            num = parseInt(this.money) - data.money;
            color = "0xFF0000";
        }
        let title = data.symbol + data.money;  //显示的文字
        //每步增加金币的动画
        let shp = this._bg.npc({ "name": "day_json.gold4", "x": this.hero.x, "y": this.hero.y - 130 });
        let txt = this._bg.addtxt({ "text": title, "x": this.hero.x + 20, "y": this.hero.y - 140, color: color, size: 26 });
        this._bg.addChild(shp);
        this._bg.addChild(txt);
        egret.Tween.get(shp).to({ x: 507, y: 95 }, 1300, egret.Ease.backIn);
        egret.Tween.get(txt).to({ x: 507, y: 95 }, 1300, egret.Ease.backIn);
        this.money = num;
        egret.localStorage.setItem("money", this.money.toFixed());
        egret.setTimeout(function () {
            if (shp && shp.parent) {
                shp.parent.removeChild(shp);
            }
            if (txt && txt.parent) {
                txt.parent.removeChild(txt);
            }
            this.moneyNum.text = Math.floor(num / 1000) + "k";
            //移除页面的所有动画  ********************待研究
            egret.Tween.removeTweens(this._bg);
        }, this, 1300);
    }



    // 页面所有点击事件
    private elClick() {
        //授权按钮
        let button = wx.createUserInfoButton({
            type: 'text',
            text: "",
            style: {
                width: 640,
                height: 1138,
                lineHeight: 40,
                borderRadius: 4,
                hidden:false,
            }
        })
        button.hide();
        if(!egret.localStorage.getItem("nickName") && !egret.localStorage.getItem("avatarUrl")){
             button.show();
             button.onTap((res) => {
                 if(res.errMsg=="getUserInfo:ok"){
                    this.authApi(res.rawData);
                    button.hide();
                 }
             });
        }
        
        // 开始按钮，点击摇色子
        this.gored.touchEnabled = true;
        this.gored.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickfunc, this);

        // 我的房屋，点击跳转房屋场景
        this.myhouse.touchEnabled = true;
        this.myhouse.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goHouse, this);

        // 每日活动，点击跳转每日活动场景
        this.day.touchEnabled = true;
        this.day.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goDay, this);

        // 活动展示板，点击弹出活动说明框
        this.activity.touchEnabled = true;
        this.activity.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onactivityfunc, this);
    }


    // 取消页面所有点击事件
    private cancelElClick() {
        // 开始按钮，点击摇色子
        this.gored.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickfunc, this);

        // 我的房屋，点击跳转房屋场景
        this.myhouse.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.goHouse, this);

        // 每日活动，点击跳转每日活动场景
        this.day.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.goDay, this);

        // 活动展示板，点击弹出活动说明框
        this.activity.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onactivityfunc, this);
    }

    private goHouse() {
        if (Sound.soundOpen) {
            Sound.cancelSound.play(0, 1);
        }
        this.archive();
        Newscenes.getInstance().changeScene("House");
    }
    private goDay() {
        if (Sound.soundOpen) {
            Sound.cancelSound.play(0, 1);
        }
        this.archive();
        Newscenes.getInstance().changeScene("Day");
    }

    // 好运模态框
    private luckyModal() {
        // 音效
        if (Sound.soundOpen) {
            Sound.luckySound.play(0, 1);
        }


        this.addChild(this._modal);
        this._modal.luckModal();

        let close = Modal.btnCont.getChildAt(0);
        let sure = Modal.btnCont.getChildAt(1);

        let goldTxt: any = Modal.btnCont.getChildAt(2);
        let goldPlus = Number(goldTxt.text);

        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.commonModalClick.bind(this, goldPlus, "+"), this);

        sure.touchEnabled = true;
        sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.commonModalClick.bind(this, goldPlus, "+"), this);
    }

    // 坏运模态框
    private badLuckyModal() {
        // 音效
        if (Sound.soundOpen) {
            Sound.badLuckySound.play(0, 1);
        }

        this.addChild(this._modal);
        this._modal.badLuckModal();

        let close = Modal.btnCont.getChildAt(0);
        let sure = Modal.btnCont.getChildAt(1);

        let goldTxt: any = Modal.btnCont.getChildAt(2);
        let goldMinus = Number(goldTxt.text);

        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.commonModalClick.bind(this, goldMinus, "-"), this);

        sure.touchEnabled = true;
        sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.commonModalClick.bind(this, goldMinus, "-"), this);
    }

    // 医院模态框
    private hospitalModal() {
        // 音效
        if (Sound.soundOpen) {
            Sound.hospitalSound.play(0, 1);
        }

        this.addChild(this._modal);
        this._modal.hospitModal();

        let close = Modal.btnCont.getChildAt(0);
        let sure = Modal.btnCont.getChildAt(1);

        let goldTxt: any = Modal.btnCont.getChildAt(2);
        let goldMinus = Number(goldTxt.text);

        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.commonModalClick.bind(this, goldMinus, "-"), this);

        sure.touchEnabled = true;
        sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.commonModalClick.bind(this, goldMinus, "-"), this);
    }

    private commonModalClick(gold, symbol) {
        // 音效
        if (Sound.soundOpen) {
            Sound.cancelSound.play(0, 1);
        }

        this._modal.removeChildren();
        this.removeChild(this._modal);
        this.countMoney({ money: gold, symbol: symbol });
        this.elClick();
    }

    public onClick() {
        // 音效
        if (Sound.soundOpen) {
            Sound.cancelSound.play(0, 1);
        }

        this._modal.removeChildren();
        this.removeChild(this._modal);
        this.elClick();
    }




    // 银行模态框
    private bankModalCont;
    private bankModal() {
        // 音效
        if (Sound.soundOpen) {
            Sound.bankSound.play(0, 1);
        }

        this.bankModalCont = new Bank(this.money, this.moneyNum);
        this.addChild(this.bankModalCont);

        let close = Bank.close;
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            // 音效
            if (Sound.soundOpen) {
                Sound.cancelSound.play(0, 1);
            }
            this.bankModalCont.removeChildren();
            this.removeChild(this.bankModalCont);
            this.elClick();

        }, this);

    }

    public bankSucClose(close, game) {
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            // 音效
            if (Sound.soundOpen) {
                Sound.cancelSound.play(0, 1);
            }
            game.bankModalCont.removeChildren();
            game.removeChild(game.bankModalCont);
            game.elClick();

            game.money = egret.localStorage.getItem("money");

        }, this);

    }

    // 卡券中心模态框
    private cardModal() {
        // 音效
        if (Sound.soundOpen) {
            Sound.cardSound.play(0, 1);
        }

        let cardCenterModal = new CardCenter(this.money, this.moneyNum);
        this.addChild(cardCenterModal);

        let close = CardCenter.close;
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            // 音效
            if (Sound.soundOpen) {
                Sound.cancelSound.play(0, 1);
            }
            cardCenterModal.removeChildren();
            this.removeChild(cardCenterModal);
            this.elClick();

            this.money = egret.localStorage.getItem("money");

        }, this);
    }

    //每日活动展板弹框
    public onactivityfunc() {
        // 音效
        if (Sound.soundOpen) {
            Sound.modalSound.play(0, 1);
        }

        this.addChild(this._modal);
        this._modal.actModal();

        let close = Modal.btnCont.getChildAt(0);
        let join = Modal.btnCont.getChildAt(1);
        let share = Modal.btnCont.getChildAt(2);

        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            // 音效
            if (Sound.soundOpen) {
                Sound.cancelSound.play(0, 1);
            }

            this._modal.removeChildren();
            this.removeChild(this._modal);
        }, this); //关闭

        join.touchEnabled = true;
        join.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            // 音效
            if (Sound.soundOpen) {
                Sound.getLuckyBagSound.play(0, 1);
            }

            this._modal.removeChildren();
            this.removeChild(this._modal);
            this.goDay();
        }, this);  //去参加每日活动


        share.touchEnabled = true;
        share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onshare, this); //分享

    }

    // 存档
    private archive() {
        egret.localStorage.setItem("heroX", this.hero.x.toString());
        egret.localStorage.setItem("heroY", this.hero.y.toString());

        egret.localStorage.setItem("anchorOffsetX", this.hero.anchorOffsetX.toString());
        egret.localStorage.setItem("anchorOffsetY", this.hero.anchorOffsetY.toString());

        egret.localStorage.setItem("direction", this.hero.name);
    }


    //分享
    private onshare() {
        if (Sound.soundOpen) {
            Sound.tipSound.play(0, 1);
        }
        this._modal.removeChildren();
        this.removeChild(this._modal);
        wx.shareAppMessage({
            title: "来呀~互相伤害~",
            imageUrl: "https://dfw.hebzycw.com/resource/assets/share1.png",
            query: ""
        });
    }

    //授权Api
    private authApi(res){
        res = JSON.parse(res);
        egret.localStorage.setItem("nickName",res.nickName);
        egret.localStorage.setItem("avatarUrl",res.avatarUrl);
         wx.request({
          url: "https://dfw.hebzycw.com/api/Index/updateName",
          data: {
            userId: egret.localStorage.getItem("userId"),
            nickName: res.nickName,
            avatarUrl: res.avatarUrl,
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          method: "POST",
          dataType: "json",
          success: (res: any) => {
            console.log("头像已上传");
            
          },
          fail: (res: any) => {
          },
          complete: (res: any) => { }
        });
    }

   /**
   *  好友排行榜
   */
  private requestRank() {
    //好友排行
    wx.request({
      url: "https://dfw.hebzycw.com/api/house/friendsRank",
      data: {
        userId: egret.localStorage.getItem("userId"),
        friendsId: egret.localStorage.getItem("friendsId"),
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      dataType: "json",
      success: (res: any) => {
        console.log("获取好友排行榜成功");
        Global.friendset(res);
      },
      fail: (res: any) => {
      },
      complete: (res: any) => { }
    });
    //世界排行榜
    wx.request({
      url: "https://dfw.hebzycw.com/api/house/workRank",
      data: {
        userId: egret.localStorage.getItem("userId")
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      dataType: "json",
      success: (res: any) => {
        console.log("获取世界排行榜成功");
        Global.worldset(res);
      },
      fail: (res: any) => {
      },
      complete: (res: any) => { }
    });
  }


}