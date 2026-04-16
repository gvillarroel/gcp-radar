---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.048Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Time Shifting"
feature_slug: "time-shifting"
latest_feature_date: "2017-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesPager"
keywords:
  - "time"
  - "shifting"
  - "lets"
  - "users"
  - "compare"
  - "current"
  - "metric"
  - "earlier"
---

# Time Shifting

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Time shifting lets users compare current metric data with data from earlier periods.

## Extended Definition

Time shifting lets users compare current metric data with data from earlier periods.

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
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- The following table includes regular expressions that might be useful for excluding metrics from statsd or similar dynamically named metrics: Block metrics with names containing Regex more than one underscore in a row . {2,}. more than 7 digits in a row (likely timestamp) . \d{7,}. really long segments (likely label-parsing errors) . [a-zA-Z0-9]{20,}. hexadecimal substrings, including GUIDs . [A-F0-9]{10,}.
- For examples that start with the Namespace Volume Ingestion chart and use Metrics Explorer to perform ingestion-volume attribution, see the following: Identify high-volume metrics Identify high-volume namespaces For more information about using Metrics Explorer to analyze data, including actions like comparing the current month's behavior to the last month's behavior, see Explore charted data .
- Note: The Metrics Management page lists only alerting policies and custom dashboards defined in the current project; metrics listed with no alerting policies or custom dashboards might have alerting policies or custom dashboards in another project in your metrics scope.
- To view collection rates over time, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .

### "Class ListTimeSeriesAsyncPager (2.30.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListTimeSeriesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 99
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
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListTimeSeriesResponse ], request : google . cloud . monitoring v3 . types . metric service .
- ListTimeSeriesResponse ], request : google . cloud . monitoring v3 . types . metric service .
- ListTimeSeriesRequest , response : google . cloud . monitoring v3 . types . metric service .
- ListTimeSeriesRequest , response : google . cloud . monitoring v3 . types . metric service .

