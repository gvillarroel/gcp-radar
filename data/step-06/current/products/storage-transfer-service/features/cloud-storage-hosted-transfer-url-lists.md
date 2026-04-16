---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.637Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Cloud Storage-hosted transfer URL lists"
feature_slug: "cloud-storage-hosted-transfer-url-lists"
latest_feature_date: "2024-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible"
keywords:
  - "storage"
  - "hosted"
  - "transfer"
  - "url"
  - "lists"
  - "now"
  - "allows"
  - "stored"
---

# Cloud Storage-hosted transfer URL lists

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service now allows transfer URL lists to be stored in an access-controlled Cloud Storage bucket for file transfer jobs.

## Extended Definition

Storage Transfer Service now allows transfer URL lists to be stored in an access-controlled Cloud Storage bucket for file transfer jobs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)

## Supporting Pages

### "Metadata preservation \_|\_ Storage Transfer Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- For the latter, the metadata must have been preserved when files were initially transferred to Cloud Storage. { "description": "metadata-example", "projectId": "example-project-id" "transferSpec": { ... "transferOptions": { "metadataOptions": { "gid": "GID NUMBER", # Default is "GID SKIP" "uid": "UID NUMBER", # Default is "UID SKIP" "mode": "MODE PRESERVE", # Default is "MODE SKIP" "symlink": "SYMLINK PRESERVE" # Default is "SYMLINK SKIP" } } } } POSIX to Cloud Storage Preserved metadata is stored in Cloud Storage as custom metadata key:value pairs.
- URL list transfer to Cloud Storage For more information about URL lists, see Creating a URL list .
- The preserved value is stored in the customTime field of the transferred object in Cloud Storage.
- For symbolic links, Storage Transfer Service preserves the target link as an object in Cloud Storage with the following qualities: Object key is composed of the destination prefix plus the path to the symlink, relative to the root directory .

### Create transfers \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers)
- Source ID: `site-docs-root`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- Transfers from Amazon S3, Microsoft Azure, URL lists, or Cloud Storage to Cloud Storage do not require agents and agent pools .
- Storage Transfer Service is able to transfer data from the following Microsoft Azure Storage regions: Americas: East US, East US 2, West US, West US 2, West US 3, Central US, North Central US, South Central US, West Central US, Canada Central, Canada East, Brazil South Asia-Pacific: Australia Central, Australia East, Australia Southeast, Central India, South India, West India, Southeast Asia, East Asia, Japan East, Japan West, Korea South, Korea Central Europe, Middle East, Africa (EMEA): France Central, Germany West Central, Norway East, Sweden Central, Switzerland North, North Europe, West Europe, UK South, UK West, Qatar Central, UAE North, South Africa North Request using transferJobs create : POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : "YOUR DESCRIPTION" , "status" : "ENABLED" , "projectId" : "PROJECT ID" , "schedule" : { "scheduleStartDate" : { "day" : 14 , "month" : 2 , "year" : 2020 }, "scheduleEndDate" : { "day" : 14 "month" : 2 , "year" : 2020 }, "startTimeOfDay" : { "hours" : 1 , "minutes" : 1 } }, "transferSpec" : { "azureBlobStorageDataSource" : { "storageAccount" : "AZURE SOURCE NAME" , "azureCredentials" : { "sasToken" : "AZURE SAS TOKEN" , }, "container" : "AZURE CONTAINER" , }, "gcsDataSink" : { "bucketName" : "GCS SINK NAME" } } } Response: 200 OK { "transferJob" : [ { "creationTime" : "2020-02-14T01:01:00.000000000Z" , "description" : "YOUR DESCRIPTION" , "name" : "transferJobs/JOB ID" , "status" : "ENABLED" , "lastModificationTime" : "2020-02-14T01:01:00.000000000Z" , "projectId" : "PROJECT ID" , "schedule" : { "scheduleStartDate" : { "day" : 14 "month" : 2 , "year" : 2020 }, "scheduleEndDate" : { "day" : 14 , "month" : 2 , "year" : 2020 }, "startTimeOfDay" : { "hours" : 1 , "minutes" : 1 } }, "transferSpec" : { "azureBlobStorageDataSource" : { "storageAccount" : "AZURE SOURCE NAME" , "azureCredentials" : { "sasToken" : "AZURE SAS TOKEN" , }, "container" : "AZURE CONTAINER" , }, "objectConditions" : {}, "transferOptions" : {} } } ] } Transfer from a file system See Transfer from a file system to Cloud Storage .
- ENABLED ) . build (); // Create a Transfer Service client StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create (); // Create the transfer job TransferJob response = storageTransfer . createTransferJob ( CreateTransferJobRequest . newBuilder (). setTransferJob ( transferJob ). build ()); System . out . println ( "Created transfer job from standard bucket to Nearline bucket:" ); System . out . println ( response . toString ()); } } Node.js // Imports the Google Cloud client library const { StorageTransferServiceClient , } = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // The ID of the Google Cloud Platform Project that owns the job // projectId = 'my-project-id' // A useful description for your transfer job // description = 'My transfer job' // Google Cloud Storage source bucket name // gcsSourceBucket = 'my-gcs-source-bucket' // Google Cloud Storage destination bucket name // gcsSinkBucket = 'my-gcs-destination-bucket' // Date to start daily migration // startDate = new Date() // Creates a client const client = new StorageTransferServiceClient (); / Create a daily migration from a GCS bucket to another GCS bucket for objects untouched for 30+ days. / async function createDailyNearline30DayMigration () { // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , description , status : ' ENABLED ' , schedule : { scheduleStartDate : { day : startDate . getDate (), month : startDate . getMonth () + 1 , year : startDate . getFullYear (), }, }, transferSpec : { gcsDataSource : { bucketName : gcsSourceBucket , }, gcsDataSink : { bucketName : gcsSinkBucket , }, objectConditions : { minTimeElapsedSinceLastModification : { seconds : 2592000 , // 30 days }, }, transferOptions : { deleteObjectsFromSourceAfterTransfer : true , }, }, }, }); console . log ( Created transferJob: ${ transferJob . name } ); } createDailyNearline30DayMigration (); Python Looking for older samples?
- For more information, see Set up authentication for a local development environment . // Imports the Google Cloud client library const { StorageTransferServiceClient , } = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // The ID of the Google Cloud Platform Project that owns the job // projectId = 'my-project-id' // A useful description for your transfer job // description = 'My transfer job' // Azure Storage Account name // azureStorageAccount = 'accountname' // Azure Storage Account name // azureSourceContainer = 'my-azure-source-bucket' // Azure Shared Access Signature token // azureSASToken = '?sv=...' // Google Cloud Storage destination bucket name // gcsSinkBucket = 'my-gcs-destination-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a one-time transfer job from Azure Blob Storage to Google Cloud Storage. / async function transferFromBlobStorage () { // Setting the start date and the end date as the same time creates a // one-time transfer const now = new Date (); const oneTimeSchedule = { day : now . getDate (), month : now . getMonth () + 1 , year : now . getFullYear (), }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , description , status : ' ENABLED ' , schedule : { scheduleStartDate : oneTimeSchedule , scheduleEndDate : oneTimeSchedule , }, transferSpec : { azureBlobStorageDataSource : { azureCredentials : { sasToken : azureSASToken , }, container : azureSourceContainer , storageAccount : azureStorageAccount , }, gcsDataSink : { bucketName : gcsSinkBucket , }, }, }, }); console . log ( Created and ran a transfer job from ' ${ azureSourceContainer } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ` ); } transferFromBlobStorage (); Python To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .

### "Transfer from S3-compatible storage to Cloud Storage \_|\_ Storage Transfer\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- Source ID: `site-docs-root`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Defaults to the default agent // const sourceAgentPoolName = 'projects/my-project/agentPools/transfer service default'; // The S3-compatible bucket name to transfer data from // const sourceBucketName = "my-bucket-name"; // The S3-compatible path (object prefix) to transfer data from // const sourcePath = "path/to/data/"; // The ID of the GCS bucket to transfer data to // const gcsSinkBucket = "my-sink-bucket"; // The GCS path (object prefix) to transfer data to // const gcsPath = "path/to/data/"; // The S3 region of the source bucket // const region = 'us-east-1'; // The S3-compatible endpoint // const endpoint = "us-east-1.example.com"; // The S3-compatible network protocol // const protocol = NetworkProtocol.NETWORK PROTOCOL HTTPS; // The S3-compatible request model // const requestModel = RequestModel.REQUEST MODEL VIRTUAL HOSTED STYLE; // The S3-compatible auth method // const authMethod = AuthMethod.AUTH METHOD AWS SIGNATURE V4; // Creates a client const client = new storageTransfer .
- Defaults to 'projects/{project id}/agentPools/transfer service default' source agent pool name = 'projects/my-project/agentPools/my-agent' The S3 compatible bucket name to transfer data from source bucket name = "my-bucket-name" The S3 compatible path (object prefix) to transfer data from source path = "path/to/data/" The ID of the GCS bucket to transfer data to gcs sink bucket = "my-sink-bucket" The GCS path (object prefix) to transfer data to gcs path = "path/to/data/" The S3 region of the source bucket region = 'us-east-1' The S3-compatible endpoint endpoint = "us-east-1.example.com" The S3-compatible network protocol protocol = NetworkProtocol.NETWORK PROTOCOL HTTPS The S3-compatible request model request model = RequestModel.REQUEST MODEL VIRTUAL HOSTED STYLE The S3-compatible auth method auth method = AuthMethod.AUTH METHOD AWS SIGNATURE V4 transfer job request = storage transfer .
- To use the gcloud CLI to create a transfer from an S3-compatible source to a Cloud Storage bucket, use the following command. gcloud transfer jobs create s3: // SOURCE BUCKET NAME gs:// SINK BUCKET NAME \ --source-agent-pool= POOL NAME \ --source-endpoint= ENDPOINT \ --source-signing-region= REGION \ --source-auth-method= AWS SIGNATURE V2 AWS SIGNATURE V4 \ --source-request-model= PATH STYLE VIRTUAL HOSTED STYLE \ --source-network-protocol= HTTP HTTPS \ --source-list-api= LIST OBJECTS LIST OBJECTS V2 The following flags are required: --source-agent-pool is the name of the agent pool to use for this transfer. --source-endpoint specifies your storage system's endpoint.
- POST https: //storagetransfer.googleapis.com/v1/transferJobs { ... "transferSpec" : { "source agent pool name" : " POOL NAME " , "awsS3CompatibleData" : { "region" : "us-east-1" , "s3Metadata" : { "protocol" : "NETWORK PROTOCOL HTTPS" , "requestModel" : "REQUEST MODEL VIRTUAL HOSTED STYLE" , "authMethod" : "AUTH METHOD AWS SIGNATURE V4" }, "endpoint" : "example.com" , "bucketName" : " BUCKET NAME " , "path" : " PATH " , }, "gcsDataSink" : { "bucketName" : " SINK NAME " , "path" : " SINK PATH " }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : false } } } See the AwsS3CompatibleData API reference for field descriptions.

