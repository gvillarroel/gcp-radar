---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.600Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Batch listing filters"
feature_slug: "batch-listing-filters"
latest_feature_date: "2023-02-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.pagers.ListBatchesAsyncPager"
keywords:
  - "batch"
  - "listing"
  - "filters"
  - "dataproc"
  - "listings"
  - "filtering"
  - "id"
  - "uuid"
---

# Batch listing filters

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc batch listings support filtering by batch ID, batch UUID, state, and create time.

## Extended Definition

Dataproc batch listings support filtering by batch ID, batch UUID, state, and create time.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.pagers.ListBatchesAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.pagers.ListBatchesAsyncPager)

## Supporting Pages

### "Class BatchControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The fully qualified name of the batch to retrieve in the format "projects/PROJECT ID/locations/DATAPROC REGION/batches/BATCH ID" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The fully qualified name of the batch to retrieve in the format "projects/PROJECT ID/locations/DATAPROC REGION/batches/BATCH ID" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample create batch(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample delete batch(): Create a client client = dataproc v1 .

### "Class BatchControllerClient (5.26.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient)
- Source ID: `site-python-reference`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The fully qualified name of the batch to retrieve in the format "projects/PROJECT ID/locations/DATAPROC REGION/batches/BATCH ID" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The fully qualified name of the batch to retrieve in the format "projects/PROJECT ID/locations/DATAPROC REGION/batches/BATCH ID" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample create batch(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample delete batch(): Create a client client = dataproc v1 .

### "Class ListBatchesAsyncPager (5.26.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.pagers.ListBatchesAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.pagers.ListBatchesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataproc v1.types.ListBatchesRequest The initial request object. response google.cloud.dataproc v1.types.ListBatchesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListBatchesResponse ], ], request : google . cloud . dataproc v1 . types . batches .
- ListBatchesResponse ], ], request : google . cloud . dataproc v1 . types . batches .
- ListBatchesRequest , response : google . cloud . dataproc v1 . types . batches .

