---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.709Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "INFORMATION_SCHEMA DDL column"
feature_slug: "information-schema-ddl-column"
latest_feature_date: "2021-11-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-intro"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes"
keywords:
  - "information"
  - "schema"
  - "ddl"
  - "column"
  - "bigquery"
  - "views"
  - "routines"
  - "schemata"
---

# INFORMATION_SCHEMA DDL column

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery INFORMATION_SCHEMA views for routines, schemata, and tables expose a DDL column containing the resource creation statement.

## Extended Definition

BigQuery INFORMATION_SCHEMA views for routines, schemata, and tables expose a DDL column containing the resource creation statement.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes)

## Supporting Pages

### Introduction to INFORMATION_SCHEMA \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- Source ID: `site-docs-reference-3`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table lists all INFORMATION SCHEMA views that you can query to retrieve metadata information: Resource type INFORMATION SCHEMA View Access control OBJECT PRIVILEGES science BI Engine BI CAPACITIES BI CAPACITY CHANGES Configurations EFFECTIVE PROJECT OPTIONS ORGANIZATION OPTIONS ORGANIZATION OPTIONS CHANGES PROJECT OPTIONS PROJECT OPTIONS CHANGES Datasets SCHEMATA SCHEMATA LINKS SCHEMATA OPTIONS SHARED DATASET USAGE SCHEMATA REPLICAS SCHEMATA REPLICAS BY FAILOVER RESERVATION Graphs PROPERTY GRAPHS Jobs JOBS BY PROJECT † JOBS BY USER JOBS BY FOLDER JOBS BY ORGANIZATION Jobs by timeslice JOBS TIMELINE BY PROJECT † JOBS TIMELINE BY USER JOBS TIMELINE BY FOLDER JOBS TIMELINE BY ORGANIZATION Recommendations and insights INSIGHTS science RECOMMENDATIONS science RECOMMENDATIONS BY ORGANIZATION science Reservations ASSIGNMENTS BY PROJECT † ASSIGNMENT CHANGES BY PROJECT † CAPACITY COMMITMENTS BY PROJECT † CAPACITY COMMITMENT CHANGES BY PROJECT † RESERVATIONS BY PROJECT † RESERVATION CHANGES BY PROJECT † RESERVATIONS TIMELINE BY PROJECT † Routines PARAMETERS ROUTINES ROUTINE OPTIONS Search indexes SEARCH INDEXES SEARCH INDEX COLUMNS SEARCH INDEX COLUMN OPTIONS science SEARCH INDEX OPTIONS SEARCH INDEXES BY ORGANIZATION Sessions SESSIONS BY PROJECT † SESSIONS BY USER Streaming STREAMING TIMELINE BY PROJECT † STREAMING TIMELINE BY FOLDER STREAMING TIMELINE BY ORGANIZATION Tables COLUMNS COLUMN FIELD PATHS CONSTRAINT COLUMN USAGE KEY COLUMN USAGE PARTITIONS science TABLES TABLE OPTIONS TABLE CONSTRAINTS TABLE SNAPSHOTS TABLE STORAGE BY PROJECT † TABLE STORAGE BY FOLDER TABLE STORAGE BY ORGANIZATION TABLE STORAGE USAGE TIMELINE science TABLE STORAGE USAGE TIMELINE BY FOLDER science TABLE STORAGE USAGE TIMELINE BY ORGANIZATION science Vector indexes VECTOR INDEXES VECTOR INDEX COLUMNS VECTOR INDEX OPTIONS Views VIEWS MATERIALIZED VIEWS Write API WRITE API TIMELINE BY PROJECT † WRITE API TIMELINE BY FOLDER WRITE API TIMELINE BY ORGANIZATION † For BY PROJECT views, the BY PROJECT suffix is optional.
- SCHEMATA ; The following INFORMATION SCHEMA views don't support region qualifiers: INFORMATION SCHEMA.PARTITIONS INFORMATION SCHEMA.SEARCH INDEXES INFORMATION SCHEMA.SEARCH INDEX COLUMNS INFORMATION SCHEMA.SEARCH INDEX OPTIONS If neither a region qualifier nor a dataset qualifier is specified, you will receive an error.
- TABLES ; The following INFORMATION SCHEMA views support dataset qualifiers: COLUMNS COLUMN FIELD PATHS MATERIALIZED VIEWS PARAMETERS PARTITIONS ROUTINES ROUTINE OPTIONS TABLES TABLE OPTIONS VIEWS Region qualifier Region qualifiers are represented using a region- REGION syntax.
- Introduction to INFORMATION SCHEMA The BigQuery INFORMATION SCHEMA views are read-only, system-defined views that provide metadata information about your BigQuery objects.

### "INFORMATION_SCHEMA.BI_CAPACITIES view \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities)
- Source ID: `site-api-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- The INFORMATION SCHEMA.BI CAPACITIES view has the following schema: Column name Data type Value project id STRING The project ID of the project that contains BI Engine capacity. project number INTEGER The project number of the project that contains BI Engine capacity. bi capacity name STRING The name of the object.
- If set to null , BI Engine capacity is used for all queries in the current project For stability, we recommend that you explicitly list columns in your information schema queries instead of using a wildcard ( SELECT ).
- Required permission To query the INFORMATION SCHEMA.BI CAPACITIES view, you need the bigquery.bireservations.get Identity and Access Management (IAM) permission for BI Engine reservations.
- Note: You must use a region qualifier to query INFORMATION SCHEMA views.

### "INFORMATION_SCHEMA.BI_CAPACITY_CHANGES view \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes)
- Source ID: `site-api-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- The INFORMATION SCHEMA.BI CAPACITY CHANGES view has the following schema: Column name Data type Value change timestamp TIMESTAMP Timestamp when the current update to BI Engine capacity was made. project id STRING The project ID of the project that contains BI Engine capacity. project number INTEGER The project number of the project that contains BI Engine capacity. bi capacity name STRING The name of the object.
- Required permission To query the INFORMATION SCHEMA.BI CAPACITY CHANGES view, you need the bigquery.bireservations.get Identity and Access Management (IAM) permission for BI Engine reservations.
- For stability, we recommend that you explicitly list columns in your information schema queries instead of using a wildcard ( SELECT ).
- Note: You must use a region qualifier to query INFORMATION SCHEMA views.

