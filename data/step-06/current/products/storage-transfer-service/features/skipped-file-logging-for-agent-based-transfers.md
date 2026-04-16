---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.636Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Skipped file logging for agent-based transfers"
feature_slug: "skipped-file-logging-for-agent-based-transfers"
latest_feature_date: "2025-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3"
keywords:
  - "skipped"
  - "file"
  - "logging"
  - "agent"
  - "based"
  - "transfers"
  - "storage"
  - "transfer"
---

# Skipped file logging for agent-based transfers

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Cloud Logging for Storage Transfer Service now emits logs for files skipped during agent-based transfer jobs when a file already exists and the job is configured to ignore existing files.

## Extended Definition

Cloud Logging for Storage Transfer Service now emits logs for files skipped during agent-based transfer jobs when a file already exists and the job is configured to ignore existing files.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)

## Supporting Pages

### "Transfer from a file system to Cloud Storage \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Transfers from file systems to Cloud Storage are agent-based transfers, meaning you will install software agents on a machine with access to your file system to orchestrate the transfer.
- Defaults to the default agent // const sourceAgentPoolName = 'projects/my-project/agentPools/transfer service default' // The root directory path on the source filesystem // const rootDirectory = '/directory/to/transfer/source' // The ID of the GCS bucket to transfer data to // const gcsSinkBucket = 'my-sink-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a request to transfer from the local file system to the sink bucket / async function transferDirectory () { const createRequest = { transferJob : { projectId , transferSpec : { sourceAgentPoolName , posixDataSource : { rootDirectory , }, gcsDataSink : { bucketName : gcsSinkBucket }, }, status : ' ENABLED ' , }, }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ( createRequest ); const runRequest = { jobName : transferJob . name , projectId : projectId , }; await client . runTransferJob ( runRequest ); console . log ( Created and ran a transfer job from ' ${ rootDirectory } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ); } transferDirectory (); Python from google.cloud import storage transfer def transfer from posix to gcs ( project id : str , description : str , source agent pool name : str , root directory : str , sink bucket : str , ): """Create a transfer from a POSIX file system to a GCS bucket.""" client = storage transfer .
- To move files from a POSIX file system to a Cloud Storage bucket, use transferJobs.create with a posixDataSource : POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "name" : "transferJobs/sample transfer" , "description" : "My First Transfer" , "status" : "ENABLED" , "projectId" : "my transfer project id" , "schedule" : { "scheduleStartDate" : { "year" : 2022 , "month" : 5 , "day" : 2 }, "startTimeOfDay" : { "hours" : 22 , "minutes" : 30 , "seconds" : 0 , "nanos" : 0 } "scheduleEndDate" : { "year" : 2022 , "month" : 12 , "day" : 31 }, "repeatInterval" : { "259200s" }, }, "transferSpec" : { "posixDataSource" : { "rootDirectory" : "/bar/" , }, "sourceAgentPoolName" : "my example pool" , "gcsDataSink" : { "bucketName" : "destination bucket" "path" : "foo/bar/" }, } } The schedule field is optional; if it's not included, the transfer job must be started with a transferJobs.run request.
- Logging Storage Transfer Service supports Cloud Logging for Storage Transfer Service (recommended) as well as agent-based transfer logs .

### "Transfer from S3-compatible storage to Cloud Storage \_|\_ Storage Transfer\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- StorageTransferServiceClient (); / Creates a transfer from an AWS S3-compatible source to GCS / async function transferFromS3CompatibleSource () { // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , transferSpec : { sourceAgentPoolName , awsS3CompatibleDataSource : { region , s3Metadata : { authMethod , protocol , requestModel , }, endpoint , bucketName : sourceBucketName , path : sourcePath , }, gcsDataSink : { bucketName : gcsSinkBucket , path : gcsPath , }, }, status : ' ENABLED ' , }, }); await client . runTransferJob ({ jobName : transferJob . name , projectId , }); console . log ( Created and ran a transfer job from ' ${ sourceBucketName } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ` ); } transferFromS3CompatibleSource (); Python To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- POST https: //storagetransfer.googleapis.com/v1/transferJobs { ... "transferSpec" : { "source agent pool name" : " POOL NAME " , "awsS3CompatibleData" : { "region" : "us-east-1" , "s3Metadata" : { "protocol" : "NETWORK PROTOCOL HTTPS" , "requestModel" : "REQUEST MODEL VIRTUAL HOSTED STYLE" , "authMethod" : "AUTH METHOD AWS SIGNATURE V4" }, "endpoint" : "example.com" , "bucketName" : " BUCKET NAME " , "path" : " PATH " , }, "gcsDataSink" : { "bucketName" : " SINK NAME " , "path" : " SINK PATH " }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : false } } } See the AwsS3CompatibleData API reference for field descriptions.
- You must provide access credentials either as environment variables as the values of AWS ACCESS KEY ID and AWS SECRET ACCESS KEY , or stored as default credentials in your system's configuration files. export AWS ACCESS KEY ID = ID export AWS SECRET ACCESS KEY = SECRET gcloud transfer agents install --pool = POOL NAME To run agents using a service account key , use the --creds-file option: gcloud transfer agents install --pool = POOL NAME \ --creds-file = /relative/path/to/service-account-key.json Create a transfer job Google Cloud console Follow these steps to create a transfer from an S3-compatible source to a Cloud Storage bucket.
- For more information, see Set up authentication for a local development environment . // Imports the Google Cloud client library const storageTransfer = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // Useful enums for AWS S3-Compatible Transfers // const {AuthMethod, NetworkProtocol, RequestModel} = storageTransfer.protos.google.storagetransfer.v1.S3CompatibleMetadata; // Your project id // const projectId = 'my-project'; // The agent pool associated with the S3-compatible data source.

### "Transfer from Amazon S3 to Cloud Storage \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported regions Storage Transfer Service supports the following Amazon S3 regions: af-south-1 ap-east-1 ap-northeast-1 ap-northeast-2 ap-northeast-3 ap-south-1 ap-south-2 ap-southeast-1 ap-southeast-2 ap-southeast-3 ap-southeast-4 ca-central-1 ca-west-1 eu-central-1 eu-central-2 eu-north-1 eu-south-1 eu-south-2 eu-west-1 eu-west-2 eu-west-3 il-central-1 me-central-1 me-south-1 sa-east-1 us-east-1 us-east-2 us-west-1 us-west-2 Transfers using the managed private network support the following AWS regions: ap-east-1 ap-northeast-1 ap-northeast-2 ap-northeast-3 ap-south-1 ap-south-2 ap-southeast-1 ca-central-1 ca-west-1 eu-central-1 eu-central-2 eu-north-1 eu-south-1 eu-south-2 eu-west-1 eu-west-2 eu-west-3 us-east-1 us-east-2 us-west-1 us-west-2 Transfer options The following Storage Transfer Service features are available for transfers from S3 to Cloud Storage Transfer specific files using a manifest You can pass a list of files for Storage Transfer Service to act on.
- The gcloud CLI does not support transfers through CloudFront or Managed private network. gcloud transfer jobs create \ s3:// S3 BUCKET NAME gs:// STORAGE BUCKET NAME \ --source-creds-file = " relative path/to/creds.json " Replace the following: S3 BUCKET NAME is the data source for this transfer.
- ENABLED ) . build (); // Create a Transfer Service client StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create (); // Create the transfer job TransferJob response = storageTransfer . createTransferJob ( CreateTransferJobRequest . newBuilder (). setTransferJob ( transferJob ). build ()); System . out . println ( "Created transfer job from AWS to GCS:" ); System . out . println ( response . toString ()); } } Node.js // Imports the Google Cloud client library const { StorageTransferServiceClient , } = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // The ID of the Google Cloud Platform Project that owns the job // projectId = 'my-project-id' // A useful description for your transfer job // description = 'My transfer job' // AWS S3 source bucket name // awsSourceBucket = 'my-s3-source-bucket' // AWS Access Key ID // awsAccessKeyId = 'AKIA...' // AWS Secret Access Key // awsSecretAccessKey = 'HEAoMK2.../...ku8' // Google Cloud Storage destination bucket name // gcsSinkBucket = 'my-gcs-destination-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a one-time transfer job from Amazon S3 to Google Cloud Storage. / async function transferFromS3 () { // Setting the start date and the end date as the same time creates a // one-time transfer const now = new Date (); const oneTimeSchedule = { day : now . getDate (), month : now . getMonth () + 1 , year : now . getFullYear (), }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , description , status : ' ENABLED ' , schedule : { scheduleStartDate : oneTimeSchedule , scheduleEndDate : oneTimeSchedule , }, transferSpec : { awsS3DataSource : { bucketName : awsSourceBucket , awsAccessKey : { accessKeyId : awsAccessKeyId , secretAccessKey : awsSecretAccessKey , }, }, gcsDataSink : { bucketName : gcsSinkBucket , }, }, }, }); console . log ( Created and ran a transfer job from ' ${ awsSourceBucket } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ); } transferFromS3 (); Python Looking for older samples?
- CloudFront distribution If you're transferring from S3 via a CloudFront distribution, specify the distribution domain name as the value of the transferSpec.awsS3DataSource.cloudfrontDomain field: POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : " DESCRIPTION " , "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "awsS3DataSource" : { "bucketName" : " AWS SOURCE NAME " , "cloudfrontDomain" : " https://dy1h2n3l4ob56.cloudfront.net " , "awsAccessKey" : { "accessKeyId" : " AWS ACCESS KEY ID " , "secretAccessKey" : " AWS SECRET ACCESS KEY " } }, "gcsDataSink" : { "bucketName" : " GCS SINK NAME " } } } Managed private network To transfer from S3 using a Google-managed private network, specify the transferSpec.awsS3DataSource.managedPrivateNetwork field: POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : " DESCRIPTION " , "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "awsS3DataSource" : { "bucketName" : " AWS SOURCE NAME " , "managedPrivateNetwork" : TRUE , "awsAccessKey" : { "accessKeyId" : " AWS ACCESS KEY ID " , "secretAccessKey" : " AWS SECRET ACCESS KEY " } }, "gcsDataSink" : { "bucketName" : " GCS SINK NAME " } } } Client libraries The following samples show you how to use Storage Transfer Service programmatically with Go, Java, Node.js, and Python.

