var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            // add background image to the scene
            this._backgroundImage = new createjs.Bitmap(assets.getResult("PlayBackground"));
            this.addChild(this._backgroundImage);
            this._dice1Image = new createjs.Bitmap(assets.getResult("Dice1"));
            this._dice1Image.x = config.Screen.CENTER_X - 250;
            this._dice1Image.y = 50;
            this.addChild(this._dice1Image);
            this._dice2Image = new createjs.Bitmap(assets.getResult("Dice2"));
            this._dice2Image.x = config.Screen.CENTER_X + 50;
            this._dice2Image.y = 50;
            this.addChild(this._dice2Image);
            //Add Play Label
            this._dice1Label = new objects.Label("1", "40px Consolas", "#FFF", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 80);
            this.addChild(this._dice1Label);
            //Add Play Label
            this._dice2Label = new objects.Label("2", "40px Consolas", "#FFF", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 80);
            this.addChild(this._dice2Label);
            // add the BACK button to the OVER scene
            this._rollButton = new objects.Button("RollDices", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._rollButton);
            // START_OVER Button event listener
            this._rollButton.on("click", this._rollButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // ROLL Button click event handler
        Play.prototype._rollButtonClick = function (event) {
            this._dice1Number = Math.floor((Math.random() * 6) + 1);
            this._dice2Number = Math.floor((Math.random() * 6) + 1);
            this._dice1Label.text = this._dice1Number.toString();
            this._dice2Label.text = this._dice2Number.toString();
            this._dice1Image.image = assets.getResult("Dice" + this._dice1Number);
            this._dice2Image.image = assets.getResult("Dice" + this._dice2Number);
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map