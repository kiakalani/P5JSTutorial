# Tutorial 1

### Author: Kia Kalani

### Contributors: Ali Lezzaik, Alireza Teimoori

#### Introduction:

The main focus of this tutorial is to familiarize you with `p5js`.

##### What is `p5js`?

`P5js` is a JavaScript library that is made for making nice looking user interfaces as well as making games. This library is based on `Processing` which is mainly used for designing and making games.



##### What are the advantages of using `p5js`?

 There are many major advantages to using `p5js` for making user interfaces. 

- First reason is its simplicity for making user interfaces. The built in functions of this library have the minimal requirements for creating items and rendering it to the webpage. 

- Second reason is due to being able to operate with no necessity of using servers and yet being able to similar job to some other libraries made for servers. 
- The last and most important reason is because this library is really lightweight and capable of loading various components in itself including sounds and images.

##### Reference:

For more information about this convenient JavaScript library please visit: https://p5js.org/

##### Getting started

By the end of this tutorial you will be able to draw a circle with a specific radius and make the circle follow the mouse cursor.

Depending on the programmer's taste, this library can be loaded in two different ways; Offline or Online. For this series of tutorial, the library would be loaded online; however, in case of interest of keeping everything functional while offline, please visit: https://p5js.org/download/ and download the file that works the best with your preference.

##### Making the project:

For making a `p5js` project, open a destination that would contain the project. In our case the directory is called `tutorial1`. 

Let's get started with the HTML portion of the code. In our case we have no additional components rather than the `p5js` components and therefore our HTML file would only include the scripts loaded as well as a color that would avoid hurting eyes. In this case, our HTML file is called `index.html`. Inside this file, we need the normal skeleton of HTML with loading the scripts and setting the background color of the HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tutorial 1</title>
</head>
<body>
    <style>
        body{
            background-color: grey;
        }
    </style>
</body>
<script src="sketch.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/addons/p5.sound.min.js"></script>
</html>
```

Note: It is best to load the scripts at the end of the body as by that point all of the elements inside the body are defined if any.

For avoidance of making too many files the css styling is being written straightly inside the HTML. 

There are two scripts that are needed for this project. One of them is `p5js` itself which would be loaded with `<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.js"></script>` and the sound `p5.sound` library which is loaded by `<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/addons/p5.sound.min.js"></script>` . Finally a JavaScript file called `sketch.js` is needed to get started with making a `p5js` project.

![](/home/anonymous/Documents/University/COMP2406/P50To100/tutorial1/intro/first.png)

###### The output by viewing the HTML file.

By opening the HTML file it is noticable that excluding the color nothing happens. That is because the `sketch.js` file which is responsible for drawing the components is not defined yet.

Now let's start by making `sketch.js` file for getting started with the view itself. There are two functions necessary for getting the project to start working. The first one is `function setup()` which would initialize the view for us and the second one is `function draw()` which is responsible for rendering the components for us. After making those two functions there is a built in method called `createCanvas(width: , height: )` which takes width and height of the canvas as parameters. Finally, it is crucial to choose a background color within the `draw()` function. This can be done by calling the built in method `background(ColorValue: )`. Therefore in order to make a canvas visible in the preview, we need to put all of these components together inside the `sketch.js` file. The file should look something like this: 

```js
const WIDTH = 1024;
const HEIGHT = 768;

function setup() {
    createCanvas(WIDTH, HEIGHT);
}

function draw() {
    background(100);
}
```

By reloading the `index.html` file you will notice that there is a darker canvas created on top of HTML with the provided width and height. 

Now let's make a circle that would follow the mouse position. For doing so, there is a built in method called `circle(x: , y: , radius: )` which would get x,y and the radius of the circle as parameters and would render a circle in case of being called inside the `draw()` method. 

For the purpose of getting the x and y position of the mouse, there are built in variables called `mouseX` and `mouseY` which represent the x position of the mouse and y position of the mouse inside the canvas. Therefore, for the purpose of drawing a circle that would constantly change its position according to x and y position of the mouse, we put the x and y position of the mouse as x and y position of the circle and give some value to the radius. In code, it should look something like this: `circle(mouseX, mouseY, radius)` where radius should be set to a value preferred by the programmers. Therefore by putting everything together in `sketch.js` it should be similar to this:

```js
const WIDTH = 1024;

const HEIGHT = 768;

var radius = 40;

function setup() {
    createCanvas(WIDTH, HEIGHT);
}

function draw() {
    background(100);
    fill(255,255,255);
    circle(mouseX, mouseY, radius);
}
```



By opening the `index.html` file you would notice that there would be a circle following the mouse.

![](/home/anonymous/Documents/University/COMP2406/P50To100/tutorial1/intro/second.png)

This sums up the first tutorial.

For getting access to the source code please visit: 

