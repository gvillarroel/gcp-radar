---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.156Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Time Shifting"
feature_slug: "time-shifting"
latest_feature_date: "2017-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient"
keywords:
  - "time"
  - "shifting"
  - "lets"
  - "users"
  - "compare"
  - "current"
  - "metric"
  - "with"
---

# Time Shifting

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Time shifting lets users compare current metric data with data from earlier periods.

## Extended Definition

Time shifting lets users compare current metric data with data from earlier periods.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- March 31, 2017 Feature Time shifting (Beta) : You can now compare your current metric data with data from 1 day, 1 week, or 4 weeks ago.
- For more information, see the following documents: Display the most recent data in tabular form API Example: Dashboard with a TimeSeriesTable widget September 06, 2024 Feature The Metrics management page in Cloud Monitoring now shows you the sources of metric reads and lets you exclude unneeded metrics entirely, eliminating the cost of ingesting them.
- For more information, see the following: Display the most recent value as a treemap API: Dashboard with a Treemap widget May 07, 2025 Issue Version 2.56.0 of the Ops Agent using the Prometheus receiver can fail to send metrics and report negative start times.
- This feature lets you create service-level objectives (SLOs) and set up alerting policies to monitor their performance using auto-generated dashboards with metrics, logs, and alerts in a single place.

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- The following table includes regular expressions that might be useful for excluding metrics from statsd or similar dynamically named metrics: Block metrics with names containing Regex more than one underscore in a row . {2,}. more than 7 digits in a row (likely timestamp) . \d{7,}. really long segments (likely label-parsing errors) . [a-zA-Z0-9]{20,}. hexadecimal substrings, including GUIDs . [A-F0-9]{10,}.
- For examples that start with the Namespace Volume Ingestion chart and use Metrics Explorer to perform ingestion-volume attribution, see the following: Identify high-volume metrics Identify high-volume namespaces For more information about using Metrics Explorer to analyze data, including actions like comparing the current month's behavior to the last month's behavior, see Explore charted data .
- Note: The Metrics Management page lists only alerting policies and custom dashboards defined in the current project; metrics listed with no alerting policies or custom dashboards might have alerting policies or custom dashboards in another project in your metrics scope.
- Note: If an exclusion rule uses a regular expression that causes a time series without an existing metric descriptor to be excluded, the Metric exclusion table reports "undefined metric" as the metric type.

### "Class MetricServiceAsyncClient (2.30.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- This corresponds to the metric descriptor field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The format is: :: projects/[PROJECT ID OR NUMBER] This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The format is: :: projects/[PROJECT ID OR NUMBER] This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the time series field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

