---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.652Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service filesystem transfer jobs with periodic sync"
feature_slug: "storage-transfer-service-filesystem-transfer-jobs-with-periodic-sync"
latest_feature_date: "2022-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient"
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs"
keywords:
  - "storage"
  - "transfer"
  - "filesystem"
  - "jobs"
  - "periodic"
  - "sync"
  - "adds"
  - "preview"
---

# Storage Transfer Service filesystem transfer jobs with periodic sync

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Adds preview support for API- and gcloud-managed transfer jobs that move and sync data between two filesystems on a scheduled basis, including migration from on-premises filesystems to Filestore.

## Extended Definition

Adds preview support for API- and gcloud-managed transfer jobs that move and sync data between two filesystems on a scheduled basis, including migration from on-premises filesystems to Filestore.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient)
- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs)

## Supporting Pages

### "Class ListTransferJobsAsyncPager (1.20.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.pagers.ListTransferJobsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.storage transfer v1.types.ListTransferJobsRequest The initial request object. response google.cloud.storage transfer v1.types.ListTransferJobsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListTransferJobsAsyncPager (1.20.0) Stay organized with collections Save and categorize content based on your preferences.
- 1.20.0 (latest) 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.5 1.10.0 1.9.2 1.8.1 1.7.1 1.6.0 1.5.2 1.4.1 1.3.1 1.2.1 1.1.1 1.0.2 0.1.0 ListTransferJobsAsyncPager ( method : typing .
- ListTransferJobsResponse ], ], request : google . cloud . storage transfer v1 . types . transfer .

### "Class StorageTransferServiceAsyncClient (1.20.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListTransferJobsRequest ( filter="filter value", ) Make the request page result = client. list transfer jobs (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.storage transfer v1.types.ListTransferJobsRequest , dict]] The request object. projectId , jobNames , and jobStatuses are query parameters that can be specified when listing transfer jobs. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import storage transfer v1 async def sample list transfer jobs(): Create a client client = storage transfer v1 .
- Returns Type Description google.cloud.storage transfer v1.services.storage transfer service.pagers.ListTransferJobsAsyncPager Response from ListTransferJobs.
- The following agentPool fields can be updated: - display name][google.storagetransfer.v1.AgentPool.display name] - bandwidth limit][google.storagetransfer.v1.AgentPool.bandwidth limit] This corresponds to the update mask field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "REST Resource: transferJobs \_|\_ Storage Transfer Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Non-PosixFilesystem example: "transferJobs/^(?!OPI)[A-Za-z0-9-. ] [A-Za-z0-9]$" PosixFilesystem example: "transferJobs/OPI^[A-Za-z0-9-. ] [A-Za-z0-9]$" Applications must not rely on the enforcement of naming requirements involving OPI.
- Methods create Creates a transfer job that runs periodically. delete Deletes a transfer job. get Gets a transfer job. list Lists transfer jobs. patch Updates a transfer job. run Starts a new operation for the specified transfer job.
- Home Documentation Storage Storage Transfer Service Reference Send feedback REST Resource: transferJobs Stay organized with collections Save and categorize content based on your preferences.
- For transfers involving PosixFilesystem, this name must start with transferJobs/OPI specifically.

