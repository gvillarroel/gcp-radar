---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.653Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service on-premises transfers API"
feature_slug: "storage-transfer-service-on-premises-transfers-api"
latest_feature_date: "2021-12-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible"
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient"
keywords:
  - "storage"
  - "transfer"
  - "premises"
  - "transfers"
  - "managing"
  - "jobs"
  - "now"
  - "generally"
---

# Storage Transfer Service on-premises transfers API

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

The Storage Transfer Service API for managing on-premises transfer jobs is now generally available and supports RESTful automation of on-prem to Cloud transfer workflows.

## Extended Definition

The Storage Transfer Service API for managing on-premises transfer jobs is now generally available and supports RESTful automation of on-prem to Cloud transfer workflows.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient)

## Supporting Pages

### "Transfer from HDFS to Cloud Storage \_|\_ Storage Transfer Service \_|\_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/hdfs)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { ... "transferSpec" : { "source agent pool name" : " POOL NAME " , "hdfsDataSource" : { "path" : "/mount" }, "gcsDataSink" : { "bucketName" : " SINK NAME " }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : false } } } Refer to the transferJobs.create reference for details about additional supported fields.
- Storage Transfer Service supports transfers from cloud and on-premises Hadoop Distributed File System (HDFS) sources.
- Use cases include migrating from on-premises storage to Cloud Storage, archiving data to free up on-premises storage space, replicating data to Google Cloud for business continuity, or transferring data to Google Cloud for analysis and processing.
- To run the job, update it to add a schedule, or use jobs run to start it manually . --manifest-file specifies the path to a CSV file in Cloud Storage containing a list of files to transfer from your source.

### "Transfer from S3-compatible storage to Cloud Storage \_|\_ Storage Transfer\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POST https: //storagetransfer.googleapis.com/v1/transferJobs { ... "transferSpec" : { "source agent pool name" : " POOL NAME " , "awsS3CompatibleData" : { "region" : "us-east-1" , "s3Metadata" : { "protocol" : "NETWORK PROTOCOL HTTPS" , "requestModel" : "REQUEST MODEL VIRTUAL HOSTED STYLE" , "authMethod" : "AUTH METHOD AWS SIGNATURE V4" }, "endpoint" : "example.com" , "bucketName" : " BUCKET NAME " , "path" : " PATH " , }, "gcsDataSink" : { "bucketName" : " SINK NAME " , "path" : " SINK PATH " }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : false } } } See the AwsS3CompatibleData API reference for field descriptions.
- Storage Transfer Service supports transfers from cloud or on-premises object storage systems that are compatible with the Amazon S3 API.
- StorageTransferServiceClient (); / Creates a transfer from an AWS S3-compatible source to GCS / async function transferFromS3CompatibleSource () { // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , transferSpec : { sourceAgentPoolName , awsS3CompatibleDataSource : { region , s3Metadata : { authMethod , protocol , requestModel , }, endpoint , bucketName : sourceBucketName , path : sourcePath , }, gcsDataSink : { bucketName : gcsSinkBucket , path : gcsPath , }, }, status : ' ENABLED ' , }, }); await client . runTransferJob ({ jobName : transferJob . name , projectId , }); console . log ( Created and ran a transfer job from ' ${ sourceBucketName } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ` ); } transferFromS3CompatibleSource (); Python To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- To use the gcloud CLI to create a transfer from an S3-compatible source to a Cloud Storage bucket, use the following command. gcloud transfer jobs create s3: // SOURCE BUCKET NAME gs:// SINK BUCKET NAME \ --source-agent-pool= POOL NAME \ --source-endpoint= ENDPOINT \ --source-signing-region= REGION \ --source-auth-method= AWS SIGNATURE V2 AWS SIGNATURE V4 \ --source-request-model= PATH STYLE VIRTUAL HOSTED STYLE \ --source-network-protocol= HTTP HTTPS \ --source-list-api= LIST OBJECTS LIST OBJECTS V2 The following flags are required: --source-agent-pool is the name of the agent pool to use for this transfer. --source-endpoint specifies your storage system's endpoint.

### "Class StorageTransferServiceAsyncClient (1.20.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListTransferJobsRequest ( filter="filter value", ) Make the request page result = client. list transfer jobs (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.storage transfer v1.types.ListTransferJobsRequest , dict]] The request object. projectId , jobNames , and jobStatuses are query parameters that can be specified when listing transfer jobs. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import storage transfer v1 async def sample list transfer jobs(): Create a client client = storage transfer v1 .
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,StorageTransferServiceTransport,Callable[..., StorageTransferServiceTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.
- Returns Type Description StorageTransferServiceAsyncClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.

