/**
 * @author Kia Kalani
 * Student ID: 101145220
 * This javascript file contains the items related to the menus in the project.
 * <strong>Note: </strong> by menus we are referring to the scene that would be
 * shown to the user.
 * @version 1.00
 */


/**
 * The width of the project.
 */
const MENUWIDTH = 1024;

/**
 * The height of the project.
 */
const MENUHEIGHT = 768;

/**
 * This class is the template of the scenes related to the game.
 */
class Menu {

    /**
     * Constructor
     */
    constructor() {
        this.stars = [];
        for (let i = 0; i < nextInt(100, 200); i++) {
            this.stars.push({x: nextInt(0, MENUWIDTH), y: nextInt(0, MENUHEIGHT)});
        }
        this.collisionDetector = new CollisionDetector();
    }

    /**
     * This method would take care of handling the events related to the keyboard key
     * being pressed.
     */
    handleKeyPressed() {

    }

    /**
     * This method would be called when the key is being released.
     */
    handleKeyReleased() {

    }

    /**
     * This method would be called when the mouse is being pressed
     */
    handleMousePressed() {

    }

    /**
     * This method would be called when the mouse is released.
     */
    handleMousReleased() {

    }

    /**
     * Displaying the contents of the menu to the page
     */
    render() {
        background(5);
        for (let i = 0; i < this.stars.length; i++) {
            circle(this.stars[i].x, this.stars[i].y, nextInt(1,4));
        }
    }

    /**
     * Updating the page.
     */
    update() {
        
    }
}
/**
 * This class is the main menu of the game.
 */
class MainMenu extends Menu {

    /**
     * The constructor of the main menu.
     */
    constructor() {
        super();
        this.options = ["Start Game", "Instructions", "About This Workshop"];
        this.selectedPosition = 0;
    }

    /**
     * This method renders the space invader game text at the beginning of the page.
     */
    renderMainText() {
        textSize(50);
        fill('green');
        text("Space Invader Game!", 230, 150);
    }

    /**
     * This method is responsible for rendering the options of the main menu.
     */
    renderOptions() {
        for (let i = 0; i < this.options.length; i++) {
            let fillcolor = 'blue';
            if (i == this.selectedPosition) {
                fillcolor = 'red';
            }
            textSize(25);
            fill(fillcolor);
            text(this.options[i], 230, 250 + (i * 50));
        }
    }

    /**
     * This method renders everything all together.
     */
    render() {
        super.render();
        this.renderMainText();
        this.renderOptions();
    }

    /**
     * This method ensures that the released key would not go out of bounds.
     */
    checkKeyBoundaries() {
        if (this.selectedPosition < 0) {
            this.selectedPosition = this.options.length - 1;
        } else if (this.selectedPosition == this.options.length) {
            this.selectedPosition = 0;
        }
    }

    /**
     * This method would change the scene according to the selected option.
     */
    doActionBySelectedIndex() {
        switch (this.selectedPosition) {
            case 0:
                changeCurrentScene(new GamePage());
                break;
            case 1:
                changeCurrentScene(new Instructions());
                break;
            case 2:
                changeCurrentScene(new About());
                break;
        }
    }

    /**
     * This method handles the events related to the mouse being pressed
     */
    handleMousePressed() {
        this.doActionBySelectedIndex();
    }

    /**
     * This method would select the option that mouse would be moved onto.
     */
    mouseHitOption() {
        for (let i = 0; i < this.options.length; i++) {
            let x = 230;
            let y = 230 + ((i) * 50);
            let width = 25 * this.options[i].length;
            let height = 25;
            if (this.collisionDetector.collidedRectWithPoint(x, y, width, height, mouseX, mouseY)) {
                this.selectedPosition = i;
                break;
            }
        }
    }

    /**
     * This method handles the keyboard related events.
     */
    handleKeyReleased() {
        super.handleKeyReleased();
        switch (key) {
            case "ArrowUp":
                this.selectedPosition -= 1;
                break;
            case "ArrowDown":
                this.selectedPosition += 1;
                break;
            case "ArrowLeft":
                this.selectedPosition -= 1;
                break;
            case "ArrowRight":
                this.selectedPosition += 1;
                break;
            case "Enter":
                this.doActionBySelectedIndex();
                break;
        }
        this.checkKeyBoundaries();
    }

    /**
     * This method is responsible for updating the objects in the menu.
     */
    update() {
        super.update();
        this.mouseHitOption();
    }

}

//Todo: Finish this class tomorrow with Ali's help
class About extends Menu {

}

/**
 * The game logic itself.
 */
class GamePage extends Menu {

}

/**
 * This class would demonstrate the instructions to the players as of how they are supposed to be playing the game.
 */
class Instructions extends Menu {

    /**
     * The constructor
     */
    constructor() {
        super();
    }

    /**
     * This method renders the instructions as well as the buttons to the player.
     */
    render() {
        super.render();
        fill('green');
        textSize(30);
        text("Press 'A' or 'D' to move left or right\nPress 'Space' to shoot towards the aliens.\n Don't let them collide with your ship", 200, 200);
    }

    /**
     * This method takes care of the events when the key is being released.
     */
    handleKeyReleased() {
        if (key == "Enter" || key == "ArrowRight") {
            changeCurrentScene(new GamePage());
        } else if (key == 'ArrowLeft') {
            changeCurrentScene(new MainMenu());
        }
    }

    /**
     * This method handles the events related to the mouse being pressed.
     */
    handleMousePressed() {
        
    }

}

/**
 * This class is responsible for showing the score of the player when they lose.
 */
class GameOver extends Menu {
    /**
     * The constructor.
     * @param {The score the player earned} score 
     */
    constructor(score) {
        super();
        this.score = score;
    }
    /**
     * This method renders the game over scene.
     */
    render() {
        super.render();
        textSize(60);
        fill('red');
        text("Game Over\n Score: " + this.score, 200, 200);
    }
    /**
     * This method would take the player back to the main menu when the player releases any key.
     */
    handleKeyReleased() {
        changeCurrentScene(new MainMenu());
    }
    /**
     * This method takes the player back to the main menu once they press a mouse button.
     */
    handleMousePressed() {
        changeCurrentScene(new MainMenu());
    }
}

