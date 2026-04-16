---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.917Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BYTES data type"
feature_slug: "bytes-data-type"
latest_feature_date: "2016-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "bytes"
  - "type"
  - "lets"
  - "bigquery"
  - "store"
  - "query"
  - "raw"
  - "binary"
---

# BYTES data type

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BYTES data type lets BigQuery store and query raw binary data values.

## Extended Definition

The BYTES data type lets BigQuery store and query raw binary data values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/data-types](https://docs.cloud.google.com/bigquery/docs/data-types)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Legacy SQL data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/data-types](https://docs.cloud.google.com/bigquery/docs/data-types)
- Source ID: `site-api-reference`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BYTES data read from a BigQuery table are base64-encoded, unless you export to Avro format, in which case the Avro bytes data type applies.
- Imported BYTES data must be base64-encoded, except for Avro BYTES data, which BigQuery can read and convert.
- Legacy SQL data types This document details the data types supported by BigQuery's legacy SQL query syntax.
- BigQuery stores TIMESTAMP data internally as a UNIX timestamp with microsecond precision.

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To learn more about how BigQuery rounds values stored as a DECIMAL type, see rounding mode .
- Parameterized bytes type Parameterized Type Description BYTES(L) Sequence of bytes with a maximum of L bytes allowed in the binary string, where L is a positive INT64 value.
- Home Documentation Data analytics BigQuery Reference Send feedback Data types Stay organized with collections Save and categorize content based on your preferences.
- Boolean values are sorted in this order, from least to greatest: NULL FALSE TRUE Bytes type Name Description BYTES Variable-length binary data.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Cannot appear with main file uri in procedure option list . argument type : Any valid BigQuery type . procedure argument mode : Specifies whether an argument is an input, an output, or both. procedure option list The procedure option list lets you specify procedure options.
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.
- Syntax To create a GoogleSQL stored procedure , use the following syntax: CREATE [ OR REPLACE ] PROCEDURE [ IF NOT EXISTS ] [[ project name . ] dataset name . ] procedure name ( procedure argument [ , ... ] ) [ OPTIONS ( procedure option list ) ] BEGIN multi statement query END ; procedure argument : [ procedure argument mode ] argument name argument type procedure argument mode : IN OUT INOUT To create a stored procedure for Apache Spark , use the following syntax: CREATE [ OR REPLACE ] PROCEDURE [ IF NOT EXISTS ] [[ project name . ] dataset name . ] procedure name ( procedure argument [ , ... ] ) [ EXTERNAL SECURITY external security ] WITH CONNECTION connection project id . connection region . connection id [ OPTIONS ( procedure option list ) ] LANGUAGE language [ AS pyspark code ] procedure argument : [ procedure argument mode ] argument name argument type procedure argument mode : IN OUT INOUT external security : INVOKER Arguments OR REPLACE : Replaces any procedure with the same name if it exists.

