---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.067Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Custom Metric Descriptor Auto-Creation"
feature_slug: "custom-metric-descriptor-auto-creation"
latest_feature_date: "2016-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient"
  - "https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent"
keywords:
  - "custom"
  - "metric"
  - "descriptor"
  - "auto"
  - "creation"
  - "descriptors"
  - "created"
  - "automatically"
---

# Custom Metric Descriptor Auto-Creation

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Custom metric descriptors are created automatically when time series data is written.

## Extended Definition

Custom metric descriptors are created automatically when time series data is written.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient)
- [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)

## Supporting Pages

### "Class MetricServiceAsyncClient (2.30.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- User-created metric descriptors define custom metrics <https://cloud.google.com/monitoring/custom-metrics> .
- Iterating over this object will yield results and resolve additional pages automatically. metric descriptor path metric descriptor path ( project : str , metric descriptor : str ) - > str Returns a fully-qualified metric descriptor string. monitored resource descriptor path monitored resource descriptor path ( project : str , monitored resource descriptor : str ) - > str Returns a fully-qualified monitored resource descriptor string. parse common billing account path parse common billing account path ( path : str ) - > typing .
- Iterating over this object will yield results and resolve additional pages automatically. list monitored resource descriptors list monitored resource descriptors ( request : typing .
- The format is: :: projects/[PROJECT ID OR NUMBER]/metricDescriptors/[METRIC ID] An example of [METRIC ID] is: "custom.googleapis.com/my test metric" .

### "Class MetricServiceClient (2.30.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient)
- Source ID: `site-python-reference`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- User-created metric descriptors define custom metrics <https://cloud.google.com/monitoring/custom-metrics> .
- Iterating over this object will yield results and resolve additional pages automatically. metric descriptor path metric descriptor path ( project : str , metric descriptor : str ) - > str Returns a fully-qualified metric descriptor string. monitored resource descriptor path monitored resource descriptor path ( project : str , monitored resource descriptor : str ) - > str Returns a fully-qualified monitored resource descriptor string. parse common billing account path parse common billing account path ( path : str ) - > typing .
- Iterating over this object will yield results and resolve additional pages automatically. list monitored resource descriptors list monitored resource descriptors ( request : typing .
- The format is: :: projects/[PROJECT ID OR NUMBER]/metricDescriptors/[METRIC ID] An example of [METRIC ID] is: "custom.googleapis.com/my test metric" .

### "User-defined metrics from the agent \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- Source ID: `site-iam-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The time series data for this metric descriptor must contain the following information, because of the way the metric descriptor is defined: Metric type: custom.googleapis.com/nginx/active connections Metric label values: service name : either "my service a" or "my service b" Other time series information, including the associated monitored resource —the VM instance sending the data—and the metric's data point, is automatically obtained by the agent for all metrics.
- For more information, see Auto-creation of metric descriptors .
- Kind: GAUGE Type: DOUBLE After you've designed the metric descriptor, you can create it by using projects.metricDescriptors.create , or you can let it be created for you from the time series metadata, discussed below.
- When a data point arrives in Monitoring, the point's metric type, labels, and the point's value can be used to automatically create a gauge or cumulative metric descriptor.

