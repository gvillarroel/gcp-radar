---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.147Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Alerting Condition Creation UI"
feature_slug: "alerting-condition-creation-ui"
latest_feature_date: "2018-05-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
keywords:
  - "alerting"
  - "condition"
  - "creation"
  - "ui"
  - "metrics"
  - "explorer"
  - "based"
  - "interface"
---

# Alerting Condition Creation UI

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

A Metrics Explorer-based interface provides fine-grained control for creating alerting conditions.

## Extended Definition

A Metrics Explorer-based interface provides fine-grained control for creating alerting conditions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- This interface, based on Metrics Explorer, offers fine-grained control over the selection of the metrics used in alerting conditions.
- This interface, based on Metrics Explorer, offers fine-grained control over the selection of the metrics used in alerting conditions.
- This UI, based on Metrics Explorer, offers fine-grained control over the selection of the metrics used in alerting conditions.
- July 13, 2021 Change Metrics Explorer, a stand-alone charting tool that lets you quickly chart and explore time-series data, has a new interface and supports enhanced aggregation options.

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- For information about setting up these interfaces, see the following sections in the Google Cloud Managed Service for Prometheus documentation: Prometheus UI Grafana Use PromQL PromQL is the recommended query language for metrics ingested by using the Prometheus receiver.
- The following sections describe the query tools available in Cloud Monitoring with Metrics Explorer: PromQL Monitoring filters You can create Cloud Monitoring dashboards and alerting policies for your metrics.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Collect Prometheus metrics Stay organized with collections Save and categorize content based on your preferences.
- You can also view your Prometheus metrics in interfaces outside Cloud Monitoring, like the Prometheus UI and Grafana .

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- You can list metrics that appear in no alerting policy or in no custom dashboard defined in the current Google Cloud project by selecting the No alert policies or No custom dashboards quick filter.
- You can only select one quick filter at a time, so you can't list only active metrics that appear in neither an alerting policy or a custom dashboard by using quick filters.
- Create alerts based on metric ingestion To be notified of a spike, dip, or trend in the metric collection rates for your billable metrics, create an alerting policy.
- The following table includes regular expressions that might be useful for excluding metrics from statsd or similar dynamically named metrics: Block metrics with names containing Regex more than one underscore in a row . {2,}. more than 7 digits in a row (likely timestamp) . \d{7,}. really long segments (likely label-parsing errors) . [a-zA-Z0-9]{20,}. hexadecimal substrings, including GUIDs . [A-F0-9]{10,}.

