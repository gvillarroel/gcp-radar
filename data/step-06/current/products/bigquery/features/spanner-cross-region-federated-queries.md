---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.310Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Spanner cross-region federated queries"
feature_slug: "spanner-cross-region-federated-queries"
latest_feature_date: "2025-08-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-multiple-source"
  - "https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/continuous-queries"
keywords:
  - "spanner"
  - "cross"
  - "region"
  - "federated"
  - "queries"
  - "bigquery"
  - "supports"
  - "against"
---

# Spanner cross-region federated queries

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports cross-region federated queries against Spanner tables outside the source BigQuery region.

## Extended Definition

BigQuery supports cross-region federated queries against Spanner tables outside the source BigQuery region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-multiple-source](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-multiple-source)
- [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)

## Supporting Pages

### Copy multiple tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-multiple-source](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-multiple-source)
- Source ID: `site-docs-reference-required-15`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function copyTableMultipleSource () { // Copy multiple source tables to a given destination. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // sourceTable = 'my table'; // destinationTable = 'testing'; // Create a client const dataset = bigquery . dataset ( datasetId ); const metadata = { createDisposition : 'CREATE NEVER' , writeDisposition : 'WRITE TRUNCATE' , }; // Create table references const table = dataset . table ( sourceTable ); const yourTable = dataset . table ( destinationTable ); // Copy table const [ apiResponse ] = await table . copy ( yourTable , metadata ); console . log ( apiResponse . configuration . copy ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId destinationTable = TableId . of ( destinationDatasetName , destinationTableId ); TableId sourceTable1 = TableId . of ( destinationDatasetName , sourceTable1Id ); TableId sourceTable2 = TableId . of ( destinationDatasetName , sourceTable2Id ); // For more information on CopyJobConfiguration see: // https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/bigquery/JobConfiguration.html CopyJobConfiguration configuration = CopyJobConfiguration . newBuilder ( destinationTable , Arrays . asList ( sourceTable1 , sourceTable2 )) . build (); // For more information on Job see: // https://googleapis.dev/java/google-cloud-clients/latest/index.html?com/google/cloud/bigquery/package-summary.html Job job = bigquery . create ( JobInfo . of ( configuration )); // Blocks until this job completes its execution, either failing or succeeding.
- Job completedJob = job . waitFor (); if ( completedJob == null ) { System . out . println ( "Job not executed since it no longer exists." ); return ; } else if ( completedJob . getStatus (). getError () != null ) { System . out . println ( "BigQuery was unable to copy tables due to an error: \n" + job . getStatus (). getError ()); return ; } System . out . println ( "Table copied successfully." ); } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Table copying job was interrupted. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // copyMultiTable demonstrates using a copy job to copy multiple source tables into a single destination table. func copyMultiTable ( projectID , srcDatasetID string , srcTableIDs [] string , dstDatasetID , dstTableID string ) error { // projectID := "my-project-id" // srcDatasetID := "sourcedataset" // srcTableIDs := []string{"table1","table2"} // dstDatasetID = "destinationdataset" // dstTableID = "destinationtable" ctx := context .

### Introduction to continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- When exporting data to Bigtable, Spanner, or Pub/Sub locational endpoints you can only target Bigtable, Spanner, or Pub/Sub resources that fall within the same Google Cloud regional boundary as the BigQuery dataset that contains the table you are querying.
- You can't use the following SQL capabilities in a continuous query, unless they are listed as a supported stateful operation : The following query operators: PIVOT UNPIVOT TABLESAMPLE Query set operators The SELECT DISTINCT statement EXISTS or NOT EXISTS subqueries Recursive CTEs User-defined functions Window function calls BigQuery ML functions other than those listed in Supported functionality Data definition language (DDL) statements Data manipulation language (DML) statements except for INSERT .
- Writes from the results of a batch query to a permanent table Writes from the results of a BigQuery continuous query to a permanent table A Pub/Sub BigQuery subscription Writes from Dataflow to BigQuery Writes from Datastream to BigQuery using append-only write mode You can use continuous queries to perform time-sensitive tasks, such as creating and immediately acting on insights, applying real-time machine learning (ML) inference, and replicating data into other platforms.
- Continuous queries can process data that has been written to standard BigQuery tables by using one of the following methods: The BigQuery Storage Write API The tabledata.insertAll method Batch load The INSERT DML statement Mutating data manipulation language (DML) statements such as DELETE , UPDATE , and MERGE when exporting data to Pub/Sub .

### Create continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-queries](https://docs.cloud.google.com/bigquery/docs/continuous-queries)
- Source ID: `site-docs-reference-5`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Continuous queries let you analyze incoming data in BigQuery in real time, and then either export the results to Bigtable, Pub/Sub, or Spanner, or write the results to a BigQuery table.
- CURRENT TIMESTAMP () - INTERVAL 10 MINUTE ) WHERE ride status = 'enroute' ); Export data to a Spanner table The following example shows a continuous query that filters data from a BigQuery table that is receiving streaming taxi ride information, and then exports the data into a Spanner table in real time: EXPORT DATA OPTIONS ( format = 'CLOUD SPANNER' , uri = 'https://spanner.googleapis.com/projects/myproject/instances/myspannerinstance/databases/taxi-real-time-rides' , spanner options = " "" { " table ": " rides ", -- To ensure data is written to Spanner in the correct sequence -- during a continuous export, use the change timestamp column -- option.
- Stateful processing with JOIN s and windowing aggregations Stateful operations let continuous queries perform complex analysis by retaining information across multiple rows or time intervals.
- Although BigQuery handles some transient errors, best practices for improving job resiliency include the following: Monitor continuous queries .

