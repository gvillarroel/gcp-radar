---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.135Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Heterogeneous cluster machine types"
feature_slug: "heterogeneous-cluster-machine-types"
latest_feature_date: "2016-01-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersPager"
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
keywords:
  - "heterogeneous"
  - "cluster"
  - "machine"
  - "types"
  - "dataproc"
  - "supports"
  - "clusters"
  - "whose"
---

# Heterogeneous cluster machine types

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports clusters whose master and worker nodes use different machine types and memory sizes.

## Extended Definition

Dataproc supports clusters whose master and worker nodes use different machine types and memory sizes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersPager)
- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)

## Supporting Pages

### "Class ListClustersAsyncPager (5.26.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersAsyncPager)
- Source ID: `site-python-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataproc v1.types.ListClustersRequest The initial request object. response google.cloud.dataproc v1.types.ListClustersResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListClustersResponse ], ], request : google . cloud . dataproc v1 . types . clusters .
- ListClustersResponse ], ], request : google . cloud . dataproc v1 . types . clusters .
- ListClustersRequest , response : google . cloud . dataproc v1 . types . clusters .

### "Class ListClustersPager (5.26.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersPager)
- Source ID: `site-python-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataproc v1.types.ListClustersRequest The initial request object. response google.cloud.dataproc v1.types.ListClustersResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListClustersResponse ], request : google . cloud . dataproc v1 . types . clusters .
- ListClustersResponse ], request : google . cloud . dataproc v1 . types . clusters .
- ListClustersRequest , response : google . cloud . dataproc v1 . types . clusters .

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Dataproc now better supports clusters with master and worker nodes which use different machine types.
- Fixed Fixed the ability to delete jobs that fast-failed before some cluster and staging directories were created Fixed some remaining errors with vmem settings when using the distcp command Fixed a rare bug in which underlying Compute Engine issues could lead to VM instances failing to be deleted after the Cloud Dataproc cluster had been successfully deleted Hive command has been fixed Fixed error reporting when updating the number of workers (standard and preemptible) in a cluster Fixed some cases when Rate Limit Exceeded errors occurred The maximum cluster name length is now correctly 55 instead of 56 characters GCP Console Cluster list now includes a Created column, and the cluster configuration tab now includes a Created field, telling the creation time of the cluster In the cluster-create screen, cluster memory sizes greater than 999 GB are now displayed in TB Fields that were missing from the PySpark and Hive job configuration tab ( Additional Python Files and Jar Files ) have been added The option to add preemptible nodes when creating a cluster is now in the "expander" at the bottom of the form Machine types with insufficient memory (less than 3.5 GB) are no longer displayed in the list of machine types (previously, selecting one of these small machine types would lead to an error from the backend The placeholder text in the Arguments field of the submit-job form has been corrected October 23, 2015 Feature GCP Console: Added support for adding, editing, and removing preemptible instances in clusters.
- The following default configurations are now applied to clusters created with N4 or C4 machine types: bootdisktype = "hyperdisk-balanced" nictype = "gvnic" Change Hyperdisks for Dataproc clusters are now created with default throughput and IOPS.
- Custom compute engine machine types - Cloud Dataproc clusters now support custom Compute Engine machine types for both master and worker nodes.

