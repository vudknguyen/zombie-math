module ZombieMath {

    export class Boot extends Phaser.State {
       

        preload() {
            this.load.image('background', 'assets/zombie_bg.jpg');
            this.load.atlasJSONHash('ui', 'assets/ui.png', 'assets/ui.json');

            this.game.load.image('background', 'assets/zombie_bg.jpg');
            this.game.load.atlasJSONHash('zombie', 'assets/zombies.png', 'assets/zombies.json');
        }

        create() {

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
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL ;
                this.scale.minWidth = this.game.width / 2;
                this.scale.minHeight = this.game.height / 2;
                this.scale.maxWidth = 2048; 
                this.scale.maxHeight = 1228; 
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
                this.scale.forceOrientation(true, false);
               
            }

            this.game.state.start('MainMenu', true, false);

        }

    }

} 