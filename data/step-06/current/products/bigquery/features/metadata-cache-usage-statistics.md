---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.597Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Metadata cache usage statistics"
feature_slug: "metadata-cache-usage-statistics"
latest_feature_date: "2023-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "metadata"
  - "cache"
  - "usage"
  - "statistics"
  - "caching"
  - "includes"
---

# Metadata cache usage statistics

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Metadata caching includes statistics on metadata cache usage.

## Extended Definition

Metadata caching includes statistics on metadata cache usage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- To find information about metadata refresh jobs, query the INFORMATION SCHEMA.JOBS view , as shown in the following example: SELECT FROM region-us.INFORMATION SCHEMA.JOBS BY PROJECT WHERE job id LIKE '%metadata cache refresh%' AND creation time > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 6 HOUR ) ORDER BY start time DESC LIMIT 10 ; For Cloud Storage BigLake tables that are based on Parquet files, table statistics are collected during the metadata cache refresh and used to improve query plans.
- As a result, metadata caching-enabled queries read data corresponding to the specific cached object version, even if newer versions become live in Cloud Storage.
- Metadata caching for performance You can use cached metadata to improve query performance on some types of BigLake tables.
- If you are automatically refreshing the metadata cache for a table, and you set the staleness interval to 30 minutes, it is possible that some of your operations against the table might read from the datastore if the metadata cache refresh takes on the longer side of the usual 30 to 60 minute window.

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function queryDryRun () { // Runs a dry query of the U.S. given names dataset for the state of Texas. const query = SELECT name FROM \bigquery-public-data.usa names.usa 1910 2013\ WHERE state = 'TX' LIMIT 100 ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , // Location must match that of the dataset(s) referenced in the query. location : 'US' , dryRun : true , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); // Print the status and statistics console . log ( 'Status:' ); console . log ( job . metadata . status ); console . log ( '\nJob Statistics:' ); console . log ( job . metadata . statistics ); } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- The following are examples of actions that might result in this move: Insert, update, truncate, merge, or delete statements that change table data Loading, streaming, or appending data to the table ALTER statements that change the table schema Adding or modifying table properties like description, labels, or expiration Modifying table metadata Configure the storage billing model Best practice: Optimize the storage billing model based on your usage patterns.
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); QueryJobConfiguration queryConfig = QueryJobConfiguration . newBuilder ( query ). setDryRun ( true ). setUseQueryCache ( false ). build (); Job job = bigquery . create ( JobInfo . of ( queryConfig )); JobStatistics .
- Unexpected storage charges Scenarios that could lead to storage charge increases: Increases in the amount of data that is stored in your tables—use the INFORMATION SCHEMA.TABLE STORAGE USAGE TIMELINE view to monitor the change in bytes for your tables Changing dataset billing models Increasing the time-travel window for physical billing model datasets Modification of tables that have data in long-term storage , causing them to become active storage Deletion of table(s) or dataset(s) resulted in higher BigQuery storage costs The BigQuery time travel feature retains deleted data for duration of the configured time-travel window and an additional 7 days for fail-safe recovery.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- DDL functionality extends the information returned by a Jobs resource . statistics.query.statementType includes the following additional values: CREATE TABLE CREATE TABLE AS SELECT DROP TABLE CREATE VIEW DROP VIEW statistics.query has 2 additional fields: ddlOperationPerformed : The DDL operation performed, possibly dependent on the existence of the DDL target.
- CREATE OR REPLACE EXTERNAL TABLE mydataset . newtable ( x INT64 , y STRING , z BOOL ) WITH CONNECTION myconnection OPTIONS ( format = "PARQUET" , max staleness = STALENESS INTERVAL , metadata cache mode = 'AUTOMATIC' ); The following example creates an external table from multiple URIs.
- If the cached metadata is older than that, the operation falls back to retrieving metadata from Cloud Storage instead. null marker STRING The string that represents NULL values in a CSV file.
- Specifies whether cached metadata is used by operations against the table, and how fresh the cached metadata must be in order for the operation to use it.

