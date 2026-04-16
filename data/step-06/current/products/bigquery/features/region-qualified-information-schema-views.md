---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.779Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Region-qualified INFORMATION_SCHEMA views"
feature_slug: "region-qualified-information-schema-views"
latest_feature_date: "2020-06-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-intro"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-insights"
keywords:
  - "region"
  - "qualified"
  - "information"
  - "schema"
  - "views"
  - "bigquery"
  - "supports"
---

# Region-qualified INFORMATION_SCHEMA views

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports region-qualified INFORMATION_SCHEMA views.

## Extended Definition

BigQuery supports region-qualified INFORMATION_SCHEMA views.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata](https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-insights](https://docs.cloud.google.com/bigquery/docs/information-schema-insights)

## Supporting Pages

### SCHEMATA view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata](https://docs.cloud.google.com/bigquery/docs/information-schema-datasets-schemata)
- Source ID: `site-docs-reference-3`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: You must use a region qualifier to query INFORMATION SCHEMA views.
- The INFORMATION SCHEMA.SCHEMATA view has the following schema: Column name Data type Value catalog name STRING The name of the project that contains the dataset schema name STRING The dataset's name also referred to as the datasetId schema owner STRING The value is always NULL creation time TIMESTAMP The dataset's creation time last modified time TIMESTAMP The dataset's last modified time location STRING The dataset's geographic location ddl STRING The CREATE SCHEMA DDL statement that can be used to create the dataset default collation name STRING The name of the default collation specification if it exists; otherwise, NULL . sync status JSON The status of the sync between the primary and secondary replicas for cross-region replication and disaster recovery datasets.
- The following table explains the region scope for this view: View Name Resource scope Region scope [ PROJECT ID .]INFORMATION SCHEMA.SCHEMATA Project level US region [ PROJECT ID .]region- REGION .INFORMATION SCHEMA.SCHEMATA Project level REGION Replace the following: Optional: PROJECT ID : the ID of your Google Cloud project.
- Each of the following predefined IAM roles includes the permissions that you need in order to get the SCHEMATA view: roles/bigquery.admin roles/bigquery.dataEditor roles/bigquery.dataOwner roles/bigquery.dataViewer For more information about BigQuery permissions, see Access control with IAM .

### Introduction to INFORMATION_SCHEMA \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- Source ID: `site-docs-reference-3`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- Queries against a region-qualified INFORMATION SCHEMA view run in the region that you specify, which means that you can't write a single query to join data from views in different regions.
- SCHEMATA ; The following INFORMATION SCHEMA views don't support region qualifiers: INFORMATION SCHEMA.PARTITIONS INFORMATION SCHEMA.SEARCH INDEXES INFORMATION SCHEMA.SEARCH INDEX COLUMNS INFORMATION SCHEMA.SEARCH INDEX OPTIONS If neither a region qualifier nor a dataset qualifier is specified, you will receive an error.
- TABLES ; The following INFORMATION SCHEMA views support dataset qualifiers: COLUMNS COLUMN FIELD PATHS MATERIALIZED VIEWS PARAMETERS PARTITIONS ROUTINES ROUTINE OPTIONS TABLES TABLE OPTIONS VIEWS Region qualifier Region qualifiers are represented using a region- REGION syntax.
- Introduction to INFORMATION SCHEMA The BigQuery INFORMATION SCHEMA views are read-only, system-defined views that provide metadata information about your BigQuery objects.

### INFORMATION_SCHEMA.INSIGHTS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-insights](https://docs.cloud.google.com/bigquery/docs/information-schema-insights)
- Source ID: `site-docs-reference-3`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- The INFORMATION SCHEMA.INSIGHTS view supports the following recommendations: Partition and cluster recommendations Materialized view recommendations Role recommendations for BigQuery datasets Required permission To view insights with the INFORMATION SCHEMA.INSIGHTS view, you must have the required permissions for the corresponding recommender.
- Note: You must use a region qualifier to query INFORMATION SCHEMA views.
- Example To run the query against a project other than your default project, add the project ID in the following format: PROJECT ID .region- REGION NAME .INFORMATION SCHEMA.INSIGHTS Replace the following: PROJECT ID : the ID of the project.
- View name Resource scope Region scope [ PROJECT ID .]region- REGION .INFORMATION SCHEMA.INSIGHTS[ BY PROJECT] Project level REGION Replace the following: Optional: PROJECT ID : the ID of your Google Cloud project.

