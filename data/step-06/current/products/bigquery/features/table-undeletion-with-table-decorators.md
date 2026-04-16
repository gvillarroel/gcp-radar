---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.927Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Table undeletion with table decorators"
feature_slug: "table-undeletion-with-table-decorators"
latest_feature_date: "2015-04-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/table-decorators"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
keywords:
  - "table"
  - "undeletion"
  - "decorators"
  - "lets"
  - "bigquery"
  - "recover"
  - "deleted"
  - "tables"
---

# Table undeletion with table decorators

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Table undeletion with table decorators lets BigQuery recover deleted tables using decorators.

## Extended Definition

Table undeletion with table decorators lets BigQuery recover deleted tables using decorators.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)

## Supporting Pages

### Table decorators in legacy SQL \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For range decorators, you can achieve similar semantics in GoogleSQL by using time-partitioned tables.
- You can use them in the bq cp command to restore deleted tables within seven days of table deletion.
- Examples To get the historical data for a table at one hour ago: Relative value example legacySQL SELECT COUNT( ) FROM [PROJECT ID:DATASET.TABLE@-3600000] Absolute value example Get <time> for one hour ago: legacySQL SELECT INTEGER(DATE ADD(USEC TO TIMESTAMP(NOW()), -1, 'HOUR')/1000) Then, replace <time> in the following query: #legacySQL SELECT COUNT ( ) FROM [ PROJECT ID:DATASET.TABLE@time ] Range decorators Syntax @ <time1> - <time2> References table data added between <time1> and <time2> , in milliseconds since the epoch. <time1> and <time2> must be within the last seven days. <time2> is optional and defaults to 'now'.
- Standard SQL does not support table decorators, but the FOR SYSTEM TIME AS OF clause in GoogleSQL provides functionality equivalent to time decorators.

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Quotas and limits for jobs against partitioned tables Quotas and limits also apply to the different types of jobs you can run against partitioned tables, including: Loading data (load jobs) Exporting data (extract jobs) Querying data (query jobs) Copying tables (copy jobs) Number of partition modifications for column-partitioned tables quota errors BigQuery returns this error when your column-partitioned table reaches the quota of the number of partition modifications permitted per day.
- Table pricing When you create and use partitioned tables in BigQuery, your charges are based on how much data is stored in the partitions and on the queries you run against the data: For information on storage pricing, see Storage pricing .
- For best practices for controlling costs in BigQuery, see Controlling costs in BigQuery Table security Access control for partitioned tables is the same as access control for standard tables.
- With sharded tables, BigQuery must maintain a copy of the schema and metadata for each table.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDestinationTable () { // Queries the U.S. given names dataset for the state of Texas // and saves results to permanent table. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Create destination table reference const dataset = bigquery . dataset ( datasetId ); const destinationTable = dataset . table ( tableId ); const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , destination : destinationTable , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); console . log ( Query results loaded to table ${ destinationTable . id } ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- TABLES WHERE table name = 'population by zip 2010' ; The result is similar to the following: +------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ table name ddl +------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+ population by zip 2010 CREATE TABLE bigquery-public-data.census bureau usa.population by zip 2010 ( geo id STRING OPTIONS(description="Geo code"), zipcode STRING NOT NULL OPTIONS(description="Five digit ZIP Code Tabulation Area Census Code"), population INT64 OPTIONS(description="The total count of the population for this segment."), minimum age INT64 OPTIONS(description="The minimum age in the age range.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTable () { // Creates a new table named "my table" in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; // const schema = 'Name:string, Age:integer, Weight:float, IsMagic:boolean'; // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tables#resource const options = { schema : schema , location : 'US' , }; // Create a new table in the dataset const [ table ] = await bigquery . dataset ( datasetId ) . createTable ( tableId , options ); console . log ( Table ${ table . id } created. ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- Applicable only to tables with table type set to CLONE or SNAPSHOT . replica source catalog STRING For materialized view replicas , the base materialized view's project. replica source schema STRING For materialized view replicas , the base materialized view's dataset. replica source name STRING For materialized view replicas , the base materialized view's name. replication status STRING For materialized view replicas , the status of the replication from the base materialized view to the materialized view replica; one of the following: REPLICATION STATUS UNSPECIFIED ACTIVE : Replication is active with no errors SOURCE DELETED : The source materialized view has been deleted PERMISSION DENIED : The source materialized view hasn't been authorized on the dataset that contains the source Amazon S3 BigLake tables used in the query that created the materialized view.

