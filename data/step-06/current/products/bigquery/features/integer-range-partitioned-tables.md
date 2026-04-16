---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.797Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Integer range partitioned tables"
feature_slug: "integer-range-partitioned-tables"
latest_feature_date: "2020-02-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "integer"
  - "range"
  - "partitioned"
  - "tables"
  - "bigquery"
  - "can"
  - "column"
---

# Integer range partitioned tables

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery tables can be partitioned by integer range on an integer column; BigQuery tables can be partitioned by integer range on an integer column.

## Extended Definition

BigQuery tables can be partitioned by integer range on an integer column; BigQuery tables can be partitioned by integer range on an integer column.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Integer-range partitioned tables are subject to the following limitations: The partitioning column must be an INTEGER column.
- Quotas and limits for jobs against partitioned tables Quotas and limits also apply to the different types of jobs you can run against partitioned tables, including: Loading data (load jobs) Exporting data (extract jobs) Querying data (query jobs) Copying tables (copy jobs) Number of partition modifications for column-partitioned tables quota errors BigQuery returns this error when your column-partitioned table reaches the quota of the number of partition modifications permitted per day.
- For example, suppose you create an integer range partition with the following specification: Argument Value column name customer id start 0 end 100 interval 10 The table is partitioned on the customer id column into ranges of interval 10.
- For information about integer-range partitioned tables, see Create an integer-range partitioned table .

### "Create an integer-range partitioned table \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned)
- Source ID: `site-docs-reference-required-15`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTableRangePartitioned () { // Creates a new integer range partitioned table named "my table" // in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; const schema = [ { name : 'fullName' , type : 'STRING' }, { name : 'city' , type : 'STRING' }, { name : 'zipcode' , type : ' INTEGER ' }, ]; // To use integer range partitioning, select a top-level REQUIRED or // NULLABLE column with INTEGER / INT64 data type.
- For more information, see Set up authentication for client libraries . require "google/cloud/bigquery" Creates a table with range partitioning. @param dataset id [String] The ID of the dataset to create the table in. @param table id [String] The ID of the table to create. def create range partitioned table dataset id , table id bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id table = dataset . create table table id do t t . schema do s s . integer "integerField" , mode : :required s . string "stringField" , mode : :nullable s . boolean "booleanField" , mode : :nullable s . date "dateField" , mode : :nullable end t . range partitioning field = "integerField" t . range partitioning start = 1 t . range partitioning interval = 2 t . range partitioning end = 10 end puts "Created range-partitioned table: #{ table . table id } " end Terraform To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- Null values will be in the NULL partition. const rangePartition = { field : 'zipcode' , range : { start : 0 , end : 100000 , interval : 10 , }, }; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , rangePartitioning : rangePartition , }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created with integer range partitioning: ); console . log ( table . metadata . rangePartitioning ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Home Documentation Data analytics BigQuery Samples Create an integer-range partitioned table Stay organized with collections Save and categorize content based on your preferences.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- The INFORMATION SCHEMA.TABLE OPTIONS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset table schema STRING The name of the dataset that contains the table or view also referred to as the datasetId table name STRING The name of the table or view also referred to as the tableId option name STRING One of the name values in the options table option type STRING One of the data type values in the options table option value STRING One of the value options in the options table Options table OPTION NAME OPTION TYPE OPTION VALUE description STRING A description of the table enable refresh BOOL Whether automatic refresh is enabled for a materialized view expiration timestamp TIMESTAMP The time when this table expires friendly name STRING The table's descriptive name kms key name STRING The name of the Cloud KMS key used to encrypt the table labels ARRAY<STRUCT<STRING, STRING>> An array of STRUCT 's that represent the labels on the table max staleness INTERVAL The configured table's maximum staleness for BigQuery change data capture (CDC) upserts partition expiration days FLOAT64 The default lifetime, in days, of all partitions in a partitioned table refresh interval minutes FLOAT64 How frequently a materialized view is refreshed require partition filter BOOL Whether queries over the table require a partition filter tags ARRAY<STRUCT<STRING, STRING>> Tags attached to a table in a namespaced <key, value> syntax.
- TABLES WHERE table name = 'population by zip 2010' ; The result is similar to the following: +------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ table name ddl +------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ population by zip 2010 CREATE TABLE bigquery-public-data.census bureau usa.population by zip 2010 ( geo id STRING OPTIONS(description="Geo code"), zipcode STRING NOT NULL OPTIONS(description="Five digit ZIP Code Tabulation Area Census Code"), population INT64 OPTIONS(description="The total count of the population for this segment."), minimum age INT64 OPTIONS(description="The minimum age in the age range.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTable () { // Creates a new table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const schema = 'Name:string, Age:integer, Weight:float, IsMagic:boolean'; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created. ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- Control access to tables To configure access to tables and views, you can grant an IAM role to an entity at the following levels, listed in order of range of resources allowed (largest to smallest): a high level in the Google Cloud resource hierarchy such as the project, folder, or organization level the dataset level the table or view level You can also restrict data access within tables, by using the following methods: column-level security column data masking row-level security Access with any resource protected by IAM is additive.

