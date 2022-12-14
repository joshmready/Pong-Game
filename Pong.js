import * as PIXI from 'pixi.js'

// ball variables
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 50;
var xBallChange = 5;
var yBallChange = 5;
// paddle variables
var xPaddle;
var yPaddle;
var paddleWidth = 100;
var paddleHeight = 25;
// score tracking
var score = 0;

var started = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function elipse();

function draw() {
    background(0);
    xBall += xBallChange;
    yBall += yBallChange;
    if (xBall < diameter / 2 || xBall > windowWidth - 0.5 * diameter) {
        xBallChange *= -1;
    }
    if (yBall < diameter / 2 || yBall > windowHeight - diameter) {
        yBallChange *= -1;
    }
    if ((xBall > xPaddle && xBall < xPaddle + paddleWidth) && (yBall + (diameter / 2) >= yPaddle)) {
        xBallChange *= -1;
        yBallChange *= -1;
        score++;
    }
    fill(255, 0, 255);
    noStroke();
    ellipse(xBall, yBall, diameter, diameter);
    if (!started) {
        xPaddle = windowWidth / 2;
        yPaddle = windowHeight - 100;
        started = true;
    }
    fill(0, 255, 255);
    noStroke();
    rect(xPaddle, yPaddle, paddleWidth, paddleHeight);
    fill(0, 255, 255);
    textSize(24);
    text("Score: " + score, 10, 25);
}

function keyPressed() {
    if (keycode === LEFT_ARROW) {
        xPaddle -= 50;
    }
    else if (keycode === RIGHT_ARROW) {
        xPaddle += 50;
    }
}

setup();