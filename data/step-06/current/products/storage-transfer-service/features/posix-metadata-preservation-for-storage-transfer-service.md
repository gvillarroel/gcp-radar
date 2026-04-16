---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.651Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "POSIX metadata preservation for Storage Transfer Service"
feature_slug: "posix-metadata-preservation-for-storage-transfer-service"
latest_feature_date: "2022-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage"
  - "https://docs.cloud.google.com/storage-transfer/docs/file-to-file"
keywords:
  - "posix"
  - "metadata"
  - "preservation"
  - "storage"
  - "transfer"
  - "adds"
  - "preview"
  - "preserving"
---

# POSIX metadata preservation for Storage Transfer Service

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service adds preview support for preserving POSIX attributes and symlinks when transferring data to, from, and between POSIX filesystems.

## Extended Definition

Storage Transfer Service adds preview support for preserving POSIX attributes and symlinks when transferring data to, from, and between POSIX filesystems.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage)
- [https://docs.cloud.google.com/storage-transfer/docs/file-to-file](https://docs.cloud.google.com/storage-transfer/docs/file-to-file)

## Supporting Pages

### "Metadata preservation \_|\_ Storage Transfer Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For the latter, the metadata must have been preserved when files were initially transferred to Cloud Storage. { "description": "metadata-example", "projectId": "example-project-id" "transferSpec": { ... "transferOptions": { "metadataOptions": { "gid": "GID NUMBER", # Default is "GID SKIP" "uid": "UID NUMBER", # Default is "UID SKIP" "mode": "MODE PRESERVE", # Default is "MODE SKIP" "symlink": "SYMLINK PRESERVE" # Default is "SYMLINK SKIP" } } } } POSIX to Cloud Storage Preserved metadata is stored in Cloud Storage as custom metadata key:value pairs.
- Cloud Storage to POSIX If metadata is preserved when files are transferred to Cloud Storage, that metadata can be written back to the files when they are transferred back to a POSIX file system .
- Preserving optional POSIX metadata To preserve one or more of numeric UID, numeric GID, numeric MODE, and symbolic links, specify a metadataOptions object in the body of your transfer job.
- Transfers between Cloud Storage buckets Metadata example Preservation behavior Cloud Storage fixed-key metadata fields, such as: Cache-Control , Content-Disposition , and Content-Type .

### "Transfer data between file systems \_|\_ Storage Transfer Service \_|\_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/file-to-file](https://docs.cloud.google.com/storage-transfer/docs/file-to-file)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Preserving file metadata To preserve file metadata, including numeric UID, GID, MODE, and symbolic links: gcloud CLI Use the --preserve-metadata field to specify the preservation behavior for this transfer.
- Defaults to the default agent // const sinkAgentPoolName = 'projects/my-project/agentPools/transfer service default' // The root directory path on the source filesystem // const rootDirectory = '/directory/to/transfer/source' // The root directory path on the sink filesystem // const destinationDirectory = '/directory/to/transfer/sink' // The ID of the GCS bucket for intermediate storage // const bucketName = 'my-intermediate-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a request to transfer from the local file system to the sink bucket / async function transferDirectory () { const createRequest = { transferJob : { projectId , transferSpec : { sourceAgentPoolName , sinkAgentPoolName , posixDataSource : { rootDirectory , }, posixDataSink : { rootDirectory : destinationDirectory , }, gcsIntermediateDataLocation : { bucketName , }, }, status : ' ENABLED ' , }, }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ( createRequest ); const runRequest = { jobName : transferJob . name , projectId : projectId , }; await client . runTransferJob ( runRequest ); console . log ( Created and ran a transfer job from ' ${ rootDirectory } ' to ' ${ destinationDirectory } ' with name ${ transferJob . name } ); } transferDirectory (); Python from google.cloud import storage transfer def transfer between posix ( project id : str , description : str , source agent pool name : str , sink agent pool name : str , root directory : str , destination directory : str , intermediate bucket : str , ): """Creates a transfer between POSIX file systems.""" client = storage transfer .
- If not provided, defaults to the default // agent String sinkAgentPoolName = "projects/my-project-id/agentPools/transfer service default" ; // The root directory path on the source filesystem String rootDirectory = "/directory/to/transfer/source" ; // The root directory path on the sink filesystem String destinationDirectory = "/directory/to/transfer/sink" ; // The ID of the GCS bucket for intermediate storage String bucketName = "my-intermediate-bucket" ; transferBetweenPosix ( projectId , sourceAgentPoolName , sinkAgentPoolName , rootDirectory , destinationDirectory , bucketName ); } public static void transferBetweenPosix ( String projectId , String sourceAgentPoolName , String sinkAgentPoolName , String rootDirectory , String destinationDirectory , String bucketName ) throws IOException { TransferJob transferJob = TransferJob . newBuilder () . setProjectId ( projectId ) . setTransferSpec ( TransferSpec . newBuilder () . setSinkAgentPoolName ( sinkAgentPoolName ) . setSourceAgentPoolName ( sourceAgentPoolName ) . setPosixDataSource ( PosixFilesystem . newBuilder (). setRootDirectory ( rootDirectory ). build ()) . setPosixDataSink ( PosixFilesystem . newBuilder (). setRootDirectory ( destinationDirectory ). build ()) . setGcsIntermediateDataLocation ( GcsData . newBuilder (). setBucketName ( bucketName ). build ()) . build ()) . setStatus ( TransferJob .
- ENABLED , "transfer spec" : { "source agent pool name" : source agent pool name , "sink agent pool name" : sink agent pool name , "posix data source" : { "root directory" : root directory , }, "posix data sink" : { "root directory" : destination directory , }, "gcs intermediate data location" : { "bucket name" : intermediate bucket }, }, } } ) result = client . create transfer job ( transfer job request ) print ( f "Created transferJob: { result . name } " ) Manage intermediary buckets After a transfer job completes, Storage Transfer Service saves transfer logs listing transferred and failed-to-transfer data in the bucket.

### "Transfer from a file system to Cloud Storage \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Metadata preservation When transferring files from file systems, Storage Transfer Service can optionally preserve certain attributes as custom metadata.
- See the POSIX file system transfers section of Metadata preservation for details on which metadata can be preserved, and how to configure your transfer.
- If these files are later written back to a file system, Storage Transfer Service can convert the preserved metadata back to POSIX attributes.
- Defaults to the default agent // const sourceAgentPoolName = 'projects/my-project/agentPools/transfer service default' // The root directory path on the source filesystem // const rootDirectory = '/directory/to/transfer/source' // The ID of the GCS bucket to transfer data to // const gcsSinkBucket = 'my-sink-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a request to transfer from the local file system to the sink bucket / async function transferDirectory () { const createRequest = { transferJob : { projectId , transferSpec : { sourceAgentPoolName , posixDataSource : { rootDirectory , }, gcsDataSink : { bucketName : gcsSinkBucket }, }, status : ' ENABLED ' , }, }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ( createRequest ); const runRequest = { jobName : transferJob . name , projectId : projectId , }; await client . runTransferJob ( runRequest ); console . log ( Created and ran a transfer job from ' ${ rootDirectory } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ); } transferDirectory (); Python from google.cloud import storage transfer def transfer from posix to gcs ( project id : str , description : str , source agent pool name : str , root directory : str , sink bucket : str , ): """Create a transfer from a POSIX file system to a GCS bucket.""" client = storage transfer .

