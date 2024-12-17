# Catstronauts - server

The starting point of the `server` code for Odyssey Lift-off I course.

Graphql endpoints help prevent the inefficient "n+1" problem in REST: making N 
calls to the exact same endpoint to retrieve the same data. REST would also be
inefficient when fetching a list of results, and then having to fetch nested data
for each of the items in the list. GraphQL `RestDataSource` fixes this issue.