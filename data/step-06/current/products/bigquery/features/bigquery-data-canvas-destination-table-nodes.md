---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.289Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery data canvas destination table nodes"
feature_slug: "bigquery-data-canvas-destination-table-nodes"
latest_feature_date: "2025-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-browse-table"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-query-natality-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek"
keywords:
  - "bigquery"
  - "canvas"
  - "destination"
  - "table"
  - "nodes"
  - "supports"
  - "persisting"
  - "query"
---

# BigQuery data canvas destination table nodes

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery data canvas supports destination table nodes for persisting query results to new or existing tables.

## Extended Definition

BigQuery data canvas supports destination table nodes for persisting query results to new or existing tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-browse-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-browse-table)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-query-natality-tutorial](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-query-natality-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek)

## Supporting Pages

### Write to destination table \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-query-natality-tutorial](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-query-natality-tutorial)
- Source ID: `site-docs-reference-required-15`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- As of google-cloud-bigquery 1.11.0, a fully qualified table ID can be used in place of a TableReference. job config . destination = f " { dataset id full } .regression input" Set up a query in Standard SQL, which is the default for the BigQuery Python client library.
- Home Documentation Data analytics BigQuery Samples Write to destination table Stay organized with collections Save and categorize content based on your preferences.
- In the code below, the following actions are taken: A new dataset is created "natality regression." A query is run against the public dataset, bigquery-public-data.samples.natality, selecting only the data of interest to the regression, the output of which is stored in a new "regression input" table.
- The output table is moved over the wire to the user's default project via the built-in BigQuery Connector for Spark that bridges BigQuery and Cloud Dataproc. """ from google.cloud import bigquery Create a new Google BigQuery client using Google Cloud Platform project defaults. client = bigquery .

### Preview table data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-browse-table](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-browse-table)
- Source ID: `site-docs-reference-required-15`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library using default credentials const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function browseTable () { // Retrieve a table's rows using manual pagination. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // Existing dataset // const tableId = 'my table'; // Table to create const query = SELECT name, SUM(number) as total people FROM \bigquery-public-data.usa names.usa 1910 2013\ GROUP BY name ORDER BY total people DESC LIMIT 100 ; // Create table reference. const dataset = bigquery . dataset ( datasetId ); const destinationTable = dataset . table ( tableId ); // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#jobconfigurationquery const queryOptions = { query : query , destination : destinationTable , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( queryOptions ); // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/jobs/getQueryResults const queryResultsOptions = { // Retrieve zero resulting rows. maxResults : 0 , }; // Wait for the job to finish. await job . getQueryResults ( queryResultsOptions ); function manualPaginationCallback ( err , rows , nextQuery ) { rows . forEach ( row = > { console . log ( name: ${ row . name } , ${ row . total people } total people ); }); if ( nextQuery ) { // More results exist. destinationTable . getRows ( nextQuery , manualPaginationCallback ); } } // For all options, see https://cloud.google.com/bigquery/docs/reference/v2/tabledata/list const getRowsOptions = { autoPaginate : false , maxResults : 20 , }; // Retrieve all rows. destinationTable . getRows ( getRowsOptions , manualPaginationCallback ); } browseTable (); PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . use Google\Cloud\BigQuery\BigQueryClient; / Browses the given table for data @param string $projectId The project Id of your Google Cloud Project. @param string $datasetId The BigQuery dataset ID. @param string $tableId The BigQuery table ID. @param int $startIndex Zero-based index of the starting row. / function browse table( string $projectId, string $datasetId, string $tableId, int $startIndex = 0 ): void { // Query options $maxResults = 10; $options = [ 'maxResults' => $maxResults, 'startIndex' => $startIndex ]; $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); $dataset = $bigQuery->dataset($datasetId); $table = $dataset->table($tableId); $numRows = 0; foreach ($table->rows($options) as $row) { print('---'); foreach ($row as $column => $value) { printf('%s: %s' .
- TableResult result = bigquery . listTableData ( tableId , TableDataListOption . pageSize ( 100 )); // Print the records result . iterateAll () . forEach ( row - > { row . forEach ( fieldValue - > System . out . print ( fieldValue . toString () + ", " )); System . out . println (); }); System . out . println ( "Query ran successfully" ); } catch ( BigQueryException e ) { System . out . println ( "Query failed to run \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . require "google/cloud/bigquery" def browse table bigquery = Google :: Cloud :: Bigquery . new project id : "bigquery-public-data" dataset = bigquery . dataset "samples" table = dataset . table "shakespeare" Load all rows from a table rows = table . data Load the first 10 rows rows = table . data max : 10 Print row data rows . each { row puts row } end What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .

### "Copy a table with customer-managed encryption keys (CMEK) \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek)
- Source ID: `site-docs-reference-required-15`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); TableId sourceTable = TableId . of ( sourceDatasetName , sourceTableId ); TableId destinationTable = TableId . of ( destinationDatasetName , destinationTableId ); // For more information on CopyJobConfiguration see: // https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/bigquery/JobConfiguration.html CopyJobConfiguration configuration = CopyJobConfiguration . newBuilder ( destinationTable , sourceTable ) . setDestinationEncryptionConfiguration ( encryption ) . build (); // For more information on Job see: // https://googleapis.dev/java/google-cloud-clients/latest/index.html?com/google/cloud/bigquery/package-summary.html Job job = bigquery . create ( JobInfo . of ( configuration )); // Blocks until this job completes its execution, either failing or succeeding.
- Job completedJob = job . waitFor (); if ( completedJob == null ) { System . out . println ( "Job not executed since it no longer exists." ); return ; } else if ( completedJob . getStatus (). getError () != null ) { System . out . println ( "BigQuery was unable to copy table due to an error: \n" + job . getStatus (). getError ()); return ; } System . out . println ( "Table cmek copied successfully." ); } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Table cmek copying job was interrupted. \n" + e . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // copyTableWithCMEK demonstrates creating a copy of a table and ensuring the copied data is // protected with a customer managed encryption key. func copyTableWithCMEK ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- Home Documentation Data analytics BigQuery Samples Copy a table with customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.

