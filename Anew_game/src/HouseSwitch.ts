class HouseSwitch extends egret.Sprite {

  private _bg: Background = new Background();

  // 房屋容器
  private houseCont: egret.Sprite;
  // 折损效果容器
  private lossCont: egret.Sprite;


  private loss1: egret.Bitmap;
  private loss2: egret.Bitmap;
  private loss3: egret.Bitmap;
  private loss4: egret.Bitmap;
  private loss5: egret.Bitmap;


  public constructor() {
    super();
    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);

  }

  private onAddToStage(event: egret.Event) {

    this.x = 320;
    this.y = 870;
    this.width = 500;
    this.height = 500;
    this.anchorOffsetX = 250;
    this.anchorOffsetY = 500;

    this.houseCont = new egret.Sprite();
    this.houseCont.x = 0;
    this.houseCont.y = 0;
    this.houseCont.width = 500;
    this.houseCont.height = 500;

    this.lossCont = new egret.Sprite();
    this.lossCont.x = 0;
    this.lossCont.y = 0;
    this.lossCont.width = 500;
    this.lossCont.height = 600;

    this.loss1 = this._bg.element({ "name": `houseLoss_json.loss1`, "x": 50, "y": 330 });
    this.loss2 = this._bg.element({ "name": `houseLoss_json.loss2`, "x": 330, "y": 260 });
    this.loss3 = this._bg.element({ "name": `houseLoss_json.loss3`, "x": 300, "y": 200 });
    this.loss4 = this._bg.element({ "name": `houseLoss_json.loss4`, "x": 300, "y": 200 });
    this.loss5 = this._bg.element({ "name": `houseLoss_json.loss5`, "x": 300, "y": 200 });

  }

  public house(land, houseId) {
    this.removeChildren();
    // 大陆平台
    this.addChild(this._bg.element({ "name": `hbase_json.hbase${land}`, "x": 250, "y": 300 }));
    // 房屋背景
    this.houseCont.removeChildren();
    this.addChild(this.houseCont);
    var max = Number(houseId) % 8;
    if (Number(houseId) % 8 == 0) {
      max = 8;
    }
    for (var i = 1; i <= max; i++) {
      this[`house${land}`](i);
    }
  }

  private house1(i: number) {
    if (i == 1) {
      let house1 = this._bg.element({ "name": `house1_json.h1`, "x": 250, "y": 150 });
      let crack = this._bg.element({ "name": `house1_json.crack`, "x": 240, "y": 140 });
      this.houseCont.addChild(house1);
      this.houseCont.addChild(crack);
    } else if (i == 2) {
      let bucket = this._bg.element({ "name": `house1_json.bucket`, "x": 230, "y": 270 });
      this.houseCont.removeChildAt(1);
      this.houseCont.addChild(bucket);

    } else if (i == 3) {
      let treasure = this._bg.element({ "name": `house1_json.treasure`, "x": 200, "y": 250 });
      let lflower = this._bg.element({ "name": `house1_json.lflower`, "x": 140, "y": 325 });
      let rflower = this._bg.element({ "name": `house1_json.rflower`, "x": 430, "y": 250 });
      this.houseCont.addChildAt(treasure, 1);
      this.houseCont.addChild(lflower);
      this.houseCont.addChild(rflower);
    } else if (i == 4) {
      let house4 = this._bg.element({ "name": `house1_json.h4`, "x": 260, "y": 140 });

      this.houseCont.removeChildAt(0);
      this.houseCont.addChildAt(house4, 0);
    } else if (i == 5) {
      let dog = this._bg.element({ "name": `house1_json.dog`, "x": 370, "y": 260 });
      let bird = this._bg.element({ "name": `house1_json.bird`, "x": 215, "y": 20 });
      this.houseCont.addChild(dog);
      this.houseCont.addChild(bird);
    } else if (i == 6) {
      let board = this._bg.element({ "name": `house1_json.board`, "x": 240, "y": 300 });
      this.houseCont.addChild(board);
    } else if (i == 7) {
      let house7 = this._bg.element({ "name": `house1_json.h7`, "x": 260, "y": 150 });
      let tree = this._bg.element({ "name": `house1_json.tree`, "x": 120, "y": 150 });

      this.houseCont.removeChildAt(0);
      this.houseCont.addChildAt(tree, 0);
      this.houseCont.addChildAt(house7, 1);

    } else if (i == 8) {
      let house8 = this._bg.element({ "name": `house1_json.h8`, "x": 260, "y": 150 });
      this.houseCont.removeChildAt(1);
      this.houseCont.addChildAt(house8, 1);
      this.houseCont.removeChildAt(2);
      this.houseCont.removeChildAt(6);
    }
  }

  public house2(i: number) {
    if (i == 1) {
      let house1 = this._bg.element({ "name": `house2_json.h1`, "x": 240, "y": 95 });
      this.houseCont.addChild(house1);
    } else if (i == 2) {
      let house2 = this._bg.element({ "name": `house2_json.h2`, "x": 240, "y": 90 });
      this.houseCont.removeChildAt(0);
      this.houseCont.addChildAt(house2, 0);
    } else if (i == 3) {
      let bucket = this._bg.element({ "name": `house2_json.bucket`, "x": 235, "y": 240 });
      let light = this._bg.element({ "name": `house2_json.light`, "x": 365, "y": 164 });

      this.houseCont.addChild(bucket);
      this.houseCont.addChild(light);
    } else if (i == 4) {
      let treasure = this._bg.element({ "name": `house2_json.treasure`, "x": 345, "y": 87 });
      let bird = this._bg.element({ "name": `house2_json.bird`, "x": 360, "y": 5 });

      this.houseCont.addChild(treasure);
      this.houseCont.addChildAt(bird, 0);
    } else if (i == 5) {
      let house5 = this._bg.element({ "name": `house2_json.h5`, "x": 240, "y": 95 });
      this.houseCont.removeChildren();
      this.houseCont.addChild(house5);
    } else if (i == 6) {
      let tree = this._bg.element({ "name": `house2_json.tree`, "x": 110, "y": 130 });
      this.houseCont.addChildAt(tree, 0);

    } else if (i == 7) {
      let desk = this._bg.element({ "name": `house2_json.desk`, "x": 410, "y": 215 });
      let pond = this._bg.element({ "name": `house2_json.pond`, "x": 280, "y": 305 });

      this.houseCont.addChild(desk);
      this.houseCont.addChild(pond);

    } else if (i == 8) {
      let rtree = this._bg.element({ "name": `house2_json.tree`, "x": 320, "y": 100 });
      let rockery = this._bg.element({ "name": `house2_json.rockery`, "x": 390, "y": 150 });
      this.houseCont.addChildAt(rtree, 1);
      this.houseCont.addChildAt(rockery, 2);
    }
  }

  public house3(i: number) {
    if (i == 1) {
      let house1 = this._bg.element({ "name": `house3_json.h1`, "x": 250, "y": 140 });
      this.houseCont.addChild(house1);
    } else if (i == 2) {
      let house2 = this._bg.element({ "name": `house3_json.h2`, "x": 250, "y": 140 });

      this.houseCont.removeChildAt(0);
      this.houseCont.addChildAt(house2, 0);

    } else if (i == 3) {
      let flower = this._bg.element({ "name": `house3_json.flower`, "x": 270, "y": 280 });
      let wood = this._bg.element({ "name": `house3_json.wood`, "x": 390, "y": 210 });
      let road = this._bg.element({ "name": `house3_json.road`, "x": 382, "y": 227 });

      this.houseCont.addChild(flower);
      this.houseCont.addChild(wood);
      this.houseCont.addChildAt(road, 0);
    } else if (i == 4) {
      let flag = this._bg.element({ "name": `house3_json.flag`, "x": 340, "y": 40 });
      let mushroom = this._bg.element({ "name": `house3_json.mushroom`, "x": 220, "y": 265 });

      this.houseCont.addChild(flag);
      this.houseCont.addChild(mushroom);
    } else if (i == 5) {
      let house5 = this._bg.element({ "name": `house3_json.h5`, "x": 200, "y": 145 });
      let road = this._bg.element({ "name": `house3_json.road`, "x": 382, "y": 227 });
      this.houseCont.removeChildren();
      this.houseCont.addChild(road);
      this.houseCont.addChild(house5);
    } else if (i == 6) {
      let lamp = this._bg.element({ "name": `house3_json.lamp`, "x": 350, "y": 170 });
      let bird = this._bg.element({ "name": `house3_json.bird`, "x": 260, "y": 40 });

      this.houseCont.addChild(lamp);
      this.houseCont.addChild(bird);
    } else if (i == 7) {
      let diamond = this._bg.element({ "name": `house3_json.diamond`, "x": 260, "y": 45 });
      this.houseCont.removeChildAt(3);
      this.houseCont.addChild(diamond);

    } else if (i == 8) {
      let lfence = this._bg.element({ "name": `house3_json.lfence`, "x": 275, "y": 270 });
      let rfence = this._bg.element({ "name": `house3_json.rfence`, "x": 360, "y": 170 });
      this.houseCont.addChild(lfence);
      this.houseCont.addChildAt(rfence, 1);
    }

  }

  public house4(i: number) {
    if (i == 1) {
      let house1 = this._bg.element({ "name": `house4_json.h1`, "x": 260, "y": 150 });

      this.houseCont.addChild(house1);
    } else if (i == 2) {
      let house2 = this._bg.element({ "name": `house4_json.h2`, "x": 260, "y": 150 });

      this.houseCont.removeChildAt(0);
      this.houseCont.addChildAt(house2, 0);

    } else if (i == 3) {
      let bench = this._bg.element({ "name": `house4_json.bench`, "x": 200, "y": 275 });
      let flower = this._bg.element({ "name": `house4_json.flower`, "x": 140, "y": 240 });

      this.houseCont.addChild(bench);
      this.houseCont.addChild(flower);
    } else if (i == 4) {
      let treasure = this._bg.element({ "name": `house4_json.treasure`, "x": 180, "y": 220 });
      let pheasant = this._bg.element({ "name": `house4_json.pheasant`, "x": 220, "y": 0 });

      this.houseCont.addChild(treasure);
      this.houseCont.addChild(pheasant);
    } else if (i == 5) {
      let rtree = this._bg.element({ "name": `house4_json.rtree`, "x": 370, "y": 220 });

      this.houseCont.addChild(rtree);
    } else if (i == 6) {
      let bucket = this._bg.element({ "name": `house4_json.bucket`, "x": 310, "y": 255 });
      this.houseCont.addChild(bucket);

    } else if (i == 7) {
      let ltree = this._bg.element({ "name": `house4_json.ltree`, "x": 150, "y": 150 });

      this.houseCont.addChildAt(ltree, 0);

    } else if (i == 8) {
      let wood = this._bg.element({ "name": `house4_json.wood`, "x": 350, "y": 280 });
      this.houseCont.addChild(wood);
    }
  }

  public house5(i: number) {
    if (i == 1) {
      let house1 = this._bg.element({ "name": `house5_json.h1`, "x": 240, "y": 150 });
      this.houseCont.addChild(house1);
    } else if (i == 2) {
      let house2 = this._bg.element({ "name": `house5_json.h2`, "x": 240, "y": 150 });
      this.houseCont.removeChildAt(0);
      this.houseCont.addChildAt(house2, 0);

    } else if (i == 3) {
      let house3 = this._bg.element({ "name": `house5_json.h3`, "x": 240, "y": 130 });
      this.houseCont.removeChildAt(0);
      this.houseCont.addChildAt(house3, 0);
    } else if (i == 4) {
      let bucket = this._bg.element({ "name": `house5_json.bucket`, "x": 390, "y": 250 });
      let bird = this._bg.element({ "name": `house5_json.bird`, "x": 160, "y": 37 });
      this.houseCont.addChild(bucket);
      this.houseCont.addChild(bird);
    } else if (i == 5) {
      let tree = this._bg.element({ "name": `house5_json.tree`, "x": 150, "y": 175 });
      this.houseCont.addChildAt(tree, 0);
    } else if (i == 6) {
      let wood = this._bg.element({ "name": `house5_json.wood`, "x": 270, "y": 320 });

      this.houseCont.addChild(wood);

    } else if (i == 7) {
      let lamp = this._bg.element({ "name": `house5_json.lamp`, "x": 140, "y": 230 });

      this.houseCont.addChild(lamp);

    } else if (i == 8) {
      let dog = this._bg.element({ "name": `house5_json.dog`, "x": 220, "y": 320 });
      this.houseCont.addChild(dog);
    }

  }

  public house6(i: number) {

    if (i == 1) {
      let house1 = this._bg.element({ "name": `house6_json.h1`, "x": 260, "y": 200 });

      this.houseCont.addChild(house1);
    } else if (i == 2) {
      let house2 = this._bg.element({ "name": `house6_json.h2`, "x": 260, "y": 200 });
      this.houseCont.removeChildAt(0);
      this.houseCont.addChildAt(house2, 0);
    } else if (i == 3) {
      let house3 = this._bg.element({ "name": `house6_json.h3`, "x": 260, "y": 200 });
      this.houseCont.removeChildAt(0);
      this.houseCont.addChildAt(house3, 0);
    } else if (i == 4) {
      let house4 = this._bg.element({ "name": `house6_json.h4`, "x": 250, "y": 210 });
      this.houseCont.removeChildAt(0);
      this.houseCont.addChildAt(house4, 0);
    } else if (i == 5) {
      let flower = this._bg.element({ "name": `house6_json.flower`, "x": 260, "y": 320 });
      this.houseCont.addChild(flower);
    } else if (i == 6) {
      let tree = this._bg.element({ "name": `house6_json.tree`, "x": 150, "y": 170 });
      this.houseCont.addChildAt(tree, 0);
    } else if (i == 7) {
      let wine = this._bg.element({ "name": `house6_json.wine`, "x": 230, "y": 270 });
      this.houseCont.addChild(wine);
    } else if (i == 8) {
      let wood = this._bg.element({ "name": `house6_json.wood`, "x": 350, "y": 310 });
      this.houseCont.addChild(wood);
    }

  }

  public house7(i: number) {
    if (i == 1) {
      let house1 = this._bg.element({ "name": `house7_json.h1`, "x": 250, "y": 160 });
      this.houseCont.addChild(house1);
    } else if (i == 2) {
      let house2 = this._bg.element({ "name": `house7_json.h2`, "x": 250, "y": 160 });
      this.houseCont.removeChildAt(0);
      this.houseCont.addChildAt(house2, 0);

    } else if (i == 3) {
      let wood = this._bg.element({ "name": `house7_json.wood`, "x": 160, "y": 280 });
      this.houseCont.addChild(wood);
    } else if (i == 4) {
      let tree = this._bg.element({ "name": `house7_json.tree`, "x": 230, "y": 285 });
      this.houseCont.addChild(tree);
    } else if (i == 5) {
      let bird = this._bg.element({ "name": `house7_json.bird`, "x": 200, "y": 65 });
      let treasure = this._bg.element({ "name": `house7_json.treasure`, "x": 305, "y": 260 });
      let pumpkin = this._bg.element({ "name": `house7_json.pumpkin`, "x": 405, "y": 250 });
      this.houseCont.addChild(bird);
      this.houseCont.addChild(treasure);
      this.houseCont.addChildAt(pumpkin, 0);
    } else if (i == 6) {
      let deadwood = this._bg.element({ "name": `house7_json.deadwood`, "x": 190, "y": 360 });
      let gold = this._bg.element({ "name": `house7_json.gold`, "x": 340, "y": 290 });
      this.houseCont.addChild(deadwood);
      this.houseCont.addChild(gold);
    } else if (i == 7) {
      let bigtree = this._bg.element({ "name": `house7_json.bigtree`, "x": 380, "y": 170 });
      this.houseCont.addChildAt(bigtree, 0);
    } else if (i == 8) {
      let house8 = this._bg.element({ "name": `house7_json.h8`, "x": 240, "y": 190 });
      this.houseCont.removeChildren();
      this.houseCont.addChild(house8);
    }
  }

  public house8(i: number) {

    if (i == 1) {
      let house1 = this._bg.element({ "name": `house8_json.h1`, "x": 260, "y": 175 });
      this.houseCont.addChild(house1);
    } else if (i == 2) {
      let house2 = this._bg.element({ "name": `house8_json.h2`, "x": 260, "y": 175 });
      this.houseCont.removeChildAt(0);
      this.houseCont.addChildAt(house2, 0);
    } else if (i == 3) {
      let board = this._bg.element({ "name": `house8_json.board`, "x": 320, "y": 260 });
      this.houseCont.addChild(board);
    } else if (i == 4) {
      let bench = this._bg.element({ "name": `house8_json.bench`, "x": 140, "y": 275 });
      this.houseCont.addChild(bench);
    } else if (i == 5) {
      let flower = this._bg.element({ "name": `house8_json.flower`, "x": 380, "y": 240 });
      this.houseCont.addChild(flower);
    } else if (i == 6) {
      let bird = this._bg.element({ "name": `house8_json.bird`, "x": 320, "y": 205 });
      let lamp = this._bg.element({ "name": `house8_json.lamp`, "x": 110, "y": 185 });
      this.houseCont.addChild(bird);
      this.houseCont.addChild(lamp);
    } else if (i == 7) {
      let tree = this._bg.element({ "name": `house8_json.tree`, "x": 130, "y": 150 });
      this.houseCont.addChildAt(tree, 0);
    } else if (i == 8) {
      let house8 = this._bg.element({ "name": `house8_json.h8`, "x": 250, "y": 160 });
      this.houseCont.removeChildren();
      this.houseCont.addChild(house8);
    }
  }

  public house9(i: number) {
    if (i == 1) {
      let house1 = this._bg.element({ "name": `house9_json.h1`, "x": 260, "y": 185 });
      this.houseCont.addChild(house1);
    } else if (i == 2) {
      let house2 = this._bg.element({ "name": `house9_json.h2`, "x": 260, "y": 185 });
      this.houseCont.removeChildAt(0);
      this.houseCont.addChildAt(house2, 0);
    } else if (i == 3) {
      let flowercar = this._bg.element({ "name": `house9_json.flowercar`, "x": 405, "y": 245 });
      this.houseCont.addChild(flowercar);
    } else if (i == 4) {
      let bird = this._bg.element({ "name": `house9_json.bird`, "x": 240, "y": 100 });
      this.houseCont.addChild(bird);
    } else if (i == 5) {
      let board = this._bg.element({ "name": `house9_json.board`, "x": 280, "y": 290 });
      let grass = this._bg.element({ "name": `house9_json.grass`, "x": 135, "y": 250 });
      this.houseCont.addChild(board);
      this.houseCont.addChildAt(grass, 0);
    } else if (i == 6) {
      let treasure = this._bg.element({ "name": `house9_json.treasure`, "x": 180, "y": 240 });
      this.houseCont.addChild(treasure);
    } else if (i == 7) {
      let tree = this._bg.element({ "name": `house9_json.tree`, "x": 250, "y": 230 });
      this.houseCont.addChildAt(tree, 0);
    } else if (i == 8) {
      let flower = this._bg.element({ "name": `house9_json.flower`, "x": 200, "y": 320 });
      this.houseCont.addChild(flower);
    }
  }



  private lossLocation = {
    l1: [{ x: 250, y: 170 }, { x: 250, y: 170 }, { x: 230, y: 240 }, { x: 210, y: 150 }, { x: 390, y: 160 }], 
    l2: [{ x: 250, y: 150 }, { x: 250, y: 150 }, { x: 300, y: 230 }, { x: 280, y: 140 }, { x: 400, y: 150 }], 
    l3: [{ x: 230, y: 170 }, { x: 230, y: 170 }, { x: 230, y: 240 }, { x: 210, y: 150 }, { x: 380, y: 140 }], 
    l4: [{ x: 250, y: 170 }, { x: 250, y: 170 }, { x: 260, y: 250 }, { x: 230, y: 160 }, { x: 380, y: 170 }],
    l5: [{ x: 250, y: 200 }, { x: 250, y: 200 }, { x: 250, y: 260 }, { x: 230, y: 170 }, { x: 380, y: 200 }], 
    l6: [{ x: 270, y: 190 }, { x: 270, y: 190 }, { x: 210, y: 260 }, { x: 180, y: 170 }, { x: 410, y: 180 }], 
    l7: [{ x: 250, y: 200 }, { x: 250, y: 200 }, { x: 330, y: 260 }, { x: 300, y: 180 }, { x: 180, y: 200 }], 
    l8: [{ x: 250, y: 150 }, { x: 250, y: 150 }, { x: 230, y: 260 }, { x: 210, y: 170 }, { x: 140, y: 180 }],

    l9: [{ x: 250, y: 170 }, { x: 250, y: 170 }, { x: 250, y: 275 }, { x: 220, y: 190 }, { x: 390, y: 180 }],
}
  public hLoss(landId, lossId) {

    this.loss1.x = this.lossLocation[`l${landId}`][0].x;
    this.loss1.y = this.lossLocation[`l${landId}`][0].y;

    this.loss2.x = this.lossLocation[`l${landId}`][1].x;
    this.loss2.y = this.lossLocation[`l${landId}`][1].y;

    this.loss3.x = this.lossLocation[`l${landId}`][2].x;
    this.loss3.y = this.lossLocation[`l${landId}`][2].y;

    this.loss4.x = this.lossLocation[`l${landId}`][3].x;
    this.loss4.y = this.lossLocation[`l${landId}`][3].y;

    this.loss5.x = this.lossLocation[`l${landId}`][4].x;
    this.loss5.y = this.lossLocation[`l${landId}`][4].y;

    if (this.lossCont && this.lossCont.parent) {
      this.lossCont.removeChildren();
      this.removeChild(this.lossCont);
    }
    this.addChild(this.lossCont);

    let hId = Number(lossId);
    switch (hId) {
      case 0:
        this.removeChild(this.lossCont);
        break;

      case 1:
        this.lossCont.addChild(this.loss1);
        break;

      case 2:
        this.lossCont.addChild(this.loss1);
        this.lossCont.addChild(this.loss2);
        break;

      case 3:
        this.lossCont.addChild(this.loss1);
        this.lossCont.addChild(this.loss2);
        this.lossCont.addChild(this.loss3);
        break;

      case 4:
        this.lossCont.addChild(this.loss1);
        this.lossCont.addChild(this.loss2);
        this.lossCont.addChild(this.loss4);
        break;

      case 5:
        this.lossCont.addChild(this.loss1);
        this.lossCont.addChild(this.loss2);
        this.lossCont.addChild(this.loss4);
        this.lossCont.addChild(this.loss5);
        break;

      default:
        this.lossCont.addChild(this.loss1);
        break;
    }

  }
}