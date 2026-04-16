---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.606Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "INSERT INTO SELECT filtering for Amazon S3 and Azure Blob Storage"
feature_slug: "insert-into-select-filtering-for-amazon-s3-and-azure-blob-storage"
latest_feature_date: "2023-05-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro"
keywords:
  - "insert"
  - "into"
  - "select"
  - "filtering"
  - "amazon"
  - "s3"
  - "azure"
  - "blob"
---

# INSERT INTO SELECT filtering for Amazon S3 and Azure Blob Storage

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

INSERT INTO SELECT can filter data from Amazon S3 and Azure Blob Storage files before appending the results into BigQuery tables.

## Extended Definition

INSERT INTO SELECT can filter data from Amazon S3 and Azure Blob Storage files before appending the results into BigQuery tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- For example: --filter "labels.department:marketing labels.team:sales" For transfer configurations, use dataSourceIds as the key, and one of the following data sources as the value: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration For example: --filter labels.dataSourceIds:dcm dt For transfer runs, use states as the key and one or more of the following transfer states as the value: SUCCEEDED FAILED PENDING RUNNING CANCELLED For example: --filter="states:FAILED" For jobs, use states as the key and one or more of the following job states as the value: RUNNING PENDING DONE For example: bq ls --jobs --filter="states:RUNNING" bq ls --jobs --filter="states:RUNNING,PENDING" --jobs={true false} or -j={true false} To list jobs, set to true .
- Use one of the following values: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration Note: The redshift and on premises values are for data migrations; before you use the bq mk --transfer config command with these values, consult the linked documentation from the preceding list. --display name= DISPLAY NAME Specifies the display name for the transfer configuration. --no auto scheduling={true false} Disables automatic scheduling of data transfer runs for this configuration.
- Synopsis bq help [ COMMAND ] Flags and arguments The bq help command uses the following flags and arguments: COMMAND Specifies a particular bq command-line tool command that you want to get online help for. bq insert Use the bq insert command to insert rows of newline-delimited, JSON-formatted data into a table from a file using the streaming insert.
- The default is false . --template suffix= SUFFIX or -x= SUFFIX When specified, treat the destination table TABLE as a base template, and insert the rows into an instance table named {destination}{templateSuffix} .

### Load Blob Storage data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer)
- Source ID: `site-api-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On the Create transfer page, do the following: In the Source type section, for Source , select Azure Blob Storage & ADLS : In the Transfer config name section, for Display name , enter a name for the data transfer.
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to create azure blob storage transfer config. public class CreateAzureBlobStorageTransfer { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String projectId = "MY PROJECT ID" ; final String displayName = "MY TRANSFER DISPLAY NAME" ; final String datasetId = "MY DATASET ID" ; String tableId = "MY TABLE ID" ; String storageAccount = "MY AZURE STORAGE ACCOUNT NAME" ; String containerName = "MY AZURE CONTAINER NAME" ; String dataPath = "MY AZURE FILE NAME OR PREFIX" ; String sasToken = "MY AZURE SAS TOKEN" ; String fileFormat = "CSV" ; String fieldDelimiter = "," ; String skipLeadingRows = "1" ; Map<String , Value > params = new HashMap <> (); params . put ( "destination table name template" , Value . newBuilder (). setStringValue ( tableId ). build ()); params . put ( "storage account" , Value . newBuilder (). setStringValue ( storageAccount ). build ()); params . put ( "container" , Value . newBuilder (). setStringValue ( containerName ). build ()); params . put ( "data path" , Value . newBuilder (). setStringValue ( dataPath ). build ()); params . put ( "sas token" , Value . newBuilder (). setStringValue ( sasToken ). build ()); params . put ( "file format" , Value . newBuilder (). setStringValue ( fileFormat ). build ()); params . put ( "field delimiter" , Value . newBuilder (). setStringValue ( fieldDelimiter ). build ()); params . put ( "skip leading rows" , Value . newBuilder (). setStringValue ( skipLeadingRows ). build ()); createAzureBlobStorageTransfer ( projectId , displayName , datasetId , params ); } public static void createAzureBlobStorageTransfer ( String projectId , String displayName , String datasetId , Map<String , Value > params ) throws IOException { TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( datasetId ) . setDisplayName ( displayName ) . setDataSourceId ( "azure blob storage" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . setSchedule ( "every 24 hours" ) . build (); // Initialize client that will be used to send requests.
- This client only needs to be created // once, and can be reused for multiple requests. try ( DataTransferServiceClient client = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = client . createTransferConfig ( request ); System . out . println ( "Azure Blob Storage transfer created successfully: " + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Azure Blob Storage transfer was not created." + ex . toString ()); } } } Specify encryption key with transfers You can specify customer-managed encryption keys (CMEKs) to encrypt data for a transfer run.
- For example, the following creates a Blob Storage data transfer called mytransfer : bq mk \ --transfer config \ --data source = azure blob storage \ --display name = mytransfer \ --target dataset = mydataset \ --destination kms key = projects/myproject/locations/us/keyRings/mykeyring/cryptoKeys/key1 --params ={ "destination table name template" : "mytable" , "storage account" : "myaccount" , "container" : "mycontainer" , "data path" : "myfolder/ .csv" , "sas token" : "my sas token value" , "file format" : "CSV" , "max bad records" : "1" , "ignore unknown values" : "true" , "field delimiter" : " " , "skip leading rows" : "1" , "allow quoted newlines" : "true" , "allow jagged rows" : "false" } API Use the projects.locations.transferConfigs.create method and supply an instance of the TransferConfig resource.

### "Introduction to Blob Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- Source ID: `site-api-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Data ingestion for Azure Blob transfers You can specify how data is loaded into BigQuery by selecting a Write Preference in the transfer configuration when you set up an Azure Blob transfer .
- Consider the following data path: / .csv Both of the following files are selected: my-folder1/my-file1.csv my-other-folder2/my-file2.csv And neither of the following files are selected: my-folder1/my-subfolder/my-file3.csv my-other-folder2/my-subfolder/my-file4.csv Shared access signature (SAS) The Azure SAS token is used to access Blob Storage data on your behalf.
- Introduction to Blob Storage transfers The BigQuery Data Transfer Service for Azure Blob Storage lets you automatically schedule and manage recurring load jobs from Azure Blob Storage and Azure Data Lake Storage Gen2 into BigQuery.
- Wildcard support for the Blob Storage data path You can select source data that is separated into multiple files by specifying one or more asterisk ( ) wildcard characters in the data path.

