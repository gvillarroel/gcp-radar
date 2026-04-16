---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.343Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Event-driven Cloud Storage to BigQuery transfers"
feature_slug: "event-driven-cloud-storage-to-bigquery-transfers"
latest_feature_date: "2025-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters"
  - "https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters"
keywords:
  - "event"
  - "driven"
  - "storage"
  - "bigquery"
  - "transfers"
  - "can"
  - "run"
  - "automatically"
---

# Event-driven Cloud Storage to BigQuery transfers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Transfers from Cloud Storage to BigQuery can run automatically when data is added or modified in a bucket.

## Extended Definition

Transfers from Cloud Storage to BigQuery can run automatically when data is added or modified in a bucket.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer)
- [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters)
- [https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters)

## Supporting Pages

### Load Cloud Storage data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer](https://docs.cloud.google.com/bigquery/docs/cloud-storage-transfer)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- You can set up an Event driven transfer to automatically schedule data transfers at lower intervals.
- Value ; import java.io.IOException ; import java.util.HashMap ; import java.util.Map ; // Sample to create google cloud storage transfer config public class CreateCloudStorageTransfer { public static void main ( String [] args ) throws IOException { // TODO(developer): Replace these variables before running the sample. final String projectId = "MY PROJECT ID" ; String datasetId = "MY DATASET ID" ; String tableId = "MY TABLE ID" ; // GCS Uri String sourceUri = "gs://cloud-samples-data/bigquery/us-states/us-states.csv" ; String fileFormat = "CSV" ; String fieldDelimiter = "," ; String skipLeadingRows = "1" ; Map<String , Value > params = new HashMap <> (); params . put ( "destination table name template" , Value . newBuilder (). setStringValue ( tableId ). build ()); params . put ( "data path template" , Value . newBuilder (). setStringValue ( sourceUri ). build ()); params . put ( "write disposition" , Value . newBuilder (). setStringValue ( "APPEND" ). build ()); params . put ( "file format" , Value . newBuilder (). setStringValue ( fileFormat ). build ()); params . put ( "field delimiter" , Value . newBuilder (). setStringValue ( fieldDelimiter ). build ()); params . put ( "skip leading rows" , Value . newBuilder (). setStringValue ( skipLeadingRows ). build ()); TransferConfig transferConfig = TransferConfig . newBuilder () . setDestinationDatasetId ( datasetId ) . setDisplayName ( "Your Google Cloud Storage Config Name" ) . setDataSourceId ( "google cloud storage" ) . setParams ( Struct . newBuilder (). putAllFields ( params ). build ()) . setSchedule ( "every 24 hours" ) . build (); createCloudStorageTransfer ( projectId , transferConfig ); } public static void createCloudStorageTransfer ( String projectId , TransferConfig transferConfig ) throws IOException { try ( DataTransferServiceClient client = DataTransferServiceClient . create ()) { ProjectName parent = ProjectName . of ( projectId ); CreateTransferConfigRequest request = CreateTransferConfigRequest . newBuilder () . setParent ( parent . toString ()) . setTransferConfig ( transferConfig ) . build (); TransferConfig config = client . createTransferConfig ( request ); System . out . println ( "Cloud storage transfer created successfully :" + config . getName ()); } catch ( ApiException ex ) { System . out . print ( "Cloud storage transfer was not created." + ex . toString ()); } } } Specify encryption key with transfers You can specify customer-managed encryption keys (CMEKs) to encrypt data for a transfer run.
- Limitations Recurring data transfers from Cloud Storage to BigQuery are subject to the following limitations: All files matching the patterns defined by either a wildcard or by runtime parameters for your data transfer must share the same schema you defined for the destination table, or the transfer will fail.
- For information about how CMEKs work with the BigQuery Data Transfer Service, see Specify encryption key with transfers . --service account name : Specifies a service account to use for Cloud Storage transfer authentication instead of your user account.

### "Runtime parameters in Blob Storage transfers \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/blob-storage-transfer-parameters)
- Source ID: `site-api-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Data source Parameterized URI or data path Parameterized destination table name Evaluated URI or data path Evaluated destination table name Cloud Storage gs://bucket/events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } gs://bucket/events-20180215/ .csv mytable$20180215 Amazon S3 s3://bucket/events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } s3://bucket/events-20180215/ .csv mytable$20180215 Blob Storage events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } events-20180215/ .csv mytable$20180215 What's next Learn more about setting up an Azure Blob Storage transfer .
- Data source Source URI or data path Parameterized destination table name Evaluated destination table name Cloud Storage gs://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Amazon S3 s3://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Blob Storage .csv mytable${ run time "%Y%m%d" } mytable$20180215 This use case transfers today's data into a table partitioned on today's date.
- Runtime parameters in Blob Storage transfers When you set up a data transfer in Cloud Storage, Azure Blob Storage, or Amazon Simple Storage Service (Amazon S3), you can parameterize the URI (or data path) and the destination table.
- Templating system Cloud Storage, Blob Storage, and Amazon S3 transfers support runtime parameters in the destination table name by using a templating syntax.

### "Runtime parameters in Cloud Storage transfers \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters](https://docs.cloud.google.com/bigquery/docs/gcs-transfer-parameters)
- Source ID: `site-api-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Data source Parameterized URI or data path Parameterized destination table name Evaluated URI or data path Evaluated destination table name Cloud Storage gs://bucket/events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } gs://bucket/events-20180215/ .csv mytable$20180215 Amazon S3 s3://bucket/events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } s3://bucket/events-20180215/ .csv mytable$20180215 Blob Storage events-{ run time "%Y%m%d" }/ .csv mytable${ run time "%Y%m%d" } events-20180215/ .csv mytable$20180215 What's next Learn about setting up a Cloud Storage transfer .
- Data source Source URI or data path Parameterized destination table name Evaluated destination table name Cloud Storage gs://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Amazon S3 s3://bucket/ .csv mytable${ run time "%Y%m%d" } mytable$20180215 Blob Storage .csv mytable${ run time "%Y%m%d" } mytable$20180215 This use case transfers today's data into a table partitioned on today's date.
- Runtime parameters in Cloud Storage transfers When you set up a data transfer in Cloud Storage, Azure Blob Storage, or Amazon Simple Storage Service (Amazon S3), you can parameterize the URI (or data path) and the destination table.
- Templating system Cloud Storage, Blob Storage, and Amazon S3 transfers support runtime parameters in the destination table name by using a templating syntax.

