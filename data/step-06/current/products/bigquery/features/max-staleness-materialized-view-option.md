---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.646Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "max_staleness materialized view option"
feature_slug: "max-staleness-materialized-view-option"
latest_feature_date: "2022-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/authorized-views"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "max"
  - "staleness"
  - "materialized"
  - "view"
  - "option"
  - "views"
  - "balances"
  - "query"
---

# max_staleness materialized view option

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The max_staleness option for materialized views balances query performance and cost for frequently changing datasets; The max_staleness option lets materialized views balance freshness, performance, and cost for large changing datasets.

## Extended Definition

The max_staleness option for materialized views balances query performance and cost for frequently changing datasets; The max_staleness option lets materialized views balance freshness, performance, and cost for large changing datasets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### Authorized views \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)
- Source ID: `site-docs-reference-5`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Grant Identity and Access Management (IAM) roles that give users the necessary permissions to query the authorized views or authorized materialized views that you share.
- For details about how row-level security interacts with materialized views, see Use row-level security with other BigQuery features .
- Authorized views This document describes how to create authorized views and authorized materialized views in BigQuery.
- Use BigQuery sharing with authorized views BigQuery sharing (formerly Analytics Hub) is a data exchange platform with the following capabilities: Lets you share data and insights at scale across organizational boundaries.

### Create materialized view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-materialized-view)
- Source ID: `site-docs-reference-required-15`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId tableId = TableId . of ( datasetName , materializedViewName ); MaterializedViewDefinition materializedViewDefinition = MaterializedViewDefinition . newBuilder ( query ). build (); bigquery . create ( TableInfo . of ( tableId , materializedViewDefinition )); System . out . println ( "Materialized view created successfully" ); } catch ( BigQueryException e ) { System . out . println ( "Materialized view was not created. \n" + e . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Explore further For detailed documentation that includes this code sample, see the following: Create materialized views Code sample Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting" , pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "my materialized view" materialized view { query = "SELECT ID, description, date created FROM myproject.orders.items" enable refresh = "true" refresh interval ms = 172800000 # 2 days allow non incremental definition = "false" } } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- String datasetName = "MY DATASET NAME" ; String tableName = "MY TABLE NAME" ; String materializedViewName = "MY MATERIALIZED VIEW NAME" ; String query = String . format ( "SELECT MAX(TimestampField) AS TimestampField, StringField, " + "MAX(BooleanField) AS BooleanField " + "FROM %s.%s GROUP BY StringField" , datasetName , tableName ); createMaterializedView ( datasetName , materializedViewName , query ); } public static void createMaterializedView ( String datasetName , String materializedViewName , String query ) { try { // Initialize client that will be used to send requests.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Idle slots . --max staleness= INTERVAL Specifies an INTERVAL value that determines the maximum staleness allowed when querying a materialized view or an external table.
- For more information about using the bq ls command, see the following: Managing jobs Listing datasets in a project Creating and using tables Listing views in a dataset Working with transfers Listing table snapshots in a dataset bq mk Use the bq mk command to create a BigQuery resource.
- For more information, see Creating and using materialized views . bq mk --reservation Creates a reservation with dedicated slots.
- If you create a Spanner connection and want to use Data Boost , include the "useParallelism":true and "useDataBoost":true pairs. --connection credential= CONNECTION CREDENTIAL The credentials of the connection in JSON format. username and password must be specified. --project id= PROJECT ID Specifies the ID of the project that the connection belongs to. --location= LOCATION Specifies the location that the connection will be stored. --display name= DISPLAY NAME Specifies an optional friendly name for the connection. --description= DESCRIPTION Specifies an optional description of the connection. --iam role id= ROLE ID For BigQuery Omni on AWS, specifies an IAM role that allows access to the resource.

