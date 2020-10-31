/**
 * @author Kia Kalani
 * This javascript file contains the logic and the components of
 * the display
 * @version 1.00
 */

/**
 * The width of the project.
 */
const WIDTH = 1024;

/**
 * The height of the project.
 */
const HEIGHT = 768;

/**
 * This variable refers to the radius of the circle that would be shown
 * to the user.
 */
var radius = 40;

/**
 * Initializing the p5js stage with the width and height.
 */
function setup() {
    createCanvas(WIDTH, HEIGHT);
}

/**
 * Rendering items into the page.
 */
function draw() {
    background(100);
    fill(255, 255, 255);
    circle(mouseX, mouseY, radius);
}