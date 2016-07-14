var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ZombieMath;
(function (ZombieMath) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.apply(this, arguments);
        }
        return Play;
    })(Phaser.State);
    ZombieMath.Play = Play;
})(ZombieMath || (ZombieMath = {}));
//interface Lane {
//    x: number;
//    y: number;
//}
//class Level {
//    manager: Level;
//    hero;
//    zombies: Zombie[];
//    targetZombie: Zombie;
//    lane: Array<Lane>;
//    game: Phaser.Game;
//    minTime: number = 5;
//    maxTime: number = 10;
//    expressionText: any;
//    answ1: any;
//    answ2: any;
//    answ3: any;
//    result: number;
//    timer: any;
//    point: number;
//    constructor(public width: number, public height: number) {
//        this.lane = [{ x: 1, y: 120 }, { x: 2, y: 145 }, { x: 3, y: 170 }, { x: 4, y: 195 }, { x: 5, y: 220 }];
//        this.zombies = [];
//        this.game = new Phaser.Game(width, height, Phaser.AUTO, 'content', {
//            preload: this.preload, create: this.create,
//            update: this.update, manager: this
//        });
//        this.point = 0;
//    }
//    preload() {
//        this.game.load.image('background', 'assets/zombie_bg.jpg');
//        this.game.load.atlasJSONHash('zombie', 'assets/zombies.png', 'assets/zombies.json');
//    }
//    create() {
//        this.game.add.sprite(0, 0, 'background');
//        this.game.physics.startSystem(Phaser.Physics.ARCADE);
//        var time = Util.getRandomInt(this.manager.minTime, this.manager.maxTime) * 1000;
//        this.manager.timer = this.game.time.events.loop(1000, this.manager.createZombie, this.manager);
//        this.manager.hero = new Hero(this.game);
//        this.manager.expressionText = this.game.add.text(400, 350, "", { font: "32px Arial", fill: "#FFF", align: "center" });
//        this.manager.expressionText.anchor.set(0.5, 0.5);
//        this.manager.answ1 = this.game.add.text(200, 400, "", { font: "32px Arial", fill: "#FFF", align: "center" });
//        this.manager.answ1.inputEnabled = true;
//        this.manager.answ1.anchor.set(0.5, 0.5);
//        this.manager.answ1.events.onInputDown.add(this.manager.answerHandler, this);
//        this.manager.answ2 = this.game.add.text(400, 400, "", { font: "32px Arial", fill: "#FFF", align: "center" });
//        this.manager.answ2.inputEnabled = true;
//        this.manager.answ2.anchor.set(0.5, 0.5);
//        this.manager.answ2.events.onInputDown.add(this.manager.answerHandler, this);
//        this.manager.answ3 = this.game.add.text(600, 400, "", { font: "32px Arial", fill: "#FFF", align: "center" });
//        this.manager.answ3.inputEnabled = true;
//        this.manager.answ3.anchor.set(0.5, 0.5);
//        this.manager.answ3.events.onInputDown.add(this.manager.answerHandler, this);
//    }
//    createZombie() {
//        var noOfZombie = Util.getRandomInt(1, 5);
//        var laneStart = 0;
//        var laneEnd = this.lane.length - noOfZombie;
//        for (var i = 0; i < noOfZombie; i++) {
//            var laneNo = Util.getRandomInt(laneStart, laneEnd);
//            this.zombies.push(new Zombie(this.game, this.lane[laneNo], 30, this))
//            laneStart = laneNo + 1;
//            laneEnd += 1;
//        }
//        this.timer.delay = Util.getRandomInt(this.minTime, this.maxTime) * 1000;
//    }
//    fire() {
//        this.hero.fire();
//    }
//    deductPoint() {
//        this.hero.healPoint--;
//        console.log(this.hero.healPoint);
//    }
//    update() {
//        for (var i = 0; i < this.manager.zombies.length; i++) {
//            this.manager.zombies[i].update();
//        }
//        this.manager.hero.update();
//    }
//    answerHandler(e) {
//        if (e.text == this.manager.result) {
//            this.manager.clear();
//            this.manager.point++;
//            if (this.manager.targetZombie)
//                this.manager.targetZombie.hit();
//        }
//    }
//    clear() {
//        this.expressionText.setText("");
//        this.answ1.setText("");
//        this.answ2.setText("");
//        this.answ3.setText("");
//        this.result = undefined;
//    }
//    showChallenge(zombie: Zombie) {
//        if (!this.result) {
//            this.targetZombie = zombie;
//            this.result = Util.getRandomInt(5, 25);
//            this.expressionText.setText('aaa');//generate('', this.result, 1));
//            var pos = Util.getRandomInt(1, 3);
//            var operation = Util.getRandomInt(0, 1);
//            var rand1 = operation == 0 ? this.result - Util.getRandomInt(1, 5) : this.result + Util.getRandomInt(1, 5);
//            var operation2 = Util.getRandomInt(0, 1);
//            var rand2 = operation2 == 0 ? this.result - Util.getRandomInt(1, 5) : this.result + Util.getRandomInt(1, 5);
//            if (pos == 1) {
//                this.answ1.setText(this.result);
//                this.answ2.setText(rand1);
//                this.answ3.setText(rand2);
//            }
//            if (pos == 2) {
//                this.answ2.setText(this.result);
//                this.answ1.setText(rand1);
//                this.answ3.setText(rand2);
//            }
//            if (pos == 3) {
//                this.answ3.setText(this.result);
//                this.answ1.setText(rand1);
//                this.answ2.setText(rand2);
//            }
//        }
//    }
//}
//# sourceMappingURL=play.js.map