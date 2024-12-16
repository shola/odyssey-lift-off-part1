import React from "react";
import { Layout } from "../components";
import { gql } from "../__generated__/";
import {
  GetTracksQuery,
  GetTracksQueryVariables,
} from "../__generated__/types";
import QueryResult from "../components/query-result";
import { useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";

// Create query in Apollo Explorer, then copy past here.
// Co-locating queries with their components avoids the pattern of
// having a massive folder somewhere full of all queries.
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
  const { loading, error, data } = useQuery<
    GetTracksQuery,
    GetTracksQueryVariables
  >(TRACKS);
  return (
    <QueryResult loading={loading} error={error} data={data}>
      <Layout grid>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}{" "}
      </Layout>
    </QueryResult>
  );
};

export default Tracks;
