import type { CodegenConfig } from '@graphql-codegen/cli';

// QUESTION: Is there a way to have a unified codegen config for server and client?
const config: CodegenConfig = {
    schema: './src/schema.ts',
    documents: [],
    generates: {'./src/__generated__/types.ts': {
        plugins: ['typescript', 'typescript-resolvers'],
        config: {
            // Paths are relative to the types.ts file.
            // Needed to replace the give the `Resolvers` type a concrete 
            // context type instead of `any`
            contextType: '../context#DataSourceContext',
            /**
             * This mapper gets baked into the type that is generated for our resolvers; essentially it states that when a resolver is working with a Track type, this is the shape that it will take (rather than what the schema defines).
             * This allows us to receive a track object from our backend (with the authorId property), pass it through different resolver functions to derive the corresponding author object, and return it all in the shape that we defined in our GraphQL schema. Without this custom Track mapper, the types generated for our resolver functions would expect the track objects receive to have the exact same shape as the Track GraphQL type.
             * It can be helpful to think of the GraphQL schema as the reflection of the shape we want our data to take. It's our job to use our data sources and resolver functions to retrieve data and do whatever manipulations we need to return it to our client in that ideal state.
             */ 
            mappers: {
                Track: '../models#TrackModel'
            }
        }
    }}
}

export default config