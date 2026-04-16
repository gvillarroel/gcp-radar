---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.041Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Stackdriver Logging Metrics"
feature_slug: "stackdriver-logging-metrics"
latest_feature_date: "2017-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
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
  - "resource"
  - "types"
---

# Stackdriver Logging Metrics

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Monitoring adds metric and resource types for Stackdriver Logging.

## Extended Definition

Monitoring adds metric and resource types for Stackdriver Logging.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient)

## Supporting Pages

### "User-defined metrics from the agent \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- Source ID: `site-iam-reference`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The default processing will write all metrics to Cloud Monitoring , which will drop any unrecognized metrics : ones that aren ' t in the list of curated metrics and don ' t have the user - defined metric metadata . < Rule "go back" > Target "return" < / Rule > < / Chain > Load the new configuration Restart your agent to pick up the new configuration by executing the following command on your VM instance: sudo service stackdriver-agent restart Your user-defined metric information begins to flow into Monitoring.
- Collectd metrics that have the metadata key stackdriver metric type and a single data source are handled as user-defined metrics and sent to Monitoring using the projects.timeSeries.create method in the Monitoring API.
- Reference and best practices Metric descriptors and time series For an introduction to Cloud Monitoring metrics, see Metrics, time series, and resources .
- TypeInstance "^active-connections$" # Match on type instance . < / Match > < Target "set" > Specify the metric descriptor type : MetaData "stackdriver metric type" "custom.googleapis.com/nginx/active connections" Specify a value for the "service name" label ; clean it up in the next Target : MetaData "label:service name" "%{plugin instance}" < / Target > < Target "replace" > Remove the "nginx " prefix in the service name to get the real service name : MetaData "label:service name" "nginx " "" < / Target > < / Rule > The following rule is run after rewriting your metric , or if the metric wasn ' t one of your user - defined metrics .

### "Class MetricServiceAsyncClient (2.30.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- ListMonitoredResourceDescriptorsRequest ( name="name value", ) Make the request page result = client. list monitored resource descriptors (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.monitoring v3.types.ListMonitoredResourceDescriptorsRequest , dict]] The request object.
- ListMetricDescriptorsRequest ( name="name value", ) Make the request page result = client. list metric descriptors (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.monitoring v3.types.ListMetricDescriptorsRequest , dict]] The request object.
- GetMonitoredResourceDescriptorRequest ( name="name value", ) Make the request response = await client. get monitored resource descriptor (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.monitoring v3.types.GetMonitoredResourceDescriptorRequest , dict]] The request object.
- CreateMetricDescriptorRequest ( name="name value", ) Make the request response = await client. create metric descriptor (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.monitoring v3.types.CreateMetricDescriptorRequest , dict]] The request object.

### "Class MetricServiceClient (2.30.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient)
- Source ID: `site-python-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- ListMonitoredResourceDescriptorsRequest ( name="name value", ) Make the request page result = client. list monitored resource descriptors (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.monitoring v3.types.ListMonitoredResourceDescriptorsRequest , dict] The request object.
- ListMetricDescriptorsRequest ( name="name value", ) Make the request page result = client. list metric descriptors (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.monitoring v3.types.ListMetricDescriptorsRequest , dict] The request object.
- GetMonitoredResourceDescriptorRequest ( name="name value", ) Make the request response = client. get monitored resource descriptor (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.monitoring v3.types.GetMonitoredResourceDescriptorRequest , dict] The request object.
- For example: :: metric.type = "compute.googleapis.com/instance/cpu/usage time" AND metric.labels.instance name = "my-instance-name" This corresponds to the filter field on the request instance; if request is provided, this should not be set. interval google.cloud.monitoring v3.types.TimeInterval Required.

