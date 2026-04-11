---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:05:30.029Z"
product_name: "Apigee Analytics"
product_slug: "apigee-analytics"
feature_name: "Cache"
feature_slug: "cache"
latest_feature_date: "2025-11-17"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/analytics/cache-performance-dashboard"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/analytics/error-analysis-dashboard"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/analytics/endpoint-performance-dashboard"
keywords:
  - "cache metrics aggregation"
  - "cache analytics view"
  - "Cache Performance dashboard"
  - "cache performance metrics"
  - "aggregate data support"
  - "Target Performance Analytics"
  - "Error Code Analysis"
  - "cache analytics"
---

# Cache

Product: Apigee Analytics
Coverage: HIGH

## Step 02 Summary

Adds support for viewing aggregate data in the Error Code Analysis, Cache Performance, and Target Performance Analytics dashboards.

## Extended Definition

In Apigee Analytics, the Cache capability includes analytics support for ResponseCache behavior (for example, the `cache_hit` metric and related cache metrics exposed via metrics/dimension references) and cache-focused dashboarding. It specifically enables viewing aggregated data in the Cache Performance, Error Code Analysis, and Target Performance dashboards by letting users select **All** proxies/targets to display combined charts, or choose a single proxy/target for a narrower view.

## Evidence Summary

These official Apigee Analytics pages provide the concrete evidence that cache metrics are part of Analytics and that the three dashboards support an All-selection view showing aggregated data across all proxies/targets.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/cache-performance-dashboard](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/cache-performance-dashboard)
- [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/error-analysis-dashboard](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/error-analysis-dashboard)
- [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/endpoint-performance-dashboard](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/endpoint-performance-dashboard)

## Supporting Pages

### "Analytics metrics, dimensions, and filters reference \_|\_ Apigee \_|\_\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: MODERATE
- Re-rank rationale: It lists API metrics including cache-related metrics such as cache hit and L1 cache counts, which helps define available cache analytics data, though it does not describe dashboard-level cache performance views.

### "Ingest Microsoft Azure API data into API hub \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

