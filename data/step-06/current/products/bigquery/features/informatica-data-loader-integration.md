---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.686Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Informatica Data Loader integration"
feature_slug: "informatica-data-loader-integration"
latest_feature_date: "2022-05-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-load-append"
keywords:
  - "informatica"
  - "loader"
  - "integration"
  - "connectors"
  - "can"
  - "load"
  - "into"
  - "bigquery"
---

# Informatica Data Loader integration

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Informatica Data Loader connectors can load data into BigQuery.

## Extended Definition

Informatica Data Loader connectors can load data into BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-load-append](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-load-append)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Partner references BigQuery as a source in Hevo Load Data from Shopify to BigQuery in Minutes Build Your Single Source of Truth with BigQuery Partner Advantage page Direct link Hightouch Solution Hightouch Reverse ETL Category ETL & Data Integration Description Hightouch is the easiest way to sync customer data from a data warehouse into tools like CRMs, email, and ad networks.
- Partner references Bed Bath & Beyond uses Nexla for rapid data replication into BigQuery Top national retail chain uses Nexla Partner Advantage page Direct link Portable Solution Portable ETL Category ETL & Data Integration Description A cloud-based ELT (Extract, Load, Transform) platform that enables no-code data pipeline creation.
- The solution involves the following steps: Get the data Connect Analyze Automate Partner references Move your marketing data into BigQuery The easiest way to move data from your Google BigQuery warehouse Supermetrics for BigQuery: Overview Supermetrics for BigQuery (video tutorial) Partner Advantage page Direct link Tableau Solution Tableau Prep Builder Category ETL & Data Integration Description Tableau Prep Builder is a tool in the Tableau product suite designed to make preparing your data easy and intuitive.
- Partner references Move your data to BigQuery with millisecond latency BigQuery materialization connector BigQuery Batch Query Connector Partner Advantage page Direct link Fivetran Fivetran Data Pipelines Solution Fivetran Data Pipelines Category ETL & Data Integration Description Fivetran is a leader in automated data integration and delivers ready-to-use connectors that automatically adapt as schemas and APIs change, ensuring consistent, reliable access to data.

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- CsvOptions csvOptions = CsvOptions . newBuilder (). setSkipLeadingRows ( 1 ). build (); TableId tableId = TableId . of ( datasetName , tableName ); LoadJobConfiguration loadConfig = LoadJobConfiguration . newBuilder ( tableId , sourceUri , csvOptions ). setSchema ( schema ). build (); // Load data from a GCS CSV file into the table Job job = bigquery . create ( JobInfo . of ( loadConfig )); // Blocks until this load table job completes its execution, either failing or succeeding. job = job . waitFor (); if ( job . isDone ()) { System . out . println ( "CSV from GCS successfully added during load append job" ); } else { System . out . println ( "BigQuery was unable to load into the table due to an error:" + job . getStatus (). getError ()); } } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Column not added during load append \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . require "google/cloud/bigquery" def load table gcs csv dataset id = "your dataset id" bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id gcs uri = "gs://cloud-samples-data/bigquery/us-states/us-states.csv" table id = "us states" load job = dataset . load job table id , gcs uri , skip leading : 1 do schema schema . string "name" schema . string "post abbr" end puts "Starting job #{ load job . job id } " load job . wait until done! # Waits for table load to complete. puts "Job finished." table = dataset . table table id puts "Loaded #{ table . rows count } rows to table #{ table . id } " end Loading CSV data into a table that uses column-based time partitioning To load CSV data from Cloud Storage into a BigQuery table that uses column-based time partitioning: Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .
- To replace the rows in an existing table, set the writeDisposition value in the metadata parameter to 'WRITE TRUNCATE' . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); // Instantiate clients const bigquery = new BigQuery (); const storage = new Storage (); / This sample loads the CSV file at https://storage.googleapis.com/cloud-samples-data/bigquery/us-states/us-states.csv TODO(developer): Replace the following lines with the path to your file. / const bucketName = 'cloud-samples-data' ; const filename = 'bigquery/us-states/us-states.csv' ; async function loadCSVFromGCSTruncate () { / Imports a GCS file into a table and overwrites table data if table already exists. / / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Configure the load job.
- For full list of options, see: // https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#JobConfigurationLoad const metadata = { sourceFormat : 'CSV' , skipLeadingRows : 1 , schema : { fields : [ { name : 'name' , type : 'STRING' }, { name : 'post abbr' , type : 'STRING' }, ], }, // Set the write disposition to overwrite existing table data. writeDisposition : 'WRITE TRUNCATE' , location : 'US' , }; // Load data from a Google Cloud Storage file into the table const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . load ( storage . bucket ( bucketName ). file ( filename ), metadata ); // load() waits for the job to finish console . log ( Job ${ job . id } completed. ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .

### Add a column using a load job \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-load-append](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-add-column-load-append)
- Source ID: `site-docs-reference-required-15`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); // Instantiate client const bigquery = new BigQuery (); async function addColumnLoadAppend () { // Adds a new column to a BigQuery table while appending rows via a load job. / TODO(developer): Uncomment the following lines before running the sample. / // const fileName = '/path/to/file.csv'; // const datasetId = 'my dataset'; // const tableId = 'my table'; // In this example, the existing table contains only the 'Name', 'Age', // & 'Weight' columns. 'REQUIRED' fields cannot be added to an existing // schema, so the additional column must be 'NULLABLE'. const schema = 'Name:STRING, Age:INTEGER, Weight:FLOAT, IsMagic:BOOLEAN' ; // Retrieve destination table reference const [ table ] = await bigquery . dataset ( datasetId ). table ( tableId ). get (); const destinationTableRef = table . metadata . tableReference ; // Set load job options const options = { schema : schema , schemaUpdateOptions : [ 'ALLOW FIELD ADDITION' ], writeDisposition : 'WRITE APPEND' , destinationTable : destinationTableRef , }; // Load data from a local file into the table const [ job ] = await bigquery . dataset ( datasetId ) . table ( tableId ) . load ( fileName , options ); console . log ( Job ${ job . id } completed. ); console . log ( 'New Schema:' ); console . log ( job . configuration . load . schema . fields ); // Check the job's status for errors const errors = job . status . errors ; if ( errors && errors . length > 0 ) { throw errors ; } } PHP Before trying this sample, follow the PHP setup instructions in the BigQuery quickstart using client libraries .
- Job job = loadJob . waitFor (); // Check for errors if ( job . isDone () && job . getStatus (). getError () == null ) { System . out . println ( "Column successfully added during load append job" ); } else { System . out . println ( "BigQuery was unable to load into the table due to an error:" + job . getStatus (). getError ()); } } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Column not added during load append \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- JobId jobId = JobId . of ( UUID . randomUUID (). toString ()); Job loadJob = bigquery . create ( JobInfo . newBuilder ( loadJobConfig ). setJobId ( jobId ). build ()); // Load data from a GCS parquet file into the table // Blocks until this load table job completes its execution, either failing or succeeding.
- For more information, see Set up authentication for client libraries . use Google\Cloud\BigQuery\BigQueryClient; / Append a column using a load job. @param string $projectId The project Id of your Google Cloud Project. @param string $datasetId The BigQuery dataset ID. @param string $tableId The BigQuery table ID. / function add column load append( string $projectId, string $datasetId, string $tableId ): void { $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); $dataset = $bigQuery->dataset($datasetId); $table = $dataset->table($tableId); // In this example, the existing table contains only the 'Name' and 'Title'. // A new column 'Description' gets added after load job. $schema = [ 'fields' => [ ['name' => 'name', 'type' => 'string', 'mode' => 'nullable'], ['name' => 'title', 'type' => 'string', 'mode' => 'nullable'], ['name' => 'description', 'type' => 'string', 'mode' => 'nullable'] ] ]; $source = DIR . '/../test/data/test data extra column.csv'; // Set job configs $loadConfig = $table->load(fopen($source, 'r')); $loadConfig->destinationTable($table); $loadConfig->schema($schema); $loadConfig->schemaUpdateOptions(['ALLOW FIELD ADDITION']); $loadConfig->sourceFormat('CSV'); $loadConfig->writeDisposition('WRITE APPEND'); // Run the job with load config $job = $bigQuery->runJob($loadConfig); // Print all the columns $columns = $table->info()['schema']['fields']; printf('The columns in the table are '); foreach ($columns as $column) { printf('%s ', $column['name']); } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .

