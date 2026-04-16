---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.744Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Parquet ENUM and LIST loading support"
feature_slug: "parquet-enum-and-list-loading-support"
latest_feature_date: "2021-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/batch-loading-data"
  - "https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer"
keywords:
  - "parquet"
  - "enum"
  - "list"
  - "loading"
  - "bigquery"
  - "improves"
  - "supporting"
  - "conversion"
---

# Parquet ENUM and LIST loading support

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery improves Parquet loading by supporting ENUM conversion to STRING or BYTES and schema inference for LIST logical types.

## Extended Definition

BigQuery improves Parquet loading by supporting ENUM conversion to STRING or BYTES and schema inference for LIST logical types.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Use one of the following values: DAY HOUR MONTH YEAR --use avro logical types={true false} If the FORMAT part of the --external table definition flag is set to AVRO , then this flag specifies whether to convert logical types into their corresponding types (such as TIMESTAMP ) instead of only using their raw types (such as INTEGER ). --parquet enable list inference={true false} If the FORMAT part of the --external table definition flag is set to PARQUET , then this flag specifies whether to use schema inference for Parquet LIST logical types. --parquet enum as string={true false} If the FORMAT part of the --external table definition flag is set to PARQUET , then this flag specifies whether to infer Parquet ENUM logical types as STRING values.
- For more information about loading data from Cloud Storage using the bq load command, see the following: Loading Avro data Loading CSV data Loading JSON data Loading ORC data Loading Parquet data Loading data from Datastore exports Loading data from Firestore exports For more information about loading data from a local source using the bq load command, see the following: Loading data from local files . bq ls Use the bq ls command to list objects in a collection.
- Repeat this flag to specify multiple target types. --parquet enum as string={true false} If the --source format flag is set to PARQUET , and you want BigQuery to infer Parquet ENUM logical types as STRING values, then set this flag to true .
- The default is false . --parquet enable list inference={true false} If the --source format flag is set to PARQUET , then this flag indicates whether to use schema inference for Parquet LIST logical types. --reference file schema uri= URI Specifies the path to a reference file with the expected table schema for creating external tables.

### Batch loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-loading-data](https://docs.cloud.google.com/bigquery/docs/batch-loading-data)
- Source ID: `site-docs-reference-5`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- To load a local file of another format, set the format parameter of the Table#load job method to the appropriate format. require "google/cloud/bigquery" def load from file dataset id = "your dataset id" , file path = "path/to/file.csv" bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id table id = "new table id" Infer the config.location based on the location of the referenced dataset. load job = dataset . load job table id , file path do config config . skip leading = 1 config . autodetect = true end load job . wait until done! # Waits for table load to complete. table = dataset . table table id puts "Loaded #{ table . rows count } rows into #{ table . id } " end Limitations Loading data from a local data source is subject to the following limitations: Wildcards and comma-separated lists are not supported when you load files from a local data source.
- Loading data from Cloud Storage BigQuery supports loading data from any of the following Cloud Storage storage classes : Standard Nearline Coldline Archive To learn how to load data into BigQuery, see the page for your data format: CSV JSON Avro Parquet ORC Datastore exports Firestore exports To learn how to configure a recurring load from Cloud Storage into BigQuery, see Cloud Storage transfers .
- Loading compressed and uncompressed data For Avro, Parquet, and ORC formats, BigQuery supports loading files where the file data has been compressed using a supported codec.
- To load a local file of another format, set the DataFormat property of the NewReaderSource to the appropriate format. import ( "context" "fmt" "os" "cloud.google.com/go/bigquery" ) // importCSVFromFile demonstrates loading data into a BigQuery table using a file on the local filesystem. func importCSVFromFile ( projectID , datasetID , tableID , filename string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .

### Load Cloud Storage data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the ignoreUnknownvalues field details in the JobConfigurationLoad reference table . use avro logical types : for AVRO file format values, set to TRUE to interpret logical types into their corresponding types (for example, TIMESTAMP ), instead of only using their raw types (for example, INTEGER ). parquet enum as string : for PARQUET file format values, set to TRUE to infer PARQUET ENUM logical type as STRING instead of the default BYTES . parquet enable list inference : for PARQUET file format values, set to TRUE to use schema inference specifically for PARQUET LIST logical type. reference file schema uri : a URI path to a reference file with the reader schema. field delimiter : for CSV file format values, a character that separates fields.
- Which SQL data type is selected for conversion depends on the following conditions: The data type selected for conversion will be the first data type in the following list that supports the precision and scale of the source data, in this order: NUMERIC , BIGNUMERIC , and STRING .
- If none of the listed data types support the precision and the scale, the data type supporting the widest range in the specified list is selected.
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to create google cloud storage transfer config public class CreateCloudStorageTransfer { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String projectId = "MY PROJECT ID" ; String datasetId = "MY DATASET ID" ; String tableId = "MY TABLE ID" ; // GCS Uri String sourceUri = "gs://cloud-samples-data/bigquery/us-states/us-states.csv" ; String fileFormat = "CSV" ; String fieldDelimiter = "," ; String skipLeadingRows = "1" ; Map<String , Value > params = new HashMap <> (); params . put ( "destination table name template" , Value . newBuilder (). setStringValue ( tableId ). build ()); params . put ( "data path template" , Value . newBuilder (). setStringValue ( sourceUri ). build ()); params . put ( "write disposition" , Value . newBuilder (). setStringValue ( "APPEND" ). build ()); params . put ( "file format" , Value . newBuilder (). setStringValue ( fileFormat ). build ()); params . put ( "field delimiter" , Value . newBuilder (). setStringValue ( fieldDelimiter ). build ()); params . put ( "skip leading rows" , Value . newBuilder (). setStringValue ( skipLeadingRows ). build ()); TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( datasetId ) . setDisplayName ( "Your Google Cloud Storage Config Name" ) . setDataSourceId ( "google cloud storage" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . setSchedule ( "every 24 hours" ) . build (); createCloudStorageTransfer ( projectId , transferConfig ); } public static void createCloudStorageTransfer ( String projectId , TransferConfig transferConfig ) throws IOException { try ( DataTransferServiceClient client = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = client . createTransferConfig ( request ); System . out . println ( "Cloud storage transfer created successfully :" + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Cloud storage transfer was not created." + ex . toString ()); } } } Specify encryption key with transfers You can specify customer-managed encryption keys (CMEKs) to encrypt data for a transfer run.

