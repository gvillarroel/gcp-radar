---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.120Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Batch listing filters"
feature_slug: "batch-listing-filters"
latest_feature_date: "2023-02-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.pagers.ListBatchesAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.pagers.ListBatchesPager"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient"
keywords:
  - "listings"
  - "filters"
  - "uuid"
  - "filtering"
  - "listing"
  - "batch"
---

# Batch listing filters

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc batch listings support filtering by batch ID, batch UUID, state, and create time.

## Extended Definition

Dataproc batch listings support filtering by batch ID, batch UUID, state, and create time.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.pagers.ListBatchesAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.pagers.ListBatchesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.pagers.ListBatchesPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.pagers.ListBatchesPager)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient)

## Supporting Pages

### "Class ListBatchesAsyncPager (5.26.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.pagers.ListBatchesAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.pagers.ListBatchesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataproc v1.types.ListBatchesRequest The initial request object. response google.cloud.dataproc v1.types.ListBatchesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- 5.26.0 (latest) 5.25.0 5.24.0 5.23.0 5.22.0 5.21.0 5.20.0 5.18.1 5.17.1 5.16.0 5.15.1 5.14.0 5.13.0 5.12.0 5.10.2 5.9.3 5.8.0 5.7.0 5.6.0 5.5.1 5.4.3 5.3.0 5.2.0 5.1.0 5.0.3 4.0.3 3.3.2 3.2.0 3.1.1 3.0.0 2.6.2 2.5.0 2.4.0 2.3.1 2.2.0 2.0.2 1.1.3 1.0.1 0.8.2 0.7.0 0.6.1 0.5.0 ListBatchesAsyncPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListBatchesAsyncPager (5.26.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListBatches requests and continue to iterate through the batches field on the corresponding responses.

### "Class ListBatchesPager (5.26.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.pagers.ListBatchesPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.pagers.ListBatchesPager)
- Source ID: `site-python-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataproc v1.types.ListBatchesRequest The initial request object. response google.cloud.dataproc v1.types.ListBatchesResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- 5.26.0 (latest) 5.25.0 5.24.0 5.23.0 5.22.0 5.21.0 5.20.0 5.18.1 5.17.1 5.16.0 5.15.1 5.14.0 5.13.0 5.12.0 5.10.2 5.9.3 5.8.0 5.7.0 5.6.0 5.5.1 5.4.3 5.3.0 5.2.0 5.1.0 5.0.3 4.0.3 3.3.2 3.2.0 3.1.1 3.0.0 2.6.2 2.5.0 2.4.0 2.3.1 2.2.0 2.0.2 1.1.3 1.0.1 0.8.2 0.7.0 0.6.1 0.5.0 ListBatchesPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListBatchesPager (5.26.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the iter method will make additional ListBatches requests and continue to iterate through the batches field on the corresponding responses.

### "Class BatchControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 67
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create batch create batch ( request : typing .
- The fully qualified name of the batch to retrieve in the format "projects/PROJECT ID/locations/DATAPROC REGION/batches/BATCH ID" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The fully qualified name of the batch to retrieve in the format "projects/PROJECT ID/locations/DATAPROC REGION/batches/BATCH ID" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample create batch(): Create a client client = dataproc v1 .

