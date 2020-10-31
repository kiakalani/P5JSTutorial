/**
 * @author Kia Kalani
 * This javascript file contains the logic behind making a simple
 * tic tac toe game.
 */

 /**
  * The width of the canvas.
  */
const WIDTH = 1024;
/**
 * The height of the canvas.
 */
const HEIGHT = 768;
/**
 * The rectangles that would indicate different positions in the game board.
 */
const rectangles = [];
/**
 * The boolean indicator of the turn in the game.
 */
let turn = true;
/**
 * This method initializes the rectangles.
 */
function setRectangles() {
    for (let r = 0; r < 3; r++) {
        rectangles.push([]);
        for (let c = 0; c < 3; c++) {
            rectangles[r].push({ x: c * (WIDTH / 3), y: r * (HEIGHT / 3), width: WIDTH / 3, height: HEIGHT / 3, content: 0 });
        }
    }
}
/**
 * This method would indicate whether two rectangles have collided.
 * @param {x position of the first rectangle} x 
 * @param {y position of the first rectangle} y 
 * @param {width of the first rectangle} width 
 * @param {height of the first rectangle} height 
 * @param {x position of the second rectangle} x2 
 * @param {y position of the second rectangle} y2 
 * @param {width of the second rectangle} width2 
 * @param {height of the second rectangle} height2
 * @returns true if two rectangles have collided.
 */
function rectangleCollidedWithRectangle(x, y, width, height, x2, y2, width2, height2) {
    return x <= x2 + width2 && x2 <= x + width && y <= y2 + height2 && y2 <= y + height;
}
/**
 * This method would reset the game in case of the win condition or tie.
 */
function resetGame() {
    for (let r = 0; r < rectangles.length; r++) {
        for (let c = 0; c < rectangles[r].length; c++) {
            rectangles[r][c].content = 0;
        }
    }
    turn = true;
}
/**
 * This method checks for win conditions and in that case it would inform the players.
 */
function checkWin() {
    for (let r = 0; r < rectangles.length; r++) {
        if (rectangles[r][0].content == rectangles[r][1].content && rectangles[r][1].content == rectangles[r][2].content && rectangles[r][0].content != 0) {
            window.alert("Game over");
            resetGame();
            return;
        } else if (rectangles[0][r].content == rectangles[1][r].content && rectangles[0][r].content == rectangles[2][r].content && rectangles[0][r].content != 0) {
            window.alert("Game over");
            resetGame();
            return;
        }
    }
    if (rectangles[0][0].content == rectangles[1][1].content && rectangles[1][1].content == rectangles[2][2].content && rectangles[0][0].content != 0) {
        window.alert("Game over");
        resetGame();
        return;
    } else if (rectangles[0][2].content == rectangles[1][1].content && rectangles[1][1].content == rectangles[2][0].content && rectangles[1][1].content != 0) {
        window.alert("Game over");
        resetGame();
    }

}
function checkTie() {
    for (let r = 0; r<rectangles.length;r++) {
        for (let c = 0; c<rectangles[r].length;c++) {
            if (rectangles[r][c].content == 0) {
                return;
            }
        }
    }
    window.alert("The game was a tie");
    resetGame();
}
/**
 * The setup method for initializing the game components including canvas and the rectangles.
 */
function setup() {
    createCanvas(WIDTH, HEIGHT);
    setRectangles();
}
/**
 * The mouse pressed method.
 */
function mousePressed() {
    for (let r = 0; r < rectangles.length; r++) {
        for (let c = 0; c < rectangles[r].length; c++) {
            let curr = rectangles[r][c];
            if (rectangleCollidedWithRectangle(curr.x, curr.y, curr.width, curr.height, mouseX, mouseY, 0, 0)) {
                if (turn) {
                    rectangles[r][c].content = 1;
                } else rectangles[r][c].content = 2;

                if (turn) {
                    turn = false;
                } else turn = true;
            }
        }
    }
    checkWin();
    checkTie();

}
/**
 * The draw method.
 */
function draw() {
    background(100);
    for (let r = 0; r < rectangles.length; r++) {
        for (let c = 0; c < rectangles[r].length; c++) {
            let cur = rectangles[r][c];
            if (cur.content == 0) {
                fill(255, 255, 255);
            } else if (cur.content == 1) {
                fill(255, 0, 0);
            } else fill(0, 255, 0);
            rect(cur.x, cur.y, cur.width, cur.height);
        }
    }

}