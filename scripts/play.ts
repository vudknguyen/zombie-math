module ZombieMath {

    export interface Lane {
        x: number;
        y: number;
    }

    export class Play extends Phaser.State {
        hero;
        zombies: Zombie[];
        targetZombie: Zombie;

        lane = [{ x: 1, y: 120 }, { x: 2, y: 145 }, { x: 3, y: 170 }, { x: 4, y: 195 }, { x: 5, y: 220 }];
        game: Phaser.Game;

        minTime: number = 3;
        maxTime: number = 5;

        expressionText: any;
        answ1: any;
        answ2: any;
        answ3: any;

        result: number;

        timer: any;
        point: number;

        width: number;

        lblHp: any;
        lblScore: any;

        preload() {
            this.zombies = [];
            this.point = 0;
            this.width = this.game.width;

           
        }

        create() {
            this.game.add.sprite(0, 0, 'background');

            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            var time = Util.getRandomInt(this.minTime, this.maxTime) * 1000;
            this.timer = this.game.time.events.loop(time, this.createZombie, this);

            this.hero = new Hero(this.game);

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
        }

        createZombie() {
            var noOfZombie = Util.getRandomInt(1, 3);

            var laneStart = 0;
            var laneEnd = this.lane.length - noOfZombie;

            for (var i = 0; i < noOfZombie; i++) {
                var laneNo = Util.getRandomInt(laneStart, laneEnd);
                var type = Util.getRandomInt(1, 4)
                this.zombies.push(new Zombie(this.game, this.lane[laneNo], 15, this, type))

                laneStart = laneNo + 1;
                laneEnd += 1;
            }

            this.timer.delay = Util.getRandomInt(this.minTime, this.maxTime) * 1000;

        }

        fire() {
            this.hero.fire();
        }

        deductPoint() {
            this.hero.hp--;

            if (this.hero.hp == 0) {
                this.game.state.start('End', true, false, this.point);
            }
        }

        update() {
            this.lblHp.setText('HP: ' + this.hero.hp);
            this.lblScore.setText('SCORE: ' + this.point);

            for (var i = 0; i < this.zombies.length; i++) {
                this.zombies[i].update();
            }
            this.hero.update();
        }

        answerHandler(e) {
            if (e.text == this.result) {
                this.clear();
                this.point++;
                if (this.targetZombie)
                    this.targetZombie.hit();
            } else {
                this.targetZombie.increaseSpeed();
                this.generateChallenge();
            }
        }

        clear() {
            this.expressionText.setText("");
            this.answ1.setText("");
            this.answ2.setText("");
            this.answ3.setText("");
            this.result = undefined;
        }

        showChallenge(zombie: Zombie) {
            if (!this.result) {
                this.targetZombie = zombie;
                this.generateChallenge();
            }
        }
        

        generateChallenge() {
            this.result = Util.getRandomInt(5, 25);
            this.expressionText.setText(generate('', this.result, 1));

            var pos = Util.getRandomInt(1, 3);

            var operation = Util.getRandomInt(0, 1);
            var rand1 = operation == 0 ? this.result - Util.getRandomInt(1, 5) : this.result + Util.getRandomInt(1, 5);

            var operation2 = Util.getRandomInt(0, 1);
            var rand2 = operation2 == 0 ? this.result - Util.getRandomInt(1, 5) : this.result + Util.getRandomInt(1, 5);


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
        }
    }
}



//class Level {
//    
//}
 