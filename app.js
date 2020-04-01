require("dotenv").config();

var createError = require('http-errors');
var express = require('express');
const morgan = require("morgan");
var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose = require("mongoose");


var app = express();


// database//
const  database  = {
    URI: 'mongodb+srv://thordevman:uGrRyuEp8,g$4jK@cluster0-e1gsp.mongodb.net/test?retryWrites=true&w=majority'
}
  
mongoose.connect(database.URI, {
  useNewUrlParser: true    
})
  .then(db => console.log('base de datos conectada'))
  .catch(err => console.log(err));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
