---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.663Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service hourly job scheduling"
feature_slug: "storage-transfer-service-hourly-job-scheduling"
latest_feature_date: "2020-11-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage"
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsPager"
keywords:
  - "storage"
  - "transfer"
  - "hourly"
  - "job"
  - "scheduling"
  - "offers"
  - "preview"
  - "jobs"
---

# Storage Transfer Service hourly job scheduling

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service offers preview support for scheduling transfer jobs on an hourly basis.

## Extended Definition

Storage Transfer Service offers preview support for scheduling transfer jobs on an hourly basis.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsPager)

## Supporting Pages

### "Transfer between Cloud Storage buckets \_|\_ Storage Transfer Service \_\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage](https://docs.cloud.google.com/storage-transfer/docs/cloud-storage-to-cloud-storage)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Request using transferJobs create : POST h tt ps : //storagetransfer.googleapis.com/v1/transferJobs { "description" : "YOUR DESCRIPTION" , "status" : "ENABLED" , "projectId" : "PROJECT ID" , "schedule" : { "scheduleStartDate" : { "day" : 1 , "month" : 1 , "year" : 2025 }, "startTimeOfDay" : { "hours" : 1 , "minutes" : 1 }, "scheduleEndDate" : { "day" : 1 , "month" : 1 , "year" : 2025 } }, "transferSpec" : { "gcsDataSource" : { "bucketName" : "GCS SOURCE NAME" }, "gcsDataSink" : { "bucketName" : "GCS SINK NAME" }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : true } } } Response: 200 OK { "transferJob" : [ { "creationTime" : "2015-01-01T01:01:00.000000000Z" , "description" : "YOUR DESCRIPTION" , "name" : "transferJobs/JOB ID" , "status" : "ENABLED" , "lastModificationTime" : "2015-01-01T01:01:00.000000000Z" , "projectId" : "PROJECT ID" , "schedule" : { "scheduleStartDate" : { "day" : 1 , "month" : 1 , "year" : 2015 }, "startTimeOfDay" : { "hours" : 1 , "minutes" : 1 } }, "transferSpec" : { "gcsDataSource" : { "bucketName" : "GCS SOURCE NAME" , }, "gcsDataSink" : { "bucketName" : "GCS NEARLINE SINK NAME" }, "objectConditions" : { "minTimeElapsedSinceLastModification" : "2592000.000s" }, "transferOptions" : { "deleteObjectsFromSourceAfterTransfer" : true } } } ] } Client libraries In this example, you'll learn how to move files from one Cloud Storage bucket to another.
- For example, to transfer all objects with the prefix folder1 : gcloud transfer jobs create gs://old-bucket gs://new-bucket \ --include-prefixes = "folder1/" REST In this example, you'll learn how to move files from one Cloud Storage bucket to another.
- Storage Transfer Service offers the option of deleting objects after they have been transferred by specifying deleteObjectsFromSourceAfterTransfer: true in the job configuration, or selecting the option in the Google Cloud console.
- When to use Storage Transfer Service Google Cloud offers multiple options to transfer data between Cloud Storage buckets.

### "Class ListTransferJobsAsyncPager (1.20.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.storage transfer v1.types.ListTransferJobsRequest The initial request object. response google.cloud.storage transfer v1.types.ListTransferJobsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListTransferJobsResponse ], ], request : google . cloud . storage transfer v1 . types . transfer .
- ListTransferJobsResponse ], ], request : google . cloud . storage transfer v1 . types . transfer .
- ListTransferJobsRequest , response : google . cloud . storage transfer v1 . types . transfer .

### "Class ListTransferJobsPager (1.20.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsPager)
- Source ID: `site-python-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.storage transfer v1.types.ListTransferJobsRequest The initial request object. response google.cloud.storage transfer v1.types.ListTransferJobsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListTransferJobsResponse ], request : google . cloud . storage transfer v1 . types . transfer .
- ListTransferJobsResponse ], request : google . cloud . storage transfer v1 . types . transfer .
- ListTransferJobsRequest , response : google . cloud . storage transfer v1 . types . transfer .

