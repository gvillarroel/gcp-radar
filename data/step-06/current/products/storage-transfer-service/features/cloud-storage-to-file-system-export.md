---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.644Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Cloud Storage to file system export"
feature_slug: "cloud-storage-to-file-system-export"
latest_feature_date: "2022-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/file-to-file"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage"
  - "https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions"
keywords:
  - "storage"
  - "file"
  - "system"
  - "export"
  - "exporting"
  - "systems"
  - "became"
  - "generally"
---

# Cloud Storage to file system export

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Exporting data from Cloud Storage to file systems became generally available, enabling bidirectional movement of data between Cloud Storage and on-premises or edge file-system environments.

## Extended Definition

Exporting data from Cloud Storage to file systems became generally available, enabling bidirectional movement of data between Cloud Storage and on-premises or edge file-system environments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/file-to-file](https://docs.cloud.google.com/storage-transfer/docs/file-to-file)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage)
- [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions)

## Supporting Pages

### "Transfer data between file systems \_|\_ Storage Transfer Service \_|\_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/file-to-file](https://docs.cloud.google.com/storage-transfer/docs/file-to-file)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Defaults to the default agent // const sinkAgentPoolName = 'projects/my-project/agentPools/transfer service default' // The root directory path on the source filesystem // const rootDirectory = '/directory/to/transfer/source' // The root directory path on the sink filesystem // const destinationDirectory = '/directory/to/transfer/sink' // The ID of the GCS bucket for intermediate storage // const bucketName = 'my-intermediate-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a request to transfer from the local file system to the sink bucket / async function transferDirectory () { const createRequest = { transferJob : { projectId , transferSpec : { sourceAgentPoolName , sinkAgentPoolName , posixDataSource : { rootDirectory , }, posixDataSink : { rootDirectory : destinationDirectory , }, gcsIntermediateDataLocation : { bucketName , }, }, status : ' ENABLED ' , }, }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ( createRequest ); const runRequest = { jobName : transferJob . name , projectId : projectId , }; await client . runTransferJob ( runRequest ); console . log ( Created and ran a transfer job from ' ${ rootDirectory } ' to ' ${ destinationDirectory } ' with name ${ transferJob . name } ); } transferDirectory (); Python from google.cloud import storage transfer def transfer between posix ( project id : str , description : str , source agent pool name : str , sink agent pool name : str , root directory : str , destination directory : str , intermediate bucket : str , ): """Creates a transfer between POSIX file systems.""" client = storage transfer .
- Home Documentation Storage Storage Transfer Service Send feedback Transfer data between file systems Stay organized with collections Save and categorize content based on your preferences.
- If not provided, defaults to the default // agent String sinkAgentPoolName = "projects/my-project-id/agentPools/transfer service default" ; // The root directory path on the source filesystem String rootDirectory = "/directory/to/transfer/source" ; // The root directory path on the sink filesystem String destinationDirectory = "/directory/to/transfer/sink" ; // The ID of the GCS bucket for intermediate storage String bucketName = "my-intermediate-bucket" ; transferBetweenPosix ( projectId , sourceAgentPoolName , sinkAgentPoolName , rootDirectory , destinationDirectory , bucketName ); } public static void transferBetweenPosix ( String projectId , String sourceAgentPoolName , String sinkAgentPoolName , String rootDirectory , String destinationDirectory , String bucketName ) throws IOException { TransferJob transferJob = TransferJob . newBuilder () . setProjectId ( projectId ) . setTransferSpec ( TransferSpec . newBuilder () . setSinkAgentPoolName ( sinkAgentPoolName ) . setSourceAgentPoolName ( sourceAgentPoolName ) . setPosixDataSource ( PosixFilesystem . newBuilder (). setRootDirectory ( rootDirectory ). build ()) . setPosixDataSink ( PosixFilesystem . newBuilder (). setRootDirectory ( destinationDirectory ). build ()) . setGcsIntermediateDataLocation ( GcsData . newBuilder (). setBucketName ( bucketName ). build ()) . build ()) . setStatus ( TransferJob .
- This command grants project-wide Storage Admin permissions: gcloud transfer authorize --add-missing Create a transfer job gcloud CLI To create a transfer from the source file system to the destination file system, run gcloud transfer jobs create SOURCE DIRECTORY DESTINATION DIRECTORY \ --source-agent-pool = SOURCE AGENT POOL \ --destination-agent-pool = DESTINATION AGENT POOL \ --intermediate-storage-path = gs:// STORAGE BUCKET / FOLDER / Replace the following variables: SOURCE DIRECTORY with the path of the source directory.

### "Transfer from a file system to Cloud Storage \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Transfers from file systems to Cloud Storage are agent-based transfers, meaning you will install software agents on a machine with access to your file system to orchestrate the transfer.
- Metadata preservation When transferring files from file systems, Storage Transfer Service can optionally preserve certain attributes as custom metadata.
- Transfer options The following Storage Transfer Service features are available for transfers from file systems to Cloud Storage.
- Defaults to the default agent // const sourceAgentPoolName = 'projects/my-project/agentPools/transfer service default' // The root directory path on the source filesystem // const rootDirectory = '/directory/to/transfer/source' // The ID of the GCS bucket to transfer data to // const gcsSinkBucket = 'my-sink-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a request to transfer from the local file system to the sink bucket / async function transferDirectory () { const createRequest = { transferJob : { projectId , transferSpec : { sourceAgentPoolName , posixDataSource : { rootDirectory , }, gcsDataSink : { bucketName : gcsSinkBucket }, }, status : ' ENABLED ' , }, }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ( createRequest ); const runRequest = { jobName : transferJob . name , projectId : projectId , }; await client . runTransferJob ( runRequest ); console . log ( Created and ran a transfer job from ' ${ rootDirectory } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ); } transferDirectory (); Python from google.cloud import storage transfer def transfer from posix to gcs ( project id : str , description : str , source agent pool name : str , root directory : str , sink bucket : str , ): """Create a transfer from a POSIX file system to a GCS bucket.""" client = storage transfer .

### "Agent-based transfer permissions \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Multipart uploads To enable multipart uploads for file system to Cloud Storage transfers or transfers between file systems, additionally grant the following permissions to the agent.
- File system, S3-compatible storage, or HDFS to Cloud Storage If your transfer destination is a Cloud Storage bucket, the transfer agent needs the following permissions on the destination bucket.
- Cloud Storage to file system If your transfer's source is a Cloud Storage bucket, the transfer agent needs the following permission on the source bucket.
- File system to file system If your transfer is between two file systems, the transfer agent needs the following permissions on the intermediate bucket.

