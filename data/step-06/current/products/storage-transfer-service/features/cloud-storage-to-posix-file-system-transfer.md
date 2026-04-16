---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.654Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Cloud Storage to POSIX file system transfer"
feature_slug: "cloud-storage-to-posix-file-system-transfer"
latest_feature_date: "2021-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/file-to-file"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage"
  - "https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices"
keywords:
  - "storage"
  - "posix"
  - "file"
  - "system"
  - "transfer"
  - "preview"
  - "enables"
  - "bidirectional"
---

# Cloud Storage to POSIX file system transfer

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service preview support enables bidirectional transfer of data between Cloud Storage and POSIX file systems, including on-premises and edge environments.

## Extended Definition

Storage Transfer Service preview support enables bidirectional transfer of data between Cloud Storage and POSIX file systems, including on-premises and edge environments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/file-to-file](https://docs.cloud.google.com/storage-transfer/docs/file-to-file)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage)
- [https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices](https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices)

## Supporting Pages

### "Transfer data between file systems \_|\_ Storage Transfer Service \_|\_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/file-to-file](https://docs.cloud.google.com/storage-transfer/docs/file-to-file)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Defaults to the default agent // const sinkAgentPoolName = 'projects/my-project/agentPools/transfer service default' // The root directory path on the source filesystem // const rootDirectory = '/directory/to/transfer/source' // The root directory path on the sink filesystem // const destinationDirectory = '/directory/to/transfer/sink' // The ID of the GCS bucket for intermediate storage // const bucketName = 'my-intermediate-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a request to transfer from the local file system to the sink bucket / async function transferDirectory () { const createRequest = { transferJob : { projectId , transferSpec : { sourceAgentPoolName , sinkAgentPoolName , posixDataSource : { rootDirectory , }, posixDataSink : { rootDirectory : destinationDirectory , }, gcsIntermediateDataLocation : { bucketName , }, }, status : ' ENABLED ' , }, }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ( createRequest ); const runRequest = { jobName : transferJob . name , projectId : projectId , }; await client . runTransferJob ( runRequest ); console . log ( Created and ran a transfer job from ' ${ rootDirectory } ' to ' ${ destinationDirectory } ' with name ${ transferJob . name } ); } transferDirectory (); Python from google.cloud import storage transfer def transfer between posix ( project id : str , description : str , source agent pool name : str , sink agent pool name : str , root directory : str , destination directory : str , intermediate bucket : str , ): """Creates a transfer between POSIX file systems.""" client = storage transfer .
- If not provided, defaults to the default // agent String sinkAgentPoolName = "projects/my-project-id/agentPools/transfer service default" ; // The root directory path on the source filesystem String rootDirectory = "/directory/to/transfer/source" ; // The root directory path on the sink filesystem String destinationDirectory = "/directory/to/transfer/sink" ; // The ID of the GCS bucket for intermediate storage String bucketName = "my-intermediate-bucket" ; transferBetweenPosix ( projectId , sourceAgentPoolName , sinkAgentPoolName , rootDirectory , destinationDirectory , bucketName ); } public static void transferBetweenPosix ( String projectId , String sourceAgentPoolName , String sinkAgentPoolName , String rootDirectory , String destinationDirectory , String bucketName ) throws IOException { TransferJob transferJob = TransferJob . newBuilder () . setProjectId ( projectId ) . setTransferSpec ( TransferSpec . newBuilder () . setSinkAgentPoolName ( sinkAgentPoolName ) . setSourceAgentPoolName ( sourceAgentPoolName ) . setPosixDataSource ( PosixFilesystem . newBuilder (). setRootDirectory ( rootDirectory ). build ()) . setPosixDataSink ( PosixFilesystem . newBuilder (). setRootDirectory ( destinationDirectory ). build ()) . setGcsIntermediateDataLocation ( GcsData . newBuilder (). setBucketName ( bucketName ). build ()) . build ()) . setStatus ( TransferJob .
- PosixFilesystem { RootDirectory : rootDirectory }, }, DataSink : & storagetransferpb .
- PosixFilesystem ; import com.google.storagetransfer.v1.proto.

### "Transfer from a file system to Cloud Storage \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Defaults to the default agent // const sourceAgentPoolName = 'projects/my-project/agentPools/transfer service default' // The root directory path on the source filesystem // const rootDirectory = '/directory/to/transfer/source' // The ID of the GCS bucket to transfer data to // const gcsSinkBucket = 'my-sink-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a request to transfer from the local file system to the sink bucket / async function transferDirectory () { const createRequest = { transferJob : { projectId , transferSpec : { sourceAgentPoolName , posixDataSource : { rootDirectory , }, gcsDataSink : { bucketName : gcsSinkBucket }, }, status : ' ENABLED ' , }, }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ( createRequest ); const runRequest = { jobName : transferJob . name , projectId : projectId , }; await client . runTransferJob ( runRequest ); console . log ( Created and ran a transfer job from ' ${ rootDirectory } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ); } transferDirectory (); Python from google.cloud import storage transfer def transfer from posix to gcs ( project id : str , description : str , source agent pool name : str , root directory : str , sink bucket : str , ): """Create a transfer from a POSIX file system to a GCS bucket.""" client = storage transfer .
- To move files from a POSIX file system to a Cloud Storage bucket, use transferJobs.create with a posixDataSource : POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "name" : "transferJobs/sample transfer" , "description" : "My First Transfer" , "status" : "ENABLED" , "projectId" : "my transfer project id" , "schedule" : { "scheduleStartDate" : { "year" : 2022 , "month" : 5 , "day" : 2 }, "startTimeOfDay" : { "hours" : 22 , "minutes" : 30 , "seconds" : 0 , "nanos" : 0 } "scheduleEndDate" : { "year" : 2022 , "month" : 12 , "day" : 31 }, "repeatInterval" : { "259200s" }, }, "transferSpec" : { "posixDataSource" : { "rootDirectory" : "/bar/" , }, "sourceAgentPoolName" : "my example pool" , "gcsDataSink" : { "bucketName" : "destination bucket" "path" : "foo/bar/" }, } } The schedule field is optional; if it's not included, the transfer job must be started with a transferJobs.run request.
- To move files from a POSIX file system to a Cloud Storage bucket: Go import ( "context" "fmt" "io" storagetransfer "cloud.google.com/go/storagetransfer/apiv1" "cloud.google.com/go/storagetransfer/apiv1/storagetransferpb" ) func transferFromPosix ( w io .
- If these files are later written back to a file system, Storage Transfer Service can convert the preserved metadata back to POSIX attributes.

### "Best practices for file system transfers \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices](https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Multipart uploads If your transfer is from a POSIX file system to Cloud Storage, or between POSIX file systems, consider enabling multipart uploads .
- For example, if you intend to fully utilize a 20 Gbps wide-area network (WAN), your agent machine's network interface must support 20 Gbps to read data from your networked file system, and another 20 Gbps to transfer data to Cloud Storage, or 40 Gbps of total bandwidth.
- Home Documentation Storage Storage Transfer Service Send feedback Best practices for file system transfers Stay organized with collections Save and categorize content based on your preferences.
- Maximize transfer agent performance Your transfer performance is affected by the following variables: File system capabilities.

