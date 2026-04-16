---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.638Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service Azure Shared Key authentication"
feature_slug: "storage-transfer-service-azure-shared-key-authentication"
latest_feature_date: "2024-04-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers"
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData"
  - "https://docs.cloud.google.com/storage-transfer/docs/event-driven-azure"
keywords:
  - "storage"
  - "transfer"
  - "azure"
  - "shared"
  - "key"
  - "authentication"
  - "added"
  - "microsoft"
---

# Storage Transfer Service Azure Shared Key authentication

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service added support for using Microsoft Azure Storage Shared Keys as an authentication method.

## Extended Definition

Storage Transfer Service added support for using Microsoft Azure Storage Shared Keys as an authentication method.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData)
- [https://docs.cloud.google.com/storage-transfer/docs/event-driven-azure](https://docs.cloud.google.com/storage-transfer/docs/event-driven-azure)

## Supporting Pages

### Create transfers \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for a local development environment . // Imports the Google Cloud client library const { StorageTransferServiceClient , } = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // The ID of the Google Cloud Platform Project that owns the job // projectId = 'my-project-id' // A useful description for your transfer job // description = 'My transfer job' // Azure Storage Account name // azureStorageAccount = 'accountname' // Azure Storage Account name // azureSourceContainer = 'my-azure-source-bucket' // Azure Shared Access Signature token // azureSASToken = '?sv=...' // Google Cloud Storage destination bucket name // gcsSinkBucket = 'my-gcs-destination-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a one-time transfer job from Azure Blob Storage to Google Cloud Storage. / async function transferFromBlobStorage () { // Setting the start date and the end date as the same time creates a // one-time transfer const now = new Date (); const oneTimeSchedule = { day : now . getDate (), month : now . getMonth () + 1 , year : now . getFullYear (), }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , description , status : ' ENABLED ' , schedule : { scheduleStartDate : oneTimeSchedule , scheduleEndDate : oneTimeSchedule , }, transferSpec : { azureBlobStorageDataSource : { azureCredentials : { sasToken : azureSASToken , }, container : azureSourceContainer , storageAccount : azureStorageAccount , }, gcsDataSink : { bucketName : gcsSinkBucket , }, }, }, }); console . log ( Created and ran a transfer job from ' ${ azureSourceContainer } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ` ); } transferFromBlobStorage (); Python To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- Transfer between Microsoft Azure Blob Storage and Cloud Storage In this example, you'll learn how to move files from Microsoft Azure Storage to a Cloud Storage bucket, using a Microsoft Azure Storage shared access signature (SAS) token.
- Transfer between Microsoft Azure Blob Storage and Cloud Storage In this example, you'll learn how to move files from Microsoft Azure Storage to a Cloud Storage bucket, using a Microsoft Azure Storage shared access signature (SAS) token.
- Storage Transfer Service is able to transfer data from the following Microsoft Azure Storage regions: Americas: East US, East US 2, West US, West US 2, West US 3, Central US, North Central US, South Central US, West Central US, Canada Central, Canada East, Brazil South Asia-Pacific: Australia Central, Australia East, Australia Southeast, Central India, South India, West India, Southeast Asia, East Asia, Japan East, Japan West, Korea South, Korea Central Europe, Middle East, Africa (EMEA): France Central, Germany West Central, Norway East, Sweden Central, Switzerland North, North Europe, West Europe, UK South, UK West, Qatar Central, UAE North, South Africa North Request using transferJobs create : POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : "YOUR DESCRIPTION" , "status" : "ENABLED" , "projectId" : "PROJECT ID" , "schedule" : { "scheduleStartDate" : { "day" : 14 , "month" : 2 , "year" : 2020 }, "scheduleEndDate" : { "day" : 14 "month" : 2 , "year" : 2020 }, "startTimeOfDay" : { "hours" : 1 , "minutes" : 1 } }, "transferSpec" : { "azureBlobStorageDataSource" : { "storageAccount" : "AZURE SOURCE NAME" , "azureCredentials" : { "sasToken" : "AZURE SAS TOKEN" , }, "container" : "AZURE CONTAINER" , }, "gcsDataSink" : { "bucketName" : "GCS SINK NAME" } } } Response: 200 OK { "transferJob" : [ { "creationTime" : "2020-02-14T01:01:00.000000000Z" , "description" : "YOUR DESCRIPTION" , "name" : "transferJobs/JOB ID" , "status" : "ENABLED" , "lastModificationTime" : "2020-02-14T01:01:00.000000000Z" , "projectId" : "PROJECT ID" , "schedule" : { "scheduleStartDate" : { "day" : 14 "month" : 2 , "year" : 2020 }, "scheduleEndDate" : { "day" : 14 , "month" : 2 , "year" : 2020 }, "startTimeOfDay" : { "hours" : 1 , "minutes" : 1 } }, "transferSpec" : { "azureBlobStorageDataSource" : { "storageAccount" : "AZURE SOURCE NAME" , "azureCredentials" : { "sasToken" : "AZURE SAS TOKEN" , }, "container" : "AZURE CONTAINER" , }, "objectConditions" : {}, "transferOptions" : {} } } ] } Transfer from a file system See Transfer from a file system to Cloud Storage .

### "Class AzureBlobStorageData (1.20.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AzureBlobStorageData)
- Source ID: `site-python-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To configure federated identity, see Configure access to Microsoft Azure Storage <https://cloud.google.com/storage-transfer/docs/source-microsoft-azure#option 3 authenticate using federated identity> .
- See [Configure access to a source: Microsoft Azure Blob Storage] (https://cloud.google.com/storage-transfer/docs/source-microsoft-azure#secret manager) for more information.
- Classes FederatedIdentityConfig FederatedIdentityConfig ( mapping = None , , ignore unknown fields = False , kwargs ) The identity of an Azure application through which Storage Transfer Service can authenticate requests using Azure workload identity federation.
- The Azure SAS token must be stored in Secret Manager in JSON format: { "sas token" : "SAS TOKEN" } GoogleServiceAccount][google.storagetransfer.v1.GoogleServiceAccount] must be granted roles/secretmanager.secretAccessor for the resource.

### "Event-driven transfers from Azure Blob Storage or Data Lake Storage Gen2\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/event-driven-azure](https://docs.cloud.google.com/storage-transfer/docs/event-driven-azure)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST API Define an event-driven transfer job using the TransferJob proto: { "description" : "Test Azure to GCS transfer via event stream." , "project id" : " PROJECT ID " , "transfer spec" : { "azure blob storage data source" : { "storage account" : " AZURE STORAGE ACCOUNT NAME " , "container" : " AZURE CONTAINER NAME " , "federated identity config" : { "client id" : " CLIENT ID " , "tenant id" : " TENANT ID " } }, "gcs data sink" : { "bucket name" : " DESTINATION BUCKET " }, "object conditions" : { // optional object conditions (include prefixes, etc) }, "transfer options" : {} }, "event stream" : { "name" : " AZURE STORAGE ACCOUNT NAME .queue.core.windows.net/ AZURE QUEUE NAME " , "event stream start time" : EVENT STREAM START TIME , "event stream expiration time" : EVENT STREAM EXPIRATION TIME }, "status" : "ENABLED" } The start and expiration time fields are optional: event stream start time : The time from which to start listening for events in the format YYYY-MM-DDTHH:MM:SSZ .
- Google Cloud CLI To create an event-driven transfer job using the gcloud CLI, use the gcloud transfer jobs create command with the --event-stream-name flag: gcloud transfer jobs create \ https:// AZURE STORAGE ACCOUNT NAME .blob.core.windows.net/ AZURE CONTAINER NAME \ gs:// DESTINATION BUCKET \ --source-creds-file = SOURCE CREDS FILE \ --event-stream-name = AZURE STORAGE ACCOUNT NAME .queue.core.windows.net/ AZURE QUEUE NAME \ --event-stream-starts = EVENT STREAM STARTS \ --event-stream-expires = EVENT STREAM EXPIRES Replace the placeholders with your actual values: AZURE STORAGE ACCOUNT NAME and AZURE CONTAINER NAME : Your Azure Blob Storage account name and container name.
- Home Documentation Storage Storage Transfer Service Send feedback Event-driven transfers from Azure Blob Storage or Data Lake Storage Gen2 Stay organized with collections Save and categorize content based on your preferences.
- This document describes how to configure event-driven data transfers from Azure Blob Storage or Data Lake Storage Gen2 to Cloud Storage using Storage Transfer Service.

