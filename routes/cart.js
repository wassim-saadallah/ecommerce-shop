var express = require('express');
var router = express.Router();
var { carts } = require('../db')


router.get('/', function (req, res, next) {
  res.send(carts);
});

router.get('/:id', function (req, res, next) {
  res.send(carts.find(it => it.id === id));
});

router.post('/', function (req, res, next) {
  carts.push(req.body)
  res.send({ sucess: true });
});

module.exports = router;
