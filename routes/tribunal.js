var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Tribunal = require('../models/Tribunal.js');

/* GET /tribunal Listagem de tribunais. */
router.get('/', function(req, res, next) {
  Tribunal.find(function (err, tribunal) {
    if (err) return next(err);
    res.json(tribunal);
  });
});

/* POST /tribunal Cadastro de tribunal */
router.post('/', function(req, res, next) {
  Tribunal.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /tribunal/id  Lista filtrada por um tribunal*/
router.get('/:id', function(req, res, next) {
  Tribunal.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /tribunal/:id Salva a edição de tribunal */
router.put('/:id', function(req, res, next) {
  Tribunal.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /tribunal/:id Deletando o tribunal a partir do id */
router.delete('/:id', function(req, res, next) {
  Tribunal.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
