var http = require("http");
var express = require("express");
var app = express();
var controllers = require("./controllers");

//Setup View Engine
app.set("view engine", "ejs");

//Set the public static resource folder
app.use(express.static(__dirname + "/public"));

//Map the routes
controllers.init(app);


var server = http.createServer(app);

server.listen(3000);