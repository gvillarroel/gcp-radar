---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.921Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Query explain"
feature_slug: "query-explain"
latest_feature_date: "2015-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/continuous-queries"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "query"
  - "explain"
  - "shows"
  - "stage"
  - "execution"
  - "details"
  - "bigquery"
  - "queries"
---

# Query explain

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Query explain shows stage-by-stage execution details for BigQuery queries.

## Extended Definition

Query explain shows stage-by-stage execution details for BigQuery queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- This topic describes the syntax for SQL queries in GoogleSQL for BigQuery.
- SELECT item , purchases , category , LAST VALUE ( item ) OVER ( item window ) AS most popular FROM Produce WINDOW item window AS ( PARTITION BY category ORDER BY purchases ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( d ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS ( b ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ), d AS ( c ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( c ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS b Set operators query expr [ { INNER [ { FULL LEFT } [ OUTER ] ] } ] { UNION { ALL DISTINCT } INTERSECT DISTINCT EXCEPT DISTINCT } [ { BY NAME [ ON ( column list ) ] [ STRICT ] CORRESPONDING [ BY ( column list ) ] } ] query expr Set operators combine or filter results from two or more input queries into a single result set.
- The following examples illustrate the use of parentheses with set operations: -- Same set operations, no parentheses. query1 UNION ALL query2 UNION ALL query3 ; -- Different set operations, parentheses needed. query1 UNION ALL ( query2 UNION DISTINCT query3 ); -- Invalid query1 UNION ALL query2 UNION DISTINCT query3 ; -- Same set operations, no parentheses. query1 EXCEPT DISTINCT query2 EXCEPT DISTINCT query3 ; -- Equivalent query with optional parentheses, returns same results. ( query1 EXCEPT DISTINCT query2 ) EXCEPT DISTINCT query3 ; -- Different execution order with a subquery, parentheses needed. query1 EXCEPT DISTINCT ( query2 EXCEPT DISTINCT query3 ); Set operator behavior with duplicate rows Consider a given row R that appears exactly m times in the first input query and n times in the second input query, where m >= 0 and n >= 0 : For UNION ALL , row R appears exactly m + n times in the result.
- Examples SELECT FROM UNNEST ( ARRAY<INT64> [ 1 , 2 , 3 , 3 , 4 ] ) AS number INTERSECT DISTINCT SELECT FROM UNNEST ( ARRAY<INT64> [ 2 , 3 , 3 , 5 ] ) AS number ; / --------+ number +--------+ 2 3 +-------- / The following example shows multiple chained operations: SELECT FROM UNNEST ( ARRAY<INT64> [ 1 , 2 , 3 , 3 , 4 ] ) AS number INTERSECT DISTINCT SELECT FROM UNNEST ( ARRAY<INT64> [ 2 , 3 , 3 , 5 ] ) AS number INTERSECT DISTINCT SELECT FROM UNNEST ( ARRAY<INT64> [ 3 , 3 , 4 , 5 ] ) AS number ; / --------+ number +--------+ 3 +-------- / The following example shows input queries that specify multiple columns.

### Create continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)
- Source ID: `site-docs-reference-5`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- CURRENT TIMESTAMP () - INTERVAL 10 MINUTE ) WHERE CHANGE TYPE = 'DELETE' ); Export data to a Bigtable table The following example shows a continuous query that filters data from a BigQuery table that is receiving streaming taxi ride information, and exports the data into a Bigtable table in real time: EXPORT DATA OPTIONS ( format = 'CLOUD BIGTABLE' , truncate = TRUE , overwrite = TRUE , uri = 'https://bigtable.googleapis.com/projects/myproject/instances/mybigtableinstance/tables/taxi-real-time-rides' ) AS ( SELECT CAST ( CONCAT ( ride id , timestamp , latitude , longitude ) AS STRING ) AS rowkey , STRUCT ( timestamp , latitude , longitude , meter reading , ride status , passenger count ) AS features FROM APPENDS ( TABLE myproject.real time taxi streaming.taxirides , -- Configure the APPENDS TVF start timestamp to specify when you want to -- start processing data using your continuous query. -- This example starts processing at 10 minutes before the current time.
- Export data to a Pub/Sub topic The following example shows a continuous query that filters data from a BigQuery table that is receiving streaming taxi ride information, and publishes the data for cancelled rides to a Pub/Sub topic in real time with message attributes: EXPORT DATA OPTIONS ( format = 'CLOUD PUBSUB' , uri = 'https://pubsub.googleapis.com/projects/myproject/topics/taxi-real-time-rides' ) AS ( SELECT TO JSON STRING ( STRUCT ( ride id , timestamp , latitude , longitude )) AS message , TO JSON ( STRUCT ( CAST ( passenger comment AS STRING ) AS passenger comment )) FROM CHANGES ( TABLE myproject.real time taxi streaming.taxi rides , -- Configure the CHANGES TVF start timestamp to specify when you want to -- start processing data using your continuous query. -- This example starts processing at 10 minutes before the current time.
- The following example shows how to start a continuous query from a particular point in time by using the APPENDS function, when querying a BigQuery table that is receiving streaming taxi ride information: EXPORT DATA OPTIONS ( format = 'CLOUD PUBSUB' , uri = 'https://pubsub.googleapis.com/projects/myproject/topics/taxi-real-time-rides' ) AS ( SELECT TO JSON STRING ( STRUCT ( ride id , timestamp , latitude , longitude )) AS message FROM APPENDS ( TABLE myproject.real time taxi streaming.taxirides , -- Configure the APPENDS TVF start timestamp to specify when you want to -- start processing data using your continuous query. -- This example starts processing at 10 minutes before the current time.
- CURRENT TIMESTAMP () - INTERVAL 10 MINUTE ) WHERE ride status = 'enroute' ); Export data to a Spanner table The following example shows a continuous query that filters data from a BigQuery table that is receiving streaming taxi ride information, and then exports the data into a Spanner table in real time: EXPORT DATA OPTIONS ( format = 'CLOUD SPANNER' , uri = 'https://spanner.googleapis.com/projects/myproject/instances/myspannerinstance/databases/taxi-real-time-rides' , spanner options = " "" { " table ": " rides ", -- To ensure data is written to Spanner in the correct sequence -- during a continuous export, use the change timestamp column -- option.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Examples Setting the expiration timestamp and description on a table The following example sets the expiration timestamp on a table to seven days from the execution time of the ALTER TABLE statement, and sets the description as well: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "Table that expires seven days from now" ) Setting the require partition filter attribute on a partitioned table The following example sets the timePartitioning.requirePartitionFilter attribute on a partitioned table : ALTER TABLE mydataset . mypartitionedtable SET OPTIONS ( require partition filter = true ) Queries that reference this table must use a filter on the partitioning column, or else BigQuery returns an error.
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.
- Column options for a view have the same syntax and requirements as for a table, but with a different list of NAME and VALUE fields: NAME VALUE Details description STRING Example: description="a unique id" Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.tables.get The table to alter. bigquery.tables.update The table to alter.

