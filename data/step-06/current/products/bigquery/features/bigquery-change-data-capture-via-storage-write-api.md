---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.675Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery change data capture via Storage Write API"
feature_slug: "bigquery-change-data-capture-via-storage-write-api"
latest_feature_date: "2023-03-27"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data"
keywords:
  - "apply streaming changes"
  - "change data capture"
  - "streamed changes"
  - "real-time CDC"
  - "BigQuery Storage Write API"
  - "Storage Write API"
  - "CDC"
  - "Write API"
---

# BigQuery change data capture via Storage Write API

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports change data capture by processing and applying streamed changes in real time through the BigQuery Storage Write API.

## Extended Definition

BigQuery can ingest change data capture (CDC) updates through the BigQuery Storage Write API using a streaming approach for near-real-time replication of row-level database changes. The feature supports CDC-specific ordering control by allowing a change sequence number to manage streaming UPSERT ordering, and the Storage Write API path is described as using robust exactly-once delivery semantics.

## Evidence Summary

The cited pages confirm that BigQuery CDC is positioned as near-real-time streamed data loading via the Storage Write API, with explicit support for change-sequence-based UPSERT ordering and exactly-once streaming semantics.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)

## Supporting Pages

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: It provides generic quota-limit troubleshooting guidance, but contains no specific details about change data capture semantics or CDC support.

Evidence snippets:
- The BigQuery Storage Write API has robust features, including exactly-once delivery semantics.
- The BigQuery Storage Write API has robust features, including exactly-once delivery semantics.
- The BigQuery Storage Write API has robust features, including exactly-once delivery semantics.
- If you frequently insert data, consider using the BigQuery Storage Write API .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- The plugin leverages the BigQuery Storage Write API for efficient high-throughput streaming.
- Feature You can now define a CHANGE SEQUENCE NUMBER for BigQuery change data capture (CDC) to manage streaming UPSERT ordering for BigQuery.
- Feature You can now use the Apache Arrow format to stream data to BigQuery with the Storage Write API .
- Feature You can now use the Apache Arrow format to stream data to BigQuery with the Storage Write API .

### Introduction to loading data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data](https://docs.cloud.google.com/bigquery/docs/loading-data)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: CDC is mentioned only through Datastream replication, with no reference to Storage Write API-based CDC processing.

Evidence snippets:
- You can also directly use the BigQuery Storage Write API .
- Change Data Capture (CDC) This method enables replicating data from databases to BigQuery in near real time.
- Datastream leverages CDC capabilities to track and replicate row-level changes from your data sources.

