---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.841Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery column-based partitioned tables"
feature_slug: "bigquery-column-based-partitioned-tables"
latest_feature_date: "2018-10-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-partitioned"
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
keywords:
  - "bigquery"
  - "column"
  - "based"
  - "partitioned"
  - "tables"
  - "supports"
  - "date"
  - "timestamp"
---

# BigQuery column-based partitioned tables

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports tables partitioned on a DATE or TIMESTAMP column.

## Extended Definition

BigQuery supports tables partitioned on a DATE or TIMESTAMP column.

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
- DAY , field = "date" , # name of column to use for partitioning expiration ms = 1000 60 60 24 90 , ) # 90 days table = client . create table ( table ) print ( f "Created table { table . project } . { table . dataset id } . { table . table id } , " f "partitioned on column { table . time partitioning . field } ." ) Terraform To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- Explore further For detailed documentation that includes this code sample, see the following: Creating partitioned tables Code sample Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Time-unit column-partitioned tables are subject to the following limitations: The partitioning column must be either a scalar DATE , TIMESTAMP , or DATETIME column.
- Quotas and limits for jobs against partitioned tables Quotas and limits also apply to the different types of jobs you can run against partitioned tables, including: Loading data (load jobs) Exporting data (extract jobs) Querying data (query jobs) Copying tables (copy jobs) Number of partition modifications for column-partitioned tables quota errors BigQuery returns this error when your column-partitioned table reaches the quota of the number of partition modifications permitted per day.
- Table pricing When you create and use partitioned tables in BigQuery, your charges are based on how much data is stored in the partitions and on the queries you run against the data: For information on storage pricing, see Storage pricing .
- For best practices for controlling costs in BigQuery, see Controlling costs in BigQuery Table security Access control for partitioned tables is the same as access control for standard tables.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- To find information about metadata refresh jobs, query the INFORMATION SCHEMA.JOBS view , as shown in the following example: SELECT FROM region-us.INFORMATION SCHEMA.JOBS BY PROJECT WHERE job id LIKE '%metadata cache refresh%' AND creation time > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 6 HOUR ) ORDER BY start time DESC LIMIT 10 ; For Cloud Storage BigLake tables that are based on Parquet files, table statistics are collected during the metadata cache refresh and used to improve query plans.
- Supported data stores You can use BigLake tables with the following data stores: Amazon S3 by using BigQuery Omni Blob Storage by using BigQuery Omni Cloud Storage Temporary table support BigLake tables based on Cloud Storage can be temporary or permanent.
- The BigQuery Storage API enforces row- and column-level governance policies on all data access to BigLake tables, including through connectors.
- Connectors You can access data in BigLake tables based on Cloud Storage from other data processing tools by using BigQuery connectors.

