---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.622Z"
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
  - "dataproc"
  - "supports"
  - "pd"
  - "type"
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

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest](https://docs.cloud.google.com/python/docs/reference/dataproc/latest)

## Supporting Pages

### "Python Client for Google Cloud Dataproc \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest](https://docs.cloud.google.com/python/docs/reference/dataproc/latest)
- Source ID: `site-python-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 5.26.0 (latest) 5.25.0 5.24.0 5.23.0 5.22.0 5.21.0 5.20.0 5.18.1 5.17.1 5.16.0 5.15.1 5.14.0 5.13.0 5.12.0 5.10.2 5.9.3 5.8.0 5.7.0 5.6.0 5.5.1 5.4.3 5.3.0 5.2.0 5.1.0 5.0.3 4.0.3 3.3.2 3.2.0 3.1.1 3.0.0 2.6.2 2.5.0 2.4.0 2.3.1 2.2.0 2.0.2 1.1.3 1.0.1 0.8.2 0.7.0 0.6.1 0.5.0 Google Cloud Dataproc : is a faster, easier, more cost-effective way to run Apache Spark and Apache Hadoop.
- Mac/Linux python3 -m venv <your-env> source <your-env>/bin/activate pip install google-cloud-dataproc Windows py -m venv <your-env> .\<your-env>\Scripts\activate pip install google-cloud-dataproc Next Steps Read the Client Library Documentation for Google Cloud Dataproc to see other available methods on the client.
- Home Documentation Developer tools Python Client libraries Send feedback Python Client for Google Cloud Dataproc Stay organized with collections Save and categorize content based on your preferences.
- Read the Google Cloud Dataproc Product documentation to learn more about the product and see How-to Guides.

### "InstanceGroupConfig \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- Examples: https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/machineTypes/n1-standard-2 projects/[projectId]/zones/[zone]/machineTypes/n1-standard-2 n1-standard-2 Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the machine type resource, for example, n1-standard-2 . diskConfig object ( DiskConfig ) Optional.
- Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive).
- This field is supported only if bootDiskType is hyperdisk-balanced. bootDiskProvisionedThroughput string ( int64 format) Optional.
- Hyperdisk Balanced High Availability is not supported because that's for cross-zone usages, which is not supported in Dataproc.

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "clusterType" : enum ( ClusterType ) , "clusterTier" : enum ( ClusterTier ) , "configBucket" : string , "tempBucket" : string , "gceClusterConfig" : { object ( GceClusterConfig ) } , "masterConfig" : { object ( InstanceGroupConfig ) } , "workerConfig" : { object ( InstanceGroupConfig ) } , "secondaryWorkerConfig" : { object ( InstanceGroupConfig ) } , "softwareConfig" : { object ( SoftwareConfig ) } , "initializationActions" : [ { object ( NodeInitializationAction ) } ] , "encryptionConfig" : { object ( EncryptionConfig ) } , "autoscalingConfig" : { object ( AutoscalingConfig ) } , "securityConfig" : { object ( SecurityConfig ) } , "lifecycleConfig" : { object ( LifecycleConfig ) } , "endpointConfig" : { object ( EndpointConfig ) } , "metastoreConfig" : { object ( MetastoreConfig ) } , "dataprocMetricConfig" : { object ( DataprocMetricConfig ) } , "auxiliaryNodeGroups" : [ { object ( AuxiliaryNodeGroup ) } ] } Fields clusterType enum ( ClusterType ) Optional.
- JSON representation ClusterType ClusterTier GceClusterConfig JSON representation PrivateIpv6GoogleAccess ReservationAffinity JSON representation Type NodeGroupAffinity JSON representation ShieldedInstanceConfig JSON representation ConfidentialInstanceConfig JSON representation SoftwareConfig JSON representation Component NodeInitializationAction JSON representation EncryptionConfig JSON representation AutoscalingConfig JSON representation SecurityConfig JSON representation KerberosConfig JSON representation IdentityConfig JSON representation LifecycleConfig JSON representation EndpointConfig JSON representation DataprocMetricConfig JSON representation Metric JSON representation MetricSource AuxiliaryNodeGroup JSON representation The cluster config.
- The Cloud KMS key resource name to use for persistent disk encryption for all instances in the cluster.
- The Cloud KMS key resource name to use for cluster persistent disk and job argument encryption.

