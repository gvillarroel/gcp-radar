---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.650Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Metadata preservation controls for Cloud Storage transfers"
feature_slug: "metadata-preservation-controls-for-cloud-storage-transfers"
latest_feature_date: "2022-03-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation"
  - "https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers"
keywords:
  - "metadata"
  - "preservation"
  - "controls"
  - "storage"
  - "transfers"
  - "transfer"
  - "now"
  - "lets"
---

# Metadata preservation controls for Cloud Storage transfers

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service now lets you choose whether to retain or discard object metadata, including ACLs, CMEK settings, temporary holds, and creation time, during Cloud Storage bucket transfers.

## Extended Definition

Storage Transfer Service now lets you choose whether to retain or discard object metadata, including ACLs, CMEK settings, temporary holds, and creation time, during Cloud Storage bucket transfers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation)
- [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers)

## Supporting Pages

### "Metadata preservation \_|\_ Storage Transfer Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Transfers between Cloud Storage buckets Metadata example Preservation behavior Cloud Storage fixed-key metadata fields, such as: Cache-Control , Content-Disposition , and Content-Type .
- For the latter, the metadata must have been preserved when files were initially transferred to Cloud Storage. { "description": "metadata-example", "projectId": "example-project-id" "transferSpec": { ... "transferOptions": { "metadataOptions": { "gid": "GID NUMBER", # Default is "GID SKIP" "uid": "UID NUMBER", # Default is "UID SKIP" "mode": "MODE PRESERVE", # Default is "MODE SKIP" "symlink": "SYMLINK PRESERVE" # Default is "SYMLINK SKIP" } } } } POSIX to Cloud Storage Preserved metadata is stored in Cloud Storage as custom metadata key:value pairs.
- Overview Storage Transfer Service preserves the following metadata: User-created custom metadata for transfers that originate from Cloud Storage, Amazon S3, or Microsoft Azure Blob Storage is preserved.
- Metadata preservation behavior The following sections list metadata examples from different source storage systems and how Storage Transfer Service preserves metadata from each.

### Configure VPC Service Controls for file system transfers | Storage Transfer Service | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc](https://docs.cloud.google.com/storage-transfer/docs/on-prem-vpc-sc)
- Source ID: `site-docs-reference-required-3-http`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported sources and sinks Other transfer options Differences between Storage Transfer Service options Common use cases Transfer between Cloud Storage buckets Move your Cloud Storage data to another location Transfer data between file systems Transfer from S3 via CloudFront Transfer from S3 or Azure with a customer-managed private network Configure access Access control with IAM Agentless transfer permissions Delegate service agent permissions Agent-based transfer permissions Role and permission reference Sources Cloud Storage Amazon S3 S3-compatible storage Microsoft Azure Blob Storage URL list File system Sinks Cloud Storage File system Transfer data Create transfers All transfers Amazon S3 to Cloud Storage File system to Cloud Storage HDFS to Cloud Storage S3-compatible storage to Cloud Storage Public URLs to Cloud Storage Manage transfers Event-driven transfers Overview From Cloud Storage From AWS S3 From Azure Blob Storage or Data Lake Storage Gen2 Cross-bucket replication Cloud Storage managed folders Cloud Storage hierarchical namespace Filter source objects by prefix Transfer specific files or objects Schedule transfers Metadata preservation Data integrity Improve transfer speeds Manage transfer agents Requirements Agent pools Transfer agents Manage network bandwidth Best practices Advanced options Protect file system data Troubleshoot Log and monitor Cloud Logging Audit Logging Monitor transfer jobs File system transfer logs Pub/Sub notifications Security and compliance Custom organization policy constraints Regional endpoints Configure VPC Service Controls Cloud object storage transfers File system transfers Customer-managed encryption keys Access Transparency AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Storage Storage Transfer Service Send feedback Configure VPC Service Controls for file system transfers Stay organized with collections Save and categorize content based on your preferences.
- Configure VPC Service Controls for file system transfers | Storage Transfer Service | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Storage Transfer Service Start free Guides Reference Support Resources Technology areas More Guides Reference Support Resources Cross-product tools More Console Discover What is Storage Transfer Service?
- If you are concerned about transfers from on-premises to Cloud Storage buckets outside of the service perimeter, you need to configure Private Google Access with VPC Service Controls to prevent agents from accessing buckets outside of the service perimeter.
- Storage Transfer Service supports on-premises transfers to Cloud Storage buckets protected by VPC Service Controls, under the following conditions: Creating a transfer with Storage Transfer Service API protects all transferred data.

### Create transfers \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Storage Transfer Service is able to transfer data from the following Microsoft Azure Storage regions: Americas: East US, East US 2, West US, West US 2, West US 3, Central US, North Central US, South Central US, West Central US, Canada Central, Canada East, Brazil South Asia-Pacific: Australia Central, Australia East, Australia Southeast, Central India, South India, West India, Southeast Asia, East Asia, Japan East, Japan West, Korea South, Korea Central Europe, Middle East, Africa (EMEA): France Central, Germany West Central, Norway East, Sweden Central, Switzerland North, North Europe, West Europe, UK South, UK West, Qatar Central, UAE North, South Africa North Request using transferJobs create : POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : "YOUR DESCRIPTION" , "status" : "ENABLED" , "projectId" : "PROJECT ID" , "schedule" : { "scheduleStartDate" : { "day" : 14 , "month" : 2 , "year" : 2020 }, "scheduleEndDate" : { "day" : 14 "month" : 2 , "year" : 2020 }, "startTimeOfDay" : { "hours" : 1 , "minutes" : 1 } }, "transferSpec" : { "azureBlobStorageDataSource" : { "storageAccount" : "AZURE SOURCE NAME" , "azureCredentials" : { "sasToken" : "AZURE SAS TOKEN" , }, "container" : "AZURE CONTAINER" , }, "gcsDataSink" : { "bucketName" : "GCS SINK NAME" } } } Response: 200 OK { "transferJob" : [ { "creationTime" : "2020-02-14T01:01:00.000000000Z" , "description" : "YOUR DESCRIPTION" , "name" : "transferJobs/JOB ID" , "status" : "ENABLED" , "lastModificationTime" : "2020-02-14T01:01:00.000000000Z" , "projectId" : "PROJECT ID" , "schedule" : { "scheduleStartDate" : { "day" : 14 "month" : 2 , "year" : 2020 }, "scheduleEndDate" : { "day" : 14 , "month" : 2 , "year" : 2020 }, "startTimeOfDay" : { "hours" : 1 , "minutes" : 1 } }, "transferSpec" : { "azureBlobStorageDataSource" : { "storageAccount" : "AZURE SOURCE NAME" , "azureCredentials" : { "sasToken" : "AZURE SAS TOKEN" , }, "container" : "AZURE CONTAINER" , }, "objectConditions" : {}, "transferOptions" : {} } } ] } Transfer from a file system See Transfer from a file system to Cloud Storage .
- ENABLED ) . build (); // Create a Transfer Service client StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create (); // Create the transfer job TransferJob response = storageTransfer . createTransferJob ( CreateTransferJobRequest . newBuilder (). setTransferJob ( transferJob ). build ()); System . out . println ( "Created transfer job from standard bucket to Nearline bucket:" ); System . out . println ( response . toString ()); } } Node.js // Imports the Google Cloud client library const { StorageTransferServiceClient , } = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // The ID of the Google Cloud Platform Project that owns the job // projectId = 'my-project-id' // A useful description for your transfer job // description = 'My transfer job' // Google Cloud Storage source bucket name // gcsSourceBucket = 'my-gcs-source-bucket' // Google Cloud Storage destination bucket name // gcsSinkBucket = 'my-gcs-destination-bucket' // Date to start daily migration // startDate = new Date() // Creates a client const client = new StorageTransferServiceClient (); / Create a daily migration from a GCS bucket to another GCS bucket for objects untouched for 30+ days. / async function createDailyNearline30DayMigration () { // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , description , status : ' ENABLED ' , schedule : { scheduleStartDate : { day : startDate . getDate (), month : startDate . getMonth () + 1 , year : startDate . getFullYear (), }, }, transferSpec : { gcsDataSource : { bucketName : gcsSourceBucket , }, gcsDataSink : { bucketName : gcsSinkBucket , }, objectConditions : { minTimeElapsedSinceLastModification : { seconds : 2592000 , // 30 days }, }, transferOptions : { deleteObjectsFromSourceAfterTransfer : true , }, }, }, }); console . log ( Created transferJob: ${ transferJob . name } ); } createDailyNearline30DayMigration (); Python Looking for older samples?
- For more information, see Set up authentication for a local development environment . // Imports the Google Cloud client library const { StorageTransferServiceClient , } = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // The ID of the Google Cloud Platform Project that owns the job // projectId = 'my-project-id' // A useful description for your transfer job // description = 'My transfer job' // Azure Storage Account name // azureStorageAccount = 'accountname' // Azure Storage Account name // azureSourceContainer = 'my-azure-source-bucket' // Azure Shared Access Signature token // azureSASToken = '?sv=...' // Google Cloud Storage destination bucket name // gcsSinkBucket = 'my-gcs-destination-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a one-time transfer job from Azure Blob Storage to Google Cloud Storage. / async function transferFromBlobStorage () { // Setting the start date and the end date as the same time creates a // one-time transfer const now = new Date (); const oneTimeSchedule = { day : now . getDate (), month : now . getMonth () + 1 , year : now . getFullYear (), }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , description , status : ' ENABLED ' , schedule : { scheduleStartDate : oneTimeSchedule , scheduleEndDate : oneTimeSchedule , }, transferSpec : { azureBlobStorageDataSource : { azureCredentials : { sasToken : azureSASToken , }, container : azureSourceContainer , storageAccount : azureStorageAccount , }, gcsDataSink : { bucketName : gcsSinkBucket , }, }, }, }); console . log ( Created and ran a transfer job from ' ${ azureSourceContainer } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ` ); } transferFromBlobStorage (); Python To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- TransferSpec ; import java.io.IOException ; import java.util.concurrent.ExecutionException ; public class TransferFromAzure { public static void main ( String [] args ) throws IOException , ExecutionException , InterruptedException { // TODO(developer): Replace these variables before running the sample. // Your Google Cloud Project ID String projectId = "my-project-id" ; // Your Azure Storage Account name String azureStorageAccount = "my-azure-account" ; // The Azure source container to transfer data from String azureSourceContainer = "my-source-container" ; // The GCS bucket to transfer data to String gcsSinkBucket = "my-sink-bucket" ; transferFromAzureBlobStorage ( projectId , azureStorageAccount , azureSourceContainer , gcsSinkBucket ); } / Creates and runs a transfer job to transfer all data from an Azure container to a GCS bucket. / public static void transferFromAzureBlobStorage ( String projectId , String azureStorageAccount , String azureSourceContainer , String gcsSinkBucket ) throws IOException , ExecutionException , InterruptedException { // Your Azure SAS token, should be accessed via environment variable String azureSasToken = System . getenv ( "AZURE SAS TOKEN" ); TransferSpec transferSpec = TransferSpec . newBuilder () . setAzureBlobStorageDataSource ( AzureBlobStorageData . newBuilder () . setAzureCredentials ( AzureCredentials . newBuilder (). setSasToken ( azureSasToken ). build ()) . setContainer ( azureSourceContainer ) . setStorageAccount ( azureStorageAccount )) . setGcsDataSink ( GcsData . newBuilder (). setBucketName ( gcsSinkBucket ). build ()) . build (); TransferJob transferJob = TransferJob . newBuilder () . setProjectId ( projectId ) . setStatus ( Status .

