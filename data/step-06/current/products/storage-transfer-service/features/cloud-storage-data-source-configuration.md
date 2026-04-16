---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.671Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Cloud Storage data source configuration"
feature_slug: "cloud-storage-data-source-configuration"
latest_feature_date: "2016-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible"
  - "https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers"
keywords:
  - "storage"
  - "source"
  - "configuration"
  - "transfer"
  - "documentation"
  - "added"
  - "clearer"
  - "instructions"
---

# Cloud Storage data source configuration

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service documentation added clearer instructions for configuring a Cloud Storage data source.

## Extended Definition

Storage Transfer Service documentation added clearer instructions for configuring a Cloud Storage data source.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers)

## Supporting Pages

### "Transfer from S3-compatible storage to Cloud Storage \_|\_ Storage Transfer\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You must provide access credentials either as environment variables as the values of AWS ACCESS KEY ID and AWS SECRET ACCESS KEY , or stored as default credentials in your system's configuration files. export AWS ACCESS KEY ID = ID export AWS SECRET ACCESS KEY = SECRET gcloud transfer agents install --pool = POOL NAME To run agents using a service account key , use the --creds-file option: gcloud transfer agents install --pool = POOL NAME \ --creds-file = /relative/path/to/service-account-key.json Create a transfer job Google Cloud console Follow these steps to create a transfer from an S3-compatible source to a Cloud Storage bucket.
- Defaults to the default agent // const sourceAgentPoolName = 'projects/my-project/agentPools/transfer service default'; // The S3-compatible bucket name to transfer data from // const sourceBucketName = "my-bucket-name"; // The S3-compatible path (object prefix) to transfer data from // const sourcePath = "path/to/data/"; // The ID of the GCS bucket to transfer data to // const gcsSinkBucket = "my-sink-bucket"; // The GCS path (object prefix) to transfer data to // const gcsPath = "path/to/data/"; // The S3 region of the source bucket // const region = 'us-east-1'; // The S3-compatible endpoint // const endpoint = "us-east-1.example.com"; // The S3-compatible network protocol // const protocol = NetworkProtocol.NETWORK PROTOCOL HTTPS; // The S3-compatible request model // const requestModel = RequestModel.REQUEST MODEL VIRTUAL HOSTED STYLE; // The S3-compatible auth method // const authMethod = AuthMethod.AUTH METHOD AWS SIGNATURE V4; // Creates a client const client = new storageTransfer .
- StorageTransferServiceClient (); / Creates a transfer from an AWS S3-compatible source to GCS / async function transferFromS3CompatibleSource () { // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , transferSpec : { sourceAgentPoolName , awsS3CompatibleDataSource : { region , s3Metadata : { authMethod , protocol , requestModel , }, endpoint , bucketName : sourceBucketName , path : sourcePath , }, gcsDataSink : { bucketName : gcsSinkBucket , path : gcsPath , }, }, status : ' ENABLED ' , }, }); await client . runTransferJob ({ jobName : transferJob . name , projectId , }); console . log ( Created and ran a transfer job from ' ${ sourceBucketName } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ` ); } transferFromS3CompatibleSource (); Python To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- Defaults to 'projects/{project id}/agentPools/transfer service default' source agent pool name = 'projects/my-project/agentPools/my-agent' The S3 compatible bucket name to transfer data from source bucket name = "my-bucket-name" The S3 compatible path (object prefix) to transfer data from source path = "path/to/data/" The ID of the GCS bucket to transfer data to gcs sink bucket = "my-sink-bucket" The GCS path (object prefix) to transfer data to gcs path = "path/to/data/" The S3 region of the source bucket region = 'us-east-1' The S3-compatible endpoint endpoint = "us-east-1.example.com" The S3-compatible network protocol protocol = NetworkProtocol.NETWORK PROTOCOL HTTPS The S3-compatible request model request model = RequestModel.REQUEST MODEL VIRTUAL HOSTED STYLE The S3-compatible auth method auth method = AuthMethod.AUTH METHOD AWS SIGNATURE V4 transfer job request = storage transfer .

### "Use cross-bucket replication \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication](https://docs.cloud.google.com/storage-transfer/docs/cross-bucket-replication)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Storage Transfer Service service agent or user service account needs the following permissions to replicate your objects and set up Pub/Sub notifications for your source bucket: Required permissions The following permissions must be granted on the source project: pubsub.topics.create pubsub.subscriptions.create pubsub.subscriptions.consume The following permissions must be granted on the source bucket: storage.buckets.get storage.buckets.update storage.objects.get The following permissions must be granted on the destination bucket: storage.buckets.get storage.objects.create storage.objects.get These permissions can be granted through custom roles or by granting all of the following predefined roles : Pub/Sub Editor ( roles/pubsub.editor ) role on the source project Storage Legacy Bucket Owner ( roles/storage.legacyBucketOwner ) and Storage Object Viewer ( roles/storage.objectViewer ) roles on the source bucket Storage Legacy Bucket Writer ( roles/storage.legacyBucketWriter ) and Storage Object Viewer ( roles/storage.objectViewer ) roles on the destination bucket Grant required roles for Pub/Sub Cloud Storage uses a Google-managed service agent to manage Pub/Sub notifications.
- The Cloud Storage service agent needs the following permissions to set up Pub/Sub and publish messages to a topic: Required permissions pubsub.topics.publish on the Pub/Sub topic pubsub.subscriptions.consume on the Pub/Sub topic pubsub.subscriptions.create on the source project These permissions can be granted through custom roles or by granting the following predefined role : Pub/Sub Publisher ( roles/pubsub.publisher ) on the source project Create a replication job Console For Google Cloud console instructions on how to create a replication job, refer to Create a replication job using the Google Cloud console .
- Use cURL to call the Storage Transfer Service REST API with a transferJobs.list request: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://storagetransfer.googleapis.com/v1/transferJobs" View a replication job Console For Google Cloud console instructions on how to view a replication job, refer to View a replication job using the Google Cloud console .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use cross-bucket replication: storagetransfer.jobs.create storagetransfer.jobs.delete storagetransfer.jobs.get storagetransfer.jobs.list storagetransfer.jobs.run storagetransfer.jobs.update For instructions on granting roles on buckets, see Use IAM with buckets .

### Create transfers \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Storage Transfer Service is able to transfer data from the following Microsoft Azure Storage regions: Americas: East US, East US 2, West US, West US 2, West US 3, Central US, North Central US, South Central US, West Central US, Canada Central, Canada East, Brazil South Asia-Pacific: Australia Central, Australia East, Australia Southeast, Central India, South India, West India, Southeast Asia, East Asia, Japan East, Japan West, Korea South, Korea Central Europe, Middle East, Africa (EMEA): France Central, Germany West Central, Norway East, Sweden Central, Switzerland North, North Europe, West Europe, UK South, UK West, Qatar Central, UAE North, South Africa North Request using transferJobs create : POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : "YOUR DESCRIPTION" , "status" : "ENABLED" , "projectId" : "PROJECT ID" , "schedule" : { "scheduleStartDate" : { "day" : 14 , "month" : 2 , "year" : 2020 }, "scheduleEndDate" : { "day" : 14 "month" : 2 , "year" : 2020 }, "startTimeOfDay" : { "hours" : 1 , "minutes" : 1 } }, "transferSpec" : { "azureBlobStorageDataSource" : { "storageAccount" : "AZURE SOURCE NAME" , "azureCredentials" : { "sasToken" : "AZURE SAS TOKEN" , }, "container" : "AZURE CONTAINER" , }, "gcsDataSink" : { "bucketName" : "GCS SINK NAME" } } } Response: 200 OK { "transferJob" : [ { "creationTime" : "2020-02-14T01:01:00.000000000Z" , "description" : "YOUR DESCRIPTION" , "name" : "transferJobs/JOB ID" , "status" : "ENABLED" , "lastModificationTime" : "2020-02-14T01:01:00.000000000Z" , "projectId" : "PROJECT ID" , "schedule" : { "scheduleStartDate" : { "day" : 14 "month" : 2 , "year" : 2020 }, "scheduleEndDate" : { "day" : 14 , "month" : 2 , "year" : 2020 }, "startTimeOfDay" : { "hours" : 1 , "minutes" : 1 } }, "transferSpec" : { "azureBlobStorageDataSource" : { "storageAccount" : "AZURE SOURCE NAME" , "azureCredentials" : { "sasToken" : "AZURE SAS TOKEN" , }, "container" : "AZURE CONTAINER" , }, "objectConditions" : {}, "transferOptions" : {} } } ] } Transfer from a file system See Transfer from a file system to Cloud Storage .
- ENABLED ) . build (); // Create a Transfer Service client StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create (); // Create the transfer job TransferJob response = storageTransfer . createTransferJob ( CreateTransferJobRequest . newBuilder (). setTransferJob ( transferJob ). build ()); System . out . println ( "Created transfer job from standard bucket to Nearline bucket:" ); System . out . println ( response . toString ()); } } Node.js // Imports the Google Cloud client library const { StorageTransferServiceClient , } = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // The ID of the Google Cloud Platform Project that owns the job // projectId = 'my-project-id' // A useful description for your transfer job // description = 'My transfer job' // Google Cloud Storage source bucket name // gcsSourceBucket = 'my-gcs-source-bucket' // Google Cloud Storage destination bucket name // gcsSinkBucket = 'my-gcs-destination-bucket' // Date to start daily migration // startDate = new Date() // Creates a client const client = new StorageTransferServiceClient (); / Create a daily migration from a GCS bucket to another GCS bucket for objects untouched for 30+ days. / async function createDailyNearline30DayMigration () { // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , description , status : ' ENABLED ' , schedule : { scheduleStartDate : { day : startDate . getDate (), month : startDate . getMonth () + 1 , year : startDate . getFullYear (), }, }, transferSpec : { gcsDataSource : { bucketName : gcsSourceBucket , }, gcsDataSink : { bucketName : gcsSinkBucket , }, objectConditions : { minTimeElapsedSinceLastModification : { seconds : 2592000 , // 30 days }, }, transferOptions : { deleteObjectsFromSourceAfterTransfer : true , }, }, }, }); console . log ( Created transferJob: ${ transferJob . name } ); } createDailyNearline30DayMigration (); Python Looking for older samples?
- For more information, see Set up authentication for a local development environment . // Imports the Google Cloud client library const { StorageTransferServiceClient , } = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // The ID of the Google Cloud Platform Project that owns the job // projectId = 'my-project-id' // A useful description for your transfer job // description = 'My transfer job' // Azure Storage Account name // azureStorageAccount = 'accountname' // Azure Storage Account name // azureSourceContainer = 'my-azure-source-bucket' // Azure Shared Access Signature token // azureSASToken = '?sv=...' // Google Cloud Storage destination bucket name // gcsSinkBucket = 'my-gcs-destination-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a one-time transfer job from Azure Blob Storage to Google Cloud Storage. / async function transferFromBlobStorage () { // Setting the start date and the end date as the same time creates a // one-time transfer const now = new Date (); const oneTimeSchedule = { day : now . getDate (), month : now . getMonth () + 1 , year : now . getFullYear (), }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , description , status : ' ENABLED ' , schedule : { scheduleStartDate : oneTimeSchedule , scheduleEndDate : oneTimeSchedule , }, transferSpec : { azureBlobStorageDataSource : { azureCredentials : { sasToken : azureSASToken , }, container : azureSourceContainer , storageAccount : azureStorageAccount , }, gcsDataSink : { bucketName : gcsSinkBucket , }, }, }, }); console . log ( Created and ran a transfer job from ' ${ azureSourceContainer } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ` ); } transferFromBlobStorage (); Python To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- TransferSpec ; import java.io.IOException ; import java.util.concurrent.ExecutionException ; public class TransferFromAzure { public static void main ( String [] args ) throws IOException , ExecutionException , InterruptedException { // TODO(developer): Replace these variables before running the sample. // Your Google Cloud Project ID String projectId = "my-project-id" ; // Your Azure Storage Account name String azureStorageAccount = "my-azure-account" ; // The Azure source container to transfer data from String azureSourceContainer = "my-source-container" ; // The GCS bucket to transfer data to String gcsSinkBucket = "my-sink-bucket" ; transferFromAzureBlobStorage ( projectId , azureStorageAccount , azureSourceContainer , gcsSinkBucket ); } / Creates and runs a transfer job to transfer all data from an Azure container to a GCS bucket. / public static void transferFromAzureBlobStorage ( String projectId , String azureStorageAccount , String azureSourceContainer , String gcsSinkBucket ) throws IOException , ExecutionException , InterruptedException { // Your Azure SAS token, should be accessed via environment variable String azureSasToken = System . getenv ( "AZURE SAS TOKEN" ); TransferSpec transferSpec = TransferSpec . newBuilder () . setAzureBlobStorageDataSource ( AzureBlobStorageData . newBuilder () . setAzureCredentials ( AzureCredentials . newBuilder (). setSasToken ( azureSasToken ). build ()) . setContainer ( azureSourceContainer ) . setStorageAccount ( azureStorageAccount )) . setGcsDataSink ( GcsData . newBuilder (). setBucketName ( gcsSinkBucket ). build ()) . build (); TransferJob transferJob = TransferJob . newBuilder () . setProjectId ( projectId ) . setStatus ( Status .

