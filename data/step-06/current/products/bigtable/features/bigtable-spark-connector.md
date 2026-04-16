---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.996Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable Spark connector"
feature_slug: "bigtable-spark-connector"
latest_feature_date: "2024-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/data-boost-overview"
  - "https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users"
  - "https://docs.cloud.google.com/bigtable/docs/beam-connector"
keywords:
  - "writing"
  - "spark"
  - "connector"
  - "reading"
  - "supports"
---

# Bigtable Spark connector

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

The Bigtable Spark connector now supports reading and writing with Spark SQL and DataFrames.

## Extended Definition

The Bigtable Spark connector now supports reading and writing with Spark SQL and DataFrames.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/data-boost-overview](https://docs.cloud.google.com/bigtable/docs/data-boost-overview)
- [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- [https://docs.cloud.google.com/bigtable/docs/beam-connector](https://docs.cloud.google.com/bigtable/docs/beam-connector)

## Supporting Pages

### Bigtable Data Boost overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/data-boost-overview](https://docs.cloud.google.com/bigtable/docs/data-boost-overview)
- Source ID: `site-docs-reference-2`
- Final score: 96
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following are ideal use cases for Data Boost: Scheduled or triggered export or ETL pipeline jobs from Bigtable to Cloud Storage for data enrichment, analysis, archiving, offline ML model training, or ingestion by your customers' third-party partners ETL using a tool such as Dataflow for short scan or batch read processes that support in-place aggregations, rule-based transformations for MDM, or ML jobs Spark applications that use the Bigtable Spark connector to read Bigtable data Ad hoc queries and scheduled analytics jobs that use BigQuery external tables to read Bigtable data.
- Use the Bigtable Spark connector.
- This is especially true if your instance uses replication and you are reading data that was written to a cluster in a different region than you are reading from.
- Reading data immediately after it's written - When you read data with Data Boost, you might not read all data that was written in the most recent 35 minutes.

### Bigtable for Cassandra users \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users](https://docs.cloud.google.com/bigtable/docs/cloud-bigtable-for-cassandra-users)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Composite keys are imitated by joining the data of multiple columns by using a common delimiter—for example, the hash (#) or percent (%) symbols. node : a machine responsible for reading and writing data that's associated with a series of primary key partition hash ranges.
- In Cassandra, data is stored on block-level storage that's attached to the node server. node : a virtual compute resource responsible for reading and writing data that's associated with a series of row key ranges.
- The Java client understands your CQL queries, and lets you use Bigtable transparently with your existing Cassandra-based application without rewriting code.
- It also supports modern workloads, such as machine learning and AI, that require frequent iteration on feature stores and real-time serving at global scale.

### Bigtable Beam connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/beam-connector](https://docs.cloud.google.com/bigtable/docs/beam-connector)
- Source ID: `site-docs-root-2`
- Final score: 55
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you are migrating from HBase to Bigtable or you are running an application uses the HBase API instead of the Bigtable APIs, use the Bigtable HBase Beam connector ( CloudBigtableIO ) instead of the connector described on this page.
- Bigtable Kafka Connect sink connector Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Bigtable Beam connector The Bigtable Beam connector ( BigtableIO ) is an open source Apache Beam I/O connector that can help you perform batch and streaming operations on Bigtable data in a pipeline using Dataflow .
- You write code to deploy a pipeline that uses the connector to Dataflow, which handles the provisioning and management of resources and assists with the scalability and reliability of data processing.

