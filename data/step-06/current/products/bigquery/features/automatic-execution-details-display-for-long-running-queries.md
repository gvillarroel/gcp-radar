---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.666Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Automatic Execution details display for long-running queries"
feature_slug: "automatic-execution-details-display-for-long-running-queries"
latest_feature_date: "2022-09-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/continuous-queries"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
keywords:
  - "automatic"
  - "execution"
  - "details"
  - "display"
  - "long"
  - "running"
  - "queries"
  - "console"
---

# Automatic Execution details display for long-running queries

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The Cloud console automatically opens the Execution details tab for long-running BigQuery queries.

## Extended Definition

The Cloud console automatically opens the Execution details tab for long-running BigQuery queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- Examples Setting the expiration timestamp and description on a table The following example sets the expiration timestamp on a table to seven days from the execution time of the ALTER TABLE statement, and sets the description as well: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "Table that expires seven days from now" ) Setting the require partition filter attribute on a partitioned table The following example sets the timePartitioning.requirePartitionFilter attribute on a partitioned table : ALTER TABLE mydataset . mypartitionedtable SET OPTIONS ( require partition filter = true ) Queries that reference this table must use a filter on the partitioning column, or else BigQuery returns an error.

### Create continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)
- Source ID: `site-docs-reference-5`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After the continuous query is running, you can close the Google Cloud console, terminal window, or application without interrupting query execution.
- After the continuous query is running, you can close the Google Cloud console, terminal window, or application without interrupting query execution.
- CHANGE TIMESTAMP AND ST Dwithin ( ST GEOGPOINT ( requests . longitude , requests . latitude ), ST GEOGPOINT ( taxis . longitude , taxis . latitude ), 2000 -- Distance in meters ) ) SELECT window end , geohash , ROUND ( AVG ( latitude ), 6 ) AS avg latitude , ROUND ( AVG ( longitude ), 6 ) AS avg longitude , COUNT ( ) AS taxi demand volume , ROUND ( AVG ( distance in meters ), 2 ) AS avg proximity meters , ROUND ( MIN ( distance in meters ), 2 ) AS min proximity meters , ROUND ( MAX ( distance in meters ), 2 ) AS max proximity meters , ROUND ( STDDEV ( distance in meters ), 2 ) AS proximity stddev FROM TUMBLE ( TABLE potential matches , "bq changed ts" , INTERVAL 5 MINUTE ) GROUP BY window end , geohash ; Modify the SQL of a continuous query You can't update the SQL used in a continuous query while the continuous query job is running.
- If your source data lacks a timestamp, the -- CHANGE TIMESTAMP pseudocolumn provided by the APPENDS function -- will be automatically mapped to the " change timestamp " column. " change timestamp column ": " change timestamp " } "" " ) AS ( SELECT ride id , latitude , longitude , meter reading , ride status , passenger count , CHANGE TIMESTAMP as change timestamp FROM APPENDS ( TABLE myproject.real time taxi streaming.taxirides , -- Configure the APPENDS TVF start timestamp to specify when you want to -- start processing data using your continuous query. -- This example starts processing at 10 minutes before the current time.

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Billing is larger than the bytes processed calculated through INFORMATION SCHEMA.JOBS for project running on-demand queries If the billing amount is larger than the value you calculated by querying the INFORMATION SCHEMA.JOBS view, there might be certain conditions that caused this: Queries over row-level security tables Queries over tables with row-level security don't produce a value for total bytes billed in the INFORMATION SCHEMA.JOBS view, therefore, the billing calculated using total bytes billed from INFORMATION SCHEMA.JOBS view will be less than the billed value.
- Unexpected charges related to queries, reservations and commitments Troubleshooting unexpected charges related to job execution depends on the origin of these charges: If you see an increase in on-demand analysis costs, this can be related to an increase in the number of jobs that were launched or the change in the amount of data that needs to be processed by jobs.
- Billing is less than the total bytes billed calculated through INFORMATION SCHEMA.JOBS for project running on-demand queries There can be multiple reasons for the actual billing to be less than the calculated bytes processed: Each project is provided with 1 TB of free tier querying per month for no extra charge.
- During this retention window, the deleted data in physical storage billing model datasets contributes to the active physical storage cost, even though the tables will no longer appear in INFORMATION SCHEMA.TABLE STORAGE or in the console.

