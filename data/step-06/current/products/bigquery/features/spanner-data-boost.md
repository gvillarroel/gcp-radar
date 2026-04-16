---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.589Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Spanner Data Boost"
feature_slug: "spanner-data-boost"
latest_feature_date: "2023-07-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/continuous-queries"
  - "https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "spanner"
  - "boost"
  - "executes"
  - "analytics"
  - "queries"
  - "exports"
  - "near"
  - "zero"
---

# Spanner Data Boost

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Spanner Data Boost executes analytics queries and data exports with near-zero impact on existing workloads in a provisioned Spanner instance.

## Extended Definition

Spanner Data Boost executes analytics queries and data exports with near-zero impact on existing workloads in a provisioned Spanner instance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)
- [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- Syntax: '{ "differential privacy policy": { "privacy unit column": value, "max epsilon per query": value, "epsilon budget": value, "delta per query": value, "delta budget": value, "max groups contributed": value } }' Parameters: differential privacy policy : The differential privacy policy for the view. privacy unit column : The column that represents the privacy unit column for differentially private queries on the view. value is a JSON string. max epsilon per query : The maximum amount of epsilon that can be specified for a differentially private query on the view. value is a JSON number from 0.001 to 1e+15. epsilon budget : The amount of epsilon that can be used in totality for all differentially private queries on the view. value is JSON number from 0.001 to 1e+15. delta per query : The maximum amount of delta that can be specified for a differentially private query on the view. value is a JSON number from 1e-15 to 1. delta budget : The amount of delta that can be used in totality for all differentially private queries on the view.
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.

### Introduction to continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- For the pricing of other Google Cloud services used by continuous queries, see the following topics: Bigtable pricing Pub/Sub pricing Spanner pricing Vertex AI pricing What's next Try creating a continuous query .
- You can't use the following SQL capabilities in a continuous query, unless they are listed as a supported stateful operation : The following query operators: PIVOT UNPIVOT TABLESAMPLE Query set operators The SELECT DISTINCT statement EXISTS or NOT EXISTS subqueries Recursive CTEs User-defined functions Window function calls BigQuery ML functions other than those listed in Supported functionality Data definition language (DDL) statements Data manipulation language (DML) statements except for INSERT .
- Writes from the results of a batch query to a permanent table Writes from the results of a BigQuery continuous query to a permanent table A Pub/Sub BigQuery subscription Writes from Dataflow to BigQuery Writes from Datastream to BigQuery using append-only write mode You can use continuous queries to perform time-sensitive tasks, such as creating and immediately acting on insights, applying real-time machine learning (ML) inference, and replicating data into other platforms.
- Continuous queries can process data that has been written to standard BigQuery tables by using one of the following methods: The BigQuery Storage Write API The tabledata.insertAll method Batch load The INSERT DML statement Mutating data manipulation language (DML) statements such as DELETE , UPDATE , and MERGE when exporting data to Pub/Sub .

### Create continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)
- Source ID: `site-docs-reference-5`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- CURRENT TIMESTAMP () - INTERVAL 10 MINUTE ) WHERE ride status = 'enroute' ); Export data to a Spanner table The following example shows a continuous query that filters data from a BigQuery table that is receiving streaming taxi ride information, and then exports the data into a Spanner table in real time: EXPORT DATA OPTIONS ( format = 'CLOUD SPANNER' , uri = 'https://spanner.googleapis.com/projects/myproject/instances/myspannerinstance/databases/taxi-real-time-rides' , spanner options = " "" { " table ": " rides ", -- To ensure data is written to Spanner in the correct sequence -- during a continuous export, use the change timestamp column -- option.
- Continuous queries let you analyze incoming data in BigQuery in real time, and then either export the results to Bigtable, Pub/Sub, or Spanner, or write the results to a BigQuery table.
- CURRENT TIMESTAMP () - INTERVAL 10 MINUTE ) WHERE CHANGE TYPE = 'DELETE' ); Export data to a Bigtable table The following example shows a continuous query that filters data from a BigQuery table that is receiving streaming taxi ride information, and exports the data into a Bigtable table in real time: EXPORT DATA OPTIONS ( format = 'CLOUD BIGTABLE' , truncate = TRUE , overwrite = TRUE , uri = 'https://bigtable.googleapis.com/projects/myproject/instances/mybigtableinstance/tables/taxi-real-time-rides' ) AS ( SELECT CAST ( CONCAT ( ride id , timestamp , latitude , longitude ) AS STRING ) AS rowkey , STRUCT ( timestamp , latitude , longitude , meter reading , ride status , passenger count ) AS features FROM APPENDS ( TABLE myproject.real time taxi streaming.taxirides , -- Configure the APPENDS TVF start timestamp to specify when you want to -- start processing data using your continuous query. -- This example starts processing at 10 minutes before the current time.
- CURRENT TIMESTAMP () - INTERVAL 10 MINUTE ) WHERE ride status = 'dropoff' ; Process data by using a Vertex AI model The following example shows a continuous query which uses a Vertex AI model to generate an advertisement for taxi riders based on their current latitude and longitude, and then exports the results into a Pub/Sub topic in real time: EXPORT DATA OPTIONS ( format = 'CLOUD PUBSUB' , uri = 'https://pubsub.googleapis.com/projects/myproject/topics/taxi-real-time-rides' ) AS ( SELECT TO JSON STRING ( STRUCT ( ride id , timestamp , latitude , longitude , prompt , result )) AS message FROM AI .

