---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.159Z"
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
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
keywords:
  - "shielded"
  - "debian"
  - "ubuntu"
  - "default"
---

# Default Shielded VMs for Debian 10 and Ubuntu 18.04 images

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc uses Shielded VMs by default for Debian 10 and Ubuntu 18.04 clusters.

## Extended Definition

Dataproc uses Shielded VMs by default for Debian 10 and Ubuntu 18.04 clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images](https://docs.cloud.google.com/dataproc/docs/guides/dataproc-images)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/ClusterConfig)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)

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

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- Shielded Instance Config Shielded Instance Config for clusters using Compute Engine Shielded VMs . com. google. cloud. dataproc. v1.
- Authentication Config Authentication configuration for a workload is used to set the default identity for the workload execution.
- The default instance has everything set to sensible defaults: Classes Class Description com. google. cloud. dataproc. v1.
- Builder Authentication configuration for a workload is used to set the default identity for the workload execution.

