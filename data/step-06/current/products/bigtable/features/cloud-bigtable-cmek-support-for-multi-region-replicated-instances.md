---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.024Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable CMEK support for multi-region replicated instances"
feature_slug: "cloud-bigtable-cmek-support-for-multi-region-replicated-instances"
latest_feature_date: "2021-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cmek"
  - "https://docs.cloud.google.com/bigtable/docs/backups"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
keywords:
  - "replicated"
  - "multi"
  - "customer"
  - "enables"
  - "cmek"
  - "instances"
  - "region"
---

# Cloud Bigtable CMEK support for multi-region replicated instances

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Enables customer-managed encryption keys (CMEK) for Cloud Bigtable instances replicated across multiple regions.

## Extended Definition

Enables customer-managed encryption keys (CMEK) for Cloud Bigtable instances replicated across multiple regions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)
- [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) \_|\_ Bigtable \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)
- Source ID: `site-docs-reference-2`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Flexibility: You can use the same CMEK key in multiple projects, instances, or clusters, or you can use separate keys, depending on your business needs.
- Cross-region protection: You can enable CMEK in instances that have clusters in any region where Bigtable is available.
- CMEK-protected Bigtable resources (instances, clusters, tables, or backups) tied to a key that has been made inaccessible as the result of a user-triggered action (such as disabling or destroying a key, or by revoking the Encrypter/Decrypter role) for more than 30 consecutive days are automatically deleted .
- If you re-enable a disabled CMEK key to restore access to Bigtable instances protected by that key, some Data API requests might time out while your data is brought back online.

### Bigtable backups overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable replication and automated backup to create daily backups in multiple regions, so that if a table becomes corrupted on one cluster, you have one or more backups that don't share storage on the corrupted cluster.
- CMEK When you create a backup in a cluster that is protected by a customer-managed encryption key (CMEK) , the backup is pinned to the primary version of the cluster's CMEK key at the time it is taken.
- In replicated instances where automated backup is enabled, the storage costs might be higher because a backup is created on each cluster daily.
- In replicated instances, restoration takes longer because the data has to be copied to all the clusters.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Cluster size considerations When you size a Bigtable instance to prepare for migrating a Cassandra workload, there are considerations when you compare single-data center Cassandra clusters to single-cluster Bigtable instances, and Cassandra multiple-data center clusters to multi-cluster Bigtable instances.
- Because a write to Colossus is replicated multiple times, the durability is ensured even if nodal hardware failure occurs before the data is persisted to an SSTable for the row range.
- Geographic replication and consistency Bigtable and Cassandra handle geographic (also known as multi- region ) replication and consistency differently.
- In a blog post (2012) , Ilya Grigorik writes the following: "An SSTable is a simple abstraction to efficiently store large numbers of key-value pairs while optimizing for high throughput, sequential read or write workloads." The following table outlines and describes shared concepts and the corresponding terminology that each product uses: Cassandra Bigtable primary key : a unique single or multi-field value that determines data placement and ordering. partition key : a single or multi-field value that determines data placement by consistent hash. clustering column : a single or multi-field value that determines the lexicographical data sorting within a partition. row key : a unique, single byte string that determines the placement of data by a lexicographical sort.

