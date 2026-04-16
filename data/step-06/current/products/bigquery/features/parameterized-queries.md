---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.904Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Parameterized queries"
feature_slug: "parameterized-queries"
latest_feature_date: "2016-12-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/continuous-queries"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions"
keywords:
  - "parameterized"
  - "queries"
  - "bigquery"
  - "standard"
  - "sql"
  - "supports"
  - "safely"
  - "pass"
---

# Parameterized queries

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Standard SQL supports parameterized queries to safely pass user input into queries.

## Extended Definition

BigQuery Standard SQL supports parameterized queries to safely pass user input into queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery supports stored procedures for Apache Spark that are written in Python, Java, or Scala. pyspark code : The PySpark code for the stored procedure for Apache Spark if you want to pass the body of the procedure inline.
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.

### Create continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)
- Source ID: `site-docs-reference-5`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- CURRENT TIMESTAMP () - INTERVAL 10 MINUTE ) WHERE CHANGE TYPE = 'DELETE' ); Export data to a Bigtable table The following example shows a continuous query that filters data from a BigQuery table that is receiving streaming taxi ride information, and exports the data into a Bigtable table in real time: EXPORT DATA OPTIONS ( format = 'CLOUD BIGTABLE' , truncate = TRUE , overwrite = TRUE , uri = 'https://bigtable.googleapis.com/projects/myproject/instances/mybigtableinstance/tables/taxi-real-time-rides' ) AS ( SELECT CAST ( CONCAT ( ride id , timestamp , latitude , longitude ) AS STRING ) AS rowkey , STRUCT ( timestamp , latitude , longitude , meter reading , ride status , passenger count ) AS features FROM APPENDS ( TABLE myproject.real time taxi streaming.taxirides , -- Configure the APPENDS TVF start timestamp to specify when you want to -- start processing data using your continuous query. -- This example starts processing at 10 minutes before the current time.
- Export data to a Pub/Sub topic The following example shows a continuous query that filters data from a BigQuery table that is receiving streaming taxi ride information, and publishes the data for cancelled rides to a Pub/Sub topic in real time with message attributes: EXPORT DATA OPTIONS ( format = 'CLOUD PUBSUB' , uri = 'https://pubsub.googleapis.com/projects/myproject/topics/taxi-real-time-rides' ) AS ( SELECT TO JSON STRING ( STRUCT ( ride id , timestamp , latitude , longitude )) AS message , TO JSON ( STRUCT ( CAST ( passenger comment AS STRING ) AS passenger comment )) FROM CHANGES ( TABLE myproject.real time taxi streaming.taxi rides , -- Configure the CHANGES TVF start timestamp to specify when you want to -- start processing data using your continuous query. -- This example starts processing at 10 minutes before the current time.
- Run a standard query to backfill data up to a particular point in time: INSERT INTO myproject.real time taxi streaming.transformed taxirides SELECT timestamp , meter reading , ride status , passenger count , ST Distance ( ST GeogPoint ( pickup longitude , pickup latitude ), ST GeogPoint ( dropoff longitude , dropoff latitude )) AS euclidean trip distance , SAFE DIVIDE ( meter reading , passenger count ) AS cost per passenger FROM myproject.real time taxi streaming.taxirides -- Include all data inserted into the table up to this handoff point. -- This handoff timestamp must be within the time travel window.
- Continuous queries let you analyze incoming data in BigQuery in real time, and then either export the results to Bigtable, Pub/Sub, or Spanner, or write the results to a BigQuery table.

### JSON functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/json_functions)
- Source ID: `site-docs-reference-required-8`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- SELECT PARSE JSON ( '{"coordinates": [10, 20], "id": 1}' ) AS json data ; / --------------------------------+ json data +--------------------------------+ {"coordinates":[10,20],"id":1} +-------------------------------- / The following queries fail because: The number that was passed in can't be stored without loss of precision. wide number mode=>'exact' is used implicitly in the first query and explicitly in the second query.
- GoogleSQL for BigQuery supports the following functions, which can retrieve and transform JSON data.
- Return type json string expr : ARRAY<JSON-formatted STRING> json expr : ARRAY<JSON> Examples This extracts items in JSON to an array of JSON values: SELECT JSON EXTRACT ARRAY ( JSON '{"fruits":["apples","oranges","grapes"]}' , '$.fruits' ) AS json array ; / ---------------------------------+ json array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / This extracts the items in a JSON-formatted string to a string array: SELECT JSON EXTRACT ARRAY ( '[1,2,3]' ) AS string array ; / --------------+ string array +--------------+ [1, 2, 3] +-------------- / This extracts a string array and converts it to an integer array: SELECT ARRAY ( SELECT CAST ( integer element AS INT64 ) FROM UNNEST ( JSON EXTRACT ARRAY ( '[1,2,3]' , '$' ) ) AS integer element ) AS integer array ; / ---------------+ integer array +---------------+ [1, 2, 3] +--------------- / This extracts string values in a JSON-formatted string to an array: -- Doesn't strip the double quotes SELECT JSON EXTRACT ARRAY ( '["apples", "oranges", "grapes"]' , '$' ) AS string array ; / ---------------------------------+ string array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / -- Strips the double quotes SELECT ARRAY ( SELECT JSON EXTRACT SCALAR ( string element , '$' ) FROM UNNEST ( JSON EXTRACT ARRAY ( '["apples","oranges","grapes"]' , '$' )) AS string element ) AS string array ; / ---------------------------+ string array +---------------------------+ [apples, oranges, grapes] +--------------------------- / This extracts only the items in the fruit property to an array: SELECT JSON EXTRACT ARRAY ( '{"fruit": [{"apples": 5, "oranges": 10}, {"apples": 2, "oranges": 4}], "vegetables": [{"lettuce": 7, "kale": 8}]}' , '$.fruit' ) AS string array ; / -------------------------------------------------------+ string array +-------------------------------------------------------+ [{"apples":5,"oranges":10}, {"apples":2,"oranges":4}] +------------------------------------------------------- / These are equivalent: SELECT JSON EXTRACT ARRAY ( '{"fruits": ["apples", "oranges", "grapes"]}' , '$[fruits]' ) AS string array ; SELECT JSON EXTRACT ARRAY ( '{"fruits": ["apples", "oranges", "grapes"]}' , '$.fruits' ) AS string array ; -- The queries above produce the following result: / ---------------------------------+ string array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / In cases where a JSON key uses invalid JSONPath characters, you can escape those characters using single quotes and brackets, [' '] .
- Return type json string expr : ARRAY<JSON-formatted STRING> json expr : ARRAY<JSON> Examples This extracts items in JSON to an array of JSON values: SELECT JSON QUERY ARRAY ( JSON '{"fruits": ["apples", "oranges", "grapes"]}' , '$.fruits' ) AS json array ; / ---------------------------------+ json array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / This extracts the items in a JSON-formatted string to a string array: SELECT JSON QUERY ARRAY ( '[1, 2, 3]' ) AS string array ; / --------------+ string array +--------------+ [1, 2, 3] +-------------- / This extracts a string array and converts it to an integer array: SELECT ARRAY ( SELECT CAST ( integer element AS INT64 ) FROM UNNEST ( JSON QUERY ARRAY ( '[1, 2, 3]' , '$' ) ) AS integer element ) AS integer array ; / ---------------+ integer array +---------------+ [1, 2, 3] +--------------- / This extracts string values in a JSON-formatted string to an array: -- Doesn't strip the double quotes SELECT JSON QUERY ARRAY ( '["apples", "oranges", "grapes"]' , '$' ) AS string array ; / ---------------------------------+ string array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / -- Strips the double quotes SELECT ARRAY ( SELECT JSON VALUE ( string element , '$' ) FROM UNNEST ( JSON QUERY ARRAY ( '["apples", "oranges", "grapes"]' , '$' )) AS string element ) AS string array ; / ---------------------------+ string array +---------------------------+ [apples, oranges, grapes] +--------------------------- / This extracts only the items in the fruit property to an array: SELECT JSON QUERY ARRAY ( '{"fruit": [{"apples": 5, "oranges": 10}, {"apples": 2, "oranges": 4}], "vegetables": [{"lettuce": 7, "kale": 8}]}' , '$.fruit' ) AS string array ; / -------------------------------------------------------+ string array +-------------------------------------------------------+ [{"apples":5,"oranges":10}, {"apples":2,"oranges":4}] +------------------------------------------------------- / These are equivalent: SELECT JSON QUERY ARRAY ( '{"fruits": ["apples", "oranges", "grapes"]}' , '$.fruits' ) AS string array ; SELECT JSON QUERY ARRAY ( '{"fruits": ["apples", "oranges", "grapes"]}' , '$."fruits"' ) AS string array ; -- The queries above produce the following result: / ---------------------------------+ string array +---------------------------------+ ["apples", "oranges", "grapes"] +--------------------------------- / In cases where a JSON key uses invalid JSONPath characters, you can escape those characters using double quotes: " " .

