---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.192Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Search index column granularity"
feature_slug: "search-index-column-granularity"
latest_feature_date: "2026-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-index-column-options"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-indexes"
keywords:
  - "search"
  - "index"
  - "column"
  - "granularity"
  - "bigquery"
  - "indexes"
  - "can"
  - "store"
---

# Search index column granularity

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery search indexes can store additional column information to optimize search query performance; BigQuery search indexes can now be created with column granularity to store more column information and improve query performance.

## Extended Definition

BigQuery search indexes can store additional column information to optimize search query performance; BigQuery search indexes can now be created with column granularity to store more column information and improve query performance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/information-schema-index-column-options](https://docs.cloud.google.com/bigquery/docs/information-schema-index-column-options)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes)

## Supporting Pages

### SEARCH_INDEX_COLUMN_OPTIONS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-index-column-options](https://docs.cloud.google.com/bigquery/docs/information-schema-index-column-options)
- Source ID: `site-docs-reference-3`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SEARCH INDEX COLUMN OPTIONS WHERE index schema = 'mydataset' AND index name = 'index1' AND table name = 'table1' ; The result is similar to the following: +-------------------+-------------------+---------------+--------------+ index column name option name option type option value +-------------------+-------------------+---------------+--------------+ col2 index granularity STRING GLOBAL col3 index granularity STRING COLUMN +-------------------+-------------------+---------------+--------------+ The following equivalent example, which doesn't use ALL COLUMNS , sets the default index column granularity to COLUMN and individually sets the granularity for two columns to GLOBAL and COLUMN respectively: CREATE SEARCH INDEX index1 ON mydataset . table1 ( col1 , col2 OPTIONS ( index granularity = 'GLOBAL' ), col3 OPTIONS ( index granularity = 'COLUMN' ) ) OPTIONS ( default index column granularity = 'COLUMN' ); SELECT index column name , option name , option type , option value FROM mydataset .
- SEARCH INDEX COLUMN OPTIONS WHERE index schema = 'mydataset' AND index name = 'index1' AND table name = 'table1' ; The result is similar to the following: +-------------------+-------------------+---------------+--------------+ index column name option name option type option value +-------------------+-------------------+---------------+--------------+ col2 index granularity STRING GLOBAL col3 index granularity STRING COLUMN +-------------------+-------------------+---------------+--------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- CREATE SEARCH INDEX index1 ON mydataset . table1 ( ALL COLUMNS WITH COLUMN OPTIONS ( col2 OPTIONS ( index granularity = 'GLOBAL' ), col3 OPTIONS ( index granularity = 'COLUMN' ) ) ) OPTIONS ( default index column granularity = 'COLUMN' ); SELECT index column name , option name , option type , option value FROM mydataset .
- SEARCH INDEX COLUMN OPTIONS ; Example The following example sets the default index column granularity to COLUMN , and individually sets the granularity for col2 and col3 to GLOBAL and COLUMN respectively.

### SEARCH_INDEX_COLUMNS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns)
- Source ID: `site-docs-reference-3`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SEARCH INDEX COLUMNS The result is similar to the following: +------------+------------+-------------------+------------------+ table name index name index column name index field path +------------+------------+-------------------+------------------+ my table my index a a my table my index c c.e my table my index c c.f.g +------------+------------+-------------------+------------------+ The following query joins the INFORMATION SCHEMA.SEARCH INDEX COLUMNS view with the INFORMATION SCHEMA.SEARCH INDEXES and INFORMATION SCHEMA.COLUMNS views to include the search index status and the data type of each column: SELECT index columns view . index catalog AS project name , index columns view . index SCHEMA AS dataset name , indexes view .
- SEARCH INDEX COLUMNS index columns view ON indexes view .
- The INFORMATION SCHEMA.SEARCH INDEX COLUMNS view has the following schema: Column name Data type Value index catalog STRING The name of the project that contains the dataset. index schema STRING The name of the dataset that contains the index. table name STRING The name of the base table that the index is created on. index name STRING The name of the index. index column name STRING The name of the top-level indexed column. index field path STRING The full path of the expanded indexed field, starting with the column name.
- CREATE TABLE dataset . my table ( a STRING , b INT64 , c STRUCT < d INT64 , e ARRAY<STRING> , f STRUCT<g STRING , h INT64 >> ) AS SELECT 'hello' AS a , 10 AS b , ( 20 , [ 'x' , 'y' ] , ( 'z' , 30 )) AS c ; CREATE SEARCH INDEX my index ON dataset . my table ( ALL COLUMNS ); The following query extracts information on which fields are indexed.

### SEARCH_INDEXES view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-indexes](https://docs.cloud.google.com/bigquery/docs/information-schema-indexes)
- Source ID: `site-docs-reference-3`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SEARCH INDEXES WHERE index status = 'ACTIVE' ; The results should look like the following: +-------------+-------------+--------------------------------------------------------------------------------------+---------------------+----------------+ table name index name ddl coverage percentage analyzer +-------------+-------------+--------------------------------------------------------------------------------------+---------------------+----------------+ small table names index CREATE SEARCH INDEX names index ON my project.my dataset.small table(names) 0 NO OP ANALYZER large table logs index CREATE SEARCH INDEX logs index ON my project.my dataset.large table(ALL COLUMNS) 100 LOG ANALYZER +-------------+-------------+--------------------------------------------------------------------------------------+---------------------+----------------+ Troubleshooting To enable this view, you can set the value of enable info schema storage to TRUE on your project or organization.
- The INFORMATION SCHEMA.SEARCH INDEXES view has the following schema: Column name Data type Value index catalog STRING The name of the project that contains the dataset. index schema STRING The name of the dataset that contains the index. table name STRING The name of the base table that the index is created on. index name STRING The name of the index. index status STRING The status of the index: ACTIVE , PENDING DISABLEMENT , TEMPORARILY DISABLED , or PERMANENTLY DISABLED .
- The following table explains the region scope for this view: View Name Resource scope Region scope [ PROJECT ID .] DATASET ID .INFORMATION SCHEMA.SEARCH INDEXES Dataset level Dataset location Replace the following: Optional: PROJECT ID : the ID of your Google Cloud project.
- Required permissions To see search index metadata, you need the bigquery.tables.get or bigquery.tables.list Identity and Access Management (IAM) permission on the table with the index.

