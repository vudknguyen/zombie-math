module ZombieMath {

    export class End extends Phaser.State {
        point: number;

        init(point: number) {
            this.point = point;
        }

        create() {
            var scorelbl = this.game.add.text(this.game.width / 2, 180, 'Score: ' + this.point.toString(), { font: "32px Arial", fill: "#FFF", align: "center" });
            scorelbl.anchor.set(0.5, 0);

            var retry = new LabelButton(this.game, this.game.width / 2, 250, 'ui', 'RETRY', this.playHandle,
                this, 'LongBtn0000', 'LongBtn0000', 'LongBtn0000', 'LongBtn0000');

            retry.anchor.set(0.5, 0.5);
            
        }

        playHandle() {
            this.game.state.start('Play', true, false);
        }

    }

} 