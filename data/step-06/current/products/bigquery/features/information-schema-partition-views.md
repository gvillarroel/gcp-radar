---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.746Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "INFORMATION_SCHEMA partition views"
feature_slug: "information-schema-partition-views"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-intro"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-insights"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities"
keywords:
  - "information"
  - "schema"
  - "partition"
  - "views"
  - "provide"
  - "metadata"
  - "about"
  - "table"
---

# INFORMATION_SCHEMA partition views

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

INFORMATION_SCHEMA partition views provide metadata about table partitions in BigQuery.

## Extended Definition

INFORMATION_SCHEMA partition views provide metadata about table partitions in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-insights](https://docs.cloud.google.com/bigquery/docs/information-schema-insights)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities)

## Supporting Pages

### Introduction to INFORMATION_SCHEMA \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- Source ID: `site-docs-reference-3`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table lists all INFORMATION SCHEMA views that you can query to retrieve metadata information: Resource type INFORMATION SCHEMA View Access control OBJECT PRIVILEGES science BI Engine BI CAPACITIES BI CAPACITY CHANGES Configurations EFFECTIVE PROJECT OPTIONS ORGANIZATION OPTIONS ORGANIZATION OPTIONS CHANGES PROJECT OPTIONS PROJECT OPTIONS CHANGES Datasets SCHEMATA SCHEMATA LINKS SCHEMATA OPTIONS SHARED DATASET USAGE SCHEMATA REPLICAS SCHEMATA REPLICAS BY FAILOVER RESERVATION Graphs PROPERTY GRAPHS Jobs JOBS BY PROJECT † JOBS BY USER JOBS BY FOLDER JOBS BY ORGANIZATION Jobs by timeslice JOBS TIMELINE BY PROJECT † JOBS TIMELINE BY USER JOBS TIMELINE BY FOLDER JOBS TIMELINE BY ORGANIZATION Recommendations and insights INSIGHTS science RECOMMENDATIONS science RECOMMENDATIONS BY ORGANIZATION science Reservations ASSIGNMENTS BY PROJECT † ASSIGNMENT CHANGES BY PROJECT † CAPACITY COMMITMENTS BY PROJECT † CAPACITY COMMITMENT CHANGES BY PROJECT † RESERVATIONS BY PROJECT † RESERVATION CHANGES BY PROJECT † RESERVATIONS TIMELINE BY PROJECT † Routines PARAMETERS ROUTINES ROUTINE OPTIONS Search indexes SEARCH INDEXES SEARCH INDEX COLUMNS SEARCH INDEX COLUMN OPTIONS science SEARCH INDEX OPTIONS SEARCH INDEXES BY ORGANIZATION Sessions SESSIONS BY PROJECT † SESSIONS BY USER Streaming STREAMING TIMELINE BY PROJECT † STREAMING TIMELINE BY FOLDER STREAMING TIMELINE BY ORGANIZATION Tables COLUMNS COLUMN FIELD PATHS CONSTRAINT COLUMN USAGE KEY COLUMN USAGE PARTITIONS science TABLES TABLE OPTIONS TABLE CONSTRAINTS TABLE SNAPSHOTS TABLE STORAGE BY PROJECT † TABLE STORAGE BY FOLDER TABLE STORAGE BY ORGANIZATION TABLE STORAGE USAGE TIMELINE science TABLE STORAGE USAGE TIMELINE BY FOLDER science TABLE STORAGE USAGE TIMELINE BY ORGANIZATION science Vector indexes VECTOR INDEXES VECTOR INDEX COLUMNS VECTOR INDEX OPTIONS Views VIEWS MATERIALIZED VIEWS Write API WRITE API TIMELINE BY PROJECT † WRITE API TIMELINE BY FOLDER WRITE API TIMELINE BY ORGANIZATION † For BY PROJECT views, the BY PROJECT suffix is optional.
- Introduction to INFORMATION SCHEMA The BigQuery INFORMATION SCHEMA views are read-only, system-defined views that provide metadata information about your BigQuery objects.
- TABLES ; The following INFORMATION SCHEMA views support dataset qualifiers: COLUMNS COLUMN FIELD PATHS MATERIALIZED VIEWS PARAMETERS PARTITIONS ROUTINES ROUTINE OPTIONS TABLES TABLE OPTIONS VIEWS Region qualifier Region qualifiers are represented using a region- REGION syntax.
- SCHEMATA ; The following INFORMATION SCHEMA views don't support region qualifiers: INFORMATION SCHEMA.PARTITIONS INFORMATION SCHEMA.SEARCH INDEXES INFORMATION SCHEMA.SEARCH INDEX COLUMNS INFORMATION SCHEMA.SEARCH INDEX OPTIONS If neither a region qualifier nor a dataset qualifier is specified, you will receive an error.

### INFORMATION_SCHEMA.INSIGHTS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-insights](https://docs.cloud.google.com/bigquery/docs/information-schema-insights)
- Source ID: `site-docs-reference-3`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the required permissions for each recommender, see the following: Partition & cluster recommender permissions Materialized view recommendations permissions Role recommendations for datasets permissions Schema The INFORMATION SCHEMA.INSIGHTS view has the following schema: Column name Data type Value insight id STRING Base64 encoded ID that contains the insight type and insight ID insight type STRING The type of the Insight.
- The INFORMATION SCHEMA.INSIGHTS view supports the following recommendations: Partition and cluster recommendations Materialized view recommendations Role recommendations for BigQuery datasets Required permission To view insights with the INFORMATION SCHEMA.INSIGHTS view, you must have the required permissions for the corresponding recommender.
- The INFORMATION SCHEMA.INSIGHTS view contains insights about all BigQuery recommendations in the current project.
- Note: You must use a region qualifier to query INFORMATION SCHEMA views.

### "INFORMATION_SCHEMA.BI_CAPACITIES view \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities)
- Source ID: `site-api-reference`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- INFORMATION SCHEMA.BI CAPACITIES view The INFORMATION SCHEMA.BI CAPACITIES view contains metadata about the current state of BI Engine capacity.
- Note: You must use a region qualifier to query INFORMATION SCHEMA views.
- The INFORMATION SCHEMA.BI CAPACITIES view has the following schema: Column name Data type Value project id STRING The project ID of the project that contains BI Engine capacity. project number INTEGER The project number of the project that contains BI Engine capacity. bi capacity name STRING The name of the object.
- If set to null , BI Engine capacity is used for all queries in the current project For stability, we recommend that you explicitly list columns in your information schema queries instead of using a wildcard ( SELECT ).

