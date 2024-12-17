import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import TrackAPI from "./datasources/track-api";
import resolvers from "./resolvers";
// This could be in a monorepo's shared library
import { typeDefs } from "./schema";

interface APIContext {
  dataSources: {
    trackAPI: TrackAPI;
  };
}

async function startApolloServer() {
  const server = new ApolloServer<APIContext>({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(server, {
    context: async ({}) => ({
      dataSources: {
        trackAPI: new TrackAPI({
          cache: server.cache,
        }),
      },
    }),
  });
  console.log(`
    🚀 Server is running!
    📭 Query at ${url}
    `);
}

startApolloServer();
