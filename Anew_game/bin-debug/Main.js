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
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this._loadTimes = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            context.onUpdate = function () {
            };
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        this.checkLogin();
        //设置加载进度界面
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.CONFIG_LOAD_ERROR, this.onConfigLoadErr, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    // 微信登录
    Main.prototype.checkLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wx.checkSession({
                            success: function (res) {
                                console.log("session_key 未过期，check 成功");
                                if (egret.localStorage.getItem("userId")) {
                                    _this.getData(egret.localStorage.getItem("userId"));
                                }
                                else {
                                    console.log("localStorage中没有userId");
                                    _this.wxLogin();
                                }
                            },
                            fail: function (res) {
                                console.log("session_key 已经失效，check失败，重新login");
                                _this.wxLogin();
                            },
                            complete: function (res) { }
                        });
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 1:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 配置文件加载失败，重新加载一次。
     */
    Main.prototype.onConfigLoadErr = function (event) {
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupErr, this);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载失败
     */
    Main.prototype.onGroupErr = function (e) {
        this._loadTimes++;
        if (this._loadTimes > 3) {
            console.log("网络异常，请重新进入游戏");
        }
        else {
            RES.loadGroup(e.groupName);
        }
    };
    /**
     * preload资源组加载完成
     */
    Main.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createGameScene();
        }
    };
    /**
     * preload资源组加载进度
     */
    Main.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            // console.log(this.loadingView);
            this.loadingView.onProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    // 微信登录
    Main.prototype.wxLogin = function () {
        var _this = this;
        wx.login({
            success: function (res) {
                console.log("登录成功");
                // 登录成功获取 userId
                _this.getUserId(res.code);
            },
            fail: function (res) {
                // 登录失败，重新登录。
                console.log("登录失败，请检查网络并重新登录！");
                _this.wxLogin();
            },
            complete: function (res) { }
        });
    };
    // 通过 code 获取 userId
    Main.prototype.getUserId = function (code) {
        var _this = this;
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
            success: function (res) {
                console.log("成功发送code");
                if (res.data.userId) {
                    console.log("成功获取userId");
                    // userId 获取成功后存入 egret.localStrorage
                    egret.localStorage.setItem("userId", res.data.userId.toFixed());
                    // 通过 userId 获取用户数据
                    _this.getData(res.data.userId);
                }
                else {
                    // userId 获取失败，重新获取
                    console.log("userId 获取失败，重新获取");
                    _this.getUserId(code);
                }
            },
            fail: function (res) {
                // 请求发送失败，重新请求
                console.log("userId 请求发送失败，" + res.errMsg + "，重新发送code 请求userId");
                _this.getUserId(code);
            },
            complete: function (res) { }
        });
    };
    // 通过 userId 获取数据
    Main.prototype.getData = function (userId) {
        var _this = this;
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
            success: function (res) {
                // 数据获取成功，存入 egret.localStorage 中
                console.log("获取数据成功");
                console.log(res);
                if (!egret.localStorage.setItem("land", res.data.land.toFixed())) {
                    egret.localStorage.setItem("land", res.data.land.toFixed());
                }
                if (!egret.localStorage.setItem("house", res.data.house.toFixed())) {
                    egret.localStorage.setItem("house", res.data.house.toFixed());
                }
                if (!egret.localStorage.setItem("money", res.data.money.toFixed())) {
                    egret.localStorage.setItem("money", res.data.money.toFixed());
                }
                if (!egret.localStorage.setItem("nickName", res.data.nickName)) {
                    egret.localStorage.setItem("nickName", res.data.nickName);
                }
            },
            fail: function (res) {
                // 数据获取失败，重新获取数据
                console.log("获取数据失败，重新获取" + res.errMsg);
                _this.getData(userId);
            },
            complete: function (res) { }
        });
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        // console.log("ok，createGameScene");
        wx.showShareMenu({
            withShareTicket: true, success: function (res) {
            }, fail: function (res) { }, complete: function (res) { }
        });
        wx.onShareAppMessage(function () {
            return {
                title: "来呀~快活呀~",
                imageUrl: "resource/assets/share.jpg"
            };
        });
        this.addChild(Newscenes.getInstance());
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map