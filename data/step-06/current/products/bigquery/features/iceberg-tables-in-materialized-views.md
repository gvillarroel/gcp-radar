---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.465Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Iceberg tables in materialized views"
feature_slug: "iceberg-tables-in-materialized-views"
latest_feature_date: "2024-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "iceberg"
  - "tables"
  - "materialized"
  - "views"
  - "bigquery"
  - "can"
  - "reference"
  - "without"
---

# Iceberg tables in materialized views

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery materialized views can reference Iceberg tables without migrating the data into BigQuery-managed storage.

## Extended Definition

BigQuery materialized views can reference Iceberg tables without migrating the data into BigQuery-managed storage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- For more information about using the bq ls command, see the following: Managing jobs Listing datasets in a project Creating and using tables Listing views in a dataset Working with transfers Listing table snapshots in a dataset bq mk Use the bq mk command to create a BigQuery resource.
- The default is false . --parquet enable list inference={true false} If the --source format flag is set to PARQUET , then this flag indicates whether to use schema inference for Parquet LIST logical types. --reference file schema uri= URI Specifies the path to a reference file with the expected table schema for creating external tables.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences. bq command-line tool reference This document describes the syntax, commands, flags, and arguments for bq , the Python-based command-line tool for BigQuery.
- For more information about using the bq show command, see the following: Getting information about datasets Creating and using tables Getting information about views Working with transfers Managing jobs Getting information about a table snapshot bq update Use the bq update command to change a resource.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.
- Example: replication interval seconds=900 Required permissions This statement requires the following IAM permissions : bigquery.tables.create bigquery.tables.get bigquery.tables.getData bigquery.tables.replicateData bigquery.jobs.create Example The following example creates a materialized view replica named mv replica in bq dataset : CREATE MATERIALIZED VIEW myproject . bq dataset . mv replica OPTIONS ( replication interval seconds = 600 ) AS REPLICA OF myproject.s3 dataset.my s3 mv CREATE EXTERNAL SCHEMA statement Creates a new federated dataset.
- Example The following example deletes the my cloud resource connection connection: DROP CONNECTION IF EXISTS us.my cloud resource connection ; Table path syntax Use the following syntax when specifying the path of a table resource , including standard tables, views, materialized views, external tables, and table snapshots. table path := [[ project name . ] dataset name . ] table name project name : The name of the project that contains the table resource.
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a table: bigquery.tables.create on the dataset where you're creating the table. bigquery.tables.getData on all tables and views that your query references if you're saving query results as a table. bigquery.jobs.create on the project if you're creating the table by loading data or by saving query results to a table. bigquery.tables.updateData on the table if you're appending to or overwriting a table with query results.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDestinationTable () { // Queries the U.S. given names dataset for the state of Texas // and saves results to permanent table. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Create destination table reference const dataset = bigquery . dataset ( datasetId ); const destinationTable = dataset . table ( tableId ); const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , destination : destinationTable , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); console . log ( Query results loaded to table ${ destinationTable . id } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTable () { // Creates a new table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const schema = 'Name:string, Age:integer, Weight:float, IsMagic:boolean'; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created. ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- For readability, some columns are excluded from the result. +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ table name column name field path data type description policy tags +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ commits author author STRUCT<name STRING, email STRING, time sec INT64, tz offset INT64, date TIMESTAMP> NULL 0 rows commits author author.name STRING NULL 0 rows commits author author.email STRING NULL 0 rows commits author author.time sec INT64 NULL 0 rows commits author author.tz offset INT64 NULL 0 rows commits author author.date TIMESTAMP NULL 0 rows commits difference difference ARRAY<STRUCT<old mode INT64, new mode INT64, old path STRING, new path STRING, old sha1 STRING, new sha1 STRING, old repo STRING, new repo STRING>> NULL 0 rows commits difference difference.old mode INT64 NULL 0 rows commits difference difference.new mode INT64 NULL 0 rows commits difference difference.old path STRING NULL 0 rows commits difference difference.new path STRING NULL 0 rows commits difference difference.old sha1 STRING NULL 0 rows commits difference difference.new sha1 STRING NULL 0 rows commits difference difference.old repo STRING NULL 0 rows commits difference difference.new repo STRING NULL 0 rows +------------+-------------+---------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------+-------------+-------------+ TABLE STORAGE view The TABLE STORAGE and TABLE STORAGE BY ORGANIZATION views have the following schema: Column name Data type Value project id STRING The project ID of the project that contains the dataset. project number INT64 The project number of the project that contains the dataset. table catalog STRING The project ID of the project that contains the dataset. table schema STRING The name of the dataset that contains the table or materialized view, also referred to as the datasetId . table name STRING The name of the table or materialized view, also referred to as the tableId . creation time TIMESTAMP The creation time of the table. total rows INT64 The total number of rows in the table or materialized view. total partitions INT64 The number of partitions present in the table or materialized view.

