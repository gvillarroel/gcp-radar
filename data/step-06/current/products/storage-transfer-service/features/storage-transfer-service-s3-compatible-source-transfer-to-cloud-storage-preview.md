---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.644Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service S3-compatible source transfer to Cloud Storage (Preview)"
feature_slug: "storage-transfer-service-s3-compatible-source-transfer-to-cloud-storage-preview"
latest_feature_date: "2022-09-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible"
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3CompatibleData"
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types"
keywords:
  - "storage"
  - "transfer"
  - "s3"
  - "compatible"
  - "source"
  - "preview"
  - "introduced"
  - "transferring"
---

# Storage Transfer Service S3-compatible source transfer to Cloud Storage (Preview)

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service introduced preview support for transferring data from S3-compatible storage (including AWS S3) to Cloud Storage, including transfer routing controls to reduce egress charges.

## Extended Definition

Storage Transfer Service introduced preview support for transferring data from S3-compatible storage (including AWS S3) to Cloud Storage, including transfer routing controls to reduce egress charges.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3CompatibleData](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3CompatibleData)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types)

## Supporting Pages

### "Transfer from S3-compatible storage to Cloud Storage \_|\_ Storage Transfer\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Obtain source credentials Transferring from S3-compatible storage requires an access key ID and a secret access key .
- Defaults to the default agent // const sourceAgentPoolName = 'projects/my-project/agentPools/transfer service default'; // The S3-compatible bucket name to transfer data from // const sourceBucketName = "my-bucket-name"; // The S3-compatible path (object prefix) to transfer data from // const sourcePath = "path/to/data/"; // The ID of the GCS bucket to transfer data to // const gcsSinkBucket = "my-sink-bucket"; // The GCS path (object prefix) to transfer data to // const gcsPath = "path/to/data/"; // The S3 region of the source bucket // const region = 'us-east-1'; // The S3-compatible endpoint // const endpoint = "us-east-1.example.com"; // The S3-compatible network protocol // const protocol = NetworkProtocol.NETWORK PROTOCOL HTTPS; // The S3-compatible request model // const requestModel = RequestModel.REQUEST MODEL VIRTUAL HOSTED STYLE; // The S3-compatible auth method // const authMethod = AuthMethod.AUTH METHOD AWS SIGNATURE V4; // Creates a client const client = new storageTransfer .
- StorageTransferServiceClient (); / Creates a transfer from an AWS S3-compatible source to GCS / async function transferFromS3CompatibleSource () { // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , transferSpec : { sourceAgentPoolName , awsS3CompatibleDataSource : { region , s3Metadata : { authMethod , protocol , requestModel , }, endpoint , bucketName : sourceBucketName , path : sourcePath , }, gcsDataSink : { bucketName : gcsSinkBucket , path : gcsPath , }, }, status : ' ENABLED ' , }, }); await client . runTransferJob ({ jobName : transferJob . name , projectId , }); console . log ( Created and ran a transfer job from ' ${ sourceBucketName } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ` ); } transferFromS3CompatibleSource (); Python To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- Defaults to 'projects/{project id}/agentPools/transfer service default' source agent pool name = 'projects/my-project/agentPools/my-agent' The S3 compatible bucket name to transfer data from source bucket name = "my-bucket-name" The S3 compatible path (object prefix) to transfer data from source path = "path/to/data/" The ID of the GCS bucket to transfer data to gcs sink bucket = "my-sink-bucket" The GCS path (object prefix) to transfer data to gcs path = "path/to/data/" The S3 region of the source bucket region = 'us-east-1' The S3-compatible endpoint endpoint = "us-east-1.example.com" The S3-compatible network protocol protocol = NetworkProtocol.NETWORK PROTOCOL HTTPS The S3-compatible request model request model = RequestModel.REQUEST MODEL VIRTUAL HOSTED STYLE The S3-compatible auth method auth method = AuthMethod.AUTH METHOD AWS SIGNATURE V4 transfer job request = storage transfer .

### "Class AwsS3CompatibleData (1.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3CompatibleData](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AwsS3CompatibleData)
- Source ID: `site-python-reference`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This can be left blank if requests should be signed with an empty region. s3 metadata google.cloud.storage transfer v1.types.S3CompatibleMetadata A S3 compatible metadata.
- 1.20.0 (latest) 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.5 1.10.0 1.9.2 1.8.1 1.7.1 1.6.0 1.5.2 1.4.1 1.3.1 1.2.1 1.1.1 1.0.2 0.1.0 AwsS3CompatibleData ( mapping = None , , ignore unknown fields = False , kwargs ) An AwsS3CompatibleData resource. .. oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields Attributes Name Description bucket name str Required.
- Home Documentation Developer tools Python Client libraries Send feedback Class AwsS3CompatibleData (1.20.0) Stay organized with collections Save and categorize content based on your preferences.
- Specifies the endpoint of the storage service. region str Specifies the region to sign requests with.

### "Package types (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types)
- Source ID: `site-python-reference`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Notifications are published to the customer-provided topic using the following PubsubMessage.attributes : "eventType" : one of the EventType][google.storagetransfer.v1.NotificationConfig.EventType] values "payloadFormat" : one of the PayloadFormat][google.storagetransfer.v1.NotificationConfig.PayloadFormat] values "projectId" : the project id][google.storagetransfer.v1.TransferOperation.project id] of the TransferOperation "transferJobName" : the transfer job name][google.storagetransfer.v1.TransferOperation.transfer job name] of the TransferOperation "transferOperationName" : the name][google.storagetransfer.v1.TransferOperation.name] of the TransferOperation The PubsubMessage.data contains a TransferOperation][google.storagetransfer.v1.TransferOperation] resource formatted according to the specified PayloadFormat .
- Storage Transfer Service obeys robots.txt rules and requires the source HTTP server to support Range requests and to return a Content-Length header in each response.
- For an example of a valid TSV file, see Transferring data from URLs <https://cloud.google.com/storage-transfer/docs/create-url-list> .
- Transfers with a PosixFilesystem][google.storagetransfer.v1.PosixFilesystem] source or destination don't support ObjectConditions .

