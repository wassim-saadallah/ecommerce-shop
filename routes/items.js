const express = require('express');
const router = express.Router();
const { db, categories, brands } = require('../db');


router.get('/categories', (req, res) => {
    return res.send(categories)
})

router.get('/brands', (req, res) => {
    return res.send(brands)
})

router.get('/manufacturers', (req, res) => {
    return res.send(manufacturers)
})

router.get('/top/:n', (req, res) => {
    const { n } = req.params;
    const result = []
    for (let i = 0; i < n; i++) {
        const index = Math.floor(Math.random() * db.length);
        result.push(db[index])
    }
    return res.send(result);
})

router.get('/search/category/:category', (req, res) => {
    const { category } = req.params;
    console.log(category)
    console.log(categories)
    const items = db.filter(it => it.categories.includes(category))
    if (items) {
        return res.send(items)
    } else {
        return res.status(404).send({ err: `Category ${req.params.id} not found` });
    }
})

router.get('/search/brand/:brand', (req, res) => {
    const { brand } = req.params;
    const items = db.filter(it => it.brand.includes(brand))
    if (items) {
        return res.send(items)
    } else {
        return res.status(404).send({ err: `Brand ${req.params.id} not found` });
    }
})

router.get('/search/:term', (req, res) => {
    const { term } = req.params;
    const items = db.filter(it => it.keys.includes(term))
    if (items) {
        return res.send(items)
    } else {
        return res.status(404).send({ err: `item ${req.params.id}` });
    }
})



router.get('/:id', function (req, res, next) {
    const item = db.find(it => it.id === req.params.id)
    if (item) {
        return res.send(item)
    } else {
        return res.status(404).send({ err: `item ${req.params.id}` });
    }
});

module.exports = router;
