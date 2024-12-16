import React from "react";
import { Layout } from "../components";
import { gql } from "../__generated__/";

// Define queries with components that use them instead of having
// a massive folder somewhere full of all queries
const TRACKS = gql(`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`);
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  return <Layout grid> </Layout>;
};

export default Tracks;
