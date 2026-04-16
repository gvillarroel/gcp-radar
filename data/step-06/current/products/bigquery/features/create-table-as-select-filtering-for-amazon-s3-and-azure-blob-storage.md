---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.620Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CREATE TABLE AS SELECT filtering for Amazon S3 and Azure Blob Storage"
feature_slug: "create-table-as-select-filtering-for-amazon-s3-and-azure-blob-storage"
latest_feature_date: "2023-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro"
keywords:
  - "create"
  - "table"
  - "select"
  - "filtering"
  - "amazon"
  - "s3"
  - "azure"
  - "blob"
---

# CREATE TABLE AS SELECT filtering for Amazon S3 and Azure Blob Storage

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

CREATE TABLE AS SELECT can filter data from Amazon S3 and Azure Blob Storage files before loading the results into BigQuery tables.

## Extended Definition

CREATE TABLE AS SELECT can filter data from Amazon S3 and Azure Blob Storage files before loading the results into BigQuery tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)

## Supporting Pages

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Create Azure Blob Storage BigLake tables and then query .
- CREATE OR REPLACE TABLE temp table AS ( SELECT l shipmode , l linenumber , l orderkey FROM aws dataset . lineitem WHERE l shipmode IN ( 'AIR' , 'REG AIR' ) AND l commitdate l receiptdate AND l shipdate l commitdate AND l receiptdate >= DATE '1997-01-01' AND l receiptdate DATE '1997-02-01' ); After the temporary table is created, the JOIN operation completes, and the following query is run: SELECT l shipmode , o orderpriority , count ( l linenumber ) AS num lineitems FROM bigquery dataset . orders JOIN temp table ON orders . o orderkey = lineitem . l orderkey GROUP BY l shipmode , o orderpriority ORDER BY l shipmode , o orderpriority ; As another example, consider the following cross-cloud join: SELECT c mktsegment , c name FROM bigquery dataset . customer WHERE c mktsegment = 'BUILDING' UNION ALL SELECT c mktsegment , c name FROM aws dataset . customer WHERE c mktsegment = 'FURNITURE' LIMIT 10 ; In this query, the LIMIT clause is not pushed down to the BigQuery Omni region.
- Supported data stores You can use BigLake tables with the following data stores: Amazon S3 by using BigQuery Omni Blob Storage by using BigQuery Omni Cloud Storage Temporary table support BigLake tables based on Cloud Storage can be temporary or permanent.
- The remote part is converted into a CREATE TABLE AS SELECT (CTAS) operation on the referenced BigLake table in the BigQuery Omni region, which creates a temporary table in your BigQuery region.

### Load Blob Storage data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to create azure blob storage transfer config. public class CreateAzureBlobStorageTransfer { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String projectId = "MY PROJECT ID" ; final String displayName = "MY TRANSFER DISPLAY NAME" ; final String datasetId = "MY DATASET ID" ; String tableId = "MY TABLE ID" ; String storageAccount = "MY AZURE STORAGE ACCOUNT NAME" ; String containerName = "MY AZURE CONTAINER NAME" ; String dataPath = "MY AZURE FILE NAME OR PREFIX" ; String sasToken = "MY AZURE SAS TOKEN" ; String fileFormat = "CSV" ; String fieldDelimiter = "," ; String skipLeadingRows = "1" ; Map<String , Value > params = new HashMap <> (); params . put ( "destination table name template" , Value . newBuilder (). setStringValue ( tableId ). build ()); params . put ( "storage account" , Value . newBuilder (). setStringValue ( storageAccount ). build ()); params . put ( "container" , Value . newBuilder (). setStringValue ( containerName ). build ()); params . put ( "data path" , Value . newBuilder (). setStringValue ( dataPath ). build ()); params . put ( "sas token" , Value . newBuilder (). setStringValue ( sasToken ). build ()); params . put ( "file format" , Value . newBuilder (). setStringValue ( fileFormat ). build ()); params . put ( "field delimiter" , Value . newBuilder (). setStringValue ( fieldDelimiter ). build ()); params . put ( "skip leading rows" , Value . newBuilder (). setStringValue ( skipLeadingRows ). build ()); createAzureBlobStorageTransfer ( projectId , displayName , datasetId , params ); } public static void createAzureBlobStorageTransfer ( String projectId , String displayName , String datasetId , Map<String , Value > params ) throws IOException { TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( datasetId ) . setDisplayName ( displayName ) . setDataSourceId ( "azure blob storage" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . setSchedule ( "every 24 hours" ) . build (); // Initialize client that will be used to send requests.
- For example, the following creates a Blob Storage data transfer called mytransfer : bq mk \ --transfer config \ --data source = azure blob storage \ --display name = mytransfer \ --target dataset = mydataset \ --destination kms key = projects/myproject/locations/us/keyRings/mykeyring/cryptoKeys/key1 --params ={ "destination table name template" : "mytable" , "storage account" : "myaccount" , "container" : "mycontainer" , "data path" : "myfolder/ .csv" , "sas token" : "my sas token value" , "file format" : "CSV" , "max bad records" : "1" , "ignore unknown values" : "true" , "field delimiter" : " " , "skip leading rows" : "1" , "allow quoted newlines" : "true" , "allow jagged rows" : "false" } API Use the projects.locations.transferConfigs.create method and supply an instance of the TransferConfig resource.
- On the Create transfer page, do the following: In the Source type section, for Source , select Azure Blob Storage & ADLS : In the Transfer config name section, for Display name , enter a name for the data transfer.
- This client only needs to be created // once, and can be reused for multiple requests. try ( DataTransferServiceClient client = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = client . createTransferConfig ( request ); System . out . println ( "Azure Blob Storage transfer created successfully: " + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Azure Blob Storage transfer was not created." + ex . toString ()); } } } Specify encryption key with transfers You can specify customer-managed encryption keys (CMEKs) to encrypt data for a transfer run.

### "Introduction to Blob Storage transfers \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-intro)
- Source ID: `site-api-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- To create a SAS token using Azure Portal, do the following: For Allowed services , select Blob .
- Consider the following data path: / .csv Both of the following files are selected: my-folder1/my-file1.csv my-other-folder2/my-file2.csv And neither of the following files are selected: my-folder1/my-subfolder/my-file3.csv my-other-folder2/my-subfolder/my-file4.csv Shared access signature (SAS) The Azure SAS token is used to access Blob Storage data on your behalf.
- Data ingestion for Azure Blob transfers You can specify how data is loaded into BigQuery by selecting a Write Preference in the transfer configuration when you set up an Azure Blob transfer .
- Introduction to Blob Storage transfers The BigQuery Data Transfer Service for Azure Blob Storage lets you automatically schedule and manage recurring load jobs from Azure Blob Storage and Azure Data Lake Storage Gen2 into BigQuery.

