---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.640Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Storage Write API multiplexing"
feature_slug: "bigquery-storage-write-api-multiplexing"
latest_feature_date: "2023-07-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
keywords:
  - "write stream multiplexing"
  - "multiplexed write stream"
  - "append to default stream"
  - "WriteStream"
  - "default stream"
  - "multiple destination tables"
  - "Storage Write API"
---

# BigQuery Storage Write API multiplexing

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Storage Write API multiplexing is now generally available and allows writing to multiple destination tables through the default stream.

## Extended Definition

The provided Google Cloud documentation excerpts describe the BigQuery Storage Write API as an ingestion API path for loading data at high throughput, with a lower cost profile than streaming inserts and support for robust behavior such as exactly-once delivery semantics. The excerpts also indicate it is intended for high-rate appends and direct readers to separate quota and pricing details for Storage Write API usage. However, the provided excerpts do not explicitly document the claimed multiplexing behavior of writing to multiple destination tables via the default stream, so that specific feature detail is only weakly evidenced here.

## Evidence Summary

The cited pages support general Storage Write API capabilities (throughput, lower cost versus streaming inserts, exactly-once delivery, and high-rate append guidance) but do not explicitly mention default-stream multiplexed writes to multiple tables.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)

## Supporting Pages

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- You might also want to consider replacing streaming inserts with the newer Storage Write API , which has higher throughput, lower price, and many useful features.
- To learn about limits and quotas, see Storage Write API and to see costs of using this API, see BigQuery data ingestion pricing .
- To learn about limits and quotas, see Storage Write API and to see costs of using this API, see BigQuery data ingestion pricing .
- To learn about limits and quotas, see Storage Write API and to see costs of using this API, see BigQuery data ingestion pricing .

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- To learn about limits and quotas, see Storage Write API and to see costs of using this API, see BigQuery data ingestion pricing .
- The BigQuery Storage Write API has robust features, including exactly-once delivery semantics.
- To append data at a high rate, consider using BigQuery Storage Write API .

