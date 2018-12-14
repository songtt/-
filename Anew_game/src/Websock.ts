/**
 * 下面的示例使用 Connection 类创建新 WebSocket 对象，然后与服务器通讯。
 */
class Connection extends egret.DisplayObjectContainer {

    public constructor() {
        super();
    }

    public static webSocket:egret.WebSocket;
    public static msg;

    public static initWebSocket() {
        this.webSocket = new egret.WebSocket();   
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);    
        // //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
        this.webSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);                        
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);   
        this.webSocket.connectByUrl("wss://dfw.hebzycw.com/ws:9502");

    }

    public static onSocketOpen() { 
        //心跳包
        Global.timerHeart();

        //打开链接事件
        let obj = {do:"login",userId:egret.localStorage.getItem("userId"),coust:""};
        let cmd = JSON.stringify(obj);
        this.webSocket.writeUTF(cmd);
    }
    public static onReceiveMessage() {  
        //发送消息事件
        this.msg = JSON.parse(JSON.parse(this.webSocket.readUTF()));

        //好友互动的攻击范围
        if(this.msg.coust == 'all'){
            //对所有人的攻击
            Global.allBackFun(this.msg);
            
        }else{
            //针对与个人的攻击   1.先判断好友是否在线
            if(this.msg.line == 'yes'){
                //在线  产生互动效果
                if(this.msg.do == 'login'){ 
                    //用户登录打开socket链接
                    console.log(this.msg);
                }else if(this.msg.do == 'attack'){ 
                    //攻击好友房屋
                    Global.attackBackFun(this.msg); //好友看到的效果
                }else if(this.msg.do == 'rock'){ 
                    //陨石攻击
                    Global.rockBackFun(this.msg);
                }else if(this.msg.do == 'help'){ //帮好友整修房屋
                    //整修房屋
                    Global.helpHouse(this.msg);
                }
            }else{
                //不在线存储消息盒子
                this.noLineNews(this.msg);
            }
        }
        

    }
    //用户不在线则记录在消息盒子
    public static noLineNews(msg){
        //消息存放
        wx.request({
            url: "https://dfw.hebzycw.com/api/News/newInster",
            data: {
              userId: msg.userId, //攻击方
              do: msg.do,  //操作
              coust: msg.coust,   //被攻击方 
            },
            header: {
            'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            dataType: "json",
            success: (res: any) => {
                console.log("被攻击玩家不在线，攻击消息已存放消息盒子");
            },
            fail: (res: any) => {
                console.log("当前网络不佳，互动消息存放失败");
                //请求失败重新请求
                this.noLineNews(msg);
            },
            complete: (res: any) => { }
        });
        
    }
    public static onSocketClose() {
                

        
        egret.localStorage.setItem("touchSwitch","ture");
        wx.onTouchStart(this.startFun)
        //每次监控用户掉线   即刻更新后台数据
        Global.updateApi();
    }
    
    private static startFun(){

        //掉线重新进入游戏后点击重新链接服务器
        wx.onTouchEnd(() => {
            let touchSwitch = egret.localStorage.getItem("touchSwitch");
            if(touchSwitch == "ture"){
                Connection.initWebSocket();
                egret.localStorage.setItem("touchSwitch","false");
            }
        });


    }
}