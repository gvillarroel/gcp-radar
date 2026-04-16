---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.689Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "DEFAULT COLLATE clause"
feature_slug: "default-collate-clause"
latest_feature_date: "2022-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "default"
  - "collate"
  - "clause"
  - "applies"
  - "collation"
  - "specification"
  - "columns"
  - "schemas"
---

# DEFAULT COLLATE clause

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The DEFAULT COLLATE clause applies a default collation specification to supported columns in schemas and tables.

## Extended Definition

The DEFAULT COLLATE clause applies a default collation specification to supported columns in schemas and tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- ALTER TABLE mydataset . mytable SET DEFAULT COLLATE '' Although you have updated the collation specification, your existing column, word , continues to use the previous collation specification. +--------------------------------+ mydataset.mytable number INT64 word STRING COLLATE 'und:ci' +--------------------------------+ However, if you create a new column for your table, the new column includes the new collation specification.
- Example The following example creates a Cloud resource connection named my cloud resource connection : CREATE CONNECTION IF NOT EXISTS us.my cloud resource connection OPTIONS ( connection type = "CLOUD RESOURCE" , friendly name = "My Resource Connection" , description = "Connection to access Cloud resources" ); ALTER SCHEMA SET DEFAULT COLLATE statement Sets collation specifications on a dataset.
- The syntax looks like this: STRING COLLATE collate specification If you have DEFAULT COLLATE collate specification assigned to the table, the collation specification for a column overrides the specification for the table. default expression : The default value assigned to the column.
- SET DEFAULT COLLATE collate specification : When a new column is created in the schema, and if the column does not have an explicit collation specification , the column inherits this collation specification for STRING types.

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- WITH Words AS ( SELECT word FROM UNNEST ( [ 'foo' , 'bar' , 'baz' , 'giraffe' , 'llama' ] ) AS word ) SELECT CODE POINTS TO STRING ( [ code point ] ) AS letter , COUNT ( ) AS letter count FROM Words , UNNEST ( TO CODE POINTS ( word )) AS code point GROUP BY 1 ORDER BY 2 DESC ; / --------+--------------+ letter letter count +--------+--------------+ a 5 f 3 r 2 b 2 l 2 o 2 g 1 z 1 e 1 m 1 i 1 +--------+-------------- / COLLATE COLLATE ( value , collate specification ) Takes a STRING and a collation specification .
- COLLATE Combines a STRING value and a collation specification into a collation specification-supported STRING value.
- If collate specification is empty, returns a value with collation removed from the STRING .
- This is because the default collate specification assigns more weight to a .

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- The INFORMATION SCHEMA.COLUMNS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table also referred to as the datasetId . table name STRING The name of the table or view also referred to as the tableId . column name STRING The name of the column. ordinal position INT64 The 1-indexed offset of the column within the table; if it's a pseudo column such as PARTITIONTIME or PARTITIONDATE, the value is NULL . is nullable STRING YES or NO depending on whether the column's mode allows NULL values. data type STRING The column's GoogleSQL data type . is generated STRING The value is ALWAYS if the column is an automatically generated embedding column ; otherwise, the value is NEVER . generation expression STRING The value is the generation expression used to define the column if the column is an automatically generated embedding column; otherwise the value is NULL . is stored STRING The value is YES if the column is an automatically generated embedding column; otherwise, the value is NULL . is hidden STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is updatable STRING The value is always NULL . is system defined STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is partitioning column STRING YES or NO depending on whether the column is a partitioning column . clustering ordinal position INT64 The 1-indexed offset of the column within the table's clustering columns; the value is NULL if the table is not a clustered table. collation name STRING The name of the collation specification if it exists; otherwise, NULL .
- UNSUPPORTED CONFIGURATION : There is an issue with the replica's prerequisites other than source materialized view authorization. replication error STRING If replication status indicates a replication issue for a materialized view replica , replication error provides further details about the issue. ddl STRING The DDL statement that can be used to recreate the table, such as CREATE TABLE or CREATE VIEW default collation name STRING The name of the default collation specification if it exists; otherwise, NULL . sync status JSON The status of the sync between the primary and secondary replicas for cross-region replication and disaster recovery datasets.
- If a STRING or ARRAY<STRING> is passed in, the collation specification is returned if it exists; otherwise NULL is returned. column default STRING The default value of the column if it exists; otherwise, the value is NULL . rounding mode STRING The mode of rounding that's used for values written to the field if its type is a parameterized NUMERIC or BIGNUMERIC ; otherwise, the value is NULL . data policies.name STRING The list of data policies that are attached to the column to control access and masking.
- The INFORMATION SCHEMA.COLUMN FIELD PATHS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table also referred to as the datasetId . table name STRING The name of the table or view also referred to as the tableId . column name STRING The name of the top-level column. field path STRING The name of the top-level column or the path to the column nested within a RECORD or STRUCT column. data type STRING The column's GoogleSQL data type . description STRING The column's description. collation name STRING The name of the collation specification if it exists; otherwise, NULL .

