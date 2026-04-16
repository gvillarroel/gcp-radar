---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.148Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Balanced persistent disk support"
feature_slug: "balanced-persistent-disk-support"
latest_feature_date: "2021-01-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest"
keywords:
  - "balanced"
  - "persistent"
  - "disk"
  - "type"
  - "supports"
  - "cluster"
---

# Balanced persistent disk support

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports the pd-balanced persistent disk type for cluster storage.

## Extended Definition

Dataproc supports the pd-balanced persistent disk type for cluster storage.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest](https://docs.cloud.google.com/python/docs/reference/dataproc/latest)

## Supporting Pages

### "InstanceGroupConfig \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive).
- This field is supported only if bootDiskType is hyperdisk-balanced. bootDiskProvisionedThroughput string ( int64 format) Optional.
- This field is supported only if bootDiskType is hyperdisk-balanced.
- HYPERDISK BALANCED Hyperdisk Balanced disk type.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud KMS key resource name to use for persistent disk encryption for all instances in the cluster.
- The Cloud KMS key resource name to use for cluster persistent disk and job argument encryption.
- JSON representation { "clusterType" : enum ( ClusterType ) , "clusterTier" : enum ( ClusterTier ) , "configBucket" : string , "tempBucket" : string , "gceClusterConfig" : { object ( GceClusterConfig ) } , "masterConfig" : { object ( InstanceGroupConfig ) } , "workerConfig" : { object ( InstanceGroupConfig ) } , "secondaryWorkerConfig" : { object ( InstanceGroupConfig ) } , "softwareConfig" : { object ( SoftwareConfig ) } , "initializationActions" : [ { object ( NodeInitializationAction ) } ] , "encryptionConfig" : { object ( EncryptionConfig ) } , "autoscalingConfig" : { object ( AutoscalingConfig ) } , "securityConfig" : { object ( SecurityConfig ) } , "lifecycleConfig" : { object ( LifecycleConfig ) } , "endpointConfig" : { object ( EndpointConfig ) } , "metastoreConfig" : { object ( MetastoreConfig ) } , "dataprocMetricConfig" : { object ( DataprocMetricConfig ) } , "auxiliaryNodeGroups" : [ { object ( AuxiliaryNodeGroup ) } ] } Fields clusterType enum ( ClusterType ) Optional.
- JSON representation ClusterType ClusterTier GceClusterConfig JSON representation PrivateIpv6GoogleAccess ReservationAffinity JSON representation Type NodeGroupAffinity JSON representation ShieldedInstanceConfig JSON representation ConfidentialInstanceConfig JSON representation SoftwareConfig JSON representation Component NodeInitializationAction JSON representation EncryptionConfig JSON representation AutoscalingConfig JSON representation SecurityConfig JSON representation KerberosConfig JSON representation IdentityConfig JSON representation LifecycleConfig JSON representation EndpointConfig JSON representation DataprocMetricConfig JSON representation Metric JSON representation MetricSource AuxiliaryNodeGroup JSON representation The cluster config.

### "Python Client for Google Cloud Dataproc \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest](https://docs.cloud.google.com/python/docs/reference/dataproc/latest)
- Source ID: `site-python-reference`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

