class Sound extends egret.DisplayObjectContainer {

  // 音乐开关
  static bgOpen:boolean;
  // 音效开关
  static soundOpen:boolean;

  static bgSound: egret.Sound;  // 背景音乐

  static cancelSound: egret.Sound;  // 模态框取消音效
  static wrongTipSound: egret.Sound;  // 模态框错误提示信息音效（资金不足）
  static switchSound: egret.Sound;  // 选项转换音效
  static tipSound: egret.Sound;  // 提示信息音效（尚未解锁）
  static modalSound: egret.Sound;  // 功能性弹框音效（活动展板，背包，消息，排行榜）
  static backSound: egret.Sound;  //场景返回音效


  static diceSound: egret.Sound;  // 色子音效
  static walkSound: egret.Sound;  // 人物走路音效
  static luckySound: egret.Sound;  // 好运音效
  static badLuckySound: egret.Sound;  // 坏运音效
  static hospitalSound: egret.Sound;  // 医院音效
  static bankSound: egret.Sound;  // 银行音效
  static cardSound: egret.Sound;  // 卡券中心音效
  static buyCardSound: egret.Sound;  // 购买卡券音效


  static getLuckyBagSound: egret.Sound;  // 接到福袋音效
  static openBagSound: egret.Sound;  // 打开福袋音效
  static coinSound: egret.Sound;  // 接到金币音效


  static earthSound: egret.Sound;  // 地震音效
  static saveSound: egret.Sound;  //普渡众生音效
  static rockSound: egret.Sound;  //陨石音效
  static upgradeSound: egret.Sound;  //房屋升级音效
  static attackSound: egret.Sound;  //攻击音效
  static defenseSound: egret.Sound;  //防御音效
  static interestSound: egret.Sound;  //利息翻倍音效
  static dayStartSound: egret.Sound;  //每日活动开始音效
  static dayBombSound: egret.Sound;  //接到炸弹音效


 


  public constructor() {
    super();

    // 音乐开关
    Sound.bgOpen = egret.localStorage.getItem("bgOpen")=="false" ? false : true;
    Sound.soundOpen = egret.localStorage.getItem("soundOpen")=="false" ? false : true;

    // 背景音乐
    Sound.bgSound = RES.getRes("bsound_mp3");

    // 通用------------------------------------------------------------------------------
    Sound.cancelSound = RES.getRes("cancel_mp3"); // 模态框取消音效
    Sound.wrongTipSound = RES.getRes("wrongtip_mp3"); // 模态框错误提示信息音效（资金不足）
    Sound.switchSound = RES.getRes("switch_mp3"); // 选项转换音效
    Sound.tipSound = RES.getRes("tip_mp3"); // 提示信息音效（尚未解锁）
    Sound.modalSound = RES.getRes("modal_mp3"); // 功能性弹框音效（活动展板，背包，消息，排行榜）
    Sound.backSound = RES.getRes("back_mp3"); //场景返回音效


    // 通用----------------------------------------------------------------------------------

    Sound.diceSound = RES.getRes("dice_mp3"); // 色子音效
    Sound.walkSound = RES.getRes("walk_mp3"); // 人物走路音效
    Sound.luckySound = RES.getRes("lucky_mp3"); //  好运音效
    Sound.badLuckySound = RES.getRes("zomb_mp3"); // 坏运音效
    Sound.hospitalSound = RES.getRes("alarm_mp3"); // 医院音效
    Sound.bankSound = RES.getRes("dingdong_mp3"); // 银行音效
    Sound.cardSound = RES.getRes("cardcenter_mp3"); // 卡券中心音效
    Sound.buyCardSound = RES.getRes("cardbuy_mp3"); // 购买卡券音效

    Sound.getLuckyBagSound = RES.getRes("getcoin_mp3"); // 接到福袋音效
    Sound.openBagSound = RES.getRes("openbag_mp3"); // 打开福袋音效
    Sound.coinSound = RES.getRes("coin_mp3"); // 接到金币音效
    Sound.dayStartSound = RES.getRes("daystart_mp3"); //每日活动开始音效
    Sound.dayBombSound = RES.getRes("bomb_mp3"); //接到炸弹音效


    Sound.earthSound = RES.getRes("earthquake_mp3");  // 地震音效
    Sound.saveSound = RES.getRes("save_mp3");  //普渡众生音效
    Sound.rockSound = RES.getRes("rock_mp3"); //陨石音效
    Sound.upgradeSound = RES.getRes("upgrade_mp3"); //房屋升级音效
    Sound.attackSound = RES.getRes("attack_mp3"); //攻击音效
    Sound.defenseSound = RES.getRes("defense_mp3"); //防御音效
    Sound.interestSound = RES.getRes("interest_mp3"); //利息翻倍音效

  }


}