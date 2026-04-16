---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.645Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service metadata preservation"
feature_slug: "storage-transfer-service-metadata-preservation"
latest_feature_date: "2022-06-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3"
keywords:
  - "storage"
  - "transfer"
  - "metadata"
  - "preservation"
  - "now"
  - "generally"
  - "available"
  - "enabling"
---

# Storage Transfer Service metadata preservation

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Metadata preservation is now generally available, enabling transfers to retain POSIX attributes and symlinks across POSIX filesystems and object ACLs, CMEK, temporary holds, and object creation time when moving objects between Cloud Storage buckets; Storage Transfer Service now supports preserving metadata during data transfers.

## Extended Definition

Metadata preservation is now generally available, enabling transfers to retain POSIX attributes and symlinks across POSIX filesystems and object ACLs, CMEK, temporary holds, and object creation time when moving objects between Cloud Storage buckets; Storage Transfer Service now supports preserving metadata during data transfers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)

## Supporting Pages

### "Metadata preservation \_|\_ Storage Transfer Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Transfers between Cloud Storage buckets Metadata example Preservation behavior Cloud Storage fixed-key metadata fields, such as: Cache-Control , Content-Disposition , and Content-Type .
- Metadata preservation behavior The following sections list metadata examples from different source storage systems and how Storage Transfer Service preserves metadata from each.
- Home Documentation Storage Storage Transfer Service Send feedback Metadata preservation Stay organized with collections Save and categorize content based on your preferences.
- For the latter, the metadata must have been preserved when files were initially transferred to Cloud Storage. { "description": "metadata-example", "projectId": "example-project-id" "transferSpec": { ... "transferOptions": { "metadataOptions": { "gid": "GID NUMBER", # Default is "GID SKIP" "uid": "UID NUMBER", # Default is "UID SKIP" "mode": "MODE PRESERVE", # Default is "MODE SKIP" "symlink": "SYMLINK PRESERVE" # Default is "SYMLINK SKIP" } } } } POSIX to Cloud Storage Preserved metadata is stored in Cloud Storage as custom metadata key:value pairs.

### "Transfer from S3-compatible storage to Cloud Storage \_|\_ Storage Transfer\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- See the Amazon S3 or S3-compatible storage to Cloud Storage section of Metadata preservation for details on which metadata can be preserved, and how to configure your transfer.
- Metadata preservation When transferring files from S3-compatible storage, Storage Transfer Service can optionally preserve certain attributes as custom metadata.
- StorageTransferServiceClient (); / Creates a transfer from an AWS S3-compatible source to GCS / async function transferFromS3CompatibleSource () { // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , transferSpec : { sourceAgentPoolName , awsS3CompatibleDataSource : { region , s3Metadata : { authMethod , protocol , requestModel , }, endpoint , bucketName : sourceBucketName , path : sourcePath , }, gcsDataSink : { bucketName : gcsSinkBucket , path : gcsPath , }, }, status : ' ENABLED ' , }, }); await client . runTransferJob ({ jobName : transferJob . name , projectId , }); console . log ( Created and ran a transfer job from ' ${ sourceBucketName } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ` ); } transferFromS3CompatibleSource (); Python To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- POST https: //storagetransfer.googleapis.com/v1/transferJobs { ... "transferSpec" : { "source agent pool name" : " POOL NAME " , "awsS3CompatibleData" : { "region" : "us-east-1" , "s3Metadata" : { "protocol" : "NETWORK PROTOCOL HTTPS" , "requestModel" : "REQUEST MODEL VIRTUAL HOSTED STYLE" , "authMethod" : "AUTH METHOD AWS SIGNATURE V4" }, "endpoint" : "example.com" , "bucketName" : " BUCKET NAME " , "path" : " PATH " , }, "gcsDataSink" : { "bucketName" : " SINK NAME " , "path" : " SINK PATH " }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : false } } } See the AwsS3CompatibleData API reference for field descriptions.

### "Transfer from Amazon S3 to Cloud Storage \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agentless/s3)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- See the Amazon S3 to Cloud Storage section of Metadata preservation for details on which metadata can be preserved, and how to configure your transfer.
- Metadata preservation When transferring files from S3, Storage Transfer Service can optionally preserve certain attributes as custom metadata.
- Supported regions Storage Transfer Service supports the following Amazon S3 regions: af-south-1 ap-east-1 ap-northeast-1 ap-northeast-2 ap-northeast-3 ap-south-1 ap-south-2 ap-southeast-1 ap-southeast-2 ap-southeast-3 ap-southeast-4 ca-central-1 ca-west-1 eu-central-1 eu-central-2 eu-north-1 eu-south-1 eu-south-2 eu-west-1 eu-west-2 eu-west-3 il-central-1 me-central-1 me-south-1 sa-east-1 us-east-1 us-east-2 us-west-1 us-west-2 Transfers using the managed private network support the following AWS regions: ap-east-1 ap-northeast-1 ap-northeast-2 ap-northeast-3 ap-south-1 ap-south-2 ap-southeast-1 ca-central-1 ca-west-1 eu-central-1 eu-central-2 eu-north-1 eu-south-1 eu-south-2 eu-west-1 eu-west-2 eu-west-3 us-east-1 us-east-2 us-west-1 us-west-2 Transfer options The following Storage Transfer Service features are available for transfers from S3 to Cloud Storage Transfer specific files using a manifest You can pass a list of files for Storage Transfer Service to act on.
- Transfer options : Specify whether to overwrite destination files ( --overwrite-when=different or always ) and whether to delete certain files during or after the transfer ( --delete-from=destination-if-unique or source-after-transfer ); specify which metadata values to preserve ( --preserve-metadata ); and optionally set a storage class on transferred objects ( --custom-storage-class ).

