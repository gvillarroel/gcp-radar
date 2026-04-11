---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.733Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "BigQuery destination partitioning and clustering"
feature_slug: "bigquery-destination-partitioning-and-clustering"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/datastream/docs/create-a-stream"
  - "https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics"
  - "https://docs.cloud.google.com/datastream/docs/behavior-overview"
keywords:
  - "destination"
  - "partitioning"
  - "and"
  - "clustering"
  - "datastream"
  - "supports"
  - "for"
  - "destinations"
---

# BigQuery destination partitioning and clustering

Product: Datastream
Coverage: LOW

## Step 02 Summary

Datastream supports partitioning and clustering for BigQuery destinations.

## Extended Definition

Datastream supports partitioning and clustering for BigQuery destinations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)
- [https://docs.cloud.google.com/datastream/docs/behavior-overview](https://docs.cloud.google.com/datastream/docs/behavior-overview)

## Supporting Pages

### Create a stream \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/create-a-stream](https://docs.cloud.google.com/datastream/docs/create-a-stream)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you want to configure or modify partitioning and clustering settings for a table that already exists, first delete it from BigQuery, and then configure or modify its settings in Datastream.
- If you want to configure or modify partitioning and clustering settings for a table that already exists, first delete it from BigQuery, and then configure or modify its settings in Datastream.
- If you want to configure or modify partitioning and clustering settings for a table that already exists, first delete it from BigQuery, and then configure or modify its settings in Datastream.
- If you want to configure or modify partitioning and clustering settings for a table that already exists, first delete it from BigQuery, and then configure or modify its settings in Datastream.

### Implement Datastream and Dataflow for analytics \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics](https://docs.cloud.google.com/datastream/docs/implementing-datastream-dataflow-analytics)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Configure information about the source database for the stream In this section, you configure information about the source database for the stream by specifying the tables and schemas in the source database that Datastream: Can transfer into the destination.
- Datastream uses the information defined in the connection profiles to connect to both the source and the destination so that it can stream data from the source database into your destination bucket in Cloud Storage.
- Create connection profiles in Datastream In this section, you create connection profiles in Datastream for a source database and a destination.
- Datastream supports two output formats: Avro and JSON.

### Key concepts and features \_|\_ Datastream \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastream/docs/behavior-overview](https://docs.cloud.google.com/datastream/docs/behavior-overview)
- Source ID: `site-docs-root-2`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Destinations Datastream supports BigQuery, BigLake Iceberg tables and Cloud Storage as destinations .
- Behavior and use cases Datastream gives users the ability to bring source data from a Relational Database Management System (RDBMS) and other sources into destinations such as BigQuery, BigLake Iceberg tables and Cloud Storage in near real-time fashion.
- Events and streams Datastream ingests a lot of data in near real-time fashion from a variety of sources, and makes the data available for consumption in the destination.
- The event size is limited to 20 MB per event for BigQuery destinations and 100 MB per event for Cloud Storage destinations.

