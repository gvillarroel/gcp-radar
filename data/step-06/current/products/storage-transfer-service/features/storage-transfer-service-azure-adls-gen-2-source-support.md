---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.658Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service Azure ADLS Gen 2 source support"
feature_slug: "storage-transfer-service-azure-adls-gen-2-source-support"
latest_feature_date: "2021-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/event-driven-azure"
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network"
keywords:
  - "storage"
  - "transfer"
  - "azure"
  - "adls"
  - "gen"
  - "source"
  - "added"
  - "preview"
---

# Storage Transfer Service Azure ADLS Gen 2 source support

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service added Preview support for transferring data from Azure ADLS Gen 2 to Cloud Storage.

## Extended Definition

Storage Transfer Service added Preview support for transferring data from Azure ADLS Gen 2 to Cloud Storage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/event-driven-azure](https://docs.cloud.google.com/storage-transfer/docs/event-driven-azure)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network)

## Supporting Pages

### "Event-driven transfers from Azure Blob Storage or Data Lake Storage Gen2\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/event-driven-azure](https://docs.cloud.google.com/storage-transfer/docs/event-driven-azure)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST API Define an event-driven transfer job using the TransferJob proto: { "description" : "Test Azure to GCS transfer via event stream." , "project id" : " PROJECT ID " , "transfer spec" : { "azure blob storage data source" : { "storage account" : " AZURE STORAGE ACCOUNT NAME " , "container" : " AZURE CONTAINER NAME " , "federated identity config" : { "client id" : " CLIENT ID " , "tenant id" : " TENANT ID " } }, "gcs data sink" : { "bucket name" : " DESTINATION BUCKET " }, "object conditions" : { // optional object conditions (include prefixes, etc) }, "transfer options" : {} }, "event stream" : { "name" : " AZURE STORAGE ACCOUNT NAME .queue.core.windows.net/ AZURE QUEUE NAME " , "event stream start time" : EVENT STREAM START TIME , "event stream expiration time" : EVENT STREAM EXPIRATION TIME }, "status" : "ENABLED" } The start and expiration time fields are optional: event stream start time : The time from which to start listening for events in the format YYYY-MM-DDTHH:MM:SSZ .
- Google Cloud CLI To create an event-driven transfer job using the gcloud CLI, use the gcloud transfer jobs create command with the --event-stream-name flag: gcloud transfer jobs create \ https:// AZURE STORAGE ACCOUNT NAME .blob.core.windows.net/ AZURE CONTAINER NAME \ gs:// DESTINATION BUCKET \ --source-creds-file = SOURCE CREDS FILE \ --event-stream-name = AZURE STORAGE ACCOUNT NAME .queue.core.windows.net/ AZURE QUEUE NAME \ --event-stream-starts = EVENT STREAM STARTS \ --event-stream-expires = EVENT STREAM EXPIRES Replace the placeholders with your actual values: AZURE STORAGE ACCOUNT NAME and AZURE CONTAINER NAME : Your Azure Blob Storage account name and container name.
- Go to Create transfer job For Source type , select Azure Blob Storage or Data Lake Storage Gen2 .
- Home Documentation Storage Storage Transfer Service Send feedback Event-driven transfers from Azure Blob Storage or Data Lake Storage Gen2 Stay organized with collections Save and categorize content based on your preferences.

### "Class AzureBlobStorageData (1.20.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData)
- Source ID: `site-python-reference`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Azure SAS token must be stored in Secret Manager in JSON format: { "sas token" : "SAS TOKEN" } GoogleServiceAccount][google.storagetransfer.v1.GoogleServiceAccount] must be granted roles/secretmanager.secretAccessor for the resource.
- To configure federated identity, see Configure access to Microsoft Azure Storage <https://cloud.google.com/storage-transfer/docs/source-microsoft-azure#option 3 authenticate using federated identity> .
- See [Configure access to a source: Microsoft Azure Blob Storage] (https://cloud.google.com/storage-transfer/docs/source-microsoft-azure#secret manager) for more information.
- 1.20.0 (latest) 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.5 1.10.0 1.9.2 1.8.1 1.7.1 1.6.0 1.5.2 1.4.1 1.3.1 1.2.1 1.1.1 1.0.2 0.1.0 AzureBlobStorageData ( mapping = None , , ignore unknown fields = False , kwargs ) An AzureBlobStorageData resource can be a data source, but not a data sink.

### "Transfer from AWS or Azure over a customer-managed private network \_|\_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/customer-managed-private-network)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AWS POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "awsS3DataSource" : { "privateNetworkService" : " SERVICE SELF LINK " , "bucketName" : " S3 BUCKET NAME " , "awsAccessKey" : { "accessKeyId" : " ACCESS KEY ID " , "secretAccessKey" : " SECRET ACCESS KEY " } }, "gcsDataSink" : { "bucketName" : " GCS BUCKET NAME " } } } Azure POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "azureBlobStorageDataSource" : { "privateNetworkService" : " SERVICE SELF LINK " , "storageAccount" : " AZURE SOURCE NAME " , "container" : " AZURE CONTAINER " , "azureCredentials" : { "sasToken" : " AZURE SAS TOKEN " , } }, "gcsDataSink" : { "bucketName" : " GCS BUCKET NAME " } } } Replace the following: SERVICE SELF LINK is the self-link of the Service Directory service.
- A private network connection, established using either Google Cloud Cross-Cloud Interconnect or Partner Interconnect, can offer significant advantages for data transfer between AWS or Azure and Cloud Storage: Potential cost optimization : Potentially achieve egress cost savings.
- Home Documentation Storage Storage Transfer Service Send feedback Transfer from AWS or Azure over a customer-managed private network Stay organized with collections Save and categorize content based on your preferences.
- Interconnect options Storage Transfer Service can transfer data from AWS and Azure over Cross-Cloud Interconnect (CCI) or Partner Interconnect .

