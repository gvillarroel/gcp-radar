---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.643Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "File system transfer multipart upload"
feature_slug: "file-system-transfer-multipart-upload"
latest_feature_date: "2022-10-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices"
  - "https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions"
  - "https://docs.cloud.google.com/storage-transfer/docs/file-to-file"
keywords:
  - "file"
  - "system"
  - "transfer"
  - "multipart"
  - "upload"
  - "transfers"
  - "originating"
  - "systems"
---

# File system transfer multipart upload

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Multipart upload support for transfers originating from file systems became generally available and is enabled by default, improving large-file transfer performance.

## Extended Definition

Multipart upload support for transfers originating from file systems became generally available and is enabled by default, improving large-file transfer performance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices](https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices)
- [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions)
- [https://docs.cloud.google.com/storage-transfer/docs/file-to-file](https://docs.cloud.google.com/storage-transfer/docs/file-to-file)

## Supporting Pages

### "Best practices for file system transfers \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices](https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Multipart uploads If your transfer is from a POSIX file system to Cloud Storage, or between POSIX file systems, consider enabling multipart uploads .
- Multipart uploads can speed up transfers that include large files by up to 300% by breaking large files (>1 GiB) into smaller parts and uploading those parts in parallel.
- HDFS and S3-compatible file systems do not support multipart uploads.
- Disable multipart uploads To disable multipart uploads, reinstall the transfer agents using docker run and pass --enable-multipart=false : sudo docker run --ulimit memlock=64000000 -d --rm \ -v /usr/local/research:/usr/local/research \ gcr.io/cloud-ingest/tsop-agent:latest \ --project-id= PROJECT ID \ --agent-pool= AGENT POOL \ --creds-file= CREDENTIAL FILE \ --hostname=$(hostname) \ --enable-multipart=false Replace the following: PROJECT ID specifies the project ID that is hosting the transfer.

### "Agent-based transfer permissions \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Multipart uploads To enable multipart uploads for file system to Cloud Storage transfers or transfers between file systems, additionally grant the following permissions to the agent.
- For transfers between file systems, assign the permissions to the intermediate bucket.
- File system to file system If your transfer is between two file systems, the transfer agent needs the following permissions on the intermediate bucket.
- File system, S3-compatible storage, or HDFS to Cloud Storage If your transfer destination is a Cloud Storage bucket, the transfer agent needs the following permissions on the destination bucket.

### "Transfer data between file systems \_|\_ Storage Transfer Service \_|\_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/file-to-file](https://docs.cloud.google.com/storage-transfer/docs/file-to-file)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Defaults to the default agent // const sinkAgentPoolName = 'projects/my-project/agentPools/transfer service default' // The root directory path on the source filesystem // const rootDirectory = '/directory/to/transfer/source' // The root directory path on the sink filesystem // const destinationDirectory = '/directory/to/transfer/sink' // The ID of the GCS bucket for intermediate storage // const bucketName = 'my-intermediate-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a request to transfer from the local file system to the sink bucket / async function transferDirectory () { const createRequest = { transferJob : { projectId , transferSpec : { sourceAgentPoolName , sinkAgentPoolName , posixDataSource : { rootDirectory , }, posixDataSink : { rootDirectory : destinationDirectory , }, gcsIntermediateDataLocation : { bucketName , }, }, status : ' ENABLED ' , }, }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ( createRequest ); const runRequest = { jobName : transferJob . name , projectId : projectId , }; await client . runTransferJob ( runRequest ); console . log ( Created and ran a transfer job from ' ${ rootDirectory } ' to ' ${ destinationDirectory } ' with name ${ transferJob . name } ); } transferDirectory (); Python from google.cloud import storage transfer def transfer between posix ( project id : str , description : str , source agent pool name : str , sink agent pool name : str , root directory : str , destination directory : str , intermediate bucket : str , ): """Creates a transfer between POSIX file systems.""" client = storage transfer .
- Create agent pools and install agents For file system to file system transfers, you need to create agent pools and agents for both the source and destination file systems.
- If not provided, defaults to the default // agent String sinkAgentPoolName = "projects/my-project-id/agentPools/transfer service default" ; // The root directory path on the source filesystem String rootDirectory = "/directory/to/transfer/source" ; // The root directory path on the sink filesystem String destinationDirectory = "/directory/to/transfer/sink" ; // The ID of the GCS bucket for intermediate storage String bucketName = "my-intermediate-bucket" ; transferBetweenPosix ( projectId , sourceAgentPoolName , sinkAgentPoolName , rootDirectory , destinationDirectory , bucketName ); } public static void transferBetweenPosix ( String projectId , String sourceAgentPoolName , String sinkAgentPoolName , String rootDirectory , String destinationDirectory , String bucketName ) throws IOException { TransferJob transferJob = TransferJob . newBuilder () . setProjectId ( projectId ) . setTransferSpec ( TransferSpec . newBuilder () . setSinkAgentPoolName ( sinkAgentPoolName ) . setSourceAgentPoolName ( sourceAgentPoolName ) . setPosixDataSource ( PosixFilesystem . newBuilder (). setRootDirectory ( rootDirectory ). build ()) . setPosixDataSink ( PosixFilesystem . newBuilder (). setRootDirectory ( destinationDirectory ). build ()) . setGcsIntermediateDataLocation ( GcsData . newBuilder (). setBucketName ( bucketName ). build ()) . build ()) . setStatus ( TransferJob .
- Home Documentation Storage Storage Transfer Service Send feedback Transfer data between file systems Stay organized with collections Save and categorize content based on your preferences.

