---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.755Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ASCII function"
feature_slug: "ascii-function"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/graph-iso-standards"
keywords:
  - "ascii"
  - "bigquery"
  - "standard"
  - "sql"
  - "supports"
  - "string"
---

# ASCII function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Standard SQL supports the ASCII string function.

## Extended Definition

BigQuery Standard SQL supports the ASCII string function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/graph-iso-standards](https://docs.cloud.google.com/bigquery/docs/graph-iso-standards)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- GoogleSQL for BigQuery supports string functions.
- To work with an array of Unicode code points, see CODE POINTS TO STRING Return type STRING Examples SELECT CHR ( 65 ) AS A , CHR ( 255 ) AS B , CHR ( 513 ) AS C , CHR ( 1024 ) AS D ; / -------+-------+-------+-------+ A B C D +-------+-------+-------+-------+ A ÿ ȁ Ѐ +-------+-------+-------+------- / SELECT CHR ( 97 ) AS A , CHR ( 0xF9B5 ) AS B , CHR ( 0 ) AS C , CHR ( NULL ) AS D ; / -------+-------+-------+-------+ A B C D +-------+-------+-------+-------+ a 例 NULL +-------+-------+-------+------- / CODE POINTS TO BYTES CODE POINTS TO BYTES ( ascii code points ) Description Takes an array of extended ASCII code points as ARRAY<INT64> and returns BYTES .
- Return type INT64 Examples SELECT ASCII ( 'abcd' ) as A , ASCII ( 'a' ) as B , ASCII ( '' ) as C , ASCII ( NULL ) as D ; / -------+-------+-------+-------+ A B C D +-------+-------+-------+-------+ 97 97 0 NULL +-------+-------+-------+------- / BYTE LENGTH BYTE LENGTH ( value ) Description Gets the number of BYTES in a STRING or BYTES value, regardless of whether the value is a STRING or BYTES type.
- SELECT REPLACE ( REPLACE ( TO BASE64 ( b ' \ 377 \ 340' ), '+' , '-' ), '/' , ' ' ) as websafe base64 ; / ----------------+ websafe base64 +----------------+ -A= +---------------- / TO CODE POINTS TO CODE POINTS ( value ) Description Takes a STRING or BYTES value and returns an array of INT64 values that represent code points or extended ASCII character values.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- You can add Spark properties using the following format: [("key1","value1"),("key2", "value2")] For example: bq query --nouse legacy sql --dry run 'CREATE PROCEDURE my bq project.my dataset.spark proc() WITH CONNECTION my-project-id.us.my-connection OPTIONS( engine="SPARK", main file uri="gs://my-bucket/my-pyspark-main.py", properties=[ ("spark.executor.instances", "3"), ("spark.yarn.am.memory", "3g") ]) LANGUAGE PYTHON' Error in query string: Invalid value: \ Invalid properties: \ Attempted to set unsupported properties: \ [ spark:spark.yarn.am.memory ] at [ 1 :1 ] Note: You can use the BigQuery dry run feature to validate your stored procedure without creating it. main file uri STRING The Cloud Storage URI of the main Python, Scala, or Java JAR file of the Spark application.
- String projectId = "MY PROJECT ID" ; String datasetId = "MY DATASET ID" ; String tableId = "MY VIEW ID" ; String ddl = "CREATE VIEW " + "" + projectId + "." + datasetId + "." + tableId + "" + " OPTIONS(" + " expiration timestamp=TIMESTAMP ADD(" + " CURRENT TIMESTAMP(), INTERVAL 48 HOUR)," + " friendly name=\"new view\"," + " description=\"a view that expires in 2 days\"," + " labels=[(\"org unit\", \"development\")]" + " )" + " AS SELECT name, state, year, number" + " FROM bigquery-public-data.usa names.usa 1910 current" + " WHERE state LIKE 'W%'" ; ddlCreateView ( ddl ); } public static void ddlCreateView ( String ddl ) { try { // Initialize client that will be used to send requests.
- Job job = bigquery . create ( JobInfo . of ( config )); job = job . waitFor (); if ( job . isDone ()) { System . out . println ( "View created successfully" ); } else { System . out . println ( "View was not created" ); } } catch ( BigQueryException InterruptedException e ) { System . out . println ( "View was not created. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .

### BigQuery Graph and ISO standards \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/graph-iso-standards](https://docs.cloud.google.com/bigquery/docs/graph-iso-standards)
- Source ID: `site-api-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery Graph is based on two ISO standards: ISO/IEC 9075-16:2023 - Information technology — Database languages SQL Property Graph Queries (SQL/PGQ) , Edition 1, 2023 ISO/IEC 39075:2024 - Information technology — Database languages — GQL , Edition 1, 2024 The following tables describe the high-level relationship between SQL/PGQ, GQL, and how BigQuery Graph supports these standards.
- BigQuery Graph and ISO standards The document describes how BigQuery Graph supports the ISO international standard query language for graph databases.
- BigQuery Graph supports additional features in the ISO standards.
- Standard SQL/PGQ GQL BigQuery Graph Query Graph pattern matching capabilities Shares the core Graph Pattern Matching Language (GPML) functionalities with GQL.

