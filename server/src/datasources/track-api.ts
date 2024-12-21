import { RESTDataSource } from "@apollo/datasource-rest";
import { Author, Module } from "../__generated__/types";
import { ModuleModel, TrackModel } from "../models";

/**
 * RESTDatasource uses `fetch` under the hood, and also adds:
 * - in memory cache to avoid sending multiple identical requests in parallel
 * - HTTP cache for "browser style caching", using HTTP caching headers
 * - easier URL search param use
 * easier JSON parsing of request bodies
 * - pagination with `option.params.per_page`
 * - error handling
 * - fetch interception to set headers or query parms, or add auth to all requests
 */
export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get<TrackModel[]>("tracks");
  }

  // SECURITY: use encodeURIComponent to prevent possible injection attacks
  getAuthor(authorId: string) {
    return this.get<Author>(`author/${encodeURIComponent(authorId)}`);
  }

  getTrack(trackId: string) {
    return this.get<TrackModel>(`track/${encodeURIComponent(trackId)}`);
  }

  getTrackModules(trackId: string) {
    return this.get<ModuleModel[]>(`track/${encodeURIComponent(trackId)}/modules`)
  }
  
  getModule(moduleId: string) {
    return this.get<ModuleModel>(`module/${encodeURIComponent(moduleId)}`);
  }
}

export default TrackAPI;
