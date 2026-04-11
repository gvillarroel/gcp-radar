---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.029Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Automatic labels for Serverless batch resources"
feature_slug: "automatic-labels-for-serverless-batch-resources"
latest_feature_date: "2023-07-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient"
keywords:
  - "automatic"
  - "labels"
  - "for"
  - "serverless"
  - "batch"
  - "resources"
  - "dataproc"
  - "automatically"
---

# Automatic labels for Serverless batch resources

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc Serverless batch resources automatically receive batch ID, batch UUID, and location labels.

## Extended Definition

Dataproc Serverless batch resources automatically receive batch ID, batch UUID, and location labels.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Feature The goog-dataproc-batch-id , goog-dataproc-batch-uuid and goog-dataproc-location labels are now automatically applied to Dataproc Serverless batch resources.
- February 04, 2026 Announcement Upcoming Spark data lineage changes See the upcoming May, 2026 Dataproc and Serverless for Apache Spark release notes for an announcement of a change that will automatically enable Dataproc Spark data lineage and Serverless for Apache Spark data lineage when you enable the Data Lineage API (see Control lineage ingestion for a service ) without requiring additional project, cluster, batch workload, or interactive session settings.
- Change Dataproc Serverless for Spark: Private Google Access is now automatically enabled in the configured subnetwork when running batch workloads and interactive sessions.
- Change Dataproc Serverless for Spark: Automatically apply goog-dataproc-session-id , goog-dataproc-session-uuid and goog-dataproc-location labels for a session resource.

### "Create and manage Labels \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels](https://docs.cloud.google.com/dataproc/docs/guides/creating-managing-labels)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Label Description goog-dataproc-cluster-name User-specified cluster name goog-dataproc-cluster-uuid Unique cluster ID goog-dataproc-location Managed Service for Apache Spark regional cluster endpoint You can use these automatically applied labels in many ways, including: Searching and filtering for Managed Service for Apache Spark resources Filtering billing data to calculate Managed Service for Apache Spark costs What's next Learn how to create and update labels for projects using the Resource Manager.
- The following goog-dataproc labels are automatically applied to Managed Service for Apache Spark resources.
- Automatically applied labels When creating or updating a cluster, Managed Service for Apache Spark automatically applies several labels to the cluster and cluster resources.
- Any values you supply for the reserved goog-dataproc labels at cluster creation will override automatically supplied values.

### "Class BatchControllerClient (5.26.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.batch_controller.BatchControllerClient)
- Source ID: `site-python-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The fully qualified name of the batch to retrieve in the format "projects/PROJECT ID/locations/DATAPROC REGION/batches/BATCH ID" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The fully qualified name of the batch to retrieve in the format "projects/PROJECT ID/locations/DATAPROC REGION/batches/BATCH ID" This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample create batch(): Create a client client = dataproc v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample delete batch(): Create a client client = dataproc v1 .

