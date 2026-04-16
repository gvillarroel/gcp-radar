---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.645Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Multipart upload support for file system transfers"
feature_slug: "multipart-upload-support-for-file-system-transfers"
latest_feature_date: "2022-08-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices"
  - "https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions"
  - "https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage"
keywords:
  - "multipart"
  - "upload"
  - "file"
  - "system"
  - "transfers"
  - "storage"
  - "transfer"
  - "now"
---

# Multipart upload support for file system transfers

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service now supports multipart uploads from file-system sources (preview) when the destination or intermediate bucket uses the Standard storage class.

## Extended Definition

Storage Transfer Service now supports multipart uploads from file-system sources (preview) when the destination or intermediate bucket uses the Standard storage class.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices](https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices)
- [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions)
- [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage)

## Supporting Pages

### "Best practices for file system transfers \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices](https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-best-practices)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Multipart uploads If your transfer is from a POSIX file system to Cloud Storage, or between POSIX file systems, consider enabling multipart uploads .
- Home Documentation Storage Storage Transfer Service Send feedback Best practices for file system transfers Stay organized with collections Save and categorize content based on your preferences.
- Multipart uploads can speed up transfers that include large files by up to 300% by breaking large files (>1 GiB) into smaller parts and uploading those parts in parallel.
- Disable multipart uploads To disable multipart uploads, reinstall the transfer agents using docker run and pass --enable-multipart=false : sudo docker run --ulimit memlock=64000000 -d --rm \ -v /usr/local/research:/usr/local/research \ gcr.io/cloud-ingest/tsop-agent:latest \ --project-id= PROJECT ID \ --agent-pool= AGENT POOL \ --creds-file= CREDENTIAL FILE \ --hostname=$(hostname) \ --enable-multipart=false Replace the following: PROJECT ID specifies the project ID that is hosting the transfer.

### "Agent-based transfer permissions \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions](https://docs.cloud.google.com/storage-transfer/docs/file-system-permissions)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Multipart uploads To enable multipart uploads for file system to Cloud Storage transfers or transfers between file systems, additionally grant the following permissions to the agent.
- File system, S3-compatible storage, or HDFS to Cloud Storage If your transfer destination is a Cloud Storage bucket, the transfer agent needs the following permissions on the destination bucket.
- Cloud Storage to file system If your transfer's source is a Cloud Storage bucket, the transfer agent needs the following permission on the source bucket.
- For transfers between file systems, assign the permissions to the intermediate bucket.

### "Transfer from a file system to Cloud Storage \_|\_ Storage Transfer Service\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/create-transfers/agent-based/file-system-to-cloud-storage)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Defaults to the default agent // const sourceAgentPoolName = 'projects/my-project/agentPools/transfer service default' // The root directory path on the source filesystem // const rootDirectory = '/directory/to/transfer/source' // The ID of the GCS bucket to transfer data to // const gcsSinkBucket = 'my-sink-bucket' // Creates a client const client = new StorageTransferServiceClient (); / Creates a request to transfer from the local file system to the sink bucket / async function transferDirectory () { const createRequest = { transferJob : { projectId , transferSpec : { sourceAgentPoolName , posixDataSource : { rootDirectory , }, gcsDataSink : { bucketName : gcsSinkBucket }, }, status : ' ENABLED ' , }, }; // Runs the request and creates the job const [ transferJob ] = await client . createTransferJob ( createRequest ); const runRequest = { jobName : transferJob . name , projectId : projectId , }; await client . runTransferJob ( runRequest ); console . log ( Created and ran a transfer job from ' ${ rootDirectory } ' to ' ${ gcsSinkBucket } ' with name ${ transferJob . name } ); } transferDirectory (); Python from google.cloud import storage transfer def transfer from posix to gcs ( project id : str , description : str , source agent pool name : str , root directory : str , sink bucket : str , ): """Create a transfer from a POSIX file system to a GCS bucket.""" client = storage transfer .
- To move files from a POSIX file system to a Cloud Storage bucket, use transferJobs.create with a posixDataSource : POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "name" : "transferJobs/sample transfer" , "description" : "My First Transfer" , "status" : "ENABLED" , "projectId" : "my transfer project id" , "schedule" : { "scheduleStartDate" : { "year" : 2022 , "month" : 5 , "day" : 2 }, "startTimeOfDay" : { "hours" : 22 , "minutes" : 30 , "seconds" : 0 , "nanos" : 0 } "scheduleEndDate" : { "year" : 2022 , "month" : 12 , "day" : 31 }, "repeatInterval" : { "259200s" }, }, "transferSpec" : { "posixDataSource" : { "rootDirectory" : "/bar/" , }, "sourceAgentPoolName" : "my example pool" , "gcsDataSink" : { "bucketName" : "destination bucket" "path" : "foo/bar/" }, } } The schedule field is optional; if it's not included, the transfer job must be started with a transferJobs.run request.
- Transfers from file systems to Cloud Storage are agent-based transfers, meaning you will install software agents on a machine with access to your file system to orchestrate the transfer.
- Transfer options The following Storage Transfer Service features are available for transfers from file systems to Cloud Storage.

