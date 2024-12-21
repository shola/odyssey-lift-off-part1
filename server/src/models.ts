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

/**
 * Is it best practice to define a model for every data object
 * that the REST endpoints return?
 * Why can I omit videoURL and content and the query still works?
 */ 
export interface ModuleModel {
    id: string;
    title: string;
    length: number;
    // videoUrl: string;
    // content: string;
}