---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.170Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Ranger Top-Level Component"
feature_slug: "dataproc-ranger-top-level-component"
latest_feature_date: "2020-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/dataproc/docs/guides/logging"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
keywords:
  - "ranger"
  - "level"
  - "component"
  - "provides"
---

# Dataproc Ranger Top-Level Component

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Dataproc Ranger Top-Level Component provides Ranger as a top-level Dataproc component.

## Extended Definition

The Dataproc Ranger Top-Level Component provides Ranger as a top-level Dataproc component.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)

## Supporting Pages

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Node Group Controller Grpc The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.
- Node Group Controller Client Service Description: The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances.
- Async Service The NodeGroupControllerService provides methods to manage node groups of Compute Engine managed instances. com. google. cloud. dataproc. v1.
- Cluster Controller Grpc The ClusterControllerService provides methods to manage clusters of Compute Engine instances. com. google. cloud. dataproc. v1.

### Managed Service for Apache Spark logs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
- Source ID: `site-iam-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Component logging levels Set Spark, Hadoop, Flink, and other Managed Service for Apache Spark component logging levels with component-specific log4j cluster properties , such as hadoop-log4j , when you create a cluster .
- Spark and Hive component version logging levels: The Spark 3.3.X and Hive 3.X components use log4j2 properties, while previous versions of these components use log4j properties (see Apache Log4j2 ).
- Cluster-based component logging levels apply to service daemons, such as the YARN ResourceManager, and to jobs that run on the cluster.
- Job-specific component logging levels: You can also set component logging levels when you submit a job .

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation ClusterType ClusterTier GceClusterConfig JSON representation PrivateIpv6GoogleAccess ReservationAffinity JSON representation Type NodeGroupAffinity JSON representation ShieldedInstanceConfig JSON representation ConfidentialInstanceConfig JSON representation SoftwareConfig JSON representation Component NodeInitializationAction JSON representation EncryptionConfig JSON representation AutoscalingConfig JSON representation SecurityConfig JSON representation KerberosConfig JSON representation IdentityConfig JSON representation LifecycleConfig JSON representation EndpointConfig JSON representation DataprocMetricConfig JSON representation Metric JSON representation MetricSource AuxiliaryNodeGroup JSON representation The cluster config.
- If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets ).
- If you do not specify a temp bucket, Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket.
- JSON representation { "imageVersion" : string , "properties" : { string : string , ... } , "optionalComponents" : [ enum ( Component ) ] } Fields imageVersion string Optional.

