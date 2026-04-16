---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.473Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery materialized view recommender"
feature_slug: "bigquery-materialized-view-recommender"
latest_feature_date: "2024-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view"
  - "https://docs.cloud.google.com/bigquery/docs/authorized-views"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-insights"
keywords:
  - "bigquery"
  - "materialized"
  - "view"
  - "recommender"
  - "analyzes"
  - "past"
  - "query"
  - "jobs"
---

# BigQuery materialized view recommender

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery materialized view recommender analyzes past query jobs to identify opportunities for materialized views.

## Extended Definition

The BigQuery materialized view recommender analyzes past query jobs to identify opportunities for materialized views.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view)
- [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-insights](https://docs.cloud.google.com/bigquery/docs/information-schema-insights)

## Supporting Pages

### Create materialized view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view)
- Source ID: `site-docs-reference-required-15`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting" , pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "my materialized view" materialized view { query = "SELECT ID, description, date created FROM myproject.orders.items" enable refresh = "true" refresh interval ms = 172800000 # 2 days allow non incremental definition = "false" } } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId tableId = TableId . of ( datasetName , materializedViewName ); MaterializedViewDefinition materializedViewDefinition = MaterializedViewDefinition . newBuilder ( query ). build (); bigquery . create ( TableInfo . of ( tableId , materializedViewDefinition )); System . out . println ( "Materialized view created successfully" ); } catch ( BigQueryException e ) { System . out . println ( "Materialized view was not created. \n" + e . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // createMaterializedView demonstrates generated a materialized view based on an existing // base table. func createMaterializedView ( projectID , datasetID , baseTableID , viewID string ) error { // projectID := "my-project-id" // datasetID := "mydatasetid" // baseTableID := "mytableid" // viewID := "myviewid" ctx := context .
- Table ( view id ) view . mview query = f """ SELECT product id, SUM(clicks) AS sum clicks FROM { base table id } GROUP BY 1 """ Make an API request to create the materialized view. view = bigquery client . create table ( view ) print ( f "Created { view . table type } : { str ( view . reference ) } " ) Terraform To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .

### Authorized views \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)
- Source ID: `site-docs-reference-5`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View types A logical view is the default view type for BigQuery, and a materialized view is a precomputed view that periodically caches the results of a query for increased performance and efficiency.
- For details about how row-level security interacts with materialized views, see Use row-level security with other BigQuery features .
- Authorized views This document describes how to create authorized views and authorized materialized views in BigQuery.
- This role grants the bigquery.jobs.create permission which is required to run query jobs against the view.

### INFORMATION_SCHEMA.INSIGHTS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-insights](https://docs.cloud.google.com/bigquery/docs/information-schema-insights)
- Source ID: `site-docs-reference-3`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- The result is similar to the following: +---------------------------------------------------+---------------------+--------------------+--------------------------+-------------------------+---------------------+ recommender target resource gb saved monthly slot hours saved monthly observation period days last updated time +---------------------------------------------------+---------------------+--------------------+--------------------------+-------------------------+---------------------+ google.bigquery.table.PartitionClusterRecommender ["table resource1"] 3934.07264107652 10.499466666666667 30.0 2024-07-01 16:41:25 google.bigquery.table.PartitionClusterRecommender ["table resource2"] 4393.7416711859405 56.61476777777777 30.0 2024-07-01 16:41:25 google.bigquery.materializedview.Recommender ["project resource"] 140805.38289248943 9613.139166666666 2.0 2024-07-01 13:00:31 +---------------------------------------------------+---------------------+--------------------+--------------------------+-------------------------+---------------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The INFORMATION SCHEMA.INSIGHTS view supports the following recommendations: Partition and cluster recommendations Materialized view recommendations Role recommendations for BigQuery datasets Required permission To view insights with the INFORMATION SCHEMA.INSIGHTS view, you must have the required permissions for the corresponding recommender.
- For example, google.bigquery.materializedview.Insight . subtype STRING The subtype of the insight. project id STRING The ID of the project. project number STRING The number of the project. description STRING The description about the recommendation. last updated time TIMESTAMP This field represents the time when the insight was last refreshed. category STRING The optimization category of the impact. target resources STRING Fully qualified resource names this insight is targeting. state STRING The state of the insight.
- To see the required permissions for each recommender, see the following: Partition & cluster recommender permissions Materialized view recommendations permissions Role recommendations for datasets permissions Schema The INFORMATION SCHEMA.INSIGHTS view has the following schema: Column name Data type Value insight id STRING Base64 encoded ID that contains the insight type and insight ID insight type STRING The type of the Insight.

