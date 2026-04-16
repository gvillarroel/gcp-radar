---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.608Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Dynamic data masking for repeated RECORD columns"
feature_slug: "dynamic-data-masking-for-repeated-record-columns"
latest_feature_date: "2023-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "dynamic"
  - "masking"
  - "repeated"
  - "record"
  - "columns"
  - "supports"
  - "configured"
  - "mode"
---

# Dynamic data masking for repeated RECORD columns

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Dynamic data masking supports RECORD columns configured in REPEATED mode.

## Extended Definition

Dynamic data masking supports RECORD columns configured in REPEATED mode.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- If the table name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The table schema contains 3 columns: x: A parameterized string with a maximum length of 10 y: A STRUCT containing a (an array of parameterized bytes with a maximum length of 5), b (a parameterized NUMERIC with a maximum precision of 15, maximum scale of 2, and rounding mode set to 'ROUND HALF EVEN'), and c (a float) z: A parameterized BIGNUMERIC with a maximum precision of 35 and maximum scale of 0 Creating a partitioned table The following example creates a partitioned table named newtable in mydataset using a DATE column: CREATE TABLE mydataset . newtable ( transaction id INT64 , transaction date DATE ) PARTITION BY transaction date OPTIONS ( partition expiration days = 3 , description = "a table partitioned by transaction date" ) If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- If the table name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The table schema contains 2 columns: corpus: Name of a Shakespeare corpus top words: An ARRAY of STRUCT s containing 2 fields: word (a STRING ) and word count (an INT64 with the word count) Note: When you examine the table schema in the Google Cloud console, a STRUCT is displayed as a RECORD column, and an ARRAY is displayed as a REPEATED column.
- If the table name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The table schema contains 3 columns: x: A REQUIRED integer y: A REQUIRED STRUCT containing a (an array of strings), b (a REQUIRED boolean), and c (a NULLABLE float) z: A NULLABLE string Note: When you examine the table schema in the Google Cloud console, a STRUCT is displayed as a RECORD, and an ARRAY is displayed as REPEATED.
- The table schema contains two columns: x: An integer, with description "An optional INTEGER field" y: A STRUCT containing two columns: a: An array of strings, with description "A repeated STRING field" b: A boolean Note: When you examine the table schema in the Google Cloud console, a STRUCT is displayed as a RECORD column, and an ARRAY is displayed as a REPEATED column.

### Introduction to data masking \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)
- Source ID: `site-docs-reference-5`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Materialized views and repeated record masking queries If you have existing materialized views, repeated record masking queries on the associated base table fail.
- The following table shows the default masking value for each data type: Data type Default masking value STRING "" BYTES b'' INTEGER 0 FLOAT 0.0 NUMERIC 0 BOOLEAN FALSE TIMESTAMP 1970-01-01 00:00:00 UTC DATE 1970-01-01 TIME 00:00:00 DATETIME 1970-01-01T00:00:00 GEOGRAPHY POINT(0 0) BIGNUMERIC 0 ARRAY [] STRUCT NOT APPLICABLE Policy tags can't be applied to columns that use the STRUCT data type, but they can be associated with the leaf fields of such columns.
- Custom masking routines Custom masking routines are subject to the following limitations: Custom data masking supports all BigQuery data types except STRUCT , because data masking can only apply to leaf fields of the STRUCT data type.
- Hash (SHA-256) Predefined Yes Moderate: While SHA-256 offers strong collision resistance in a cryptographic sense, it is susceptible to various attacks in this masking context.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- The commits table contains the following nested and nested and repeated columns: author : nested RECORD column committer : nested RECORD column trailer : nested and repeated RECORD column difference : nested and repeated RECORD column To view metadata about the author and difference columns, run the following query.
- For readability, some columns are excluded from the result. +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ table name column name field path data type description policy tags +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ commits author author STRUCT<name STRING, email STRING, time sec INT64, tz offset INT64, date TIMESTAMP> NULL 0 rows commits author author.name STRING NULL 0 rows commits author author.email STRING NULL 0 rows commits author author.time sec INT64 NULL 0 rows commits author author.tz offset INT64 NULL 0 rows commits author author.date TIMESTAMP NULL 0 rows commits difference difference ARRAY<STRUCT<old mode INT64, new mode INT64, old path STRING, new path STRING, old sha1 STRING, new sha1 STRING, old repo STRING, new repo STRING>> NULL 0 rows commits difference difference.old mode INT64 NULL 0 rows commits difference difference.new mode INT64 NULL 0 rows commits difference difference.old path STRING NULL 0 rows commits difference difference.new path STRING NULL 0 rows commits difference difference.old sha1 STRING NULL 0 rows commits difference difference.new sha1 STRING NULL 0 rows commits difference difference.old repo STRING NULL 0 rows commits difference difference.new repo STRING NULL 0 rows +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ TABLE STORAGE view The TABLE STORAGE and TABLE STORAGE BY ORGANIZATION views have the following schema: Column name Data type Value project id STRING The project ID of the project that contains the dataset. project number INT64 The project number of the project that contains the dataset. table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table or materialized view, also referred to as the datasetId . table name STRING The name of the table or materialized view, also referred to as the tableId . creation time TIMESTAMP The creation time of the table. total rows INT64 The total number of rows in the table or materialized view. total partitions INT64 The number of partitions present in the table or materialized view.
- The INFORMATION SCHEMA.COLUMNS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table also referred to as the datasetId . table name STRING The name of the table or view also referred to as the tableId . column name STRING The name of the column. ordinal position INT64 The 1-indexed offset of the column within the table; if it's a pseudo column such as PARTITIONTIME or PARTITIONDATE, the value is NULL . is nullable STRING YES or NO depending on whether the column's mode allows NULL values. data type STRING The column's GoogleSQL data type . is generated STRING The value is ALWAYS if the column is an automatically generated embedding column ; otherwise, the value is NEVER . generation expression STRING The value is the generation expression used to define the column if the column is an automatically generated embedding column; otherwise the value is NULL . is stored STRING The value is YES if the column is an automatically generated embedding column; otherwise, the value is NULL . is hidden STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is updatable STRING The value is always NULL . is system defined STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is partitioning column STRING YES or NO depending on whether the column is a partitioning column . clustering ordinal position INT64 The 1-indexed offset of the column within the table's clustering columns; the value is NULL if the table is not a clustered table. collation name STRING The name of the collation specification if it exists; otherwise, NULL .
- For readability, some columns are excluded from the result. +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ table name column name ordinal position is nullable data type is hidden is system defined is partitioning column clustering ordinal position policy tags +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ population by zip 2010 zipcode 1 NO STRING NO NO NO NULL 0 rows population by zip 2010 geo id 2 YES STRING NO NO NO NULL 0 rows population by zip 2010 minimum age 3 YES INT64 NO NO NO NULL 0 rows population by zip 2010 maximum age 4 YES INT64 NO NO NO NULL 0 rows population by zip 2010 gender 5 YES STRING NO NO NO NULL 0 rows population by zip 2010 population 6 YES INT64 NO NO NO NULL 0 rows +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ COLUMN FIELD PATHS view When you query the INFORMATION SCHEMA.COLUMN FIELD PATHS view, the query results contain one row for each column nested within a RECORD (or STRUCT ) column.

