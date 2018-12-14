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
/**
 * 下面的示例使用 Connection 类创建新 WebSocket 对象，然后与服务器通讯。
 */
var Connection = (function (_super) {
    __extends(Connection, _super);
    function Connection() {
        var _this = _super.call(this) || this;
        console.log(88989898989);
        return _this;
    }
    Connection.initWebSocket = function () {
        this.webSocket = new egret.WebSocket();
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        // //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
        this.webSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.webSocket.connectByUrl("wss://dfw.hebzycw.com/ws:9502");
    };
    Connection.onSocketOpen = function () {
        var obj = { do: "login", userId: egret.localStorage.getItem("userId"), coust: "" };
        var cmd = JSON.stringify(obj);
        this.webSocket.writeUTF(cmd);
    };
    Connection.onReceiveMessage = function () {
        this.msg = this.webSocket.readUTF();
    };
    Connection.onSocketClose = function () {
        this.webSocket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.webSocket.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.webSocket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        Connection.initWebSocket();
    };
    return Connection;
}(egret.DisplayObjectContainer));
__reflect(Connection.prototype, "Connection");
