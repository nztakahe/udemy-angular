var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('node');
});

router.post('/', function (req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'New',
        lastName: 'User',
        password: 'password',
        email: email
    });
    console.log('adding email ' + email);
    user.save(function callback(err, res)  {console.error(err);});
});

module.exports = router;
