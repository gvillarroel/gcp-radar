---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T08:14:41.858Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Aggregation function: count"
feature_slug: "aggregation-function-count"
latest_feature_date: "2023-04-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/aggregation-queries"
  - "https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.aggregation.CountAggregation"
  - "https://docs.cloud.google.com/datastore/docs/concepts/queries"
keywords:
  - "aggregation"
  - "function"
  - "count"
  - "queries"
  - "the"
---

# Aggregation function: count

Product: Datastore
Coverage: LOW

## Step 02 Summary

Aggregation queries support the count function; Aggregation queries support the count function.

## Extended Definition

Aggregation queries support the count function; Aggregation queries support the count function.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/aggregation-queries](https://docs.cloud.google.com/datastore/docs/aggregation-queries)
- [https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.aggregation.CountAggregation](https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.aggregation.CountAggregation)
- [https://docs.cloud.google.com/datastore/docs/concepts/queries](https://docs.cloud.google.com/datastore/docs/concepts/queries)

## Supporting Pages

### Aggregation queries \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/aggregation-queries](https://docs.cloud.google.com/datastore/docs/aggregation-queries)
- Source ID: `site-iam-reference`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GetDoubleValue ()) GQL AGGREGATE SUM(hours) AS total hours, COUNT( ) AS total tasks OVER ( SELECT FROM tasks WHERE is done = false AND tag = 'house' ) GQL supports a simplified form for aggregation queries: SELECT SUM(hours) AS total hours, COUNT( ) AS total tasks FROM tasks WHERE is done = false AND tag = 'house' This example uses the optional aliases of total hours and total tasks .
- Firestore in Datastore mode supports the following aggregation queries: count() sum() avg() Aggregation queries simplify your application code and cost less than fetching each entity for processing.
- Read this page to learn how to use aggregation queries. count() aggregation Use the count() aggregation to return the total number of indexed entities that match a given query.
- Pricing Pricing for the count() , sum() , and avg() aggregation queries depends on the number of index entries scanned during the operation.

### "Class CountAggregation (2.24.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.aggregation.CountAggregation](https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.aggregation.CountAggregation)
- Source ID: `site-python-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- 2.24.0 (latest) 2.23.0 2.22.0 2.21.0 2.20.2 2.19.0 2.18.0 2.17.0 2.16.1 2.15.2 2.14.0 2.13.2 2.12.0 2.11.1 2.10.0 2.9.0 2.8.3 2.7.2 2.6.2 2.5.1 2.4.0 2.3.0 2.2.0 2.1.6 2.0.1 1.15.5 1.14.0 1.13.2 1.12.0 1.11.0 1.10.0 1.9.0 CountAggregation ( alias = None ) Representation of a "Count" aggregation query.
- Home Documentation Developer tools Python Client libraries Send feedback Class CountAggregation (2.24.0) Stay organized with collections Save and categorize content based on your preferences.
- Parameters Name Description alias str The alias for the aggregation. value int The resulting value from the aggregation.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]

### Datastore queries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/concepts/queries](https://docs.cloud.google.com/datastore/docs/concepts/queries)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Aggregation queries Firestore in Datastore mode supports the count() aggregation query.
- For more information, see Set up authentication for a local development environment . / Fetch a query cursor. @param int $pageSize @param string $pageCursor @param string $namespaceId / function cursor paging(int $pageSize, string $pageCursor = '', string $namespaceId = null) { $datastore = new DatastoreClient(['namespaceId' => $namespaceId]); $query = $datastore->query() ->kind('Task') ->limit($pageSize) ->start($pageCursor); $result = $datastore->runQuery($query); $nextPageCursor = ''; $entities = []; / @var Entity $entity / foreach ($result as $entity) { $nextPageCursor = $entity->cursor(); $entities[] = $entity; } printf('Found %s entities', count($entities)); $entities = []; if (!empty($nextPageCursor)) { $query = $datastore->query() ->kind('Task') ->limit($pageSize) ->start($nextPageCursor); $result = $datastore->runQuery($query); foreach ($result as $entity) { $entities[] = $entity; } printf('Found %s entities with next page cursor', count($entities)); } } Python To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = "your Google Cloud project id"; // Imports the Cloud Datastore const { Datastore , PropertyFilter , or } = require ( ' @google-cloud/datastore ' ); async function queryFilterOr () { // Instantiate the Datastore const datastore = new Datastore (); const query = datastore . createQuery ( 'Task' ) . filter ( or ([ new PropertyFilter ( 'description' , '=' , 'Buy milk' ), new PropertyFilter ( 'description' , '=' , 'Feed cats' ), ]), ); const [ entities ] = await datastore . runQuery ( query ); for ( const entity of entities ) { console . log ( Entity found: ${ entity [ 'description' ] } ); } } queryFilterOr (); PHP Snippet not available.
- For more information, see Set up authentication for a local development environment . async function runProjectionQuery () { const priorities = []; const percentCompletes = []; const [ tasks ] = await datastore . runQuery ( query ); tasks . forEach ( task = > { priorities . push ( task . priority ); percentCompletes . push ( task . percent complete ); }); return { priorities : priorities , percentCompletes : percentCompletes , }; } PHP To learn how to install and use the client library for Cloud Datastore, see Cloud Datastore client libraries .

