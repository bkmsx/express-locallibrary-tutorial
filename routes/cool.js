var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {title: "You are so cool!"});
});

module.exports = router;