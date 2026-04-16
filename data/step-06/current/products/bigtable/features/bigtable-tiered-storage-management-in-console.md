---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.964Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable tiered storage management in console"
feature_slug: "bigtable-tiered-storage-management-in-console"
latest_feature_date: "2026-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/managing-tables"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/choosing-ssd-hdd"
keywords:
  - "tiered"
  - "managing"
  - "management"
  - "storage"
  - "console"
  - "supports"
---

# Bigtable tiered storage management in console

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable now supports managing tiered storage configuration and viewing tiered storage metrics in Google Cloud console with system insights.

## Extended Definition

Bigtable now supports managing tiered storage configuration and viewing tiered storage metrics in Google Cloud console with system insights.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/managing-tables](https://docs.cloud.google.com/bigtable/docs/managing-tables)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/choosing-ssd-hdd](https://docs.cloud.google.com/bigtable/docs/choosing-ssd-hdd)

## Supporting Pages

### Create and manage tables \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/managing-tables](https://docs.cloud.google.com/bigtable/docs/managing-tables)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Click Save . gcloud To disable infrequent access storage, use the gcloud beta bigtable instances tables update command with the --clear-tiered-storage-config flag: gcloud beta bigtable instances tables update TABLE ID \ --instance = INSTANCE ID \ --project = PROJECT ID \ --clear-tiered-storage-config Replace the following: TABLE ID : the ID for the table that you want to update INSTANCE ID : the ID of the instance PROJECT ID : the project that contains the table that you want to update What's next Learn how to import and export data into and from your table.
- The number must be 30 or greater. gcloud To modify the age threshold of infrequent access storage, run the gcloud beta bigtable instances tables update command with the --tiered-storage-infrequent-access-older-than flag: gcloud beta bigtable instances tables update TABLE ID \ --instance = INSTANCE ID \ --project = PROJECT ID \ --tiered-storage-infrequent-access-older-than = AGE THRESHOLD Replace the following: TABLE ID : the ID for the table that you want to update.
- Example: 32d or 32d12h . gcloud beta bigtable instances tables create TABLE ID \ --instance = INSTANCE ID \ --project = PROJECT ID \ --tiered-storage-infrequent-access-older-than = AGE THRESHOLD cbt Use the following command, replacing TABLE NAME with the name of your table.
- For each table, the Google Cloud console displays the number of clusters that the table is stored on, the table's status, storage utilization, and the identifiers for any current backups of the table.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Bigtable separates the compute nodes, which serve client requests, from the underlying storage management.
- When comparing the two databases, you should understand how each database physically stores data differently in the following aspects: The data distribution strategy The number of cell versions available The storage disk type The data durability and replication mechanism Data distribution In Cassandra, a consistent hash of the primary key's partition columns is the recommended method of determining data distribution across the various SSTables served by cluster nodes.
- Replication within a zonal cluster is handled by the Colossus storage layer. table (formerly column family ): a logical organization of values that's indexed by the unique primary key. table : a logical organization of values that's indexed by the unique row key. keyspace : a logical table namespace that defines the replication factor for the tables it contains.
- SSD The SSD node's capacity of 5 TB, which is preferred for most workloads, provides higher storage density in comparison with the recommended configuration for Cassandra machines, which have a practical maximum storage density of less than 2 TB for each node.

### Choose between SSD and HDD storage \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/choosing-ssd-hdd](https://docs.cloud.google.com/bigtable/docs/choosing-ssd-hdd)
- Source ID: `site-docs-root-2`
- Final score: 99
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SSD storage supports a tiered storage option for infrequently accessed data .
- The following table compares Bigtable storage types in the context of tiered storage: Instance and tier Node capacity Expected latency Operations Best for SSD instance, SSD storage tier 5 TB Write/read: single-digit ms Write, read, update, delete High write/read throughput and low latency workloads SSD instance, tiered storage enabled 32 TB (up to 5 TB SSD) Write: single-digit ms Read: low double-digit ms Write, read, update, delete Large datasets with infrequently accessed data HDD instance, HDD tier 16 TB Write: single-digit ms Read: low double-digit ms Write, read, update, delete Large datasets with latency-insensitive workloads For more information about the performance of Bigtable storage types, see Understand performance .
- You cannot use the Google Cloud console to change the type of storage that is used for the instance.
- Because of disk seek time, HDD storage supports only 5% of the read rows per second of SSD storage.

