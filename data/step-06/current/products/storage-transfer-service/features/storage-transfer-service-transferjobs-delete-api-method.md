---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.644Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service transferJobs.delete API method"
feature_slug: "storage-transfer-service-transferjobs-delete-api-method"
latest_feature_date: "2022-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs"
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs/delete"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible"
keywords:
  - "storage"
  - "transfer"
  - "transferjobs"
  - "delete"
  - "method"
  - "rest"
  - "added"
  - "which"
---

# Storage Transfer Service transferJobs.delete API method

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

The Storage Transfer Service REST API added the transferJobs.delete method, which deletes a transfer job and stops all current and future operations associated with that job.

## Extended Definition

The Storage Transfer Service REST API added the transferJobs.delete method, which deletes a transfer job and stops all current and future operations associated with that job.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs/delete](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs/delete)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)

## Supporting Pages

### "REST Resource: transferJobs \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage Storage Transfer Service Reference Send feedback REST Resource: transferJobs Stay organized with collections Save and categorize content based on your preferences.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . eventStreamExpirationTime string ( Timestamp format) Specifies the data and time at which Storage Transfer Service stops listening for events from this stream.
- Methods create Creates a transfer job that runs periodically. delete Deletes a transfer job. get Gets a transfer job. list Lists transfer jobs. patch Updates a transfer job. run Starts a new operation for the specified transfer job.
- JSON representation { "objectConditions" : { object ( ObjectConditions ) } , "transferOptions" : { object ( TransferOptions ) } , // Union field data source can be only one of the following: "gcsDataSource" : { object ( GcsData ) } // End of list of possible types for union field data source . // Union field data sink can be only one of the following: "gcsDataSink" : { object ( GcsData ) } // End of list of possible types for union field data sink . } Fields objectConditions object ( ObjectConditions ) Object conditions that determine which objects are transferred.

### "Method: transferJobs.delete \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs/delete](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs/delete)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage Storage Transfer Service Reference Send feedback Method: transferJobs.delete Stay organized with collections Save and categorize content based on your preferences.
- HTTP request DELETE https://storagetransfer.googleapis.com/v1/{jobName=transferJobs/ } The URL uses gRPC Transcoding syntax.
- Authorization requires the following IAM permission on the specified resource jobName : storagetransfer.jobs.delete Query parameters Parameters projectId string Required.
- Deleting a transfer job sets its status to DELETED .

### "Transfer from S3-compatible storage to Cloud Storage \_|\_ Storage Transfer\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST https: //storagetransfer.googleapis.com/v1/transferJobs { ... "transferSpec" : { "source agent pool name" : " POOL NAME " , "awsS3CompatibleData" : { "region" : "us-east-1" , "s3Metadata" : { "protocol" : "NETWORK PROTOCOL HTTPS" , "requestModel" : "REQUEST MODEL VIRTUAL HOSTED STYLE" , "authMethod" : "AUTH METHOD AWS SIGNATURE V4" }, "endpoint" : "example.com" , "bucketName" : " BUCKET NAME " , "path" : " PATH " , }, "gcsDataSink" : { "bucketName" : " SINK NAME " , "path" : " SINK PATH " }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : false } } } See the AwsS3CompatibleData API reference for field descriptions.
- Defaults to the default agent // const sourceAgentPoolName = 'projects/my-project/agentPools/transfer service default'; // The S3-compatible bucket name to transfer data from // const sourceBucketName = "my-bucket-name"; // The S3-compatible path (object prefix) to transfer data from // const sourcePath = "path/to/data/"; // The ID of the GCS bucket to transfer data to // const gcsSinkBucket = "my-sink-bucket"; // The GCS path (object prefix) to transfer data to // const gcsPath = "path/to/data/"; // The S3 region of the source bucket // const region = 'us-east-1'; // The S3-compatible endpoint // const endpoint = "us-east-1.example.com"; // The S3-compatible network protocol // const protocol = NetworkProtocol.NETWORK PROTOCOL HTTPS; // The S3-compatible request model // const requestModel = RequestModel.REQUEST MODEL VIRTUAL HOSTED STYLE; // The S3-compatible auth method // const authMethod = AuthMethod.AUTH METHOD AWS SIGNATURE V4; // Creates a client const client = new storageTransfer .
- StorageTransferServiceClient (); / Creates a transfer from an AWS S3-compatible source to GCS / async function transferFromS3CompatibleSource () { // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , transferSpec : { sourceAgentPoolName , awsS3CompatibleDataSource : { region , s3Metadata : { authMethod , protocol , requestModel , }, endpoint , bucketName : sourceBucketName , path : sourcePath , }, gcsDataSink : { bucketName : gcsSinkBucket , path : gcsPath , }, }, status : ' ENABLED ' , }, }); await client . runTransferJob ({ jobName : transferJob . name , projectId , }); console . log ( Created and ran a transfer job from ' ${ sourceBucketName } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ` ); } transferFromS3CompatibleSource (); Python To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- Defaults to 'projects/{project id}/agentPools/transfer service default' source agent pool name = 'projects/my-project/agentPools/my-agent' The S3 compatible bucket name to transfer data from source bucket name = "my-bucket-name" The S3 compatible path (object prefix) to transfer data from source path = "path/to/data/" The ID of the GCS bucket to transfer data to gcs sink bucket = "my-sink-bucket" The GCS path (object prefix) to transfer data to gcs path = "path/to/data/" The S3 region of the source bucket region = 'us-east-1' The S3-compatible endpoint endpoint = "us-east-1.example.com" The S3-compatible network protocol protocol = NetworkProtocol.NETWORK PROTOCOL HTTPS The S3-compatible request model request model = RequestModel.REQUEST MODEL VIRTUAL HOSTED STYLE The S3-compatible auth method auth method = AuthMethod.AUTH METHOD AWS SIGNATURE V4 transfer job request = storage transfer .

