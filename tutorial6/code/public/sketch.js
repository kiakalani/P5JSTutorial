/**
 * @author Kia Kalani
 * Student ID: 101145220
 * This file contains the main components of the p5js project.
 * @version 1.00
 */


/**
 * This variable is responsible for keeping track of which scene we are currently at.
 */
let currentScene = new MainMenu();

/**
 * This method would change the scene of the game.
 * @param {the new scene we want to replace the old one with} scene 
 */
function changeCurrentScene(scene) {
    currentScene = scene;
}

/**
 * The setup method
 */
function setup() {
    createCanvas(MENUWIDTH,MENUHEIGHT);
}

/**
 * Key released method for handling events
 */
function keyReleased() {
    currentScene.handleKeyReleased();
}

/**
 * Key pressed method for handling events
 */
function keyPressed() {
    currentScene.handleKeyPressed();
}

/**
 * This method takes care of the events related to the mouse being pressed.
 */
function mousePressed(){
    currentScene.handleMousePressed();
}

/**
 * The draw method responsible for rendering the game.
 */
function draw() {
    currentScene.render();
    currentScene.update();
}
