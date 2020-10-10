const Aluno = require("./Aluno");

module.exports = {
  Query: {
    alunos: () => Aluno.find(),
    aluno: (_, { id }) => Aluno.findById(id),
  },

  Mutation: {
    createAluno: (_, { nome, email, ra }) => Aluno.create({ nome, email, ra }),
    deleteAluno: (_,{id}) => Aluno.findByIdAndDelete({_id:id}),
    updateAluno:(_,{id,ra})=> Aluno.findByIdAndUpdate({_id:id},{ra:ra}),
  },
};
