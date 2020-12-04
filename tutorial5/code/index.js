const express = require("express");
const port = process.env.PORT || 4000;
const path = require('path');

const application = express();
application.use(express.static(path.join(__dirname, "public")));

application.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "./public", "index.html"));
});
application.listen(port, function() {
    console.log("Server is running at port", port);
});


