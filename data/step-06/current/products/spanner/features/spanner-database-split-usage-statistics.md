---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.207Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner database split usage statistics"
feature_slug: "spanner-database-split-usage-statistics"
latest_feature_date: "2024-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.AddSplitPointsRequest"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient"
keywords:
  - "surfaced"
  - "splits"
  - "split"
  - "statistics"
  - "database"
  - "usage"
  - "adds"
---

# Spanner database split usage statistics

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Adds usage statistics for Spanner database splits, surfaced with the System Insights dashboard, to help identify hotspot rows in the database.

## Extended Definition

Adds usage statistics for Spanner database splits, surfaced with the System Insights dashboard, to help identify hotspot rows in the database.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.AddSplitPointsRequest](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.AddSplitPointsRequest)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)

## Supporting Pages

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Spanner automatically adds and removes split boundaries, which changes the number of splits in the database.
- Spanner splits data based on load: it adds split boundaries automatically when it detects high read or write load spread among many keys in a split.
- The updated command for creating the table and index looks like this: CREATE TABLE Player ( PlayerID STRING ( 36 ) NOT NULL , IndexPartition INT64 NOT NULL Attribute INT64 NOT NULL ) PRIMARY KEY ( PlayerID ) CREATE INDEX idx attribute ON Player ( IndexPartition , Attribute ) The IndexPartition value needs to have a limited range for efficient querying, but it should also have range that is at least double the number of splits for efficient distribution.
- In load tests, this model does an acceptable job of distributing the secondary index read and write load across multiple Spanner splits, as illustrated in the following diagram: Although the synthetic data used in the load test is similar to the eventual steady state of the game where Attribute values are well distributed, the game design dictates that all players start with Attribute=50 .

### "Class AddSplitPointsRequest (3.63.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.AddSplitPointsRequest](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.AddSplitPointsRequest)
- Source ID: `site-python-reference`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Version latest keyboard arrow down 3.63.0 (latest) 3.62.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.1 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.1 3.39.0 3.38.0 3.37.0 3.36.0 3.35.1 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.1 3.26.0 3.25.0 3.24.0 3.23.0 3.22.2 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.1 3.14.1 3.13.0 3.12.1 3.11.1 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.1.1 2.0.0 1.19.3 1.18.0 1.17.1 1.16.0 1.15.1 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 AddSplitPointsRequest ( mapping = None , , ignore unknown fields = False , kwargs ) The request for AddSplitPoints][google.spanner.admin.database.v1.DatabaseAdmin.AddSplitPoints] .
- Home Documentation Developer tools Python Client libraries Send feedback Class AddSplitPointsRequest (3.63.0) Stay organized with collections Save and categorize content based on your preferences.
- Values are of the form projects/ . split points MutableSequence[ google.cloud.spanner admin database v1.types.SplitPoints ] Required.
- The database on whose tables/indexes split points are to be added.

### "Class DatabaseAdminAsyncClient (3.63.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.spanner admin database v1.types.AddSplitPointsResponse The response for AddSplitPoints][google.spanner.admin.database.v1.DatabaseAdmin.AddSplitPoints] . backup path backup path ( project : str , instance : str , backup : str ) - > str Returns a fully-qualified backup string. backup schedule path backup schedule path ( project : str , instance : str , database : str , schedule : str ) - > str Returns a fully-qualified backup schedule string. cancel operation cancel operation ( request : typing .
- AddSplitPointsRequest ( database="database value", ) Make the request response = await client. add split points (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.spanner admin database v1.types.AddSplitPointsRequest , dict]] The request object.
- The request for AddSplitPoints][google.spanner.admin.database.v1.DatabaseAdmin.AddSplitPoints] . database str Required.
- AddSplitPointsResponse ) Adds split points to specified tables, indexes of a database.

