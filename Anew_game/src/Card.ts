class Card extends egret.Sprite {

  private _bg: Background;

  public constructor() {
    super();
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }
  private onAddToStage(event: egret.Event) {

    this._bg = new Background();



  }

  public front(name) {
    let cardFront = this._bg.element({ "name": `card_json.${name}Front`, "x": 90, "y": 110 });
    return cardFront;
  }

  public cardText(name) {
    var textArr = [];
    switch (name) {
      case "attack":
        textArr = ["功能：", "可攻击任意玩家房屋", "伤害：", "被攻击者房屋折损1级"];
        break;

        case "defense":
        textArr = ["功能：", "可保护房屋免受1级伤害", "有效期：", "1天"];
        break;

        case "interest":
        textArr = ["功能：", "在银行存款利息翻倍", "限制：", "存款后第二日计息"];
        break;

        case "upgrade":
        textArr = ["功能：", "可免费升级一次房屋", "限制：", "无"];
        break;

        case "rock":
        textArr = ["功能：", "随机攻击任意在线玩家（包括自己）", "伤害：", "该玩家房屋折损2级"];
        break;

        case "earth":
        textArr = ["功能：", "可攻击已解锁的任意一大陆", "伤害：", "该大陆所有在线玩家房屋折损2级"];
        break;

        case "save":
        textArr = ["功能：", "可作用于已解锁的任意一大陆", "效果：", "该大陆所有在线玩家房屋修复2级"];
        break;

        default:
        textArr = ["功能：", "敬请期待", "限制：", "无"];
        break;

    }
    return textArr;
  }


  public back(name) {

    let cardCont = new egret.Sprite();
    cardCont.x = 320;
    cardCont.y = 550;
    cardCont.width = 180;
    cardCont.height = 220;
    cardCont.anchorOffsetX = cardCont.width / 2;
    cardCont.anchorOffsetY = cardCont.height / 2;

    let cardFrame = this._bg.element({ "name": `card_json.${name}Back`, "x": 90, "y": 110 });
    cardCont.addChild(cardFrame);


    let cardBack = new egret.Sprite();
    cardBack.x = cardCont.width / 2;
    cardBack.y = cardCont.height / 2;
    cardBack.width = 140;
    cardBack.height = 170;
    cardBack.anchorOffsetX = cardBack.width / 2;
    cardBack.anchorOffsetY = cardBack.height / 2;

    let textArr = this.cardText(name);

    let cardFunTitle = this._bg.addtxt({ "text": textArr[0], "x": 0, "y": 0, "color": "0xdddddd", "size": 20 });
    cardFunTitle.bold = true;

    let cardFun = this._bg.addtxt({ "text": textArr[1], "x": 0, "y": 30, "color": "0xdddddd", "size": 18 });
    cardFun.width = 140;
    cardFun.lineSpacing = 3;
    cardFun.bold = true;

    let cardHarmTitle = this._bg.addtxt({ "text": textArr[2], "x": 0, "y": 100, "color": "0xdddddd", "size": 22 });
    cardHarmTitle.bold = true;

    let cardHarm = this._bg.addtxt({ "text":textArr[3], "x": 0, "y": 130, "color": "0xdddddd", "size": 18 });
    cardHarm.width = 140;
    cardHarm.lineSpacing = 3;
    cardHarm.bold = true;


    cardBack.addChild(cardFunTitle);
    cardBack.addChild(cardFun);
    cardBack.addChild(cardHarmTitle);
    cardBack.addChild(cardHarm);

    cardCont.addChild(cardBack);

    return cardCont;

  }






























}