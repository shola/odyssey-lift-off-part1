import React from "react";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import { useParams } from "react-router-dom";
import { GetTrackQuery, GetTrackQueryVariables } from "../__generated__/types";
import TrackDetail from "../components/track-detail";

// Why do I need this generated gql, and not the one that
// comes with @apollo/client? Because it's aware of types?
export const GET_TRACK = gql(`
  query GetTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
    thumbnail
    length
    modulesCount
    description
    numberOfViews
      author {
        id
        name
        photo
      }
      modules {
        id
        title
        length
      }
    }
  }
`);

export const Track = () => {
  const { trackId = "" } = useParams();
  const { loading, error, data } = useQuery<
    GetTrackQuery,
    GetTrackQueryVariables
  >(GET_TRACK, {
    variables: {
      trackId,
    },
  });
  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};
