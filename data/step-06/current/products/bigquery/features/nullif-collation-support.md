---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.446Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "NULLIF collation support"
feature_slug: "nullif-collation-support"
latest_feature_date: "2024-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "nullif"
  - "collation"
  - "conditional"
  - "expression"
  - "supports"
  - "including"
  - "enabled"
  - "comparisons"
---

# NULLIF collation support

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The NULLIF conditional expression supports collation, including collation-enabled comparisons with the STRUCT data type.

## Extended Definition

The NULLIF conditional expression supports collation, including collation-enabled comparisons with the STRUCT data type.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### Conditional expressions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GoogleSQL for BigQuery supports conditional expressions.
- This expression supports specifying collation .
- This expression supports specifying collation .
- This expression supports specifying collation .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- A materialized view can only be partitioned in the same way as the table in query expression (the base table ) is partitioned. clustering column list : A comma-separated list of column references that determine how to cluster the materialized view. materialized view option list : Allows you to specify additional materialized view options such as a whether refresh is enabled, the refresh interval, a label , and an expiration time. query expression : The GoogleSQL query expression used to define the materialized view.
- For temporary tables, do not include the project name or dataset name. column : The table's schema information. constraint definition : An expression that defines a table constraint. collation specification : When a new column is added to the table without an explicit collation specification, the column inherits this collation specification for STRING types.
- If the table is part of a dataset, the default collation specification for this table overrides the default collation specification for the dataset. partition expression : An expression that determines how to partition the table. clustering column list : A comma-separated list of column references that determine how to cluster the table.
- The syntax looks like this: STRING COLLATE collate specification If you have DEFAULT COLLATE collate specification assigned to the table, the collation specification for a column overrides the specification for the table. default expression : The default value assigned to the column.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- The INFORMATION SCHEMA.COLUMNS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table also referred to as the datasetId . table name STRING The name of the table or view also referred to as the tableId . column name STRING The name of the column. ordinal position INT64 The 1-indexed offset of the column within the table; if it's a pseudo column such as PARTITIONTIME or PARTITIONDATE, the value is NULL . is nullable STRING YES or NO depending on whether the column's mode allows NULL values. data type STRING The column's GoogleSQL data type . is generated STRING The value is ALWAYS if the column is an automatically generated embedding column ; otherwise, the value is NEVER . generation expression STRING The value is the generation expression used to define the column if the column is an automatically generated embedding column; otherwise the value is NULL . is stored STRING The value is YES if the column is an automatically generated embedding column; otherwise, the value is NULL . is hidden STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is updatable STRING The value is always NULL . is system defined STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is partitioning column STRING YES or NO depending on whether the column is a partitioning column . clustering ordinal position INT64 The 1-indexed offset of the column within the table's clustering columns; the value is NULL if the table is not a clustered table. collation name STRING The name of the collation specification if it exists; otherwise, NULL .
- The managed table type; one of the following: NATIVE : A standard table BIGLAKE : A BigLake table for Apache Iceberg in BigQuery is insertable into STRING YES or NO depending on whether the table supports DML INSERT statements is fine grained mutations enabled STRING YES or NO depending on whether fine-grained DML mutations are enabled on the table is typed STRING The value is always NO is change history enabled STRING YES or NO depending on whether change history is enabled creation time TIMESTAMP The table's creation time base table catalog STRING For table clones and table snapshots , the base table's project.
- The INFORMATION SCHEMA.TABLE OPTIONS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset table schema STRING The name of the dataset that contains the table or view also referred to as the datasetId table name STRING The name of the table or view also referred to as the tableId option name STRING One of the name values in the options table option type STRING One of the data type values in the options table option value STRING One of the value options in the options table Options table OPTION NAME OPTION TYPE OPTION VALUE description STRING A description of the table enable refresh BOOL Whether automatic refresh is enabled for a materialized view expiration timestamp TIMESTAMP The time when this table expires friendly name STRING The table's descriptive name kms key name STRING The name of the Cloud KMS key used to encrypt the table labels ARRAY<STRUCT<STRING, STRING>> An array of STRUCT 's that represent the labels on the table max staleness INTERVAL The configured table's maximum staleness for BigQuery change data capture (CDC) upserts partition expiration days FLOAT64 The default lifetime, in days, of all partitions in a partitioned table refresh interval minutes FLOAT64 How frequently a materialized view is refreshed require partition filter BOOL Whether queries over the table require a partition filter tags ARRAY<STRUCT<STRING, STRING>> Tags attached to a table in a namespaced <key, value> syntax.
- The INFORMATION SCHEMA.COLUMN FIELD PATHS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table also referred to as the datasetId . table name STRING The name of the table or view also referred to as the tableId . column name STRING The name of the top-level column. field path STRING The name of the top-level column or the path to the column nested within a RECORD or STRUCT column. data type STRING The column's GoogleSQL data type . description STRING The column's description. collation name STRING The name of the collation specification if it exists; otherwise, NULL .

