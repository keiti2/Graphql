const { GraphQLServer } = require("graphql-yoga");
const path = require("path");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Graphql2", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Conectado");
  })
  .catch((err) => {
    console.log("Erro conexão");
    process.exit();
  });

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schema.graphql"),
  resolvers,
});

const opts = {
  port: 4000,
};
server.start(() => {
  console.log(`😄 Server running at http://localhost:${opts.port}`);
});
