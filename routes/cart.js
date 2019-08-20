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
  try {
    carts.push(req.body)
    return res.send({ sucess: true });
  } catch (err) {
    return res.send({ sucess: false })
  }

});

module.exports = router;
