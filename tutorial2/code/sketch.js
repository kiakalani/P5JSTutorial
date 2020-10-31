
/**
 * @author Kia Kalani
 * This javascript file contains the logic behind circle with circle collision.
 * @version 1.00
 */

/**
 * This method would indicate whether two circles have collided or not.
 * @param {x position of the first circle} x 
 * @param {y position of the first circle} y 
 * @param {diameter of the first circle} diameter 
 * @param {x position of the second circle} x2 
 * @param {y position of the second circle} y2 
 * @param {the diameter of the second circle} diameter2 
 */
function circleCollidedWithCircle(x,y, diameter, x2,y2, diameter2) {
    return Math.pow(x-x2, 2)+ Math.pow(y-y2, 2) <= Math.pow(diameter/2 + diameter2/2, 2);
}

/**
 * The width of the canvas.
 */
const WIDTH = 1024;

/**
 * The height of the canvas.
 */
const HEIGHT = 768;

/**
 * A x position for the second circle which is considered to be 200 in this case.
 */
let circleX = 200;

/**
 * A y position for the second circle which is considered to be 200 in this case.
 */
let circleY = 200;

/**
 * The diameter of the circles that are being used.
 */
let circleDiameter = 40;

/**
 * Setting up the canvas with the width and height.
 */
function setup() {
    createCanvas(WIDTH, HEIGHT);
}

/**
 * Drawing the components.
 */
function draw() {
    background(100);
    if (circleCollidedWithCircle(mouseX, mouseY, circleDiameter, circleX, circleY, circleDiameter)) {
        fill('blue');
    } else{
        fill('red');
    }
    circle(mouseX, mouseY, circleDiameter);
    circle(circleX, circleY, circleDiameter);
}