// Bootstrap Apollo Server
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
// start server (subscriptions handled by Apollo v3)
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url })=> console.log("GraphQL running at", url));
