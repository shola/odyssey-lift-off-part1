// This model describes the shape of the results from the REST endpoint
export interface TrackModel {
    id: string;
    title: string;
    authorId: string;
    thumbnail: string;
    length: number;
    modulesCount: number;
    description: string;
    numberOfViews: number;
}

export interface ModuleModel {
    id: string;
    title: string;
    length: number;
}