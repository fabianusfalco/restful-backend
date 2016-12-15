var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var OrgaoJulgador = require('../models/OrgaoJulgador.js');

/* GET /tribunal Listagem de orgaos julgadores. */
router.get('/', function(req, res, next) {
  OrgaoJulgador.find(function (err, orgaojulgador) {
    if (err) return next(err);
    res.json(orgaojulgador);
  });
});

/* POST /tribunal Cadastro de orgao julgador */
router.post('/', function(req, res, next) {
  OrgaoJulgador.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /tribunal/id  Lista filtrada por um orgao julgador*/
router.get('/:id', function(req, res, next) {
  OrgaoJulgador.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /tribunal/:id Salva a edição de orgao julgador */
router.put('/:id', function(req, res, next) {
  OrgaoJulgador.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /tribunal/:id Deletando o orgao julgador a partir do id */
router.delete('/:id', function(req, res, next) {
  OrgaoJulgador.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
