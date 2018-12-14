/**
 * 全局变量
 * */
module Global {
    var friendRank; //好友排行榜
    var worldRank;  //世界好友排行榜
    var web_hosue;  //websockt
    var aroundInfo; //串门好友信息
    var point;      //好友互动提示信息  
    var news;       //消息  


    // 大陆数据
    export var landData = [
        { landId: 1, landName: "蛮荒大陆", mapLocation: [110, 240], landPrice: 100000, houseUpPrice: [100000, 500000, 1200000, 2500000, 4000000, 5800000, 7500000, 8880000] },
        { landId: 2, landName: "神幽大陆", mapLocation: [355, 305], landPrice: 200000, houseUpPrice: [200000, 1000000, 2400000, 5000000, 8000000, 11600000, 15000000, 18880000] },
        { landId: 3, landName: "灵源大陆", mapLocation: [530, 320], landPrice: 1000000, houseUpPrice: [1000000, 3000000, 6000000, 10000000, 12000000, 15000000, 20000000, 28880000] },
        { landId: 4, landName: "封澜大陆", mapLocation: [420, 510], landPrice: 2000000, houseUpPrice: [2000000, 4000000, 8000000, 12000000, 20000000, 25000000, 32000000, 38880000] },
        { landId: 5, landName: "冰封大陆", mapLocation: [140, 525], landPrice: 3000000, houseUpPrice: [3000000, 6000000, 11000000, 2200000, 30000000, 38000000, 43000000, 48880000] },
        { landId: 6, landName: "迷失大陆", mapLocation: [125, 795], landPrice: 4000000, houseUpPrice: [4000000, 8000000, 15000000, 25000000, 38000000, 45000000, 54000000, 58880000] },
        { landId: 7, landName: "雾影大陆", mapLocation: [295, 807], landPrice: 5000000, houseUpPrice: [5000000, 10000000, 18000000, 28000000, 39000000, 48000000, 55000000, 68880000] },
        { landId: 8, landName: "青色大陆", mapLocation: [540, 825], landPrice: 6000000, houseUpPrice: [6000000, 12000000, 20000000, 35000000, 45000000, 55000000, 65000000, 78880000] },
        { landId: 9, landName: "幻神大陆", mapLocation: [450, 1015], landPrice: 7000000, houseUpPrice: [7000000, 14000000, 22000000, 38000000, 49000000, 60000000, 79000000, 88880000] },
        { landId: 10, landName: "解锁新大陆", mapLocation: [225, 1065], landPrice: 8000000, houseUpPrice: [8000000, 16000000, 24000000, 41000000, 54000000, 74000000, 85000000, 98880000] },
    ]

    //全局特效
    export var special;
    //全局通知
    export var notice;
    //自己的房屋折损特效
    export var mHouse;
    //好友的房屋攻击折损
    export var fHouse;

    // 整修所需金币
    export var fixPrice = [0, 20000, 30000, 50000, 70000, 100000];

    export var friendHLoss; //好友房屋折损特效
    export var friendlossNum;//好友房屋折损等级

    //自己房子的折损等级
    export var houseID;

    //好友排行榜
    export function friendget() {
        return friendRank;
    }

    export function friendset(param) {
        friendRank = param;
    }

    //世界好友排行榜
    export function worldget() {
        return worldRank;
    }

    export function worldset(param) {
        worldRank = param;
    }
    //websock 渲染
    export function webget() {
        return web_hosue;
    }

    export function webset(param) {
        web_hosue = param;
    }

    //串门好友信息展示
    export function randget() {
        return aroundInfo;
    }

    export function randset(param) {
        aroundInfo = param;
    }

    //离线消息
    export function newget() {
        return news;
    }

    export function newset(param) {
        news = param;
    }

    //地震卡和普渡众生卡攻击  特效
    export function allBackFun(obj) {
        //已经获取websocket 中传的大陆的等级   判断当前的用户是不是在这个大陆   如果是特效 不是就通知
        let txt = '';
        let num: Number;
        if (obj.do == 'earth') {
            if (Number(egret.localStorage.getItem("defense")) == 1) {
                num = Number(egret.localStorage.getItem("house_loss")) + 1;
            } else {
                num = Number(egret.localStorage.getItem("house_loss")) + 2;
            }
            txt = "地震";

        } else {
            num = Number(egret.localStorage.getItem("house_loss")) - 2;
            txt = "普渡众生";
        }

        if (Number(egret.localStorage.getItem("land")) == obj.land) {
            if (num > 5) {
                num = 5;
            } else if (num < 0) {
                num = 0;
            } else {
                num = num;
            }
            egret.localStorage.setItem("house_loss", num.toString());
            if (obj.do == 'earth') {
                this.earth_webFun();
            } else {
                //防止在页面报错
                if (Global.save) {
                    this.save_webFun();
                }
            }
            if (Global.mHouse) {
                let mHouse = Global.mHouse;
                mHouse.hLoss(egret.localStorage.getItem("land"), num);
            }
        }
        txt = "通知： 玩家 " + obj.userId + " 在" + landData[obj.land - 1].landName + "使用" + txt + '卡';
        //通知
        this.noticeFun(obj, txt);
    }

    //地震卡回调特效
    export function earth_webFun() {
        //折损动画
        if (Sound.soundOpen) {
            Sound.earthSound.play(0, 1);
        }
        Global.earth.alpha = 0.1;
        var timer: egret.Timer = new egret.Timer(100, 20);
        //注册事件侦听器
        timer.addEventListener(egret.TimerEvent.TIMER, () => {
            Global.earth.alpha = Global.earth.alpha + 0.05;
        }, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, () => {
            egret.setTimeout(function () {
                Global.earth.alpha = 0;
            }, this, 3000);
        }, this);
        //开始计时
        timer.start();
    }
    export var save;
    //普渡众生回调特效
    export function save_webFun() {
        //折损动画
        if (Sound.soundOpen) {
            Sound.saveSound.play(0, 1);
        }
        Global.save.alpha = 1;
        let i = 1;
        var timer: egret.Timer = new egret.Timer(500, 20);
        //注册事件侦听器
        timer.addEventListener(egret.TimerEvent.TIMER, () => {
            if (i % 2 == 0) {
                Global.save.alpha = 0.8;
                Global.save.x = 315;
                Global.save.y = 540;
                Global.save.width = 650;
                Global.save.height = 800;
            } else {
                Global.save.alpha = 1;
                Global.save.x = 335;
                Global.save.y = 570;
                Global.save.width = 620;
                Global.save.height = 770;
            }
            i++;
        }, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, () => {
            egret.setTimeout(function () {
                Global.save.alpha = 0;
            }, this, 3000);
        }, this);
        //开始计时
        timer.start();
    }

    //websock 返回陨石卡攻击特效  随机攻击某个玩家  包括自己
    export function rockBackFun(obj) {
        let rocks = Global.mHouse;
        let txt = '陨石';
        let num;
        if (Number(egret.localStorage.getItem("defense")) == 1) {
            num = Number(egret.localStorage.getItem("house_loss")) + 1;
        } else {
            num = Number(egret.localStorage.getItem("house_loss")) + 2;
        }
        if (num > 5) {
            num = 5;
        } else if (num < 0) {
            num = 0;
        } else {
            num = num;
        }
        egret.localStorage.setItem("house_loss", num.toString());
        //通知
        txt = "通知： 玩家 " + obj.userId + " 正在使用" + txt + '卡';
        this.noticeFun(obj, txt);
        //卡片使用动画
        if (Global.rock) {
            Global.rock_webFun(num)
        }
    }

    //陨石卡攻击特效
    export var rock;
    export function rockEffect() {
        let _bg = new Background;
        let rockBg = new egret.Sprite();
        rockBg.graphics.beginFill(0xFFFFFF, 0);
        rockBg.graphics.drawRect(0, 0, 640, 1138);
        rockBg.graphics.endFill();
        let rockImg = _bg.element({ "name": "cardUse_json.rock", "x": 800, "y": -30, width: 236 * 0.75, height: 329 * 0.75 });
        let rockImgTwo = _bg.element({ "name": "cardUse_json.rock2", "x": 640, "y": -100, width: 303 * 0.60, height: 536 * 0.60 });
        rockBg.addChild(rockImg);
        rockBg.addChild(rockImgTwo);
        rockBg.alpha = 0;
        return rockBg;
    };
    //回调特效
    export function rock_webFun(num) {

        //陨石掉落动画
        Global.rock.alpha = 1;
        //画方
        var shape: egret.Shape = new egret.Shape();
        shape.graphics.beginFill(0xFFFFFF, 0);
        shape.graphics.drawRect(257, 415, 260, 300);
        shape.graphics.endFill();

        var isHit: boolean = false;
        let rockImg = Global.rock.$children["0"];
        let rockImgTwo = Global.rock.$children["1"];
        egret.Tween.get(rockImg).to({ x: -50, y: 1213 }, 5000);
        egret.Tween.get(rockImgTwo).to({ x: -10, y: 1213 }, 5000);

        if (Sound.soundOpen) {
            egret.setTimeout(function () {
                Sound.rockSound.play(0, 2);
                //折损动画
                let mHouse = Global.mHouse;
                mHouse.hLoss(egret.localStorage.getItem("land"), num);
            }, this, 1300);
        }
        shape.addEventListener(egret.Event.ENTER_FRAME, () => {
            isHit = shape.hitTestPoint(rockImgTwo.x, rockImgTwo.y - 180);
            if (isHit) {
                shape.removeEventListener(egret.Event.ENTER_FRAME, () => { }, this);
                isHit = false;
                Global.rock.alpha = 0;
                Newscenes.getInstance().changeScene('House');
            }
        }, this);
    }

    //攻击卡websock 返回函数
    export function attackBackFun(obj) {
        let num = Number(egret.localStorage.getItem("house_loss")) + 1;
        egret.localStorage.setItem("house_loss", num.toString());
        if (Global.mHouse) {
            Global.mHouse.hLoss(egret.localStorage.getItem("land"), num);
        }
    }

    //通知
    export function noticeFun(obj, txt) {
        let notice = Global.notice;
        notice.text = txt;
        egret.Tween.get(notice).to({ x: 540, y: 148 }, 10000, egret.Ease.sineIn);
        egret.setTimeout(function () {
            notice.x = 12;
            notice.text = "";
            egret.Tween.removeTweens(this);
        }, this, 10000);
    }

    //帮好友整修房屋
    export function helpHouse(obj) {
        Global.mHouse.hLoss(egret.localStorage.getItem("land"), 0);
    }
    //地震特效特效 
    export var earth;
    export function earthEffect() {
        let _bg = new Background;
        let earth = _bg.addAlphafun();
        earth.alpha = 0;
        let earthImg = _bg.oElement({ "name": "cardUse_json.earth", width: 640, height: 1138, "x": 0, "y": 0 });
        earth.addChild(earthImg);
        return earth;
    }
    //普渡众生特效   
    export var saveEffect;


    //更新更新后台api
    export function updateApi() {
        wx.request({
            url: "https://dfw.hebzycw.com/api/index/updateApi",
            data: {
                userId: egret.localStorage.getItem("userId"),
                land: egret.localStorage.getItem("land"),
                house: egret.localStorage.getItem("house"),
                money: egret.localStorage.getItem("money"),
                nickName: egret.localStorage.getItem("nickName"),
                attack_card: egret.localStorage.getItem("attack_card"),
                defense_card: egret.localStorage.getItem("defense_card"),
                defense: egret.localStorage.getItem("defense"),
                defense_time: egret.localStorage.getItem("defense_time"),
                deposit: egret.localStorage.getItem("deposit"),
                deposit_time: egret.localStorage.getItem("deposit_time"),
                earth_card: egret.localStorage.getItem("earth_card"),
                house_loss: egret.localStorage.getItem("house_loss"),
                house_price: egret.localStorage.getItem("house_price"),
                interest_card: egret.localStorage.getItem("interest_card"),
                rock_card: egret.localStorage.getItem("rock_card"),
                save_card: egret.localStorage.getItem("save_card"),
                upgrade_card: egret.localStorage.getItem("upgrade_card"),
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            dataType: "json",
            success: (res: any) => {
                console.log("成功更新后台api");
            },
            fail: (res: any) => {
                // 请求发送失败，重新发送
                //    Global.updateApi();
                wx.showModal({
                    title:'网络状态',
                    content:'当前网络状态不稳定，请稍后再试',
                    showCancel:false,
                    cancelText:'取消',
                    cancelColor:'#000000',
                    confirmText:'确定',
                    confirmColor:'#3cc51f',
                    success:(res:any)=>{},
                    fail:(res:any)=>{},
                    complete:(res:any)=>{}
                });
                
            },
            complete: (res: any) => { }
        });
    }

    //递加更新
    export function updateParam(obj) {
        // obj{
        //     userid：(需要更新那个玩家的数据),
        //     name: (更新那个字段),
        //     params : (更新的值),
        // }
        wx.request({
            url: "https://dfw.hebzycw.com/api/index/updateParam",
            data: {
                userId: obj.userId,
                name: obj.name,
                value: obj.params
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            dataType: "json",
            success: (res: any) => {
                console.log("成功更新后台api");
            },
            fail: (res: any) => {
                // 请求发送失败，重新发送
                Global.updateApi();

            },
            complete: (res: any) => { }
        });
    }

    //心跳包
    export function timerHeart() {
        //创建一个计时器对象
        var timer: egret.Timer = new egret.Timer(30000, 10000);
        //注册事件侦听器
        timer.addEventListener(egret.TimerEvent.TIMER, Global.timerFunc, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, Global.timerComFunc, this);
        //开始计时
        timer.start();

    }
    export function timerFunc() {

        this.web_socket = Connection.webSocket;
        let cmd = JSON.stringify({ do: "Heartbeat", userId: egret.localStorage.getItem("userId"), coust: '' });
        this.web_socket.writeUTF(cmd);
    }

    export function timerComFunc() {
        Global.timerHeart();
    }

    export function jiankong() {
        //微信退出监控  更新数据
        wx.exitMiniProgram({
            success: (res: any) => {
                Global.updateApi();
            },
            fail: (res: any) => {
            },
            complete: (res: any) => { }
        });
        //隐藏后台监控 更新数据
        wx.onHide(() => { Global.updateApi(); });
    }
}
