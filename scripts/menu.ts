module ZombieMath {
    export class MainMenu extends Phaser.State  {
        playButton;
       
        preload() {
           
        }

        create() {
            var playButton = new LabelButton(this.game, this.game.width / 2, 250, 'ui', 'PLAY', this.playHandle,
                this, 'LongBtn0000', 'LongBtn0000', 'LongBtn0000', 'LongBtn0000');

            playButton.anchor.set(0.5, 0.5);

            var aboutBtn = new LabelButton(this.game, this.game.width / 2, 350, 'ui', 'ABOUT', this.about,
                this, 'LongBtn0000', 'LongBtn0000', 'LongBtn0000', 'LongBtn0000');

            aboutBtn.anchor.set(0.5, 0.5);

            var copyrightbl = this.game.add.text(this.game.width / 2, this.game.height - 20, "© 2015 by Botter.me ", { font: "20px Arial", fill: "#FFF", align: "center" });
            copyrightbl.anchor.set(0.5, 0);
        }

        playHandle() {
            this.game.state.start('Play', true, false);
        }

        about() {
            this.game.state.start('About', true, false);
        }
    }
}
