---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.148Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Boolean Metric Charting"
feature_slug: "boolean-metric-charting"
latest_feature_date: "2018-04-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient"
keywords:
  - "boolean"
  - "metric"
  - "charting"
  - "metrics"
  - "can"
  - "be"
  - "queried"
  - "and"
---

# Boolean Metric Charting

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Boolean metrics can be queried and visualized in charts.

## Extended Definition

Boolean metrics can be queried and visualized in charts.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- If you have metrics that aren't used in an alerting policy or a custom dashboard and are never queried, then you might be paying for metrics and not be getting any observability benefit from them.
- Unused billable metrics are active metrics that have not been queried in the last 30 days and are not used in a custom dashboard or alerting policy.
- Unused billable metrics are active metrics that have not been queried in the last 30 days and are not used in a custom dashboard or alerting policy.
- Idle metrics are inactive metrics that are have not been queried in the last 30 days and are not used in a custom dashboard or alerting policy.

### "Class MetricServiceAsyncClient (2.30.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- The filter must specify a single metric type, and can additionally specify metric labels and other information.
- Only user-created custom metrics <https://cloud.google.com/monitoring/custom-metrics> can be deleted.
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,MetricServiceTransport,Callable[..., MetricServiceTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.
- For example: :: metric.type = "compute.googleapis.com/instance/cpu/usage time" AND metric.labels.instance name = "my-instance-name" This corresponds to the filter field on the request instance; if request is provided, this should not be set. interval TimeInterval Required.

### "Class MetricServiceClient (2.30.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient)
- Source ID: `site-python-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- The filter must specify a single metric type, and can additionally specify metric labels and other information.
- Only user-created custom metrics <https://cloud.google.com/monitoring/custom-metrics> can be deleted.
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,MetricServiceTransport,Callable[..., MetricServiceTransport]]] The transport to use, or a Callable that constructs and returns a new transport.
- For example: :: metric.type = "compute.googleapis.com/instance/cpu/usage time" AND metric.labels.instance name = "my-instance-name" This corresponds to the filter field on the request instance; if request is provided, this should not be set. interval google.cloud.monitoring v3.types.TimeInterval Required.

