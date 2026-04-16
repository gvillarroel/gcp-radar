---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.116Z"
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
  - "resources"
  - "receive"
  - "labels"
  - "automatic"
  - "automatically"
  - "serverless"
  - "batch"
---

# Automatic labels for Serverless batch resources

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless batch resources automatically receive batch ID, batch UUID, and location labels.

## Extended Definition

Dataproc Serverless batch resources automatically receive batch ID, batch UUID, and location labels.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient)

## Supporting Pages

### "Create and manage Labels \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Label Description goog-dataproc-cluster-name User-specified cluster name goog-dataproc-cluster-uuid Unique cluster ID goog-dataproc-location Managed Service for Apache Spark regional cluster endpoint You can use these automatically applied labels in many ways, including: Searching and filtering for Managed Service for Apache Spark resources Filtering billing data to calculate Managed Service for Apache Spark costs What's next Learn how to create and update labels for projects using the Resource Manager.
- Automatically applied labels When creating or updating a cluster, Managed Service for Apache Spark automatically applies several labels to the cluster and cluster resources.
- The following goog-dataproc labels are automatically applied to Managed Service for Apache Spark resources.
- Any values you supply for the reserved goog-dataproc labels at cluster creation will override automatically supplied values.

### "Class BatchControllerClient (5.26.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient)
- Source ID: `site-python-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If set to None, a transport is chosen automatically. client options Optional[Union[google.api core.client options.ClientOptions, dict]] Custom options for the client.
- Iterating over this object will yield results and resolve additional pages automatically. list operations list operations ( request : typing .
- This snippet has been automatically generated and should be regarded as a code template only.
- This snippet has been automatically generated and should be regarded as a code template only.

### "Class BatchControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If set to None, a transport is chosen automatically. client options Optional[Union[google.api core.client options.ClientOptions, dict]] Custom options for the client.
- Iterating over this object will yield results and resolve additional pages automatically. list operations list operations ( request : typing .
- This snippet has been automatically generated and should be regarded as a code template only.
- This snippet has been automatically generated and should be regarded as a code template only.

