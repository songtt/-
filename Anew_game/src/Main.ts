//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {


  /**
   * 加载进度界面
   */
  private loadingView: LoadingUI;
  private _loadTimes: number;
  private _getDateTimes: number;

  public constructor() {
    super();
    this._loadTimes = 0;
    this._getDateTimes = 0;
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }

  private onAddToStage(event: egret.Event) {

    egret.lifecycle.addLifecycleListener((context) => {
      // custom lifecycle plugin

      context.onUpdate = () => {

      }
    })

    egret.lifecycle.onPause = () => {
      egret.ticker.pause();
    }

    egret.lifecycle.onResume = () => {
      egret.ticker.resume();
    }

    this.checkLogin();


    //设置加载进度界面
    this.loadingView = new LoadingUI();
    this.stage.addChild(this.loadingView);



    //初始化Resource资源加载库
    RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
    RES.addEventListener(RES.ResourceEvent.CONFIG_LOAD_ERROR, this.onConfigLoadErr, this);
    // RES.loadConfig("resource/default.res.json", "resource/");
    RES.loadConfig("default.res.json", "https://dfw.hebzycw.com/resource/");

    //好友互动  websocket
    Connection.initWebSocket();

  }

  // 微信登录
  private async checkLogin() {
    wx.checkSession({
      success: (res: any) => {
        console.log("session_key 未过期，check 成功");

        if (egret.localStorage.getItem("userId")) {
          this.getData(egret.localStorage.getItem("userId"));
        } else {
          console.log("localStorage中没有userId");

          this.wxLogin();
        }


      },
      fail: (res: any) => {
        console.log("session_key 已经失效，check失败，重新login");
        this.wxLogin();


      },
      complete: (res: any) => { }
    });

  }


  /**
   * 配置文件加载失败，重新加载一次。
   */
  private onConfigLoadErr(event: RES.ResourceEvent): void {
    // RES.loadConfig("resource/default.res.json", "resource/");
    RES.loadConfig("default.res.json", "https://dfw.hebzycw.com/resource/");
  }

  /**
   * 配置文件加载完成,开始预加载preload资源组。
   */
  private onConfigComplete(event: RES.ResourceEvent): void {
    RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
    RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
    RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
    RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupErr, this);
    RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
    RES.loadGroup("loading", 1);
    RES.loadGroup("preload", 0);
  }

  private onItemLoadError(e) {
    console.log(e);

    console.warn("Url:" + e.resItem.url + " has failed to load");

  }

  /**
   * preload资源组加载失败
   */
  private onGroupErr(e: RES.ResourceEvent): void {
    this._loadTimes++;
    if (this._loadTimes > 3) {
      console.log("网络异常，请重新进入游戏");
      wx.showLoading({
        title: '网络不稳定',
        mask: false,
        success: (res: any) => { },
        fail: (res: any) => { },
        complete: (res: any) => { }
      });
    } else {
      console.log("重新加载组资源");

      RES.loadGroup(e.groupName);
    }
  }
  /**
   * preload资源组加载完成
   */
  private onResourceLoadComplete(event: RES.ResourceEvent): void {
    if (event.groupName == "loading") {
      this.loadingView.createView();
    }
    if (event.groupName == "preload") {
      this.stage.removeChild(this.loadingView);
      RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
      RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
      this.createGameScene();
    }
  }
  /**
   * preload资源组加载进度
   */
  private onResourceProgress(event: RES.ResourceEvent): void {
    if (event.groupName == "preload") {
      this.loadingView.onProgress(event.itemsLoaded, event.itemsTotal);
    }
  }


  // 微信登录
  private wxLogin() {
    wx.login({
      success: (res: any) => {
        console.log("登录成功");

        // 登录成功获取 userId
        this.getUserId(res.code)

      },
      fail: (res: any) => {
        // 登录失败，重新登录。
        console.log("登录失败，请检查网络并重新登录！");
        this.wxLogin();
      },
      complete: (res: any) => { }
    });

  }

  // 通过 code 获取 userId
  private getUserId(code) {
    wx.request({
      url: "https://dfw.hebzycw.com/api/index/login",
      data: {
        code: code
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      dataType: "json",
      success: (res: any) => {
        console.log("成功发送code");
        if (res.data.userId) {
          console.log("成功获取userId");
          // userId 获取成功后存入 egret.localStrorage
          egret.localStorage.setItem("userId", res.data.userId);

          // 通过 userId 获取用户数据
          this.getData(res.data.userId);
        } else {
          // userId 获取失败，重新获取
          console.log("userId 获取失败，重新获取");
          this.getUserId(code);

        }
      },
      fail: (res: any) => {
        // 请求发送失败，重新请求
        console.log("userId 请求发送失败，" + res.errMsg + "，重新发送code 请求userId");

        this.getUserId(code);
      },
      complete: (res: any) => { }
    });
  }

  // 通过 userId 获取数据
  private getData(userId) {
    wx.request({
      url: "https://dfw.hebzycw.com/api/index/getuserinfo",
      data: {
        userId: userId
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      dataType: "json",
      success: (res: any) => {
        // 数据获取成功，存入 egret.localStorage 中
        console.log("获取数据成功");
        console.log(res);
        //大陆等级
        if (!egret.localStorage.setItem("land", res.data.land)) {
          egret.localStorage.setItem("land", res.data.land);
        }
        // egret.localStorage.setItem("land", "1");

        //房子等级
        if (!egret.localStorage.setItem("house", res.data.house)) {
          egret.localStorage.setItem("house", res.data.house);
        }
        // egret.localStorage.setItem("house", "1");

        //金币
        if (!egret.localStorage.setItem("money", res.data.money)) {
          egret.localStorage.setItem("money", res.data.money);
        }

        // egret.localStorage.setItem("money", "400000000");

        //用户昵称
        if (!egret.localStorage.setItem("nickName", res.data.nickName)) {
          egret.localStorage.setItem("nickName", res.data.nickName);
        }
        //用户头像
        if (!egret.localStorage.setItem("avatarUrl", res.data.avatarUrl)) {
          egret.localStorage.setItem("avatarUrl", res.data.avatarUrl);
        }
        //攻击卡
        if (!egret.localStorage.setItem("attack_card", res.data.attack_card)) {
          egret.localStorage.setItem("attack_card", res.data.attack_card);
        }
        //防御卡        
        if (!egret.localStorage.setItem("defense_card", res.data.defense_card)) {
          egret.localStorage.setItem("defense_card", res.data.defense_card);
        }
        //是否使用了防御卡        
        if (!egret.localStorage.setItem("defense", res.data.defense)) {
          egret.localStorage.setItem("defense", res.data.defense);
        }
        //防御卡时效        
        if (!egret.localStorage.setItem("defense_time", res.data.defense_time)) {
          egret.localStorage.setItem("defense_time", res.data.defense_time);
        }
        //存款        
        if (!egret.localStorage.setItem("deposit", res.data.deposit)) {
          egret.localStorage.setItem("deposit", res.data.deposit);
        }
        //存款时间      
        if (!egret.localStorage.setItem("deposit_time", res.data.deposit_time)) {
          egret.localStorage.setItem("deposit_time", res.data.deposit_time);

        }
        //利息       
        if (!egret.localStorage.setItem("interest", res.data.interest)) {
          egret.localStorage.setItem("interest", res.data.interest);
        }
        //地震卡
        if (!egret.localStorage.setItem("earth_card", res.data.earth_card)) {
          egret.localStorage.setItem("earth_card", res.data.earth_card);
        }
        //房屋折损
        if (!egret.localStorage.setItem("house_loss", res.data.house_loss)) {
          egret.localStorage.setItem("house_loss", res.data.house_loss);
        }
        //房屋单价
        if (!egret.localStorage.setItem("house_price", res.data.house_price)) {
          egret.localStorage.setItem("house_price", res.data.house_price);
        }
        //利息翻倍卡
        if (!egret.localStorage.setItem("interest_card", res.data.interest_card)) {
          egret.localStorage.setItem("interest_card", res.data.interest_card);
        }
        //陨石卡
        if (!egret.localStorage.setItem("rock_card", res.data.rock_card)) {
          egret.localStorage.setItem("rock_card", res.data.rock_card);
        }
        //普渡众生卡
        if (!egret.localStorage.setItem("save_card", res.data.save_card)) {
          egret.localStorage.setItem("save_card", res.data.save_card);
        }
        //房屋升级卡
        if (!egret.localStorage.setItem("upgrade_card", res.data.upgrade_card)) {
          egret.localStorage.setItem("upgrade_card", res.data.upgrade_card);
        }
        //好友id
        if (!egret.localStorage.setItem("friendsId", res.data.friendsId)) {
          egret.localStorage.setItem("friendsId", res.data.friendsId);
        }
        //加载消息
        this.getnews(res);

        let time = new Date(res.header.Date);
        let curDate = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
        //服务器时间
        if (!egret.localStorage.setItem("curDate", curDate)) {
          egret.localStorage.setItem("curDate", curDate);
        }
      },
      fail: (res: any) => {
        // 数据获取失败，重新获取数据
        this._getDateTimes++;
        if (this._getDateTimes > 3) {
          console.log("网络异常，请重新进入游戏");
          wx.showLoading({
            title: '网络不稳定',
            mask: false,
            success: (res: any) => { },
            fail: (res: any) => { },
            complete: (res: any) => { }
          });
        } else {
          console.log("获取数据失败，重新获取" + res.errMsg);
          this.getData(userId);
        }
      },
      complete: (res: any) => { }
    });
  }



  /**
   * 创建游戏场景
   * Create a game scene
   */
  private createGameScene() {
    // console.log("ok，createGameScene");

    wx.showShareMenu({
      withShareTicket: false,

      success: (res: any) => {
        // console.log(1233321322);
      },
      fail: (res: any) => { },
      complete: (res: any) => { }
    });

    wx.onShareAppMessage(() => {
      return {
        title: "来呀~快活呀~",
        imageUrl: "https://dfw.hebzycw.com/resource/assets/share1.png",
        query: "userId=" + egret.localStorage.getItem("userId")
      }
    });
    // query: "userId="+egret.localStorage.getItem("userId")

    // 声音文件
    new Sound();

    this.addChild(Newscenes.getInstance());

    let share = wx.getLaunchOptionsSync()

    if (share.query["userId"] != undefined) {
      //更新玩家好友
      this.updateFriendId(share.query["userId"]);
    }

    // wx.getShareInfo({
    //   shareTicket:share.shareTicket,
    //   success:(res:any)=>{
    //     console.log(res);

    //   },
    //   fail:(res:any)=>{},
    //   complete:(res:any)=>{}
    // });

  }
  //获取消息
  private updateFriendId(shareId) {
    //世界排行榜
    wx.request({
      url: "https://dfw.hebzycw.com/api/House/updateFriendId",
      data: {
        userId: egret.localStorage.getItem("userId"),
        shareId: shareId
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      dataType: "json",
      success: (res: any) => {
        egret.localStorage.setItem("friendsId", res);
      },
      fail: (res: any) => {
      },
      complete: (res: any) => { }
    });
  }


  //获取消息
  private getnews(res) {
    //世界排行榜
    wx.request({
      url: "https://dfw.hebzycw.com/api/News/showNews",
      data: {
        userId: res.data.userId
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      dataType: "json",
      success: (res: any) => {
        console.log("获取离线消息");
        console.log(res);

        Global.newset(res);
      },
      fail: (res: any) => {
      },
      complete: (res: any) => { }
    });
  }
}