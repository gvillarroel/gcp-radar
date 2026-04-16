---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.950Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Metrics scopes"
feature_slug: "metrics-scopes"
latest_feature_date: "2021-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview"
keywords:
  - "metrics"
  - "scopes"
  - "let"
  - "project"
  - "view"
  - "monitor"
  - "multiple"
  - "projects"
---

# Metrics scopes

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Metrics scopes let a Google Cloud project view and monitor metrics from multiple Google Cloud projects and AWS accounts.

## Extended Definition

Metrics scopes let a Google Cloud project view and monitor metrics from multiple Google Cloud projects and AWS accounts.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)

## Supporting Pages

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Monitor metrics for multiple Google Cloud projects To view and monitor the time-series data for multiple Google Cloud projects and AWS accounts through a single interface, configure a multi-project metrics scope .
- For information about how to configure our Google Cloud project to view metrics for multiple Google Cloud projects and AWS accounts, see Metrics scopes overview .
- For information about how to modify a metrics scope, see Configure a metrics scope for multiple projects .
- You can configure the metrics scope to include time-series data from other Google Cloud projects and from AWS accounts.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your project has multiple projects in its metrics scope, then the metrics shown on the Metrics Management page include the metrics from all of those projects.
- To view the contributions of each project in your metrics scope to the total billable value, use the Projects by billable samples ingested chart.
- Information about any projects that can view the metrics of the current project.
- For more information about metrics scopes, see Configure a multi-project view .

### Collect metrics overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview](https://docs.cloud.google.com/monitoring/docs/collect-metrics-overview)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Observability Cloud Monitoring Guides Send feedback Collect metrics overview Stay organized with collections Save and categorize content based on your preferences.
- The metrics scope of a Google Cloud project determines the time-series data that can be charted or monitored by the Google Cloud project.
- For conceptual information and references to configuration documents, see Metrics scopes overview .
- You can configure a metrics scope to include time-series data that is stored by other projects.

