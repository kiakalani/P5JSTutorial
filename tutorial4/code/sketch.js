/**
 * A collision detector class that is functional with rectangles, circles and points.
 */
class CollisionDetector{

    /**
     * Constructor
     */
    constructor() {

    }

    /**
     * This method would determine whether two rectangles have collided.
     * @param {x of rectangle 1} x 
     * @param {y of rectangle 1} y 
     * @param {width of rectangle 1} w 
     * @param {height of rectangle 1} h 
     * @param {x of rectangle 2} x2 
     * @param {y of rectangle 2} y2 
     * @param {width of rectangle 2} w2 
     * @param {height of rectangle 2} h2
     * @returns true if the collision is detected.
     */
    collidedRects(x,y,w,h,x2,y2,w2,h2) {
        return x < x2 + w2 &&x + w > x2 &&y < y2 + h2 &&y + h > y2;
    }

    /**
     * This method is responsible for determining whether two circles have collided.
     * @param {x position of the first circle} x 
     * @param {y position of the first cirlce} y 
     * @param {the radius of the first circle} rad 
     * @param {x position of the second circle} x2 
     * @param {y position of the second circle} y2 
     * @param {radius of the second circle} rad2 
     * @returns true if the collision is detected.
     */
    collidedCircles(x,y,rad,x2,y2,rad2) {
        return Math.pow(x-x2,2)+Math.pow(y-y2,2) <= Math.pow(rad+rad2);
    }

    /**
     * This method detects the collision between a point and a circle.
     * @param {x position of the circle} x 
     * @param {y position of the circle} y 
     * @param {radius of the circle} rad 
     * @param {x position of the point} x2 
     * @param {y position of the point} y2 
     * @returns true if the collision is detected.
     */
    collidedCircleWithPoint(x,y,rad, x2,y2) {
        return this.collidedCircles(x,y,rad,x2,y2,0);
    }

    /**
     * This method would determine whether a point has been collided with a rectangle.
     * @param {x position of the rectangle} x 
     * @param {y position of the rectangle} y 
     * @param {width of the rectangle} w 
     * @param {height of the rectangle} h 
     * @param {x position of the point} x2 
     * @param {y position of the point} y2 
     * @returns true if the collision is detected.
     */
    collidedRectWithPoint(x,y,w,h,x2,y2) {
        return this.collidedRects(x,y,w,h,x2,y2,0,0);
    }

}

/**
 * This method provides a random integer with the bounds provided to it (ending exclusive).
 * @param {the beginning index} start 
 * @param {the ending index} end 
 */
function nextInt(start, end) {
    return Math.floor(Math.random()*(end-1))+start;
}

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
