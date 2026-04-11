---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.720Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Cloud Monitoring Storage Write API quota metrics"
feature_slug: "cloud-monitoring-storage-write-api-quota-metrics"
latest_feature_date: "2022-09-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
keywords:
  - "concurrent connections quota"
  - "quota usage and limits"
  - "throughput quota metrics"
  - "Storage Write API quota"
  - "storage write quotas"
  - "BigQuery Storage Write API metrics"
  - "storage write API metrics"
  - "Storage Write API"
---

# Cloud Monitoring Storage Write API quota metrics

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Cloud Monitoring now provides GA metrics for Storage Write API concurrent connections and throughput quota usage and limits.

## Extended Definition

The available official excerpt only confirms that BigQuery directs users to the Storage Write API when checking limits and quotas for ingestion. It also states that Storage Write API is a higher-throughput, lower-cost ingestion option compared with streaming inserts, which implies quota monitoring is relevant for this API usage pattern. No explicit metric list is present in the provided excerpt.

## Evidence Summary

The cited page identifies Storage Write API as the documented location for BigQuery limits and quotas and positions it as a higher-throughput ingest API, but it does not itself enumerate Cloud Monitoring concurrency or throughput quota metrics.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)

## Supporting Pages

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- You might also want to consider replacing streaming inserts with the newer Storage Write API , which has higher throughput, lower price, and many useful features.
- To learn about limits and quotas, see Storage Write API and to see costs of using this API, see BigQuery data ingestion pricing .
- To learn about limits and quotas, see Storage Write API and to see costs of using this API, see BigQuery data ingestion pricing .
- To learn about limits and quotas, see Storage Write API and to see costs of using this API, see BigQuery data ingestion pricing .

