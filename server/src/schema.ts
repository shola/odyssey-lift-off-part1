import { gql } from "graphql-tag";

// NOTE: this can be in a monorepo's shared library 

// Object types that the graphql API can return. These model
// the business domain
const typeDefs = gql`
  """
  Each query field is an entrypoint into the rest of the schema.
  It defines what data clients can query in the schema, equivalent
  to REST endpoints.
  """
  type Query {
      "Query to get tracks array for the homepage grid"
      tracksForHome: [Track!]!
      track(id: ID!): Track
  }

  "A track is a group of modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int    
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times the track has been viewed"
    numberOfViews: Int
    "The track's main author"
    author: Author!
    "The track's complete array of Modules"
    modules: [Module!]!
  }

  "A Module is a single unit of teaching. Multiple Modules compose a track."
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in minutes"
    length: Int
  }

"Author of a complete Track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;

export { typeDefs };
