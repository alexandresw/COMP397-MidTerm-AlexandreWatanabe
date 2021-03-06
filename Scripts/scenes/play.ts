// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backgroundImage: createjs.Bitmap;
        private _playLabel: objects.Label;
        
        private _dice1Image: createjs.Bitmap;
        private _dice2Image: createjs.Bitmap;
        
        private _dice1Label: objects.Label;
        private _dice2Label: objects.Label;
        private _sumLabel: objects.Label;
        
        private _dice1Number: number;
        private _dice2Number: number;
        
        private _rollButton: objects.Button; 
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            // add background image to the scene
            this._backgroundImage = new createjs.Bitmap(assets.getResult("PlayBackground"));
            this.addChild(this._backgroundImage);  
            
            this._dice1Image = new createjs.Bitmap(assets.getResult("Dice1"));
            this._dice1Image.x = config.Screen.CENTER_X - 250;
            this._dice1Image.y =  50;
            this.addChild(this._dice1Image); 
            
            this._dice2Image = new createjs.Bitmap(assets.getResult("Dice2"));
            this._dice2Image.x = config.Screen.CENTER_X + 50;
            this._dice2Image.y = 50;
            this.addChild(this._dice2Image);  
            
             //Add Play Label
            this._dice1Label = new objects.Label( "1","40px Consolas",  "#FFF",  config.Screen.CENTER_X - 150,config.Screen.CENTER_Y + 80);
            this.addChild(this._dice1Label);
            
             //Add Play Label
            this._dice2Label = new objects.Label( "2","40px Consolas",  "#FFF",  config.Screen.CENTER_X + 150,config.Screen.CENTER_Y + 80);
            this.addChild(this._dice2Label);
            
            
            // add the BACK button to the OVER scene
            this._rollButton = new objects.Button(
                "RollDices",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._rollButton);
            
            // START_OVER Button event listener
            this._rollButton.on("click", this._rollButtonClick, this);



            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // ROLL Button click event handler
        private _rollButtonClick(event: createjs.MouseEvent) {
            this._dice1Number = Math.floor((Math.random()*6)+1);
            this._dice2Number = Math.floor((Math.random()*6)+1);
                
            this._dice1Label.text = this._dice1Number.toString();
            this._dice2Label.text = this._dice2Number.toString();
            
            this._dice1Image.image = assets.getResult("Dice"+this._dice1Number);
            this._dice2Image.image = assets.getResult("Dice"+this._dice2Number);
        }
        
    }
}