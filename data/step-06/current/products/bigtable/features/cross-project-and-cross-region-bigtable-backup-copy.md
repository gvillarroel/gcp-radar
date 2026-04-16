---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.007Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cross-project and cross-region Bigtable backup copy"
feature_slug: "cross-project-and-cross-region-bigtable-backup-copy"
latest_feature_date: "2023-08-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/backups"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.CopyBackupRequest"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
keywords:
  - "copy"
  - "project"
  - "cross"
  - "backup"
  - "supports"
  - "region"
---

# Cross-project and cross-region Bigtable backup copy

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Cloud Bigtable now supports creating a backup copy in any project or region where a Bigtable instance exists.

## Extended Definition

Cloud Bigtable now supports creating a backup copy in any project or region where a Bigtable instance exists.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.CopyBackupRequest](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.CopyBackupRequest)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)

## Supporting Pages

### Bigtable backups overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)
- Source ID: `site-docs-reference-2`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Restore from a standard or hot backup to a new table Any instance Any Bigtable region Any project Copy a backup 1, 2 Any instance Any Bigtable region Any project See Manage backups for step-by-step instructions on these actions as well as operations such as updating and deleting backups.
- If you restore to a different instance than where the backup was created, and the backup's instance and the destination instance don't have at least one cluster in the same region, you are charged a one-time cost for the initial data copy to the destination cluster at the standard network rates .
- Alternatively, create backups on a regular basis and then periodically create a copy of the most recent backup and store it on one or more clusters in different zones (optionally in a different instance or project).
- Costs when copying a backup When you create a copy of a backup in a different region than the source backup, you are charged standard network rates for the cost of copying the data to the destination cluster.

### "Class CopyBackupRequest (2.74.0) \_|\_ Java client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.CopyBackupRequest](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.CopyBackupRequest)
- Source ID: `site-java-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description sourceClusterId String sourceBackupId String Returns Type Description CopyBackupRequest Methods equals(Object o) public boolean equals ( Object o ) Parameter Name Description o Object Returns Type Description boolean Overrides Object.equals(Object) hashCode() public int hashCode () Returns Type Description int Overrides Object.hashCode() setDestination(String clusterId, String backupId) public CopyBackupRequest setDestination ( String clusterId , String backupId ) Parameters Name Description clusterId String backupId String Returns Type Description CopyBackupRequest setExpireTime(Instant expireTime) public CopyBackupRequest setExpireTime ( Instant expireTime ) Parameter Name Description expireTime org.threeten.bp.Instant Returns Type Description CopyBackupRequest setSourceInstance(String instanceId) public CopyBackupRequest setSourceInstance ( String instanceId ) Parameter Name Description instanceId String Returns Type Description CopyBackupRequest setSourceInstance(String projectId, String instanceId) public CopyBackupRequest setSourceInstance ( String projectId , String instanceId ) Parameters Name Description projectId String instanceId String Returns Type Description CopyBackupRequest toProto(String projectId, String instanceId) public CopyBackupRequest toProto ( String projectId , String instanceId ) Internal Only : This feature is not stable for application use.
- Parameters Name Description projectId String instanceId String Returns Type Description com.google.bigtable.admin.v2.CopyBackupRequest Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Inheritance Object > CopyBackupRequest Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Static Methods of(String sourceClusterId, String sourceBackupId) public static CopyBackupRequest of ( String sourceClusterId , String sourceBackupId ) Create a CopyBackupRequest object.
- 2.74.0 (latest) 2.73.0 2.72.0 2.71.0 2.70.0 2.68.0 2.67.1 2.66.0 2.65.1 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.2 2.56.0 2.54.0 2.52.0 2.51.2 2.49.0 2.46.0 2.45.1 2.44.1 2.43.0 2.42.0 2.40.0 2.39.5 2.37.0 2.35.1 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.1 2.28.0 public final class CopyBackupRequest Build CopyBackupRequest for com.google.bigtable.admin.v2.CopyBackupRequest .

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- You can place instance clusters in any combination of zones across any regions that Google Cloud offers.
- Clusters in an instance can be created in any supported cloud region across the globe.
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- When comparing the two databases, you should understand how each database physically stores data differently in the following aspects: The data distribution strategy The number of cell versions available The storage disk type The data durability and replication mechanism Data distribution In Cassandra, a consistent hash of the primary key's partition columns is the recommended method of determining data distribution across the various SSTables served by cluster nodes.

