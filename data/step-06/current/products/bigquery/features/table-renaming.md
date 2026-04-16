---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.740Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Table renaming"
feature_slug: "table-renaming"
latest_feature_date: "2021-05-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/table-decorators"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-routine-ddl"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
keywords:
  - "table"
  - "renaming"
  - "bigquery"
  - "supports"
  - "tables"
  - "through"
  - "sql"
  - "alter"
---

# Table renaming

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports renaming tables through SQL with ALTER TABLE RENAME TO.

## Extended Definition

BigQuery supports renaming tables through SQL with ALTER TABLE RENAME TO.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-routine-ddl](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-routine-ddl)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)

## Supporting Pages

### Create a routine with DDL \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-routine-ddl](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-routine-ddl)
- Source ID: `site-docs-reference-required-15`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createRoutineDDL () { // Creates a routine using DDL. / TODO(developer): Uncomment the following lines before running the sample. / // projectId = 'my project'; // const datasetId = 'my dataset'; // const routineId = 'my routine'; const query = CREATE FUNCTION \ ${ projectId } . ${ datasetId } . ${ routineId } \( arr ARRAY<STRUCT<name STRING, val INT64> > ) AS ( (SELECT SUM(IF(elem.name = "foo",elem.val,null)) FROM UNNEST(arr) AS elem) ) ; const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); console . log ( Job ${ job . id } started. ); // Wait for the query to finish await job . getQueryResults (); console . log ( Routine ${ routineId } created. ); } createRoutineDDL (); Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Job job = bigquery . create ( JobInfo . of ( config )); job = job . waitFor (); if ( job . isDone ()) { System . out . println ( "Routine created successfully" ); } else { System . out . println ( "Routine was not created" ); } } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Routine was not created. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // createRoutineDDL demonstrates creating a new BigQuery UDF using a DDL query. func createRoutineDDL ( projectID , datasetID , routineID string ) error { // projectID := "my-project-id" // datasetID := "mydatasetid" // routineID := "myroutineid" ctx := context .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); QueryJobConfiguration config = QueryJobConfiguration . newBuilder ( sql ). build (); // create a routine using query and it will wait to complete job.

### Table decorators in legacy SQL \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/table-decorators](https://docs.cloud.google.com/bigquery/docs/table-decorators)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For range decorators, you can achieve similar semantics in GoogleSQL by using time-partitioned tables.
- You can use them in the bq cp command to restore deleted tables within seven days of table deletion.
- Examples Relative value examples To get table data added between one hour and half an hour ago: legacySQL SELECT COUNT( ) FROM [PROJECT ID:DATASET.TABLE@-3600000--1800000] To get data from the last 10 minutes: legacySQL SELECT COUNT( ) FROM [PROJECT ID:DATASET.TABLE@-600000-] Absolute value example To get table data added between one hour and half an hour ago: Get <time1> for one hour ago: legacySQL SELECT INTEGER(DATE ADD(USEC TO TIMESTAMP(NOW()), -1, 'HOUR')/1000) Get <time2> for a half hour ago: legacySQL SELECT INTEGER(DATE ADD(USEC TO TIMESTAMP(NOW()), -30, 'MINUTE')/1000) Replace <time1> and <time2> in the following query: #legacySQL SELECT COUNT ( ) FROM [ PROJECT ID:DATASET.TABLE@time1-time2 ] Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Examples To get the historical data for a table at one hour ago: Relative value example legacySQL SELECT COUNT( ) FROM [PROJECT ID:DATASET.TABLE@-3600000] Absolute value example Get <time> for one hour ago: legacySQL SELECT INTEGER(DATE ADD(USEC TO TIMESTAMP(NOW()), -1, 'HOUR')/1000) Then, replace <time> in the following query: #legacySQL SELECT COUNT ( ) FROM [ PROJECT ID:DATASET.TABLE@time ] Range decorators Syntax @ <time1> - <time2> References table data added between <time1> and <time2> , in milliseconds since the epoch. <time1> and <time2> must be within the last seven days. <time2> is optional and defaults to 'now'.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 25
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery Storage API enforces row- and column-level governance policies on all data access to BigLake tables, including through connectors.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to run a cross-cloud join: bigquery.jobs.create bigquery.tables.getData You might also be able to get these permissions with custom roles or other predefined roles .
- Supported data stores You can use BigLake tables with the following data stores: Amazon S3 by using BigQuery Omni Blob Storage by using BigQuery Omni Cloud Storage Temporary table support BigLake tables based on Cloud Storage can be temporary or permanent.
- You can reference BigLake tables anywhere in a SELECT statement as if they were standard BigQuery tables, including in data manipulation language (DML) and data definition language (DDL) statements that use subqueries to retrieve data.

