const mongoose = require("mongoose");
const alunoSchema = new mongoose.Schema({
  nome: String,
  email: String,
  ra: Number,
});

module.exports = mongoose.model("Aluno", alunoSchema);
