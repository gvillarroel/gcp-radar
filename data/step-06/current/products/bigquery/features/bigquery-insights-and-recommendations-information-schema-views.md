---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.429Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery insights and recommendations INFORMATION_SCHEMA views"
feature_slug: "bigquery-insights-and-recommendations-information-schema-views"
latest_feature_date: "2024-08-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-insights"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-intro"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes"
keywords:
  - "bigquery"
  - "insights"
  - "recommendations"
  - "information"
  - "schema"
  - "views"
  - "provides"
  - "including"
---

# BigQuery insights and recommendations INFORMATION_SCHEMA views

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery provides INFORMATION_SCHEMA views for insights and recommendations, including INSIGHTS, RECOMMENDATIONS, and RECOMMENDATIONS_BY_ORGANIZATION.

## Extended Definition

BigQuery provides INFORMATION_SCHEMA views for insights and recommendations, including INSIGHTS, RECOMMENDATIONS, and RECOMMENDATIONS_BY_ORGANIZATION.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/information-schema-insights](https://docs.cloud.google.com/bigquery/docs/information-schema-insights)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes)

## Supporting Pages

### INFORMATION_SCHEMA.INSIGHTS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-insights](https://docs.cloud.google.com/bigquery/docs/information-schema-insights)
- Source ID: `site-docs-reference-3`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The INFORMATION SCHEMA.INSIGHTS view supports the following recommendations: Partition and cluster recommendations Materialized view recommendations Role recommendations for BigQuery datasets Required permission To view insights with the INFORMATION SCHEMA.INSIGHTS view, you must have the required permissions for the corresponding recommender.
- The INFORMATION SCHEMA.INSIGHTS view contains insights about all BigQuery recommendations in the current project.
- RECOMMENDATIONS ) SELECT recommender , target resources , LAX INT64 ( recs . additional details . overview . bytesSavedMonthly ) / POW ( 1024 , 3 ) as est gb saved monthly , LAX INT64 ( recs . additional details . overview . slotMsSavedMonthly ) / ( 1000 3600 ) as slot hours saved monthly , insights . additional details . observation period seconds / 86400 as observation period days , last updated time FROM insights JOIN recs ON recommendation id in UNNEST ( associated recommendation ids ) WHERE state = 'ACTIVE' AND category = 'COST' LIMIT 3 ; Note: INFORMATION SCHEMA view names are case sensitive.
- To see the required permissions for each recommender, see the following: Partition & cluster recommender permissions Materialized view recommendations permissions Role recommendations for datasets permissions Schema The INFORMATION SCHEMA.INSIGHTS view has the following schema: Column name Data type Value insight id STRING Base64 encoded ID that contains the insight type and insight ID insight type STRING The type of the Insight.

### Introduction to INFORMATION_SCHEMA \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- Source ID: `site-docs-reference-3`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists all INFORMATION SCHEMA views that you can query to retrieve metadata information: Resource type INFORMATION SCHEMA View Access control OBJECT PRIVILEGES science BI Engine BI CAPACITIES BI CAPACITY CHANGES Configurations EFFECTIVE PROJECT OPTIONS ORGANIZATION OPTIONS ORGANIZATION OPTIONS CHANGES PROJECT OPTIONS PROJECT OPTIONS CHANGES Datasets SCHEMATA SCHEMATA LINKS SCHEMATA OPTIONS SHARED DATASET USAGE SCHEMATA REPLICAS SCHEMATA REPLICAS BY FAILOVER RESERVATION Graphs PROPERTY GRAPHS Jobs JOBS BY PROJECT † JOBS BY USER JOBS BY FOLDER JOBS BY ORGANIZATION Jobs by timeslice JOBS TIMELINE BY PROJECT † JOBS TIMELINE BY USER JOBS TIMELINE BY FOLDER JOBS TIMELINE BY ORGANIZATION Recommendations and insights INSIGHTS science RECOMMENDATIONS science RECOMMENDATIONS BY ORGANIZATION science Reservations ASSIGNMENTS BY PROJECT † ASSIGNMENT CHANGES BY PROJECT † CAPACITY COMMITMENTS BY PROJECT † CAPACITY COMMITMENT CHANGES BY PROJECT † RESERVATIONS BY PROJECT † RESERVATION CHANGES BY PROJECT † RESERVATIONS TIMELINE BY PROJECT † Routines PARAMETERS ROUTINES ROUTINE OPTIONS Search indexes SEARCH INDEXES SEARCH INDEX COLUMNS SEARCH INDEX COLUMN OPTIONS science SEARCH INDEX OPTIONS SEARCH INDEXES BY ORGANIZATION Sessions SESSIONS BY PROJECT † SESSIONS BY USER Streaming STREAMING TIMELINE BY PROJECT † STREAMING TIMELINE BY FOLDER STREAMING TIMELINE BY ORGANIZATION Tables COLUMNS COLUMN FIELD PATHS CONSTRAINT COLUMN USAGE KEY COLUMN USAGE PARTITIONS science TABLES TABLE OPTIONS TABLE CONSTRAINTS TABLE SNAPSHOTS TABLE STORAGE BY PROJECT † TABLE STORAGE BY FOLDER TABLE STORAGE BY ORGANIZATION TABLE STORAGE USAGE TIMELINE science TABLE STORAGE USAGE TIMELINE BY FOLDER science TABLE STORAGE USAGE TIMELINE BY ORGANIZATION science Vector indexes VECTOR INDEXES VECTOR INDEX COLUMNS VECTOR INDEX OPTIONS Views VIEWS MATERIALIZED VIEWS Write API WRITE API TIMELINE BY PROJECT † WRITE API TIMELINE BY FOLDER WRITE API TIMELINE BY ORGANIZATION † For BY PROJECT views, the BY PROJECT suffix is optional.
- Introduction to INFORMATION SCHEMA The BigQuery INFORMATION SCHEMA views are read-only, system-defined views that provide metadata information about your BigQuery objects.
- For projects that use capacity-based pricing, queries against INFORMATION SCHEMA views and tables consume your purchased BigQuery slots.
- Note: Not all INFORMATION SCHEMA views are supported for BigQuery Omni system tables .

### "INFORMATION_SCHEMA.BI_CAPACITY_CHANGES view \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes)
- Source ID: `site-api-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Required permission To query the INFORMATION SCHEMA.BI CAPACITY CHANGES view, you need the bigquery.bireservations.get Identity and Access Management (IAM) permission for BI Engine reservations.
- Schema When you query the INFORMATION SCHEMA.BI CAPACITY CHANGES view, the query results contain one row for each update of BI Engine capacity, including the current state.
- Note: You must use a region qualifier to query INFORMATION SCHEMA views.
- The INFORMATION SCHEMA.BI CAPACITY CHANGES view has the following schema: Column name Data type Value change timestamp TIMESTAMP Timestamp when the current update to BI Engine capacity was made. project id STRING The project ID of the project that contains BI Engine capacity. project number INTEGER The project number of the project that contains BI Engine capacity. bi capacity name STRING The name of the object.

