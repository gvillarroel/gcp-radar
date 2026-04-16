---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.971Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Unified customizable Bigtable system insights dashboard"
feature_slug: "unified-customizable-bigtable-system-insights-dashboard"
latest_feature_date: "2026-01-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views"
  - "https://docs.cloud.google.com/bigtable/docs/data-boost-overview"
keywords:
  - "customizable"
  - "unified"
  - "dashboard"
  - "insights"
  - "includes"
  - "system"
  - "introduced"
---

# Unified customizable Bigtable system insights dashboard

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable introduced a unified and customizable system insights dashboard that includes predefined metrics and other Google Cloud metrics.

## Extended Definition

Bigtable introduced a unified and customizable system insights dashboard that includes predefined metrics and other Google Cloud metrics.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- [https://docs.cloud.google.com/bigtable/docs/data-boost-overview](https://docs.cloud.google.com/bigtable/docs/data-boost-overview)

## Supporting Pages

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- The following diagram illustrates the physical data layout, compute processing nodes, and routing layer for Bigtable: Figure 5 : Architecture for data replication includes a frontend, Bigtable clusters, and Colossus.
- When creating schemas, you must be aware of potential tradeoffs between executing efficient scans within a single partition and system costs that are associated with maintaining large partitions .
- The storage layer automatically replicates the data to provide durability that exceeds levels provided by standard Hadoop Distributed File System (HDFS) three-way replication.
- The Bigtable Google Cloud console page comes with prebuilt dashboards for tracking throughput and utilization metrics at the instance, cluster, and table levels.

### Continuous materialized views \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- Source ID: `site-docs-reference-2`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- For example, assume that your source table contains rows with keys that follow the pattern advertiser id#region#ad id and one column family, data , that includes a spend usd column qualifier with numeric data representing ad spend: Row key data:spend usd adv1#us-east#ad1 100 adv1#us-west#ad2 150 adv2#us-east#ad3 200 If you use the following query to define a continuous materialized view of this table, the initial population of 1 TB of data completes in approximately three hours on a 175-node cluster.
- User errors prevent data from propagating to the view. materialized view/system errors Number of errors from system for the continuous materialized view You can also use many Bigtable table metrics to monitor a continuous materialized view, using the continuous materialized view ID in place of the table ID.
- Data in a continuous materialized view includes the following: Aggregated or transformed values that are derived from data in the source table Unaggregated values that define the grouping key Continuous materialized views let you pre-aggregate your data as you ingest it.
- This lets you retrieve summarized and aggregated data, such as metrics for dashboards, quickly.

### Bigtable Data Boost overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/data-boost-overview](https://docs.cloud.google.com/bigtable/docs/data-boost-overview)
- Source ID: `site-docs-reference-2`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- You can monitor your usage of serverless processing units (SPUs), by checking the SPU usage count ( data boost/spu usage count ) metric on the App profile tab on the Bigtable system insights page.
- Monitoring To monitor your Data Boost traffic, you can check the metrics for your Data Boost app profile on the Bigtable system insights page in the Google Cloud console.
- For a list of metrics available by app profile, see System insights charts for Bigtable resources .
- This includes batched point reads.

