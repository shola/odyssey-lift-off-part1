import type { CodegenConfig } from "@graphql-codegen/cli";

/**
It's true that our Catstronauts application contains both the client and server folders in one codebase. So why don't we just tell the GraphQL Code Generator to reference the types in the server folder's schema? In other words - why are we going out to the GraphQL endpoint to gather this information?

Well, in most cases, you won't have client and server living in the same repository. Most of the time, these are projects maintained and worked on by completely different teams! As a result, the frontend developers are much more likely to be working with a remote GraphQL endpoint, rather than a schema file in the same codebase.

If I have a monorepo, I can just link to the shared schema.ts file
 */

const config: CodegenConfig = {
  schema: "../server/src/schema.ts",
  // schema: 'http://localhost:4000',
  documents: ["src/**/*.tsx"],
  generates: {
    './src/__generated__/': {
        preset: 'client',
        presetConfig: {
            gqlTagName: 'gql',
        }
    },
    './src/__generated__/types.ts': {
        plugins: ['typescript', 'typescript-operations'],
    }
  }
};

export default config;
