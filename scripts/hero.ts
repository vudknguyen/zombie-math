module ZombieMath {
    export class Hero {
        hp: number;
        render;
        firing: any;
        constructor(public game) {

            this.render = this.game.add.sprite(750, 180, 'zombie');

            this.game.physics.arcade.enable(this.render);
            this.render.animations.add('stand', Phaser.Animation.generateFrameNames('player', 0, 0, "", 4));
            this.render.animations.add('fire', Phaser.Animation.generateFrameNames('player', 1, 1, "", 4));
            this.render.animations.play('stand', true, true);
            this.render.scale.x *= -1;
            this.render.object = this;

            this.hp = 5;
        }

        fire() {
            this.firing = this.render.animations.play('fire', 2, false);
        }

        update() {
            if (this.firing && this.firing.isFinished) {
                this.render.animations.play('stand', 2, true);
            }
        }
    }
}
