// This model describes the shape of the results from the REST endpoint
export type TrackModel = {
    id: string;
    title: string;
    authorId: string;
    thumbnail: string;
    length: number;
    modulesCount: number;
}