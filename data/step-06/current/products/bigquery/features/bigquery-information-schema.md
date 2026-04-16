---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.833Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery INFORMATION_SCHEMA"
feature_slug: "bigquery-information-schema"
latest_feature_date: "2019-02-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-intro"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-insights"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities"
keywords:
  - "bigquery"
  - "information"
  - "schema"
  - "views"
  - "expose"
  - "resource"
  - "metadata"
  - "through"
---

# BigQuery INFORMATION_SCHEMA

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery INFORMATION_SCHEMA views expose resource metadata through SQL queries.

## Extended Definition

BigQuery INFORMATION_SCHEMA views expose resource metadata through SQL queries.

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
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table lists all INFORMATION SCHEMA views that you can query to retrieve metadata information: Resource type INFORMATION SCHEMA View Access control OBJECT PRIVILEGES science BI Engine BI CAPACITIES BI CAPACITY CHANGES Configurations EFFECTIVE PROJECT OPTIONS ORGANIZATION OPTIONS ORGANIZATION OPTIONS CHANGES PROJECT OPTIONS PROJECT OPTIONS CHANGES Datasets SCHEMATA SCHEMATA LINKS SCHEMATA OPTIONS SHARED DATASET USAGE SCHEMATA REPLICAS SCHEMATA REPLICAS BY FAILOVER RESERVATION Graphs PROPERTY GRAPHS Jobs JOBS BY PROJECT † JOBS BY USER JOBS BY FOLDER JOBS BY ORGANIZATION Jobs by timeslice JOBS TIMELINE BY PROJECT † JOBS TIMELINE BY USER JOBS TIMELINE BY FOLDER JOBS TIMELINE BY ORGANIZATION Recommendations and insights INSIGHTS science RECOMMENDATIONS science RECOMMENDATIONS BY ORGANIZATION science Reservations ASSIGNMENTS BY PROJECT † ASSIGNMENT CHANGES BY PROJECT † CAPACITY COMMITMENTS BY PROJECT † CAPACITY COMMITMENT CHANGES BY PROJECT † RESERVATIONS BY PROJECT † RESERVATION CHANGES BY PROJECT † RESERVATIONS TIMELINE BY PROJECT † Routines PARAMETERS ROUTINES ROUTINE OPTIONS Search indexes SEARCH INDEXES SEARCH INDEX COLUMNS SEARCH INDEX COLUMN OPTIONS science SEARCH INDEX OPTIONS SEARCH INDEXES BY ORGANIZATION Sessions SESSIONS BY PROJECT † SESSIONS BY USER Streaming STREAMING TIMELINE BY PROJECT † STREAMING TIMELINE BY FOLDER STREAMING TIMELINE BY ORGANIZATION Tables COLUMNS COLUMN FIELD PATHS CONSTRAINT COLUMN USAGE KEY COLUMN USAGE PARTITIONS science TABLES TABLE OPTIONS TABLE CONSTRAINTS TABLE SNAPSHOTS TABLE STORAGE BY PROJECT † TABLE STORAGE BY FOLDER TABLE STORAGE BY ORGANIZATION TABLE STORAGE USAGE TIMELINE science TABLE STORAGE USAGE TIMELINE BY FOLDER science TABLE STORAGE USAGE TIMELINE BY ORGANIZATION science Vector indexes VECTOR INDEXES VECTOR INDEX COLUMNS VECTOR INDEX OPTIONS Views VIEWS MATERIALIZED VIEWS Write API WRITE API TIMELINE BY PROJECT † WRITE API TIMELINE BY FOLDER WRITE API TIMELINE BY ORGANIZATION † For BY PROJECT views, the BY PROJECT suffix is optional.
- Introduction to INFORMATION SCHEMA The BigQuery INFORMATION SCHEMA views are read-only, system-defined views that provide metadata information about your BigQuery objects.
- INFORMATION SCHEMA queries with region qualifiers might include metadata from resources in that region from deleted datasets that are within your time travel window .
- For projects that use capacity-based pricing, queries against INFORMATION SCHEMA views and tables consume your purchased BigQuery slots.

### INFORMATION_SCHEMA.INSIGHTS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-insights](https://docs.cloud.google.com/bigquery/docs/information-schema-insights)
- Source ID: `site-docs-reference-3`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RECOMMENDATIONS ) SELECT recommender , target resources , LAX INT64 ( recs . additional details . overview . bytesSavedMonthly ) / POW ( 1024 , 3 ) as est gb saved monthly , LAX INT64 ( recs . additional details . overview . slotMsSavedMonthly ) / ( 1000 3600 ) as slot hours saved monthly , insights . additional details . observation period seconds / 86400 as observation period days , last updated time FROM insights JOIN recs ON recommendation id in UNNEST ( associated recommendation ids ) WHERE state = 'ACTIVE' AND category = 'COST' LIMIT 3 ; Note: INFORMATION SCHEMA view names are case sensitive.
- The INFORMATION SCHEMA.INSIGHTS view supports the following recommendations: Partition and cluster recommendations Materialized view recommendations Role recommendations for BigQuery datasets Required permission To view insights with the INFORMATION SCHEMA.INSIGHTS view, you must have the required permissions for the corresponding recommender.
- View name Resource scope Region scope [ PROJECT ID .]region- REGION .INFORMATION SCHEMA.INSIGHTS[ BY PROJECT] Project level REGION Replace the following: Optional: PROJECT ID : the ID of your Google Cloud project.
- The INFORMATION SCHEMA.INSIGHTS view contains insights about all BigQuery recommendations in the current project.

### "INFORMATION_SCHEMA.BI_CAPACITIES view \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities)
- Source ID: `site-api-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View name Resource scope Region scope [ PROJECT ID .]region- REGION .INFORMATION SCHEMA.BI CAPACITIES Project level REGION Replace the following: Optional: PROJECT ID : the ID of your Google Cloud project.
- Required permission To query the INFORMATION SCHEMA.BI CAPACITIES view, you need the bigquery.bireservations.get Identity and Access Management (IAM) permission for BI Engine reservations.
- INFORMATION SCHEMA.BI CAPACITIES view The INFORMATION SCHEMA.BI CAPACITIES view contains metadata about the current state of BI Engine capacity.
- Note: You must use a region qualifier to query INFORMATION SCHEMA views.

