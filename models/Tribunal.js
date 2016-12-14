
var mongoose = require('mongoose');

var TribunalSchema = new mongoose.Schema({
  nome: String,
  sigla: String,
  endereco: String,
  cidade: String,
  cep: Number,
  telefone: String
});

module.exports = mongoose.model('Tribunal', TribunalSchema);

