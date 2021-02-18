import { ApolloServer } from 'apollo-server';
import { typeDefs } from './src/type-defs';
import { resolvers } from './src/resolvers';

const mocks = {};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: false,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
