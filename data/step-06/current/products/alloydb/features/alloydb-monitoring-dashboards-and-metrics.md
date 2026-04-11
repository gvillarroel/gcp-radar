---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.633Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB monitoring dashboards and metrics"
feature_slug: "alloydb-monitoring-dashboards-and-metrics"
latest_feature_date: "2023-12-15"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/query-insights-overview"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview"
keywords:
  - "cluster Overview metrics view"
  - "AlloyDB monitoring dashboards"
  - "Overview metrics"
  - "AlloyDB metrics dashboard"
  - "AlloyDB monitoring metrics"
  - "AlloyDB System Insights"
  - "System Insights"
  - "Cloud Monitoring"
---

# AlloyDB monitoring dashboards and metrics

Product: AlloyDB
Coverage: HIGH

## Step 02 Summary

AlloyDB for PostgreSQL supports monitoring through AlloyDB System Insights, Cloud Monitoring, and the cluster Overview metrics view.

## Extended Definition

AlloyDB for PostgreSQL monitoring is provided through AlloyDB System Insights and Cloud Monitoring, where users can monitor database behavior via dedicated AlloyDB dashboards or Cloud Monitoring dashboards. The feature includes query and advanced query insights metrics stored as Cloud Monitoring system metrics, which can be used to build custom Cloud Monitoring dashboards and alerts on query metrics or tags, and as of later updates also offers a unified, customizable AlloyDB monitoring dashboard with predefined metrics. For advanced query insights, the docs note these metrics are not available via the Cloud Monitoring API.

## Evidence Summary

The release notes and query/advanced insights documentation together establish that AlloyDB monitoring is implemented through AlloyDB System Insights plus Cloud Monitoring, with system metrics integration, customizable dashboards/alerts, and API availability limitations for some advanced metrics.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/query-insights-overview](https://docs.cloud.google.com/alloydb/docs/query-insights-overview)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)

## Supporting Pages

### About query insights \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/query-insights-overview](https://docs.cloud.google.com/alloydb/docs/query-insights-overview)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: STRONG
- Re-rank rationale: The page directly describes Query Insights dashboards and metric views/filters for CPU, I/O, locks, users, databases, and time ranges, which materially defines dashboard-based monitoring behavior.

Evidence snippets:
- Query insights integrate with Cloud Monitoring , letting you create custom dashboards and alerts on query metrics or tags and receive notifications using email, SMS, Slack, PagerDuty, and more.
- It's important to review the Cloud Monitoring data retention policy .
- Cloud Monitoring has a tier you can use at no additional cost.
- Metrics are stored in system metrics in Cloud Monitoring .

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- December 15, 2023 Feature AlloyDB for PostgreSQL now lets you monitor your AlloyDB instances using the AlloyDB System Insights dashboard or by using the Cloud Monitoring dashboard .
- December 12, 2024 Feature AlloyDB System insights offers a unified, customizable database monitoring dashboard that includes predefined metrics and other Google Cloud metrics.
- July 31, 2024 Feature Gemini in Databases assistance in AlloyDB for PostgreSQL is now available in Preview for standard and enhanced query insights, system insights, index advisor, and active queries.
- This integration highlights critical and high-priority risks, offering one-click navigation to recommended fixes and system insights for quick resolution.

### "Advanced query insights features overview \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview](https://docs.cloud.google.com/alloydb/docs/advanced-query-insights-overview)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In addition, standard query insights metrics are available in system metrics in Cloud Monitoring to keep the functionalities of the standard query insights intact.
- Limitations The metrics exposed by advanced query insights features aren't available using a Cloud Monitoring API.
- For more information about the Cloud Monitoring system metrics retention policy, see Data retention .

