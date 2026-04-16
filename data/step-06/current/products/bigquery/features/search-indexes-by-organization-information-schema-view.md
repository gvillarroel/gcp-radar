---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.327Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "SEARCH_INDEXES_BY_ORGANIZATION information schema view"
feature_slug: "search-indexes-by-organization-information-schema-view"
latest_feature_date: "2025-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-intro"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities"
keywords:
  - "search"
  - "indexes"
  - "organization"
  - "information"
  - "schema"
  - "view"
  - "reports"
  - "index"
---

# SEARCH_INDEXES_BY_ORGANIZATION information schema view

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The INFORMATION_SCHEMA.SEARCH_INDEXES_BY_ORGANIZATION view reports search index management consumption by project and table.

## Extended Definition

The INFORMATION_SCHEMA.SEARCH_INDEXES_BY_ORGANIZATION view reports search index management consumption by project and table.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities)

## Supporting Pages

### SEARCH_INDEXES_BY_ORGANIZATION view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes-by-organization)
- Source ID: `site-docs-reference-3`
- Final score: 368
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Schema The INFORMATION SCHEMA.SEARCH INDEXES BY ORGANIZATION view has the following schema: Column name Data type Value project id STRING The name of the project that contains the dataset. project number STRING The project number that contains the dataset. index catalog STRING The name of the project that contains the dataset. index schema STRING The name of the dataset that contains the index. table name STRING The name of the base table that the index is created on. index name STRING The name of the search index. index status STRING The status of the index can be one of the following: ACTIVE : the index is usable or being created.
- Required permissions To query the INFORMATION SCHEMA.SEARCH INDEXES BY ORGANIZATION view, you need the following Identity and Access Management (IAM) permissions for your organization: bigquery.tables.get bigquery.tables.list Each of the following predefined IAM roles includes the preceding permissions: roles/bigquery.admin roles/bigquery.dataViewer roles/bigquery.dataEditor roles/bigquery.metadataViewer This schema view is only available to users with defined Google Cloud organizations .
- The following table explains the region scope for this view: View name Resource scope Region scope [ PROJECT ID .]region- REGION .INFORMATION SCHEMA.SEARCH INDEXES BY ORGANIZATION Organization that contains the specified project REGION Replace the following: Optional: PROJECT ID : the ID of your Google Cloud project.
- You can use the INFORMATION SCHEMA.SEARCH INDEXES BY ORGANIZATION view to understand your current consumption towards that limit, broken down by projects and tables.

### Introduction to INFORMATION_SCHEMA \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-intro](https://docs.cloud.google.com/bigquery/docs/information-schema-intro)
- Source ID: `site-docs-reference-3`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table lists all INFORMATION SCHEMA views that you can query to retrieve metadata information: Resource type INFORMATION SCHEMA View Access control OBJECT PRIVILEGES science BI Engine BI CAPACITIES BI CAPACITY CHANGES Configurations EFFECTIVE PROJECT OPTIONS ORGANIZATION OPTIONS ORGANIZATION OPTIONS CHANGES PROJECT OPTIONS PROJECT OPTIONS CHANGES Datasets SCHEMATA SCHEMATA LINKS SCHEMATA OPTIONS SHARED DATASET USAGE SCHEMATA REPLICAS SCHEMATA REPLICAS BY FAILOVER RESERVATION Graphs PROPERTY GRAPHS Jobs JOBS BY PROJECT † JOBS BY USER JOBS BY FOLDER JOBS BY ORGANIZATION Jobs by timeslice JOBS TIMELINE BY PROJECT † JOBS TIMELINE BY USER JOBS TIMELINE BY FOLDER JOBS TIMELINE BY ORGANIZATION Recommendations and insights INSIGHTS science RECOMMENDATIONS science RECOMMENDATIONS BY ORGANIZATION science Reservations ASSIGNMENTS BY PROJECT † ASSIGNMENT CHANGES BY PROJECT † CAPACITY COMMITMENTS BY PROJECT † CAPACITY COMMITMENT CHANGES BY PROJECT † RESERVATIONS BY PROJECT † RESERVATION CHANGES BY PROJECT † RESERVATIONS TIMELINE BY PROJECT † Routines PARAMETERS ROUTINES ROUTINE OPTIONS Search indexes SEARCH INDEXES SEARCH INDEX COLUMNS SEARCH INDEX COLUMN OPTIONS science SEARCH INDEX OPTIONS SEARCH INDEXES BY ORGANIZATION Sessions SESSIONS BY PROJECT † SESSIONS BY USER Streaming STREAMING TIMELINE BY PROJECT † STREAMING TIMELINE BY FOLDER STREAMING TIMELINE BY ORGANIZATION Tables COLUMNS COLUMN FIELD PATHS CONSTRAINT COLUMN USAGE KEY COLUMN USAGE PARTITIONS science TABLES TABLE OPTIONS TABLE CONSTRAINTS TABLE SNAPSHOTS TABLE STORAGE BY PROJECT † TABLE STORAGE BY FOLDER TABLE STORAGE BY ORGANIZATION TABLE STORAGE USAGE TIMELINE science TABLE STORAGE USAGE TIMELINE BY FOLDER science TABLE STORAGE USAGE TIMELINE BY ORGANIZATION science Vector indexes VECTOR INDEXES VECTOR INDEX COLUMNS VECTOR INDEX OPTIONS Views VIEWS MATERIALIZED VIEWS Write API WRITE API TIMELINE BY PROJECT † WRITE API TIMELINE BY FOLDER WRITE API TIMELINE BY ORGANIZATION † For BY PROJECT views, the BY PROJECT suffix is optional.
- SCHEMATA ; The following INFORMATION SCHEMA views don't support region qualifiers: INFORMATION SCHEMA.PARTITIONS INFORMATION SCHEMA.SEARCH INDEXES INFORMATION SCHEMA.SEARCH INDEX COLUMNS INFORMATION SCHEMA.SEARCH INDEX OPTIONS If neither a region qualifier nor a dataset qualifier is specified, you will receive an error.
- Querying an INFORMATION SCHEMA view fails with the following error if the location of the query execution doesn't match the location of the dataset or regional qualifier used: Table myproject: region-us.INFORMATION SCHEMA.[VIEW] not found in location US Dataset qualifier When present, a dataset qualifier restricts results to the specified dataset.
- TABLES ; The following INFORMATION SCHEMA views support dataset qualifiers: COLUMNS COLUMN FIELD PATHS MATERIALIZED VIEWS PARAMETERS PARTITIONS ROUTINES ROUTINE OPTIONS TABLES TABLE OPTIONS VIEWS Region qualifier Region qualifiers are represented using a region- REGION syntax.

### "INFORMATION_SCHEMA.BI_CAPACITIES view \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacities)
- Source ID: `site-api-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- The INFORMATION SCHEMA.BI CAPACITIES view has the following schema: Column name Data type Value project id STRING The project ID of the project that contains BI Engine capacity. project number INTEGER The project number of the project that contains BI Engine capacity. bi capacity name STRING The name of the object.
- View name Resource scope Region scope [ PROJECT ID .]region- REGION .INFORMATION SCHEMA.BI CAPACITIES Project level REGION Replace the following: Optional: PROJECT ID : the ID of your Google Cloud project.
- Required permission To query the INFORMATION SCHEMA.BI CAPACITIES view, you need the bigquery.bireservations.get Identity and Access Management (IAM) permission for BI Engine reservations.
- INFORMATION SCHEMA.BI CAPACITIES view The INFORMATION SCHEMA.BI CAPACITIES view contains metadata about the current state of BI Engine capacity.

