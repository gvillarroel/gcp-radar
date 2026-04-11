---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.810Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery TRUNCATE TABLE statement"
feature_slug: "bigquery-truncate-table-statement"
latest_feature_date: "2020-10-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/data-manipulation-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
keywords:
  - "clear table data"
  - "table truncation"
  - "TRUNCATE TABLE command"
  - "TRUNCATE TABLE statement"
  - "TRUNCATE TABLE"
  - "DDL table operation"
  - "TRUNCATE"
---

# BigQuery TRUNCATE TABLE statement

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports the TRUNCATE TABLE statement.

## Extended Definition

BigQuery now supports the TRUNCATE TABLE statement.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)

## Supporting Pages

### "Transform data with data manipulation language (DML) \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: STRONG
- Re-rank rationale: The page lists TRUNCATE as a supported DML statement and explains how recently written rows interact with TRUNCATE and other DML.

Evidence snippets:
- Inventory WHERE quantity = 0 /+-------------------+----------+ product quantity +-------------------+----------+ almond milk 20 chai 5 coffee beans 30 matcha 20 oat milk 30 whole milk 10 +-------------------+----------+/ To delete all rows in a table, use the TRUNCATE TABLE statement instead.
- Rows that were recently written using the tabledata.insertall streaming method can't be modified with data manipulation language (DML), such as UPDATE , DELETE , MERGE , or TRUNCATE statements.
- TRUNCATE statement Use the TRUNCATE statement to remove all rows from a table, but leave the table metadata intact, including table schema, description, and labels.
- Alternatively, rows that were recently written using the Storage Write API can be modified using UPDATE , DELETE , MERGE , or TRUNCATE statements.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Note: To remove all rows from a table without deleting the schema, use the TRUNCATE TABLE statement. --require cache={true false} If specified, then run the query only if results can be retrieved from the cache. --require partition filter={true false} If specified, then a partition filter is required for queries over the supplied table.
- Note: You can use the TRUNCATE TABLE statement to remove all rows from a table without deleting the schema. --schema={ SCHEMA FILE SCHEMA } Specifies either the path to a local JSON schema file or a comma-separated list of column definitions in the form FIELD : DATA TYPE , FIELD : DATA TYPE .
- Equivalent to the WRITE TRUNCATE value for JobConfigurationLoad.writeDisposition .

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- To replace the rows in an existing table, set the writeDisposition value in the metadata parameter to 'WRITE TRUNCATE' . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); // Instantiate clients const bigquery = new BigQuery (); const storage = new Storage (); / This sample loads the CSV file at https://storage.googleapis.com/cloud-samples-data/bigquery/us-states/us-states.csv TODO(developer): Replace the following lines with the path to your file. / const bucketName = 'cloud-samples-data' ; const filename = 'bigquery/us-states/us-states.csv' ; async function loadCSVFromGCSTruncate () { / Imports a GCS file into a table and overwrites table data if table already exists. / / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Configure the load job.
- For full list of options, see: // https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#JobConfigurationLoad const metadata = { sourceFormat : 'CSV' , skipLeadingRows : 1 , schema : { fields : [ { name : 'name' , type : 'STRING' }, { name : 'post abbr' , type : 'STRING' }, ], }, // Set the write disposition to overwrite existing table data. writeDisposition : 'WRITE TRUNCATE' , location : 'US' , }; // Load data from a Google Cloud Storage file into the table const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . load ( storage . bucket ( bucketName ). file ( filename ), metadata ); // load() waits for the job to finish console . log ( Job ${ job . id } completed. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . use Google\Cloud\BigQuery\BigQueryClient; use Google\Cloud\Core\ExponentialBackoff; / Uncomment and populate these variables in your code / // $projectId = 'The Google project ID'; // $datasetId = 'The BigQuery dataset ID'; // $tableId = 'The BigQuery table ID'; // instantiate the bigquery table service $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); $table = $bigQuery->dataset($datasetId)->table($tableId); // create the import job $gcsUri = 'gs://cloud-samples-data/bigquery/us-states/us-states.csv'; $loadConfig = $table->loadFromStorage($gcsUri)->skipLeadingRows(1)->writeDisposition('WRITE TRUNCATE'); $job = $table->runJob($loadConfig); // poll the job until it is complete $backoff = new ExponentialBackoff(10); $backoff->execute(function () use ($job) { print('Waiting for job to complete' .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // importCSVTruncate demonstrates loading data from CSV data in Cloud Storage and overwriting/truncating // data in the existing table. func importCSVTruncate ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .

