var mongoose = require('mongoose');

var OrgaoJulgadorSchema = new mongoose.Schema({
  nome: String,
  tribunal: String,
  instancia: String,
  atoCriacao: String,
  dataCriacao: Date,
  cep: Number,
  endereco: String,
  cidade: String  
});

module.exports = mongoose.model('OrgaoJulgador', OrgaoJulgadorSchema);