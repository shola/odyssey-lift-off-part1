import { Layout, ModuleDetail, QueryResult } from "../components";
import { gql } from "../__generated__/";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

/**
 * GET_MODULE_AND_PARENT_TRACK gql query to retrieve a specific module and its parent track,
 * both needed for the ModuleDetail component
 */
export const GET_MODULE_AND_PARENT_TRACK = gql(`
    query GetModuleAndParentTrack($moduleId: ID! $trackId: ID!) {
      module(id: $moduleId) {
        id
        title
        content
        videoUrl
      }
      track(id: $trackId) {
        id
        title
        modules {
          id
          title
          length
        }
      }
    }
  `);
export function Module() {
  const { trackId = "", moduleId = "" } = useParams();
  const { loading, error, data } = useQuery(GET_MODULE_AND_PARENT_TRACK, {
    variables: {
      moduleId,
      trackId,
    },
  });
  return (
    <Layout fullWidth>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail track={data?.track} module={data?.module}></ModuleDetail>
      </QueryResult>
    </Layout>
  );
}
