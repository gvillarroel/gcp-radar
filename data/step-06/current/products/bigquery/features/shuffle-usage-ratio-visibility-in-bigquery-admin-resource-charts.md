---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.713Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Shuffle usage ratio visibility in BigQuery admin resource charts"
feature_slug: "shuffle-usage-ratio-visibility-in-bigquery-admin-resource-charts"
latest_feature_date: "2022-09-21"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/admin-resource-charts"
keywords:
  - "shuffle usage ratio"
  - "shuffle ratio"
  - "resource chart visibility"
  - "query stage shuffle"
  - "admin resource charts"
  - "BigQuery admin charts"
  - "shuffle metrics"
---

# Shuffle usage ratio visibility in BigQuery admin resource charts

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now exposes shuffle usage ratios in the admin resource charts.

## Extended Definition

BigQuery admin resource charts provide visibility into shuffle usage by exposing a reservation shuffle usage ratio metric. In this charting view, the data includes the average shuffle usage ratio for the selected time period (shown as Preview) and a corresponding maximum value across all average reservation shuffle usage ratios.

## Evidence Summary

The BigQuery admin resource charts documentation explicitly states that reservation metrics include shuffle usage ratio values, including average shuffle usage ratio (Preview) and the maximum of reservation average shuffle usage ratios for a selected period.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)

## Supporting Pages

### "Monitor health, resource utilization, and jobs \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-resource-charts](https://docs.cloud.google.com/bigquery/docs/admin-resource-charts)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Reservation - Shuffle usage Monitors the shuffle usage ratio in the selected time period.
- The maximum of all reservation average shuffle usage ratios in the selected time period.
- Average shuffle usage ratio in the selected time period ( preview ).
- The maximum of all average reservation shuffle usage ratios.

