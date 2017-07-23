var express = require("express");
var app = express();
app.get("/", function(req, res) {
    res.send("hello world");
});
app.listen(1337);
console.log("server running at http://localhost:1337/");

// var favicon = require("serve-favicon");
//app.use(express.favicon(__dirname, "/public/images/favicon.ico"));
// app.use('/favicon.ico', express.static('images/favicon.ico'));

var fs = require("fs");
var logger = require("morgan");
var accessLogStream = fs.createWriteStream(__dirname+'/access.log', {flags: 'a'});
app.use(logger('combined', {stream: accessLogStream}));
