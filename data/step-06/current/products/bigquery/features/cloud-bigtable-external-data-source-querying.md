---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.728Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Cloud Bigtable external data source querying"
feature_slug: "cloud-bigtable-external-data-source-querying"
latest_feature_date: "2022-08-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "BigQuery Bigtable federation"
  - "Bigtable external querying"
  - "Bigtable federation"
  - "Bigtable integration"
  - "Bigtable connector"
  - "query Bigtable data"
  - "BigQuery external table"
  - "external data source"
---

# Cloud Bigtable external data source querying

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Querying Cloud Bigtable as an external data source is now generally available in BigQuery.

## Extended Definition

In BigQuery, external querying is implemented via **external tables** (table type `EXTERNAL`), which are table definitions that reference data stored outside BigQuery. These external-table references can be queried directly in BigQuery even though the data itself is not in BigQuery storage. The provided evidence confirms the external-table model but does not explicitly mention Cloud Bigtable in the excerpt, so the Bigtable-specific interpretation is only inferred from the feature context.

## Evidence Summary

The cited page explains BigQuery external tables as references to external data sources and notes they can be queried directly from BigQuery, but it does not explicitly document Cloud Bigtable federation in the provided snippets.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- QueryJobConfig ( destination = table id ) sql = """ SELECT corpus FROM bigquery-public-data.samples.shakespeare GROUP BY corpus; """ Start the query, passing in the extra configuration. query job = client . query ( sql , job config = job config ) # Make an API request. query job . result () # Wait for the job to complete. print ( "Query results loaded to the table {} " . format ( table id )) Create a table that references an external data source An external data source is a data source that you can query directly from BigQuery, even though the data is not stored in BigQuery storage.
- Also referred to as the tableId . table type STRING The table type; one of the following: BASE TABLE : A standard table CLONE : A table clone SNAPSHOT : A table snapshot VIEW : A view MATERIALIZED VIEW : A materialized view or materialized view replica EXTERNAL : A table that references an external data source managed table type STRING This column is in Preview.
- For more information, see Introduction to external data sources .
- By defining a table that references an external data source.

