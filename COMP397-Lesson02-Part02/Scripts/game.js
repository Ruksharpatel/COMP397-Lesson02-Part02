/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var assets; //container for all assets
//Game Variables
var helloLabel; //create a reference
var pinkButton;
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest([
        { id: "pinkButton", src: "assets/images/pinkButton.png" },
        { id: "clicked", src: "assets/sounds/clicked.wav" }
    ]);
}
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
function pinkButtonClicked(event) {
    createjs.Sound.play("clicked");
}
function pinkButtonOver(event) {
    pinkButton.alpha = 0.8;
}
function pinkButtonOut(event) {
    pinkButton.alpha = 1.0;
}
//Our Main Game Function
function main() {
    console.log("Game is Running!! ");
    helloLabel = new createjs.Text("Hello World! ", "40px Times New Roman", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5; //registration point(regX and regY)
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    helloLabel.x = 160;
    helloLabel.y = 210;
    stage.addChild(helloLabel);
    pinkButton = new createjs.Bitmap(assets.getResult("pinkButton"));
    pinkButton.regX = pinkButton.getBounds().width * 0.5; //width of the get bounds (bounds of the objects and the width of the getbounds object) (0.5 bcoz of half the width)
    pinkButton.regY = pinkButton.getBounds().height * 0.5;
    pinkButton.x = 160;
    pinkButton.y = 270;
    stage.addChild(pinkButton); //add pikButton to the stage
    pinkButton.on("click", pinkButtonClicked);
    pinkButton.on("mouseover", pinkButtonOver);
    pinkButton.on("mouseout", pinkButtonOut);
}
//# sourceMappingURL=game.js.map