class Background extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        
    }

    private onAddToStage(event: egret.Event) {
        //背景
        this.addChild(this.stage_bg({"name":"bg_jpg","width":750*0.853,"height":1334*0.853}));
        
        //初始场景元素
        this.addChild(this.npc({"name":"element_json.card","x":495,"y":465}));
        this.addChild(this.npc({"name":"element_json.hospital","x":200,"y":435}));
        this.addChild(this.npc({"name":"element_json.luck","x":476,"y":795}));
        this.addChild(this.npc({"name":"element_json.badluck","x":85,"y":750}));
        this.addChild(this.npc({"name":"element_json.bank","x":100,"y":530}));

    }
        /**
     * 场景元素通用函数
     */
    public npc (obj){

        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(obj.name);
        result.texture = texture;
        result.width = obj.width ? obj.width : result.width;
        result.height = obj.height ? obj.height : result.height;
        result.width = result.width*0.853;
        result.height = result.height*0.853;
        if(obj.name == "hero_json.c1"){
            result.anchorOffsetX = result.width/5+10;
            result.anchorOffsetY = result.height-1;
        }else{
            result.anchorOffsetX = result.width/2;
            result.anchorOffsetY = result.height/2;
        }
        result.x = obj.x;
        result.y = obj.y;
        return result;
    }

    public element (obj){

        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(obj.name);
        result.texture = texture;
        result.width = obj.width ? obj.width : result.width;
        result.height = obj.height ? obj.height : result.height;
       
        result.anchorOffsetX = result.width/2;
        result.anchorOffsetY = result.height/2;
        
        result.x = obj.x;
        result.y = obj.y;
        return result;
    }

    public oElement (obj){

        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(obj.name);
        result.texture = texture;
        result.width = obj.width ? obj.width : result.width;
        result.height = obj.height ? obj.height : result.height;
       
        result.x = obj.x;
        result.y = obj.y;
        return result;
    }

    /**
     *  新增文字通用函数
     */
    public  addtxt(obj){
        let result = new egret.TextField();
        result.text = obj.text;
        result.textColor = obj.color;
        result.size = obj.size ? obj.size : 20;
        result.x = obj.x;
        result.y = obj.y;
        result.fontFamily = "Microsoft YaHei";
        return result;
    }

    /**
     *  文字提示容器
     */
    public  addpoint(obj){
        let result = new egret.TextField();
        result.text = obj.text;
        result.textColor = obj.color;
        result.size = obj.size ? obj.size : 22;
        result.y = obj.y;
        result.x = obj.x ? obj.x : 0;
        result.textAlign = "center";
        result.bold = true;
        result.stroke = 2;
        result.fontFamily = "Microsoft YaHei";
        // result.italic = true;
        result.strokeColor = obj.strokeColor ? obj.strokeColor : 0x6699cc;
        return result;
    }

    /**
     *  场景主背景通用函数
     */
    public  stage_bg(obj){

        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(obj.name);
        result.texture = texture;
        result.width = obj.width ? obj.width : result.width;
        result.height = obj.height ? obj.height : result.height;
        result.touchEnabled = true;
        result.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getLocation, this);
        return result;
    }

    public getLocation (e:egret.TouchEvent){
        console.log(e.stageX,e.stageY);
    }

    //动图添加
    public moveGif(obj){
        var jsonBtn = RES.getRes(obj.json);
        var img = RES.getRes(obj.img);
        var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(jsonBtn, img);
        var mcGif = new egret.MovieClip(mcFactory.generateMovieClipData(obj.name));
        console.log(jsonBtn);
        
        mcGif.anchorOffsetX = mcGif.width / 2;
        mcGif.anchorOffsetY = mcGif.height / 2;
        mcGif.x = obj.x;
        mcGif.y = obj.y;
        mcGif.play(-1);
        return mcGif;
    }

    //获取时间
    public getDate(){
        let myDate = new Date();
        let year = myDate.getFullYear() // 年
        let month = myDate.getMonth() + 1; // 月
        let day  = myDate.getDate(); // 日
        let hour = myDate.getHours(); // 时
        let data = {year:year,month:month,day:day,hour:hour};
        return data;
    }

    //通用透明层
    public addAlphafun()
    {
        let newAlpha = new egret.Sprite();
        newAlpha.graphics.beginFill(0x000000, 0.3);
        newAlpha.graphics.drawRect(0, 0, 640, 1138);
        newAlpha.graphics.endFill();
        return newAlpha;
    }
}