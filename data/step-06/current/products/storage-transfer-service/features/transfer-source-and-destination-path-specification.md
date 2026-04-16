---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.662Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Transfer source and destination path specification"
feature_slug: "transfer-source-and-destination-path-specification"
latest_feature_date: "2021-01-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible"
  - "https://docs.cloud.google.com/storage-transfer/docs/manifest"
keywords:
  - "transfer"
  - "source"
  - "destination"
  - "path"
  - "specification"
  - "storage"
  - "added"
  - "preview"
---

# Transfer source and destination path specification

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service added Preview support for specifying source and destination paths when creating a transfer.

## Extended Definition

Storage Transfer Service added Preview support for specifying source and destination paths when creating a transfer.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- [https://docs.cloud.google.com/storage-transfer/docs/manifest](https://docs.cloud.google.com/storage-transfer/docs/manifest)

## Supporting Pages

### "Transfer from S3-compatible storage to Cloud Storage \_|\_ Storage Transfer\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/s3-compatible)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Defaults to the default agent // const sourceAgentPoolName = 'projects/my-project/agentPools/transfer service default'; // The S3-compatible bucket name to transfer data from // const sourceBucketName = "my-bucket-name"; // The S3-compatible path (object prefix) to transfer data from // const sourcePath = "path/to/data/"; // The ID of the GCS bucket to transfer data to // const gcsSinkBucket = "my-sink-bucket"; // The GCS path (object prefix) to transfer data to // const gcsPath = "path/to/data/"; // The S3 region of the source bucket // const region = 'us-east-1'; // The S3-compatible endpoint // const endpoint = "us-east-1.example.com"; // The S3-compatible network protocol // const protocol = NetworkProtocol.NETWORK PROTOCOL HTTPS; // The S3-compatible request model // const requestModel = RequestModel.REQUEST MODEL VIRTUAL HOSTED STYLE; // The S3-compatible auth method // const authMethod = AuthMethod.AUTH METHOD AWS SIGNATURE V4; // Creates a client const client = new storageTransfer .
- StorageTransferServiceClient (); / Creates a transfer from an AWS S3-compatible source to GCS / async function transferFromS3CompatibleSource () { // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ({ transferJob : { projectId , transferSpec : { sourceAgentPoolName , awsS3CompatibleDataSource : { region , s3Metadata : { authMethod , protocol , requestModel , }, endpoint , bucketName : sourceBucketName , path : sourcePath , }, gcsDataSink : { bucketName : gcsSinkBucket , path : gcsPath , }, }, status : ' ENABLED ' , }, }); await client . runTransferJob ({ jobName : transferJob . name , projectId , }); console . log ( Created and ran a transfer job from ' ${ sourceBucketName } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ` ); } transferFromS3CompatibleSource (); Python To learn how to install and use the client library for Storage Transfer Service, see Storage Transfer Service client libraries .
- Defaults to 'projects/{project id}/agentPools/transfer service default' source agent pool name = 'projects/my-project/agentPools/my-agent' The S3 compatible bucket name to transfer data from source bucket name = "my-bucket-name" The S3 compatible path (object prefix) to transfer data from source path = "path/to/data/" The ID of the GCS bucket to transfer data to gcs sink bucket = "my-sink-bucket" The GCS path (object prefix) to transfer data to gcs path = "path/to/data/" The S3 region of the source bucket region = 'us-east-1' The S3-compatible endpoint endpoint = "us-east-1.example.com" The S3-compatible network protocol protocol = NetworkProtocol.NETWORK PROTOCOL HTTPS The S3-compatible request model request model = RequestModel.REQUEST MODEL VIRTUAL HOSTED STYLE The S3-compatible auth method auth method = AuthMethod.AUTH METHOD AWS SIGNATURE V4 transfer job request = storage transfer .
- If not provided, defaults to the default agent. // sourceAgentPoolName := "projects/my-project/agentPools/transfer service default" // The S3 compatible bucket name to transfer data from. //sourceBucketName = "my-bucket-name" // The S3 compatible path (object prefix) to transfer data from. //sourcePath = "path/to/data" // The ID of the GCS bucket to transfer data to. //gcsSinkBucket = "my-sink-bucket" // The GCS path (object prefix) to transfer data to. //gcsPath = "path/to/data" // The S3 region of the source bucket. region := "us-east-1" // The S3 compatible endpoint. endpoint := "us-east-1.example.com" // The S3 compatible network protocol. protocol := storagetransferpb .

### Create transfers \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers](https://docs.cloud.google.com/storage-transfer/docs/create-transfers)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Then, specify these 3 resources when calling transfer jobs create : gcloud transfer jobs create \ posix:///tmp/source/on/systemA posix:///tmp/destination/on/systemB \ --source-agent-pool = source agent pool \ --destination-agent-pool = destination agent pool \ --intermediate-storage-path = gs://my-intermediary-bucket REST The following samples show you how to use Storage Transfer Service through the REST API.
- Specifying a destination path To specify a destination folder when you create a transfer job, add a path field to the gcsDataSink field in your TransferSpec specification: { gcsDa ta Si n k : { bucke t Name : " DESTINATION BUCKET " , pa t h : " DESTINATION PATH /" , }, } In this example: DESTINATION BUCKET : The destination Cloud Storage bucket.
- Specifying a source path To specify a source path when creating a transfer job, add a path field to the gcsDataSource field in your TransferSpec specification: { gcsDa ta Source : { bucke t Name : " SOURCE BUCKET " , pa t h : " SOURCE PATH /" , }, } In this example: SOURCE BUCKET : The source Cloud Storage bucket.
- Specifying source and destination paths Source and destination paths enable you to specify source and destination directories when transferring data to your Cloud Storage bucket.

### "Transfer specific files or objects using a manifest \_|\_ Storage Transfer\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/manifest](https://docs.cloud.google.com/storage-transfer/docs/manifest)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enter the manifest file location. gcloud To transfer the files or objects that are listed in the manifest, include the --manifest-file= MANIFEST FILE flag with your gcloud transfer jobs create command. gcloud transfer jobs create SOURCE DESTINATION \ --manifest-file = MANIFEST FILE MANIFEST FILE can be any of the following values: The path to the CSV file in a Cloud Storage bucket: --manifest-file=gs://my bucket/sample manifest.csv See Upload the manifest to Cloud Storage for details on required permissions, if the bucket or file is not public.
- The relative path from the file system SOURCE , including any path that was specified: --manifest-file=source://relative path/sample manifest.csv The relative path from the file system DESTINATION , including any path that was specified: --manifest-file=destination://relative path/sample manifest.csv REST + Client libraries REST To transfer the files or objects that are listed in the manifest, make a createTransferJob API call that specifies a transferSpec with the transferManifest field added.
- For example: POST https://storagetransfer.googleapis.com/v1/transferJobs ... "transferSpec": { "posixDataSource": { "rootDirectory": "/home/", }, "gcsDataSink": { "bucketName": "GCS NEARLINE SINK NAME", "path": "GCS SINK PATH", }, "transferManifest": { "location": "gs://my bucket/sample manifest.csv" } } The manifest file can be stored in a Cloud Storage bucket, or on the source or destination file system.
- Defaults to 'projects/{project id}/agentPools/transfer service default' source agent pool name = 'projects/my-project/agentPools/my-agent' The root directory path on the source filesystem root directory = '/directory/to/transfer/source' Google Cloud Storage destination bucket name sink bucket = 'my-gcs-destination-bucket' Transfer manifest location.

