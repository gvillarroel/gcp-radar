---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.746Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "INFORMATION_SCHEMA.TABLES DDL column"
feature_slug: "information-schema-tables-ddl-column"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-intro"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities"
keywords:
  - "information"
  - "schema"
  - "tables"
  - "ddl"
  - "column"
  - "exposes"
  - "table"
  - "recreation"
---

# INFORMATION_SCHEMA.TABLES DDL column

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The DDL column in INFORMATION_SCHEMA.TABLES exposes table recreation SQL in BigQuery metadata.

## Extended Definition

The DDL column in INFORMATION_SCHEMA.TABLES exposes table recreation SQL in BigQuery metadata.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities)

## Supporting Pages

### Introduction to INFORMATION_SCHEMA \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- Source ID: `site-docs-reference-3`
- Final score: 237
- Re-rank relevance: N/A

Evidence snippets:
- The following table lists all INFORMATION SCHEMA views that you can query to retrieve metadata information: Resource type INFORMATION SCHEMA View Access control OBJECT PRIVILEGES science BI Engine BI CAPACITIES BI CAPACITY CHANGES Configurations EFFECTIVE PROJECT OPTIONS ORGANIZATION OPTIONS ORGANIZATION OPTIONS CHANGES PROJECT OPTIONS PROJECT OPTIONS CHANGES Datasets SCHEMATA SCHEMATA LINKS SCHEMATA OPTIONS SHARED DATASET USAGE SCHEMATA REPLICAS SCHEMATA REPLICAS BY FAILOVER RESERVATION Graphs PROPERTY GRAPHS Jobs JOBS BY PROJECT † JOBS BY USER JOBS BY FOLDER JOBS BY ORGANIZATION Jobs by timeslice JOBS TIMELINE BY PROJECT † JOBS TIMELINE BY USER JOBS TIMELINE BY FOLDER JOBS TIMELINE BY ORGANIZATION Recommendations and insights INSIGHTS science RECOMMENDATIONS science RECOMMENDATIONS BY ORGANIZATION science Reservations ASSIGNMENTS BY PROJECT † ASSIGNMENT CHANGES BY PROJECT † CAPACITY COMMITMENTS BY PROJECT † CAPACITY COMMITMENT CHANGES BY PROJECT † RESERVATIONS BY PROJECT † RESERVATION CHANGES BY PROJECT † RESERVATIONS TIMELINE BY PROJECT † Routines PARAMETERS ROUTINES ROUTINE OPTIONS Search indexes SEARCH INDEXES SEARCH INDEX COLUMNS SEARCH INDEX COLUMN OPTIONS science SEARCH INDEX OPTIONS SEARCH INDEXES BY ORGANIZATION Sessions SESSIONS BY PROJECT † SESSIONS BY USER Streaming STREAMING TIMELINE BY PROJECT † STREAMING TIMELINE BY FOLDER STREAMING TIMELINE BY ORGANIZATION Tables COLUMNS COLUMN FIELD PATHS CONSTRAINT COLUMN USAGE KEY COLUMN USAGE PARTITIONS science TABLES TABLE OPTIONS TABLE CONSTRAINTS TABLE SNAPSHOTS TABLE STORAGE BY PROJECT † TABLE STORAGE BY FOLDER TABLE STORAGE BY ORGANIZATION TABLE STORAGE USAGE TIMELINE science TABLE STORAGE USAGE TIMELINE BY FOLDER science TABLE STORAGE USAGE TIMELINE BY ORGANIZATION science Vector indexes VECTOR INDEXES VECTOR INDEX COLUMNS VECTOR INDEX OPTIONS Views VIEWS MATERIALIZED VIEWS Write API WRITE API TIMELINE BY PROJECT † WRITE API TIMELINE BY FOLDER WRITE API TIMELINE BY ORGANIZATION † For BY PROJECT views, the BY PROJECT suffix is optional.
- TABLES ; The following INFORMATION SCHEMA views support dataset qualifiers: COLUMNS COLUMN FIELD PATHS MATERIALIZED VIEWS PARAMETERS PARTITIONS ROUTINES ROUTINE OPTIONS TABLES TABLE OPTIONS VIEWS Region qualifier Region qualifiers are represented using a region- REGION syntax.
- To combine INFORMATION SCHEMA views from multiple regions, read and combine the query results locally, or copy the resulting tables to a common region.
- For projects that use capacity-based pricing, queries against INFORMATION SCHEMA views and tables consume your purchased BigQuery slots.

### "INFORMATION_SCHEMA.BI_CAPACITY_CHANGES view \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes)
- Source ID: `site-api-reference`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The INFORMATION SCHEMA.BI CAPACITY CHANGES view has the following schema: Column name Data type Value change timestamp TIMESTAMP Timestamp when the current update to BI Engine capacity was made. project id STRING The project ID of the project that contains BI Engine capacity. project number INTEGER The project number of the project that contains BI Engine capacity. bi capacity name STRING The name of the object.
- For stability, we recommend that you explicitly list columns in your information schema queries instead of using a wildcard ( SELECT ).
- BI CAPACITY CHANGES WHERE user email = "email@mycompanymail.com" The result looks similar to the following: +---------------------+---------------+----------------+------------------+--------------+---------------------+----------------------------------------------------------------------------------------+ change timestamp project id project number bi capacity name size user email preferred tables +---------------------+---------------+----------------+------------------+--------------+---------------------+----------------------------------------------------------------------------------------+ 2022-06-14 02:22:18 my-project-id 123456789000 default 268435456000 email@mycompany.com ["my-project-id.dataset1.table1","bigquery-public-data.chicago taxi trips.taxi trips"] 2022-06-08 20:25:51 my-project-id 123456789000 default 268435456000 email@mycompany.com ["bigquery-public-data.chicago taxi trips.taxi trips"] 2022-04-01 21:06:49 my-project-id 123456789000 default 161061273600 email@mycompany.com [""] +---------------------+---------------+----------------+------------------+--------------+---------------------+----------------------------------------------------------------------------------------+ The following example gets BI Engine capacity changes for the last seven days: SELECT change timestamp , size , user email , preferred tables FROM my-project-id.region-us .
- BI CAPACITY CHANGES WHERE change timestamp > TIMESTAMP SUB ( CURRENT DATE (), INTERVAL 7 DAY ) The result looks similar to the following: +---------------------+--------------+----------------------+-------------------+ change timestamp size user email preferred tables +---------------------+--------------+----------------------+-------------------+ 2023-07-08 18:25:09 268435456000 sundar@mycompany.com [""] 2023-07-09 17:47:26 161061273600 pichai@mycompany.com ["pr.dataset.t1"] +---------------------+--------------+----------------------+-------------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "INFORMATION_SCHEMA.BI_CAPACITIES view \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities)
- Source ID: `site-api-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The INFORMATION SCHEMA.BI CAPACITIES view has the following schema: Column name Data type Value project id STRING The project ID of the project that contains BI Engine capacity. project number INTEGER The project number of the project that contains BI Engine capacity. bi capacity name STRING The name of the object.
- If set to null , BI Engine capacity is used for all queries in the current project For stability, we recommend that you explicitly list columns in your information schema queries instead of using a wildcard ( SELECT ).
- BI CAPACITIES The result looks similar to the following: +---------------+----------------+------------------+--------------+-----------------------------------------------------------------------------------------------+ project id project number bi capacity name size preferred tables +---------------+----------------+------------------+--------------+-----------------------------------------------------------------------------------------------+ my-project-id 123456789000 default 268435456000 "my-company-project-id.dataset1.table1","bigquery-public-data.chicago taxi trips.taxi trips"] +---------------+----------------+------------------+--------------+-----------------------------------------------------------------------------------------------+ The following example returns size of BI Engine capacity in gigabytes for the query project: SELECT project id , size / 1024.0 / 1024.0 / 1024.0 AS size gb FROM region-us .
- There can only be one capacity per project, hence the name is always set to default . size INTEGER BI Engine RAM in bytes preferred tables REPEATED STRING Set of preferred tables this BI Engine capacity must be used for.

