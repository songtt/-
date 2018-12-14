var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
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
var HouseSwitch = (function (_super) {
    __extends(HouseSwitch, _super);
    function HouseSwitch() {
        var _this = _super.call(this) || this;
        _this._bg = new Background();
        _this.lossLocation = {
            l1: [{ x: 250, y: 170 }, { x: 250, y: 170 }, { x: 230, y: 240 }, { x: 210, y: 150 }, { x: 390, y: 160 }],
            l2: [{ x: 250, y: 150 }, { x: 250, y: 150 }, { x: 300, y: 230 }, { x: 280, y: 140 }, { x: 400, y: 150 }],
            l3: [{ x: 230, y: 170 }, { x: 230, y: 170 }, { x: 230, y: 240 }, { x: 210, y: 150 }, { x: 380, y: 140 }],
            l4: [{ x: 250, y: 170 }, { x: 250, y: 170 }, { x: 260, y: 250 }, { x: 230, y: 160 }, { x: 380, y: 170 }],
            l5: [{ x: 250, y: 200 }, { x: 250, y: 200 }, { x: 250, y: 260 }, { x: 230, y: 170 }, { x: 380, y: 200 }],
            l6: [{ x: 270, y: 190 }, { x: 270, y: 190 }, { x: 210, y: 260 }, { x: 180, y: 170 }, { x: 410, y: 180 }],
            l7: [{ x: 250, y: 200 }, { x: 250, y: 200 }, { x: 330, y: 260 }, { x: 300, y: 180 }, { x: 180, y: 200 }],
            l8: [{ x: 250, y: 150 }, { x: 250, y: 150 }, { x: 230, y: 260 }, { x: 210, y: 170 }, { x: 140, y: 180 }],
            l9: [{ x: 250, y: 170 }, { x: 250, y: 170 }, { x: 250, y: 275 }, { x: 220, y: 190 }, { x: 390, y: 180 }],
        };
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    HouseSwitch.prototype.onAddToStage = function (event) {
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
        this.loss1 = this._bg.element({ "name": "houseLoss_json.loss1", "x": 50, "y": 330 });
        this.loss2 = this._bg.element({ "name": "houseLoss_json.loss2", "x": 330, "y": 260 });
        this.loss3 = this._bg.element({ "name": "houseLoss_json.loss3", "x": 300, "y": 200 });
        this.loss4 = this._bg.element({ "name": "houseLoss_json.loss4", "x": 300, "y": 200 });
        this.loss5 = this._bg.element({ "name": "houseLoss_json.loss5", "x": 300, "y": 200 });
    };
    HouseSwitch.prototype.house = function (land, houseId) {
        this.removeChildren();
        // 大陆平台
        this.addChild(this._bg.element({ "name": "hbase_json.hbase" + land, "x": 250, "y": 300 }));
        // 房屋背景
        this.houseCont.removeChildren();
        this.addChild(this.houseCont);
        var max = Number(houseId) % 8;
        if (Number(houseId) % 8 == 0) {
            max = 8;
        }
        for (var i = 1; i <= max; i++) {
            this["house" + land](i);
        }
    };
    HouseSwitch.prototype.house1 = function (i) {
        if (i == 1) {
            var house1 = this._bg.element({ "name": "house1_json.h1", "x": 250, "y": 150 });
            var crack = this._bg.element({ "name": "house1_json.crack", "x": 240, "y": 140 });
            this.houseCont.addChild(house1);
            this.houseCont.addChild(crack);
        }
        else if (i == 2) {
            var bucket = this._bg.element({ "name": "house1_json.bucket", "x": 230, "y": 270 });
            this.houseCont.removeChildAt(1);
            this.houseCont.addChild(bucket);
        }
        else if (i == 3) {
            var treasure = this._bg.element({ "name": "house1_json.treasure", "x": 200, "y": 250 });
            var lflower = this._bg.element({ "name": "house1_json.lflower", "x": 140, "y": 325 });
            var rflower = this._bg.element({ "name": "house1_json.rflower", "x": 430, "y": 250 });
            this.houseCont.addChildAt(treasure, 1);
            this.houseCont.addChild(lflower);
            this.houseCont.addChild(rflower);
        }
        else if (i == 4) {
            var house4 = this._bg.element({ "name": "house1_json.h4", "x": 260, "y": 140 });
            this.houseCont.removeChildAt(0);
            this.houseCont.addChildAt(house4, 0);
        }
        else if (i == 5) {
            var dog = this._bg.element({ "name": "house1_json.dog", "x": 370, "y": 260 });
            var bird = this._bg.element({ "name": "house1_json.bird", "x": 215, "y": 20 });
            this.houseCont.addChild(dog);
            this.houseCont.addChild(bird);
        }
        else if (i == 6) {
            var board = this._bg.element({ "name": "house1_json.board", "x": 240, "y": 300 });
            this.houseCont.addChild(board);
        }
        else if (i == 7) {
            var house7 = this._bg.element({ "name": "house1_json.h7", "x": 260, "y": 150 });
            var tree = this._bg.element({ "name": "house1_json.tree", "x": 120, "y": 150 });
            this.houseCont.removeChildAt(0);
            this.houseCont.addChildAt(tree, 0);
            this.houseCont.addChildAt(house7, 1);
        }
        else if (i == 8) {
            var house8 = this._bg.element({ "name": "house1_json.h8", "x": 260, "y": 150 });
            this.houseCont.removeChildAt(1);
            this.houseCont.addChildAt(house8, 1);
            this.houseCont.removeChildAt(2);
            this.houseCont.removeChildAt(6);
        }
    };
    HouseSwitch.prototype.house2 = function (i) {
        if (i == 1) {
            var house1 = this._bg.element({ "name": "house2_json.h1", "x": 240, "y": 95 });
            this.houseCont.addChild(house1);
        }
        else if (i == 2) {
            var house2 = this._bg.element({ "name": "house2_json.h2", "x": 240, "y": 90 });
            this.houseCont.removeChildAt(0);
            this.houseCont.addChildAt(house2, 0);
        }
        else if (i == 3) {
            var bucket = this._bg.element({ "name": "house2_json.bucket", "x": 235, "y": 240 });
            var light = this._bg.element({ "name": "house2_json.light", "x": 365, "y": 164 });
            this.houseCont.addChild(bucket);
            this.houseCont.addChild(light);
        }
        else if (i == 4) {
            var treasure = this._bg.element({ "name": "house2_json.treasure", "x": 345, "y": 87 });
            var bird = this._bg.element({ "name": "house2_json.bird", "x": 360, "y": 5 });
            this.houseCont.addChild(treasure);
            this.houseCont.addChildAt(bird, 0);
        }
        else if (i == 5) {
            var house5 = this._bg.element({ "name": "house2_json.h5", "x": 240, "y": 95 });
            this.houseCont.removeChildren();
            this.houseCont.addChild(house5);
        }
        else if (i == 6) {
            var tree = this._bg.element({ "name": "house2_json.tree", "x": 110, "y": 130 });
            this.houseCont.addChildAt(tree, 0);
        }
        else if (i == 7) {
            var desk = this._bg.element({ "name": "house2_json.desk", "x": 410, "y": 215 });
            var pond = this._bg.element({ "name": "house2_json.pond", "x": 280, "y": 305 });
            this.houseCont.addChild(desk);
            this.houseCont.addChild(pond);
        }
        else if (i == 8) {
            var rtree = this._bg.element({ "name": "house2_json.tree", "x": 320, "y": 100 });
            var rockery = this._bg.element({ "name": "house2_json.rockery", "x": 390, "y": 150 });
            this.houseCont.addChildAt(rtree, 1);
            this.houseCont.addChildAt(rockery, 2);
        }
    };
    HouseSwitch.prototype.house3 = function (i) {
        if (i == 1) {
            var house1 = this._bg.element({ "name": "house3_json.h1", "x": 250, "y": 140 });
            this.houseCont.addChild(house1);
        }
        else if (i == 2) {
            var house2 = this._bg.element({ "name": "house3_json.h2", "x": 250, "y": 140 });
            this.houseCont.removeChildAt(0);
            this.houseCont.addChildAt(house2, 0);
        }
        else if (i == 3) {
            var flower = this._bg.element({ "name": "house3_json.flower", "x": 270, "y": 280 });
            var wood = this._bg.element({ "name": "house3_json.wood", "x": 390, "y": 210 });
            var road = this._bg.element({ "name": "house3_json.road", "x": 382, "y": 227 });
            this.houseCont.addChild(flower);
            this.houseCont.addChild(wood);
            this.houseCont.addChildAt(road, 0);
        }
        else if (i == 4) {
            var flag = this._bg.element({ "name": "house3_json.flag", "x": 340, "y": 40 });
            var mushroom = this._bg.element({ "name": "house3_json.mushroom", "x": 220, "y": 265 });
            this.houseCont.addChild(flag);
            this.houseCont.addChild(mushroom);
        }
        else if (i == 5) {
            var house5 = this._bg.element({ "name": "house3_json.h5", "x": 200, "y": 145 });
            var road = this._bg.element({ "name": "house3_json.road", "x": 382, "y": 227 });
            this.houseCont.removeChildren();
            this.houseCont.addChild(road);
            this.houseCont.addChild(house5);
        }
        else if (i == 6) {
            var lamp = this._bg.element({ "name": "house3_json.lamp", "x": 350, "y": 170 });
            var bird = this._bg.element({ "name": "house3_json.bird", "x": 260, "y": 40 });
            this.houseCont.addChild(lamp);
            this.houseCont.addChild(bird);
        }
        else if (i == 7) {
            var diamond = this._bg.element({ "name": "house3_json.diamond", "x": 260, "y": 45 });
            this.houseCont.removeChildAt(3);
            this.houseCont.addChild(diamond);
        }
        else if (i == 8) {
            var lfence = this._bg.element({ "name": "house3_json.lfence", "x": 275, "y": 270 });
            var rfence = this._bg.element({ "name": "house3_json.rfence", "x": 360, "y": 170 });
            this.houseCont.addChild(lfence);
            this.houseCont.addChildAt(rfence, 1);
        }
    };
    HouseSwitch.prototype.house4 = function (i) {
        if (i == 1) {
            var house1 = this._bg.element({ "name": "house4_json.h1", "x": 260, "y": 150 });
            this.houseCont.addChild(house1);
        }
        else if (i == 2) {
            var house2 = this._bg.element({ "name": "house4_json.h2", "x": 260, "y": 150 });
            this.houseCont.removeChildAt(0);
            this.houseCont.addChildAt(house2, 0);
        }
        else if (i == 3) {
            var bench = this._bg.element({ "name": "house4_json.bench", "x": 200, "y": 275 });
            var flower = this._bg.element({ "name": "house4_json.flower", "x": 140, "y": 240 });
            this.houseCont.addChild(bench);
            this.houseCont.addChild(flower);
        }
        else if (i == 4) {
            var treasure = this._bg.element({ "name": "house4_json.treasure", "x": 180, "y": 220 });
            var pheasant = this._bg.element({ "name": "house4_json.pheasant", "x": 220, "y": 0 });
            this.houseCont.addChild(treasure);
            this.houseCont.addChild(pheasant);
        }
        else if (i == 5) {
            var rtree = this._bg.element({ "name": "house4_json.rtree", "x": 370, "y": 220 });
            this.houseCont.addChild(rtree);
        }
        else if (i == 6) {
            var bucket = this._bg.element({ "name": "house4_json.bucket", "x": 310, "y": 255 });
            this.houseCont.addChild(bucket);
        }
        else if (i == 7) {
            var ltree = this._bg.element({ "name": "house4_json.ltree", "x": 150, "y": 150 });
            this.houseCont.addChildAt(ltree, 0);
        }
        else if (i == 8) {
            var wood = this._bg.element({ "name": "house4_json.wood", "x": 350, "y": 280 });
            this.houseCont.addChild(wood);
        }
    };
    HouseSwitch.prototype.house5 = function (i) {
        if (i == 1) {
            var house1 = this._bg.element({ "name": "house5_json.h1", "x": 240, "y": 150 });
            this.houseCont.addChild(house1);
        }
        else if (i == 2) {
            var house2 = this._bg.element({ "name": "house5_json.h2", "x": 240, "y": 150 });
            this.houseCont.removeChildAt(0);
            this.houseCont.addChildAt(house2, 0);
        }
        else if (i == 3) {
            var house3 = this._bg.element({ "name": "house5_json.h3", "x": 240, "y": 130 });
            this.houseCont.removeChildAt(0);
            this.houseCont.addChildAt(house3, 0);
        }
        else if (i == 4) {
            var bucket = this._bg.element({ "name": "house5_json.bucket", "x": 390, "y": 250 });
            var bird = this._bg.element({ "name": "house5_json.bird", "x": 160, "y": 37 });
            this.houseCont.addChild(bucket);
            this.houseCont.addChild(bird);
        }
        else if (i == 5) {
            var tree = this._bg.element({ "name": "house5_json.tree", "x": 150, "y": 175 });
            this.houseCont.addChildAt(tree, 0);
        }
        else if (i == 6) {
            var wood = this._bg.element({ "name": "house5_json.wood", "x": 270, "y": 320 });
            this.houseCont.addChild(wood);
        }
        else if (i == 7) {
            var lamp = this._bg.element({ "name": "house5_json.lamp", "x": 140, "y": 230 });
            this.houseCont.addChild(lamp);
        }
        else if (i == 8) {
            var dog = this._bg.element({ "name": "house5_json.dog", "x": 220, "y": 320 });
            this.houseCont.addChild(dog);
        }
    };
    HouseSwitch.prototype.house6 = function (i) {
        if (i == 1) {
            var house1 = this._bg.element({ "name": "house6_json.h1", "x": 260, "y": 200 });
            this.houseCont.addChild(house1);
        }
        else if (i == 2) {
            var house2 = this._bg.element({ "name": "house6_json.h2", "x": 260, "y": 200 });
            this.houseCont.removeChildAt(0);
            this.houseCont.addChildAt(house2, 0);
        }
        else if (i == 3) {
            var house3 = this._bg.element({ "name": "house6_json.h3", "x": 260, "y": 200 });
            this.houseCont.removeChildAt(0);
            this.houseCont.addChildAt(house3, 0);
        }
        else if (i == 4) {
            var house4 = this._bg.element({ "name": "house6_json.h4", "x": 250, "y": 210 });
            this.houseCont.removeChildAt(0);
            this.houseCont.addChildAt(house4, 0);
        }
        else if (i == 5) {
            var flower = this._bg.element({ "name": "house6_json.flower", "x": 260, "y": 320 });
            this.houseCont.addChild(flower);
        }
        else if (i == 6) {
            var tree = this._bg.element({ "name": "house6_json.tree", "x": 150, "y": 170 });
            this.houseCont.addChildAt(tree, 0);
        }
        else if (i == 7) {
            var wine = this._bg.element({ "name": "house6_json.wine", "x": 230, "y": 270 });
            this.houseCont.addChild(wine);
        }
        else if (i == 8) {
            var wood = this._bg.element({ "name": "house6_json.wood", "x": 350, "y": 310 });
            this.houseCont.addChild(wood);
        }
    };
    HouseSwitch.prototype.house7 = function (i) {
        if (i == 1) {
            var house1 = this._bg.element({ "name": "house7_json.h1", "x": 250, "y": 160 });
            this.houseCont.addChild(house1);
        }
        else if (i == 2) {
            var house2 = this._bg.element({ "name": "house7_json.h2", "x": 250, "y": 160 });
            this.houseCont.removeChildAt(0);
            this.houseCont.addChildAt(house2, 0);
        }
        else if (i == 3) {
            var wood = this._bg.element({ "name": "house7_json.wood", "x": 160, "y": 280 });
            this.houseCont.addChild(wood);
        }
        else if (i == 4) {
            var tree = this._bg.element({ "name": "house7_json.tree", "x": 230, "y": 285 });
            this.houseCont.addChild(tree);
        }
        else if (i == 5) {
            var bird = this._bg.element({ "name": "house7_json.bird", "x": 200, "y": 65 });
            var treasure = this._bg.element({ "name": "house7_json.treasure", "x": 305, "y": 260 });
            var pumpkin = this._bg.element({ "name": "house7_json.pumpkin", "x": 405, "y": 250 });
            this.houseCont.addChild(bird);
            this.houseCont.addChild(treasure);
            this.houseCont.addChildAt(pumpkin, 0);
        }
        else if (i == 6) {
            var deadwood = this._bg.element({ "name": "house7_json.deadwood", "x": 190, "y": 360 });
            var gold = this._bg.element({ "name": "house7_json.gold", "x": 340, "y": 290 });
            this.houseCont.addChild(deadwood);
            this.houseCont.addChild(gold);
        }
        else if (i == 7) {
            var bigtree = this._bg.element({ "name": "house7_json.bigtree", "x": 380, "y": 170 });
            this.houseCont.addChildAt(bigtree, 0);
        }
        else if (i == 8) {
            var house8 = this._bg.element({ "name": "house7_json.h8", "x": 240, "y": 190 });
            this.houseCont.removeChildren();
            this.houseCont.addChild(house8);
        }
    };
    HouseSwitch.prototype.house8 = function (i) {
        if (i == 1) {
            var house1 = this._bg.element({ "name": "house8_json.h1", "x": 260, "y": 175 });
            this.houseCont.addChild(house1);
        }
        else if (i == 2) {
            var house2 = this._bg.element({ "name": "house8_json.h2", "x": 260, "y": 175 });
            this.houseCont.removeChildAt(0);
            this.houseCont.addChildAt(house2, 0);
        }
        else if (i == 3) {
            var board = this._bg.element({ "name": "house8_json.board", "x": 320, "y": 260 });
            this.houseCont.addChild(board);
        }
        else if (i == 4) {
            var bench = this._bg.element({ "name": "house8_json.bench", "x": 140, "y": 275 });
            this.houseCont.addChild(bench);
        }
        else if (i == 5) {
            var flower = this._bg.element({ "name": "house8_json.flower", "x": 380, "y": 240 });
            this.houseCont.addChild(flower);
        }
        else if (i == 6) {
            var bird = this._bg.element({ "name": "house8_json.bird", "x": 320, "y": 205 });
            var lamp = this._bg.element({ "name": "house8_json.lamp", "x": 110, "y": 185 });
            this.houseCont.addChild(bird);
            this.houseCont.addChild(lamp);
        }
        else if (i == 7) {
            var tree = this._bg.element({ "name": "house8_json.tree", "x": 130, "y": 150 });
            this.houseCont.addChildAt(tree, 0);
        }
        else if (i == 8) {
            var house8 = this._bg.element({ "name": "house8_json.h8", "x": 250, "y": 160 });
            this.houseCont.removeChildren();
            this.houseCont.addChild(house8);
        }
    };
    HouseSwitch.prototype.house9 = function (i) {
        if (i == 1) {
            var house1 = this._bg.element({ "name": "house9_json.h1", "x": 260, "y": 185 });
            this.houseCont.addChild(house1);
        }
        else if (i == 2) {
            var house2 = this._bg.element({ "name": "house9_json.h2", "x": 260, "y": 185 });
            this.houseCont.removeChildAt(0);
            this.houseCont.addChildAt(house2, 0);
        }
        else if (i == 3) {
            var flowercar = this._bg.element({ "name": "house9_json.flowercar", "x": 405, "y": 245 });
            this.houseCont.addChild(flowercar);
        }
        else if (i == 4) {
            var bird = this._bg.element({ "name": "house9_json.bird", "x": 240, "y": 100 });
            this.houseCont.addChild(bird);
        }
        else if (i == 5) {
            var board = this._bg.element({ "name": "house9_json.board", "x": 280, "y": 290 });
            var grass = this._bg.element({ "name": "house9_json.grass", "x": 135, "y": 250 });
            this.houseCont.addChild(board);
            this.houseCont.addChildAt(grass, 0);
        }
        else if (i == 6) {
            var treasure = this._bg.element({ "name": "house9_json.treasure", "x": 180, "y": 240 });
            this.houseCont.addChild(treasure);
        }
        else if (i == 7) {
            var tree = this._bg.element({ "name": "house9_json.tree", "x": 250, "y": 230 });
            this.houseCont.addChildAt(tree, 0);
        }
        else if (i == 8) {
            var flower = this._bg.element({ "name": "house9_json.flower", "x": 200, "y": 320 });
            this.houseCont.addChild(flower);
        }
    };
    HouseSwitch.prototype.hLoss = function (landId, lossId) {
        this.loss1.x = this.lossLocation["l" + landId][0].x;
        this.loss1.y = this.lossLocation["l" + landId][0].y;
        this.loss2.x = this.lossLocation["l" + landId][1].x;
        this.loss2.y = this.lossLocation["l" + landId][1].y;
        this.loss3.x = this.lossLocation["l" + landId][2].x;
        this.loss3.y = this.lossLocation["l" + landId][2].y;
        this.loss4.x = this.lossLocation["l" + landId][3].x;
        this.loss4.y = this.lossLocation["l" + landId][3].y;
        this.loss5.x = this.lossLocation["l" + landId][4].x;
        this.loss5.y = this.lossLocation["l" + landId][4].y;
        if (this.lossCont && this.lossCont.parent) {
            this.lossCont.removeChildren();
            this.removeChild(this.lossCont);
        }
        this.addChild(this.lossCont);
        var hId = Number(lossId);
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
    };
    return HouseSwitch;
}(egret.Sprite));
__reflect(HouseSwitch.prototype, "HouseSwitch");
var Background = (function (_super) {
    __extends(Background, _super);
    function Background() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Background.prototype.onAddToStage = function (event) {
        //背景
        this.addChild(this.stage_bg({ "name": "bg_jpg", "width": 750 * 0.853, "height": 1334 * 0.853 }));
        //初始场景元素
        this.addChild(this.npc({ "name": "element_json.card", "x": 495, "y": 465 }));
        this.addChild(this.npc({ "name": "element_json.hospital", "x": 200, "y": 435 }));
        this.addChild(this.npc({ "name": "element_json.luck", "x": 476, "y": 795 }));
        this.addChild(this.npc({ "name": "element_json.badluck", "x": 85, "y": 750 }));
        this.addChild(this.npc({ "name": "element_json.bank", "x": 100, "y": 530 }));
    };
    /**
 * 场景元素通用函数
 */
    Background.prototype.npc = function (obj) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(obj.name);
        result.texture = texture;
        result.width = obj.width ? obj.width : result.width;
        result.height = obj.height ? obj.height : result.height;
        result.width = result.width * 0.853;
        result.height = result.height * 0.853;
        if (obj.name == "hero_json.c1") {
            result.anchorOffsetX = result.width / 5 + 10;
            result.anchorOffsetY = result.height - 1;
        }
        else {
            result.anchorOffsetX = result.width / 2;
            result.anchorOffsetY = result.height / 2;
        }
        result.x = obj.x;
        result.y = obj.y;
        return result;
    };
    Background.prototype.element = function (obj) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(obj.name);
        result.texture = texture;
        result.width = obj.width ? obj.width : result.width;
        result.height = obj.height ? obj.height : result.height;
        result.anchorOffsetX = result.width / 2;
        result.anchorOffsetY = result.height / 2;
        result.x = obj.x;
        result.y = obj.y;
        return result;
    };
    Background.prototype.oElement = function (obj) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(obj.name);
        result.texture = texture;
        result.width = obj.width ? obj.width : result.width;
        result.height = obj.height ? obj.height : result.height;
        result.x = obj.x;
        result.y = obj.y;
        return result;
    };
    /**
     *  新增文字通用函数
     */
    Background.prototype.addtxt = function (obj) {
        var result = new egret.TextField();
        result.text = obj.text;
        result.textColor = obj.color;
        result.size = obj.size ? obj.size : 20;
        result.x = obj.x;
        result.y = obj.y;
        result.fontFamily = "Microsoft YaHei";
        return result;
    };
    /**
     *  文字提示容器
     */
    Background.prototype.addpoint = function (obj) {
        var result = new egret.TextField();
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
    };
    /**
     *  场景主背景通用函数
     */
    Background.prototype.stage_bg = function (obj) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(obj.name);
        result.texture = texture;
        result.width = obj.width ? obj.width : result.width;
        result.height = obj.height ? obj.height : result.height;
        result.touchEnabled = true;
        result.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getLocation, this);
        return result;
    };
    Background.prototype.getLocation = function (e) {
        console.log(e.stageX, e.stageY);
    };
    //动图添加
    Background.prototype.moveGif = function (obj) {
        var jsonBtn = RES.getRes(obj.json);
        var img = RES.getRes(obj.img);
        var mcFactory = new egret.MovieClipDataFactory(jsonBtn, img);
        var mcGif = new egret.MovieClip(mcFactory.generateMovieClipData(obj.name));
        console.log(jsonBtn);
        mcGif.anchorOffsetX = mcGif.width / 2;
        mcGif.anchorOffsetY = mcGif.height / 2;
        mcGif.x = obj.x;
        mcGif.y = obj.y;
        mcGif.play(-1);
        return mcGif;
    };
    //获取时间
    Background.prototype.getDate = function () {
        var myDate = new Date();
        var year = myDate.getFullYear(); // 年
        var month = myDate.getMonth() + 1; // 月
        var day = myDate.getDate(); // 日
        var hour = myDate.getHours(); // 时
        var data = { year: year, month: month, day: day, hour: hour };
        return data;
    };
    //通用透明层
    Background.prototype.addAlphafun = function () {
        var newAlpha = new egret.Sprite();
        newAlpha.graphics.beginFill(0x000000, 0.3);
        newAlpha.graphics.drawRect(0, 0, 640, 1138);
        newAlpha.graphics.endFill();
        return newAlpha;
    };
    return Background;
}(egret.DisplayObjectContainer));
__reflect(Background.prototype, "Background");
var Card = (function (_super) {
    __extends(Card, _super);
    function Card() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Card.prototype.onAddToStage = function (event) {
        this._bg = new Background();
    };
    Card.prototype.front = function (name) {
        var cardFront = this._bg.element({ "name": "card_json." + name + "Front", "x": 90, "y": 110 });
        return cardFront;
    };
    Card.prototype.cardText = function (name) {
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
    };
    Card.prototype.back = function (name) {
        var cardCont = new egret.Sprite();
        cardCont.x = 320;
        cardCont.y = 550;
        cardCont.width = 180;
        cardCont.height = 220;
        cardCont.anchorOffsetX = cardCont.width / 2;
        cardCont.anchorOffsetY = cardCont.height / 2;
        var cardFrame = this._bg.element({ "name": "card_json." + name + "Back", "x": 90, "y": 110 });
        cardCont.addChild(cardFrame);
        var cardBack = new egret.Sprite();
        cardBack.x = cardCont.width / 2;
        cardBack.y = cardCont.height / 2;
        cardBack.width = 140;
        cardBack.height = 170;
        cardBack.anchorOffsetX = cardBack.width / 2;
        cardBack.anchorOffsetY = cardBack.height / 2;
        var textArr = this.cardText(name);
        var cardFunTitle = this._bg.addtxt({ "text": textArr[0], "x": 0, "y": 0, "color": "0xdddddd", "size": 20 });
        cardFunTitle.bold = true;
        var cardFun = this._bg.addtxt({ "text": textArr[1], "x": 0, "y": 30, "color": "0xdddddd", "size": 18 });
        cardFun.width = 140;
        cardFun.lineSpacing = 3;
        cardFun.bold = true;
        var cardHarmTitle = this._bg.addtxt({ "text": textArr[2], "x": 0, "y": 100, "color": "0xdddddd", "size": 22 });
        cardHarmTitle.bold = true;
        var cardHarm = this._bg.addtxt({ "text": textArr[3], "x": 0, "y": 130, "color": "0xdddddd", "size": 18 });
        cardHarm.width = 140;
        cardHarm.lineSpacing = 3;
        cardHarm.bold = true;
        cardBack.addChild(cardFunTitle);
        cardBack.addChild(cardFun);
        cardBack.addChild(cardHarmTitle);
        cardBack.addChild(cardHarm);
        cardCont.addChild(cardBack);
        return cardCont;
    };
    return Card;
}(egret.Sprite));
__reflect(Card.prototype, "Card");
var CardCenter = (function (_super) {
    __extends(CardCenter, _super);
    function CardCenter(money, moneyCont) {
        var _this = _super.call(this) || this;
        _this.goldNum = money;
        _this.goldCont = moneyCont;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    CardCenter.prototype.onAddToStage = function (event) {
        this._bg = new Background();
        this.common();
    };
    CardCenter.prototype.common = function () {
        // 弹框总容器，加一层透明黑色底层
        var CardBaseCont = new egret.Sprite();
        this.addChild(CardBaseCont);
        CardBaseCont.graphics.beginFill(0x000000, 0.6);
        CardBaseCont.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
        CardBaseCont.graphics.endFill();
        CardBaseCont.touchEnabled = true;
        CardBaseCont.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { }, this);
        // 弹框显示容器
        this.cardCont = new egret.Sprite();
        this.cardCont.width = this.stage.width;
        this.cardCont.height = this.stage.height;
        this.cardCont.anchorOffsetX = this.stage.width / 2;
        this.cardCont.anchorOffsetY = this.stage.height / 2;
        CardBaseCont.addChild(this.cardCont);
        // 动态出现
        this.cardCont.scaleX = 0.3;
        this.cardCont.scaleY = 0.3;
        this.cardCont.x = 495;
        this.cardCont.y = 465;
        egret.Tween.get(this.cardCont).to({ scaleX: 1, scaleY: 1, x: this.stage.width / 2, y: 530 }, 500);
        // 关闭按钮
        CardCenter.close = this._bg.element({ "name": "cardCenter_json.close", "x": this.stage.width / 2 - 10, "y": 970 });
        this.cardCont.addChild(CardCenter.close);
        // 卡券中心外框
        var cardFrame = this._bg.element({ "name": "cardbg_png", "x": this.stage.width / 2 - 20, "y": 550 });
        this.cardCont.addChild(cardFrame);
        // 滚动条
        var scroll = new egret.Sprite();
        scroll.x = 560;
        scroll.y = 450;
        scroll.width = 10;
        scroll.height = 500;
        this.cardCont.addChild(scroll);
        // 滚动条底层
        var scrollBase = this._bg.oElement({ "name": "rank_json.scroll", "height": 440, "x": 0, "y": -20 });
        scroll.addChild(scrollBase);
        // 滚动条
        var scrollHandle = this._bg.oElement({ "name": "rank_json.handle", "width": 9, "height": 400, "x": 0, "y": 0 });
        scrollHandle.scale9Grid = new egret.Rectangle(3, 3, 1, 40);
        // 卡券元素滚动容器
        this.elScroll = this.elScrollCont();
        // 卡券滚动区域
        var worldScrollView = this.scorllView(this.elScroll, scrollHandle);
        this.cardCont.addChild(worldScrollView);
        // 获取卡券数据，添加滚动条
        this.getData(this.elScroll, scrollHandle);
        scroll.addChild(scrollHandle);
    };
    // 滚动区域
    CardCenter.prototype.scorllView = function (object, handle) {
        var view = new egret.ScrollView();
        view.width = 465;
        view.height = 550;
        view.x = 80;
        view.y = 320;
        view.horizontalScrollPolicy = "off";
        view.setContent(object);
        // 通过监听滚动实现滚动条的滚动
        view.addEventListener(egret.Event.CHANGE, function () {
            if (view.scrollTop <= 0) {
                handle.y = 0;
            }
            else if (view.scrollTop >= view.getMaxScrollTop()) {
                handle.y = 400 * view.getMaxScrollTop() / object.height;
            }
            else {
                handle.y = 400 * view.scrollTop / object.height;
            }
        }, this);
        return view;
    };
    // 滚动视图容器
    CardCenter.prototype.elScrollCont = function () {
        var elContainer = new egret.Sprite();
        elContainer.x = 0;
        elContainer.y = 0;
        elContainer.graphics.beginFill(0x00ffff, 0);
        elContainer.graphics.drawRect(0, 0, 465, 550);
        elContainer.graphics.endFill();
        return elContainer;
    };
    // 获取卡券信息，并设置滚动条
    CardCenter.prototype.getData = function (container, handle) {
        this.element({ y: 0, cardName: "attack", cardTitle: "攻击卡", price: "1000000" });
        this.element({ y: 140, cardName: "defense", cardTitle: "防御卡", price: "1000000" });
        this.element({ y: 280, cardName: "interest", cardTitle: "利息翻倍卡", price: "1500000" });
        this.element({ y: 420, cardName: "upgrade", cardTitle: "房屋升级卡", price: "40000000" });
        this.element({ y: 560, cardName: "rock", cardTitle: "陨石卡", price: "100000000" });
        this.element({ y: 700, cardName: "earth", cardTitle: "地震卡", price: "800000000" });
        this.element({ y: 840, cardName: "save", cardTitle: "普渡众生卡", price: "800000000" });
        egret.Tween.get(handle).to({ height: 400 * 550 / container.height }, 200);
    };
    CardCenter.prototype.element = function (obj) {
        // 参数的格式
        // obj = {
        //   y：y,
        //   cardName: "卡券名称",
        //   cardTitle: "卡券中文名称",
        //   price: price
        // }
        var _this = this;
        var cardEl = new egret.Sprite();
        cardEl.x = 0;
        cardEl.y = obj.y;
        cardEl.graphics.beginFill(0x000000, 0);
        cardEl.graphics.drawRect(0, 0, 465, 140);
        cardEl.graphics.endFill();
        this.elScroll.addChild(cardEl);
        // 外框
        var elframe = this._bg.oElement({ "name": "cardCenter_json.base", "x": 0, "y": 0 });
        cardEl.addChild(elframe);
        // 卡片
        var cardImg = this._bg.element({ "name": "cardCenter_json." + obj.cardName, "x": 80, "y": 65 });
        cardEl.addChild(cardImg);
        cardImg.touchEnabled = true;
        cardImg.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            // 卡券音效
            switch (obj.cardName) {
                case "earth":
                    if (Sound.soundOpen) {
                        Sound.earthSound.play(0, 1);
                    }
                    break;
                case "save":
                    if (Sound.soundOpen) {
                        Sound.saveSound.play(0, 1);
                    }
                    break;
                case "rock":
                    if (Sound.soundOpen) {
                        Sound.rockSound.play(0, 1);
                    }
                    break;
                case "upgrade":
                    if (Sound.soundOpen) {
                        Sound.upgradeSound.play(0, 1);
                    }
                    break;
                case "attack":
                    if (Sound.soundOpen) {
                        Sound.attackSound.play(0, 1);
                    }
                    break;
                case "defense":
                    if (Sound.soundOpen) {
                        Sound.defenseSound.play(0, 1);
                    }
                    break;
                case "interest":
                    if (Sound.soundOpen) {
                        Sound.interestSound.play(0, 1);
                    }
                    break;
                default:
                    if (Sound.soundOpen) {
                        Sound.cancelSound.play(0, 1);
                    }
                    break;
            }
            var _cardCont = new egret.Sprite();
            _cardCont.graphics.beginFill(0x000000, 0.6);
            _cardCont.graphics.drawRect(0, 0, _this.stage.width, _this.stage.height);
            _cardCont.graphics.endFill();
            _cardCont.touchEnabled = true;
            _cardCont.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                // 取消音效
                if (Sound.soundOpen) {
                    Sound.cancelSound.play(0, 1);
                }
                _cardCont.removeChildren();
                _this.cardCont.removeChild(_cardCont);
            }, _this);
            _this.cardCont.addChild(_cardCont);
            var _card = new Card();
            _cardCont.addChild(_card);
            var cardFront = _card.front(obj.cardName);
            _card.addChild(cardFront);
            var cardBack = _card.back(obj.cardName);
            egret.Tween.get(cardFront).to({ scaleX: 0.1, scaleY: 0.1, x: e.stageX, y: e.stageY }, 1).to({ scaleX: 1.5, scaleY: 1.5, x: 320, y: 550, rotation: 720 }, 800);
            _card.addChild(cardBack);
            egret.Tween.get(cardBack).to({ scaleX: 0.1, scaleY: 0.1, x: e.stageX, y: e.stageY, alpha: 0 }, 1).to({ scaleX: 1, scaleY: 1, x: 320, y: 550, rotation: 720, alpha: 1 }, 800);
        }, this);
        // 卡片名称
        var cardName = this._bg.addtxt({ "text": obj.cardTitle, "x": 147, "y": 30, "color": "0xffffff", "size": 24 });
        cardName.strokeColor = 0x3A230A;
        cardName.stroke = 2;
        cardEl.addChild(cardName);
        // 价格
        var priceCont = new egret.Sprite();
        priceCont.x = 145;
        priceCont.y = 60;
        priceCont.width = 140;
        priceCont.height = 40;
        cardEl.addChild(priceCont);
        var coin = this._bg.element({ "name": "cardCenter_json.coin", "x": 11, "y": 20 });
        coin.scaleX = 1.2;
        coin.scaleY = 1.2;
        priceCont.addChild(coin);
        var price = this._bg.addtxt({ "text": obj.price, "x": 27, "y": 10, "color": "0xffffff", "size": 22 });
        price.strokeColor = 0x157505;
        price.stroke = 2;
        priceCont.addChild(price);
        // 购买
        var buyBtn = this._bg.element({ "name": "cardCenter_json.buyBtn", "x": 380, "y": 60 });
        cardEl.addChild(buyBtn);
        var buyTxt = this._bg.addtxt({ "text": "购买", "x": 357, "y": 47, "color": "0xffffff", "size": 24 });
        buyTxt.bold = true;
        buyTxt.strokeColor = 0x157505;
        buyTxt.stroke = 2;
        cardEl.addChild(buyTxt);
        buyBtn.touchEnabled = true;
        buyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            if (_this.goldNum >= obj.price) {
                // 购买卡券成功音效
                if (Sound.soundOpen) {
                    Sound.buyCardSound.play(0, 1);
                }
                var cardBuyCont_1 = new egret.Sprite();
                cardBuyCont_1.graphics.beginFill(0x000000, 0);
                cardBuyCont_1.graphics.drawRect(0, 0, _this.stage.width, _this.stage.height);
                cardBuyCont_1.graphics.endFill();
                cardBuyCont_1.touchEnabled = true;
                cardBuyCont_1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { }, _this);
                _this.addChild(cardBuyCont_1);
                var _card = new Card();
                cardBuyCont_1.addChild(_card);
                var cardFront = _card.front(obj.cardName);
                _card.addChild(cardFront);
                egret.Tween.get(cardFront).to({ scaleX: 0.1, scaleY: 0.1, x: e.stageX - 300, y: e.stageY }, 1).to({ scaleX: 0.5, scaleY: 0.5, x: e.stageX - 160, y: e.stageY - 150 }, 300).to({ scaleX: 0.1, scaleY: 0.1, x: 545, y: 1047, alpha: 0.3 }, 600).call(function () {
                    cardBuyCont_1.removeChildren();
                    cardBuyCont_1.parent.removeChild(cardBuyCont_1);
                });
                // 改变卡片数量并存储
                var oldNum = egret.localStorage.getItem(obj.cardName + "_card");
                var newNum = Number(oldNum) + 1;
                egret.localStorage.setItem(obj.cardName + "_card", newNum.toString());
                // 改变金币数并存储
                _this.goldNum -= obj.price;
                _this.goldCont.text = Math.floor(_this.goldNum / 1000) + "k";
                egret.localStorage.setItem("money", _this.goldNum.toString());
            }
            else {
                // 资金不足提示音效
                if (Sound.soundOpen) {
                    Sound.wrongTipSound.play(0, 1);
                }
                var _modal = new Modal();
                _this.addChild(_modal);
                _modal.smallTip("资金不足！");
            }
        }, this);
    };
    return CardCenter;
}(egret.Sprite));
__reflect(CardCenter.prototype, "CardCenter");
var Day = (function (_super) {
    __extends(Day, _super);
    function Day() {
        var _this = _super.call(this) || this;
        _this._gameStatus = false;
        //设置动画的移动速度
        _this.speed = 0.5;
        _this._touchStatus = false; //当前触摸状态，按下时，值为true
        _this._distance = new egret.Point(); //鼠标点击时，鼠标全局坐标与移动对象的位置差
        // 模态框———————————↓↓
        _this.modal = new Modal();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Day.prototype.onAddToStage = function () {
        this._bg = new Background();
        this.addChild(this._bg.stage_bg({ "name": "daybg_png", "width": this.stage.stageWidth, "height": this.stage.stageHeight }));
        // 福袋
        if (egret.localStorage.getItem("luckBag")) {
            this.luckybagNum = Number(egret.localStorage.getItem("luckBag"));
        }
        else {
            this.luckybagNum = 0;
        }
        // 初始化游戏
        this.gameInit();
    };
    // 游戏逻辑—————————————————————↓↓
    // 游戏初始化
    Day.prototype.gameInit = function () {
        this._gameStatus = false;
        // 返回按钮
        this.back();
        // 初始金币数和初始时间
        this.dayScore();
        // 箱子
        this.goldBox();
        // 游戏开始按钮
        this.start();
        this.i = 0;
    };
    // 点击开始游戏按钮
    Day.prototype.gameStart = function () {
        this.removeChild(this.startPart);
        if (this.second <= 0) {
            if (Sound.soundOpen) {
                Sound.wrongTipSound.play(0, 1);
            }
            this.showShareModal();
            this.shareModalEvent();
        }
        else {
            if (Sound.soundOpen) {
                Sound.dayStartSound.play(0, 1);
            }
            this._gameStatus = true;
            this.dayTime();
            this.showGold();
            this.boxEvent();
        }
    };
    // 游戏重新开始
    Day.prototype.gameRestart = function () {
        this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backToGame, this);
        if (this.goldPart && this.goldPart.parent) {
            this.goldPart.parent.removeChild(this.goldPart);
        }
        this.addChild(this.startPart);
    };
    // 游戏暂停
    Day.prototype.gamePause = function () {
        this.boxCancelEvent();
        this._gameStatus = false;
        this.secondTimer.stop();
        this.goldTimer.stop();
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    // 游戏继续
    Day.prototype.gameContinue = function () {
        this.boxEvent();
        this._gameStatus = true;
        this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backToGame, this);
        this.secondTimer.start();
        this.goldTimer.start();
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    // 退出游戏
    Day.prototype.gameQuit = function () {
        this.boxCancelEvent();
        this._gameStatus = false;
        egret.localStorage.setItem("daySecond", this.second.toString());
        egret.localStorage.setItem("money", this.goldNum.toString());
        Newscenes.getInstance().changeScene('Game');
    };
    // 游戏结束
    Day.prototype.gameOver = function () {
        this._gameStatus = false;
        this.boxRest();
        this.goldTimer.stop();
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    // 金币层的容器
    Day.prototype.showGold = function () {
        this.goldArray = [];
        this.goldCount = 0;
        this.goldPart = new egret.Sprite();
        this.addChild(this.goldPart);
        this.goldTimer = new egret.Timer(100, 0);
        this.goldTimer.addEventListener(egret.TimerEvent.TIMER, this.goldTimerFunc, this);
        this.goldTimer.start();
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    // 生成元素的计时器函数
    Day.prototype.goldTimerFunc = function () {
        this.goldCount++;
        if (this.goldCount % 100 == 0) {
            this.goldCont("luckyBag");
        }
        else if (this.goldCount % 40 == 0) {
            this.goldCont("boom");
        }
        else if (this.goldCount % 5 == 0) {
            this.goldCont("gold");
        }
    };
    Day.prototype.elCont = function () {
        var randomX = Math.ceil(Math.random() * (this.stage.width - 200) + 50);
        this.elContainer = new egret.Sprite();
        this.elContainer.width = 60;
        this.elContainer.height = 100;
        this.elContainer.y = 0;
        this.elContainer.x = randomX;
        this.goldPart.addChild(this.elContainer);
    };
    // 生成元素（金币数量 + 元素图片）
    Day.prototype.goldCont = function (el) {
        this.elCont();
        var eltext = new egret.TextField();
        eltext.text = el;
        eltext.visible = false;
        if (el == "gold") {
            var random1 = Math.ceil(Math.random() * 11);
            // 金币数
            var goldContNum = this._bg.addtxt({ "text": "+" + random1 * 888, "x": 0, "y": 0, "color": "0xFFFF00", "size": 22 });
            // 金币图片
            var gold = this._bg.element({ "name": "day_json.gold" + random1, "x": 30, "y": goldContNum.height + 20 });
            gold.y = goldContNum.height + gold.height / 2 + 10;
            this.elContainer.addChild(eltext);
            this.elContainer.addChild(goldContNum);
            this.elContainer.addChild(gold);
        }
        else if (el == "boom") {
            var random2 = Math.ceil(Math.random() * 2);
            // 金币数
            var boomContNum = this._bg.addtxt({ "text": "-" + random2 * 666, "x": 0, "y": 0, "color": "0x2B2B34", "size": 22 });
            // 炸弹图片
            var boomImg = this._bg.element({ "name": "day_json.boom" + random2, "x": 30, "y": boomContNum.height + 20 });
            boomImg.y = boomContNum.height + boomImg.height / 2 + 10;
            this.elContainer.addChild(eltext);
            this.elContainer.addChild(boomContNum);
            this.elContainer.addChild(boomImg);
        }
        else if (el == "luckyBag") {
            // 福袋图片
            var luckyBag = this._bg.element({ "name": "day_json.luckyBag", "x": 30, "y": 0 });
            luckyBag.y = luckyBag.height / 2;
            this.elContainer.addChild(eltext);
            this.elContainer.addChild(luckyBag);
        }
        this.goldArray.push(this.elContainer);
    };
    // 每一帧的动画，改变每个金币的 y 坐标。并判断是否落入箱子中
    Day.prototype.onEnterFrame = function (e) {
        for (var i = 0; i < this.goldArray.length; i++) {
            // let rnd = Math.random()*10+10;
            this.goldArray[i].y += this.speed * 15;
            var hitX = this.goldArray[i].x + this.goldArray[i].width / 2;
            var hitY = this.goldArray[i].y + this.goldArray[i].height - 30;
            if (this.hitZone.hitTestPoint(hitX, hitY)) {
                var elStr = this.goldArray[i].getChildAt(0).text;
                if (elStr == "luckyBag") {
                    this.luckybagNum++;
                    egret.localStorage.setItem("luckBag", this.luckybagNum.toString());
                    if (Sound.soundOpen) {
                        Sound.getLuckyBagSound.play(0, 1);
                    }
                }
                else {
                    var goldHitNum = Number(this.goldArray[i].getChildAt(1).text.slice(1));
                    if (elStr == "gold") {
                        this.goldNum += goldHitNum;
                        if (Sound.soundOpen) {
                            Sound.coinSound.play(0, 1);
                        }
                    }
                    else {
                        if (Sound.soundOpen) {
                            Sound.dayBombSound.play(0, 1);
                        }
                        this.goldNum -= goldHitNum;
                    }
                    this.goldText.text = Math.floor(this.goldNum / 1000) + "k";
                    // egret.localStorage.setItem("money", this.goldNum.toString());
                }
                this.goldPart.removeChild(this.goldArray[i]);
                this.goldArray.splice(i, 1);
            }
            else if (this.goldArray[i].y > this.stage.height - 110) {
                this.goldPart.removeChild(this.goldArray[i]);
                this.goldArray.splice(i, 1);
            }
        }
    };
    Day.prototype.dayTime = function () {
        this.count = 0;
        this.secondTimer = new egret.Timer(100, 10 * this.second);
        this.secondTimer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.secondTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        this.secondTimer.start();
    };
    // 改变秒数
    Day.prototype.timerFunc = function () {
        this.count++;
        if (this.count % 10 == 0) {
            this.second--;
            if (this.second <= 0) {
                this.second = 0;
            }
        }
        this.timeText.text = this.second + " s";
        // egret.localStorage.setItem("daySecond", this.second.toString());
    };
    // 时间到，弹出分享框。
    Day.prototype.timerComFunc = function () {
        this.gameOver();
        this.showShareModal();
        this.shareModalEvent();
    };
    Day.prototype.start = function () {
        this.startPart = new egret.Sprite();
        this.addChild(this.startPart);
        this.startGold = this._bg.element({ "name": "day_json.start", "x": 332, "y": 543 });
        this.startPart.addChild(this.startGold);
        var startBtn = RES.getRes("daystart_json");
        var txtr = RES.getRes("daystart_png");
        var mcFactory = new egret.MovieClipDataFactory(startBtn, txtr);
        this.mcStart = new egret.MovieClip(mcFactory.generateMovieClipData("start"));
        this.mcStart.anchorOffsetX = this.mcStart.width / 2;
        this.mcStart.anchorOffsetY = this.mcStart.height / 2;
        this.mcStart.x = 325;
        this.mcStart.y = 515;
        this.startPart.addChild(this.mcStart);
        this.mcStart.play(-1);
        this.mcStart.touchEnabled = true;
        this.mcStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.gameStart, this);
    };
    Day.prototype.back = function () {
        // 添加返回按钮
        this.backBtn = this._bg.element({ "name": "day_json.dayback", "x": 50, "y": 60 });
        this.addChild(this.backBtn);
        // 给返回按钮添加点击事件
        this.backBtn.touchEnabled = true;
        this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backToGame, this);
    };
    // 返回事件
    Day.prototype.backToGame = function () {
        if (this._gameStatus) {
            if (this.second > 0) {
                if (Sound.soundOpen) {
                    Sound.tipSound.play(0, 1);
                }
                this.gamePause();
                this.showBackModal(this.second);
                this.backModalEvent();
            }
            else {
                this.gameQuit();
            }
        }
        else {
            if (this.modal && this.modal.parent) {
                this.backBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.backToGame, this);
            }
            else {
                // 返回音效
                if (Sound.soundOpen) {
                    Sound.backSound.play(0, 1);
                }
                this.gameQuit();
            }
        }
    };
    Day.prototype.goldBox = function () {
        // 添加箱子图片
        this.box = new egret.Sprite();
        var boxImg = this._bg.element({ "name": "day_json.box", "x": 150, "y": 106 });
        this.box.width = 300;
        this.box.height = 212;
        this.box.x = 320;
        this.box.y = 990;
        this.box.anchorOffsetX = this.box.width / 2;
        this.box.anchorOffsetY = this.box.height / 2;
        this.box.addChild(boxImg);
        this.addChild(this.box);
        // 箱子与金币碰撞区域
        this.hitZone = new egret.Sprite();
        this.hitZone.graphics.beginFill(0x000000, 0);
        this.hitZone.graphics.drawRect(70, 100, 130, 40);
        this.hitZone.graphics.endFill();
        this.box.addChild(this.hitZone);
    };
    // 添加箱子移动事件
    Day.prototype.boxEvent = function () {
        this.box.touchEnabled = true;
        this.box.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
    };
    // 取消箱子移动事件
    Day.prototype.boxCancelEvent = function () {
        this.box.touchEnabled = false;
        this.box.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
    };
    // 箱子复位
    Day.prototype.boxRest = function () {
        this.boxCancelEvent();
        egret.Tween.get(this.box).to({ x: 320 }, 200);
    };
    Day.prototype.mouseDown = function (evt) {
        evt.preventDefault();
        this._touchStatus = true;
        this._distance.x = evt.stageX - this.box.x;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    Day.prototype.mouseMove = function (evt) {
        evt.preventDefault();
        if (this._touchStatus) {
            this.box.x = evt.stageX - this._distance.x;
            if (this.box.x <= 60) {
                this.box.x = 60;
            }
            else if (this.box.x >= 600) {
                this.box.x = 600;
            }
        }
    };
    Day.prototype.mouseUp = function (evt) {
        evt.preventDefault();
        this._touchStatus = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    // 箱子移动事件————————————————————————————↑↑
    // 初始金币数和初始时间
    Day.prototype.dayScore = function () {
        var gold = new egret.Sprite();
        gold.width = 170;
        gold.height = 285;
        gold.x = 470;
        gold.y = 65;
        this.addChild(gold);
        // 添加金币框
        var goldFrame = this._bg.element({ "name": "day_json.dayscore", "x": 87, "y": 44 });
        gold.addChild(goldFrame);
        // 添加金币数
        if (egret.localStorage.getItem("money")) {
            this.goldNum = Number(egret.localStorage.getItem("money"));
        }
        this.goldText = this._bg.addtxt({ "text": Math.floor(this.goldNum / 1000) + "k", "color": "0x610C1e", "x": 63, "y": 35 });
        gold.addChild(this.goldText);
        // 添加时间
        if (egret.localStorage.getItem("curDate")) {
            var curDate = egret.localStorage.getItem("curDate");
            if (egret.localStorage.getItem("gameDate")) {
                var gameDate = egret.localStorage.getItem("gameDate");
                var curArr = curDate.split("-");
                var gameArr = gameDate.split("-");
                if (Number(curArr[0]) > Number(gameArr[0])) {
                    this.second = 60;
                }
                else if (Number(curArr[1]) > Number(gameArr[1])) {
                    this.second = 60;
                }
                else if (Number(curArr[2]) > Number(gameArr[2])) {
                    this.second = 60;
                }
                else {
                    if (egret.localStorage.getItem("daySecond")) {
                        this.second = Number(egret.localStorage.getItem("daySecond"));
                    }
                    else {
                        this.second = 60;
                    }
                }
            }
            else {
                this.second = 60;
            }
            egret.localStorage.setItem("gameDate", curDate);
        }
        else {
            this.second = 30;
        }
        this.timeText = this._bg.addtxt({ "text": this.second + " s", "color": "0xEDE0E3", "x": 45, "y": 100, "size": 46 });
        this.timeText.bold = true;
        gold.addChild(this.timeText);
    };
    // 显示分享模态框
    Day.prototype.showShareModal = function () {
        if (Sound.soundOpen) {
            Sound.tipSound.play(0, 1);
        }
        this.addChild(this.modal);
        this.modal.dayModal();
    };
    // 模态框不可见
    Day.prototype.removeModal = function () {
        this.modal.removeChildren();
        this.removeChild(this.modal);
    };
    // 分享模态框事件
    Day.prototype.shareModalEvent = function () {
        var close = Modal.btnCont.getChildAt(0);
        var cancel = Modal.btnCont.getChildAt(1);
        var share = Modal.btnCont.getChildAt(2);
        // 点击关闭，出现开始游戏。
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeShare, this);
        // 点击取消，出现开始游戏。
        cancel.touchEnabled = true;
        cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeShare, this);
        // 点击分享
        share.touchEnabled = true;
        share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shareClick, this);
    };
    // 点击取消和关闭分享模态框
    Day.prototype.closeShare = function () {
        if (Sound.soundOpen) {
            Sound.cancelSound.play(0, 1);
        }
        this.removeModal();
        this.gameRestart();
    };
    // 分享
    Day.prototype.shareClick = function () {
        if (Sound.soundOpen) {
            Sound.cancelSound.play(0, 1);
        }
        this.removeModal();
        wx.shareAppMessage({
            title: "来呀~造作呀~",
            imageUrl: "https://dfw.hebzycw.com/resource/assets/share1.png",
            query: ""
        });
        this.gameRestart();
    };
    // 显示返回主游戏模态框
    Day.prototype.showBackModal = function (second) {
        this.addChild(this.modal);
        this.modal.dayBack(second);
    };
    // 返回模态框事件
    Day.prototype.backModalEvent = function () {
        var close = Modal.btnCont.getChildAt(0);
        var cancel = Modal.btnCont.getChildAt(1);
        var sure = Modal.btnCont.getChildAt(2);
        // 点击关闭，游戏继续。
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeBack, this);
        // 点击取消，游戏继续。
        cancel.touchEnabled = true;
        cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeBack, this);
        // 点击确定 退出游戏
        sure.touchEnabled = true;
        sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sureClick, this);
    };
    // 关闭模态框
    Day.prototype.closeBack = function () {
        if (Sound.soundOpen) {
            Sound.cancelSound.play(0, 1);
        }
        this.removeModal();
        this.gameContinue();
    };
    // 退出
    Day.prototype.sureClick = function () {
        if (Sound.soundOpen) {
            Sound.backSound.play(0, 1);
        }
        this.removeModal();
        this.gameQuit();
    };
    return Day;
}(egret.DisplayObjectContainer));
__reflect(Day.prototype, "Day");
var FriendHouse = (function (_super) {
    __extends(FriendHouse, _super);
    function FriendHouse() {
        var _this = _super.call(this) || this;
        _this.modal = new Modal();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    FriendHouse.prototype.onAddToStage = function (event) {
        //好友房屋的信息
        this.friendInfo = Global.randget();
        this.playerId = this.friendInfo.data.id;
        this.playerLandId = this.friendInfo.data.land;
        this.playerHouseId = this.friendInfo.data.house;
        this.playerHouseLoss = this.friendInfo.data.house_loss;
        this.playerDefe = this.friendInfo.data.defense;
        this.playerDefeTime = this.friendInfo.data.defense_time;
        //背景
        this._bg = new Background();
        this.addChild(this._bg.stage_bg({ "name": "houseBg_png", "width": this.stage.stageWidth, "height": this.stage.stageHeight }));
        // 标题
        var mhTitle = this._bg.element({ "name": "houseEl_json.fhtitle", "x": this.stage.stageWidth / 2, "y": 60 });
        this.addChild(mhTitle);
        // 好友房屋
        this.fHouse = new HouseSwitch();
        this.addChild(this.fHouse);
        this.fHouse.house(this.playerLandId, this.playerHouseId);
        this.fHouse.hLoss(this.playerLandId, this.playerHouseLoss);
        Global.fHouse = this.fHouse;
        this.addChild(this.fHouse);
        //防御卡效果
        this.defenseUse = this._bg.element({ "name": "cardUse_json.defense", width: 620, height: 530, "x": 320, "y": 540 });
        this.addChild(this.defenseUse);
        var ctime = new Date().getTime(); //当天的时间戳
        var defeTime = ctime - Number(this.playerDefeTime);
        if (this.playerDefe == 1 && defeTime > 0 && defeTime <= 86400000) {
            this.defenseUse.alpha = 1;
        }
        else {
            this.defenseUse.alpha = 0;
        }
        // 房屋信息
        var fhMessage = new egret.Sprite();
        fhMessage.x = 430;
        fhMessage.y = 170;
        fhMessage.width = 200;
        fhMessage.height = 200;
        this.addChild(fhMessage);
        var fhmframe = this._bg.element({ "name": "houseEl_json.fhmessage", "x": 100, "y": 100 });
        fhMessage.addChild(fhmframe);
        var gradeText = Global.landData[Number(this.playerLandId) - 1].landName + " / " + this.playerHouseId + " \u7EA7";
        var fhmhouse = this._bg.addtxt({ "text": "等级：" + gradeText, color: 0x3E0F00, x: 5, y: 130, size: 19 });
        fhMessage.addChild(fhmhouse);
        Global.friendlossNum = this.friendInfo.data.house_loss;
        this.fhmloss = this._bg.addtxt({ "text": "折损程度：" + Global.friendlossNum, color: 0x3E0F00, x: 5, y: 155, size: 19 });
        fhMessage.addChild(this.fhmloss);
        Global.friendHLoss = this.fhmloss;
        this.fhmneed = this._bg.addtxt({ "text": "\u6574\u4FEE\u6240\u9700\u91D1\u5E01\uFF1A" + Global.fixPrice[this.playerHouseLoss], color: 0x3E0F00, x: 5, y: 180, size: 19 });
        fhMessage.addChild(this.fhmneed);
        //设置攻击的各种动态效果
        this.addChild(Global.special);
        // 回家
        var goHome = this._bg.element({ "name": "houseEl_json.gohome", "x": 85, "y": 90 });
        this.addChild(goHome);
        goHome.touchEnabled = true;
        goHome.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backToHome, this);
        // 帮好友整修
        this.helpfriend = this._bg.element({ "name": "houseEl_json.helpfriend", "x": 200, "y": 950 });
        this.addChild(this.helpfriend);
        this.helpfriend.touchEnabled = true;
        this.helpfriend.addEventListener(egret.TouchEvent.TOUCH_TAP, this.friendFix, this);
        // 整修特效图片
        this.fixLeft = this._bg.oElement({ "name": "houseFix_json.left", "width": 642, "x": -600, "y": 350 });
        this.fixRight = this._bg.oElement({ "name": "houseFix_json.right", "x": 640, "y": 350 });
        // 破坏好友房屋
        this.destroy = this._bg.element({ "name": "houseEl_json.destroy", "x": 450, "y": 950 });
        this.addChild(this.destroy);
        var aegis = this._bg.addpoint({ "text": "", "color": "0xFFFFFF", "y": 148, "size": 22 });
        this.destroy.touchEnabled = true;
        this.destroy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.destroyfun, this);
        if (Number(this.playerId) == Number(egret.localStorage.getItem("userId"))) {
            this.removeChild(this.helpfriend);
            this.removeChild(this.destroy);
        }
        //金币数
        var goldFrame = this._bg.element({ "name": "day_json.dayscore", "x": 557, "y": 110 });
        this.addChild(goldFrame);
        if (egret.localStorage.getItem("money")) {
            this.goldNum = Number(egret.localStorage.getItem("money"));
        }
        this.goldText = this._bg.addtxt({ "text": Math.floor(this.goldNum / 1000) + "k", "color": "0x610C1e", "x": 537, "y": 100 });
        this.addChild(this.goldText);
        //通知
        this.noticBg = this.modal.noticBg({ y: 148, width: 640, height: 40, ap: 0.3 });
        this.notic = this._bg.addpoint({ "text": " ", "color": "0xFFFFFF", x: 10, "y": 160, "size": 22 });
        this.noticBg.addChild(this.notic);
        this.noticBg.alpha = 0;
        this.addChild(this.noticBg);
    };
    //折损满级提醒
    FriendHouse.prototype.aegisFun = function () {
        this.noticBg.alpha = 1;
        this.destroy.touchEnabled = false;
        this.notic.text = "通知：该玩家已被打残，进入系统保护阶段不可被攻击！";
        egret.Tween.get(this.notic).to({ x: 640, y: 160 }, 1).to({ x: 0, y: 160 }, 12000);
        egret.setTimeout(function () {
            this.notic.text = '';
            this.noticBg.alpha = 0;
            this.destroy.touchEnabled = true;
        }, this, 20000);
    };
    // 整修好友房屋
    FriendHouse.prototype.friendFix = function () {
        var fixPrice = Global.fixPrice[Global.friendlossNum];
        if (Global.friendlossNum == 0) {
            if (Sound.soundOpen) {
                Sound.tipSound.play(0, 1);
            }
            this.addChild(this.modal);
            this.modal.tip("\u5F53\u524D\u623F\u5C4B\u6EE1\u7EA7\uFF0C\u4E0D\u9700\u8981\u6574\u4FEE\uFF01");
        }
        else if (this.goldNum >= fixPrice) {
            if (Sound.soundOpen) {
                Sound.tipSound.play(0, 1);
            }
            this.helpFixModal(fixPrice);
        }
        else {
            if (Sound.soundOpen) {
                Sound.wrongTipSound.play(0, 1);
            }
            this.goGameModal(fixPrice);
        }
    };
    // 房屋整修特效
    FriendHouse.prototype.fixEffectes = function () {
        this.addChild(this.fixLeft);
        this.fixLeft.alpha = 0;
        this.addChild(this.fixRight);
        this.fixRight.alpha = 0;
        this.fixLeft.touchEnabled = true;
        this.fixRight.touchEnabled = true;
    };
    // 整修模态框
    FriendHouse.prototype.helpFixModal = function (fixPrice) {
        var _this = this;
        this.addChild(this.modal);
        this.modal.helpFriendFix(fixPrice);
        var close = Modal.btnCont.getChildAt(0);
        var cancel = Modal.btnCont.getChildAt(1);
        var sure = Modal.btnCont.getChildAt(2);
        // 点击关闭。
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeModal, this);
        // 点击取消
        cancel.touchEnabled = true;
        cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeModal, this);
        // 点击确定。
        sure.touchEnabled = true;
        sure.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (Sound.soundOpen) {
                Sound.luckySound.play(0, 1);
            }
            Global.friendlossNum = 0;
            _this.destroy.touchEnabled = true;
            _this.notic.text = '';
            _this.noticBg.alpha = 0;
            //发送websocket给好友
            _this.websocketAttack("help");
            _this.closeModal();
            // 整修房屋特效
            _this.fixEffectes();
            egret.Tween.get(_this.fixLeft).to({ x: -100, y: 350, alpha: 1 }, 500).wait(500).to({ x: -600, y: 350, alpha: 0 }, 500);
            egret.Tween.get(_this.fixRight).to({ x: 100, y: 350, alpha: 1 }, 500).call(function () {
                this.fHouse.hLoss(this.playerLandId, 0);
            }, _this).wait(500).to({ x: 640, y: 350, alpha: 0 }, 500).call(function () {
                this.removeChild(this.fixLeft);
                this.removeChild(this.fixRight);
            }, _this);
            // 改变金币并存储
            _this.goldNum -= fixPrice;
            _this.goldText.text = Math.floor(_this.goldNum / 1000) + "k";
            egret.localStorage.setItem("money", _this.goldNum.toString());
            // 改变房屋折损等级并传至后台
            _this.playerHouseLoss = 0;
            // 改变房屋信息
            _this.fhmloss.text = "折损程度：0";
            _this.fhmneed.text = "整修所需金币：0";
            Global.updateParam({ userId: _this.playerId, name: "house_loss", params: 0 });
        }, this);
    };
    // 资金不足模态框
    FriendHouse.prototype.goGameModal = function (price) {
        var _this = this;
        this.addChild(this.modal);
        this.modal.poorModal(price);
        var close = Modal.btnCont.getChildAt(0);
        var cancel = Modal.btnCont.getChildAt(1);
        var sure = Modal.btnCont.getChildAt(2);
        // 点击关闭。
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeModal, this);
        // 点击取消。
        cancel.touchEnabled = true;
        cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeModal, this);
        // 返回游戏
        sure.touchEnabled = true;
        sure.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.closeModal();
            Newscenes.getInstance().changeScene('Game');
        }, this);
    };
    // 关闭模态框
    FriendHouse.prototype.closeModal = function () {
        if (Sound.soundOpen) {
            Sound.cancelSound.play(0, 1);
        }
        this.modal.removeChildren();
        this.removeChild(this.modal);
    };
    // 返回事件
    FriendHouse.prototype.backToHome = function () {
        if (Sound.soundOpen) {
            Sound.backSound.play(0, 1);
        }
        Global.fHouse = '';
        Global.friendlossNum = '';
        Newscenes.getInstance().changeScene('House');
    };
    //破坏好友房屋的互动事件
    FriendHouse.prototype.destroyfun = function () {
        //如果使用了防御卡则不可被攻击
        var ctime = new Date().getTime(); //当天的时间戳
        var defeTime = ctime - Number(this.playerDefeTime);
        if (this.playerDefe == 1 && defeTime > 0 && defeTime <= 86400000) {
            if (Sound.soundOpen) {
                Sound.defenseSound.play(0, 1);
            }
            this.playDefe();
        }
        else {
            //如果房子折损到达5级  则提示打残
            if (Global.friendlossNum == 5) {
                if (Sound.soundOpen) {
                    Sound.wrongTipSound.play(0, 1);
                }
                this.aegisFun();
            }
            else {
                //每日5次免费攻击机会
                var curDate = egret.localStorage.getItem("curDate");
                if (!egret.localStorage.getItem("attackTime")) {
                    egret.localStorage.setItem("attackTime", curDate);
                }
                if (!egret.localStorage.getItem("attackNum")) {
                    egret.localStorage.setItem("attackNum", "5");
                }
                if (egret.localStorage.getItem("attackTime") < curDate) {
                    egret.localStorage.setItem("attackTime", curDate);
                    egret.localStorage.setItem("attackNum", "5");
                }
                this.attackNum = Number(egret.localStorage.getItem("attackNum"));
                if (this.attackNum <= 0) {
                    if (Sound.soundOpen) {
                        Sound.tipSound.play(0, 1);
                    }
                    //弹出使用攻击卡的弹框
                    this.auseAttack();
                }
                else {
                    if (Sound.soundOpen) {
                        Sound.attackSound.play(0, 1);
                    }
                    console.log(this.attackNum);
                    this.attackNum = this.attackNum - 1;
                    egret.localStorage.setItem("attackNum", this.attackNum);
                    this.websocketAttack("attack");
                }
            }
        }
    };
    //攻击好友
    FriendHouse.prototype.websocketAttack = function (param) {
        if (param == "attack") {
            Global.friendlossNum = Global.friendlossNum + 1;
            Global.friendHLoss.text = "折损程度：" + Global.friendlossNum;
            this.fhmneed.text = "\u6574\u4FEE\u6240\u9700\u91D1\u5E01\uFF1A" + Global.fixPrice[Global.friendlossNum];
            Global.fHouse.hLoss(this.playerLandId, Global.friendlossNum);
            //发送更新接口
            Global.updateParam({ userId: this.playerId, name: 'house_loss', params: Global.friendlossNum });
        }
        //websocket互动
        this.web_socket = Connection.webSocket;
        //攻击某个好友的房屋
        var obj = { do: param, userId: egret.localStorage.getItem("userId"), coust: this.friendInfo.data.id };
        var cmd = JSON.stringify(obj);
        this.web_socket.writeUTF(cmd);
    };
    //好友使用了防御卡提醒弹窗
    FriendHouse.prototype.playDefe = function () {
        var _this = this;
        this.addChild(this.modal);
        this.modal.attacktoDefe();
        var close = Modal.btnCont.getChildAt(0);
        var sure = Modal.btnCont.getChildAt(1);
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (Sound.soundOpen) {
                Sound.cancelSound.play(0, 1);
            }
            _this.modal.removeChildren();
            _this.removeChild(_this.modal);
        }, this); //关闭
        sure.touchEnabled = true;
        sure.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (Sound.soundOpen) {
                Sound.cancelSound.play(0, 1);
            }
            _this.modal.removeChildren();
            _this.removeChild(_this.modal);
        }, this); //关闭
    };
    //没有攻击次数  展示使用攻击卡弹窗
    FriendHouse.prototype.auseAttack = function () {
        var _this = this;
        this.addChild(this.modal);
        this.modal.useAttack();
        var close = Modal.btnCont.getChildAt(0);
        var join = Modal.btnCont.getChildAt(1); //使用卡片
        var share = Modal.btnCont.getChildAt(2);
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (Sound.soundOpen) {
                Sound.cancelSound.play(0, 1);
            }
            _this.modal.removeChildren();
            _this.removeChild(_this.modal);
        }, this); //关闭
        join.touchEnabled = true;
        join.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.modal.removeChildren();
            _this.removeChild(_this.modal);
            if (Number(egret.localStorage.getItem("attack_card")) <= 0) {
                _this.onshare(); //攻击卡为0时直接跳分享        
            }
            else {
                if (Sound.soundOpen) {
                    Sound.attackSound.play(0, 1);
                }
                var numloc = Number(egret.localStorage.getItem("attack_card")) - 1;
                egret.localStorage.setItem("attack_card", numloc.toString());
                _this.websocketAttack("attack");
            }
        }, this); //使用攻击卡
        share.touchEnabled = true;
        share.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.modal.removeChildren();
            _this.removeChild(_this.modal);
            _this.onshare();
        }, this); //分享
    };
    //分享
    FriendHouse.prototype.onshare = function () {
        if (Sound.soundOpen) {
            Sound.tipSound.play(0, 1);
        }
        wx.shareAppMessage({
            title: "来呀~互相伤害~",
            imageUrl: "https://dfw.hebzycw.com/resource/assets/share1.png",
            query: ""
        });
    };
    return FriendHouse;
}(egret.DisplayObjectContainer));
__reflect(FriendHouse.prototype, "FriendHouse");
// 默认添加开始场景
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        //色子基数
        _this._shaizi = 0;
        //游戏人物移动步数
        _this.stepsnum = 0;
        _this.heronum = 1;
        _this._modal = new Modal();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Game.prototype.onAddToStage = function (event) {
        //异步加载排行榜数据
        if (!Global.friendget() || !Global.worldget()) {
            this.requestRank();
        }
        //添加背景
        this._bg = new Background();
        this.addChild(this._bg);
        //设置全局好友互动提示信息
        var point = this._bg.addpoint({ "text": "", "color": "0xFFFFFF", "y": 148, "size": 22 });
        this.addChild(point);
        Global.notice = point;
        //地震特效
        Global.earth = Global.earthEffect();
        this.addChild(Global.earth);
        //初始色子
        this.dice = this._bg.npc({ "name": "dice_json.1", "x": 326, "y": 651 });
        this._bg.addChild(this.dice);
        this.diceShake();
        // 音乐和音效
        var music = this._bg.element({ "name": "element_json.music", "x": 34, "y": 70 });
        var sound = this._bg.element({ "name": "element_json.sound", "x": 93, "y": 70 });
        if (!Sound.bgOpen) {
            music.texture = RES.getRes("element_json.musicClose");
        }
        if (!Sound.soundOpen) {
            sound.texture = RES.getRes("element_json.soundClose");
        }
        this._bg.addChild(music);
        this._bg.addChild(sound);
        music.touchEnabled = true;
        music.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (Sound.bgOpen) {
                Sound.backSound.play(0, 1);
                Sound.bgOpen = false;
                egret.localStorage.setItem("bgOpen", "false");
                Newscenes.bgm.stop();
                music.texture = RES.getRes("element_json.musicClose");
            }
            else {
                Sound.bgOpen = true;
                egret.localStorage.removeItem("bgOpen");
                Newscenes.bgm = Sound.bgSound.play();
                music.texture = RES.getRes("element_json.music");
            }
        }, this);
        sound.touchEnabled = true;
        sound.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (Sound.soundOpen) {
                Sound.backSound.play(0, 1);
                Sound.soundOpen = false;
                egret.localStorage.setItem("soundOpen", "false");
                sound.texture = RES.getRes("element_json.soundClose");
            }
            else {
                Sound.soundOpen = true;
                egret.localStorage.removeItem("soundOpen");
                sound.texture = RES.getRes("element_json.sound");
            }
        }, this);
        //我的英雄
        this.hero = this._bg.npc({ "name": "hero_json.c1", "x": 578, "y": 665 });
        this.hero.name = "c1";
        this.heroInit();
        this._bg.addChild(this.hero);
        //开始按钮
        //动画
        // var mcStart = this._bg.moveGif({json:"daystart_json",img:"daystart_png",name:"start",x:"325",y:"515"});
        // this._bg.addChild(mcStart);
        this.gored = this._bg.npc({ "name": "element_json.go_up", "x": 318, "y": 1020 });
        this._bg.addChild(this.gored);
        //我的房屋场景 
        this.myhouse = this._bg.npc({ "name": "element_json.myhouse", "x": 545, "y": 1047 });
        this._bg.addChild(this.myhouse);
        //每日活动
        this.day = this._bg.npc({ "name": "element_json.day", "x": 88, "y": 1047 });
        this._bg.addChild(this.day);
        //金币数
        var moneyBg = this._bg.element({ "name": "element_json.money", "x": 555, "y": 97 });
        this._bg.addChild(moneyBg);
        if (egret.localStorage.getItem("money")) {
            this.money = egret.localStorage.getItem("money");
        }
        else {
            this.money = 5000;
        }
        this.moneyNum = this._bg.addtxt({ "text": Math.floor(this.money / 1000) + "k", "x": 533, "y": 88, color: "0x000000" });
        this._bg.addChild(this.moneyNum);
        //活动展示
        this.activity = this._bg.npc({ "name": "element_json.activity", "x": 520, "y": 269, "width": 185, "height": 180 });
        this._bg.addChild(this.activity);
        //获取当前日期  设定的每日活动的黄道吉时
        var mydate = this._bg.getDate();
        var time = this._bg.addtxt({ "text": mydate.month + "/" + mydate.day, "x": 490, "y": 245, color: "0x000000" });
        // let time = this._bg.addtxt({ "text": mydate.month + "/" + mydate.day + " " + "20:00", "x": 490, "y": 245, color: "0x000000" });
        this._bg.addChild(time);
        this.elClick();
    };
    // 人物初始化
    Game.prototype.heroInit = function () {
        if (egret.localStorage.getItem("heroX")) {
            this.hero.x = Number(egret.localStorage.getItem("heroX"));
        }
        if (egret.localStorage.getItem("heroY")) {
            this.hero.y = Number(egret.localStorage.getItem("heroY"));
        }
        if (egret.localStorage.getItem("anchorOffsetX")) {
            this.hero.anchorOffsetX = Number(egret.localStorage.getItem("anchorOffsetX"));
        }
        if (egret.localStorage.getItem("anchorOffsetY")) {
            this.hero.anchorOffsetY = Number(egret.localStorage.getItem("anchorOffsetY"));
        }
        if (egret.localStorage.getItem("direction")) {
            var direction = egret.localStorage.getItem("direction");
            this.hero.texture = RES.getRes("hero_json." + direction);
            this.hero.name = direction;
        }
    };
    // 点击开始按钮，添加色子动图
    Game.prototype.onclickfunc = function (event) {
        // 色子音效
        if (Sound.soundOpen) {
            Sound.diceSound.play(0, 1);
        }
        // 点击开始按钮后，移除所有点击事件，直到人物移动完后再添加点击。
        this.cancelElClick();
        // 添加色子动图
        this.addChild(this.mcDice);
        this._bg.removeChild(this.dice);
        this.mcDice.play(2);
    };
    // 色子gif图
    Game.prototype.diceShake = function () {
        var _this = this;
        var data = RES.getRes("dicegif_json");
        var txtr = RES.getRes("dicegif_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        this.mcDice = new egret.MovieClip(mcFactory.generateMovieClipData("dicegif"));
        this.mcDice.anchorOffsetX = this.mcDice.width / 2;
        this.mcDice.anchorOffsetY = this.mcDice.height / 2;
        this.mcDice.x = 306;
        this.mcDice.y = 605;
        this.mcDice.addEventListener(egret.Event.COMPLETE, function (e) {
            _this.stepsnum = Math.ceil(Math.random() * 6);
            _this.diceComp();
        }, this);
    };
    // 计时结束随机指定色子点数，触发人物移动
    Game.prototype.diceComp = function () {
        this.removeChild(this.mcDice);
        this._bg.addChild(this.dice);
        this.stepsnum = Math.ceil(Math.random() * 6);
        this.dice.texture = RES.getRes("dice_json." + this.stepsnum);
        this.heroWalkfunc();
    };
    //人物移动
    Game.prototype.heroWalkfunc = function () {
        var timer = new egret.Timer(200, this.stepsnum);
        //注册监听
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerherofunc, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerheroend, this);
        timer.start();
    };
    //人物移动事件过程改变坐标
    Game.prototype.timerherofunc = function (event) {
        //判断小人坐标
        if (this.hero.x <= 578 && this.hero.y >= 665 && this.hero.x > 338 && this.hero.y < 805) {
            this.hero.x -= 60;
            this.hero.y += 35;
            if (this.hero.x == 338 && this.hero.y == 805) {
                this.addHero("hero_json.b1", 45, -6, "b1");
            }
        }
        else if (this.hero.x <= 338 && this.hero.y <= 805 && this.hero.x > 98 && this.hero.y > 665) {
            this.hero.x -= 60;
            this.hero.y -= 35;
            if (this.hero.x == 98 && this.hero.y == 665) {
                this.addHero("hero_json.c3", 45, -6, "c3");
            }
        }
        else if (this.hero.x >= 98 && this.hero.y <= 665 && this.hero.x < 338 && this.hero.y > 525) {
            this.hero.x += 60;
            this.hero.y -= 35;
            if (this.hero.x == 338 && this.hero.y == 525) {
                this.addHero("hero_json.c2", 45, -6, "c2");
            }
        }
        else if (this.hero.x >= 338 && this.hero.y >= 525 && this.hero.x < 578 && this.hero.y < 665) {
            this.hero.x += 60;
            this.hero.y += 35;
            if (this.hero.x == 578 && this.hero.y == 665) {
                this.addHero("hero_json.c1", 10, -1, "c1");
            }
        }
        //每步应加的金币数
        var random = Math.floor(Math.random() * (800 - 400 + 1) + 400);
        var data = { money: random, symbol: "+" };
        this.countMoney(data);
        // 人物走动音效
        if (Sound.soundOpen) {
            Sound.walkSound.play(0, 1);
        }
    };
    //英雄转身
    Game.prototype.addHero = function (name, offsetX, offsetY, direction) {
        this.hero.texture = RES.getRes(name);
        this.hero.anchorOffsetX = this.hero.width / 5 + offsetX;
        this.hero.anchorOffsetY = this.hero.height + offsetY;
        this.hero.name = direction;
    };
    //人物移动结束
    Game.prototype.timerheroend = function (event) {
        this.removeEventListener(egret.TimerEvent.TIMER, this.timerherofunc, this);
        this.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerheroend, this);
        // 判断是否触发弹框
        var isCardHit = this.isHitScene(398, 560, 40, 40);
        var isLuckHit = this.isHitScene(398, 770, 40, 40);
        var isBadLuckHit = this.isHitScene(218, 735, 40, 40);
        var isBankHit = this.isHitScene(98, 665, 40, 40);
        var ishospitalHit = this.isHitScene(278, 560, 40, 40);
        if (isCardHit) {
            egret.setTimeout(this.cardModal, this, 200);
            // this.cardModal();
        }
        else if (isLuckHit) {
            egret.setTimeout(this.luckyModal, this, 200);
            // this.luckyModal();
        }
        else if (isBadLuckHit) {
            egret.setTimeout(this.badLuckyModal, this, 200);
            // this.badLuckyModal();
        }
        else if (isBankHit) {
            egret.setTimeout(this.bankModal, this, 200);
            // this.bankModal();
        }
        else if (ishospitalHit) {
            egret.setTimeout(this.hospitalModal, this, 200);
            // this.hospitalModal();
        }
        else {
            //人物移动完重新添加点击事件
            this.elClick();
        }
    };
    // 碰撞检测
    Game.prototype.isHitScene = function (x, y, width, height) {
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xff0000, 0);
        shp.graphics.drawRect(x, y, width, height);
        shp.graphics.endFill();
        return shp.hitTestPoint(this.hero.x, this.hero.y + 40);
    };
    //金币计算   以及每一步增加金币动画
    Game.prototype.countMoney = function (data) {
        var num = 0; //金币总数
        var color = "";
        if (data.symbol == "+") {
            num = parseInt(this.money) + data.money;
            color = "0xFFFF00";
        }
        else {
            num = parseInt(this.money) - data.money;
            color = "0xFF0000";
        }
        var title = data.symbol + data.money; //显示的文字
        //每步增加金币的动画
        var shp = this._bg.npc({ "name": "day_json.gold4", "x": this.hero.x, "y": this.hero.y - 130 });
        var txt = this._bg.addtxt({ "text": title, "x": this.hero.x + 20, "y": this.hero.y - 140, color: color, size: 26 });
        this._bg.addChild(shp);
        this._bg.addChild(txt);
        egret.Tween.get(shp).to({ x: 507, y: 95 }, 1300, egret.Ease.backIn);
        egret.Tween.get(txt).to({ x: 507, y: 95 }, 1300, egret.Ease.backIn);
        this.money = num;
        egret.localStorage.setItem("money", this.money.toFixed());
        egret.setTimeout(function () {
            if (shp && shp.parent) {
                shp.parent.removeChild(shp);
            }
            if (txt && txt.parent) {
                txt.parent.removeChild(txt);
            }
            this.moneyNum.text = Math.floor(num / 1000) + "k";
            //移除页面的所有动画  ********************待研究
            egret.Tween.removeTweens(this._bg);
        }, this, 1300);
    };
    // 页面所有点击事件
    Game.prototype.elClick = function () {
        var _this = this;
        //授权按钮
        var button = wx.createUserInfoButton({
            type: 'text',
            text: "",
            style: {
                width: 640,
                height: 1138,
                lineHeight: 40,
                borderRadius: 4,
                hidden: false,
            }
        });
        button.hide();
        if (!egret.localStorage.getItem("nickName") && !egret.localStorage.getItem("avatarUrl")) {
            button.show();
            button.onTap(function (res) {
                if (res.errMsg == "getUserInfo:ok") {
                    _this.authApi(res.rawData);
                    button.hide();
                }
            });
        }
        // 开始按钮，点击摇色子
        this.gored.touchEnabled = true;
        this.gored.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickfunc, this);
        // 我的房屋，点击跳转房屋场景
        this.myhouse.touchEnabled = true;
        this.myhouse.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goHouse, this);
        // 每日活动，点击跳转每日活动场景
        this.day.touchEnabled = true;
        this.day.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goDay, this);
        // 活动展示板，点击弹出活动说明框
        this.activity.touchEnabled = true;
        this.activity.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onactivityfunc, this);
    };
    // 取消页面所有点击事件
    Game.prototype.cancelElClick = function () {
        // 开始按钮，点击摇色子
        this.gored.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickfunc, this);
        // 我的房屋，点击跳转房屋场景
        this.myhouse.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.goHouse, this);
        // 每日活动，点击跳转每日活动场景
        this.day.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.goDay, this);
        // 活动展示板，点击弹出活动说明框
        this.activity.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onactivityfunc, this);
    };
    Game.prototype.goHouse = function () {
        if (Sound.soundOpen) {
            Sound.cancelSound.play(0, 1);
        }
        this.archive();
        Newscenes.getInstance().changeScene("House");
    };
    Game.prototype.goDay = function () {
        if (Sound.soundOpen) {
            Sound.cancelSound.play(0, 1);
        }
        this.archive();
        Newscenes.getInstance().changeScene("Day");
    };
    // 好运模态框
    Game.prototype.luckyModal = function () {
        // 音效
        if (Sound.soundOpen) {
            Sound.luckySound.play(0, 1);
        }
        this.addChild(this._modal);
        this._modal.luckModal();
        var close = Modal.btnCont.getChildAt(0);
        var sure = Modal.btnCont.getChildAt(1);
        var goldTxt = Modal.btnCont.getChildAt(2);
        var goldPlus = Number(goldTxt.text);
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.commonModalClick.bind(this, goldPlus, "+"), this);
        sure.touchEnabled = true;
        sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.commonModalClick.bind(this, goldPlus, "+"), this);
    };
    // 坏运模态框
    Game.prototype.badLuckyModal = function () {
        // 音效
        if (Sound.soundOpen) {
            Sound.badLuckySound.play(0, 1);
        }
        this.addChild(this._modal);
        this._modal.badLuckModal();
        var close = Modal.btnCont.getChildAt(0);
        var sure = Modal.btnCont.getChildAt(1);
        var goldTxt = Modal.btnCont.getChildAt(2);
        var goldMinus = Number(goldTxt.text);
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.commonModalClick.bind(this, goldMinus, "-"), this);
        sure.touchEnabled = true;
        sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.commonModalClick.bind(this, goldMinus, "-"), this);
    };
    // 医院模态框
    Game.prototype.hospitalModal = function () {
        // 音效
        if (Sound.soundOpen) {
            Sound.hospitalSound.play(0, 1);
        }
        this.addChild(this._modal);
        this._modal.hospitModal();
        var close = Modal.btnCont.getChildAt(0);
        var sure = Modal.btnCont.getChildAt(1);
        var goldTxt = Modal.btnCont.getChildAt(2);
        var goldMinus = Number(goldTxt.text);
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.commonModalClick.bind(this, goldMinus, "-"), this);
        sure.touchEnabled = true;
        sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.commonModalClick.bind(this, goldMinus, "-"), this);
    };
    Game.prototype.commonModalClick = function (gold, symbol) {
        // 音效
        if (Sound.soundOpen) {
            Sound.cancelSound.play(0, 1);
        }
        this._modal.removeChildren();
        this.removeChild(this._modal);
        this.countMoney({ money: gold, symbol: symbol });
        this.elClick();
    };
    Game.prototype.onClick = function () {
        // 音效
        if (Sound.soundOpen) {
            Sound.cancelSound.play(0, 1);
        }
        this._modal.removeChildren();
        this.removeChild(this._modal);
        this.elClick();
    };
    Game.prototype.bankModal = function () {
        var _this = this;
        // 音效
        if (Sound.soundOpen) {
            Sound.bankSound.play(0, 1);
        }
        this.bankModalCont = new Bank(this.money, this.moneyNum);
        this.addChild(this.bankModalCont);
        var close = Bank.close;
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // 音效
            if (Sound.soundOpen) {
                Sound.cancelSound.play(0, 1);
            }
            _this.bankModalCont.removeChildren();
            _this.removeChild(_this.bankModalCont);
            _this.elClick();
        }, this);
    };
    Game.prototype.bankSucClose = function (close, game) {
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // 音效
            if (Sound.soundOpen) {
                Sound.cancelSound.play(0, 1);
            }
            game.bankModalCont.removeChildren();
            game.removeChild(game.bankModalCont);
            game.elClick();
            game.money = egret.localStorage.getItem("money");
        }, this);
    };
    // 卡券中心模态框
    Game.prototype.cardModal = function () {
        var _this = this;
        // 音效
        if (Sound.soundOpen) {
            Sound.cardSound.play(0, 1);
        }
        var cardCenterModal = new CardCenter(this.money, this.moneyNum);
        this.addChild(cardCenterModal);
        var close = CardCenter.close;
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // 音效
            if (Sound.soundOpen) {
                Sound.cancelSound.play(0, 1);
            }
            cardCenterModal.removeChildren();
            _this.removeChild(cardCenterModal);
            _this.elClick();
            _this.money = egret.localStorage.getItem("money");
        }, this);
    };
    //每日活动展板弹框
    Game.prototype.onactivityfunc = function () {
        var _this = this;
        // 音效
        if (Sound.soundOpen) {
            Sound.modalSound.play(0, 1);
        }
        this.addChild(this._modal);
        this._modal.actModal();
        var close = Modal.btnCont.getChildAt(0);
        var join = Modal.btnCont.getChildAt(1);
        var share = Modal.btnCont.getChildAt(2);
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // 音效
            if (Sound.soundOpen) {
                Sound.cancelSound.play(0, 1);
            }
            _this._modal.removeChildren();
            _this.removeChild(_this._modal);
        }, this); //关闭
        join.touchEnabled = true;
        join.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // 音效
            if (Sound.soundOpen) {
                Sound.getLuckyBagSound.play(0, 1);
            }
            _this._modal.removeChildren();
            _this.removeChild(_this._modal);
            _this.goDay();
        }, this); //去参加每日活动
        share.touchEnabled = true;
        share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onshare, this); //分享
    };
    // 存档
    Game.prototype.archive = function () {
        egret.localStorage.setItem("heroX", this.hero.x.toString());
        egret.localStorage.setItem("heroY", this.hero.y.toString());
        egret.localStorage.setItem("anchorOffsetX", this.hero.anchorOffsetX.toString());
        egret.localStorage.setItem("anchorOffsetY", this.hero.anchorOffsetY.toString());
        egret.localStorage.setItem("direction", this.hero.name);
    };
    //分享
    Game.prototype.onshare = function () {
        if (Sound.soundOpen) {
            Sound.tipSound.play(0, 1);
        }
        this._modal.removeChildren();
        this.removeChild(this._modal);
        wx.shareAppMessage({
            title: "来呀~互相伤害~",
            imageUrl: "https://dfw.hebzycw.com/resource/assets/share1.png",
            query: ""
        });
    };
    //授权Api
    Game.prototype.authApi = function (res) {
        res = JSON.parse(res);
        egret.localStorage.setItem("nickName", res.nickName);
        egret.localStorage.setItem("avatarUrl", res.avatarUrl);
        wx.request({
            url: "https://dfw.hebzycw.com/api/Index/updateName",
            data: {
                userId: egret.localStorage.getItem("userId"),
                nickName: res.nickName,
                avatarUrl: res.avatarUrl,
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            dataType: "json",
            success: function (res) {
                console.log("头像已上传");
            },
            fail: function (res) {
            },
            complete: function (res) { }
        });
    };
    /**
    *  好友排行榜
    */
    Game.prototype.requestRank = function () {
        //好友排行
        wx.request({
            url: "https://dfw.hebzycw.com/api/house/friendsRank",
            data: {
                userId: egret.localStorage.getItem("userId"),
                friendsId: egret.localStorage.getItem("friendsId"),
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            dataType: "json",
            success: function (res) {
                console.log("获取好友排行榜成功");
                Global.friendset(res);
            },
            fail: function (res) {
            },
            complete: function (res) { }
        });
        //世界排行榜
        wx.request({
            url: "https://dfw.hebzycw.com/api/house/workRank",
            data: {
                userId: egret.localStorage.getItem("userId")
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            dataType: "json",
            success: function (res) {
                console.log("获取世界排行榜成功");
                Global.worldset(res);
            },
            fail: function (res) {
            },
            complete: function (res) { }
        });
    };
    return Game;
}(egret.DisplayObjectContainer));
__reflect(Game.prototype, "Game");
/**
 * 全局变量
 * */
var Global;
(function (Global) {
    var friendRank; //好友排行榜
    var worldRank; //世界好友排行榜
    var web_hosue; //websockt
    var aroundInfo; //串门好友信息
    var point; //好友互动提示信息  
    var news; //消息  
    // 大陆数据
    Global.landData = [
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
    ];
    // 整修所需金币
    Global.fixPrice = [0, 20000, 30000, 50000, 70000, 100000];
    //好友排行榜
    function friendget() {
        return friendRank;
    }
    Global.friendget = friendget;
    function friendset(param) {
        friendRank = param;
    }
    Global.friendset = friendset;
    //世界好友排行榜
    function worldget() {
        return worldRank;
    }
    Global.worldget = worldget;
    function worldset(param) {
        worldRank = param;
    }
    Global.worldset = worldset;
    //websock 渲染
    function webget() {
        return web_hosue;
    }
    Global.webget = webget;
    function webset(param) {
        web_hosue = param;
    }
    Global.webset = webset;
    //串门好友信息展示
    function randget() {
        return aroundInfo;
    }
    Global.randget = randget;
    function randset(param) {
        aroundInfo = param;
    }
    Global.randset = randset;
    //离线消息
    function newget() {
        return news;
    }
    Global.newget = newget;
    function newset(param) {
        news = param;
    }
    Global.newset = newset;
    //地震卡和普渡众生卡攻击  特效
    function allBackFun(obj) {
        //已经获取websocket 中传的大陆的等级   判断当前的用户是不是在这个大陆   如果是特效 不是就通知
        var txt = '';
        var num;
        if (obj.do == 'earth') {
            if (Number(egret.localStorage.getItem("defense")) == 1) {
                num = Number(egret.localStorage.getItem("house_loss")) + 1;
            }
            else {
                num = Number(egret.localStorage.getItem("house_loss")) + 2;
            }
            txt = "地震";
        }
        else {
            num = Number(egret.localStorage.getItem("house_loss")) - 2;
            txt = "普渡众生";
        }
        if (Number(egret.localStorage.getItem("land")) == obj.land) {
            if (num > 5) {
                num = 5;
            }
            else if (num < 0) {
                num = 0;
            }
            else {
                num = num;
            }
            egret.localStorage.setItem("house_loss", num.toString());
            if (obj.do == 'earth') {
                this.earth_webFun();
            }
            else {
                //防止在页面报错
                if (Global.save) {
                    this.save_webFun();
                }
            }
            if (Global.mHouse) {
                var mHouse_1 = Global.mHouse;
                mHouse_1.hLoss(egret.localStorage.getItem("land"), num);
            }
        }
        txt = "通知： 玩家 " + obj.userId + " 在" + Global.landData[obj.land - 1].landName + "使用" + txt + '卡';
        //通知
        this.noticeFun(obj, txt);
    }
    Global.allBackFun = allBackFun;
    //地震卡回调特效
    function earth_webFun() {
        var _this = this;
        //折损动画
        if (Sound.soundOpen) {
            Sound.earthSound.play(0, 1);
        }
        Global.earth.alpha = 0.1;
        var timer = new egret.Timer(100, 20);
        //注册事件侦听器
        timer.addEventListener(egret.TimerEvent.TIMER, function () {
            Global.earth.alpha = Global.earth.alpha + 0.05;
        }, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
            egret.setTimeout(function () {
                Global.earth.alpha = 0;
            }, _this, 3000);
        }, this);
        //开始计时
        timer.start();
    }
    Global.earth_webFun = earth_webFun;
    //普渡众生回调特效
    function save_webFun() {
        var _this = this;
        //折损动画
        if (Sound.soundOpen) {
            Sound.saveSound.play(0, 1);
        }
        Global.save.alpha = 1;
        var i = 1;
        var timer = new egret.Timer(500, 20);
        //注册事件侦听器
        timer.addEventListener(egret.TimerEvent.TIMER, function () {
            if (i % 2 == 0) {
                Global.save.alpha = 0.8;
                Global.save.x = 315;
                Global.save.y = 540;
                Global.save.width = 650;
                Global.save.height = 800;
            }
            else {
                Global.save.alpha = 1;
                Global.save.x = 335;
                Global.save.y = 570;
                Global.save.width = 620;
                Global.save.height = 770;
            }
            i++;
        }, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
            egret.setTimeout(function () {
                Global.save.alpha = 0;
            }, _this, 3000);
        }, this);
        //开始计时
        timer.start();
    }
    Global.save_webFun = save_webFun;
    //websock 返回陨石卡攻击特效  随机攻击某个玩家  包括自己
    function rockBackFun(obj) {
        var rocks = Global.mHouse;
        var txt = '陨石';
        var num;
        if (Number(egret.localStorage.getItem("defense")) == 1) {
            num = Number(egret.localStorage.getItem("house_loss")) + 1;
        }
        else {
            num = Number(egret.localStorage.getItem("house_loss")) + 2;
        }
        if (num > 5) {
            num = 5;
        }
        else if (num < 0) {
            num = 0;
        }
        else {
            num = num;
        }
        egret.localStorage.setItem("house_loss", num.toString());
        //通知
        txt = "通知： 玩家 " + obj.userId + " 正在使用" + txt + '卡';
        this.noticeFun(obj, txt);
        //卡片使用动画
        if (Global.rock) {
            Global.rock_webFun(num);
        }
    }
    Global.rockBackFun = rockBackFun;
    function rockEffect() {
        var _bg = new Background;
        var rockBg = new egret.Sprite();
        rockBg.graphics.beginFill(0xFFFFFF, 0);
        rockBg.graphics.drawRect(0, 0, 640, 1138);
        rockBg.graphics.endFill();
        var rockImg = _bg.element({ "name": "cardUse_json.rock", "x": 800, "y": -30, width: 236 * 0.75, height: 329 * 0.75 });
        var rockImgTwo = _bg.element({ "name": "cardUse_json.rock2", "x": 640, "y": -100, width: 303 * 0.60, height: 536 * 0.60 });
        rockBg.addChild(rockImg);
        rockBg.addChild(rockImgTwo);
        rockBg.alpha = 0;
        return rockBg;
    }
    Global.rockEffect = rockEffect;
    ;
    //回调特效
    function rock_webFun(num) {
        var _this = this;
        //陨石掉落动画
        Global.rock.alpha = 1;
        //画方
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xFFFFFF, 0);
        shape.graphics.drawRect(257, 415, 260, 300);
        shape.graphics.endFill();
        var isHit = false;
        var rockImg = Global.rock.$children["0"];
        var rockImgTwo = Global.rock.$children["1"];
        egret.Tween.get(rockImg).to({ x: -50, y: 1213 }, 5000);
        egret.Tween.get(rockImgTwo).to({ x: -10, y: 1213 }, 5000);
        if (Sound.soundOpen) {
            egret.setTimeout(function () {
                Sound.rockSound.play(0, 2);
                //折损动画
                var mHouse = Global.mHouse;
                mHouse.hLoss(egret.localStorage.getItem("land"), num);
            }, this, 1300);
        }
        shape.addEventListener(egret.Event.ENTER_FRAME, function () {
            isHit = shape.hitTestPoint(rockImgTwo.x, rockImgTwo.y - 180);
            if (isHit) {
                shape.removeEventListener(egret.Event.ENTER_FRAME, function () { }, _this);
                isHit = false;
                Global.rock.alpha = 0;
                Newscenes.getInstance().changeScene('House');
            }
        }, this);
    }
    Global.rock_webFun = rock_webFun;
    //攻击卡websock 返回函数
    function attackBackFun(obj) {
        var num = Number(egret.localStorage.getItem("house_loss")) + 1;
        egret.localStorage.setItem("house_loss", num.toString());
        if (Global.mHouse) {
            Global.mHouse.hLoss(egret.localStorage.getItem("land"), num);
        }
    }
    Global.attackBackFun = attackBackFun;
    //通知
    function noticeFun(obj, txt) {
        var notice = Global.notice;
        notice.text = txt;
        egret.Tween.get(notice).to({ x: 540, y: 148 }, 10000, egret.Ease.sineIn);
        egret.setTimeout(function () {
            notice.x = 12;
            notice.text = "";
            egret.Tween.removeTweens(this);
        }, this, 10000);
    }
    Global.noticeFun = noticeFun;
    //帮好友整修房屋
    function helpHouse(obj) {
        Global.mHouse.hLoss(egret.localStorage.getItem("land"), 0);
    }
    Global.helpHouse = helpHouse;
    function earthEffect() {
        var _bg = new Background;
        var earth = _bg.addAlphafun();
        earth.alpha = 0;
        var earthImg = _bg.oElement({ "name": "cardUse_json.earth", width: 640, height: 1138, "x": 0, "y": 0 });
        earth.addChild(earthImg);
        return earth;
    }
    Global.earthEffect = earthEffect;
    //更新更新后台api
    function updateApi() {
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
            success: function (res) {
                console.log("成功更新后台api");
            },
            fail: function (res) {
                // 请求发送失败，重新发送
                //    Global.updateApi();
                wx.showModal({
                    title: '网络状态',
                    content: '当前网络状态不稳定，请稍后再试',
                    showCancel: false,
                    cancelText: '取消',
                    cancelColor: '#000000',
                    confirmText: '确定',
                    confirmColor: '#3cc51f',
                    success: function (res) { },
                    fail: function (res) { },
                    complete: function (res) { }
                });
            },
            complete: function (res) { }
        });
    }
    Global.updateApi = updateApi;
    //递加更新
    function updateParam(obj) {
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
            success: function (res) {
                console.log("成功更新后台api");
            },
            fail: function (res) {
                // 请求发送失败，重新发送
                Global.updateApi();
            },
            complete: function (res) { }
        });
    }
    Global.updateParam = updateParam;
    //心跳包
    function timerHeart() {
        //创建一个计时器对象
        var timer = new egret.Timer(30000, 10000);
        //注册事件侦听器
        timer.addEventListener(egret.TimerEvent.TIMER, Global.timerFunc, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, Global.timerComFunc, this);
        //开始计时
        timer.start();
    }
    Global.timerHeart = timerHeart;
    function timerFunc() {
        this.web_socket = Connection.webSocket;
        var cmd = JSON.stringify({ do: "Heartbeat", userId: egret.localStorage.getItem("userId"), coust: '' });
        this.web_socket.writeUTF(cmd);
    }
    Global.timerFunc = timerFunc;
    function timerComFunc() {
        Global.timerHeart();
    }
    Global.timerComFunc = timerComFunc;
    function jiankong() {
        //微信退出监控  更新数据
        wx.exitMiniProgram({
            success: function (res) {
                Global.updateApi();
            },
            fail: function (res) {
            },
            complete: function (res) { }
        });
        //隐藏后台监控 更新数据
        wx.onHide(function () { Global.updateApi(); });
    }
    Global.jiankong = jiankong;
})(Global || (Global = {}));
var House = (function (_super) {
    __extends(House, _super);
    function House() {
        var _this = _super.call(this) || this;
        _this.modal = new Modal();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    House.prototype.onAddToStage = function (event) {
        // 数据
        // 房屋等级
        if (egret.localStorage.getItem("house")) {
            this.playerHouseId = egret.localStorage.getItem("house");
        }
        // 金币数
        if (egret.localStorage.getItem("money")) {
            this.goldNum = Number(egret.localStorage.getItem("money"));
        }
        // 大陆等级
        if (egret.localStorage.getItem("land")) {
            this.playerLandId = egret.localStorage.getItem("land");
        }
        // 房屋折损等级
        if (egret.localStorage.getItem("house_loss")) {
            this.houseLoss = Number(egret.localStorage.getItem("house_loss"));
        }
        //背景
        this._bg = new Background();
        this.addChild(this._bg.stage_bg({ "name": "houseBg_png", "width": this.stage.stageWidth, "height": this.stage.stageHeight }));
        var mhTitle = this._bg.element({ "name": "houseEl_json.mhtitle", "x": this.stage.stageWidth / 2, "y": 60 });
        this.addChild(mhTitle);
        //普渡终生卡特效
        var saveUse = this._bg.element({ "name": "cardUse_json.save", width: 680, height: 830, "x": 310, "y": 550 });
        saveUse.alpha = 0;
        Global.save = saveUse;
        this.addChild(saveUse);
        // Global.save.x = 280;
        // Global.save.y = 530;
        // Global.save.width = 620;
        // Global.save.height = 770;
        //陨石卡特效
        Global.rock = Global.rockEffect();
        this.addChild(Global.rock);
        // 我的房屋
        this.mHouse = new HouseSwitch();
        this.addChild(this.mHouse);
        this.mHouse.house(this.playerLandId, this.playerHouseId);
        this.mHouse.hLoss(this.playerLandId, this.houseLoss); //房屋折损特效
        Global.mHouse = this.mHouse;
        // this.mHouse.touchEnabled = true;
        this.mHouse.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showHouseMap, this);
        //防御卡特效
        this.curDate = new Date().getTime(); //当天的时间戳
        this.defenseUse = this._bg.element({ "name": "cardUse_json.defense", width: 620, height: 530, "x": 320, "y": 540 });
        this.addChild(this.defenseUse);
        var defenseTime = this.curDate - Number(egret.localStorage.getItem("defense_time"));
        if (Number(egret.localStorage.getItem("defense")) == 1 && defenseTime > 0 && defenseTime <= 86400000) {
            this.defenseUse.alpha = 1;
        }
        else {
            egret.localStorage.setItem("defense", '0');
            this.defenseUse.alpha = 0;
        }
        // 底部基座
        var bottom = this._bg.oElement({ "name": "houseEl_json.bottom", "x": 20, "y": 1033 });
        this.addChild(bottom);
        // 去玩游戏
        this.goGame = this._bg.element({ "name": "houseEl_json.game", "x": this.stage.stageWidth / 2 - 5, "y": 1030 });
        this.addChild(this.goGame);
        this.goGame.touchEnabled = true;
        this.goGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backToGame, this);
        // 地图
        this.map = this._bg.element({ "name": "houseEl_json.worldmap", "x": 130, "y": 1050 });
        this.addChild(this.map);
        this.map.touchEnabled = true;
        this.map.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goWorldMap, this);
        // 好友房屋
        this.fHouse = this._bg.element({ "name": "houseEl_json.fhouse", "x": 500, "y": 1050 });
        this.addChild(this.fHouse);
        this.fHouse.touchEnabled = true;
        this.fHouse.addEventListener(egret.TouchEvent.TOUCH_TAP, this.friendHouse, this);
        // 整修房屋
        this.fixHouse = this._bg.element({ "name": "houseEl_json.fix", "x": 180, "y": 870 });
        this.addChild(this.fixHouse);
        this.fixHouse.touchEnabled = true;
        this.fixHouse.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hFix, this);
        // 升级房屋
        this.upHouse = this._bg.element({ "name": "houseEl_json.up", "x": 470, "y": 870 });
        this.addChild(this.upHouse);
        this.upHouse.touchEnabled = true;
        this.upHouse.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hUp, this);
        // 背包
        this.package = this._bg.element({ "name": "houseEl_json.package", "x": 580, "y": 260 });
        this.addChild(this.package);
        this.package.touchEnabled = true;
        this.package.addEventListener(egret.TouchEvent.TOUCH_TAP, this.packageFun, this);
        // 消息
        this.message = this._bg.element({ "name": "houseEl_json.message", "x": 580, "y": 400 });
        var testnum = (Global.newget()).data.length;
        //消息个数
        this.news = this._bg.addpoint({ "text": '', "color": "0xff0000", "strokeColor": "0xFFFFFF", "x": 600, "y": 355, "size": 22 });
        if (testnum > 0) {
            this.news.text = "+" + testnum;
        }
        this.addChild(this.message);
        this.addChild(this.news);
        this.message.touchEnabled = true;
        this.message.addEventListener(egret.TouchEvent.TOUCH_TAP, this.messageFun, this);
        //金币数
        var goldFrame = this._bg.element({ "name": "day_json.dayscore", "x": 557, "y": 110 });
        this.addChild(goldFrame);
        this.goldText = this._bg.addtxt({ "text": Math.floor(this.goldNum / 1000) + "k", "color": "0x610C1e", "x": 537, "y": 100 });
        this.addChild(this.goldText);
        // 房屋等级
        var gradeFrame = this._bg.element({ "name": "houseEl_json.grade", "width": 160, "height": 80, "x": 85, "y": 110 });
        this.addChild(gradeFrame);
        this.houseGrade = this._bg.addtxt({ "text": "等级: " + this.playerHouseId, "color": "0x610C1e", "x": 65, "y": 98, "size": 20 });
        this.houseGrade.fontFamily = "Microsoft YaHei";
        this.addChild(this.houseGrade);
        //全局通知
        this.addChild(Global.notice);
        //设置攻击的各种动态效果
        if (Global.special) {
            this.addChild(Global.special);
        }
        else {
            var special = this._bg.addpoint({ "text": "", "color": "0xFFFFFF", "x": 500, "y": 900, "size": 22 });
            this.addChild(special);
            Global.special = special;
        }
        //地震特效
        Global.earth = Global.earthEffect();
        this.addChild(Global.earth);
        // 房屋升级特效图片
        this.ugUp = this._bg.oElement({ "name": "ugUp_png", "width": 642, "x": 640, "y": -300 });
        this.ugDown = this._bg.oElement({ "name": "ugDown_png", "x": -640, "y": 950 });
        // 整修特效图片
        this.fixLeft = this._bg.oElement({ "name": "houseFix_json.left", "width": 642, "x": -600, "y": 350 });
        this.fixRight = this._bg.oElement({ "name": "houseFix_json.right", "x": 640, "y": 350 });
    };
    // 房屋升级特效
    House.prototype.upEffects = function () {
        this.addChild(this.ugUp);
        this.ugUp.alpha = 0;
        this.addChild(this.ugDown);
        this.ugDown.alpha = 0;
        this.ugUp.touchEnabled = true;
        this.ugDown.touchEnabled = true;
    };
    // 房屋整修特效
    House.prototype.fixEffectes = function () {
        this.addChild(this.fixLeft);
        this.fixLeft.alpha = 0;
        this.addChild(this.fixRight);
        this.fixRight.alpha = 0;
        this.fixLeft.touchEnabled = true;
        this.fixRight.touchEnabled = true;
    };
    // 点击地图
    House.prototype.goWorldMap = function () {
        if (Sound.soundOpen) {
            Sound.cancelSound.play(0, 1);
        }
        Newscenes.getInstance().changeScene('WorldMap');
    };
    // 点击好友房屋
    House.prototype.friendHouse = function () {
        // 音效
        if (Sound.soundOpen) {
            Sound.modalSound.play(0, 1);
        }
        var rank = new Rank();
        this.addChild(rank);
    };
    // 返回事件
    House.prototype.backToGame = function () {
        if (Sound.soundOpen) {
            Sound.cancelSound.play(0, 1);
        }
        Newscenes.getInstance().changeScene('Game');
    };
    // 出现房屋地图
    House.prototype.showHouseMap = function () {
        var houseMap = new HouseMap(this.playerLandId.toString());
        this.addChild(houseMap);
        // 动态出现房屋等级地图
        egret.Tween.get(HouseMap.effectsCont).to({ scaleX: 1, scaleY: 1 }, 500);
    };
    // 整修房屋
    House.prototype.hFix = function () {
        if (Sound.soundOpen) {
            Sound.tipSound.play(0, 1);
        }
        if (egret.localStorage.getItem("house_loss")) {
            this.houseLoss = Number(egret.localStorage.getItem("house_loss"));
        }
        var fixPrice = Global.fixPrice;
        if (this.houseLoss == 0) {
            this.addChild(this.modal);
            this.modal.tip("\u5F53\u524D\u623F\u5C4B\u6EE1\u7EA7\uFF0C\u4E0D\u9700\u8981\u6574\u4FEE\uFF01");
        }
        else {
            this.fixModal(this.houseLoss, fixPrice[this.houseLoss]);
        }
    };
    // 整修房屋弹出框
    House.prototype.fixModal = function (grade, price) {
        var _this = this;
        this.addChild(this.modal);
        this.modal.houseFix(grade, price);
        var close = Modal.btnCont.getChildAt(0);
        var sure = Modal.btnCont.getChildAt(1);
        // 点击关闭。
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeModal, this);
        // 点击确定。
        sure.touchEnabled = true;
        sure.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.closeModal();
            if (_this.goldNum >= price) {
                if (Sound.soundOpen) {
                    Sound.luckySound.play(0, 1);
                }
                // 整修房屋特效
                _this.fixEffectes();
                egret.Tween.get(_this.fixLeft).to({ x: -100, y: 350, alpha: 1 }, 500).wait(500).to({ x: -600, y: 350, alpha: 0 }, 500);
                egret.Tween.get(_this.fixRight).to({ x: 100, y: 350, alpha: 1 }, 500).call(function () {
                    this.mHouse.hLoss(this.playerLandId, 0);
                }, _this).wait(500).to({ x: 640, y: 350, alpha: 0 }, 500).call(function () {
                    this.removeChild(this.fixLeft);
                    this.removeChild(this.fixRight);
                }, _this);
                // 改变金币并存储
                _this.goldNum -= price;
                _this.goldText.text = Math.floor(_this.goldNum / 1000) + "k";
                egret.localStorage.setItem("money", _this.goldNum.toString());
                // 改变房屋折损等级并存储
                egret.localStorage.setItem("house_loss", "0");
            }
            else {
                _this.poorModal(price);
            }
        }, this);
    };
    //升级房屋
    House.prototype.hUp = function () {
        this.houseLoss = Number(egret.localStorage.getItem("house_loss"));
        if (this.houseLoss > 0) {
            if (Sound.soundOpen) {
                Sound.wrongTipSound.play(0, 1);
            }
            this.addChild(this.modal);
            this.modal.tip("当前房屋有折损，请先整修再升级！");
        }
        else {
            this.houseUp('money');
        }
    };
    House.prototype.houseUp = function (type) {
        var _this = this;
        var landArr = Global.landData[Number(this.playerLandId) - 1].houseUpPrice;
        var upPrice = landArr[Number(this.playerHouseId) % 8];
        // 提示解锁下一大陆
        if (Number(this.playerHouseId) % 8 == 0) {
            if (Sound.soundOpen) {
                Sound.tipSound.play(0, 1);
            }
            this.addChild(this.modal);
            this.modal.nextLand();
            var close_1 = Modal.btnCont.getChildAt(0);
            var cancel = Modal.btnCont.getChildAt(1);
            var goMap = Modal.btnCont.getChildAt(2);
            // 点击关闭。
            close_1.touchEnabled = true;
            close_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeModal, this);
            // 点击取消。
            cancel.touchEnabled = true;
            cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeModal, this);
            // 打开地图
            goMap.touchEnabled = true;
            goMap.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.closeModal();
                _this.goWorldMap();
            }, this);
        }
        else if (this.goldNum >= upPrice || type == "card") {
            // 房屋升级音效
            if (Sound.soundOpen) {
                Sound.upgradeSound.play(0, 1);
            }
            // 升级房屋动画
            this.upEffects();
            var houseId_1 = Number(this.playerHouseId) + 1;
            egret.Tween.get(this.ugUp).to({ x: 0, y: 0, alpha: 1 }, 500).wait(500).to({ x: 640, y: -300, alpha: 0 }, 500);
            egret.Tween.get(this.ugDown).to({ x: 0, y: 337, alpha: 1 }, 500).call(function () {
                this.mHouse.house(this.playerLandId, houseId_1);
            }, this).wait(500).to({ x: -640, y: 950, alpha: 0 }, 500).call(function () {
                this.removeChild(this.ugUp);
                this.removeChild(this.ugDown);
            }, this);
            // 改变金币并存储
            if (type != 'card') {
                this.goldNum -= upPrice;
                this.goldText.text = Math.floor(this.goldNum / 1000) + "k";
                egret.localStorage.setItem("money", this.goldNum.toString());
            }
            // 改变房屋等级并存储
            this.playerHouseId = Number(this.playerHouseId) + 1;
            this.houseGrade.text = "等级：" + this.playerHouseId;
            egret.localStorage.setItem("house", this.playerHouseId);
        }
        else {
            this.poorModal(upPrice);
        }
    };
    // 资金不足弹出框
    House.prototype.poorModal = function (price) {
        var _this = this;
        if (Sound.soundOpen) {
            Sound.wrongTipSound.play(0, 1);
        }
        this.addChild(this.modal);
        this.modal.poorModal(price);
        var close = Modal.btnCont.getChildAt(0);
        var cancel = Modal.btnCont.getChildAt(1);
        var sure = Modal.btnCont.getChildAt(2);
        // 点击关闭。
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeModal, this);
        // 点击取消。
        cancel.touchEnabled = true;
        cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeModal, this);
        // 返回游戏
        sure.touchEnabled = true;
        sure.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.closeModal();
            _this.backToGame();
        }, this);
    };
    // 关闭模态框
    House.prototype.closeModal = function () {
        if (Sound.soundOpen) {
            Sound.cancelSound.play(0, 1);
        }
        this.modal.removeChildren();
        this.removeChild(this.modal);
    };
    //消息列表弹框
    House.prototype.messageFun = function () {
        // 音效
        if (Sound.soundOpen) {
            Sound.modalSound.play(0, 1);
        }
        var news = new News();
        this.addChild(news);
    };
    // 打开礼包
    House.prototype.openGift = function () {
        var base = this._bg.addAlphafun();
        this.addChild(base);
        base.touchEnabled = true;
        var giftShining = new egret.Sprite();
        giftShining.width = 600;
        giftShining.height = 600;
        giftShining.x = 320;
        giftShining.y = 570;
        giftShining.anchorOffsetX = 300;
        giftShining.anchorOffsetY = 300;
        base.addChild(giftShining);
        giftShining.scaleX = 0.1;
        giftShining.scaleY = 0.1;
        egret.Tween.get(giftShining).to({ scaleX: 1.2, scaleY: 1.2 }, 800, egret.Ease.quartOut).to({ scaleX: 0.2, scaleY: 0.2, x: 230, y: 230 }, 300).call(function () {
            if (base && base.parent) {
                base.removeChildren();
                this.removeChild(base);
            }
        }, this);
        var shining = this._bg.element({ "name": "shining_png", "x": 300, "y": 300 });
        giftShining.addChild(shining);
        // 随机卡片类别
        var cardArr = ["attack", "defense", "rock"];
        var i = Math.floor(Math.random() * 3);
        var card = this._bg.element({ "name": "card_json." + cardArr[i] + "Front", "x": 300, "y": 300 });
        giftShining.addChild(card);
        // 改变相应卡片数量存储
        var newNum = Number(egret.localStorage.getItem(cardArr[i] + "_card")) + 1;
        egret.localStorage.setItem(cardArr[i] + "_card", newNum.toString());
    };
    House.prototype.packageFun = function () {
        var _this = this;
        // 音效
        if (Sound.soundOpen) {
            Sound.modalSound.play(0, 1);
        }
        // 加一层透明底层
        this.packageCont = this._bg.addAlphafun();
        this.addChild(this.packageCont);
        this.packageCont.touchEnabled = true;
        //背包容器
        this.backpack = new egret.Sprite();
        this.backpack.width = 580;
        this.backpack.height = 1000;
        this.backpack.anchorOffsetX = this.backpack.width / 2;
        this.backpack.anchorOffsetY = this.backpack.height / 2;
        this.packageCont.addChild(this.backpack);
        // 动态出现
        this.backpack.scaleX = 0.1;
        this.backpack.scaleY = 0.1;
        this.backpack.x = 580;
        this.backpack.y = 360;
        egret.Tween.get(this.backpack).to({ scaleX: 1, scaleY: 1, x: 320, y: 570 }, 500);
        // 关闭按钮
        var closeImg = this._bg.element({ "name": "cardCenter_json.close", "x": this.backpack.anchorOffsetX, "y": 900 });
        this.backpack.addChild(closeImg);
        closeImg.touchEnabled = true;
        closeImg.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (Sound.soundOpen) {
                Sound.cancelSound.play(0, 1);
            }
            _this.packageCont.removeChildren();
            _this.removeChild(_this.packageCont);
        }, this);
        // 背包外框
        var bpImg = this._bg.element({ "name": "package_json.pagbg", "x": this.backpack.anchorOffsetX, "y": 435 });
        this.backpack.addChild(bpImg);
        //选项卡——————
        var tab = new egret.Sprite();
        tab.x = 110;
        tab.y = 120;
        tab.width = 360;
        tab.height = 60;
        this.backpack.addChild(tab);
        var tabbg = this._bg.element({ "name": "package_json.cardbg", "x": 180, "y": 30 });
        tab.addChild(tabbg);
        // 卡券
        var cards = this._bg.element({ "name": "package_json.carddone", "x": 92, "y": 31 });
        tab.addChild(cards);
        cards.touchEnabled = true;
        cards.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.giftCont && _this.giftCont.parent) {
                if (Sound.soundOpen) {
                    Sound.switchSound.play(0, 1);
                }
                _this.backpack.addChild(_this.cardCont);
                _this.showCard();
                _this.backpack.removeChild(_this.giftCont);
                gift.texture = RES.getRes("package_json.giftup");
                cards.texture = RES.getRes("package_json.carddone");
            }
        }, this);
        //礼包
        var gift = this._bg.element({ "name": "package_json.giftup", "x": 268, "y": 31 });
        tab.addChild(gift);
        gift.touchEnabled = true;
        gift.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.cardCont && _this.cardCont.parent) {
                if (Sound.soundOpen) {
                    Sound.switchSound.play(0, 1);
                }
                _this.cardCont.removeChildren();
                _this.backpack.removeChild(_this.cardCont);
                _this.backpack.addChild(_this.giftCont);
                gift.texture = RES.getRes("package_json.giftdone");
                cards.texture = RES.getRes("package_json.cardup");
            }
        }, this);
        // 礼包容器
        this.giftCont = this.tabElCont();
        // 礼包项
        var giftEl = new egret.Sprite();
        giftEl.x = 0;
        giftEl.y = 0;
        giftEl.width = 440;
        giftEl.height = 155;
        this.giftCont.addChild(giftEl);
        var giftFrame = this._bg.npc({ "name": "package_json.gift_num", "x": 214, "y": 76 });
        giftEl.addChild(giftFrame);
        var giftNum = Number(egret.localStorage.getItem("luckBag"));
        var giftNumTxt = this._bg.addpoint({ "text": giftNum + "个", "color": "0xFFFFFF", "x": 140, "y": 90, "size": 24, "strokeColor": 0x126305 });
        giftEl.addChild(giftNumTxt);
        var openBtn = this._bg.element({ "name": "package_json.open", "x": 320, "y": 76 });
        giftEl.addChild(openBtn);
        var openTxt = this._bg.addpoint({ "text": "打 开", "color": "0xFFFFFF", "x": 290, "y": 62, "size": 28, "strokeColor": 0x126305 });
        giftEl.addChild(openTxt);
        openBtn.touchEnabled = true;
        openBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (giftNum > 0) {
                if (Sound.soundOpen) {
                    Sound.openBagSound.play(0, 1);
                }
                // 改变福袋数并存储
                giftNum--;
                giftNumTxt.text = giftNum + "个";
                egret.localStorage.setItem("luckBag", giftNum.toString());
                _this.openGift();
            }
            else if (giftNum <= 0) {
                if (Sound.soundOpen) {
                    Sound.wrongTipSound.play(0, 1);
                }
                _this.addChild(_this.modal);
                _this.modal.tip("\u5F53\u524D\u798F\u888B\u6570\u4E3A0\uFF01");
            }
        }, this);
        //卡券容器
        this.cardCont = this.tabElCont();
        this.backpack.addChild(this.cardCont);
        this.showCard();
    };
    House.prototype.showCard = function () {
        //展示所拥有的所有卡片
        var cardsArr = ["attack", "defense", "interest", "upgrade", "rock", "earth", "save"];
        var num_arr = new Array;
        var a = 0;
        for (var i = 0; i < cardsArr.length; i++) {
            var getNum = Number(egret.localStorage.getItem(cardsArr[i] + "_card"));
            if (getNum > 0) {
                var x = void 0;
                var y = void 0;
                var nx = void 0;
                var ny = void 0;
                switch (a) {
                    case 0:
                        x = 60;
                        y = 100;
                        nx = 95;
                        ny = 155;
                        break;
                    case 1:
                        x = 215;
                        y = 100;
                        nx = 250;
                        ny = 155;
                        break;
                    case 2:
                        x = 370;
                        y = 100;
                        nx = 410;
                        ny = 155;
                        break;
                    case 3:
                        x = 60;
                        y = 295;
                        nx = 95;
                        ny = 350;
                        break;
                    case 4:
                        x = 215;
                        y = 295;
                        nx = 250;
                        ny = 350;
                        break;
                    case 5:
                        x = 370;
                        y = 295;
                        nx = 410;
                        ny = 350;
                        break;
                    case 6:
                        x = 60;
                        y = 500;
                        nx = 95;
                        ny = 545;
                        break;
                    default:
                        x = 60;
                        y = 100;
                        nx = 95;
                        ny = 155;
                        break;
                }
                num_arr[a] = { cardName: cardsArr[i], num: getNum, x: x, y: y, nx: nx, ny: ny };
                a++;
            }
        }
        for (var ai = 0; ai < num_arr.length; ai++) {
            this.helement(num_arr[ai]);
        }
    };
    House.prototype.helement = function (obj) {
        var _this = this;
        var cardFront = this._bg.npc({ "name": "card_json." + obj.cardName + "Front", "x": obj.x, "y": obj.y });
        this.cards_num = this._bg.addpoint({ "text": obj.num, "color": "0xFFFFFF", "x": obj.nx, "y": obj.ny, "size": 22 });
        this.cardCont.addChild(cardFront);
        this.cardCont.addChild(this.cards_num);
        cardFront.touchEnabled = true;
        cardFront.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.cardsFun(obj.cardName);
        }, this);
    };
    //背包卡券
    House.prototype.cardsFun = function (cardName) {
        switch (cardName) {
            case 'attack':
                //攻击卡   
                if (Sound.soundOpen) {
                    Sound.modalSound.play(0, 1);
                }
                var rank = new Rank();
                this.addChild(rank);
                break;
            case 'defense':
                //防御卡 对自己使用
                this.web_defense();
                break;
            case 'interest':///
                //利息翻倍  对自己使用  0.05%
                this.web_interest();
                //待写
                break;
            case 'upgrade':
                //房屋升级  对自己使用
                this.web_upHouse();
                //待写
                break;
            case 'rock':
                this.web_rock();
                break;
            case 'earth':
                this.selectLand("earth");
                break;
            case 'save':
                this.selectLand("save");
                break;
        }
    };
    //请求socket   
    House.prototype.gotoWebsocket = function (obj) {
        //websocket互动
        this.web_socket = Connection.webSocket;
        var cmd = JSON.stringify(obj);
        this.web_socket.writeUTF(cmd);
    };
    //防御卡特效
    House.prototype.web_defense = function () {
        Sound.defenseSound.play(0, 1);
        if (Number(egret.localStorage.getItem("defense")) != 1) {
            this.defenseFun();
            var numloc = Number(egret.localStorage.getItem("defense_card")) - 1;
            this.cards_num.text = numloc.toString();
            egret.localStorage.setItem("defense_card", numloc.toString());
        }
        else {
            this.addChild(this.modal);
            this.modal.tip("正在防御中……请明天再来使用！");
        }
        egret.setTimeout(function () {
            this.packageCont.removeChildren();
            this.removeChild(this.packageCont);
        }, this, 200);
    };
    //房屋升级卡特效
    House.prototype.web_upHouse = function () {
        this.packageCont.removeChildren();
        this.removeChild(this.packageCont);
        this.houseLoss = Number(egret.localStorage.getItem("house_loss"));
        if (this.houseLoss > 0) {
            this.addChild(this.modal);
            this.modal.tip("当前房屋有折损，请先整修再升级！");
        }
        else {
            this.houseUp('card');
            var numloc = Number(egret.localStorage.getItem("upgrade_card")) - 1;
            this.cards_num.text = numloc.toString();
            egret.localStorage.setItem("upgrade_card", numloc.toString());
        }
    };
    //陨石卡特效
    House.prototype.web_rock = function () {
        egret.setTimeout(function () {
            if (Sound.soundOpen) {
                Sound.rockSound.play(0, 1);
            }
        }, this, 1200);
        this.gotoWebsocket({ do: "rock", userId: egret.localStorage.getItem("userId"), coust: '' });
        var rocknumloc = Number(egret.localStorage.getItem("rock_card")) - 1;
        this.cards_num.text = rocknumloc.toString();
        egret.localStorage.setItem("rock_card", rocknumloc.toString());
        egret.setTimeout(function () {
            this.packageCont.removeChildren();
            this.removeChild(this.packageCont);
        }, this, 200);
    };
    //利息翻倍卡
    House.prototype.web_interest = function () {
        if (Sound.soundOpen) {
            Sound.interestSound.play(0, 1);
        }
        var interest_num = Number(egret.localStorage.getItem("interest")) * 2;
        egret.localStorage.setItem("interest", interest_num.toString());
        this.addChild(this.modal);
        this.modal.tip("翻倍后利息：" + interest_num + " ,当前存款：" + egret.localStorage.getItem("deposit"));
        if (interest_num > 0) {
            var interestNum = Number(egret.localStorage.getItem("interest_card")) - 1;
            this.cards_num.text = interestNum.toString();
            egret.localStorage.setItem("interest_card", interestNum.toString());
        }
        this.packageCont.removeChildren();
        this.removeChild(this.packageCont);
    };
    House.prototype.selectLand = function (params) {
        var _this = this;
        if (Sound.soundOpen) {
            Sound.tipSound.play(0, 1);
        }
        // 加一层透明底层
        var bigland = this.bigModal();
        this.addChild(bigland);
        var landnum = Number(egret.localStorage.getItem('land'));
        var txtTop = this._bg.addtxt({ "text": "请选择对那个大陆使用", "color": "0x000000", "x": 60, "y": 50, "size": 22 });
        this.modalFrameLand.addChild(txtTop);
        var x = 50;
        var y = 100;
        var _loop_1 = function (i) {
            if (i == 0) {
                x = x;
            }
            else if (i > 0 && i < 3) {
                x = x + 120;
                y = 100;
            }
            else if ((i == 3)) {
                x = 50;
                y = 150;
            }
            else if (i > 3 && i < 6) {
                x = x + 120;
            }
            else if (i == 6) {
                x = 50;
                y = 200;
            }
            else if (i > 6 && i <= 8) {
                x = x + 120;
                y = 200;
            }
            var num = this_1._bg.addpoint({ "text": Global.landData[i].landName, "color": "0xFFFFFF", "x": x, "y": y, "size": 22 });
            this_1.modalFrameLand.addChild(num);
            num.touchEnabled = true;
            num.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                if (Number(_this.playerLandId) > i + 1) {
                    if (params == "earth") {
                        if (Sound.soundOpen) {
                            Sound.earthSound.play(0, 1);
                        }
                    }
                    else if (params == "save") {
                        if (Sound.soundOpen) {
                            Sound.saveSound.play(0, 1);
                        }
                    }
                }
                _this.gotoWebsocket({ do: params, userId: egret.localStorage.getItem("userId"), coust: 'all', land: i + 1 });
                num.textColor = 0x000000;
                var numloc = Number(egret.localStorage.getItem(params + "_card")) - 1;
                _this.cards_num.text = numloc.toString();
                egret.localStorage.setItem(params + "_card", numloc.toString());
                egret.setTimeout(function () {
                    bigland.removeChildren();
                    this.removeChild(bigland);
                    this.removeChild(this.packageCont);
                }, _this, 500);
            }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < landnum; i++) {
            _loop_1(i);
        }
    };
    //防御卡
    House.prototype.defenseFun = function () {
        //存入时间
        egret.localStorage.setItem("defense_time", this.curDate);
        this.defenseUse.alpha = 1;
        egret.localStorage.setItem("defense", "1");
        //更新数据库
        Global.updateApi();
    };
    House.prototype.bigModal = function () {
        var _this = this;
        //模态框总容器，加一层透明黑色底层
        var modalCont = this._bg.addAlphafun();
        modalCont.touchEnabled = true;
        modalCont.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { }, this);
        // 模态框容器
        this.modalFrameLand = new egret.Sprite();
        this.modalFrameLand.x = 320;
        this.modalFrameLand.y = 570;
        this.modalFrameLand.width = 430;
        this.modalFrameLand.height = 270;
        this.modalFrameLand.anchorOffsetX = this.modalFrameLand.width / 2;
        this.modalFrameLand.anchorOffsetY = this.modalFrameLand.height / 2;
        modalCont.addChild(this.modalFrameLand);
        // 动态出现
        this.modalFrameLand.scaleX = 0.3;
        this.modalFrameLand.scaleY = 0.3;
        egret.Tween.get(this.modalFrameLand).to({ scaleX: 1, scaleY: 1 }, 200);
        // 模态框外框
        var mfImg = this._bg.element({ "name": "tipamend_json.tipBig", "x": 215, "y": 135, });
        this.modalFrameLand.addChild(mfImg);
        // 关闭按钮
        var closeImg = this._bg.element({ "name": "tipamend_json.tipclose", "x": 422, "y": 12 });
        this.modalFrameLand.addChild(closeImg);
        closeImg.touchEnabled = true;
        closeImg.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (Sound.soundOpen) {
                Sound.cancelSound.play(0, 1);
            }
            modalCont.removeChildren();
            _this.removeChild(modalCont);
        }, this);
        return modalCont;
    };
    // 背包选项卡容器
    House.prototype.tabElCont = function () {
        var elContainer = new egret.Sprite();
        elContainer.x = 80;
        elContainer.y = 200;
        elContainer.width = 440;
        elContainer.height = 600;
        return elContainer;
    };
    return House;
}(egret.DisplayObjectContainer));
__reflect(House.prototype, "House");
var HouseMap = (function (_super) {
    __extends(HouseMap, _super);
    function HouseMap(id) {
        var _this = _super.call(this) || this;
        _this.landId = id;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    HouseMap.prototype.onAddToStage = function (event) {
        var _this = this;
        // 数据
        this.playerHouseId = egret.localStorage.getItem("house");
        this._bg = new Background();
        // 房屋等级总容器，加一层透明黑色底层
        this.houseCont = new egret.Sprite();
        this.addChild(this.houseCont);
        this.houseCont.graphics.beginFill(0x000000, 0.6);
        this.houseCont.graphics.drawRect(0, 0, 640, 1138);
        this.houseCont.graphics.endFill();
        this.houseCont.touchEnabled = true;
        this.houseCont.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { }, this);
        // 动态特效容器
        HouseMap.effectsCont = new egret.Sprite();
        HouseMap.effectsCont.x = 320;
        HouseMap.effectsCont.y = 570;
        HouseMap.effectsCont.width = 640;
        HouseMap.effectsCont.height = 1138;
        HouseMap.effectsCont.anchorOffsetX = HouseMap.effectsCont.width / 2;
        HouseMap.effectsCont.anchorOffsetY = HouseMap.effectsCont.height / 2;
        HouseMap.effectsCont.scaleX = 0.3;
        HouseMap.effectsCont.scaleY = 0.3;
        this.houseCont.addChild(HouseMap.effectsCont);
        // 房屋等级显示容器
        this.gradeCont = new egret.Sprite();
        this.gradeCont.x = 320;
        this.gradeCont.y = 570;
        this.gradeCont.width = 640;
        this.gradeCont.height = 1138;
        this.gradeCont.anchorOffsetX = this.gradeCont.width / 2;
        this.gradeCont.anchorOffsetY = this.gradeCont.height / 2;
        HouseMap.effectsCont.addChild(this.gradeCont);
        // 关闭按钮
        var close = this._bg.element({ "name": "rank_json.close", "x": 322, "y": 990 });
        this.gradeCont.addChild(close);
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // 音效
            if (Sound.soundOpen) {
                Sound.cancelSound.play(0, 1);
            }
            _this.closeEvent();
        }, this);
        // 房屋弹出框外框
        var houseFrame = this._bg.element({ "name": "hmapbg2_png", "x": 322, "y": 560 });
        this.gradeCont.addChild(houseFrame);
        this.houseGrade(this.landId);
    };
    HouseMap.prototype.housePath = function () {
        // 房屋线路
        var housePath = this._bg.element({ "name": "basic_png", "x": 335, "y": 580 });
        this.gradeCont.addChild(housePath);
    };
    HouseMap.prototype.closeEvent = function () {
        if (this && this.parent) {
            this.parent.removeChild(this);
        }
    };
    // 房子等级
    HouseMap.prototype.houseGrade = function (id) {
        switch (id) {
            case "1":
                this.housePath();
                // 房子名称
                this.houseName({ houseId: "1", x: 163, y: 324, name: "1-1" });
                this.houseName({ houseId: "2", x: 378, y: 350, name: "1-2" });
                this.houseName({ houseId: "3", x: 416, y: 517, name: "1-3" });
                this.houseName({ houseId: "4", x: 248, y: 517, name: "1-4" });
                this.houseName({ houseId: "5", x: 181, y: 657, name: "1-5" });
                this.houseName({ houseId: "6", x: 328, y: 670, name: "1-6" });
                this.houseName({ houseId: "7", x: 459, y: 743, name: "1-7" });
                this.houseName({ houseId: "8", x: 292, y: 834, name: "1-8" });
                break;
            case "2":
                this.housePath();
                this.houseName({ houseId: "9", x: 163, y: 324, name: "2-1" });
                this.houseName({ houseId: "10", x: 378, y: 350, name: "2-2" });
                this.houseName({ houseId: "11", x: 416, y: 517, name: "2-3" });
                this.houseName({ houseId: "12", x: 248, y: 517, name: "2-4" });
                this.houseName({ houseId: "13", x: 181, y: 657, name: "2-5" });
                this.houseName({ houseId: "14", x: 328, y: 670, name: "2-6" });
                this.houseName({ houseId: "15", x: 459, y: 743, name: "2-7" });
                this.houseName({ houseId: "16", x: 292, y: 834, name: "2-8" });
                break;
            case "3":
                this.housePath();
                this.houseName({ houseId: "17", x: 163, y: 324, name: "3-1" });
                this.houseName({ houseId: "18", x: 378, y: 350, name: "3-2" });
                this.houseName({ houseId: "19", x: 416, y: 517, name: "3-3" });
                this.houseName({ houseId: "20", x: 248, y: 517, name: "3-4" });
                this.houseName({ houseId: "21", x: 181, y: 657, name: "3-5" });
                this.houseName({ houseId: "22", x: 328, y: 670, name: "3-6" });
                this.houseName({ houseId: "23", x: 459, y: 743, name: "3-7" });
                this.houseName({ houseId: "24", x: 292, y: 834, name: "3-8" });
                break;
            case "4":
                this.housePath();
                this.houseName({ houseId: "25", x: 163, y: 324, name: "4-1" });
                this.houseName({ houseId: "26", x: 378, y: 350, name: "4-2" });
                this.houseName({ houseId: "27", x: 416, y: 517, name: "4-3" });
                this.houseName({ houseId: "28", x: 248, y: 517, name: "4-4" });
                this.houseName({ houseId: "29", x: 181, y: 657, name: "4-5" });
                this.houseName({ houseId: "30", x: 328, y: 670, name: "4-6" });
                this.houseName({ houseId: "31", x: 459, y: 743, name: "4-7" });
                this.houseName({ houseId: "32", x: 292, y: 834, name: "4-8" });
                break;
            case "5":
                this.housePath();
                this.houseName({ houseId: "33", x: 163, y: 324, name: "5-1" });
                this.houseName({ houseId: "34", x: 378, y: 350, name: "5-2" });
                this.houseName({ houseId: "35", x: 416, y: 517, name: "5-3" });
                this.houseName({ houseId: "36", x: 248, y: 517, name: "5-4" });
                this.houseName({ houseId: "37", x: 181, y: 657, name: "5-5" });
                this.houseName({ houseId: "38", x: 328, y: 670, name: "5-6" });
                this.houseName({ houseId: "39", x: 459, y: 743, name: "5-7" });
                this.houseName({ houseId: "40", x: 292, y: 834, name: "5-8" });
                break;
            case "6":
                this.housePath();
                this.houseName({ houseId: "41", x: 163, y: 324, name: "6-1" });
                this.houseName({ houseId: "42", x: 378, y: 350, name: "6-2" });
                this.houseName({ houseId: "43", x: 416, y: 517, name: "6-3" });
                this.houseName({ houseId: "44", x: 248, y: 517, name: "6-4" });
                this.houseName({ houseId: "45", x: 181, y: 657, name: "6-5" });
                this.houseName({ houseId: "46", x: 328, y: 670, name: "6-6" });
                this.houseName({ houseId: "47", x: 459, y: 743, name: "6-7" });
                this.houseName({ houseId: "48", x: 292, y: 834, name: "6-8" });
                break;
            case "7":
                this.housePath();
                this.houseName({ houseId: "49", x: 163, y: 324, name: "7-1" });
                this.houseName({ houseId: "50", x: 378, y: 350, name: "7-2" });
                this.houseName({ houseId: "51", x: 416, y: 517, name: "7-3" });
                this.houseName({ houseId: "52", x: 248, y: 517, name: "7-4" });
                this.houseName({ houseId: "53", x: 181, y: 657, name: "7-5" });
                this.houseName({ houseId: "54", x: 328, y: 670, name: "7-6" });
                this.houseName({ houseId: "55", x: 459, y: 743, name: "7-7" });
                this.houseName({ houseId: "56", x: 292, y: 834, name: "7-8" });
                break;
            case "8":
                this.housePath();
                this.houseName({ houseId: "57", x: 163, y: 324, name: "8-1" });
                this.houseName({ houseId: "58", x: 378, y: 350, name: "8-2" });
                this.houseName({ houseId: "59", x: 416, y: 517, name: "8-3" });
                this.houseName({ houseId: "60", x: 248, y: 517, name: "8-4" });
                this.houseName({ houseId: "61", x: 181, y: 657, name: "8-5" });
                this.houseName({ houseId: "62", x: 328, y: 670, name: "8-6" });
                this.houseName({ houseId: "63", x: 459, y: 743, name: "8-7" });
                this.houseName({ houseId: "64", x: 292, y: 834, name: "8-8" });
                break;
            case "9":
                this.housePath();
                this.houseName({ houseId: "65", x: 163, y: 324, name: "9-1" });
                this.houseName({ houseId: "66", x: 378, y: 350, name: "9-2" });
                this.houseName({ houseId: "67", x: 416, y: 517, name: "9-3" });
                this.houseName({ houseId: "68", x: 248, y: 517, name: "9-4" });
                this.houseName({ houseId: "69", x: 181, y: 657, name: "9-5" });
                this.houseName({ houseId: "70", x: 328, y: 670, name: "9-6" });
                this.houseName({ houseId: "71", x: 459, y: 743, name: "9-7" });
                this.houseName({ houseId: "72", x: 292, y: 834, name: "9-8" });
                break;
            case "10":
                var waitCursive = this._bg.element({ "name": "waitCursive_png", "x": this.houseCont.width / 2, "y": 600 });
                this.gradeCont.addChild(waitCursive);
                break;
            default:
                var waitRegular = this._bg.element({ "name": "waitRegular_png", "x": this.houseCont.width / 2, "y": 600 });
                this.gradeCont.addChild(waitRegular);
                break;
        }
    };
    HouseMap.prototype.houseName = function (obj) {
        // obj = {
        //   houseId: id,
        //   x:x,
        //   y:y,
        //   name:name
        // }
        var _this = this;
        var hTextCont = new egret.Sprite();
        hTextCont.width = 80;
        hTextCont.height = 80;
        hTextCont.x = obj.x;
        hTextCont.y = obj.y;
        hTextCont.anchorOffsetX = hTextCont.width / 2;
        hTextCont.anchorOffsetY = hTextCont.height / 2;
        this.gradeCont.addChild(hTextCont);
        var id = new egret.TextField();
        id.text = obj.houseId;
        hTextCont.addChild(id);
        id.visible = false;
        var houseText = this._bg.addtxt({ "text": obj.name, "color": "0xffffff", "x": 40, "y": 40, "size": 26 });
        houseText.width = 80;
        houseText.height = 80;
        houseText.anchorOffsetX = houseText.width / 2;
        houseText.anchorOffsetY = houseText.height / 2;
        houseText.textAlign = egret.HorizontalAlign.CENTER;
        houseText.verticalAlign = egret.VerticalAlign.MIDDLE;
        houseText.bold = true;
        houseText.stroke = 2;
        houseText.strokeColor = 0xA75B00;
        hTextCont.addChild(houseText);
        if (obj.houseId == this.playerHouseId) {
            egret.Tween.get(houseText, { loop: true }).to({ alpha: 0.5 }, 800).wait(600).to({ alpha: 1 }, 800).wait(600);
            egret.Tween.get(houseText, { loop: true }).to({ rotation: 360 }, 10000);
            hTextCont.touchEnabled = true;
            hTextCont.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                // 音效
                if (Sound.soundOpen) {
                    Sound.cardSound.play(0, 1);
                }
                _this.closeEvent();
                Newscenes.getInstance().changeScene('House');
            }, this);
        }
        else {
            hTextCont.touchEnabled = true;
            hTextCont.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                // 音效
                if (Sound.soundOpen) {
                    Sound.wrongTipSound.play(0, 1);
                }
            }, this);
        }
    };
    return HouseMap;
}(egret.Sprite));
__reflect(HouseMap.prototype, "HouseMap");
var Bank = (function (_super) {
    __extends(Bank, _super);
    function Bank(money, moneyCont) {
        var _this = _super.call(this) || this;
        _this._modal = new Modal();
        _this.goldNum = money;
        _this.goldCont = moneyCont;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Bank.prototype.onAddToStage = function (event) {
        var _this = this;
        this._bg = new Background();
        this.depNum = Number(egret.localStorage.getItem("deposit"));
        this.bankType = "save";
        this.divisor = 1 / 2;
        // 弹框总容器，加一层透明黑色底层
        var bankBaseCont = new egret.Sprite();
        this.addChild(bankBaseCont);
        bankBaseCont.graphics.beginFill(0x000000, 0.6);
        bankBaseCont.graphics.drawRect(0, 0, this.stage.width, this.stage.height);
        bankBaseCont.graphics.endFill();
        bankBaseCont.touchEnabled = true;
        bankBaseCont.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { }, this);
        // 弹框显示容器
        this.mainCont = new egret.Sprite();
        this.mainCont.x = 320;
        this.mainCont.y = this.stage.height / 2;
        this.mainCont.width = 540;
        this.mainCont.height = 500;
        // this.mainCont.graphics.beginFill(0x00ffff, 0.6);
        // this.mainCont.graphics.drawRect(0, 0, 540, 500);
        // this.mainCont.graphics.endFill();
        this.mainCont.anchorOffsetX = this.mainCont.width / 2;
        this.mainCont.anchorOffsetY = this.mainCont.height / 2;
        bankBaseCont.addChild(this.mainCont);
        // 动态出现
        this.mainCont.scaleX = 0.1;
        this.mainCont.scaleY = 0.1;
        egret.Tween.get(this.mainCont).to({ x: 100, y: 530 }, 1).to({ scaleX: 1, scaleY: 1, x: 320, y: this.stage.height / 2 }, 500);
        // 银行弹框外框
        var bankFrame = this._bg.element({ "name": "bank_json.bankbg", "x": 270, "y": 250 });
        this.mainCont.addChild(bankFrame);
        // 关闭按钮
        Bank.close = this._bg.element({ "name": "bank_json.close", "x": 180, "y": 460 });
        this.mainCont.addChild(Bank.close);
        // 确定按钮
        this.sure = this._bg.element({ "name": "bank_json.sure", "x": 360, "y": 460 });
        this.mainCont.addChild(this.sure);
        this.sure.touchEnabled = true;
        this.sure.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.bankType == "save") {
                if (_this.goldNum > 0) {
                    // 存钱成功音效
                    if (Sound.soundOpen) {
                        Sound.getLuckyBagSound.play(0, 1);
                    }
                    var changeNum = Math.ceil(_this.goldNum * _this.divisor);
                    // 改变存款并存储
                    _this.depNum += changeNum;
                    egret.localStorage.setItem("deposit", _this.depNum.toString());
                    //存钱的时间
                    egret.localStorage.setItem("deposit_time", egret.localStorage.getItem("curDate"));
                    // 改变金币数并存储
                    _this.goldNum -= changeNum;
                    _this.goldCont.text = Math.floor(_this.goldNum / 1000) + "k";
                    egret.localStorage.setItem("money", _this.goldNum.toString());
                    bankBaseCont.removeChildren();
                    _this.removeChild(bankBaseCont);
                    _this.addChild(_this._modal);
                    _this._modal.bankSuccess();
                    var successClose = Modal.btnCont.getChildAt(0);
                    new Game().bankSucClose(successClose, _this.parent);
                }
                else {
                    // 提示资金不足音效
                    if (Sound.soundOpen) {
                        Sound.wrongTipSound.play(0, 1);
                    }
                    _this.addChild(_this._modal);
                    _this._modal.tip("当前资金不足！");
                }
            }
            else if (_this.bankType == "draw") {
                if (_this.depNum > 0) {
                    // 取钱成功音效
                    if (Sound.soundOpen) {
                        Sound.getLuckyBagSound.play(0, 1);
                    }
                    var changeNum = Math.ceil(_this.depNum * _this.divisor);
                    // 改变存款并存储
                    _this.depNum -= changeNum;
                    egret.localStorage.setItem("deposit", _this.depNum.toString());
                    // 改变金币数并存储
                    _this.goldNum += changeNum;
                    _this.goldNum = _this.goldNum + Number(egret.localStorage.getItem("interest"));
                    _this.goldCont.text = Math.floor(_this.goldNum / 1000) + "k";
                    egret.localStorage.setItem("interest", "0");
                    egret.localStorage.setItem("money", _this.goldNum.toString());
                    bankBaseCont.removeChildren();
                    _this.removeChild(bankBaseCont);
                    _this.addChild(_this._modal);
                    _this._modal.bankSuccess();
                    var successClose = Modal.btnCont.getChildAt(0);
                    new Game().bankSucClose(successClose, _this.parent);
                }
                else {
                    // 提示资金不足音效
                    if (Sound.soundOpen) {
                        Sound.wrongTipSound.play(0, 1);
                    }
                    _this.addChild(_this._modal);
                    _this._modal.tip("当前没有存款金额！");
                }
                Global.updateApi();
            }
        }, this);
        // 当前存款
        var deposit = new egret.Sprite();
        deposit.width = 400;
        deposit.height = 50;
        deposit.x = 80;
        deposit.y = 130;
        this.mainCont.addChild(deposit);
        var coin = this._bg.element({ "name": "bank_json.coin", "x": 22, "y": 26 });
        deposit.addChild(coin);
        var depTxt = this._bg.addtxt({ "text": "\u5F53\u524D\u5B58\u6B3E\uFF1A" + this.depNum + " \u5143", "color": "0xffffff", "x": 50, "y": 14, "size": 24 });
        depTxt.bold = true;
        depTxt.strokeColor = 0x3A230A;
        depTxt.stroke = 2;
        deposit.addChild(depTxt);
        // 存钱取钱
        var save = this._bg.oElement({ "name": "bank_json.save", "x": 71, "y": 195 });
        this.mainCont.addChild(save);
        var draw = this._bg.oElement({ "name": "bank_json.draw", "x": 71, "y": 195 });
        this.mainCont.addChild(draw);
        draw.visible = false;
        var drawGray = this._bg.oElement({ "name": "bank_json.drawTxtGray", "x": 269, "y": 195 });
        this.mainCont.addChild(drawGray);
        drawGray.touchEnabled = true;
        drawGray.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // tab转换音效
            if (Sound.soundOpen) {
                Sound.switchSound.play(0, 1);
            }
            save.visible = false;
            drawGray.visible = false;
            draw.visible = true;
            saveGray.visible = true;
            _this.bankType = "draw";
        }, this);
        var saveGray = this._bg.oElement({ "name": "bank_json.saveTxtGray", "x": 74, "y": 195 });
        this.mainCont.addChild(saveGray);
        saveGray.visible = false;
        saveGray.touchEnabled = true;
        saveGray.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // tab转换音效
            if (Sound.soundOpen) {
                Sound.switchSound.play(0, 1);
            }
            save.visible = true;
            drawGray.visible = true;
            draw.visible = false;
            saveGray.visible = false;
            _this.bankType = "save";
        }, this);
        // 选中
        var select = this._bg.element({ "name": "bank_json.selecte", "x": 170, "y": 335 });
        select.rotation = 90;
        this.mainCont.addChild(select);
        // 额度
        var half = this._bg.addtxt({ "text": "\u4E00\u534A", "color": "0xffffff", "x": 134, "y": 302, "size": 30 });
        half.width = 70;
        half.height = 70;
        half.verticalAlign = egret.VerticalAlign.MIDDLE;
        half.textAlign = egret.HorizontalAlign.CENTER;
        half.bold = true;
        half.strokeColor = 0x894000;
        half.stroke = 3;
        this.mainCont.addChild(half);
        half.touchEnabled = true;
        half.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // tab转换音效
            if (Sound.soundOpen) {
                if (_this.divisor == 1) {
                    Sound.switchSound.play(0, 1);
                }
            }
            egret.Tween.get(select).to({ x: 170 }, 400, egret.Ease.quintOut);
            _this.divisor = 1 / 2;
        }, this);
        var all = this._bg.addtxt({ "text": "\u5168\u90E8", "color": "0xffffff", "x": 324, "y": 302, "size": 30 });
        all.width = 70;
        all.height = 70;
        all.verticalAlign = egret.VerticalAlign.MIDDLE;
        all.textAlign = egret.HorizontalAlign.CENTER;
        all.bold = true;
        all.strokeColor = 0x894000;
        all.stroke = 3;
        this.mainCont.addChild(all);
        all.touchEnabled = true;
        all.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // tab转换音效
            if (Sound.soundOpen) {
                if (_this.divisor == 1 / 2) {
                    Sound.switchSound.play(0, 1);
                }
            }
            egret.Tween.get(select).to({ x: 356 }, 400, egret.Ease.quintOut);
            _this.divisor = 1;
        }, this);
    };
    return Bank;
}(egret.Sprite));
__reflect(Bank.prototype, "Bank");
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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this._bg = new Background();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        var loading = new egret.Bitmap();
        loading.width = 640;
        loading.height = 1138;
        loading.texture = RES.getRes("loading_png");
        this.addChild(loading);
        var handleBase = new egret.Sprite();
        handleBase.x = 78;
        handleBase.y = 922;
        handleBase.width = 500;
        handleBase.height = 40;
        this.addChild(handleBase);
        this.handle = new egret.Bitmap();
        this.handle.x = 0;
        this.handle.y = 0;
        this.handle.texture = RES.getRes("loadHandle_png");
        this.handle.width = 0;
        this.handle.scale9Grid = new egret.Rectangle(10, 15, 358, 1);
        handleBase.addChild(this.handle);
        this.textField = new egret.TextField();
        handleBase.addChild(this.textField);
        this.textField.y = 6;
        this.textField.width = 500;
        this.textField.height = 40;
        this.textField.textAlign = "center";
        this.textField.size = 24;
        this.textField.bold = true;
        this.textField.stroke = 3;
        this.textField.italic = true;
        this.textField.strokeColor = 0x22712A;
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.handle.width = current * 500 / total;
        var num = Math.floor((current / total) * 100);
        this.textField.text = "Loading..." + num + "%";
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this._loadTimes = 0;
        _this._getDateTimes = 0;
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
        // RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadConfig("default.res.json", "https://dfw.hebzycw.com/resource/");
        //好友互动  websocket
        Connection.initWebSocket();
    };
    // 微信登录
    Main.prototype.checkLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
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
                return [2 /*return*/];
            });
        });
    };
    /**
     * 配置文件加载失败，重新加载一次。
     */
    Main.prototype.onConfigLoadErr = function (event) {
        // RES.loadConfig("resource/default.res.json", "resource/");
        RES.loadConfig("default.res.json", "https://dfw.hebzycw.com/resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupErr, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("loading", 1);
        RES.loadGroup("preload", 0);
    };
    Main.prototype.onItemLoadError = function (e) {
        console.log(e);
        console.warn("Url:" + e.resItem.url + " has failed to load");
    };
    /**
     * preload资源组加载失败
     */
    Main.prototype.onGroupErr = function (e) {
        this._loadTimes++;
        if (this._loadTimes > 3) {
            console.log("网络异常，请重新进入游戏");
            wx.showLoading({
                title: '网络不稳定',
                mask: false,
                success: function (res) { },
                fail: function (res) { },
                complete: function (res) { }
            });
        }
        else {
            console.log("重新加载组资源");
            RES.loadGroup(e.groupName);
        }
    };
    /**
     * preload资源组加载完成
     */
    Main.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "loading") {
            this.loadingView.createView();
        }
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
                    egret.localStorage.setItem("userId", res.data.userId);
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
                _this.getnews(res);
                var time = new Date(res.header.Date);
                var curDate = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
                //服务器时间
                if (!egret.localStorage.setItem("curDate", curDate)) {
                    egret.localStorage.setItem("curDate", curDate);
                }
            },
            fail: function (res) {
                // 数据获取失败，重新获取数据
                _this._getDateTimes++;
                if (_this._getDateTimes > 3) {
                    console.log("网络异常，请重新进入游戏");
                    wx.showLoading({
                        title: '网络不稳定',
                        mask: false,
                        success: function (res) { },
                        fail: function (res) { },
                        complete: function (res) { }
                    });
                }
                else {
                    console.log("获取数据失败，重新获取" + res.errMsg);
                    _this.getData(userId);
                }
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
            withShareTicket: false,
            success: function (res) {
                // console.log(1233321322);
            },
            fail: function (res) { },
            complete: function (res) { }
        });
        wx.onShareAppMessage(function () {
            return {
                title: "来呀~快活呀~",
                imageUrl: "https://dfw.hebzycw.com/resource/assets/share1.png",
                query: "userId=" + egret.localStorage.getItem("userId")
            };
        });
        // query: "userId="+egret.localStorage.getItem("userId")
        // 声音文件
        new Sound();
        this.addChild(Newscenes.getInstance());
        var share = wx.getLaunchOptionsSync();
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
    };
    //获取消息
    Main.prototype.updateFriendId = function (shareId) {
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
            success: function (res) {
                egret.localStorage.setItem("friendsId", res);
            },
            fail: function (res) {
            },
            complete: function (res) { }
        });
    };
    //获取消息
    Main.prototype.getnews = function (res) {
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
            success: function (res) {
                console.log("获取离线消息");
                console.log(res);
                Global.newset(res);
            },
            fail: function (res) {
            },
            complete: function (res) { }
        });
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Modal.prototype.onAddToStage = function () {
        this._bg = new Background();
        //模态框总容器，加一层透明黑色底层
        var modalCont = new egret.Sprite();
        this.addChild(modalCont);
        modalCont.graphics.beginFill(0x000000, 0.4);
        modalCont.graphics.drawRect(0, 0, 640, 1138);
        modalCont.graphics.endFill();
        modalCont.touchEnabled = true;
        modalCont.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { }, this);
        // 模态框容器
        this.modalFrame = new egret.Sprite();
        this.modalFrame.x = 320;
        this.modalFrame.y = 570;
        this.modalFrame.width = 430;
        this.modalFrame.height = 270;
        // this.modalFrame.graphics.beginFill(0x00ff00, 0.6);
        // this.modalFrame.graphics.drawRect(0, 0, 430, 270);
        // this.modalFrame.graphics.endFill();
        this.modalFrame.anchorOffsetX = this.modalFrame.width / 2;
        this.modalFrame.anchorOffsetY = this.modalFrame.height / 2;
        modalCont.addChild(this.modalFrame);
        // 动态出现
        this.modalFrame.scaleX = 0.3;
        this.modalFrame.scaleY = 0.3;
        egret.Tween.get(this.modalFrame).to({ scaleX: 1, scaleY: 1 }, 200);
        // 模态框外框
        var mfImg = this._bg.element({ "name": "tipamend_json.tipframe", "x": 215, "y": 135 });
        this.modalFrame.addChild(mfImg);
        // 按钮容器
        Modal.btnCont = new egret.Sprite();
        Modal.btnCont.x = 0;
        Modal.btnCont.y = 0;
        Modal.btnCont.width = 430;
        Modal.btnCont.height = 270;
        this.modalFrame.addChild(Modal.btnCont);
        // 关闭
        var closeImg = this._bg.element({ "name": "tipamend_json.tipclose", "x": 422, "y": 50 });
        Modal.btnCont.addChild(closeImg);
    };
    // 好运模态框
    Modal.prototype.luckModal = function () {
        var randomGold = Math.ceil(Math.random() * 10) * 100; // 100-1000
        var message = [
            "\u8E29\u5230\u72D7\u5C4E\u5566\uFF01\u83B7\u5F97" + randomGold + "\u91D1\u5E01\u5B89\u6170\u5956\uFF01",
            "\u51FA\u95E8\u6361\u5230" + randomGold + "\u91D1\u5E01\uFF01",
            "\u6361\u5230\u94B1\u5305\uFF0C\u83B7\u5F97\u5931\u4E3B" + randomGold + "\u91D1\u5E01\u611F\u8C22\uFF01",
            "\u4E70\u5F69\u7968\u4E2D\u5956\u5566\uFF01\u606D\u559C\u83B7\u5F97" + randomGold + "\u91D1\u5E01\uFF01",
            "\u5929\u4E0A\u6389\u9985\u997C\uFF0C\u88AB" + randomGold + "\u91D1\u5E01\u7838\u4E2D\u5566\uFF01"
        ];
        var rdmMessage = Math.floor(Math.random() * message.length);
        this.modalFrame.addChild(this.info(message[rdmMessage]));
        Modal.btnCont.addChild(this.button("确定", 135, 180));
        var goldNum = this._bg.addtxt({ text: randomGold, textColor: 0xffffff, x: 0, y: 0 });
        Modal.btnCont.addChild(goldNum);
        goldNum.visible = false;
    };
    // 坏运模态框
    Modal.prototype.badLuckModal = function () {
        var randomGold = Math.ceil(Math.random() * 10) * 100; // 100-1000
        var message = [
            "\u9152\u9A7E\u88AB\u62D8\u7559\uFF0C\u7F5A\u6B3E" + randomGold + "\u91D1\u5E01\uFF01",
            "\u592A\u5584\u826F\uFF0C\u88AB\u9A97\u5B50\u9A97\u4E86" + randomGold + "\u91D1\u5E01\uFF01",
            "\u670B\u53CB\u627E\u4F60\u501F\u8D70\u4E86" + randomGold + "\u91D1\u5E01\uFF01",
            "\u6253\u788E\u5546\u5E97\u7684\u73BB\u7483\u74F6\uFF0C\u8D54\u507F" + randomGold + "\u91D1\u5E01\uFF01",
            "\u6253\u2026\u6253\u2026\u6253\u52AB\uFF0C\u4EA4\u51FA" + randomGold + "\u91D1\u5E01\u8FC7\u8DEF\u8D39\uFF01"
        ];
        var rdmMessage = Math.floor(Math.random() * message.length);
        this.modalFrame.addChild(this.info(message[rdmMessage]));
        Modal.btnCont.addChild(this.button("确定", 135, 180));
        var goldNum = this._bg.addtxt({ text: randomGold, textColor: 0xffffff, x: 0, y: 0 });
        Modal.btnCont.addChild(goldNum);
        goldNum.visible = false;
    };
    // 医院模态框
    Modal.prototype.hospitModal = function () {
        var randomGold = Math.ceil(Math.random() * 10) * 100; // 100-1000
        var message = [
            "\u88AB\u6D41\u6D6A\u72D7\u54AC\u4F24\uFF0C\u6253\u72C2\u72AC\u75AB\u82D7\u7528\u6389" + randomGold + "\u91D1\u5E01\uFF01",
            "\u4E0B\u96EA\u5929\u6ED1\u5012\u6454\u4F24\uFF0C\u4F4F\u9662\u7528\u6389" + randomGold + "\u91D1\u5E01\uFF01",
            "\u5403\u591C\u5BB5\u5403\u574F\u4E86\u809A\u5B50\uFF0C\u770B\u75C5\u7528\u6389" + randomGold + "\u91D1\u5E01\uFF01",
            "\u957F\u4E86\u86C0\u7259\uFF0C\u62D4\u7259\u7528\u6389" + randomGold + "\u91D1\u5E01\uFF01"
        ];
        var rdmMessage = Math.floor(Math.random() * message.length);
        this.modalFrame.addChild(this.info(message[rdmMessage]));
        Modal.btnCont.addChild(this.button("确定", 135, 180));
        var goldNum = this._bg.addtxt({ text: randomGold, textColor: 0xffffff, x: 0, y: 0 });
        Modal.btnCont.addChild(goldNum);
        goldNum.visible = false;
    };
    // 活动板模态框
    Modal.prototype.actModal = function () {
        this.customTip("Big");
        this.modalFrame.addChild(this.info("每日活动得福袋啦！有机会获得稀缺卡片哦！攻击好友绝不手软！邀请好友一起来互相伤害吧~"));
        Modal.btnCont.addChild(this.button("福袋", 40, 205));
        var share = this.button("邀请", 230, 205);
        var shareBtn = share.getChildAt(0);
        shareBtn.texture = RES.getRes("tipamend_json.greenBtn");
        var shareTxt = share.getChildAt(1);
        shareTxt.strokeColor = 0x157505;
        Modal.btnCont.addChild(share);
    };
    // 每日活动模态框
    Modal.prototype.dayModal = function () {
        this.modalFrame.addChild(this.info("没有时间啦！分享给好友一起玩！"));
        Modal.btnCont.addChild(this.button("取消", 40, 180));
        Modal.btnCont.addChild(this.button("分享", 230, 180));
    };
    // 每日活动返回主游戏模态框
    Modal.prototype.dayBack = function (second) {
        this.modalFrame.addChild(this.info("\u8FD8\u5269\u4F59" + second + "s\uFF0C\u786E\u5B9A\u8981\u8FD4\u56DE\u5417\uFF1F"));
        Modal.btnCont.addChild(this.button("取消", 40, 180));
        Modal.btnCont.addChild(this.button("确定", 230, 180));
    };
    // 提示解锁下一大陆
    Modal.prototype.nextLand = function () {
        this.modalFrame.addChild(this.info("\u5F53\u524D\u5927\u9646\u5DF2\u6EE1\u7EA7\uFF0C\u8BF7\u524D\u5F80\u5730\u56FE\u89E3\u9501\u4E0B\u4E00\u5927\u9646\uFF01"));
        Modal.btnCont.addChild(this.button("取消", 40, 180));
        Modal.btnCont.addChild(this.button("地图", 230, 180));
    };
    // 确定解锁
    Modal.prototype.unlockModal = function (price) {
        this.modalFrame.addChild(this.info("\u89E3\u9501\u9700\u8981" + price + "\u91D1\u5E01\uFF0C\u786E\u5B9A\u89E3\u9501\uFF1F"));
        Modal.btnCont.addChild(this.button("确定", 135, 180));
    };
    // 确定解锁
    Modal.prototype.poorModal = function (gold) {
        this.modalFrame.addChild(this.info("\u9700\u8981" + gold + "\u91D1\u5E01\uFF0C\u8D44\u91D1\u4E0D\u8DB3\uFF0C\u53BB\u73A9\u6E38\u620F\u83B7\u5F97\u91D1\u5E01\u5427\uFF01"));
        Modal.btnCont.addChild(this.button("取消", 40, 180));
        Modal.btnCont.addChild(this.button("确定", 230, 180));
    };
    // 房屋整修所需金币提醒
    Modal.prototype.houseFix = function (grade, price) {
        this.modalFrame.addChild(this.info("\u6298\u635F\u7A0B\u5EA6" + grade + "\u7EA7\uFF0C\u6574\u4FEE\u9700\u8981" + price + "\u91D1\u5E01\uFF01"));
        Modal.btnCont.addChild(this.button("确定", 135, 180));
    };
    // 房屋整修所需金币提醒
    Modal.prototype.helpFriendFix = function (price) {
        this.modalFrame.addChild(this.info("\u9700\u8981" + price + "\u91D1\u5E01\uFF0C\u786E\u5B9A\u5E2E\u597D\u53CB\u6574\u4FEE\u5417\uFF1F"));
        Modal.btnCont.addChild(this.button("取消", 40, 180));
        Modal.btnCont.addChild(this.button("确定", 230, 180));
    };
    Modal.prototype.bankSuccess = function () {
        this.customTip("Small");
        var info = this.info("\u64CD\u4F5C\u6210\u529F\uFF01");
        info.y += 20;
        this.modalFrame.addChild(info);
    };
    // 其他尺寸模态框基础外框 type = Big / Small
    Modal.prototype.customTip = function (type) {
        this.modalFrame.removeChildAt(0);
        var frame = this._bg.element({ "name": "tipamend_json.tip" + type, "x": 215, "y": 135 });
        this.modalFrame.addChildAt(frame, 0);
        Modal.btnCont.removeChildAt(0);
        var close;
        if (type == "Big") {
            close = this._bg.element({ "name": "tipamend_json.tipclose", "x": 420, "y": 18 });
        }
        else {
            close = this._bg.element({ "name": "tip_json.tipclose", "x": 340, "y": 100 });
        }
        Modal.btnCont.addChildAt(close, 0);
    };
    // 小型模态框提示型，1s 后自动关闭
    Modal.prototype.smallTip = function (message) {
        var _this = this;
        this.customTip("Small");
        var info = this.info(message);
        info.y += 20;
        this.modalFrame.addChild(info);
        Modal.btnCont.removeChildAt(0);
        egret.setTimeout(function () {
            _this.removeChildren();
            _this.parent.removeChild(_this);
        }, this, 1000);
    };
    // 信息提示型模态框，带确定按钮，带关闭按钮
    Modal.prototype.tip = function (message) {
        var _this = this;
        this.modalFrame.addChild(this.info(message));
        Modal.btnCont.addChild(this.button("确定", 135, 180));
        var close = Modal.btnCont.getChildAt(0);
        var cancel = Modal.btnCont.getChildAt(1);
        // 点击关闭。
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // 音效
            if (Sound.soundOpen) {
                Sound.cancelSound.play(0, 1);
            }
            _this.removeChildren();
            _this.parent.removeChild(_this);
        }, this);
        // 点击取消。
        cancel.touchEnabled = true;
        cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (Sound.soundOpen) {
                Sound.cancelSound.play(0, 1); // 音效
            }
            _this.removeChildren();
            _this.parent.removeChild(_this);
        }, this);
    };
    // 攻击弹框
    Modal.prototype.useAttack = function () {
        this.customTip("Big");
        this.modalFrame.addChild(this.info("每日可免费攻击好友5次，您已超过次数，可选择使用攻击卡或者通过分享获得相应的攻击次数！"));
        Modal.btnCont.addChild(this.button("使用", 230, 205));
        var share = this.button("分享", 40, 205);
        var shareBtn = share.getChildAt(0);
        shareBtn.texture = RES.getRes("tipamend_json.greenBtn");
        var shareTxt = share.getChildAt(1);
        shareTxt.strokeColor = 0x157505;
        Modal.btnCont.addChild(share);
    };
    //攻击被防御弹窗
    Modal.prototype.attacktoDefe = function () {
        this.modalFrame.addChild(this.info("该玩家使用了防御卡，暂不可被攻击！"));
        Modal.btnCont.addChild(this.button("确定", 135, 180));
    };
    // 模态框提示信息
    Modal.prototype.info = function (message) {
        var mmtxt = this._bg.addtxt({ "text": message, color: 0xffffff, x: 10, y: 80, size: 22 });
        mmtxt.width = 415;
        mmtxt.height = 100;
        mmtxt.strokeColor = 0x3A230A;
        mmtxt.stroke = 2;
        mmtxt.lineSpacing = 10;
        mmtxt.textAlign = egret.HorizontalAlign.CENTER;
        mmtxt.verticalAlign = egret.VerticalAlign.MIDDLE;
        return mmtxt;
    };
    // 按钮
    Modal.prototype.button = function (text, x, y) {
        var modalBtn = new egret.Sprite();
        modalBtn.x = x;
        modalBtn.y = y;
        modalBtn.width = 164;
        modalBtn.height = 54;
        var btn = this._bg.element({ "name": "tip_json.tipbtn", "x": 82, "y": 27 });
        modalBtn.addChild(btn);
        var btnTxt = this._bg.addtxt({ "text": text, color: 0xffffff, x: 0, y: 0, size: 24 });
        btnTxt.width = 164;
        btnTxt.height = 54;
        btnTxt.strokeColor = 0x894000;
        btnTxt.stroke = 2;
        btnTxt.textAlign = egret.HorizontalAlign.CENTER;
        btnTxt.verticalAlign = egret.VerticalAlign.MIDDLE;
        modalBtn.addChild(btnTxt);
        return modalBtn;
    };
    Modal.prototype.tankuang = function () {
        var modalCont = new egret.Sprite();
        this.addChild(modalCont);
        modalCont.graphics.beginFill(0x000000, 0.4);
        modalCont.graphics.drawRect(0, 0, 300, 300);
        modalCont.graphics.endFill();
    };
    //通知容器
    Modal.prototype.noticBg = function (obj) {
        var modalCont = new egret.Sprite();
        modalCont.graphics.beginFill(0x000000, obj.ap);
        var x = obj.x ? obj.x : 0;
        var y = obj.y ? obj.y : 0;
        var width = obj.width ? obj.width : 640;
        var height = obj.height ? obj.height : 30;
        modalCont.graphics.drawRect(x, y, width, height);
        modalCont.graphics.endFill();
        return modalCont;
    };
    return Modal;
}(egret.DisplayObjectContainer));
__reflect(Modal.prototype, "Modal");
//消息
var News = (function (_super) {
    __extends(News, _super);
    function News() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    News.prototype.onAddToStage = function (event) {
        this._bg = new Background();
        this.news = Global.newget();
        console.log(this.news);
        this.init();
    };
    //消息
    News.prototype.init = function () {
        var _this = this;
        // // 加一层透明底层
        var newAlpha = this._bg.addAlphafun();
        this.addChild(newAlpha);
        newAlpha.touchEnabled = true;
        newAlpha.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { }, this);
        //消息显示容器
        this.newCount = new egret.Sprite();
        this.newCount.x = 320;
        this.newCount.y = 570;
        this.newCount.width = 640;
        this.newCount.height = 1138;
        this.newCount.anchorOffsetX = this.newCount.width / 2;
        this.newCount.anchorOffsetY = this.newCount.height / 2;
        newAlpha.addChild(this.newCount);
        // 动态出现
        egret.Tween.get(this.newCount).to({ scaleX: 0.3, scaleY: 0.3, x: 540, y: 1025 }, 1).to({ scaleX: 1, scaleY: 1, x: 320, y: 570 }, 500);
        // 模态框外框
        var mfImg = this._bg.element({ "name": "news_json.new", "x": 320, "y": 500 });
        this.newCount.addChild(mfImg);
        // 关闭按钮
        var closeImg = this._bg.element({ "name": "cardCenter_json.close", "x": 320, "y": 870 });
        this.newCount.addChild(closeImg);
        closeImg.touchEnabled = true;
        closeImg.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (Sound.soundOpen) {
                Sound.cancelSound.play(0, 1);
            }
            _this.removeChild(newAlpha);
        }, this);
        // 滚动条
        var scroll = new egret.Sprite();
        scroll.x = 530;
        scroll.y = 275;
        scroll.width = 10;
        scroll.height = 500;
        this.newCount.addChild(scroll);
        // 滚动条底层
        var scrollBase = this._bg.oElement({ "name": "rank_json.scroll", "height": 500, "x": 0, "y": 0 });
        scroll.addChild(scrollBase);
        var elContainer = new egret.Sprite();
        elContainer.x = 0;
        elContainer.y = 0;
        elContainer.graphics.beginFill(0x3399DB, 0);
        elContainer.graphics.drawRect(0, 0, 400, 500);
        elContainer.graphics.endFill();
        // 滚动条
        var handle = this._bg.oElement({ "name": "rank_json.handle", "width": 9, "height": 500, "x": 0, "y": 0 });
        //添加滚动视图
        var view = new egret.ScrollView();
        view.width = 400;
        view.height = 480;
        view.x = 110;
        view.y = 280;
        view.horizontalScrollPolicy = "off";
        view.setContent(elContainer);
        this.newCount.addChild(view);
        // 通过监听滚动实现滚动条的滚动
        view.addEventListener(egret.Event.CHANGE, function () {
            if (view.scrollTop <= 0) {
                handle.y = 0;
            }
            else if (view.scrollTop >= view.getMaxScrollTop()) {
                handle.y = 400 * view.getMaxScrollTop() / elContainer.height;
            }
            else {
                handle.y = 400 * view.scrollTop / elContainer.height;
            }
        }, this);
        scroll.addChild(handle);
        this.oneByOne(this.news.data, elContainer, handle);
    };
    // 获取每一条数据，并设置滚动条。
    News.prototype.oneByOne = function (data, container, handle) {
        var i = 0;
        var time = egret.setInterval(function () {
            if (i >= data.length) {
                egret.clearInterval(time);
                return;
            }
            this.element({
                container: container,
                txt: "玩家" + data[i].userId + "累计" + data[i].do_type + "了你的房子" + data[i].do_num + "次",
                id: data[i].id,
                userId: data[i].userId,
                y: 100 * i
            }, i);
            i++;
            egret.Tween.get(handle).to({ height: 480 * 500 / container.height }, 200);
        }, this, 200);
    };
    News.prototype.element = function (obj, i) {
        var _this = this;
        var newsBg = new egret.Sprite();
        newsBg.x = -50;
        newsBg.y = obj.y;
        newsBg.graphics.beginFill(0x3399DB, 0);
        newsBg.graphics.drawRect(0, 0, 400, 100);
        newsBg.graphics.endFill();
        obj.container.addChild(newsBg);
        egret.Tween.get(newsBg).to({ x: 0 }, 1000, egret.Ease.bounceOut);
        // 外框
        var elframe = this._bg.oElement({ "name": "news_json.newsup", "x": 0, "y": 0 });
        elframe.height = elframe.height - 10;
        newsBg.addChild(elframe);
        //消息内容
        var txt = new egret.TextField();
        txt.x = 30;
        txt.y = 0;
        txt.width = 300;
        txt.height = 90;
        txt.text = obj.txt;
        txt.fontFamily = "Microsoft YaHei";
        txt.size = 22;
        txt.textColor = 0xffffff;
        txt.strokeColor = 0x3A230A;
        txt.stroke = 2;
        txt.textAlign = egret.HorizontalAlign.LEFT;
        txt.verticalAlign = egret.VerticalAlign.MIDDLE;
        newsBg.addChild(txt);
        txt.touchEnabled = true;
        txt.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (Sound.soundOpen) {
                Sound.bankSound.play(0, 1);
            }
            elframe.texture = RES.getRes("news_json.newsdone");
            _this.lookMessage(obj.id, obj.userId, i);
        }, this);
        return newsBg;
    };
    //此处的userId是攻击者的id
    News.prototype.lookMessage = function (id, userId, i) {
        //跳转至攻击方的房子
        this.getFriendInfo(userId);
        //删除当前点击的信息 并更新全局变量
        this.news.data.splice(i, 1);
        Global.newset(this.news);
        //更新数据库的消息
        this.requestfun(id);
    };
    //更新数据库的消息
    News.prototype.requestfun = function (id) {
        var _this = this;
        wx.request({
            url: "https://dfw.hebzycw.com/api/News/updateNews",
            data: {
                id: id,
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            dataType: "json",
            success: function (res) {
            },
            fail: function (res) {
                console.log("更新消息失败重新请求");
                _this.requestfun(id);
            },
            complete: function (res) { }
        });
    };
    //跳转至攻击方的房子
    News.prototype.getFriendInfo = function (friendId) {
        var _this = this;
        //好友排行
        wx.request({
            url: "https://dfw.hebzycw.com/api/house/friends",
            data: {
                friendId: friendId,
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            dataType: "json",
            success: function (res) {
                console.log("获取去串门好友信息成功");
                console.log(res);
                Global.randset(res);
                Newscenes.getInstance().changeScene('FriendHouse');
            },
            fail: function (res) {
                console.log("获取串门好友信息失败，请稍后在试！");
                _this.getFriendInfo(friendId);
            },
            complete: function (res) { }
        });
    };
    return News;
}(egret.Sprite));
__reflect(News.prototype, "News");
// 默认添加开始场景
var Newscenes = (function (_super) {
    __extends(Newscenes, _super);
    function Newscenes() {
        var _this = _super.call(this) || this;
        // 实例化两个场景
        _this.Game = new Game();
        _this.House = new House();
        _this.FriendHouse = new FriendHouse();
        _this.Day = new Day();
        _this.WorldMap = new WorldMap();
        // 默认添加开始场景
        _this.addChild(_this.Game);
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
        return _this;
    }
    // 实例化单例获取方法
    Newscenes.getInstance = function () {
        if (!Newscenes.instance) {
            Newscenes.instance = new Newscenes();
        }
        return Newscenes.instance;
    };
    // 切换场景
    Newscenes.prototype.changeScene = function (name) {
        // 移除所有显示列表中的对象
        var oldPage = this.getChildAt(0);
        oldPage.removeChildren();
        this.removeChildren();
        // 添加下一个场景
        this.addChild(this[name]);
    };
    return Newscenes;
}(egret.Sprite));
__reflect(Newscenes.prototype, "Newscenes");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
var Rank = (function (_super) {
    __extends(Rank, _super);
    function Rank() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Rank.prototype.onAddToStage = function (event) {
        this._bg = new Background();
        this.friend = Global.friendget();
        this.world = Global.worldget();
        console.log(this.friend);
        console.log(this.world);
        this.common();
    };
    // 关闭
    Rank.prototype.closeSelf = function () {
        if (Sound.soundOpen) {
            Sound.cancelSound.play(0, 1);
        }
        if (this && this.parent) {
            this.parent.removeChild(this);
        }
    };
    Rank.prototype.common = function () {
        var _this = this;
        // 排行榜总容器，加一层透明黑色底层
        var friendCont = this._bg.addAlphafun();
        this.addChild(friendCont);
        friendCont.touchEnabled = true;
        friendCont.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { }, this);
        // 排行榜显示容器
        this.rankCont = new egret.Sprite();
        this.rankCont.width = 640;
        this.rankCont.height = 1138;
        this.rankCont.anchorOffsetX = this.rankCont.width / 2;
        this.rankCont.anchorOffsetY = this.rankCont.height / 2;
        friendCont.addChild(this.rankCont);
        // 动态出现
        this.rankCont.x = 540;
        this.rankCont.y = 1025;
        this.rankCont.scaleX = 0.3;
        this.rankCont.scaleY = 0.3;
        egret.Tween.get(this.rankCont).to({ scaleX: 1, scaleY: 1, x: this.rankCont.anchorOffsetX, y: this.rankCont.anchorOffsetY }, 500);
        // 关闭按钮
        var close = this._bg.element({ "name": "rank_json.close", "x": 320, "y": 870 });
        this.rankCont.addChild(close);
        close.touchEnabled = true;
        close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeSelf, this);
        // 排行榜显示容器
        var rankFrame = this._bg.element({ "name": "rank_json.rank", "x": 320, "y": 500 });
        this.rankCont.addChild(rankFrame);
        // 滚动条
        var scroll = new egret.Sprite();
        scroll.x = 530;
        scroll.y = 380;
        scroll.width = 10;
        scroll.height = 500;
        this.rankCont.addChild(scroll);
        // 滚动条底层
        var scrollBase = this._bg.oElement({ "name": "rank_json.scroll", "height": 440, "x": 0, "y": -20 });
        scroll.addChild(scrollBase);
        // 世界元素容器
        this.worldElCont = this.elScrollCont();
        // 世界滚动条
        var worldHandle = this._bg.oElement({ "name": "rank_json.handle", "width": 9, "height": 400, "x": 0, "y": 0 });
        worldHandle.scale9Grid = new egret.Rectangle(3, 3, 1, 40);
        // 世界滚动区域
        var worldScrollView = this.scorllView(this.worldElCont, worldHandle);
        this.rankCont.addChild(worldScrollView);
        // 获取世界数据
        this.getData(this.world, this.worldElCont, worldHandle);
        scroll.addChild(worldHandle);
        // 我的好友元素容器
        this.friendElCont = this.elScrollCont();
        var friendHandle = this._bg.oElement({ "name": "rank_json.handle", "width": 9, "height": 400, "x": 0, "y": 0 });
        friendHandle.scale9Grid = new egret.Rectangle(3, 3, 1, 40);
        var friendScrollView = this.scorllView(this.friendElCont, friendHandle);
        // 世界排行
        var world = this._bg.element({ "name": "rank_json.worldTxt", "x": 226, "y": 311 });
        this.rankCont.addChild(world);
        world.touchEnabled = true;
        world.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (friendScrollView && friendScrollView.parent) {
                if (Sound.soundOpen) {
                    Sound.switchSound.play(0, 1);
                }
                friend.texture = RES.getRes("rank_json.fhtxt");
                world.texture = RES.getRes("rank_json.worldTxt");
                _this.rankCont.removeChild(friendScrollView);
                _this.rankCont.addChild(worldScrollView);
                scroll.removeChild(friendHandle);
                scroll.addChild(worldHandle);
            }
        }, this);
        // 好友排行
        var friend = this._bg.element({ "name": "rank_json.fhtxt", "height": 55, "x": 400, "y": 311 });
        this.rankCont.addChild(friend);
        friend.touchEnabled = true;
        friend.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (worldScrollView && worldScrollView.parent) {
                if (Sound.soundOpen) {
                    Sound.switchSound.play(0, 1);
                }
                friend.texture = RES.getRes("rank_json.friendTxt");
                world.texture = RES.getRes("rank_json.whtxt");
                _this.rankCont.removeChild(worldScrollView);
                if (_this.friendElCont.$children.length) {
                    _this.rankCont.addChild(friendScrollView);
                }
                else {
                    // 获取数据
                    _this.rankCont.addChild(friendScrollView);
                    _this.getData(_this.friend, _this.friendElCont, friendHandle);
                }
                scroll.addChild(friendHandle);
                scroll.removeChild(worldHandle);
            }
        }, this);
    };
    // 滚动区域
    Rank.prototype.scorllView = function (object, handle) {
        var view = new egret.ScrollView();
        view.width = 400;
        view.height = 420;
        view.x = 110;
        view.y = 360;
        view.horizontalScrollPolicy = "off";
        view.setContent(object);
        // 通过监听滚动实现滚动条的滚动
        view.addEventListener(egret.Event.CHANGE, function () {
            if (view.scrollTop <= 0) {
                handle.y = 0;
            }
            else if (view.scrollTop >= view.getMaxScrollTop()) {
                handle.y = 400 * view.getMaxScrollTop() / object.height;
            }
            else {
                handle.y = 400 * view.scrollTop / object.height;
            }
        }, this);
        return view;
    };
    // 滚动视图容器
    Rank.prototype.elScrollCont = function () {
        var elContainer = new egret.Sprite();
        elContainer.x = 0;
        elContainer.y = 0;
        elContainer.graphics.beginFill(0x3399DB, 0);
        elContainer.graphics.drawRect(0, 0, 400, 420);
        elContainer.graphics.endFill();
        return elContainer;
    };
    // 获取排行榜信息
    Rank.prototype.getData = function (type, container, handle) {
        var worldData = type.data;
        this.oneByOne(worldData, container, handle);
        // this.allIn(worldData,container);
    };
    // 获取每一条数据，并设置滚动条。
    Rank.prototype.oneByOne = function (data, container, handle) {
        var i = 0;
        var time = egret.setInterval(function () {
            if (i >= data.length) {
                egret.clearInterval(time);
                return;
            }
            this.element({
                container: container,
                userId: data[i].id,
                y: 100 * i,
                rankNum: data[i].rank,
                url: data[i].avatarUrl,
                nickName: data[i].nickName,
                land: data[i].land,
                house: data[i].house,
            });
            i++;
            egret.Tween.get(handle).to({ height: 420 * 400 / container.height }, 200);
        }, this, 200);
    };
    Rank.prototype.allIn = function (data, container) {
        for (var i = 0; i < data.length; i++) {
            this.element({
                container: container,
                userId: data[i].id,
                y: 100 * i,
                rankNum: data[i].rank,
                url: data[i].avatarUrl,
                nickName: data[i].nickName,
                land: data[i].land,
                house: data[i].house,
            });
        }
    };
    Rank.prototype.element = function (obj) {
        // 参数的格式
        // obj = {
        //   container: egret.Bitmap,
        //   id : data.id,
        //   y : 110*i,
        //   rankNum : data.rank,
        //   url : data.avatarUrl,
        //   nickName:data.nickName,
        //   land: data.land,
        //   house: data.house,
        // }
        var _this = this;
        var worldEl = new egret.Sprite();
        worldEl.x = -100;
        worldEl.y = obj.y;
        worldEl.graphics.beginFill(0x3399DB, 0);
        worldEl.graphics.drawRect(0, 0, 400, 100);
        worldEl.graphics.endFill();
        obj.container.addChild(worldEl);
        egret.Tween.get(worldEl).to({ x: 0 }, 1000, egret.Ease.bounceOut);
        // userId
        var id = new egret.TextField();
        id.text = obj.userId;
        ;
        worldEl.addChild(id);
        id.visible = false;
        // 头像
        var portrait = new egret.Bitmap();
        portrait.x = 66;
        portrait.y = 8;
        portrait.width = 70;
        portrait.height = 70;
        var resUrl;
        if (obj.url) {
            resUrl = obj.url;
        }
        else {
            resUrl = "https://dfw.hebzycw.com/resource/assets/logo.png";
        }
        RES.getResByUrl(resUrl, function (event) {
            portrait.texture = event;
        }, this, RES.ResourceItem.TYPE_IMAGE);
        worldEl.addChild(portrait);
        // 外框
        var elframe = this._bg.oElement({ "name": "rank_json.elframe", "x": 0, "y": 0 });
        worldEl.addChild(elframe);
        // 名次
        var rank = new egret.TextField();
        rank.x = 5;
        rank.y = 0;
        rank.width = 60;
        rank.height = 90;
        rank.text = obj.rankNum;
        rank.bold = true;
        rank.size = 32;
        rank.textColor = 0xffffff;
        rank.strokeColor = 0xE88C12;
        rank.stroke = 2;
        rank.textAlign = egret.HorizontalAlign.CENTER;
        rank.verticalAlign = egret.VerticalAlign.MIDDLE;
        worldEl.addChild(rank);
        // 昵称
        var nickName = new egret.TextField();
        nickName.x = 150;
        nickName.y = 0;
        nickName.width = 170;
        nickName.height = 90;
        if (obj.nickName) {
            nickName.text = obj.nickName;
        }
        else {
            nickName.text = "大陆王者";
        }
        nickName.fontFamily = "Microsoft YaHei";
        nickName.size = 22;
        nickName.textColor = 0xffffff;
        nickName.strokeColor = 0x3A230A;
        nickName.stroke = 2;
        nickName.textAlign = egret.HorizontalAlign.LEFT;
        nickName.verticalAlign = egret.VerticalAlign.MIDDLE;
        worldEl.addChild(nickName);
        // 串门
        var around = this._bg.oElement({ "name": "rank_json.around", "x": 330, "y": 12 });
        worldEl.addChild(around);
        around.touchEnabled = true;
        around.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (Sound.soundOpen) {
                Sound.bankSound.play(0, 1);
            }
            var friend = around.parent.getChildAt(0);
            var friendId = friend.text;
            _this.closeSelf();
            //获取串门好友信息 并切换场景至好友房屋场景
            _this.getFriendInfo(friendId);
        }, this);
        return worldEl;
    };
    Rank.prototype.getFriendInfo = function (friendId) {
        var _this = this;
        //好友排行
        wx.request({
            url: "https://dfw.hebzycw.com/api/house/friends",
            data: {
                friendId: friendId,
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            dataType: "json",
            success: function (res) {
                console.log("获取去串门好友信息成功");
                console.log(res);
                Global.randset(res);
                Newscenes.getInstance().changeScene('FriendHouse');
            },
            fail: function (res) {
                console.log("获取串门好友信息失败，请稍后在试！");
                _this.getFriendInfo(friendId);
            },
            complete: function (res) { }
        });
    };
    return Rank;
}(egret.Sprite));
__reflect(Rank.prototype, "Rank");
var Sound = (function (_super) {
    __extends(Sound, _super);
    function Sound() {
        var _this = _super.call(this) || this;
        // 音乐开关
        Sound.bgOpen = egret.localStorage.getItem("bgOpen") == "false" ? false : true;
        Sound.soundOpen = egret.localStorage.getItem("soundOpen") == "false" ? false : true;
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
        Sound.earthSound = RES.getRes("earthquake_mp3"); // 地震音效
        Sound.saveSound = RES.getRes("save_mp3"); //普渡众生音效
        Sound.rockSound = RES.getRes("rock_mp3"); //陨石音效
        Sound.upgradeSound = RES.getRes("upgrade_mp3"); //房屋升级音效
        Sound.attackSound = RES.getRes("attack_mp3"); //攻击音效
        Sound.defenseSound = RES.getRes("defense_mp3"); //防御音效
        Sound.interestSound = RES.getRes("interest_mp3"); //利息翻倍音效
        return _this;
    }
    return Sound;
}(egret.DisplayObjectContainer));
__reflect(Sound.prototype, "Sound");
/**
 * 下面的示例使用 Connection 类创建新 WebSocket 对象，然后与服务器通讯。
 */
var Connection = (function (_super) {
    __extends(Connection, _super);
    function Connection() {
        return _super.call(this) || this;
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
        //心跳包
        Global.timerHeart();
        //打开链接事件
        var obj = { do: "login", userId: egret.localStorage.getItem("userId"), coust: "" };
        var cmd = JSON.stringify(obj);
        this.webSocket.writeUTF(cmd);
    };
    Connection.onReceiveMessage = function () {
        //发送消息事件
        this.msg = JSON.parse(JSON.parse(this.webSocket.readUTF()));
        //好友互动的攻击范围
        if (this.msg.coust == 'all') {
            //对所有人的攻击
            Global.allBackFun(this.msg);
        }
        else {
            //针对与个人的攻击   1.先判断好友是否在线
            if (this.msg.line == 'yes') {
                //在线  产生互动效果
                if (this.msg.do == 'login') {
                    //用户登录打开socket链接
                    console.log(this.msg);
                }
                else if (this.msg.do == 'attack') {
                    //攻击好友房屋
                    Global.attackBackFun(this.msg); //好友看到的效果
                }
                else if (this.msg.do == 'rock') {
                    //陨石攻击
                    Global.rockBackFun(this.msg);
                }
                else if (this.msg.do == 'help') {
                    //整修房屋
                    Global.helpHouse(this.msg);
                }
            }
            else {
                //不在线存储消息盒子
                this.noLineNews(this.msg);
            }
        }
    };
    //用户不在线则记录在消息盒子
    Connection.noLineNews = function (msg) {
        var _this = this;
        //消息存放
        wx.request({
            url: "https://dfw.hebzycw.com/api/News/newInster",
            data: {
                userId: msg.userId,
                do: msg.do,
                coust: msg.coust,
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            dataType: "json",
            success: function (res) {
                console.log("被攻击玩家不在线，攻击消息已存放消息盒子");
            },
            fail: function (res) {
                console.log("当前网络不佳，互动消息存放失败");
                //请求失败重新请求
                _this.noLineNews(msg);
            },
            complete: function (res) { }
        });
    };
    Connection.onSocketClose = function () {
        egret.localStorage.setItem("touchSwitch", "ture");
        wx.onTouchStart(this.startFun);
        //每次监控用户掉线   即刻更新后台数据
        Global.updateApi();
    };
    Connection.startFun = function () {
        //掉线重新进入游戏后点击重新链接服务器
        wx.onTouchEnd(function () {
            var touchSwitch = egret.localStorage.getItem("touchSwitch");
            if (touchSwitch == "ture") {
                Connection.initWebSocket();
                egret.localStorage.setItem("touchSwitch", "false");
            }
        });
    };
    return Connection;
}(egret.DisplayObjectContainer));
__reflect(Connection.prototype, "Connection");
var WorldMap = (function (_super) {
    __extends(WorldMap, _super);
    function WorldMap() {
        var _this = _super.call(this) || this;
        _this.modal = new Modal();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    WorldMap.prototype.onAddToStage = function (event) {
        // 数据
        // 房子等级
        if (egret.localStorage.getItem("house")) {
            this.playerHouseId = egret.localStorage.getItem("house");
        }
        // 大陆等级
        if (egret.localStorage.getItem("land")) {
            this.playerLandId = Number(egret.localStorage.getItem("land"));
        }
        // 金币数
        if (egret.localStorage.getItem("money")) {
            this.goldNum = Number(egret.localStorage.getItem("money"));
        }
        //背景
        this._bg = new Background();
        this.addChild(this._bg.stage_bg({ "name": "wmapbg_png", "width": this.stage.stageWidth, "height": this.stage.stageHeight }));
        // 大陆
        var landArr = Global.landData;
        for (var i = 0; i < landArr.length; i++) {
            this.land({ landId: landArr[i].landId, x: landArr[i].mapLocation[0], y: landArr[i].mapLocation[1], landName: landArr[i].landName, price: landArr[i].landPrice });
        }
        // 返回
        var back = this._bg.element({ "name": "day_json.wmapback", "x": 70, "y": 80 });
        this.addChild(back);
        back.touchEnabled = true;
        back.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // 返回音效
            if (Sound.soundOpen) {
                Sound.backSound.play(0, 1);
            }
            Newscenes.getInstance().changeScene('House');
        }, this);
        //金币数
        var goldFrame = this._bg.element({ "name": "day_json.dayscore", "x": 557, "y": 110 });
        this.addChild(goldFrame);
        this.goldText = this._bg.addtxt({ "text": Math.floor(this.goldNum / 1000) + "k", "color": "0x610C1e", "x": 537, "y": 100 });
        this.addChild(this.goldText);
    };
    WorldMap.prototype.land = function (obj) {
        var _this = this;
        // obj = {
        //   landId: id,
        //   x: x,
        //   y: y,
        //   landName: name,
        //   price : price
        // }
        var landCont = new egret.Sprite();
        landCont.x = obj.x;
        landCont.y = obj.y;
        this.addChild(landCont);
        // landId
        var landId = new egret.TextField();
        landId.text = obj.landId;
        ;
        landCont.addChild(landId);
        landId.visible = false;
        var isLock = this.playerLandId >= obj.landId ? "unlock" : "lock";
        var lock = this._bg.element({ "name": "day_json." + isLock, "x": 0, "y": 0 });
        landCont.addChild(lock);
        var landText = this._bg.addtxt({ "text": obj.landName, "color": "0xffffff", "x": 0, "y": 32, "size": 24 });
        landText.x = -landText.width / 2;
        landText.stroke = 3;
        landText.strokeColor = 0x3499D9;
        landCont.addChild(landText);
        landCont.touchEnabled = true;
        landCont.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var land = landCont.getChildAt(0);
            var landId = land.text;
            if (_this.playerLandId == 9 && Number(landId) == 10) {
                // 音效
                if (Sound.soundOpen) {
                    Sound.luckySound.play(0, 1);
                }
                var houseMap = new HouseMap(landId);
                _this.addChild(houseMap);
                // 动态出现 敬请期待
                egret.Tween.get(HouseMap.effectsCont).to({ x: e.stageX, y: e.stageY }, 1).to({ scaleX: 1, scaleY: 1, x: 320, y: 570 }, 500);
            }
            else if (isLock == "unlock") {
                // 音效
                if (Sound.soundOpen) {
                    Sound.luckySound.play(0, 1);
                }
                var houseMap = new HouseMap(landId);
                _this.addChild(houseMap);
                // 动态出现房屋地图
                egret.Tween.get(HouseMap.effectsCont).to({ x: e.stageX, y: e.stageY }, 1).to({ scaleX: 1, scaleY: 1, x: 320, y: 570 }, 500);
            }
            else if (Number(_this.playerHouseId) % 8 == 0 && Number(landId) == _this.playerLandId + 1) {
                // 音效
                if (Sound.soundOpen) {
                    Sound.tipSound.play(0, 1);
                }
                _this.addChild(_this.modal);
                _this.modal.unlockModal(obj.price);
                var close_2 = Modal.btnCont.getChildAt(0);
                var sure = Modal.btnCont.getChildAt(1);
                // 点击关闭。
                close_2.touchEnabled = true;
                close_2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    if (Sound.soundOpen) {
                        Sound.cancelSound.play(0, 1);
                    }
                    _this.modal.removeChildren();
                    _this.removeChild(_this.modal);
                }, _this);
                // 点击确定。
                sure.touchEnabled = true;
                sure.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    if (_this.goldNum >= obj.price) {
                        // 升级音效
                        if (Sound.soundOpen) {
                            Sound.upgradeSound.play(0, 1);
                        }
                        _this.modal.removeChildren();
                        _this.removeChild(_this.modal);
                        lock.texture = RES.getRes("day_json.unlock");
                        // 改变金币并存储
                        _this.goldNum -= obj.price;
                        _this.goldText.text = Math.floor(_this.goldNum / 1000) + "k";
                        egret.localStorage.setItem("money", _this.goldNum.toString());
                        // 改变大陆等级并存储
                        _this.playerLandId = Number(_this.playerLandId) + 1;
                        egret.localStorage.setItem("land", _this.playerLandId);
                        // 改变房屋等级并存储
                        _this.playerHouseId = Number(_this.playerHouseId) + 1;
                        egret.localStorage.setItem("house", _this.playerHouseId);
                        isLock = "unlock";
                    }
                    else {
                        // 资金不足提示音效
                        if (Sound.soundOpen) {
                            Sound.wrongTipSound.play(0, 1);
                        }
                        var _modal = new Modal();
                        _this.addChild(_modal);
                        _modal.smallTip("资金不足！");
                    }
                }, _this);
            }
            else if (isLock == "lock") {
                // 音效
                if (Sound.soundOpen) {
                    Sound.tipSound.play(0, 1);
                }
                _this.addChild(_this.modal);
                _this.modal.smallTip("\u5C1A\u672A\u89E3\u9501\uFF01");
            }
        }, this);
    };
    return WorldMap;
}(egret.DisplayObjectContainer));
__reflect(WorldMap.prototype, "WorldMap");
;window.Main = Main;