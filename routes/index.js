var express = require('express');
var router = express.Router();

var rootsController = require('../controller/Roots');
var roots = new rootsController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Datos Covid-19' });
});

router.get('/datos',roots.datos);
router.get('/datos',roots.datos);

module.exports = router;
