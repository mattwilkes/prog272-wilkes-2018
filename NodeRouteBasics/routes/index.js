var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'NodeRouteBasics Wilkes' });
});
router.get('/calculateFeetFromMiles', function(request, response) {
    response.send({result: request.query.miles * 5280});
});
router.get('/getFeetInMile', function(request, response) {
    response.send({result: 5280});
});
router.get('/getFeetInMile', function(request, response) {
    response.send({result: request.query.calculateCircumference *Math.Pi * 2});
});

module.exports = router;
