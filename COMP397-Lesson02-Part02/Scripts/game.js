/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
//(STATIC CLASS => which do not require to instantiate OR do not need to make objects)
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var stats;
var assets; //container for all assets
var manifest = ([
    { id: "pinkButton", src: "assets/images/pinkButton.png" },
    { id: "clicked", src: "assets/sounds/clicked.wav" }
]);
//Game Variables
var helloLabel; //create a reference
var pinkButton;
//Preloader Function
function preload() {
    assets = new createjs.LoadQueue(); //loading queue for all assets
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this); // event listener triggers when all assets are completely loaded (load init function after all assets a loaded i.e. complete(on is same as event listener))
    assets.loadManifest(manifest);
}
//Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); //reference to the stage
    stage.enableMouseOver(20); //Hover Over Effect for Button
    createjs.Ticker.setFPS(60); //framerate 60fps for the game
    //event listener triggers 60 times every second
    createjs.Ticker.addEventListener("tick", gameLoop);
    main(); //Calling main game function
}
// Function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); //set to fps
    // align bottom right
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "330px";
    stats.domElement.style.top = "9px";
    document.body.appendChild(stats.domElement);
}
//Callback function that creates our Main Game Loop - refreshed 60fps per second
function gameLoop() {
    stats.begin(); //begin measuring
    stage.update();
    stats.end(); //end measuring 
}
//Callback function that allows to respond to button click events
function pinkButtonClicked(event) {
    createjs.Sound.play("clicked");
}
//Callback function that changes the alpha transperancy of the button
//MouseOver Event
function pinkButtonOver(event) {
    pinkButton.alpha = 0.8;
}
//MouseOut Event
function pinkButtonOut(event) {
    pinkButton.alpha = 1.0;
}
//Set up Statistics Object
setupStats();
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