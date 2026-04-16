---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.212Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Cloud Dataproc API v1"
feature_slug: "cloud-dataproc-api-v1"
latest_feature_date: "2016-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups"
  - "https://docs.cloud.google.com/dataproc/docs/api-libraries-overview"
keywords:
  - "live"
  - "related"
  - "fixes"
  - "regional"
  - "provides"
---

# Cloud Dataproc API v1

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The v1 Cloud Dataproc API provides the live general API with regional support and related fixes.

## Extended Definition

The v1 Cloud Dataproc API provides the live general API with regional support and related fixes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- [https://docs.cloud.google.com/dataproc/docs/api-libraries-overview](https://docs.cloud.google.com/dataproc/docs/api-libraries-overview)

## Supporting Pages

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Node Group Controller Grpc The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.
- Node Group Controller Client Service Description: The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances.
- Async Service The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.
- Cluster Controller Grpc The ClusterControllerService provides methods to manage clusters of Compute Engine instances. com. google. cloud. dataproc. v1.

### Managed Service for Apache Spark driver node groups \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups](https://docs.cloud.google.com/dataproc/docs/guides/node-groups/dataproc-driver-node-groups)
- Source ID: `site-iam-reference`
- Final score: 49
- Re-rank relevance: N/A

Evidence snippets:
- Driver node group compared to Spark cluster mode Feature Spark cluster mode Driver node group Worker node scale down Long-lived drivers run on the same worker nodes as short-lived containers, making scale down of workers using graceful decommission slow.
- Additional fields: Add additional fields related to the job type and job arguments (the sample request includes fields needed to submit a Spark job that estimates the value of pi ).
- Recommended flag: --enable-component-gateway : Add this flag to enable the Managed Service for Apache Spark Component Gateway , which provides access to the YARN web interface.
- Set the EndpointConfig.enableHttpPortAccess property to true to enable the Managed Service for Apache Spark Component Gateway , which provides access to the YARN web interface.

### "Overview of APIs and Client Libraries \_|\_ Managed Service for Apache Spark\

- URL: [https://docs.cloud.google.com/dataproc/docs/api-libraries-overview](https://docs.cloud.google.com/dataproc/docs/api-libraries-overview)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

