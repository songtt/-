// 默认添加开始场景
class Newscenes extends egret.Sprite {
  // 场景控制器的单例
  private static instance: Newscenes;
  // 初始游戏场景
  private Game: Game;
  // 升级房子场景
  private House: House;
  private FriendHouse: FriendHouse;

  // 每日活动场景
  private Day: Day;

  // 世界地图
  private WorldMap: WorldMap;

  // 背景音乐
  static bgm: egret.SoundChannel;

  public constructor() {
    super();
    // 实例化两个场景
    this.Game = new Game();
    this.House = new House();
    this.FriendHouse = new FriendHouse();

    this.Day = new Day();

    this.WorldMap = new WorldMap();

    // 默认添加开始场景
    this.addChild(this.Game);

    // 背景音乐
    if (Sound.bgOpen) {
      Newscenes.bgm = Sound.bgSound.play();
    }
    // 回到前台时恢复背景音乐
    wx.onShow(function () {
      if (Sound.bgOpen) {
        Newscenes.bgm = Sound.bgSound.play();
      }
    });
    // 音频中断事件
    wx.onAudioInterruptionEnd(function () {
      if (Sound.bgOpen) {
        Newscenes.bgm = Sound.bgSound.play();
      }
    });


  }
  // 实例化单例获取方法
  public static getInstance(): Newscenes {
    if (!Newscenes.instance) {
      Newscenes.instance = new Newscenes();
    }
    return Newscenes.instance;
  }


  // 切换场景
  public changeScene(name) {
    // 移除所有显示列表中的对象
    let oldPage: any = this.getChildAt(0);
    oldPage.removeChildren();
    this.removeChildren();
    // 添加下一个场景
    this.addChild(this[name]);
  }


}
