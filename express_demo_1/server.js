var express = require("express");
var app = express();
app.get("/", function(req, res) {
    res.send("hello world");
});
app.listen(1337);
console.log("server running at http://localhost:1337/");