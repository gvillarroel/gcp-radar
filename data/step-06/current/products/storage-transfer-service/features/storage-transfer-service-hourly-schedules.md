---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.660Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service hourly schedules"
feature_slug: "storage-transfer-service-hourly-schedules"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsPager"
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs/create"
keywords:
  - "storage"
  - "transfer"
  - "hourly"
  - "schedules"
  - "supports"
  - "job"
  - "frequency"
---

# Storage Transfer Service hourly schedules

Product: Storage Transfer Service
Coverage: LOW

## Step 02 Summary

Storage Transfer Service supports transfer job schedules with hourly frequency.

## Extended Definition

Storage Transfer Service supports transfer job schedules with hourly frequency.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsPager)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs/create](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs/create)

## Supporting Pages

### "Class ListTransferJobsAsyncPager (1.20.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 42
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
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.storage transfer v1.types.ListTransferJobsRequest The initial request object. response google.cloud.storage transfer v1.types.ListTransferJobsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListTransferJobsResponse ], request : google . cloud . storage transfer v1 . types . transfer .
- ListTransferJobsResponse ], request : google . cloud . storage transfer v1 . types . transfer .
- ListTransferJobsRequest , response : google . cloud . storage transfer v1 . types . transfer .

### "Method: transferJobs.create \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs/create](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs/create)
- Source ID: `site-api-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage Storage Transfer Service Reference Send feedback Method: transferJobs.create Stay organized with collections Save and categorize content based on your preferences.
- HTTP request POST https://storagetransfer.googleapis.com/v1/transferJobs The URL uses gRPC Transcoding syntax.
- Response body If successful, the response body contains a newly created instance of TransferJob .
- Request body The request body contains an instance of TransferJob .

