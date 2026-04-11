---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.957Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Batch Queries"
feature_slug: "batch-queries"
latest_feature_date: "2012-08-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
keywords:
  - "asynchronous query execution"
  - "deferred query execution"
  - "asynchronous batch"
  - "BATCH query priority"
  - "priority=BATCH"
  - "priority BATCH"
  - "query priority"
  - "batch queries"
---

# Batch Queries

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Introduced batch query execution that runs asynchronously on a delayed schedule and uses lower pricing than interactive queries.

## Extended Definition

Introduced batch query execution that runs asynchronously on a delayed schedule and uses lower pricing than interactive queries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)

## Supporting Pages

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- All query results, including both interactive and batch queries, are cached in temporary tables for approximately 24 hours with some exceptions .
- Query queue limit errors You might encounter this error if a project queues more interactive or batch queries than its queue limit permits.
- Because you can queue more batch queries than interactive queries, use batch priority jobs instead of interactive queries.
- You can queue more batch queries than interactive queries.

