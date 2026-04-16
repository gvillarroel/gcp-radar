---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.324Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "JSON column flattening in data preparation"
feature_slug: "json-column-flattening-in-data-preparation"
latest_feature_date: "2025-07-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns"
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-columns"
keywords:
  - "json"
  - "column"
  - "flattening"
  - "preparation"
  - "bigquery"
  - "can"
  - "flatten"
  - "columns"
---

# JSON column flattening in data preparation

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery data preparation can flatten JSON columns in a single operation.

## Extended Definition

BigQuery data preparation can flatten JSON columns in a single operation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns)
- [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-columns)

## Supporting Pages

### SEARCH_INDEX_COLUMNS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-index-columns)
- Source ID: `site-docs-reference-3`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SEARCH INDEX COLUMNS The result is similar to the following: +------------+------------+-------------------+------------------+ table name index name index column name index field path +------------+------------+-------------------+------------------+ my table my index a a my table my index c c.e my table my index c c.f.g +------------+------------+-------------------+------------------+ The following query joins the INFORMATION SCHEMA.SEARCH INDEX COLUMNS view with the INFORMATION SCHEMA.SEARCH INDEXES and INFORMATION SCHEMA.COLUMNS views to include the search index status and the data type of each column: SELECT index columns view . index catalog AS project name , index columns view . index SCHEMA AS dataset name , indexes view .
- The INFORMATION SCHEMA.SEARCH INDEX COLUMNS view has the following schema: Column name Data type Value index catalog STRING The name of the project that contains the dataset. index schema STRING The name of the dataset that contains the index. table name STRING The name of the base table that the index is created on. index name STRING The name of the index. index column name STRING The name of the top-level indexed column. index field path STRING The full path of the expanded indexed field, starting with the column name.
- CREATE TABLE dataset . my table ( a STRING , b INT64 , c STRUCT < d INT64 , e ARRAY<STRING> , f STRUCT<g STRING , h INT64 >> ) AS SELECT 'hello' AS a , 10 AS b , ( 20 , [ 'x' , 'y' ] , ( 'z' , 30 )) AS c ; CREATE SEARCH INDEX my index ON dataset . my table ( ALL COLUMNS ); The following query extracts information on which fields are indexed.
- The following table explains the region scope for this view: View Name Resource scope Region scope [ PROJECT ID .] DATASET ID .INFORMATION SCHEMA.SEARCH INDEX COLUMNS Dataset level Dataset location Replace the following: Optional: PROJECT ID : the ID of your Google Cloud project.

### Mask column data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- Source ID: `site-docs-reference-5`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . const datapolicy = require ( ' @google-cloud/bigquery-datapolicies ' ); const { DataPolicyServiceClient } = datapolicy . v2 ; const protos = datapolicy . protos . google . cloud . bigquery . datapolicies . v2 ; const { status } = require ( '@grpc/grpc-js' ); const dataPolicyServiceClient = new DataPolicyServiceClient (); / Creates a data policy to apply a data masking rule to a specific BigQuery table column.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to assign a data policy directly on a column: bigquery.tables.update bigquery.tables.setColumnDataPolicy bigquery.dataPolicies.attach You might also be able to get these permissions with custom roles or other predefined roles .
- Make sure the project ID and" " location are correct and you have the necessary permissions." ) except Exception as e : print ( f "An unexpected error occurred: { e } " ) Set policy tags on columns Set a data policy on a column by attaching the policy tag associated with the data policy to the column.
- It may have already been deleted." ) except Exception as e : print ( f "Error deleting data policy ' { name } ': { e } " ) Mask data by applying data policies to a column Note: To provide feedback or request support for this feature, send an email to bigquery-security-feedback@google.com .

### COLUMNS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-columns](https://docs.cloud.google.com/bigquery/docs/information-schema-columns)
- Source ID: `site-api-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required permissions To query the INFORMATION SCHEMA.COLUMNS view, you need the following Identity and Access Management (IAM) permissions: bigquery.tables.get bigquery.tables.list Each of the following predefined IAM roles includes the preceding permissions: roles/bigquery.admin roles/bigquery.dataViewer roles/bigquery.dataEditor roles/bigquery.metadataViewer For more information about BigQuery permissions, see Access control with IAM .
- The INFORMATION SCHEMA.COLUMNS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table also referred to as the datasetId . table name STRING The name of the table or view also referred to as the tableId . column name STRING The name of the column. ordinal position INT64 The 1-indexed offset of the column within the table; if it's a pseudo column such as PARTITIONTIME or PARTITIONDATE, the value is NULL . is nullable STRING YES or NO depending on whether the column's mode allows NULL values. data type STRING The column's GoogleSQL data type . is generated STRING The value is ALWAYS if the column is an automatically generated embedding column ; otherwise, the value is NEVER . generation expression STRING The value is the generation expression used to define the column if the column is an automatically generated embedding column; otherwise the value is NULL . is stored STRING The value is YES if the column is an automatically generated embedding column; otherwise, the value is NULL . is hidden STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is updatable STRING The value is always NULL . is system defined STRING YES or NO depending on whether the column is a pseudo column such as PARTITIONTIME or PARTITIONDATE. is partitioning column STRING YES or NO depending on whether the column is a partitioning column . clustering ordinal position INT64 The 1-indexed offset of the column within the table's clustering columns; the value is NULL if the table is not a clustered table. collation name STRING The name of the collation specification if it exists; otherwise, NULL .
- For readability, some columns are excluded from the result. +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ table name column name ordinal position is nullable data type is hidden is system defined is partitioning column clustering ordinal position policy tags +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ population by zip 2010 zipcode 1 NO STRING NO NO NO NULL 0 rows population by zip 2010 geo id 2 YES STRING NO NO NO NULL 0 rows population by zip 2010 minimum age 3 YES INT64 NO NO NO NULL 0 rows population by zip 2010 maximum age 4 YES INT64 NO NO NO NULL 0 rows population by zip 2010 gender 5 YES STRING NO NO NO NULL 0 rows population by zip 2010 population 6 YES INT64 NO NO NO NULL 0 rows +------------------------+-------------+------------------+-------------+-----------+-----------+-------------------+------------------------+-----------------------------+-------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following table explains the region and resource scopes for this view: View name Resource scope Region scope [ PROJECT ID .]region- REGION .INFORMATION SCHEMA.COLUMNS Project level REGION [ PROJECT ID .] DATASET ID .INFORMATION SCHEMA.COLUMNS Dataset level Dataset location Replace the following: Optional: PROJECT ID : the ID of your Google Cloud project.

