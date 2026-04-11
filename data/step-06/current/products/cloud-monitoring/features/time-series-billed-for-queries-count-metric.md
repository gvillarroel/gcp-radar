---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.081Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "time_series_billed_for_queries_count metric"
feature_slug: "time-series-billed-for-queries-count-metric"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesPager"
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
keywords:
  - "time"
  - "series"
  - "billed"
  - "for"
  - "queries"
  - "count"
  - "metric"
  - "monitoring"
---

# time_series_billed_for_queries_count metric

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Cloud Monitoring provides the time_series_billed_for_queries_count metric to estimate charges based on queried time series.

## Extended Definition

Cloud Monitoring provides the time_series_billed_for_queries_count metric to estimate charges based on queried time series.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesPager)
- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In Cloud Monitoring, cardinality refers to the number of time series associated a metric and a resource, and is related to the labels and their values; there is one time series for each combination of label values.
- The metricDescriptors.create method is called the first time you write time-series data for a new metric, or if you change the structure of the metric data, most likely by adding new labels.
- To view the status of metric-write requests to the Cloud Monitoring API, use the API - Create Time Series (Status Codes) chart.
- The preconfigured query for the logs looks for errors associated with the Monitoring API method timeSeries.create .

### "Class ListTimeSeriesPager (2.30.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesPager)
- Source ID: `site-python-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.monitoring v3.types.ListTimeSeriesRequest The initial request object. response google.cloud.monitoring v3.types.ListTimeSeriesResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListTimeSeriesResponse ], request : google . cloud . monitoring v3 . types . metric service .
- ListTimeSeriesResponse ], request : google . cloud . monitoring v3 . types . metric service .
- ListTimeSeriesRequest , response : google . cloud . monitoring v3 . types . metric service .

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- August 05, 2025 Feature You can now use the time series billed for queries count metric to estimate charges based on the number of time series that have been queried.
- For more information, see the following documents: Display the most recent data in tabular form API Example: Dashboard with a TimeSeriesTable widget September 06, 2024 Feature The Metrics management page in Cloud Monitoring now shows you the sources of metric reads and lets you exclude unneeded metrics entirely, eliminating the cost of ingesting them.
- For more information, see the following documents: Google Cloud console: Charts with SQL queries API: Charts with SQL queries February 06, 2026 Feature You can use the Cloud Monitoring API MCP server to let agents and AI applications interact with your time series data.
- For more information, see View the number of time series billed for queries .

