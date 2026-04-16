---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.001Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable instance-level cost export to BigQuery"
feature_slug: "bigtable-instance-level-cost-export-to-bigquery"
latest_feature_date: "2024-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/backups"
  - "https://docs.cloud.google.com/bigtable/docs/dynamodb-users"
keywords:
  - "cost"
  - "export"
  - "level"
  - "instance"
---

# Bigtable instance-level cost export to BigQuery

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable cost data can now be viewed with instance-level granularity in the Cloud Billing detailed export to BigQuery.

## Extended Definition

Bigtable cost data can now be viewed with instance-level granularity in the Cloud Billing detailed export to BigQuery.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)
- [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- The number of nodes in each cluster in an instance should be able to handle all writes across the cluster and all reads to at least two data centers in order to maintain service level objectives (SLOs) during a cluster outage.
- The Bigtable Google Cloud console page comes with prebuilt dashboards for tracking throughput and utilization metrics at the instance, cluster, and table levels.
- Compared to Bigtable backups, exports take longer to execute and incur extra compute costs because the exports use Dataflow.
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.

### Bigtable backups overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)
- Source ID: `site-docs-reference-2`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- If you restore to a different instance than where the backup was created, and the backup's instance and the destination instance don't have at least one cluster in the same region, you are charged a one-time cost for the initial data copy to the destination cluster at the standard network rates .
- If the new table is in an instance that uses replication, you are charged a one-time replication cost for the data to be copied to all clusters in the instance.
- In replicated instances where automated backup is enabled, the storage costs might be higher because a backup is created on each cluster daily.
- Cost effective : Using Bigtable backups lets you avoid the costs associated with exporting, storing, and importing data using other services.

### Migrate from DynamoDB to Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Replication policies are set at the instance level.
- Garbage collection policies are set at the column family level and can delete items not only based on their age but also according to the number of versions the user wants to maintain.
- Bigtable is not a serverless product; you must create an instance with one or more clusters, whose capacity is determined by the number of nodes that they have.
- The tool reads the exported files from your Cloud Storage bucket and uses a Dataflow template to transform the data so that it's compatible with Bigtable.

