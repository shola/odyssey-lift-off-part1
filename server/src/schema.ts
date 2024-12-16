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
    }

"A track is a group of modules that teaches about a specific topic"
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's main illustration to display in track card or track page detail"
    thumbnail: String
    "the track's main author"
    author: Author!
    "the track's approximate length to complete, in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
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
