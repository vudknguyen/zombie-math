module ZombieMath {
    export class About extends Phaser.State {
        playButton;

        preload() {
            this.load.image('background', 'assets/zombie_bg.jpg');
            this.load.atlasJSONHash('ui', 'assets/ui.png', 'assets/ui.json');
        }

        create() {
             this.game.add.text(200, 200, "Artist: JP", { font: "32px Arial", fill: "#FFF", align: "center" });
            
             this.game.add.text(200, 250, "Developer: Quang", { font: "32px Arial", fill: "#FFF", align: "center" });
            
            this.game.add.text(360, 300, "Vu", { font: "32px Arial", fill: "#FFF", align: "center" });
            
            var playButton = new LabelButton(this.game, 400, 400, 'ui', 'BACK', this.back,
                this, 'LongBtn0000', 'LongBtn0000', 'LongBtn0000', 'LongBtn0000');

            playButton.anchor.set(0.5, 0.5);
        }

        back() {
            this.game.state.start('MainMenu', true, false);
        }
    }
}
