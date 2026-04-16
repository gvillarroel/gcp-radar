---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.614Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "cluster_type field in Dataproc monitoring metrics"
feature_slug: "cluster-type-field-in-dataproc-monitoring-metrics"
latest_feature_date: "2022-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient"
keywords:
  - "cluster"
  - "type"
  - "field"
  - "dataproc"
  - "monitoring"
  - "metrics"
  - "job"
  - "operation"
---

# cluster_type field in Dataproc monitoring metrics

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc job and operation metrics in Cloud Monitoring include a cluster_type field.

## Extended Definition

Dataproc job and operation metrics in Cloud Monitoring include a cluster_type field.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "clusterType" : enum ( ClusterType ) , "clusterTier" : enum ( ClusterTier ) , "configBucket" : string , "tempBucket" : string , "gceClusterConfig" : { object ( GceClusterConfig ) } , "masterConfig" : { object ( InstanceGroupConfig ) } , "workerConfig" : { object ( InstanceGroupConfig ) } , "secondaryWorkerConfig" : { object ( InstanceGroupConfig ) } , "softwareConfig" : { object ( SoftwareConfig ) } , "initializationActions" : [ { object ( NodeInitializationAction ) } ] , "encryptionConfig" : { object ( EncryptionConfig ) } , "autoscalingConfig" : { object ( AutoscalingConfig ) } , "securityConfig" : { object ( SecurityConfig ) } , "lifecycleConfig" : { object ( LifecycleConfig ) } , "endpointConfig" : { object ( EndpointConfig ) } , "metastoreConfig" : { object ( MetastoreConfig ) } , "dataprocMetricConfig" : { object ( DataprocMetricConfig ) } , "auxiliaryNodeGroups" : [ { object ( AuxiliaryNodeGroup ) } ] } Fields clusterType enum ( ClusterType ) Optional.
- JSON representation ClusterType ClusterTier GceClusterConfig JSON representation PrivateIpv6GoogleAccess ReservationAffinity JSON representation Type NodeGroupAffinity JSON representation ShieldedInstanceConfig JSON representation ConfidentialInstanceConfig JSON representation SoftwareConfig JSON representation Component NodeInitializationAction JSON representation EncryptionConfig JSON representation AutoscalingConfig JSON representation SecurityConfig JSON representation KerberosConfig JSON representation IdentityConfig JSON representation LifecycleConfig JSON representation EndpointConfig JSON representation DataprocMetricConfig JSON representation Metric JSON representation MetricSource AuxiliaryNodeGroup JSON representation The cluster config.
- If this source is enabled, Dataproc enables the monitoring agent in Compute Engine, and collects monitoring agent metrics, which are published with an agent.googleapis.com prefix.
- JSON representation { "idleDeleteTtl" : string , "idleStopTtl" : string , "idleStartTime" : string , // Union field ttl can be only one of the following: "autoDeleteTime" : string , "autoDeleteTtl" : string // End of list of possible types for union field ttl . // Union field stop ttl can be only one of the following: "autoStopTime" : string , "autoStopTtl" : string // End of list of possible types for union field stop ttl . } Fields idleDeleteTtl string ( Duration format) Optional.

### Managed Service for Apache Spark metrics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-metrics)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Managed Service for Apache Spark resource metric collection Cloud Monitoring collects metrics related to the following Managed Service for Apache Spark resources: Cloud Dataproc Cluster Cloud Dataproc Job Cloud Dataproc Batch Cloud Dataproc Session Managed Service for Apache Spark resource metrics are collected in the following format: dataproc.googleapis.com/ RESOURCE / METRIC , and include the collection of several OSS metrics.
- Google Cloud Observability collects and ingests metrics, events, and metadata from Managed Service for Apache Spark clusters, including per-cluster HDFS, YARN, job, and operation metrics, to generate insights via dashboards and charts (see Cloud Monitoring Managed Service for Apache Spark metrics ).
- Disk agent.googleapis.com/disk/bytes used agent.googleapis.com/disk/io time agent.googleapis.com/disk/merged operations agent.googleapis.com/disk/operation count agent.googleapis.com/disk/operation time agent.googleapis.com/disk/pending operations agent.googleapis.com/disk/percent used agent.googleapis.com/disk/read bytes count Swap agent.googleapis.com/swap/bytes used agent.googleapis.com/swap/io agent.googleapis.com/swap/percent used Memory agent.googleapis.com/memory/bytes used agent.googleapis.com/memory/percent used Processes - Some attributes follow unique quota policies . agent.googleapis.com/processes/count by state agent.googleapis.com/processes/cpu time agent.googleapis.com/processes/disk/read bytes count agent.googleapis.com/processes/disk/write bytes count agent.googleapis.com/processes/fork count agent.googleapis.com/processes/rss usage agent.googleapis.com/processes/vm usage Interface agent.googleapis.com/interface/errors agent.googleapis.com/interface/packets agent.googleapis.com/interface/traffic Network agent.googleapis.com/network/tcp connections Build a Monitoring dashboard You can build a Monitoring dashboard that displays charts of selected Managed Service for Apache Spark metrics.
- Enable custom metric collection You can use the gcloud CLI or the Dataproc API to enable the collection of custom metrics from one or more metric sources. gcloud CLI Custom metric collection Use the gcloud dataproc clusters create --metric-sources flag to enable the collection of custom metrics from one or more metric sources. gcloud dataproc clusters create cluster-name \ --metric-sources= METRIC SOURCE(s) \ ... other flags Notes: --metric-sources : Required to enable custom metric collection.

### "Class ClusterControllerAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.cluster_controller.ClusterControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- UpdateClusterRequest ( project id="project id value", region="region value", cluster name="cluster name value", cluster=cluster, ) Make the request operation = client. update cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.UpdateClusterRequest , dict]] The request object.
- DiagnoseClusterRequest ( project id="project id value", region="region value", cluster name="cluster name value", ) Make the request operation = client. diagnose cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.DiagnoseClusterRequest , dict]] The request object.
- DeleteClusterRequest ( project id="project id value", region="region value", cluster name="cluster name value", ) Make the request operation = client. delete cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.DeleteClusterRequest , dict]] The request object.
- StartClusterRequest ( project id="project id value", region="region value", cluster name="cluster name value", ) Make the request operation = client. start cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.StartClusterRequest , dict]] The request object.

