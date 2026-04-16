---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.990Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable support in Database Center"
feature_slug: "bigtable-support-in-database-center"
latest_feature_date: "2024-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/dynamodb-users"
  - "https://docs.cloud.google.com/bigtable/docs/overview"
keywords:
  - "surfaces"
  - "protection"
  - "database"
  - "center"
  - "which"
  - "availability"
---

# Bigtable support in Database Center

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable is now supported in Database Center, which surfaces Bigtable availability and data-protection health issues in a centralized AI-assisted dashboard.

## Extended Definition

Bigtable is now supported in Database Center, which surfaces Bigtable availability and data-protection health issues in a centralized AI-assisted dashboard.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)
- [https://docs.cloud.google.com/bigtable/docs/overview](https://docs.cloud.google.com/bigtable/docs/overview)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Nodes are given temporary responsibility for serving various ranges of data based on the operation load and the health of other nodes in the cluster. data center : similar to a Bigtable cluster, except some aspects of topology and replication strategy are configurable in Cassandra. rack : a grouping of nodes in a data center that influences replica placement. cluster : a group of nodes in the same geographic Google Cloud zone, colocated for latency and replication concerns. cluster : a Cassandra deployment consisting of a collection of data centers. instance : a group of Bigtable clusters in different Google Cloud zones or regions between which replication and connection routing occur. vnode : a fixed range of hash values assigned to a specific physical node.
- The replication factor, which you configure for every keyspace, determines the number of data replicas that are stored in each data center in the cluster.
- To help you compare Bigtable and Cassandra, this document does the following: Compares terminology, which can differ between the two databases.
- This strategy reveals Cassandra's roots as a database originally deployed on physical, on-premises data centers.

### Migrate from DynamoDB to Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/dynamodb-users](https://docs.cloud.google.com/bigtable/docs/dynamodb-users)
- Source ID: `site-docs-reference-2`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Invoice Payment row key Details 0680 0789 0123 {"discount": 0.10, "sales tax usd":"8", "due date":"2023-10-03.."} @ 2023-09-10T15:21:48 {"amount usd": 120, "bill to":"John…", "address":"123 Abc St…"} @ 2023-09-10T15:21:40 {"amount usd": 120, "bill to":"Jane…", "address":"13 Xyz St…"} @ 2023-09-10T15:21:31 row key Details 0275 0327 0124 {"discount": 0.20, "sales tax usd":"11", "due date":"2023-10-03.."} @ 2023-09-09T10:11:28 {"amount usd": 70, "bill to":"Kate…", "address":"21 Zyx St…"} @ 2023-09-09T10:11:03 {"amount usd": 180, "bill to":"Bob…", "address":"321 Cba St…"} @ 2023-09-09T10:11:10 As you can see in the previous examples, with the right schema design, Bigtable's wide-column model can be quite powerful and deliver many use cases that would require expensive multi-row transactions, secondary indexing, or on-delete cascade behavior in other databases.
- Special effects are amazing. @ 2023-09-10T19:01:15 There seems to be an audio glitch at 1:05. @ 2023-09-10T16:30:42 0124 {"480": "https://storage…", "720":"https://storage…"} @2023-09-10T17:03:21 45 The style reminds me of a movie director but I can't put my finger on it. @2023-10-12T07:08:51 Adjacency list design pattern Consider a slightly different version of this design, which DynamoDB often refers to as the adjacency list design pattern.
- 25 https://storage… shoes#sneakers#brandA Step out in style and comfort with… 40 https://storage… shoes#sneakers#brandB Classic features with contemporary materials… 50 https://storage… Single table design pattern A single table design pattern brings together what would be multiple tables in a relational database into a single table in DynamoDB.
- Lastly, because columns in Bigtable are ordered lexicographically, as an optimization, you can rename the columns in a way that allows a fast range scan – from video properties to the top N most recent comments – in a single read request, which is what you'd want to do when the video is loaded.

### Bigtable overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/overview](https://docs.cloud.google.com/bigtable/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- You can also add clusters to replicate your data , which improves data availability and durability.
- Bigtable architecture The following diagram shows a simplified version of Bigtable's overall architecture: As the diagram illustrates, all client requests go through a frontend server before they are sent to a Bigtable node. (In the original Bigtable paper , these nodes are called "tablet servers.") The nodes are organized into a Bigtable cluster, which belongs to a Bigtable instance, a container for the cluster.
- Data durability When you use Bigtable, your data is stored on Colossus, a Google-developed, highly durable file system, using storage devices in Google Cloud's data centers.
- At the same time, it's useful to group related rows so they are next to one another, which makes it much more efficient to read several rows at the same time.

