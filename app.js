//Config
const createError = require('http-errors');
const express = require('express');
const sequelize = require('sequelize')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override')


//Importing Router
const customerRouter = require('./routes/customer');
const homeRouter = require('./routes/home')
const admRouter = require('./routes/adm')
const cartRouter = require('./routes/cart.js')


//Importing Midlleware
// const cookieMiddleware = require('./middlewares/cookies')
const logMiddleware = require('./middlewares/logSite')




//App
const app = express();



// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




//Middleware
// app.use(cookieMiddleware)
app.use(logMiddleware);
app.use(methodOverride('_method'));




//Express Generator
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));






//Routes
app.use('/customer', customerRouter);
app.use('/', homeRouter);
app.use('/adm', admRouter);
app.use('/customer', cartRouter);
























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
