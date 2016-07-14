module ZombieMath {

    export class Game extends Phaser.Game {

        constructor() {
            super(800, 480, Phaser.AUTO, 'content', null);
            this.state.add('Boot', Boot, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('About', About, false);
            this.state.add('Play', Play, null);
            this.state.add('End', End, null);
            this.state.start('Boot');
        }
    }

} 
