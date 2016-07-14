window.onload = function () {
    var game = new ZombieMath.Game();
};
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ZombieMath;
(function (ZombieMath) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 800, 480, Phaser.AUTO, 'content', null);
            this.state.add('Boot', ZombieMath.Boot, false);
            this.state.add('MainMenu', ZombieMath.MainMenu, false);
            this.state.add('About', ZombieMath.About, false);
            this.state.add('Play', ZombieMath.Play, null);
            this.state.add('End', ZombieMath.End, null);
            this.state.start('Boot');
        }
        return Game;
    })(Phaser.Game);
    ZombieMath.Game = Game;
})(ZombieMath || (ZombieMath = {}));
var ZombieMath;
(function (ZombieMath) {
    var About = (function (_super) {
        __extends(About, _super);
        function About() {
            _super.apply(this, arguments);
        }
        About.prototype.preload = function () {
            this.load.image('background', 'assets/zombie_bg.jpg');
            this.load.atlasJSONHash('ui', 'assets/ui.png', 'assets/ui.json');
        };
        About.prototype.create = function () {
            this.game.add.text(200, 200, "Artist: JP", { font: "32px Arial", fill: "#FFF", align: "center" });
            this.game.add.text(200, 250, "Developer: Quang", { font: "32px Arial", fill: "#FFF", align: "center" });
            this.game.add.text(360, 300, "Vu", { font: "32px Arial", fill: "#FFF", align: "center" });
            var playButton = new ZombieMath.LabelButton(this.game, 400, 400, 'ui', 'BACK', this.back, this, 'LongBtn0000', 'LongBtn0000', 'LongBtn0000', 'LongBtn0000');
            playButton.anchor.set(0.5, 0.5);
        };
        About.prototype.back = function () {
            this.game.state.start('MainMenu', true, false);
        };
        return About;
    })(Phaser.State);
    ZombieMath.About = About;
})(ZombieMath || (ZombieMath = {}));
var ZombieMath;
(function (ZombieMath) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            this.load.image('background', 'assets/zombie_bg.jpg');
            this.load.atlasJSONHash('ui', 'assets/ui.png', 'assets/ui.json');
            this.game.load.image('background', 'assets/zombie_bg.jpg');
            this.game.load.atlasJSONHash('zombie', 'assets/zombies.png', 'assets/zombies.json');
        };
        Boot.prototype.create = function () {
            //  Unless you specifically need to support multitouch I would recommend setting this to 1
            this.input.maxPointers = 1;
            //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
            this.stage.disableVisibilityChange = true;
            if (this.game.device.desktop) {
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.minWidth = this.game.width / 2;
                this.scale.minHeight = this.game.height / 2;
                this.scale.maxWidth = this.game.width;
                this.scale.maxHeight = this.game.height;
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
            }
            else {
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.minWidth = this.game.width / 2;
                this.scale.minHeight = this.game.height / 2;
                this.scale.maxWidth = 2048;
                this.scale.maxHeight = 1228;
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
                this.scale.forceOrientation(true, false);
            }
            this.game.state.start('MainMenu', true, false);
        };
        return Boot;
    })(Phaser.State);
    ZombieMath.Boot = Boot;
})(ZombieMath || (ZombieMath = {}));
var ZombieMath;
(function (ZombieMath) {
    var End = (function (_super) {
        __extends(End, _super);
        function End() {
            _super.apply(this, arguments);
        }
        End.prototype.init = function (point) {
            this.point = point;
        };
        End.prototype.create = function () {
            var scorelbl = this.game.add.text(this.game.width / 2, 180, 'Score: ' + this.point.toString(), { font: "32px Arial", fill: "#FFF", align: "center" });
            scorelbl.anchor.set(0.5, 0);
            var retry = new ZombieMath.LabelButton(this.game, this.game.width / 2, 250, 'ui', 'RETRY', this.playHandle, this, 'LongBtn0000', 'LongBtn0000', 'LongBtn0000', 'LongBtn0000');
            retry.anchor.set(0.5, 0.5);
        };
        End.prototype.playHandle = function () {
            this.game.state.start('Play', true, false);
        };
        return End;
    })(Phaser.State);
    ZombieMath.End = End;
})(ZombieMath || (ZombieMath = {}));
var ZombieMath;
(function (ZombieMath) {
    function expr(value, left, op, right, hasParentheses) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.op = op;
        this.hasParentheses = hasParentheses;
        var self = this;
        this.toString = function () {
            var result = self.left + " " + self.op + " " + self.right;
            if (self.hasParentheses)
                return "(" + result + ")";
            return result;
        };
    }
    ;
    var add = function (value, hasParentheses) {
        var val = Math.floor(Math.random() * value);
        return new expr(value, val, '+', value - val, hasParentheses);
    };
    var minus = function (value, hasParentheses) {
        var val = Math.floor(Math.random() * value);
        return new expr(value, value + val, '-', val, hasParentheses);
    };
    var divide = function (value, hasParentheses) {
        var val = Math.floor(Math.random() * 3) + 1;
        return new expr(value, value * val, '/', val, hasParentheses);
    };
    var multiply = function (value, hasParentheses) {
        var val = 1;
        var trial = 0;
        do {
            if (trial == 100)
                break;
            val = Math.floor(Math.random() * (value / 2)) + 1;
            trial++;
        } while (value % val != 0);
        return new expr(value, val, '*', value / val, hasParentheses);
    };
    var ops = ['+', '-', '*', '/'];
    var genDict = [];
    genDict.push(add);
    genDict.push(minus);
    genDict.push(multiply);
    genDict.push(divide);
    function generate(prevOp, value, level) {
        var index = Math.floor(Math.random() * 4);
        var op = ops[index];
        var gen = genDict[index];
        var hasPrnt = Math.floor(ops.indexOf(prevOp) / 2) >= Math.floor(ops.indexOf(op) / 2);
        var newExp = gen(value, hasPrnt);
        if (level == 0)
            return newExp;
        return new expr(value, generate(op, newExp.left, level - 1), op, generate(op, newExp.right, level - 1), hasPrnt);
    }
    ZombieMath.generate = generate;
})(ZombieMath || (ZombieMath = {}));
var ZombieMath;
(function (ZombieMath) {
    var Hero = (function () {
        function Hero(game) {
            this.game = game;
            this.render = this.game.add.sprite(750, 180, 'zombie');
            this.game.physics.arcade.enable(this.render);
            this.render.animations.add('stand', Phaser.Animation.generateFrameNames('player', 0, 0, "", 4));
            this.render.animations.add('fire', Phaser.Animation.generateFrameNames('player', 1, 1, "", 4));
            this.render.animations.play('stand', true, true);
            this.render.scale.x *= -1;
            this.render.object = this;
            this.hp = 5;
        }
        Hero.prototype.fire = function () {
            this.firing = this.render.animations.play('fire', 2, false);
        };
        Hero.prototype.update = function () {
            if (this.firing && this.firing.isFinished) {
                this.render.animations.play('stand', 2, true);
            }
        };
        return Hero;
    })();
    ZombieMath.Hero = Hero;
})(ZombieMath || (ZombieMath = {}));
var ZombieMath;
(function (ZombieMath) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            _super.apply(this, arguments);
        }
        MainMenu.prototype.preload = function () {
        };
        MainMenu.prototype.create = function () {
            var playButton = new ZombieMath.LabelButton(this.game, this.game.width / 2, 250, 'ui', 'PLAY', this.playHandle, this, 'LongBtn0000', 'LongBtn0000', 'LongBtn0000', 'LongBtn0000');
            playButton.anchor.set(0.5, 0.5);
            var aboutBtn = new ZombieMath.LabelButton(this.game, this.game.width / 2, 350, 'ui', 'ABOUT', this.about, this, 'LongBtn0000', 'LongBtn0000', 'LongBtn0000', 'LongBtn0000');
            aboutBtn.anchor.set(0.5, 0.5);
            var copyrightbl = this.game.add.text(this.game.width / 2, this.game.height - 20, "© 2015 by Botter.me ", { font: "20px Arial", fill: "#FFF", align: "center" });
            copyrightbl.anchor.set(0.5, 0);
        };
        MainMenu.prototype.playHandle = function () {
            this.game.state.start('Play', true, false);
        };
        MainMenu.prototype.about = function () {
            this.game.state.start('About', true, false);
        };
        return MainMenu;
    })(Phaser.State);
    ZombieMath.MainMenu = MainMenu;
})(ZombieMath || (ZombieMath = {}));
var ZombieMath;
(function (ZombieMath) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.apply(this, arguments);
            this.lane = [{ x: 1, y: 120 }, { x: 2, y: 145 }, { x: 3, y: 170 }, { x: 4, y: 195 }, { x: 5, y: 220 }];
            this.minTime = 3;
            this.maxTime = 5;
        }
        Play.prototype.preload = function () {
            this.zombies = [];
            this.point = 0;
            this.width = this.game.width;
        };
        Play.prototype.create = function () {
            this.game.add.sprite(0, 0, 'background');
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            var time = ZombieMath.Util.getRandomInt(this.minTime, this.maxTime) * 1000;
            this.timer = this.game.time.events.loop(time, this.createZombie, this);
            this.hero = new ZombieMath.Hero(this.game);
            this.expressionText = this.game.add.text(400, 350, "", { font: "32px Arial", fill: "#FFF", align: "center" });
            this.expressionText.anchor.set(0.5, 0.5);
            this.answ1 = this.game.add.text(200, 400, "", { font: "32px Arial", fill: "#FFF", align: "center" });
            this.answ1.inputEnabled = true;
            this.answ1.anchor.set(0.5, 0.5);
            this.answ1.events.onInputDown.add(this.answerHandler, this);
            this.answ2 = this.game.add.text(400, 400, "", { font: "32px Arial", fill: "#FFF", align: "center" });
            this.answ2.inputEnabled = true;
            this.answ2.anchor.set(0.5, 0.5);
            this.answ2.events.onInputDown.add(this.answerHandler, this);
            this.answ3 = this.game.add.text(600, 400, "", { font: "32px Arial", fill: "#FFF", align: "center" });
            this.answ3.inputEnabled = true;
            this.answ3.anchor.set(0.5, 0.5);
            this.answ3.events.onInputDown.add(this.answerHandler, this);
            this.lblHp = this.game.add.text(650, 30, "HP: 100", { font: "32px Arial", fill: "#FFF", align: "center" });
            this.lblScore = this.game.add.text(20, 30, "SCORE: 0", { font: "32px Arial", fill: "#FFF", align: "center" });
        };
        Play.prototype.createZombie = function () {
            var noOfZombie = ZombieMath.Util.getRandomInt(1, 3);
            var laneStart = 0;
            var laneEnd = this.lane.length - noOfZombie;
            for (var i = 0; i < noOfZombie; i++) {
                var laneNo = ZombieMath.Util.getRandomInt(laneStart, laneEnd);
                var type = ZombieMath.Util.getRandomInt(1, 4);
                this.zombies.push(new ZombieMath.Zombie(this.game, this.lane[laneNo], 15, this, type));
                laneStart = laneNo + 1;
                laneEnd += 1;
            }
            this.timer.delay = ZombieMath.Util.getRandomInt(this.minTime, this.maxTime) * 1000;
        };
        Play.prototype.fire = function () {
            this.hero.fire();
        };
        Play.prototype.deductPoint = function () {
            this.hero.hp--;
            if (this.hero.hp == 0) {
                this.game.state.start('End', true, false, this.point);
            }
        };
        Play.prototype.update = function () {
            this.lblHp.setText('HP: ' + this.hero.hp);
            this.lblScore.setText('SCORE: ' + this.point);
            for (var i = 0; i < this.zombies.length; i++) {
                this.zombies[i].update();
            }
            this.hero.update();
        };
        Play.prototype.answerHandler = function (e) {
            if (e.text == this.result) {
                this.clear();
                this.point++;
                if (this.targetZombie)
                    this.targetZombie.hit();
            }
            else {
                this.targetZombie.increaseSpeed();
                this.generateChallenge();
            }
        };
        Play.prototype.clear = function () {
            this.expressionText.setText("");
            this.answ1.setText("");
            this.answ2.setText("");
            this.answ3.setText("");
            this.result = undefined;
        };
        Play.prototype.showChallenge = function (zombie) {
            if (!this.result) {
                this.targetZombie = zombie;
                this.generateChallenge();
            }
        };
        Play.prototype.generateChallenge = function () {
            this.result = ZombieMath.Util.getRandomInt(5, 25);
            this.expressionText.setText(ZombieMath.generate('', this.result, 1));
            var pos = ZombieMath.Util.getRandomInt(1, 3);
            var operation = ZombieMath.Util.getRandomInt(0, 1);
            var rand1 = operation == 0 ? this.result - ZombieMath.Util.getRandomInt(1, 5) : this.result + ZombieMath.Util.getRandomInt(1, 5);
            var operation2 = ZombieMath.Util.getRandomInt(0, 1);
            var rand2 = operation2 == 0 ? this.result - ZombieMath.Util.getRandomInt(1, 5) : this.result + ZombieMath.Util.getRandomInt(1, 5);
            if (pos == 1) {
                this.answ1.setText(this.result);
                this.answ2.setText(rand1);
                this.answ3.setText(rand2);
            }
            if (pos == 2) {
                this.answ2.setText(this.result);
                this.answ1.setText(rand1);
                this.answ3.setText(rand2);
            }
            if (pos == 3) {
                this.answ3.setText(this.result);
                this.answ1.setText(rand1);
                this.answ2.setText(rand2);
            }
        };
        return Play;
    })(Phaser.State);
    ZombieMath.Play = Play;
})(ZombieMath || (ZombieMath = {}));
//class Level {
//    
//}
var ZombieMath;
(function (ZombieMath) {
    var Util = (function () {
        function Util() {
        }
        Util.getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        Util.remove = function (arr, item) {
            for (var i = arr.length; i--;) {
                if (arr[i] === item) {
                    arr.splice(i, 1);
                }
            }
        };
        return Util;
    })();
    ZombieMath.Util = Util;
    var LabelButton = (function (_super) {
        __extends(LabelButton, _super);
        function LabelButton(game, x, y, key, label, callback, callbackContext, overFrame, outFrame, downFrame, upFrame) {
            _super.call(this, game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);
            this.game = game;
            this.setLabel = function (label) {
                this.label.setText(label);
            };
            //Style how you wish...
            this.style = {
                'font': '30px Arial',
                'fill': 'white'
            };
            this.anchor.setTo(0.5, 0.5);
            this.label = new Phaser.Text(game, 0, 0, label, this.style);
            //puts the label in the center of the button
            this.label.anchor.setTo(0.5, 0.5);
            this.addChild(this.label);
            this.setLabel(label);
            //adds button to game
            game.add.existing(this);
        }
        return LabelButton;
    })(Phaser.Button);
    ZombieMath.LabelButton = LabelButton;
})(ZombieMath || (ZombieMath = {}));
var ZombieMath;
(function (ZombieMath) {
    var ZombieState;
    (function (ZombieState) {
        ZombieState[ZombieState["run"] = 0] = "run";
        ZombieState[ZombieState["die"] = 1] = "die";
    })(ZombieState || (ZombieState = {}));
    ;
    var Zombie = (function () {
        function Zombie(game, lane, speed, manager, type) {
            this.game = game;
            this.lane = lane;
            this.speed = speed;
            this.manager = manager;
            this.render = this.game.add.sprite(this.lane.x, this.lane.y, 'zombie');
            this.game.physics.arcade.enable(this.render);
            this.render.animations.add('run', Phaser.Animation.generateFrameNames('Zombie' + type, 0, 2, "", 4));
            this.render.animations.add('hit', Phaser.Animation.generateFrameNames('Zombie' + type, 3, 4, "", 4));
            this.currentAnim = this.render.animations.play('run', 5, true);
            this.render.inputEnabled = true;
            this.render.events.onInputDown.add(this.eventListener);
            this.render.body.velocity.x = speed;
            this.render.object = this;
        }
        Zombie.prototype.update = function () {
            if (this.state == 1 /* die */ && this.currentAnim.isFinished) {
                this.render.kill();
            }
            if (this.render.body.x == this.manager.width - 6) {
                this.render.kill();
                this.manager.deductPoint();
                ZombieMath.Util.remove(this.manager.zombies, this);
            }
        };
        Zombie.prototype.increaseSpeed = function () {
            this.render.body.velocity.x += 5;
        };
        Zombie.prototype.handle = function () {
            this.manager.showChallenge(this);
        };
        Zombie.prototype.hit = function () {
            if (this.state == 1 /* die */)
                return;
            this.render.body.velocity.x = 0;
            this.state = 1 /* die */;
            this.currentAnim = this.render.animations.play('hit', 2, false);
            this.manager.fire();
        };
        Zombie.prototype.eventListener = function (e) {
            e.object.handle();
        };
        return Zombie;
    })();
    ZombieMath.Zombie = Zombie;
})(ZombieMath || (ZombieMath = {}));
//# sourceMappingURL=game.js.map