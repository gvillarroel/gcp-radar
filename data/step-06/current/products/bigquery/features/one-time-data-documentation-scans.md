---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.220Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "One-time data documentation scans"
feature_slug: "one-time-data-documentation-scans"
latest_feature_date: "2026-02-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned"
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro"
keywords:
  - "one"
  - "time"
  - "documentation"
  - "scans"
  - "bigquery"
  - "supports"
  - "execute"
  - "immediately"
---

# One-time data documentation scans

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports one-time data documentation scans that execute immediately when created.

## Extended Definition

BigQuery supports one-time data documentation scans that execute immediately when created.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned)
- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)

## Supporting Pages

### Column-based time partitioning \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned)
- Source ID: `site-docs-reference-required-15`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting" , pii = "sensitive" } } resource "google bigquery table" "default" { dataset id = google bigquery dataset.default.dataset id table id = "mytable" time partitioning { type = "DAY" field = "Created" expiration ms = 432000000 # 5 days } require partition filter = true schema = << EOF [ { "name" : "ID" , "type" : "INT64" , "mode" : "NULLABLE" , "description" : "Item ID" }, { "name" : "Created" , "type" : "TIMESTAMP" , "description" : "Record creation timestamp" }, { "name" : "Item" , "type" : "STRING" , "mode" : "NULLABLE" } ] EOF } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Home Documentation Data analytics BigQuery Samples Column-based time partitioning Stay organized with collections Save and categorize content based on your preferences.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTablePartitioned () { // Creates a new partitioned table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; const schema = 'Name:string, Post Abbr:string, Date:date' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , timePartitioning : { type : 'DAY' , expirationMs : '7776000000' , field : ' date ' , }, }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created with partitioning: ); console . log ( table . metadata . timePartitioning ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- DAY ) . setField ( "date" ) // name of column to use for partitioning . setExpirationMs ( 7776000000L ) // 90 days . build (); StandardTableDefinition tableDefinition = StandardTableDefinition . newBuilder () . setSchema ( schema ) . setTimePartitioning ( partitioning ) . build (); TableInfo tableInfo = TableInfo . newBuilder ( tableId , tableDefinition ). build (); bigquery . create ( tableInfo ); System . out . println ( "Partitioned table created successfully" ); } catch ( BigQueryException e ) { System . out . println ( "Partitioned table was not created. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- Ingestion time partitioning When you create a table partitioned by ingestion time, BigQuery automatically assigns rows to partitions based on the time when BigQuery ingests the data.
- When you run a query that filters by the clustered column, BigQuery only scans the relevant blocks based on the clustered columns instead of the entire table or table partition.
- Home Documentation Data analytics BigQuery Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Quotas and limits for jobs against partitioned tables Quotas and limits also apply to the different types of jobs you can run against partitioned tables, including: Loading data (load jobs) Exporting data (extract jobs) Querying data (query jobs) Copying tables (copy jobs) Number of partition modifications for column-partitioned tables quota errors BigQuery returns this error when your column-partitioned table reaches the quota of the number of partition modifications permitted per day.

### Introduction to data masking \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)
- Source ID: `site-docs-reference-5`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- The following results are returned: SSN Priority Lifetime value Creation date Email NULL "" Zmy9vydG5q= March 8, 1983 NULL NULL "" GhwTwq6Ynm= December 29, 2009 NULL NULL "" B6y7dsgaT9= July 14, 2021 NULL NULL "" Uh02hnR1sg= May 5, 1997 NULL All other users : Any user who does not belong to one of the listed groups gets an access denied error, because they haven't been granted the Data Catalog Fine-Grained Reader or BigQuery Masked Reader roles.
- The following results are returned: SSN Priority Lifetime value Creation date Email NULL High 90,000 March 8, 1983 NULL NULL High 84,875 December 29, 2009 NULL NULL Medium 38,000 July 14, 2021 NULL NULL Low 245 May 5, 1997 NULL fin-dev@example.com : This group has been granted the BigQuery Masked Reader role on the Financial policy tag.
- Custom masking routines Custom masking routines are subject to the following limitations: Custom data masking supports all BigQuery data types except STRUCT , because data masking can only apply to leaf fields of the STRUCT data type.
- Home Documentation Data analytics BigQuery Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

