module ZombieMath {
    export class Util {
        static getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        static remove(arr, item) {
            for (var i = arr.length; i--;) {
                if (arr[i] === item) {
                    arr.splice(i, 1);
                }
            }
        }
    }


    export class LabelButton extends Phaser.Button {
        style: any;
        label: any;

        constructor(public game: Phaser.Game, x: any, y: any, key: any, label: any, callback: any,
            callbackContext: any, overFrame: any, outFrame: any, downFrame: any, upFrame: any) {

            super(game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame);
 
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

        setLabel = function (label) {

            this.label.setText(label);
        }
    }

    //LabelButton.prototype = Object.create(Phaser.Button.prototype);

}