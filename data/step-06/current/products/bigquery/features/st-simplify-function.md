---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.783Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ST_Simplify function"
feature_slug: "st-simplify-function"
latest_feature_date: "2020-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
keywords:
  - "st"
  - "simplify"
  - "bigquery"
  - "gis"
  - "supports"
  - "return"
  - "simplified"
  - "geography"
---

# ST_Simplify function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery GIS supports the ST_Simplify function to return a simplified geography.

## Extended Definition

BigQuery GIS supports the ST_Simplify function to return a simplified geography.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)

## Supporting Pages

### Geography functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions)
- Source ID: `site-docs-reference-required-7`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- WITH example AS ( SELECT ST GEOGFROMTEXT ( 'POLYGON((0 0, 0.1 0, 0.1 0.1, 0 0))' ) AS polygon , t AS tolerance FROM UNNEST ( [ 1000 , 10000 , 100000 ] ) AS t ) SELECT polygon AS original triangle , tolerance AS tolerance meters , ST SIMPLIFY ( polygon , tolerance ) AS simplified result FROM example / -------------------------------------+------------------+-------------------------------------+ original triangle tolerance meters simplified result +-------------------------------------+------------------+-------------------------------------+ POLYGON((0 0, 0.1 0, 0.1 0.1, 0 0)) 1000 POLYGON((0 0, 0.1 0, 0.1 0.1, 0 0)) POLYGON((0 0, 0.1 0, 0.1 0.1, 0 0)) 10000 LINESTRING(0 0, 0.1 0.1) POLYGON((0 0, 0.1 0, 0.1 0.1, 0 0)) 100000 POINT(0 0) +-------------------------------------+------------------+------------------------------------- / ST SNAPTOGRID ST SNAPTOGRID ( geography expression , grid size ) Description Returns the input GEOGRAPHY , where each vertex has been snapped to a longitude/latitude grid.
- ST SIMPLIFY ST SIMPLIFY ( geography , tolerance meters ) Description Returns a simplified version of geography , the given input GEOGRAPHY .
- GoogleSQL for BigQuery supports the following functions that can be used to analyze geographical data, determine spatial relationships between geographical features, and construct or manipulate GEOGRAPHY s.
- Return type GEOGRAPHY Examples The following example shows how ST SIMPLIFY simplifies the input line GEOGRAPHY by removing intermediate vertices.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- Examples Setting the expiration timestamp and description on a table The following example sets the expiration timestamp on a table to seven days from the execution time of the ALTER TABLE statement, and sets the description as well: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "Table that expires seven days from now" ) Setting the require partition filter attribute on a partitioned table The following example sets the timePartitioning.requirePartitionFilter attribute on a partitioned table : ALTER TABLE mydataset . mypartitionedtable SET OPTIONS ( require partition filter = true ) Queries that reference this table must use a filter on the partitioning column, or else BigQuery returns an error.
- DROP : The query deleted the DDL target. ddlTargetTable : When you submit a CREATE TABLE/VIEW statement or a DROP TABLE/VIEW statement, the target table is returned as an object with 3 fields: "projectId": string "datasetId": string "tableId": string Java Call the BigQuery.create() method to start a query job.
- BigQuery supports stored procedures for Apache Spark that are written in Python, Java, or Scala. pyspark code : The PySpark code for the stored procedure for Apache Spark if you want to pass the body of the procedure inline.

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- ST SIMPLIFY Converts a GEOGRAPHY value into a simplified GEOGRAPHY value, using tolerance.
- ST ANGLE Takes three point GEOGRAPHY values, which represent two intersecting lines, and returns the angle between these lines.
- ST EXTERIORRING Returns a linestring GEOGRAPHY value that corresponds to the outermost ring of a polygon GEOGRAPHY value.
- ST DUMP Returns an array of simple GEOGRAPHY components in a GEOGRAPHY value.

