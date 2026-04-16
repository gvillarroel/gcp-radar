---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.596Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "TRUNCATE TABLE in multi-statement transactions"
feature_slug: "truncate-table-in-multi-statement-transactions"
latest_feature_date: "2023-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language"
  - "https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference"
keywords:
  - "truncate"
  - "table"
  - "multi"
  - "statement"
  - "transactions"
  - "within"
---

# TRUNCATE TABLE in multi-statement transactions

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

TRUNCATE TABLE is supported within multi-statement transactions.

## Extended Definition

TRUNCATE TABLE is supported within multi-statement transactions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language)
- [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)

## Supporting Pages

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- The INFORMATION SCHEMA.COLUMNS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table also referred to as the datasetId . table name STRING The name of the table or view also referred to as the tableId . column name STRING The name of the column. ordinal position INT64 The 1-indexed offset of the column within the table; if it's a pseudo column such as PARTITIONTIME or PARTITIONDATE, the value is NULL . is nullable STRING YES or NO depending on whether the column's mode allows NULL values. data type STRING The column's GoogleSQL data type . is generated STRING The value is ALWAYS if the column is an automatically generated embedding column ; otherwise, the value is NEVER . generation expression STRING The value is the generation expression used to define the column if the column is an automatically generated embedding column; otherwise the value is NULL . is stored STRING The value is YES if the column is an automatically generated embedding column; otherwise, the value is NULL . is hidden STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is updatable STRING The value is always NULL . is system defined STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is partitioning column STRING YES or NO depending on whether the column is a partitioning column . clustering ordinal position INT64 The 1-indexed offset of the column within the table's clustering columns; the value is NULL if the table is not a clustered table. collation name STRING The name of the collation specification if it exists; otherwise, NULL .
- For readability, some columns are excluded from the result. +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ table name column name ordinal position is nullable data type is hidden is system defined is partitioning column clustering ordinal position policy tags +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ population by zip 2010 zipcode 1 NO STRING NO NO NO NULL 0 rows population by zip 2010 geo id 2 YES STRING NO NO NO NULL 0 rows population by zip 2010 minimum age 3 YES INT64 NO NO NO NULL 0 rows population by zip 2010 maximum age 4 YES INT64 NO NO NO NULL 0 rows population by zip 2010 gender 5 YES STRING NO NO NO NULL 0 rows population by zip 2010 population 6 YES INT64 NO NO NO NULL 0 rows +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ COLUMN FIELD PATHS view When you query the INFORMATION SCHEMA.COLUMN FIELD PATHS view, the query results contain one row for each column nested within a RECORD (or STRUCT ) column.
- The INFORMATION SCHEMA.COLUMN FIELD PATHS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table also referred to as the datasetId . table name STRING The name of the table or view also referred to as the tableId . column name STRING The name of the top-level column. field path STRING The name of the top-level column or the path to the column nested within a RECORD or STRUCT column. data type STRING The column's GoogleSQL data type . description STRING The column's description. collation name STRING The name of the collation specification if it exists; otherwise, NULL .
- UNSUPPORTED CONFIGURATION : There is an issue with the replica's prerequisites other than source materialized view authorization. replication error STRING If replication status indicates a replication issue for a materialized view replica , replication error provides further details about the issue. ddl STRING The DDL statement that can be used to recreate the table, such as CREATE TABLE or CREATE VIEW default collation name STRING The name of the default collation specification if it exists; otherwise, NULL . sync status JSON The status of the sync between the primary and secondary replicas for cross-region replication and disaster recovery datasets.

### Procedural language \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/procedural-language)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the RAISE statement isn't contained within the BEGIN section of a BEGIN...EXCEPTION block, the RAISE statement stops execution of the multi-statement query with the error message supplied.
- For more information about transactions in BigQuery, see Multi-statement transactions .
- For more information about transactions in BigQuery, see Multi-statement transactions .
- For more information about transactions in BigQuery, see Multi-statement transactions .

### "Query multiple tables using a wildcard table \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference](https://docs.cloud.google.com/bigquery/docs/wildcard-table-reference)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Wildcard tables enable you to query multiple tables using concise SQL statements.
- For example, the following query is valid because it uses backticks: #standardSQL / Valid SQL query / SELECT max FROM bigquery-public-data.noaa gsod.gsod WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX = '1929' ORDER BY max DESC The following query is NOT valid because it isn't properly quoted with backticks: #standardSQL / Syntax error: Expected end of statement but got "-" at [4:11] / SELECT max FROM missing backticks bigquery - public - data . noaa gsod . gsod WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX = '1929' ORDER BY max DESC Quotation marks don't work: #standardSQL / Syntax error: Unexpected string literal: 'bigquery-public-data.noaa gsod.gsod ' at [4:3] / SELECT max FROM quotes are not backticks 'bigquery-public-data.noaa gsod.gsod ' WHERE max != 9999.9 # code for missing data AND TABLE SUFFIX = '1929' ORDER BY max DESC Query tables using wildcard tables Wildcard tables enable you to query several tables concisely.
- Query multiple tables using a wildcard table Note: Wildcard tables have many limitations and are less performant than regular BigQuery tables that take advantage of partitioning and clustering .
- When to use wildcard tables Wildcard tables are useful when a dataset contains multiple, similarly named tables that have compatible schemas.

