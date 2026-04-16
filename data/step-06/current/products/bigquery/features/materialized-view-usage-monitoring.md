---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.605Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Materialized view usage monitoring"
feature_slug: "materialized-view-usage-monitoring"
latest_feature_date: "2023-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-intro"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-insights"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities"
keywords:
  - "materialized"
  - "view"
  - "usage"
  - "monitoring"
  - "lets"
  - "users"
  - "track"
  - "refresh"
---

# Materialized view usage monitoring

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Materialized view usage monitoring lets users track materialized view usage and refresh jobs through INFORMATION_SCHEMA and enhanced job statistics.

## Extended Definition

Materialized view usage monitoring lets users track materialized view usage and refresh jobs through INFORMATION_SCHEMA and enhanced job statistics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-insights](https://docs.cloud.google.com/bigquery/docs/information-schema-insights)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities)

## Supporting Pages

### INFORMATION_SCHEMA.INSIGHTS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-insights](https://docs.cloud.google.com/bigquery/docs/information-schema-insights)
- Source ID: `site-docs-reference-3`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- For example, google.bigquery.materializedview.Insight . subtype STRING The subtype of the insight. project id STRING The ID of the project. project number STRING The number of the project. description STRING The description about the recommendation. last updated time TIMESTAMP This field represents the time when the insight was last refreshed. category STRING The optimization category of the impact. target resources STRING Fully qualified resource names this insight is targeting. state STRING The state of the insight.
- The result is similar to the following: +---------------------------------------------------+---------------------+--------------------+--------------------------+-------------------------+---------------------+ recommender target resource gb saved monthly slot hours saved monthly observation period days last updated time +---------------------------------------------------+---------------------+--------------------+--------------------------+-------------------------+---------------------+ google.bigquery.table.PartitionClusterRecommender ["table resource1"] 3934.07264107652 10.499466666666667 30.0 2024-07-01 16:41:25 google.bigquery.table.PartitionClusterRecommender ["table resource2"] 4393.7416711859405 56.61476777777777 30.0 2024-07-01 16:41:25 google.bigquery.materializedview.Recommender ["project resource"] 140805.38289248943 9613.139166666666 2.0 2024-07-01 13:00:31 +---------------------------------------------------+---------------------+--------------------+--------------------------+-------------------------+---------------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To see the required permissions for each recommender, see the following: Partition & cluster recommender permissions Materialized view recommendations permissions Role recommendations for datasets permissions Schema The INFORMATION SCHEMA.INSIGHTS view has the following schema: Column name Data type Value insight id STRING Base64 encoded ID that contains the insight type and insight ID insight type STRING The type of the Insight.
- The INFORMATION SCHEMA.INSIGHTS view supports the following recommendations: Partition and cluster recommendations Materialized view recommendations Role recommendations for BigQuery datasets Required permission To view insights with the INFORMATION SCHEMA.INSIGHTS view, you must have the required permissions for the corresponding recommender.

### Introduction to INFORMATION_SCHEMA \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- Source ID: `site-docs-reference-3`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists all INFORMATION SCHEMA views that you can query to retrieve metadata information: Resource type INFORMATION SCHEMA View Access control OBJECT PRIVILEGES science BI Engine BI CAPACITIES BI CAPACITY CHANGES Configurations EFFECTIVE PROJECT OPTIONS ORGANIZATION OPTIONS ORGANIZATION OPTIONS CHANGES PROJECT OPTIONS PROJECT OPTIONS CHANGES Datasets SCHEMATA SCHEMATA LINKS SCHEMATA OPTIONS SHARED DATASET USAGE SCHEMATA REPLICAS SCHEMATA REPLICAS BY FAILOVER RESERVATION Graphs PROPERTY GRAPHS Jobs JOBS BY PROJECT † JOBS BY USER JOBS BY FOLDER JOBS BY ORGANIZATION Jobs by timeslice JOBS TIMELINE BY PROJECT † JOBS TIMELINE BY USER JOBS TIMELINE BY FOLDER JOBS TIMELINE BY ORGANIZATION Recommendations and insights INSIGHTS science RECOMMENDATIONS science RECOMMENDATIONS BY ORGANIZATION science Reservations ASSIGNMENTS BY PROJECT † ASSIGNMENT CHANGES BY PROJECT † CAPACITY COMMITMENTS BY PROJECT † CAPACITY COMMITMENT CHANGES BY PROJECT † RESERVATIONS BY PROJECT † RESERVATION CHANGES BY PROJECT † RESERVATIONS TIMELINE BY PROJECT † Routines PARAMETERS ROUTINES ROUTINE OPTIONS Search indexes SEARCH INDEXES SEARCH INDEX COLUMNS SEARCH INDEX COLUMN OPTIONS science SEARCH INDEX OPTIONS SEARCH INDEXES BY ORGANIZATION Sessions SESSIONS BY PROJECT † SESSIONS BY USER Streaming STREAMING TIMELINE BY PROJECT † STREAMING TIMELINE BY FOLDER STREAMING TIMELINE BY ORGANIZATION Tables COLUMNS COLUMN FIELD PATHS CONSTRAINT COLUMN USAGE KEY COLUMN USAGE PARTITIONS science TABLES TABLE OPTIONS TABLE CONSTRAINTS TABLE SNAPSHOTS TABLE STORAGE BY PROJECT † TABLE STORAGE BY FOLDER TABLE STORAGE BY ORGANIZATION TABLE STORAGE USAGE TIMELINE science TABLE STORAGE USAGE TIMELINE BY FOLDER science TABLE STORAGE USAGE TIMELINE BY ORGANIZATION science Vector indexes VECTOR INDEXES VECTOR INDEX COLUMNS VECTOR INDEX OPTIONS Views VIEWS MATERIALIZED VIEWS Write API WRITE API TIMELINE BY PROJECT † WRITE API TIMELINE BY FOLDER WRITE API TIMELINE BY ORGANIZATION † For BY PROJECT views, the BY PROJECT suffix is optional.
- TABLES ; The following INFORMATION SCHEMA views support dataset qualifiers: COLUMNS COLUMN FIELD PATHS MATERIALIZED VIEWS PARAMETERS PARTITIONS ROUTINES ROUTINE OPTIONS TABLES TABLE OPTIONS VIEWS Region qualifier Region qualifiers are represented using a region- REGION syntax.
- Querying an INFORMATION SCHEMA view fails with the following error if the location of the query execution doesn't match the location of the dataset or regional qualifier used: Table myproject: region-us.INFORMATION SCHEMA.[VIEW] not found in location US Dataset qualifier When present, a dataset qualifier restricts results to the specified dataset.
- SCHEMATA ; The following INFORMATION SCHEMA views don't support region qualifiers: INFORMATION SCHEMA.PARTITIONS INFORMATION SCHEMA.SEARCH INDEXES INFORMATION SCHEMA.SEARCH INDEX COLUMNS INFORMATION SCHEMA.SEARCH INDEX OPTIONS If neither a region qualifier nor a dataset qualifier is specified, you will receive an error.

### "INFORMATION_SCHEMA.BI_CAPACITIES view \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities)
- Source ID: `site-api-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- The INFORMATION SCHEMA.BI CAPACITIES view has the following schema: Column name Data type Value project id STRING The project ID of the project that contains BI Engine capacity. project number INTEGER The project number of the project that contains BI Engine capacity. bi capacity name STRING The name of the object.
- View name Resource scope Region scope [ PROJECT ID .]region- REGION .INFORMATION SCHEMA.BI CAPACITIES Project level REGION Replace the following: Optional: PROJECT ID : the ID of your Google Cloud project.
- Required permission To query the INFORMATION SCHEMA.BI CAPACITIES view, you need the bigquery.bireservations.get Identity and Access Management (IAM) permission for BI Engine reservations.
- INFORMATION SCHEMA.BI CAPACITIES view The INFORMATION SCHEMA.BI CAPACITIES view contains metadata about the current state of BI Engine capacity.

