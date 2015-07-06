/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />


// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;

//Game Variables
var helloLabel: createjs.Text; //create a reference

//Game Functions
function init() {
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); //Hover Over Effect for Button
    createjs.Ticker.setFPS(60); //framerate for the game
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
}

//Our main Game Loop - refreshed 60fps per second
function gameLoop() {
    stage.update();
}

function main() {
    console.log("Game is Running!! ");
    helloLabel = new createjs.Text("Hello World! ", "40px Times New Roman", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5; //registration point(regX and regY)
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    helloLabel.x = 160;
    helloLabel.y = 240;
    stage.addChild(helloLabel);

}
