var http = require("http");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var controllers = require("./controllers");

//Setup View Engine
app.set("view engine", "ejs");

//Set the public static resource folder
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

//Map the routes
controllers.init(app);


var server = http.createServer(app);
var port = process.env.PORT || 3000;
server.listen(port);