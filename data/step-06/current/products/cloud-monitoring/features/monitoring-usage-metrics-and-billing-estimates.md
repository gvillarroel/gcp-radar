---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.010Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Monitoring Usage Metrics and Billing Estimates"
feature_slug: "monitoring-usage-metrics-and-billing-estimates"
latest_feature_date: "2018-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient"
keywords:
  - "monitoring"
  - "usage"
  - "metrics"
  - "billing"
  - "estimates"
  - "provides"
  - "estimated"
  - "based"
---

# Monitoring Usage Metrics and Billing Estimates

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Monitoring provides usage metrics and estimated billing based on the new pricing model.

## Extended Definition

Monitoring provides usage metrics and estimated billing based on the new pricing model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- View summaries of metric usage To view summaries of the number of billable metrics, rates of metric ingestion, and error rate, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- To view the table of usage data for each billable metric, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Usage of the metrics Used metrics are metrics that have been queried in the last 30 days by the Cloud Monitoring API or other tools, or that are used in a custom dashboard or alerting policy.
- Home Documentation Observability Cloud Monitoring Guides Send feedback View and manage metric usage Stay organized with collections Save and categorize content based on your preferences.

### "Class MetricServiceAsyncClient (2.30.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Developer tools Python Client libraries Send feedback Class MetricServiceAsyncClient (2.30.0) Stay organized with collections Save and categorize content based on your preferences.
- User-created metric descriptors define custom metrics <https://cloud.google.com/monitoring/custom-metrics> .
- Only user-created custom metrics <https://cloud.google.com/monitoring/custom-metrics> can be deleted.
- Use projects.timeSeries.create][google.monitoring.v3.MetricService.CreateTimeSeries] instead.

### "Class MetricServiceClient (2.30.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient)
- Source ID: `site-python-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- For example: :: metric.type = "compute.googleapis.com/instance/cpu/usage time" AND metric.labels.instance name = "my-instance-name" This corresponds to the filter field on the request instance; if request is provided, this should not be set. interval google.cloud.monitoring v3.types.TimeInterval Required.
- Home Documentation Developer tools Python Client libraries Send feedback Class MetricServiceClient (2.30.0) Stay organized with collections Save and categorize content based on your preferences.
- User-created metric descriptors define custom metrics <https://cloud.google.com/monitoring/custom-metrics> .
- Only user-created custom metrics <https://cloud.google.com/monitoring/custom-metrics> can be deleted.

