---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.154Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Cloud Pub/Sub Metrics"
feature_slug: "cloud-pub-sub-metrics"
latest_feature_date: "2017-05-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp"
keywords:
  - "pub"
  - "sub"
  - "metrics"
  - "monitoring"
  - "adds"
  - "metric"
  - "and"
  - "resource"
---

# Cloud Pub/Sub Metrics

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Monitoring adds metric and resource types for Cloud Pub/Sub.

## Extended Definition

Monitoring adds metric and resource types for Cloud Pub/Sub.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)

## Supporting Pages

### "Class MetricServiceAsyncClient (2.30.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Iterating over this object will yield results and resolve additional pages automatically. metric descriptor path metric descriptor path ( project : str , metric descriptor : str ) - > str Returns a fully-qualified metric descriptor string. monitored resource descriptor path monitored resource descriptor path ( project : str , monitored resource descriptor : str ) - > str Returns a fully-qualified monitored resource descriptor string. parse common billing account path parse common billing account path ( path : str ) - > typing .
- ListMonitoredResourceDescriptorsRequest ( name="name value", ) Make the request page result = client. list monitored resource descriptors (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.monitoring v3.types.ListMonitoredResourceDescriptorsRequest , dict]] The request object.
- ListMetricDescriptorsRequest ( name="name value", ) Make the request page result = client. list metric descriptors (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.monitoring v3.types.ListMetricDescriptorsRequest , dict]] The request object.
- GetMonitoredResourceDescriptorRequest ( name="name value", ) Make the request response = await client. get monitored resource descriptor (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.monitoring v3.types.GetMonitoredResourceDescriptorRequest , dict]] The request object.

### "Class MetricServiceClient (2.30.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient)
- Source ID: `site-python-reference`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Iterating over this object will yield results and resolve additional pages automatically. metric descriptor path metric descriptor path ( project : str , metric descriptor : str ) - > str Returns a fully-qualified metric descriptor string. monitored resource descriptor path monitored resource descriptor path ( project : str , monitored resource descriptor : str ) - > str Returns a fully-qualified monitored resource descriptor string. parse common billing account path parse common billing account path ( path : str ) - > typing .
- ListMonitoredResourceDescriptorsRequest ( name="name value", ) Make the request page result = client. list monitored resource descriptors (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.monitoring v3.types.ListMonitoredResourceDescriptorsRequest , dict] The request object.
- ListMetricDescriptorsRequest ( name="name value", ) Make the request page result = client. list metric descriptors (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.monitoring v3.types.ListMetricDescriptorsRequest , dict] The request object.
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,MetricServiceTransport,Callable[..., MetricServiceTransport]]] The transport to use, or a Callable that constructs and returns a new transport.

### "Collect OpenTelemetry Protocol (OTLP) metrics and traces \_|\_ Cloud Monitoring\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp](https://docs.cloud.google.com/monitoring/agent/ops-agent/otlp)
- Source ID: `site-iam-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- The following tabs show the metric descriptor that each ingestion API creates: Prometheus API { "name": "projects/ PROJECT ID /metricDescriptors/prometheus.googleapis.com/otlp test cumulative/counter", "labels": [ { "key": "instance name" }, { "key": "machine type" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "prometheus.googleapis.com/otlp test cumulative/counter", "monitoredResourceTypes": [ "prometheus target" ] } Monitoring API { "name": "projects/ PROJECT ID /metricDescriptors/workload.googleapis.com/otlp.test.cumulative", "labels": [ { "key": "instrumentation source" } ], "metricKind": "CUMULATIVE", "valueType": "DOUBLE", "type": "workload.googleapis.com/otlp.test.cumulative", "monitoredResourceTypes": [ "gce instance", ...many other types deleted... ] } The following table summarizes some of the format differences imposed by the APIs used to ingest OTLP metrics: Prometheus API Monitoring API Metric domain prometheus.googleapis.com workload.googleapis.com OTLP metric name Modified during ingestion Used as provided Monitored resource prometheus target gce instance Ingestion formats and queries The metrics mode used in the OTLP receiver affects the way you query the resulting metrics in Cloud Monitoring when you build charts, dashboards, and alerting policies.
- Trivial PromQL queries for the example metrics look like the following: workload googleapis com:otlp test gauge{monitored resource="gce instance"} workload googleapis com:otlp test cumulative{monitored resource="gce instance"} The following screenshot shows the result of querying the workload.googleapis.com/otlp.test.gauge metric: The following screenshot shows the result of querying the workload.googleapis.com/otlp.test.cumulative metric: View metric usage and diagnostics in Cloud Monitoring The Cloud Monitoring Metrics Management page provides information that can help you control the amount you spend on billable metrics without affecting observability.
- Prometheus API: When you use the Prometheus API to ingest your application's metrics, each metric is transformed by using the standard OpenTelemetry-to-Prometheus transformation and mapped to a Cloud Monitoring monitored-resource type.
- Metrics ingested by using the OTLP receiver are considered types of "custom" metrics when ingested into Cloud Monitoring and are subject to the quotas and limits for custom metrics.

