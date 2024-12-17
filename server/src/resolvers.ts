/**
 * Steps to adding a graphql query to an app:
 * - create query in apollo studio
 * - add query to string to client code
 * - add resolvers for query to server
 */
const resolvers = {
  Query: {
    // returns an array fo tracks that will be used to populate the homepage grid of our web client
    // ANTI-PATTERN: don't map over data and fetch additional data!
    // It's not cool to fetch data that isn't strictly required.
    tracksForHome: async (parent, args, { dataSources }, info) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: async ({authorId}, args, { dataSources }, info) => {
      // BEST-PRACTICE: make resolvers thin
      /**
       * The TrackAPI's getAuthor method needs an authorId. We'll get this 
       * value from the parent argument passed to the resolver. The parent 
       * argument contains data returned by our tracksForHome resolver, and 
       * because tracksForHome returns a list, Apollo Server iterates 
       * through that list and calls the author resolver once for each 
       * track. It passes the current track as the value of parent, 
       * enabling us to extract the authorId.
       */ 
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

export default resolvers;
