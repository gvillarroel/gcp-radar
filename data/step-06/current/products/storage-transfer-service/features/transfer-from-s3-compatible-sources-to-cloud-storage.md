---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.642Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Transfer from S3-compatible sources to Cloud Storage"
feature_slug: "transfer-from-s3-compatible-sources-to-cloud-storage"
latest_feature_date: "2023-04-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible"
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers"
keywords:
  - "transfer"
  - "s3"
  - "compatible"
  - "sources"
  - "storage"
  - "transfers"
  - "became"
  - "generally"
---

# Transfer from S3-compatible sources to Cloud Storage

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Transfers from S3-compatible storage to Cloud Storage became generally available, including support for copying from AWS S3 and optionally controlling network routes to reduce egress charges.

## Extended Definition

Transfers from S3-compatible storage to Cloud Storage became generally available, including support for copying from AWS S3 and optionally controlling network routes to reduce egress charges.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers)

## Supporting Pages

### "Transfer from S3-compatible storage to Cloud Storage \_|\_ Storage Transfer\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- StorageTransferServiceClient (); / Creates a transfer from an AWS S3-compatible source to GCS / async function transferFromS3CompatibleSource () { // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , transferSpec : { sourceAgentPoolName , awsS3CompatibleDataSource : { region , s3Metadata : { authMethod , protocol , requestModel , }, endpoint , bucketName : sourceBucketName , path : sourcePath , }, gcsDataSink : { bucketName : gcsSinkBucket , path : gcsPath , }, }, status : ' ENABLED ' , }, }); await client . runTransferJob ({ jobName : transferJob . name , projectId , }); console . log ( Created and ran a transfer job from ' ${ sourceBucketName } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ` ); } transferFromS3CompatibleSource (); Python To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- POST https: //storagetransfer.googleapis.com/v1/transferJobs { ... "transferSpec" : { "source agent pool name" : " POOL NAME " , "awsS3CompatibleData" : { "region" : "us-east-1" , "s3Metadata" : { "protocol" : "NETWORK PROTOCOL HTTPS" , "requestModel" : "REQUEST MODEL VIRTUAL HOSTED STYLE" , "authMethod" : "AUTH METHOD AWS SIGNATURE V4" }, "endpoint" : "example.com" , "bucketName" : " BUCKET NAME " , "path" : " PATH " , }, "gcsDataSink" : { "bucketName" : " SINK NAME " , "path" : " SINK PATH " }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : false } } } See the AwsS3CompatibleData API reference for field descriptions.
- For more information, see Set up authentication for a local development environment . // Imports the Google Cloud client library const storageTransfer = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // Useful enums for AWS S3-Compatible Transfers // const {AuthMethod, NetworkProtocol, RequestModel} = storageTransfer.protos.google.storagetransfer.v1.S3CompatibleMetadata; // Your project id // const projectId = 'my-project'; // The agent pool associated with the S3-compatible data source.
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources, // or use "try-with-close" statement to do this automatically. try ( StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create ()) { // Create the transfer job TransferJob response = storageTransfer . createTransferJob ( TransferProto .

### TransferSpec \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec)
- Source ID: `site-api-reference`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "objectConditions" : { object ( ObjectConditions ) } , "transferOptions" : { object ( TransferOptions ) } , "transferManifest" : { object ( TransferManifest ) } , "sourceAgentPoolName" : string , "sinkAgentPoolName" : string , // Union field data sink can be only one of the following: "gcsDataSink" : { object ( GcsData ) } , "posixDataSink" : { object ( PosixFilesystem ) } // End of list of possible types for union field data sink . // Union field data source can be only one of the following: "gcsDataSource" : { object ( GcsData ) } , "awsS3DataSource" : { object ( AwsS3Data ) } , "httpDataSource" : { object ( HttpData ) } , "posixDataSource" : { object ( PosixFilesystem ) } , "azureBlobStorageDataSource" : { object ( AzureBlobStorageData ) } , "awsS3CompatibleDataSource" : { object ( AwsS3CompatibleData ) } , "hdfsDataSource" : { object ( HdfsData ) } // End of list of possible types for union field data source . // Union field intermediate data location can be only one of the following: "gcsIntermediateDataLocation" : { object ( GcsData ) } // End of list of possible types for union field intermediate data location . } Fields objectConditions object ( ObjectConditions ) Only objects that satisfy these object conditions are included in the set of data source and data sink objects.
- Union field intermediate data location . intermediate data location can be only one of the following: gcsIntermediateDataLocation object ( GcsData ) For transfers between file systems, specifies a Cloud Storage bucket to be used as an intermediate location through which to transfer data.
- This network is shared between other users of Storage Transfer Service. privateNetworkService string Service Directory Service to be used as the endpoint for transfers from a customer-managed private network.
- Home Documentation Storage Storage Transfer Service Reference Send feedback TransferSpec Stay organized with collections Save and categorize content based on your preferences.

### Create transfers \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Transfers from S3-compatible sources also use the following options: --source-endpoint (required) specifies your storage system's endpoint.
- After completing all of your requests, call // the "close" method on the client to safely clean up any remaining background resources, // or use "try-with-close" statement to do this automatically. try ( StorageTransferServiceClient storageTransfer = StorageTransferServiceClient . create ()) { // Create the transfer job TransferJob response = storageTransfer . createTransferJob ( TransferProto .
- Cloud Logging : Enable Cloud Logging for agentless transfers, or transfers from S3-compatible sources, with --log-actions and --log-action-states .
- Transfers whose source and/or destination is a file system, or from S3-compatible storage, do require agents and agent pools.

