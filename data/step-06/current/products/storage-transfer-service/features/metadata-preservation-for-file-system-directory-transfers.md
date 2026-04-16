---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.642Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Metadata preservation for file system directory transfers"
feature_slug: "metadata-preservation-for-file-system-directory-transfers"
latest_feature_date: "2023-04-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage"
  - "https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation"
  - "https://docs.cloud.google.com/storage-transfer/docs/file-to-file"
keywords:
  - "metadata"
  - "preservation"
  - "file"
  - "system"
  - "directory"
  - "transfers"
  - "storage"
  - "transfer"
---

# Metadata preservation for file system directory transfers

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service now supports optional preservation of UID, GID, and mode metadata for folders and can recreate empty folders when transferring between file systems.

## Extended Definition

Storage Transfer Service now supports optional preservation of UID, GID, and mode metadata for folders and can recreate empty folders when transferring between file systems.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage)
- [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation)
- [https://docs.cloud.google.com/storage-transfer/docs/file-to-file](https://docs.cloud.google.com/storage-transfer/docs/file-to-file)

## Supporting Pages

### "Transfer from a file system to Cloud Storage \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage)
- Source ID: `site-docs-root`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Defaults to the default agent // const sourceAgentPoolName = 'projects/my-project/agentPools/transfer service default' // The root directory path on the source filesystem // const rootDirectory = '/directory/to/transfer/source' // The ID of the GCS bucket to transfer data to // const gcsSinkBucket = 'my-sink-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a request to transfer from the local file system to the sink bucket / async function transferDirectory () { const createRequest = { transferJob : { projectId , transferSpec : { sourceAgentPoolName , posixDataSource : { rootDirectory , }, gcsDataSink : { bucketName : gcsSinkBucket }, }, status : ' ENABLED ' , }, }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ( createRequest ); const runRequest = { jobName : transferJob . name , projectId : projectId , }; await client . runTransferJob ( runRequest ); console . log ( Created and ran a transfer job from ' ${ rootDirectory } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ); } transferDirectory (); Python from google.cloud import storage transfer def transfer from posix to gcs ( project id : str , description : str , source agent pool name : str , root directory : str , sink bucket : str , ): """Create a transfer from a POSIX file system to a GCS bucket.""" client = storage transfer .
- To move files from a POSIX file system to a Cloud Storage bucket, use transferJobs.create with a posixDataSource : POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "name" : "transferJobs/sample transfer" , "description" : "My First Transfer" , "status" : "ENABLED" , "projectId" : "my transfer project id" , "schedule" : { "scheduleStartDate" : { "year" : 2022 , "month" : 5 , "day" : 2 }, "startTimeOfDay" : { "hours" : 22 , "minutes" : 30 , "seconds" : 0 , "nanos" : 0 } "scheduleEndDate" : { "year" : 2022 , "month" : 12 , "day" : 31 }, "repeatInterval" : { "259200s" }, }, "transferSpec" : { "posixDataSource" : { "rootDirectory" : "/bar/" , }, "sourceAgentPoolName" : "my example pool" , "gcsDataSink" : { "bucketName" : "destination bucket" "path" : "foo/bar/" }, } } The schedule field is optional; if it's not included, the transfer job must be started with a transferJobs.run request.
- Metadata preservation When transferring files from file systems, Storage Transfer Service can optionally preserve certain attributes as custom metadata.
- See the POSIX file system transfers section of Metadata preservation for details on which metadata can be preserved, and how to configure your transfer.

### "Metadata preservation \_|\_ Storage Transfer Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation](https://docs.cloud.google.com/storage-transfer/docs/metadata-preservation)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- POSIX file system transfers When transferring files from POSIX file systems, Storage Transfer Service can optionally preserve certain attributes as custom metadata.
- For the latter, the metadata must have been preserved when files were initially transferred to Cloud Storage. { "description": "metadata-example", "projectId": "example-project-id" "transferSpec": { ... "transferOptions": { "metadataOptions": { "gid": "GID NUMBER", # Default is "GID SKIP" "uid": "UID NUMBER", # Default is "UID SKIP" "mode": "MODE PRESERVE", # Default is "MODE SKIP" "symlink": "SYMLINK PRESERVE" # Default is "SYMLINK SKIP" } } } } POSIX to Cloud Storage Preserved metadata is stored in Cloud Storage as custom metadata key:value pairs.
- The transfer's UID, GID, and MODE preservation settings apply to files and folders for these transfers. mtime is not preserved for folders. mtime is set to the create time of the folder on the destination file system.
- Cloud Storage to POSIX If metadata is preserved when files are transferred to Cloud Storage, that metadata can be written back to the files when they are transferred back to a POSIX file system .

### "Transfer data between file systems \_|\_ Storage Transfer Service \_|\_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/file-to-file](https://docs.cloud.google.com/storage-transfer/docs/file-to-file)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Defaults to the default agent // const sinkAgentPoolName = 'projects/my-project/agentPools/transfer service default' // The root directory path on the source filesystem // const rootDirectory = '/directory/to/transfer/source' // The root directory path on the sink filesystem // const destinationDirectory = '/directory/to/transfer/sink' // The ID of the GCS bucket for intermediate storage // const bucketName = 'my-intermediate-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a request to transfer from the local file system to the sink bucket / async function transferDirectory () { const createRequest = { transferJob : { projectId , transferSpec : { sourceAgentPoolName , sinkAgentPoolName , posixDataSource : { rootDirectory , }, posixDataSink : { rootDirectory : destinationDirectory , }, gcsIntermediateDataLocation : { bucketName , }, }, status : ' ENABLED ' , }, }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ( createRequest ); const runRequest = { jobName : transferJob . name , projectId : projectId , }; await client . runTransferJob ( runRequest ); console . log ( Created and ran a transfer job from ' ${ rootDirectory } ' to ' ${ destinationDirectory } ' with name ${ transferJob . name } ); } transferDirectory (); Python from google.cloud import storage transfer def transfer between posix ( project id : str , description : str , source agent pool name : str , sink agent pool name : str , root directory : str , destination directory : str , intermediate bucket : str , ): """Creates a transfer between POSIX file systems.""" client = storage transfer .
- If not provided, defaults to the default // agent String sinkAgentPoolName = "projects/my-project-id/agentPools/transfer service default" ; // The root directory path on the source filesystem String rootDirectory = "/directory/to/transfer/source" ; // The root directory path on the sink filesystem String destinationDirectory = "/directory/to/transfer/sink" ; // The ID of the GCS bucket for intermediate storage String bucketName = "my-intermediate-bucket" ; transferBetweenPosix ( projectId , sourceAgentPoolName , sinkAgentPoolName , rootDirectory , destinationDirectory , bucketName ); } public static void transferBetweenPosix ( String projectId , String sourceAgentPoolName , String sinkAgentPoolName , String rootDirectory , String destinationDirectory , String bucketName ) throws IOException { TransferJob transferJob = TransferJob . newBuilder () . setProjectId ( projectId ) . setTransferSpec ( TransferSpec . newBuilder () . setSinkAgentPoolName ( sinkAgentPoolName ) . setSourceAgentPoolName ( sourceAgentPoolName ) . setPosixDataSource ( PosixFilesystem . newBuilder (). setRootDirectory ( rootDirectory ). build ()) . setPosixDataSink ( PosixFilesystem . newBuilder (). setRootDirectory ( destinationDirectory ). build ()) . setGcsIntermediateDataLocation ( GcsData . newBuilder (). setBucketName ( bucketName ). build ()) . build ()) . setStatus ( TransferJob .
- CreateTransferJobRequest . newBuilder () . setTransferJob ( transferJob ) . build ()); System . out . println ( "Created and ran a transfer job from " + rootDirectory + " to " + destinationDirectory + " with name " + response . getName ()); } } } Node.js // Imports the Google Cloud client library const { StorageTransferServiceClient , } = require ( ' @google-cloud/storage-transfer ' ); / TODO(developer): Uncomment the following lines before running the sample. / // Your project id // const projectId = 'my-project' // The agent pool associated with the POSIX data source.
- This command grants project-wide Storage Admin permissions: gcloud transfer authorize --add-missing Create a transfer job gcloud CLI To create a transfer from the source file system to the destination file system, run gcloud transfer jobs create SOURCE DIRECTORY DESTINATION DIRECTORY \ --source-agent-pool = SOURCE AGENT POOL \ --destination-agent-pool = DESTINATION AGENT POOL \ --intermediate-storage-path = gs:// STORAGE BUCKET / FOLDER / Replace the following variables: SOURCE DIRECTORY with the path of the source directory.

