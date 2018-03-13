'use strict';

var express = require('express');
var router = express.Router();
//var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('index');            
});

router.get('/api/', function (req, res, next) {
    const j = {'almost':'there'};
    res.json(j).status(200);            
});


module.exports = router;
