---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.725Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "DML statistics"
feature_slug: "dml-statistics"
latest_feature_date: "2021-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-intro"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-insights"
keywords:
  - "dml"
  - "statistics"
  - "bigquery"
  - "query"
  - "jobs"
  - "return"
  - "inserted"
  - "deleted"
---

# DML statistics

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery DML query jobs return inserted, deleted, and updated row statistics, including exposure in INFORMATION_SCHEMA.JOBS_BY_* views.

## Extended Definition

BigQuery DML query jobs return inserted, deleted, and updated row statistics, including exposure in INFORMATION_SCHEMA.JOBS_BY_* views.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-insights](https://docs.cloud.google.com/bigquery/docs/information-schema-insights)

## Supporting Pages

### Introduction to INFORMATION_SCHEMA \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- Source ID: `site-docs-reference-3`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- For example, querying INFORMATION SCHEMA.JOBS BY PROJECT and INFORMATION SCHEMA.JOBS return the same results.
- The following table lists all INFORMATION SCHEMA views that you can query to retrieve metadata information: Resource type INFORMATION SCHEMA View Access control OBJECT PRIVILEGES science BI Engine BI CAPACITIES BI CAPACITY CHANGES Configurations EFFECTIVE PROJECT OPTIONS ORGANIZATION OPTIONS ORGANIZATION OPTIONS CHANGES PROJECT OPTIONS PROJECT OPTIONS CHANGES Datasets SCHEMATA SCHEMATA LINKS SCHEMATA OPTIONS SHARED DATASET USAGE SCHEMATA REPLICAS SCHEMATA REPLICAS BY FAILOVER RESERVATION Graphs PROPERTY GRAPHS Jobs JOBS BY PROJECT † JOBS BY USER JOBS BY FOLDER JOBS BY ORGANIZATION Jobs by timeslice JOBS TIMELINE BY PROJECT † JOBS TIMELINE BY USER JOBS TIMELINE BY FOLDER JOBS TIMELINE BY ORGANIZATION Recommendations and insights INSIGHTS science RECOMMENDATIONS science RECOMMENDATIONS BY ORGANIZATION science Reservations ASSIGNMENTS BY PROJECT † ASSIGNMENT CHANGES BY PROJECT † CAPACITY COMMITMENTS BY PROJECT † CAPACITY COMMITMENT CHANGES BY PROJECT † RESERVATIONS BY PROJECT † RESERVATION CHANGES BY PROJECT † RESERVATIONS TIMELINE BY PROJECT † Routines PARAMETERS ROUTINES ROUTINE OPTIONS Search indexes SEARCH INDEXES SEARCH INDEX COLUMNS SEARCH INDEX COLUMN OPTIONS science SEARCH INDEX OPTIONS SEARCH INDEXES BY ORGANIZATION Sessions SESSIONS BY PROJECT † SESSIONS BY USER Streaming STREAMING TIMELINE BY PROJECT † STREAMING TIMELINE BY FOLDER STREAMING TIMELINE BY ORGANIZATION Tables COLUMNS COLUMN FIELD PATHS CONSTRAINT COLUMN USAGE KEY COLUMN USAGE PARTITIONS science TABLES TABLE OPTIONS TABLE CONSTRAINTS TABLE SNAPSHOTS TABLE STORAGE BY PROJECT † TABLE STORAGE BY FOLDER TABLE STORAGE BY ORGANIZATION TABLE STORAGE USAGE TIMELINE science TABLE STORAGE USAGE TIMELINE BY FOLDER science TABLE STORAGE USAGE TIMELINE BY ORGANIZATION science Vector indexes VECTOR INDEXES VECTOR INDEX COLUMNS VECTOR INDEX OPTIONS Views VIEWS MATERIALIZED VIEWS Write API WRITE API TIMELINE BY PROJECT † WRITE API TIMELINE BY FOLDER WRITE API TIMELINE BY ORGANIZATION † For BY PROJECT views, the BY PROJECT suffix is optional.
- For example, the following query returns metadata for all datasets in the US multi-region for the project in which the query is executing, but doesn't include datasets in the us-west1 region: -- Returns metadata for all datasets in the US multi-region.
- Introduction to INFORMATION SCHEMA The BigQuery INFORMATION SCHEMA views are read-only, system-defined views that provide metadata information about your BigQuery objects.

### "INFORMATION_SCHEMA.BI_CAPACITIES view \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities)
- Source ID: `site-api-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- BI CAPACITIES The result looks similar to the following: +---------------+----------------+------------------+--------------+-----------------------------------------------------------------------------------------------+ project id project number bi capacity name size preferred tables +---------------+----------------+------------------+--------------+-----------------------------------------------------------------------------------------------+ my-project-id 123456789000 default 268435456000 "my-company-project-id.dataset1.table1","bigquery-public-data.chicago taxi trips.taxi trips"] +---------------+----------------+------------------+--------------+-----------------------------------------------------------------------------------------------+ The following example returns size of BI Engine capacity in gigabytes for the query project: SELECT project id , size / 1024.0 / 1024.0 / 1024.0 AS size gb FROM region-us .
- Required permission To query the INFORMATION SCHEMA.BI CAPACITIES view, you need the bigquery.bireservations.get Identity and Access Management (IAM) permission for BI Engine reservations.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- For more information about BigQuery permissions, see Access control with IAM .

### INFORMATION_SCHEMA.INSIGHTS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-insights](https://docs.cloud.google.com/bigquery/docs/information-schema-insights)
- Source ID: `site-docs-reference-3`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- The result is similar to the following: +---------------------------------------------------+---------------------+--------------------+--------------------------+-------------------------+---------------------+ recommender target resource gb saved monthly slot hours saved monthly observation period days last updated time +---------------------------------------------------+---------------------+--------------------+--------------------------+-------------------------+---------------------+ google.bigquery.table.PartitionClusterRecommender ["table resource1"] 3934.07264107652 10.499466666666667 30.0 2024-07-01 16:41:25 google.bigquery.table.PartitionClusterRecommender ["table resource2"] 4393.7416711859405 56.61476777777777 30.0 2024-07-01 16:41:25 google.bigquery.materializedview.Recommender ["project resource"] 140805.38289248943 9613.139166666666 2.0 2024-07-01 13:00:31 +---------------------------------------------------+---------------------+--------------------+--------------------------+-------------------------+---------------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example, google.bigquery.materializedview.Insight . subtype STRING The subtype of the insight. project id STRING The ID of the project. project number STRING The number of the project. description STRING The description about the recommendation. last updated time TIMESTAMP This field represents the time when the insight was last refreshed. category STRING The optimization category of the impact. target resources STRING Fully qualified resource names this insight is targeting. state STRING The state of the insight.
- The INFORMATION SCHEMA.INSIGHTS view supports the following recommendations: Partition and cluster recommendations Materialized view recommendations Role recommendations for BigQuery datasets Required permission To view insights with the INFORMATION SCHEMA.INSIGHTS view, you must have the required permissions for the corresponding recommender.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.

