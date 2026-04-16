---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.002Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable reverse scans"
feature_slug: "cloud-bigtable-reverse-scans"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/dynamodb-users"
  - "https://docs.cloud.google.com/bigtable/docs/schema-design"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
keywords:
  - "ranges"
  - "scans"
  - "reverse"
  - "reading"
  - "enabling"
  - "added"
---

# Cloud Bigtable reverse scans

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Cloud Bigtable added support for reverse scans, enabling reading row ranges in descending order; Introduces reverse scans in Cloud Bigtable, enabling scanning rows in reverse order.

## Extended Definition

Cloud Bigtable added support for reverse scans, enabling reading row ranges in descending order; Introduces reverse scans in Cloud Bigtable, enabling scanning rows in reverse order.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)
- [https://docs.cloud.google.com/bigtable/docs/schema-design](https://docs.cloud.google.com/bigtable/docs/schema-design)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Composite keys are imitated by joining the data of multiple columns by using a common delimiter—for example, the hash (#) or percent (%) symbols. node : a machine responsible for reading and writing data that's associated with a series of primary key partition hash ranges.
- In Cassandra, data is stored on block-level storage that's attached to the node server. node : a virtual compute resource responsible for reading and writing data that's associated with a series of row key ranges.
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- If Bigtable identifies that range-assignment rebalancing is required for a dataset, the data ranges for a processing node are straightforward to change because the storage layer is separated from the processing layer.

### Schema design best practices \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/schema-design](https://docs.cloud.google.com/bigtable/docs/schema-design)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In contrast, consider the same rows where the domain names have been reversed: com.google.drive com.google.maps org.wikipedia.en In the second example, the related rows are automatically sorted in a way that makes it easier to retrieve them as a range of rows.
- In contrast, standard domain names that are not reversed can cause rows to be sorted in such a way that related data is not grouped together in one place, which can result in less efficient compression and less efficient reads.
- For example, if you're storing 1 KB (1,024 bytes) of data, it's much more space-efficient to store that data in a single cell, rather than spreading the data across 1,024 cells that each contain 1 byte.
- Wide range of domain names If you're storing data about entities that can be represented as domain names, consider using a reverse domain name (for example, com.company.product ) as the row key.

### Migrate from DynamoDB to Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)
- Source ID: `site-docs-reference-2`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- It reduces the risk of hot row ranges , but it makes access patterns that involve scans that cross partition boundaries expensive and inefficient.
- You don't have to use an UploadDate column or calculate a reverse timestamp and make that your sort key, either, because Bigtable timestamps give you the reverse chronologically ordered comments automatically.
- GetItem BatchGetItem , Query , Scan ReadRow ReadRows ( range , prefix , reverse scan ) Bigtable supports efficient scanning by row key prefix, regular expression pattern, or row key range forward or backward.
- Therefore, a sort key with the pattern VideoComment#reverse-timestamp is used to make each comment a separate row within the partition, sorted in reverse chronological order.

