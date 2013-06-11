// Define constants
var KEY_DOWN = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_LEFT = 40;
var ENTER = 13;

var CANVAS_HEIGHT = 500;
var CANVAS_WIDTH = 500;

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "images/ring.png";

// Show 3 players and select one player
var fighterReady = false;
var fighterImage = new Image();
fighterImage.onload = function () {
    fighterReady = true;
};
fighterImage.src = "images/fighter1.png";

var fighter = {
    speed: 50
}

// Enemy image
var enemyReady = false;
var enemyImage = new Image();
enemyImage.onload = function () {
    enemyReady = true;
};
enemyImage.src = "images/enemy1.png";

var enemy = {
    speed: 5
}

// Game objects
var enemyLoses = 0;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);

// pass level if you fighter win to enemy
var levelUp = true;

var reset = function () {
    fighter.x = canvas.width / 10;
    fighter.y = canvas.height / 10;
    enemy.x = canvas.width - (canvas.width / 10);
    enemy.y = canvas.height - (canvas.height / 10);
    //enemy.speed = (enemy.speed > 100 ) ? ( enemy.speed) : (enemy.speed + enemyLoses);
};


// Update game objects
var update = function (modifier) {
    //var move = Math.floor((Math.random()*4)+1);
};


// Draw everything
var render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }
    if (fighterReady) {
        ctx.drawImage(fighterImage, fighter.x, fighter.y);
    }
    if (enemyReady) {
        ctx.drawImage(enemyImage, enemy.x, enemy.y);
    }
};

// The main game loop
var main = function () {
    var now = Date.now();
    var delta = now - then;
    update(delta / 1000);
    render();

    then = now;
};

// Let's play this game!
reset();
var then = Date.now();
setInterval(main, 1); // Execute as fast as possible
