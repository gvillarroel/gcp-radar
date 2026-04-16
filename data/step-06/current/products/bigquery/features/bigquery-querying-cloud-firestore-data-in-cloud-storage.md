---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.849Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery querying Cloud Firestore data in Cloud Storage"
feature_slug: "bigquery-querying-cloud-firestore-data-in-cloud-storage"
latest_feature_date: "2018-08-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro"
  - "https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer"
keywords:
  - "bigquery"
  - "querying"
  - "firestore"
  - "storage"
  - "supports"
  - "stored"
---

# BigQuery querying Cloud Firestore data in Cloud Storage

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports querying Cloud Firestore data stored in Cloud Storage.

## Extended Definition

BigQuery supports querying Cloud Firestore data stored in Cloud Storage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)
- [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer)

## Supporting Pages

### Load Cloud Storage data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer)
- Source ID: `site-api-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to create google cloud storage transfer config public class CreateCloudStorageTransfer { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String projectId = "MY PROJECT ID" ; String datasetId = "MY DATASET ID" ; String tableId = "MY TABLE ID" ; // GCS Uri String sourceUri = "gs://cloud-samples-data/bigquery/us-states/us-states.csv" ; String fileFormat = "CSV" ; String fieldDelimiter = "," ; String skipLeadingRows = "1" ; Map<String , Value > params = new HashMap <> (); params . put ( "destination table name template" , Value . newBuilder (). setStringValue ( tableId ). build ()); params . put ( "data path template" , Value . newBuilder (). setStringValue ( sourceUri ). build ()); params . put ( "write disposition" , Value . newBuilder (). setStringValue ( "APPEND" ). build ()); params . put ( "file format" , Value . newBuilder (). setStringValue ( fileFormat ). build ()); params . put ( "field delimiter" , Value . newBuilder (). setStringValue ( fieldDelimiter ). build ()); params . put ( "skip leading rows" , Value . newBuilder (). setStringValue ( skipLeadingRows ). build ()); TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( datasetId ) . setDisplayName ( "Your Google Cloud Storage Config Name" ) . setDataSourceId ( "google cloud storage" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . setSchedule ( "every 24 hours" ) . build (); createCloudStorageTransfer ( projectId , transferConfig ); } public static void createCloudStorageTransfer ( String projectId , TransferConfig transferConfig ) throws IOException { try ( DataTransferServiceClient client = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = client . createTransferConfig ( request ); System . out . println ( "Cloud storage transfer created successfully :" + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Cloud storage transfer was not created." + ex . toString ()); } } } Specify encryption key with transfers You can specify customer-managed encryption keys (CMEKs) to encrypt data for a transfer run.
- Limitations Recurring data transfers from Cloud Storage to BigQuery are subject to the following limitations: All files matching the patterns defined by either a wildcard or by runtime parameters for your data transfer must share the same schema you defined for the destination table, or the transfer will fail.
- For information about how CMEKs work with the BigQuery Data Transfer Service, see Specify encryption key with transfers . --service account name : Specifies a service account to use for Cloud Storage transfer authentication instead of your user account.
- For information about how the BigQuery Data Transfer Service appends or mirrors data in Cloud Storage transfers, see Data ingestion for Cloud Storage transfers . file format : the format of the files that you want to transfer.

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- CSV , skip leading rows = 1 , ) uri = "gs://cloud-samples-data/bigquery/us-states/us-states.csv" load job = client . load table from uri ( uri , table id , job config = job config ) # Make an API request. load job . result () # Waits for the job to complete. destination table = client . get table ( table id ) print ( "Loaded {} rows." . format ( destination table . num rows )) Loading hive-partitioned CSV data BigQuery supports loading hive-partitioned CSV data stored on Cloud Storage and will populate the hive partitioning columns as columns in the destination BigQuery managed table.
- For more information, see Set up authentication for client libraries . require "google/cloud/bigquery" def load table gcs csv dataset id = "your dataset id" bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id gcs uri = "gs://cloud-samples-data/bigquery/us-states/us-states.csv" table id = "us states" load job = dataset . load job table id , gcs uri , skip leading : 1 do schema schema . string "name" schema . string "post abbr" end puts "Starting job #{ load job . job id } " load job . wait until done! # Waits for table load to complete. puts "Job finished." table = dataset . table table id puts "Loaded #{ table . rows count } rows to table #{ table . id } " end Loading CSV data into a table that uses column-based time partitioning To load CSV data from Cloud Storage into a BigQuery table that uses column-based time partitioning: Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . use Google\Cloud\BigQuery\BigQueryClient; use Google\Cloud\Core\ExponentialBackoff; / Uncomment and populate these variables in your code / // $projectId = 'The Google project ID'; // $datasetId = 'The BigQuery dataset ID'; // instantiate the bigquery table service $bigQuery = new BigQueryClient([ 'projectId' => $projectId, ]); $dataset = $bigQuery->dataset($datasetId); $table = $dataset->table('us states'); // create the import job $gcsUri = 'gs://cloud-samples-data/bigquery/us-states/us-states.csv'; $schema = [ 'fields' => [ ['name' => 'name', 'type' => 'string'], ['name' => 'post abbr', 'type' => 'string'] ] ]; $loadConfig = $table->loadFromStorage($gcsUri)->schema($schema)->skipLeadingRows(1); $job = $table->runJob($loadConfig); // poll the job until it is complete $backoff = new ExponentialBackoff(10); $backoff->execute(function () use ($job) { print('Waiting for job to complete' .
- To replace the rows in an existing table, set the writeDisposition value in the metadata parameter to 'WRITE TRUNCATE' . // Import the Google Cloud client libraries const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const { Storage } = require ( ' @google-cloud/storage ' ); // Instantiate clients const bigquery = new BigQuery (); const storage = new Storage (); / This sample loads the CSV file at https://storage.googleapis.com/cloud-samples-data/bigquery/us-states/us-states.csv TODO(developer): Replace the following lines with the path to your file. / const bucketName = 'cloud-samples-data' ; const filename = 'bigquery/us-states/us-states.csv' ; async function loadCSVFromGCSTruncate () { / Imports a GCS file into a table and overwrites table data if table already exists. / / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; // Configure the load job.

### Introduction to data masking \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro](https://docs.cloud.google.com/bigquery/docs/column-data-masking-intro)
- Source ID: `site-docs-reference-5`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Custom masking routines Custom masking routines are subject to the following limitations: Custom data masking supports all BigQuery data types except STRUCT , because data masking can only apply to leaf fields of the STRUCT data type.
- Roles for querying masked data You need the BigQuery Masked Reader role to query the data from a column that has data masking applied.
- This rule, by design, supports all BigQuery data types except for the STRUCT data type.
- Data masking policies are enforced in the BigQuery Storage Read API.

