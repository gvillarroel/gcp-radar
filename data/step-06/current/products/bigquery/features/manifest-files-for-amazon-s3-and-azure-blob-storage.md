---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.440Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Manifest files for Amazon S3 and Azure Blob Storage"
feature_slug: "manifest-files-for-amazon-s3-and-azure-blob-storage"
latest_feature_date: "2024-07-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer"
keywords:
  - "manifest"
  - "files"
  - "amazon"
  - "s3"
  - "azure"
  - "blob"
  - "storage"
---

# Manifest files for Amazon S3 and Azure Blob Storage

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Manifest files are supported for data in Amazon S3 and Azure Blob Storage.

## Extended Definition

Manifest files are supported for data in Amazon S3 and Azure Blob Storage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer)

## Supporting Pages

### "Runtime parameters in Blob Storage transfers \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters)
- Source ID: `site-api-reference`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data source Parameterized URI or data path Parameterized destination table name Evaluated URI or data path Evaluated destination table name Cloud Storage gs://bucket/events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } gs://bucket/events-20180215/ .csv mytable$20180215 Amazon S3 s3://bucket/events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } s3://bucket/events-20180215/ .csv mytable$20180215 Blob Storage events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } events-20180215/ .csv mytable$20180215 What's next Learn more about setting up an Azure Blob Storage transfer .
- When you use runtime parameters in a transfer, you can do the following: Specify how you want to partition the destination table Retrieve files that match a particular date Available runtime parameters When you set up the Cloud Storage, Blob Storage, or Amazon S3 transfer, you can specify how you want to partition the destination table by using runtime parameters.
- Runtime parameters in Blob Storage transfers When you set up a data transfer in Cloud Storage, Azure Blob Storage, or Amazon Simple Storage Service (Amazon S3), you can parameterize the URI (or data path) and the destination table.
- Transfer data to a non-partitioned table This use case applies to loading new files from a Cloud Storage, Blob Storage, or Amazon S3 bucket into a non-partitioned table.

### "Introduction to Blob Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Consider the following data path: / .csv Both of the following files are selected: my-folder1/my-file1.csv my-other-folder2/my-file2.csv And neither of the following files are selected: my-folder1/my-subfolder/my-file3.csv my-other-folder2/my-subfolder/my-file4.csv Shared access signature (SAS) The Azure SAS token is used to access Blob Storage data on your behalf.
- Example: Single file To load a single file from Blob Storage into BigQuery, specify the Blob Storage filename: my-folder/my-file.csv Example: All files To load all files from a Blob Storage container into BigQuery, set the data path to a single wildcard: Example: Files with a common prefix To load all files from Blob Storage that share a common prefix, specify the common prefix with or without a wildcard: my-folder/ or my-folder/ Example: Files with a similar path To load all files from Blob Storage with a similar path, specify the common prefix and suffix: my-folder/ .csv When you only use a single wildcard, it spans directories.
- All BigQuery quotas and limits on load jobs apply to recurring Blob Storage transfers, with the following additional considerations: Limit Default Maximum size per load job transfer run 15 TB Maximum number of files per transfer run when the Blob Storage data path includes 0 or 1 wildcards 10,000,000 files Maximum number of files per transfer run when the Blob Storage data path includes 2 or more wildcards 10,000 files What's next Learn more about setting up a Blob Storage transfer .
- Introduction to Blob Storage transfers The BigQuery Data Transfer Service for Azure Blob Storage lets you automatically schedule and manage recurring load jobs from Azure Blob Storage and Azure Data Lake Storage Gen2 into BigQuery.

### Load Blob Storage data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to create azure blob storage transfer config. public class CreateAzureBlobStorageTransfer { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String projectId = "MY PROJECT ID" ; final String displayName = "MY TRANSFER DISPLAY NAME" ; final String datasetId = "MY DATASET ID" ; String tableId = "MY TABLE ID" ; String storageAccount = "MY AZURE STORAGE ACCOUNT NAME" ; String containerName = "MY AZURE CONTAINER NAME" ; String dataPath = "MY AZURE FILE NAME OR PREFIX" ; String sasToken = "MY AZURE SAS TOKEN" ; String fileFormat = "CSV" ; String fieldDelimiter = "," ; String skipLeadingRows = "1" ; Map<String , Value > params = new HashMap <> (); params . put ( "destination table name template" , Value . newBuilder (). setStringValue ( tableId ). build ()); params . put ( "storage account" , Value . newBuilder (). setStringValue ( storageAccount ). build ()); params . put ( "container" , Value . newBuilder (). setStringValue ( containerName ). build ()); params . put ( "data path" , Value . newBuilder (). setStringValue ( dataPath ). build ()); params . put ( "sas token" , Value . newBuilder (). setStringValue ( sasToken ). build ()); params . put ( "file format" , Value . newBuilder (). setStringValue ( fileFormat ). build ()); params . put ( "field delimiter" , Value . newBuilder (). setStringValue ( fieldDelimiter ). build ()); params . put ( "skip leading rows" , Value . newBuilder (). setStringValue ( skipLeadingRows ). build ()); createAzureBlobStorageTransfer ( projectId , displayName , datasetId , params ); } public static void createAzureBlobStorageTransfer ( String projectId , String displayName , String datasetId , Map<String , Value > params ) throws IOException { TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( datasetId ) . setDisplayName ( displayName ) . setDataSourceId ( "azure blob storage" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . setSchedule ( "every 24 hours" ) . build (); // Initialize client that will be used to send requests.
- This client only needs to be created // once, and can be reused for multiple requests. try ( DataTransferServiceClient client = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = client . createTransferConfig ( request ); System . out . println ( "Azure Blob Storage transfer created successfully: " + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Azure Blob Storage transfer was not created." + ex . toString ()); } } } Specify encryption key with transfers You can specify customer-managed encryption keys (CMEKs) to encrypt data for a transfer run.
- For example, the following creates a Blob Storage data transfer called mytransfer : bq mk \ --transfer config \ --data source = azure blob storage \ --display name = mytransfer \ --target dataset = mydataset \ --destination kms key = projects/myproject/locations/us/keyRings/mykeyring/cryptoKeys/key1 --params ={ "destination table name template" : "mytable" , "storage account" : "myaccount" , "container" : "mycontainer" , "data path" : "myfolder/ .csv" , "sas token" : "my sas token value" , "file format" : "CSV" , "max bad records" : "1" , "ignore unknown values" : "true" , "field delimiter" : " " , "skip leading rows" : "1" , "allow quoted newlines" : "true" , "allow jagged rows" : "false" } API Use the projects.locations.transferConfigs.create method and supply an instance of the TransferConfig resource.
- On the Create transfer page, do the following: In the Source type section, for Source , select Azure Blob Storage & ADLS : In the Transfer config name section, for Display name , enter a name for the data transfer.

