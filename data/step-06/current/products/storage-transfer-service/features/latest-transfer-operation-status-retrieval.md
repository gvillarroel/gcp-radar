---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.659Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Latest transfer operation status retrieval"
feature_slug: "latest-transfer-operation-status-retrieval"
latest_feature_date: "2021-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/Operation"
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceClient"
keywords:
  - "transfer"
  - "operation"
  - "status"
  - "retrieval"
  - "storage"
  - "now"
  - "provides"
  - "generally"
---

# Latest transfer operation status retrieval

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service now provides generally available access to the status of the latest transfer operation.

## Extended Definition

Storage Transfer Service now provides generally available access to the status of the latest transfer operation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/Operation](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/Operation)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceClient](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceClient)

## Supporting Pages

### Operation \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/Operation](https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/Operation)
- Source ID: `site-api-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Storage Storage Transfer Service Reference Send feedback Operation Stay organized with collections Save and categorize content based on your preferences.
- Some services might not provide the result. result can be only one of the following: error object ( Status ) The error result of the operation in case of failure or cancellation. response object The normal, successful response of the operation.
- The format of name is transferOperations/some/unique/name . metadata object Represents the transfer operation object.
- To request a TransferOperation object, use transferOperations.get .

### "Class StorageTransferServiceAsyncClient (1.20.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListTransferJobsRequest ( filter="filter value", ) Make the request page result = client. list transfer jobs (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.storage transfer v1.types.ListTransferJobsRequest , dict]] The request object. projectId , jobNames , and jobStatuses are query parameters that can be specified when listing transfer jobs. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- RunTransferJobRequest ( job name="job name value", project id="project id value", ) Make the request operation = client. run transfer job (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.storage transfer v1.types.RunTransferJobRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import storage transfer v1 async def sample resume transfer operation(): Create a client client = storage transfer v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import storage transfer v1 async def sample pause transfer operation(): Create a client client = storage transfer v1 .

### "Class StorageTransferServiceClient (1.20.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceClient](https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.services.storage_transfer_service.StorageTransferServiceClient)
- Source ID: `site-python-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListTransferJobsRequest ( filter="filter value", ) Make the request page result = client. list transfer jobs (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.storage transfer v1.types.ListTransferJobsRequest , dict] The request object. projectId , jobNames , and jobStatuses are query parameters that can be specified when listing transfer jobs. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import storage transfer v1 def sample resume transfer operation(): Create a client client = storage transfer v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import storage transfer v1 def sample pause transfer operation(): Create a client client = storage transfer v1 .
- RunTransferJobRequest ( job name="job name value", project id="project id value", ) Make the request operation = client. run transfer job (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.storage transfer v1.types.RunTransferJobRequest , dict] The request object.

