---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.618Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Unicode column names"
feature_slug: "unicode-column-names"
latest_feature_date: "2023-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-columns"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "unicode"
  - "column"
  - "names"
  - "allow"
  - "bigquery"
  - "columns"
  - "use"
  - "international"
---

# Unicode column names

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Unicode column names allow BigQuery columns to use international character sets, alphanumeric characters, and special characters.

## Extended Definition

Unicode column names allow BigQuery columns to use international character sets, alphanumeric characters, and special characters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/information-schema-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-columns)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### COLUMNS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-columns)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The INFORMATION SCHEMA.COLUMNS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table also referred to as the datasetId . table name STRING The name of the table or view also referred to as the tableId . column name STRING The name of the column. ordinal position INT64 The 1-indexed offset of the column within the table; if it's a pseudo column such as PARTITIONTIME or PARTITIONDATE, the value is NULL . is nullable STRING YES or NO depending on whether the column's mode allows NULL values. data type STRING The column's GoogleSQL data type . is generated STRING The value is ALWAYS if the column is an automatically generated embedding column ; otherwise, the value is NEVER . generation expression STRING The value is the generation expression used to define the column if the column is an automatically generated embedding column; otherwise the value is NULL . is stored STRING The value is YES if the column is an automatically generated embedding column; otherwise, the value is NULL . is hidden STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is updatable STRING The value is always NULL . is system defined STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is partitioning column STRING YES or NO depending on whether the column is a partitioning column . clustering ordinal position INT64 The 1-indexed offset of the column within the table's clustering columns; the value is NULL if the table is not a clustered table. collation name STRING The name of the collation specification if it exists; otherwise, NULL .
- Required permissions To query the INFORMATION SCHEMA.COLUMNS view, you need the following Identity and Access Management (IAM) permissions: bigquery.tables.get bigquery.tables.list Each of the following predefined IAM roles includes the preceding permissions: roles/bigquery.admin roles/bigquery.dataViewer roles/bigquery.dataEditor roles/bigquery.metadataViewer For more information about BigQuery permissions, see Access control with IAM .
- For readability, some columns are excluded from the result. +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ table name column name ordinal position is nullable data type is hidden is system defined is partitioning column clustering ordinal position policy tags +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ population by zip 2010 zipcode 1 NO STRING NO NO NO NULL 0 rows population by zip 2010 geo id 2 YES STRING NO NO NO NULL 0 rows population by zip 2010 minimum age 3 YES INT64 NO NO NO NULL 0 rows population by zip 2010 maximum age 4 YES INT64 NO NO NO NULL 0 rows population by zip 2010 gender 5 YES STRING NO NO NO NULL 0 rows population by zip 2010 population 6 YES INT64 NO NO NO NULL 0 rows +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following table explains the region and resource scopes for this view: View name Resource scope Region scope [ PROJECT ID .]region- REGION .INFORMATION SCHEMA.COLUMNS Project level REGION [ PROJECT ID .] DATASET ID .INFORMATION SCHEMA.COLUMNS Dataset level Dataset location Replace the following: Optional: PROJECT ID : the ID of your Google Cloud project.

### Lexical structure and syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Identifiers Identifiers are names that are associated with columns, tables, fields, path expressions, and more.
- Examples: my-project.mydataset.mytable mydataset.mytable my-table mytable 287mytable Column names A column name represents the name of a column in a table.
- Note that the range D800-DFFF isn't allowed, as these are surrogate unicode values. \Uhhhhhhhh Unicode escape, with uppercase 'U' and exactly 8 hex digits.
- Examples: columnA column-a 287column Field names A field name represents the name of a field inside a complex data type such as a struct or JSON object.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- The INFORMATION SCHEMA.COLUMNS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table also referred to as the datasetId . table name STRING The name of the table or view also referred to as the tableId . column name STRING The name of the column. ordinal position INT64 The 1-indexed offset of the column within the table; if it's a pseudo column such as PARTITIONTIME or PARTITIONDATE, the value is NULL . is nullable STRING YES or NO depending on whether the column's mode allows NULL values. data type STRING The column's GoogleSQL data type . is generated STRING The value is ALWAYS if the column is an automatically generated embedding column ; otherwise, the value is NEVER . generation expression STRING The value is the generation expression used to define the column if the column is an automatically generated embedding column; otherwise the value is NULL . is stored STRING The value is YES if the column is an automatically generated embedding column; otherwise, the value is NULL . is hidden STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is updatable STRING The value is always NULL . is system defined STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is partitioning column STRING YES or NO depending on whether the column is a partitioning column . clustering ordinal position INT64 The 1-indexed offset of the column within the table's clustering columns; the value is NULL if the table is not a clustered table. collation name STRING The name of the collation specification if it exists; otherwise, NULL .
- The INFORMATION SCHEMA.TABLE OPTIONS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset table schema STRING The name of the dataset that contains the table or view also referred to as the datasetId table name STRING The name of the table or view also referred to as the tableId option name STRING One of the name values in the options table option type STRING One of the data type values in the options table option value STRING One of the value options in the options table Options table OPTION NAME OPTION TYPE OPTION VALUE description STRING A description of the table enable refresh BOOL Whether automatic refresh is enabled for a materialized view expiration timestamp TIMESTAMP The time when this table expires friendly name STRING The table's descriptive name kms key name STRING The name of the Cloud KMS key used to encrypt the table labels ARRAY<STRUCT<STRING, STRING>> An array of STRUCT 's that represent the labels on the table max staleness INTERVAL The configured table's maximum staleness for BigQuery change data capture (CDC) upserts partition expiration days FLOAT64 The default lifetime, in days, of all partitions in a partitioned table refresh interval minutes FLOAT64 How frequently a materialized view is refreshed require partition filter BOOL Whether queries over the table require a partition filter tags ARRAY<STRUCT<STRING, STRING>> Tags attached to a table in a namespaced <key, value> syntax.
- For external tables, the following options are possible: Options allow jagged rows BOOL If true , allow rows that are missing trailing optional columns.
- This option reads the header row as column names and reorders columns to match the field names in the schema.

