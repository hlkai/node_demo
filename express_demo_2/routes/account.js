var express = require("express");
var router = express.Router();

router.get("/login", function(req, res, next) {
    return res.send('login page');
});

router.get("/register", function(req, res, next) {
    return res.send('register page');
});

module.exports = router;
