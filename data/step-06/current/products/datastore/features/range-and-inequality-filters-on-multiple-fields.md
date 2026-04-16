---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.769Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Range and inequality filters on multiple fields"
feature_slug: "range-and-inequality-filters-on-multiple-fields"
latest_feature_date: "2024-07-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/concepts/queries"
  - "https://docs.cloud.google.com/datastore/docs/aggregation-queries"
  - "https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes"
  - "https://docs.cloud.google.com/datastore/docs/concepts/indexes"
keywords:
  - "range"
  - "and"
  - "inequality"
  - "filters"
  - "on"
  - "multiple"
  - "fields"
  - "queries"
---

# Range and inequality filters on multiple fields

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Queries can apply range and inequality filters across multiple fields; Queries can apply range and inequality filters across multiple fields.

## Extended Definition

Queries can apply range and inequality filters across multiple fields; Queries can apply range and inequality filters across multiple fields.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/concepts/queries](https://docs.cloud.google.com/datastore/docs/concepts/queries)
- [https://docs.cloud.google.com/datastore/docs/aggregation-queries](https://docs.cloud.google.com/datastore/docs/aggregation-queries)
- [https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes](https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes)
- [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes)

## Supporting Pages

### Datastore queries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/queries](https://docs.cloud.google.com/datastore/docs/concepts/queries)
- Source ID: `site-iam-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information on queries with inequality filters, see Query using range and inequality filters on multiple properties .
- Range and inequality filters on multiple properties Firestore in Datastore mode supports multiple inequality filters in a compound query.
- See Query using range and inequality filters on multiple properties .
- Restrictions Sort orders have the following restrictions: Because of the way Datastore mode executes queries, if a query specifies inequality filters on a property and sort orders on other properties, the property used in the inequality filters must be ordered before the other properties .

### Aggregation queries \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/aggregation-queries](https://docs.cloud.google.com/datastore/docs/aggregation-queries)
- Source ID: `site-iam-reference`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the query includes aggregations on multiple fields, the query requires a composite index, and each aggregation calculation includes only those entities that contain all the fields used by each aggregation.
- GetDoubleValue ()) GQL AGGREGATE SUM(hours) AS total hours, COUNT( ) AS total tasks OVER ( SELECT FROM tasks WHERE is done = false AND tag = 'house' ) GQL supports a simplified form for aggregation queries: SELECT SUM(hours) AS total hours, COUNT( ) AS total tasks FROM tasks WHERE is done = false AND tag = 'house' This example uses the optional aliases of total hours and total tasks .
- GetIntegerValue ()) GQL AGGREGATE SUM(hours) AS total hours OVER ( SELECT FROM tasks WHERE is done = false AND tag = 'house' ) GQL supports a simplified form of sum() queries: SELECT SUM(hours) AS total hours FROM tasks WHERE is done = false AND tag = 'house' This example uses an optional alias of total hours .
- GetDoubleValue ()) GQL AGGREGATE AVG(hours) as avg hours OVER ( SELECT FROM tasks WHERE is done = false AND tag = 'house' ) GQL supports a simplified form of avg() queries: SELECT AVG(hours) as avg hours FROM tasks WHERE is done = false AND tag = 'house' This example uses an optional alias of avg hours .

### Optimizing Indexes \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes](https://docs.cloud.google.com/datastore/docs/concepts/optimize-indexes)
- Source ID: `site-iam-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- The perfect composite index for a query, which allows the query to be executed most efficiently, is defined on the following properties, in order: Properties used in equality filters Properties used in sort orders Properties used in distinctOn filter Properties used in range & inequality filters (that are not already included in sort orders) Properties used in aggregations and projections (that are not already included in sort orders and range & inequality filters) This ensures that all results for every possible execution of the query are accounted.
- Client () query owner id = client . query ( kind = "Photo" , filters = [( "owner id" , "=" , "user1234" )]) query size = client . query ( kind = "Photo" , filters = [( "size" , "=" , 2 )]) query coloration = client . query ( kind = "Photo" , filters = [( "coloration" , "=" , 2 )]) The Photo filter feature also requires queries that combine multiple equality filters with a logical AND : Python from google.cloud import datastore For help authenticating your client, visit https://cloud.google.com/docs/authentication/getting-started client = datastore .
- By merging different sections of the built-in index for the tag property, Firestore in Datastore mode supports queries that combine multiple tag filters in a logical AND : Python from google.cloud import datastore For help authenticating your client, visit https://cloud.google.com/docs/authentication/getting-started client = datastore .
- Selecting indexes for your app You can select optimal indexes for your Datastore mode database by using two approaches: Use index merging to support additional queries Requires less composite indexes Reduces storage cost per entity Improves write latency Avoids exploding indexes Performance depends on the shape of the data Define a composite index that matches multiple filters in a query Improves query performance Consistent query performance that's not dependent on shape of data Must stay under the limit of composite indexes Increased storage cost per entity Increased write latency When figuring out the optimal indexes for your app, the answer can change as the shape of your data changes.

### Indexes \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/indexes](https://docs.cloud.google.com/datastore/docs/concepts/indexes)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Composite indexes are required for queries of the following form: Queries with ancestor and inequality filters Queries with one or more inequality filters on a property and one or more equality filters on other properties Queries with a sort order on keys in descending order Queries with multiple sort orders Queries with one or more filters and one or more sort orders Composite indexes are defined in the application's index configuration file ( index.yaml ). (Built-in indexes are not contained in the index configuration file.) Composite indexes are composed of multiple properties and require that each individual property must not be excluded from your indexes .
- Index configuration Firestore in Datastore mode provides built-in , or automatic, indexes for queries of the following forms: Kindless queries using only ancestor and key filters Queries using only ancestor and equality filters Queries using only inequality filters (which are limited to a single property ) Queries using only ancestor filters, equality filters on properties, and inequality filters on keys Queries with no filters and only one sort order on a property, either ascending or descending As an example, by default, Datastore mode databases automatically predefine two single property indexes for each property of each entity kind, one in ascending order and one in descending order.
- As described earlier, this includes queries with multiple sort orders or queries with a mix of equality and inequality filters.
- Built-in indexes are sufficient to perform many simple queries, such as equality-only queries and simple inequality queries.

