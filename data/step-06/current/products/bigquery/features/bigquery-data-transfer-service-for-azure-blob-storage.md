---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.628Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service for Azure Blob Storage"
feature_slug: "bigquery-data-transfer-service-for-azure-blob-storage"
latest_feature_date: "2023-02-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters"
keywords:
  - "bigquery"
  - "transfer"
  - "azure"
  - "blob"
  - "storage"
  - "can"
  - "into"
---

# BigQuery Data Transfer Service for Azure Blob Storage

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery Data Transfer Service can transfer data from Azure Blob Storage into BigQuery.

## Extended Definition

The BigQuery Data Transfer Service can transfer data from Azure Blob Storage into BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters)

## Supporting Pages

### "Introduction to Blob Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- Source ID: `site-api-reference`
- Final score: 305
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Introduction to Blob Storage transfers The BigQuery Data Transfer Service for Azure Blob Storage lets you automatically schedule and manage recurring load jobs from Azure Blob Storage and Azure Data Lake Storage Gen2 into BigQuery.
- Data ingestion for Azure Blob transfers You can specify how data is loaded into BigQuery by selecting a Write Preference in the transfer configuration when you set up an Azure Blob transfer .
- This distinction could increase Blob Storage egress costs for files that are transferred to Google Cloud but not loaded into BigQuery.
- Quotas and limits The BigQuery Data Transfer Service uses load jobs to load Blob Storage data into BigQuery.

### "Runtime parameters in Blob Storage transfers \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters)
- Source ID: `site-api-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data source Parameterized URI or data path Parameterized destination table name Evaluated URI or data path Evaluated destination table name Cloud Storage gs://bucket/events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } gs://bucket/events-20180215/ .csv mytable$20180215 Amazon S3 s3://bucket/events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } s3://bucket/events-20180215/ .csv mytable$20180215 Blob Storage events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } events-20180215/ .csv mytable$20180215 What's next Learn more about setting up an Azure Blob Storage transfer .
- Data source Source URI or data path Parameterized destination table name Evaluated destination table name Cloud Storage gs://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Amazon S3 s3://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Blob Storage .csv mytable${ run time "%Y%m%d" } mytable$20180215 This use case transfers today's data into a table partitioned on today's date.
- Data source Source URI or data path Destination table name Cloud Storage gs://bucket/ .csv mytable Amazon S3 s3://bucket/ .csv mytable Blob Storage .csv mytable Load a snapshot of all data into an ingestion-time partitioned table In this case, all data in the specified URI or data path is transferred to a table partitioned by today's date.
- Runtime parameters in Blob Storage transfers When you set up a data transfer in Cloud Storage, Azure Blob Storage, or Amazon Simple Storage Service (Amazon S3), you can parameterize the URI (or data path) and the destination table.

### Load Blob Storage data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer)
- Source ID: `site-api-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Load Blob Storage data into BigQuery You can load data from Blob Storage to BigQuery using the BigQuery Data Transfer Service for Blob Storage connector.
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to create azure blob storage transfer config. public class CreateAzureBlobStorageTransfer { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String projectId = "MY PROJECT ID" ; final String displayName = "MY TRANSFER DISPLAY NAME" ; final String datasetId = "MY DATASET ID" ; String tableId = "MY TABLE ID" ; String storageAccount = "MY AZURE STORAGE ACCOUNT NAME" ; String containerName = "MY AZURE CONTAINER NAME" ; String dataPath = "MY AZURE FILE NAME OR PREFIX" ; String sasToken = "MY AZURE SAS TOKEN" ; String fileFormat = "CSV" ; String fieldDelimiter = "," ; String skipLeadingRows = "1" ; Map<String , Value > params = new HashMap <> (); params . put ( "destination table name template" , Value . newBuilder (). setStringValue ( tableId ). build ()); params . put ( "storage account" , Value . newBuilder (). setStringValue ( storageAccount ). build ()); params . put ( "container" , Value . newBuilder (). setStringValue ( containerName ). build ()); params . put ( "data path" , Value . newBuilder (). setStringValue ( dataPath ). build ()); params . put ( "sas token" , Value . newBuilder (). setStringValue ( sasToken ). build ()); params . put ( "file format" , Value . newBuilder (). setStringValue ( fileFormat ). build ()); params . put ( "field delimiter" , Value . newBuilder (). setStringValue ( fieldDelimiter ). build ()); params . put ( "skip leading rows" , Value . newBuilder (). setStringValue ( skipLeadingRows ). build ()); createAzureBlobStorageTransfer ( projectId , displayName , datasetId , params ); } public static void createAzureBlobStorageTransfer ( String projectId , String displayName , String datasetId , Map<String , Value > params ) throws IOException { TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( datasetId ) . setDisplayName ( displayName ) . setDataSourceId ( "azure blob storage" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . setSchedule ( "every 24 hours" ) . build (); // Initialize client that will be used to send requests.
- This client only needs to be created // once, and can be reused for multiple requests. try ( DataTransferServiceClient client = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = client . createTransferConfig ( request ); System . out . println ( "Azure Blob Storage transfer created successfully: " + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Azure Blob Storage transfer was not created." + ex . toString ()); } } } Specify encryption key with transfers You can specify customer-managed encryption keys (CMEKs) to encrypt data for a transfer run.
- For example, the following creates a Blob Storage data transfer called mytransfer : bq mk \ --transfer config \ --data source = azure blob storage \ --display name = mytransfer \ --target dataset = mydataset \ --destination kms key = projects/myproject/locations/us/keyRings/mykeyring/cryptoKeys/key1 --params ={ "destination table name template" : "mytable" , "storage account" : "myaccount" , "container" : "mycontainer" , "data path" : "myfolder/ .csv" , "sas token" : "my sas token value" , "file format" : "CSV" , "max bad records" : "1" , "ignore unknown values" : "true" , "field delimiter" : " " , "skip leading rows" : "1" , "allow quoted newlines" : "true" , "allow jagged rows" : "false" } API Use the projects.locations.transferConfigs.create method and supply an instance of the TransferConfig resource.

