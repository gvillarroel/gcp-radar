---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.596Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Automatic labels for Serverless batch resources"
feature_slug: "automatic-labels-for-serverless-batch-resources"
latest_feature_date: "2023-07-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient"
keywords:
  - "automatic"
  - "labels"
  - "serverless"
  - "batch"
  - "resources"
  - "dataproc"
  - "automatically"
  - "receive"
---

# Automatic labels for Serverless batch resources

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless batch resources automatically receive batch ID, batch UUID, and location labels.

## Extended Definition

Dataproc Serverless batch resources automatically receive batch ID, batch UUID, and location labels.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient)

## Supporting Pages

### "Create and manage Labels \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Label Description goog-dataproc-cluster-name User-specified cluster name goog-dataproc-cluster-uuid Unique cluster ID goog-dataproc-location Managed Service for Apache Spark regional cluster endpoint You can use these automatically applied labels in many ways, including: Searching and filtering for Managed Service for Apache Spark resources Filtering billing data to calculate Managed Service for Apache Spark costs What's next Learn how to create and update labels for projects using the Resource Manager.
- The following goog-dataproc labels are automatically applied to Managed Service for Apache Spark resources.
- Automatically applied labels When creating or updating a cluster, Managed Service for Apache Spark automatically applies several labels to the cluster and cluster resources.
- Any values you supply for the reserved goog-dataproc labels at cluster creation will override automatically supplied values.

### "Class BatchControllerClient (5.26.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient)
- Source ID: `site-python-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The fully qualified name of the batch to retrieve in the format "projects/PROJECT ID/locations/DATAPROC REGION/batches/BATCH ID" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The fully qualified name of the batch to retrieve in the format "projects/PROJECT ID/locations/DATAPROC REGION/batches/BATCH ID" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample create batch(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample delete batch(): Create a client client = dataproc v1 .

### "Class BatchControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The fully qualified name of the batch to retrieve in the format "projects/PROJECT ID/locations/DATAPROC REGION/batches/BATCH ID" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The fully qualified name of the batch to retrieve in the format "projects/PROJECT ID/locations/DATAPROC REGION/batches/BATCH ID" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample create batch(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample delete batch(): Create a client client = dataproc v1 .

