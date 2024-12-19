import type {
  Resolvers,
  Author,
  ResolversTypes,
  Track,
} from "./__generated__/types";
import type { DataSourceContext } from "./context";

/**
 * Steps to adding a graphql query to an app:
 * - create query in apollo studio
 * - add query to string to client code
 * - add resolvers for query to server
 */
const resolvers: Resolvers<DataSourceContext> = {
  Query: {
    // returns an array fo tracks that will be used to populate the homepage grid of our web client
    // ANTI-PATTERN: don't map over data and fetch additional data!
    // It's not cool to fetch data that isn't strictly required.
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    // Get a single track by ID, for the track page
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },
  Track: {
    /**
     * These resolvers are part of a resolver chain. That's why they have
     * access to the parent param.
     */ 
    author: ({ authorId }, _, { dataSources }) => {
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
    modules: ({ id: trackId }, args, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(trackId);
    },
  },
};

export default resolvers;
