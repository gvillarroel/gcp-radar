---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.773Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "INFORMATION_SCHEMA reservation views"
feature_slug: "information-schema-reservation-views"
latest_feature_date: "2020-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-intro"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes"
keywords:
  - "information"
  - "schema"
  - "reservation"
  - "views"
  - "bigquery"
  - "provides"
  - "metadata"
---

# INFORMATION_SCHEMA reservation views

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery provides INFORMATION_SCHEMA views for reservation metadata; BigQuery provides INFORMATION_SCHEMA views for reservation metadata.

## Extended Definition

BigQuery provides INFORMATION_SCHEMA views for reservation metadata; BigQuery provides INFORMATION_SCHEMA views for reservation metadata.

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
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists all INFORMATION SCHEMA views that you can query to retrieve metadata information: Resource type INFORMATION SCHEMA View Access control OBJECT PRIVILEGES science BI Engine BI CAPACITIES BI CAPACITY CHANGES Configurations EFFECTIVE PROJECT OPTIONS ORGANIZATION OPTIONS ORGANIZATION OPTIONS CHANGES PROJECT OPTIONS PROJECT OPTIONS CHANGES Datasets SCHEMATA SCHEMATA LINKS SCHEMATA OPTIONS SHARED DATASET USAGE SCHEMATA REPLICAS SCHEMATA REPLICAS BY FAILOVER RESERVATION Graphs PROPERTY GRAPHS Jobs JOBS BY PROJECT † JOBS BY USER JOBS BY FOLDER JOBS BY ORGANIZATION Jobs by timeslice JOBS TIMELINE BY PROJECT † JOBS TIMELINE BY USER JOBS TIMELINE BY FOLDER JOBS TIMELINE BY ORGANIZATION Recommendations and insights INSIGHTS science RECOMMENDATIONS science RECOMMENDATIONS BY ORGANIZATION science Reservations ASSIGNMENTS BY PROJECT † ASSIGNMENT CHANGES BY PROJECT † CAPACITY COMMITMENTS BY PROJECT † CAPACITY COMMITMENT CHANGES BY PROJECT † RESERVATIONS BY PROJECT † RESERVATION CHANGES BY PROJECT † RESERVATIONS TIMELINE BY PROJECT † Routines PARAMETERS ROUTINES ROUTINE OPTIONS Search indexes SEARCH INDEXES SEARCH INDEX COLUMNS SEARCH INDEX COLUMN OPTIONS science SEARCH INDEX OPTIONS SEARCH INDEXES BY ORGANIZATION Sessions SESSIONS BY PROJECT † SESSIONS BY USER Streaming STREAMING TIMELINE BY PROJECT † STREAMING TIMELINE BY FOLDER STREAMING TIMELINE BY ORGANIZATION Tables COLUMNS COLUMN FIELD PATHS CONSTRAINT COLUMN USAGE KEY COLUMN USAGE PARTITIONS science TABLES TABLE OPTIONS TABLE CONSTRAINTS TABLE SNAPSHOTS TABLE STORAGE BY PROJECT † TABLE STORAGE BY FOLDER TABLE STORAGE BY ORGANIZATION TABLE STORAGE USAGE TIMELINE science TABLE STORAGE USAGE TIMELINE BY FOLDER science TABLE STORAGE USAGE TIMELINE BY ORGANIZATION science Vector indexes VECTOR INDEXES VECTOR INDEX COLUMNS VECTOR INDEX OPTIONS Views VIEWS MATERIALIZED VIEWS Write API WRITE API TIMELINE BY PROJECT † WRITE API TIMELINE BY FOLDER WRITE API TIMELINE BY ORGANIZATION † For BY PROJECT views, the BY PROJECT suffix is optional.
- Introduction to INFORMATION SCHEMA The BigQuery INFORMATION SCHEMA views are read-only, system-defined views that provide metadata information about your BigQuery objects.
- For projects that use capacity-based pricing, queries against INFORMATION SCHEMA views and tables consume your purchased BigQuery slots.
- Note: Not all INFORMATION SCHEMA views are supported for BigQuery Omni system tables .

### "INFORMATION_SCHEMA.BI_CAPACITIES view \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Required permission To query the INFORMATION SCHEMA.BI CAPACITIES view, you need the bigquery.bireservations.get Identity and Access Management (IAM) permission for BI Engine reservations.
- INFORMATION SCHEMA.BI CAPACITIES view The INFORMATION SCHEMA.BI CAPACITIES view contains metadata about the current state of BI Engine capacity.
- If you want to view the history of changes to BI Engine reservation, see the INFORMATION SCHEMA.BI CAPACITY CHANGES view .
- Note: You must use a region qualifier to query INFORMATION SCHEMA views.

### "INFORMATION_SCHEMA.BI_CAPACITY_CHANGES view \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes)
- Source ID: `site-api-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Required permission To query the INFORMATION SCHEMA.BI CAPACITY CHANGES view, you need the bigquery.bireservations.get Identity and Access Management (IAM) permission for BI Engine reservations.
- If you want to view the current state of BI Engine reservation, see the INFORMATION SCHEMA.BI CAPACITIES view .
- Note: You must use a region qualifier to query INFORMATION SCHEMA views.
- The INFORMATION SCHEMA.BI CAPACITY CHANGES view has the following schema: Column name Data type Value change timestamp TIMESTAMP Timestamp when the current update to BI Engine capacity was made. project id STRING The project ID of the project that contains BI Engine capacity. project number INTEGER The project number of the project that contains BI Engine capacity. bi capacity name STRING The name of the object.

