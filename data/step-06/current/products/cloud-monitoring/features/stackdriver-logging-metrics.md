---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.154Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Stackdriver Logging Metrics"
feature_slug: "stackdriver-logging-metrics"
latest_feature_date: "2017-05-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient"
keywords:
  - "stackdriver"
  - "logging"
  - "metrics"
  - "monitoring"
  - "adds"
  - "metric"
  - "and"
  - "resource"
---

# Stackdriver Logging Metrics

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Monitoring adds metric and resource types for Stackdriver Logging.

## Extended Definition

Monitoring adds metric and resource types for Stackdriver Logging.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient)

## Supporting Pages

### "User-defined metrics from the agent \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- Source ID: `site-iam-reference`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The default processing will write all metrics to Cloud Monitoring , which will drop any unrecognized metrics : ones that aren ' t in the list of curated metrics and don ' t have the user - defined metric metadata . < Rule "go back" > Target "return" < / Rule > < / Chain > Load the new configuration Restart your agent to pick up the new configuration by executing the following command on your VM instance: sudo service stackdriver-agent restart Your user-defined metric information begins to flow into Monitoring.
- Collectd metrics that have the metadata key stackdriver metric type and a single data source are handled as user-defined metrics and sent to Monitoring using the projects.timeSeries.create method in the Monitoring API.
- Reference and best practices Metric descriptors and time series For an introduction to Cloud Monitoring metrics, see Metrics, time series, and resources .
- The time series data for this metric descriptor must contain the following information, because of the way the metric descriptor is defined: Metric type: custom.googleapis.com/nginx/active connections Metric label values: service name : either "my service a" or "my service b" Other time series information, including the associated monitored resource —the VM instance sending the data—and the metric's data point, is automatically obtained by the agent for all metrics.

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

