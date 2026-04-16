---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.630Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Default Shielded VMs for Debian 10 and Ubuntu 18.04 images"
feature_slug: "default-shielded-vms-for-debian-10-and-ubuntu-18-04-images"
latest_feature_date: "2020-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop"
keywords:
  - "default"
  - "shielded"
  - "vms"
  - "debian"
  - "10"
  - "ubuntu"
  - "18"
  - "04"
---

# Default Shielded VMs for Debian 10 and Ubuntu 18.04 images

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc uses Shielded VMs by default for Debian 10 and Ubuntu 18.04 clusters.

## Extended Definition

Dataproc uses Shielded VMs by default for Debian 10 and Ubuntu 18.04 clusters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop)

## Supporting Pages

### "ClusterConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- If unspecified, it defaults to the latest Debian version. properties map (key: string, value: string) Optional.
- JSON representation ClusterType ClusterTier GceClusterConfig JSON representation PrivateIpv6GoogleAccess ReservationAffinity JSON representation Type NodeGroupAffinity JSON representation ShieldedInstanceConfig JSON representation ConfidentialInstanceConfig JSON representation SoftwareConfig JSON representation Component NodeInitializationAction JSON representation EncryptionConfig JSON representation AutoscalingConfig JSON representation SecurityConfig JSON representation KerberosConfig JSON representation IdentityConfig JSON representation LifecycleConfig JSON representation EndpointConfig JSON representation DataprocMetricConfig JSON representation Metric JSON representation MetricSource AuxiliaryNodeGroup JSON representation The cluster config.
- JSON representation { "zoneUri" : string , "autoZoneExcludeZoneUris" : [ string ] , "networkUri" : string , "subnetworkUri" : string , "privateIpv6GoogleAccess" : enum ( PrivateIpv6GoogleAccess ) , "serviceAccount" : string , "serviceAccountScopes" : [ string ] , "tags" : [ string ] , "metadata" : { string : string , ... } , "reservationAffinity" : { object ( ReservationAffinity ) } , "nodeGroupAffinity" : { object ( NodeGroupAffinity ) } , "shieldedInstanceConfig" : { object ( ShieldedInstanceConfig ) } , "confidentialInstanceConfig" : { object ( ConfidentialInstanceConfig ) } , "resourceManagerTags" : { string : string , ... } , "internalIpOnly" : boolean } Fields zoneUri string Optional.
- The following base set of scopes is always included: https://www.googleapis.com/auth/cloud.useraccounts.readonly https://www.googleapis.com/auth/devstorage.read write https://www.googleapis.com/auth/logging.write If no scopes are specified, the following defaults are also provided: https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/bigtable.admin.table https://www.googleapis.com/auth/bigtable.data https://www.googleapis.com/auth/devstorage.full control tags[] string The Compute Engine network tags to add to all instances (see Tagging instances ). metadata map (key: string, value: string) Optional.

### "Create a Managed Service for Apache Spark custom image \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- The following base images are supported: Debian, Rocky Linux, and Ubuntu .
- To disable secure boot: By default, the Managed Service for Apache Spark custom image scripts generate and manage a key pair using Secret Manager when run from a Managed Service for Apache Spark cluster.
- Using optional components: 2.2 and earlier base images: By default, all of the Managed Service for Apache Spark optional components (OS packages and configs) are installed on the custom image.
- In the Choose how to store your data section, do the following: Select a default storage class for the bucket or Autoclass for automatic storage class management of your bucket's data.

### "Stop and start clusters \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-start-stop)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Notes: The cluster start and stop feature is available on clusters created with images released on or after the following image versions: 1.4.35-debian10/ubuntu18 1.5.10-debian10/ubuntu18 2.0.0-RC6-debian10/ubuntu18 Stopping individual cluster nodes is not recommended since the status of a stopped VM may not be in sync with cluster status, which can result in errors.

