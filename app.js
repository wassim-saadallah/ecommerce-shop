var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var itemsRouter = require('./routes/items');
var cartRouter = require('./routes/cart');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.use('/', indexRouter);
app.use('/cart', cartRouter);
app.use('/items', itemsRouter);

module.exports = app;
