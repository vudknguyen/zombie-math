module ZombieMath {
    enum ZombieState { run, die };


    export class Zombie {
        render;
        state: ZombieState;
        currentAnim: any;
        constructor(public game, public lane: Lane, public speed: number, public manager: Play, type: number) {
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

        update() {
            if (this.state == ZombieState.die && this.currentAnim.isFinished) {
                this.render.kill();
            }

            if (this.render.body.x == this.manager.width - 6) {
                this.render.kill();
                this.manager.deductPoint();
                Util.remove(this.manager.zombies, this);
            }
        }

        increaseSpeed() {
            this.render.body.velocity.x += 5;
        }

        handle() {
            this.manager.showChallenge(this);

        }

        hit() {
            if (this.state == ZombieState.die)
                return;
            this.render.body.velocity.x = 0;
            this.state = ZombieState.die;
            this.currentAnim = this.render.animations.play('hit', 2, false);
            this.manager.fire();
        }

        eventListener(e) {
            e.object.handle();
        }
    }
}
