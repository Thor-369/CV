
var express = require('express');
var router = express.Router();



/* GET home page. */
 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Juan Pablo Torres',
  	 });
});

router.get('/desarrollo/deber', function(req, res, next) {
  res.render('deber', { title: 'Deber - Juan Pablo Torres',
  	 });
}); 
router.get('/analisis', function(req, res, next) {
  res.render('analisis', { title: 'Monty Hall - Simulador',
  	 });
}); 

module.exports = router;