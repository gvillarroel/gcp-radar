---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.778Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "time_series_billed_for_queries_count metric"
feature_slug: "time-series-billed-for-queries-count-metric"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesPager"
keywords:
  - "time"
  - "series"
  - "billed"
  - "queries"
  - "count"
  - "metric"
  - "monitoring"
  - "provides"
---

# time_series_billed_for_queries_count metric

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring provides the time_series_billed_for_queries_count metric to estimate charges based on queried time series.

## Extended Definition

Cloud Monitoring provides the time_series_billed_for_queries_count metric to estimate charges based on queried time series.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesPager)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In Cloud Monitoring, cardinality refers to the number of time series associated a metric and a resource, and is related to the labels and their values; there is one time series for each combination of label values.
- To view the status of metric-write requests to the Cloud Monitoring API, use the API - Create Time Series (Status Codes) chart.
- To view collection rates over time, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Note: If an exclusion rule uses a regular expression that causes a time series without an existing metric descriptor to be excluded, the Metric exclusion table reports "undefined metric" as the metric type.

### "Class ListTimeSeriesAsyncPager (2.30.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListTimeSeriesResponse ], ], request : google . cloud . monitoring v3 . types . metric service .
- ListTimeSeriesResponse ], ], request : google . cloud . monitoring v3 . types . metric service .
- ListTimeSeriesRequest , response : google . cloud . monitoring v3 . types . metric service .
- ListTimeSeriesRequest , response : google . cloud . monitoring v3 . types . metric service .

### "Class ListTimeSeriesPager (2.30.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesPager)
- Source ID: `site-python-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListTimeSeriesResponse ], request : google . cloud . monitoring v3 . types . metric service .
- ListTimeSeriesResponse ], request : google . cloud . monitoring v3 . types . metric service .
- ListTimeSeriesRequest , response : google . cloud . monitoring v3 . types . metric service .
- ListTimeSeriesRequest , response : google . cloud . monitoring v3 . types . metric service .

