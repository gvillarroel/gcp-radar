---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.692Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "LZO support"
feature_slug: "lzo-support"
latest_feature_date: "2016-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersPager"
keywords:
  - "lzo"
  - "enables"
  - "dataproc"
  - "clusters"
  - "natively"
  - "use"
  - "compression"
  - "format"
---

# LZO support

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

LZO support enables Dataproc clusters to natively use the LZO data compression format.

## Extended Definition

LZO support enables Dataproc clusters to natively use the LZO data compression format.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersPager)

## Supporting Pages

### "Class ListClustersAsyncPager (5.26.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersAsyncPager)
- Source ID: `site-python-reference`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataproc v1.types.ListClustersRequest The initial request object. response google.cloud.dataproc v1.types.ListClustersResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListClustersResponse ], ], request : google . cloud . dataproc v1 . types . clusters .
- ListClustersResponse ], ], request : google . cloud . dataproc v1 . types . clusters .
- ListClustersRequest , response : google . cloud . dataproc v1 . types . clusters .

### "Class ListClustersPager (5.26.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.pagers.ListClustersPager)
- Source ID: `site-python-reference`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataproc v1.types.ListClustersRequest The initial request object. response google.cloud.dataproc v1.types.ListClustersResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListClustersResponse ], request : google . cloud . dataproc v1 . types . clusters .
- ListClustersResponse ], request : google . cloud . dataproc v1 . types . clusters .
- ListClustersRequest , response : google . cloud . dataproc v1 . types . clusters .

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- SINGLE NODE https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/single-node-clusters ZERO SCALE Clusters that can use only secondary workers and be scaled down to zero secondary worker nodes.
- If this source is enabled, Dataproc enables the monitoring agent in Compute Engine, and collects monitoring agent metrics, which are published with an agent.googleapis.com prefix.
- BIDIRECTIONAL Enables bidirectional private IPv6 access between Google Services and the Dataproc cluster.
- It cannot be activated on clusters created with supported Dataproc on Compute Engine image versions.

