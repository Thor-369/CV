
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
router.get('/simulador', function(req, res, next) {
  res.render('analisis', { title: 'Simulador Monty Hall',
  	 });
}); 
router.get('/baraja', function(req, res, next) {
  res.render('analisis2', { title: 'Baraja Random',
  	 });
}); 
router.get('/oraculo', function(req, res, next) {
  res.render('analisis3', { title: 'Prueba Tu suerte - Towerz Art',
  	 });
}); 

module.exports = router;