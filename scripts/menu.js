var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ZombieMath;
(function (ZombieMath) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            _super.apply(this, arguments);
        }
        MainMenu.prototype.preload = function () {
            this.load.image('background', 'assets/zombie_bg.jpg');
            this.load.atlasJSONHash('ui', 'assets/ui.png', 'assets/ui.json');
        };
        MainMenu.prototype.create = function () {
            var playButton = new LabelButton(this.game, 400, 300, 'ui', 'PLAY', this.playHandle, this, 'LongBtn0000', 'LongBtn0000', 'LongBtn0000', 'LongBtn0000');
            playButton.anchor.set(0.5, 0.5);
        };
        MainMenu.prototype.playHandle = function () {
            console.log("ok");
            this.game.state.start('Play', true, false);
        };
        return MainMenu;
    })(Phaser.State);
    ZombieMath.MainMenu = MainMenu;
})(ZombieMath || (ZombieMath = {}));
//# sourceMappingURL=menu.js.map