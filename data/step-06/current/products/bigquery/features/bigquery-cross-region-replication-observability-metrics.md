---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.340Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery cross-region replication observability metrics"
feature_slug: "bigquery-cross-region-replication-observability-metrics"
latest_feature_date: "2026-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "replication observability"
  - "managed disaster recovery"
  - "network egress bytes"
  - "dataset replication latency"
  - "cross-region replication"
  - "Cloud Monitoring metric"
  - "replication metrics"
  - "cross-region metrics"
---

# BigQuery cross-region replication observability metrics

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now exposes Cloud Monitoring metrics for dataset replication latency and network egress bytes for cross-region replication and managed disaster recovery.

## Extended Definition

This feature exposes BigQuery cross-region replication observability in Cloud Monitoring by publishing metrics for dataset replication latency and network egress bytes. It is intended for BigQuery cross-region replication and managed disaster recovery workflows, enabling operators to monitor these replication health and traffic indicators.

## Evidence Summary

The BigQuery release notes entry dated March 04, 2026 states that dataset replication latency and network egress bytes are now available as Cloud Monitoring metrics for cross-region replication and managed disaster recovery.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- March 04, 2026 Feature Monitor dataset replication latency and network egress bytes in Cloud Monitoring for BigQuery cross-region replication and managed disaster recovery .
- Feature BigQuery now supports soft failover with managed disaster recovery.

