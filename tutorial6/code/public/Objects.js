/**
 * @author Kia Kalani
 * Student ID: 101145220
 * This file contains all of the game objects with their logics.
 * @version 1.00
 */




/**
 * A simple implementation of a list for the needed functionalities in the game.
 */
class GameList{

    /**
     * The constructor
     */
    constructor() {
        this.__items = []
    }

    /**
     * This method adds an item to the list.
     * @param {The item that would be added to the list} item 
     */
    add(item) {
        this.__items.push(item);
    }

    /**
     * This method provides the selected item by index.
     * @param {the index of the item} index 
     */
    get(index) {
        return this.__items[index];
    }

    /**
     * The set method for the list.
     * @param {the index of the item} index 
     * @param {the new value that would replace the old one} value 
     */
    set(index, value) {
        this.__items[index] = value;
    }

    /**
     * This method removes an element by the given index.
     * @param {the index of the item} index 
     */
    remove(index) {
        let len = this.__items.length;
        let element = this.__items[index];
        for (let i = index;i<len-1;i++) {
            this.__items[i] = this.__items[i+1]; 
        }
        this.__items.pop();
        return element;
    }

    /**
     * The size of the list.
     */
    size() {
        return this.__items.length;
    }

}

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
 * This class is the template of the all existing objects inside the project.
 */
class GameObject{
    /**
     * The constructor
     * @param {x position of the object} x 
     * @param {y position of the object} y 
     */
    constructor(x,y) {
        this.x=x;
        this.y=y;
    }
    /**
     * This method is responsible for showing the object in the project.
     */
    render() {

    }
    /**
     * This method would be called when the key is pressed.
     */
    handleKeyPressed() {

    }
    /**
     * This method would be called when the key is released.
     */
    handleKeyReleased() {
        
    }
    /**
     * This method would be called when mouse is pressed.
     */
    handleMousePressed() {

    }
    /**
     * This method would be called when mouse is released.
     */
    handleMouseReleased() {

    }
    update() {

    }
}

/**
 * This class is responsible for making cool stars that would be shown to the scene.
 */
class CoolStar extends GameObject{
    /**
     * The constructor of the star
     * @param {x position of the star} x 
     * @param {y position of the star} y 
     */
    constructor(x,y) {
        super(x,y);
        this.rad = nextInt(3, 6);
    }
    /**
     * This method would draw the star for us.
     */
    render() {
        super.render();
        fill('white');
        circle(this.x, this.y, this.rad);
    }
    /**
     * This method would resize the stars to make the star effect.
     */
    update() {
        super.update();
        this.rad = nextInt(3,6);
    }
}

/**
 * This class contains the logics behind the main space ship which represents the player.
 */
class Player extends GameObject{
    /**
     * The constructor
     * @param {x position of the player} x 
     * @param {y position of the player} y 
     */
    constructor(x,y) {
        super(x,y);
        this.width = 80;
        this.height = 80;
        this.image = loadImage('img/ship.png');
        this.accelerator = 0;
        this.bullets = new GameList();
        this.score = 0;
    }

    /**
     * The render method that is responsible for demonstrating the image of the player.
     */
    render() {
        super.render();
        image(this.image, this.x, this.y, this.width, this.height);
        for (let i =0;i< this.bullets.size();i++) {
            this.bullets.get(i).render();
        }
        textSize(25);
        fill('blue');
        text("Score: "+this.score, 20, 20);
    }

    /**
     * The key pressed method.
     */
    handleKeyPressed() {
        switch (key) {
            case "a":
                this.accelerator = -10;
                break;
            case "d":
                this.accelerator = 10;
                break;
        }
    }

    /**
     * The key released method.
     */
    handleKeyReleased() {
        switch(key) {
            case "a":
                this.accelerator = 0;
                break;
            case "d":
                this.accelerator = 0;
                break;
            case " ":
                this.bullets.add(new Bullet(this.x+ (this.width/2), this.y));
                break;
        }
    }
    /**
     * Updating the position of the player
     */
    update() {
        if (this.x + this.accelerator + this.width < MENUWIDTH && this.x + this.accelerator > 0) {
            this.x+=this.accelerator;
        }
        for (let i =0;i<this.bullets.size();i++) {
            this.bullets.get(i).update();
        }
        for (let i = this.bullets.size()-1; i >-1;i--) {
            if (this.bullets.get(i).y < -30) {
                this.bullets.remove(i);
            }
        }
    }
    /**
     * This method would end the game in case the mob has hit the player.
     * @param {The mobs in the game} mobs 
     * @param {The collision detector object} collDetector 
     */
    bulletHitMob(mobs, collDetector) {
        for (let i = mobs.size() -1; i > -1;i--) {
            let mob = mobs.get(i);
            for (let j = this.bullets.size() -1; j > -1; j--) {
                let bullet = this.bullets.get(j);
                if (collDetector.collidedRects(mob.x,mob.y, mob.width, mob.height, bullet.x, bullet.y, bullet.width, bullet.height)) {
                    mobs.remove(i);
                    this.bullets.remove(j);
                    this.score += 5;
                }
            }
        }
    }
    /**
     * This method checks to see if player has collided with a mob. In that case the game would be ended.
     * @param {refers to the mobs in the game} mobs 
     * @param {the collision detector object} collDetector 
     */
    mobHitPlayer(mobs, collDetector) {
        for (let i = mobs.size()-1;i>-1;i--) {
            let mob = mobs.get(i);
            if (collDetector.collidedRects(this.x,this.y, this.width, this.height, mob.x, mob.y, mob.width, mob.height)) {
                mobs.remove(i);
                //Game Over
                
                changeCurrentScene(new GameOver(this.score));
            }
        }
    }

}
/**
 * This class represents the bullets in the game.
 */
class Bullet extends GameObject{
    /**
     * The constructor
     * @param {x position of the bullet} x 
     * @param {y position of the bullet} y 
     */
    constructor(x,y) {
        super(x,y);
        this.image = loadImage('img/bullet.jpg');
        this.width = 10;
        this.height = 30;
    }
    /**
     * This method renders the bullet
     */
    render() {
        image(this.image, this.x, this.y, this.width, this.height);
    }
    /**
     * This method updates the position of the bullet
     */
    update() {
        this.y -= 20;
    }
}

/**
 * A class that is responsible for generating mobs in random times.
 */
class MobGenerator extends GameObject{

    /**
     * The constructor
     */
    constructor() {
        // We do not need the x and y position for this but we need the methods.
        super(-1,-1);
        this.mobs = new GameList();
        this.now = this.getCurrentTimeMiliSeconds();
        this.howManySeconds = nextInt(1,5)*1000;
    }

    /**
     * The current time from January First, 1970 until now in miliseconds
     */
    getCurrentTimeMiliSeconds() {
        return new Date().getTime();
    }

    /**
     * This method adds a mob to the list by the passage of time.
     */
    addMob() {
        if ( this.getCurrentTimeMiliSeconds() - this.now >= this.howManySeconds) {
            this.now = this.getCurrentTimeMiliSeconds();
            this.howManySeconds = nextInt(1, 5)*1000;
            this.mobs.add(new Mob(nextInt(1,MENUWIDTH) - 80, -80));
        }
    }

    /**
     * This method renders all of the mobs in the game.
     */
    render() {
        for (let i =0;i<this.mobs.size();i++) {
            this.mobs.get(i).render();
        }
    }

    /**
     * This method updates the position of the mobs as well as the status of this class.
     */
    update() {
        this.addMob();
        for (let i =0;i<this.mobs.size();i++) {
            this.mobs.get(i).update();
        }
        for(let i = this.mobs.size() -1; i> -1; i--) {
            if (this.mobs.get(i).y > MENUHEIGHT) {
                this.mobs.remove(i);
            }
        }
    }
}

/**
 * This class represents the mobs in the game.
 */
class Mob extends GameObject{

    /**
     * The constructor
     * @param {x position of the mob} x 
     * @param {y position of the mob} y 
     */
    constructor(x,y) {
        super(x,y);
        this.image = loadImage('img/mob.png');
        this.width = 80;
        this.height = 80;
    }

    /**
     * This method renders the mob in the game.
     */
    render() {
        image(this.image, this.x, this.y, this.width, this.height);
    }

    /**
     * This method updates the position of the mob.
     */
    update() {
        this.y += 5;
    }
}
