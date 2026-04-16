---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.860Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Column-based partitioned tables"
feature_slug: "column-based-partitioned-tables"
latest_feature_date: "2018-02-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned"
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
keywords:
  - "column"
  - "based"
  - "partitioned"
  - "tables"
  - "bigquery"
  - "supports"
  - "partitioning"
  - "timestamp"
---

# Column-based partitioned tables

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports partitioning tables by a TIMESTAMP or DATE column.

## Extended Definition

BigQuery supports partitioning tables by a TIMESTAMP or DATE column.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned)
- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)

## Supporting Pages

### Column-based time partitioning \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned)
- Source ID: `site-docs-reference-required-15`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTablePartitioned () { // Creates a new partitioned table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; const schema = 'Name:string, Post Abbr:string, Date:date' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , timePartitioning : { type : 'DAY' , expirationMs : '7776000000' , field : ' date ' , }, }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created with partitioning: ); console . log ( table . metadata . timePartitioning ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- DAY ) . setField ( "date" ) // name of column to use for partitioning . setExpirationMs ( 7776000000L ) // 90 days . build (); StandardTableDefinition tableDefinition = StandardTableDefinition . newBuilder () . setSchema ( schema ) . setTimePartitioning ( partitioning ) . build (); TableInfo tableInfo = TableInfo . newBuilder ( tableId , tableDefinition ). build (); bigquery . create ( tableInfo ); System . out . println ( "Partitioned table created successfully" ); } catch ( BigQueryException e ) { System . out . println ( "Partitioned table was not created. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- Home Documentation Data analytics BigQuery Samples Column-based time partitioning Stay organized with collections Save and categorize content based on your preferences.
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting" , pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" time partitioning { type = "DAY" field = "Created" expiration ms = 432000000 # 5 days } require partition filter = true schema = << EOF [ { "name" : "ID" , "type" : "INT64" , "mode" : "NULLABLE" , "description" : "Item ID" }, { "name" : "Created" , "type" : "TIMESTAMP" , "description" : "Record creation timestamp" }, { "name" : "Item" , "type" : "STRING" , "mode" : "NULLABLE" } ] EOF } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Time-unit column-partitioned tables are subject to the following limitations: The partitioning column must be either a scalar DATE , TIMESTAMP , or DATETIME column.
- Quotas and limits for jobs against partitioned tables Quotas and limits also apply to the different types of jobs you can run against partitioned tables, including: Loading data (load jobs) Exporting data (extract jobs) Querying data (query jobs) Copying tables (copy jobs) Number of partition modifications for column-partitioned tables quota errors BigQuery returns this error when your column-partitioned table reaches the quota of the number of partition modifications permitted per day.
- Table pricing When you create and use partitioned tables in BigQuery, your charges are based on how much data is stored in the partitions and on the queries you run against the data: For information on storage pricing, see Storage pricing .
- Ingestion time partitioning When you create a table partitioned by ingestion time, BigQuery automatically assigns rows to partitions based on the time when BigQuery ingests the data.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- To find information about metadata refresh jobs, query the INFORMATION SCHEMA.JOBS view , as shown in the following example: SELECT FROM region-us.INFORMATION SCHEMA.JOBS BY PROJECT WHERE job id LIKE '%metadata cache refresh%' AND creation time > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 6 HOUR ) ORDER BY start time DESC LIMIT 10 ; For Cloud Storage BigLake tables that are based on Parquet files, table statistics are collected during the metadata cache refresh and used to improve query plans.
- Supported data stores You can use BigLake tables with the following data stores: Amazon S3 by using BigQuery Omni Blob Storage by using BigQuery Omni Cloud Storage Temporary table support BigLake tables based on Cloud Storage can be temporary or permanent.
- The BigQuery Storage API enforces row- and column-level governance policies on all data access to BigLake tables, including through connectors.
- Connectors You can access data in BigLake tables based on Cloud Storage from other data processing tools by using BigQuery connectors.

