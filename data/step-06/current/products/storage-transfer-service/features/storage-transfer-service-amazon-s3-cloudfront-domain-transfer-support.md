---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.639Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service Amazon S3 CloudFront domain transfer support"
feature_slug: "storage-transfer-service-amazon-s3-cloudfront-domain-transfer-support"
latest_feature_date: "2023-10-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3"
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec"
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data"
keywords:
  - "storage"
  - "transfer"
  - "amazon"
  - "s3"
  - "cloudfront"
  - "domain"
  - "added"
  - "transferring"
---

# Storage Transfer Service Amazon S3 CloudFront domain transfer support

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service added support for transferring data from Amazon S3 via CloudFront domain endpoints.

## Extended Definition

Storage Transfer Service added support for transferring data from Amazon S3 via CloudFront domain endpoints.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data)

## Supporting Pages

### "Transfer from Amazon S3 to Cloud Storage \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CloudFront distribution If you're transferring from S3 via a CloudFront distribution, specify the distribution domain name as the value of the transferSpec.awsS3DataSource.cloudfrontDomain field: POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : " DESCRIPTION " , "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "awsS3DataSource" : { "bucketName" : " AWS SOURCE NAME " , "cloudfrontDomain" : " https://dy1h2n3l4ob56.cloudfront.net " , "awsAccessKey" : { "accessKeyId" : " AWS ACCESS KEY ID " , "secretAccessKey" : " AWS SECRET ACCESS KEY " } }, "gcsDataSink" : { "bucketName" : " GCS SINK NAME " } } } Managed private network To transfer from S3 using a Google-managed private network, specify the transferSpec.awsS3DataSource.managedPrivateNetwork field: POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : " DESCRIPTION " , "status" : "ENABLED" , "projectId" : " PROJECT ID " , "transferSpec" : { "awsS3DataSource" : { "bucketName" : " AWS SOURCE NAME " , "managedPrivateNetwork" : TRUE , "awsAccessKey" : { "accessKeyId" : " AWS ACCESS KEY ID " , "secretAccessKey" : " AWS SECRET ACCESS KEY " } }, "gcsDataSink" : { "bucketName" : " GCS SINK NAME " } } } Client libraries The following samples show you how to use Storage Transfer Service programmatically with Go, Java, Node.js, and Python.
- Event-driven transfers Storage Transfer Service can listen to Amazon S3 Event Notifications sent to Amazon SQS to automatically transfer data that has been added or updated in the source location.
- ENABLED ) . build (); // Create a Transfer Service client StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create (); // Create the transfer job TransferJob response = storageTransfer . createTransferJob ( CreateTransferJobRequest . newBuilder (). setTransferJob ( transferJob ). build ()); System . out . println ( "Created transfer job from AWS to GCS:" ); System . out . println ( response . toString ()); } } Node.js // Imports the Google Cloud client library const { StorageTransferServiceClient , } = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // The ID of the Google Cloud Platform Project that owns the job // projectId = 'my-project-id' // A useful description for your transfer job // description = 'My transfer job' // AWS S3 source bucket name // awsSourceBucket = 'my-s3-source-bucket' // AWS Access Key ID // awsAccessKeyId = 'AKIA...' // AWS Secret Access Key // awsSecretAccessKey = 'HEAoMK2.../...ku8' // Google Cloud Storage destination bucket name // gcsSinkBucket = 'my-gcs-destination-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a one-time transfer job from Amazon S3 to Google Cloud Storage. / async function transferFromS3 () { // Setting the start date and the end date as the same time creates a // one-time transfer const now = new Date (); const oneTimeSchedule = { day : now . getDate (), month : now . getMonth () + 1 , year : now . getFullYear (), }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , description , status : ' ENABLED ' , schedule : { scheduleStartDate : oneTimeSchedule , scheduleEndDate : oneTimeSchedule , }, transferSpec : { awsS3DataSource : { bucketName : awsSourceBucket , awsAccessKey : { accessKeyId : awsAccessKeyId , secretAccessKey : awsSecretAccessKey , }, }, gcsDataSink : { bucketName : gcsSinkBucket , }, }, }, }); console . log ( Created and ran a transfer job from ' ${ awsSourceBucket } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ); } transferFromS3 (); Python Looking for older samples?
- TimeOfDay ; import java.io.IOException ; import java.util.Calendar ; public class TransferFromAws { // Creates a one-off transfer job from Amazon S3 to Google Cloud Storage. public static void transferFromAws ( String projectId , String jobDescription , String awsSourceBucket , String gcsSinkBucket , long startDateTime ) throws IOException { // Your Google Cloud Project ID // String projectId = "your-project-id"; // A short description of this job // String jobDescription = "Sample transfer job from S3 to GCS."; // The name of the source AWS bucket to transfer data from // String awsSourceBucket = "yourAwsSourceBucket"; // The name of the GCS bucket to transfer data to // String gcsSinkBucket = "your-gcs-bucket"; // What day and time in UTC to start the transfer, expressed as an epoch date timestamp. // If this is in the past relative to when the job is created, it will run the next day. // long startDateTime = // new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse("2000-01-01 00:00:00").getTime(); // The ID used to access your AWS account.

### TransferSpec \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec)
- Source ID: `site-api-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a AssumeRoleWithWebIdentity call for the provided role using the GoogleServiceAccount for this project. cloudfrontDomain string Optional.
- JSON representation { "objectConditions" : { object ( ObjectConditions ) } , "transferOptions" : { object ( TransferOptions ) } , "transferManifest" : { object ( TransferManifest ) } , "sourceAgentPoolName" : string , "sinkAgentPoolName" : string , // Union field data sink can be only one of the following: "gcsDataSink" : { object ( GcsData ) } , "posixDataSink" : { object ( PosixFilesystem ) } // End of list of possible types for union field data sink . // Union field data source can be only one of the following: "gcsDataSource" : { object ( GcsData ) } , "awsS3DataSource" : { object ( AwsS3Data ) } , "httpDataSource" : { object ( HttpData ) } , "posixDataSource" : { object ( PosixFilesystem ) } , "azureBlobStorageDataSource" : { object ( AzureBlobStorageData ) } , "awsS3CompatibleDataSource" : { object ( AwsS3CompatibleData ) } , "hdfsDataSource" : { object ( HdfsData ) } // End of list of possible types for union field data source . // Union field intermediate data location can be only one of the following: "gcsIntermediateDataLocation" : { object ( GcsData ) } // End of list of possible types for union field intermediate data location . } Fields objectConditions object ( ObjectConditions ) Only objects that satisfy these object conditions are included in the set of data source and data sink objects.
- JSON representation { "bucketName" : string , "awsAccessKey" : { object ( AwsAccessKey ) } , "path" : string , "roleArn" : string , "cloudfrontDomain" : string , "credentialsSecret" : string , // Union field private network can be only one of the following: "managedPrivateNetwork" : boolean , "privateNetworkService" : string // End of list of possible types for union field private network . } Fields bucketName string Required.
- Union field intermediate data location . intermediate data location can be only one of the following: gcsIntermediateDataLocation object ( GcsData ) For transfers between file systems, specifies a Cloud Storage bucket to be used as an intermediate location through which to transfer data.

### "Class AwsS3Data (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3Data)
- Source ID: `site-python-reference`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See [Configure access to a source: Amazon S3] (https://cloud.google.com/storage-transfer/docs/source-amazon-s3#secret manager) for more information.
- AWS credentials must be stored in Secret Manager in JSON format: { "access key id": "ACCESS KEY ID", "secret access key": "SECRET ACCESS KEY" } GoogleServiceAccount][google.storagetransfer.v1.GoogleServiceAccount] must be granted roles/secretmanager.secretAccessor for the resource.
- If credentials secret is specified, do not specify role arn][google.storagetransfer.v1.AwsS3Data.role arn] or aws access key][google.storagetransfer.v1.AwsS3Data.aws access key] .
- S3 Bucket name (see Creating a bucket aws access key google.cloud.storage transfer v1.types.AwsAccessKey Input only.

