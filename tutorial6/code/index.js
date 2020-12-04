/**
 * @author Kia Kalani
 * Student ID: 101145220
 * This file contains a simple express server for the purpose of being able to load additional components to the
 * p5js project.
 * @version 1.00
 */

 /**
  * Requiring the necessary components.
  */
const express = require("express");
const path = require("path");

/**
 * The port which the server would be running at.
 */
const port =process.env.PORT || 9999;
/**
 * The server itself.
 */
const application = express();

/**
 * Making express get the components statically from the given directory
 */
application.use(express.static(path.join(__dirname, "public")));
/**
 * Loading index.html file into the server
 */
application.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "./public", "index.html"));
});

application.listen(port, function() {
    console.log("Server is running at port", port);
})
