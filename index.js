const MyAPI = require("./dataSource.js");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema.js");
const resolvers = require("./resolvers.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the server
startStandaloneServer(server, {
  context: () => ({
    dataSources: () => ({
      myAPI: new MyAPI(),
    }),
  }),
  listen: { port: 5000 },
})
.then(({ url }) => {
  console.log(`Server ready at ${url}`);
})
.catch((e) => {
  console.error("Server failed to start:", e.message);
});
