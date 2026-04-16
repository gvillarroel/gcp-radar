---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.770Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Hourly time-unit partitioning"
feature_slug: "hourly-time-unit-partitioning"
latest_feature_date: "2020-09-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-auth-drive-scope"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-multiple-source"
keywords:
  - "hourly"
  - "time"
  - "unit"
  - "partitioning"
  - "bigquery"
  - "supports"
  - "creating"
  - "partitions"
---

# Hourly time-unit partitioning

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports creating time-unit partitions with hourly granularity; BigQuery supports creating partitioned tables with hourly time-unit granularity.

## Extended Definition

BigQuery supports creating time-unit partitions with hourly granularity; BigQuery supports creating partitioned tables with hourly time-unit granularity.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-auth-drive-scope](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-auth-drive-scope)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-multiple-source](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-multiple-source)

## Supporting Pages

### Copy multiple tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-multiple-source](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-multiple-source)
- Source ID: `site-docs-reference-required-15`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function copyTableMultipleSource () { // Copy multiple source tables to a given destination. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // sourceTable = 'my table'; // destinationTable = 'testing'; // Create a client const dataset = bigquery . dataset ( datasetId ); const metadata = { createDisposition : 'CREATE NEVER' , writeDisposition : 'WRITE TRUNCATE' , }; // Create table references const table = dataset . table ( sourceTable ); const yourTable = dataset . table ( destinationTable ); // Copy table const [ apiResponse ] = await table . copy ( yourTable , metadata ); console . log ( apiResponse . configuration . copy ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId destinationTable = TableId . of ( destinationDatasetName , destinationTableId ); TableId sourceTable1 = TableId . of ( destinationDatasetName , sourceTable1Id ); TableId sourceTable2 = TableId . of ( destinationDatasetName , sourceTable2Id ); // For more information on CopyJobConfiguration see: // https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/bigquery/JobConfiguration.html CopyJobConfiguration configuration = CopyJobConfiguration . newBuilder ( destinationTable , Arrays . asList ( sourceTable1 , sourceTable2 )) . build (); // For more information on Job see: // https://googleapis.dev/java/google-cloud-clients/latest/index.html?com/google/cloud/bigquery/package-summary.html Job job = bigquery . create ( JobInfo . of ( configuration )); // Blocks until this job completes its execution, either failing or succeeding.
- Job completedJob = job . waitFor (); if ( completedJob == null ) { System . out . println ( "Job not executed since it no longer exists." ); return ; } else if ( completedJob . getStatus (). getError () != null ) { System . out . println ( "BigQuery was unable to copy tables due to an error: \n" + job . getStatus (). getError ()); return ; } System . out . println ( "Table copied successfully." ); } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Table copying job was interrupted. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // copyMultiTable demonstrates using a copy job to copy multiple source tables into a single destination table. func copyMultiTable ( projectID , srcDatasetID string , srcTableIDs [] string , dstDatasetID , dstTableID string ) error { // projectID := "my-project-id" // srcDatasetID := "sourcedataset" // srcTableIDs := []string{"table1","table2"} // dstDatasetID = "destinationdataset" // dstTableID = "destinationtable" ctx := context .

### Create credentials with scopes \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-auth-drive-scope](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-auth-drive-scope)
- Source ID: `site-docs-reference-required-15`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are using credentials from gcloud, you must authorize the application first with the following command: gcloud auth application-default login \ --scopes=https://www.googleapis.com/auth/drive,https://www.googleapis.com/auth/cloud-platform credentials , project = google . auth . default ( scopes = [ "https://www.googleapis.com/auth/drive" , "https://www.googleapis.com/auth/cloud-platform" , ] ) Construct a BigQuery client object. client = bigquery .
- GoogleCredentials credentials = ServiceAccountCredentials . getApplicationDefault () . createScoped ( ImmutableSet . of ( "https://www.googleapis.com/auth/bigquery" , "https://www.googleapis.com/auth/drive" )); // Initialize client that will be used to send requests.
- BigQuery bigquery = BigQueryOptions . newBuilder (). setCredentials ( credentials ). build (). getService (); Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery import google.auth Create credentials with Drive & BigQuery API scopes.

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Select daily, hourly, monthly, or yearly partitioning When you partition a table by time-unit column or ingestion time, you choose whether the partitions have daily, hourly, monthly, or yearly granularity.
- Ingestion time partitioning When you create a table partitioned by ingestion time, BigQuery automatically assigns rows to partitions based on the time when BigQuery ingests the data.
- For example, suppose that you create an ingestion-time partitioned table with hourly partitioning and send data at the following times: Ingestion time PARTITIONTIME Partition (hourly) 2021-05-07 17:22:00 2021-05-07 17:00:00 2021050717 2021-05-07 17:40:00 2021-05-07 17:00:00 2021050717 2021-05-07 18:31:00 2021-05-07 18:00:00 2021050718 Because the table in this example uses hourly partitioning, the value of PARTITIONTIME is truncated to an hour boundary.
- If you insert the following values into the table, the rows are written to the following partitions: Column value Partition (monthly) DATETIME("2019-01-01") 201901 DATETIME("2019-01-15") 201901 DATETIME("2019-04-30") 201904 In addition, two special partitions are created: NULL : Contains rows with NULL values in the partitioning column.

