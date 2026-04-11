---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.162Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Custom Metric Descriptor Auto-Creation"
feature_slug: "custom-metric-descriptor-auto-creation"
latest_feature_date: "2016-10-20"
deprecation_date: ""
coverage_status: "LOW"
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
  - "are"
  - "created"
---

# Custom Metric Descriptor Auto-Creation

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Custom metric descriptors are created automatically when time series data is written.

## Extended Definition

Custom metric descriptors are created automatically when time series data is written.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient)
- [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)

## Supporting Pages

### "Class MetricServiceAsyncClient (2.30.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- User-created metric descriptors define custom metrics <https://cloud.google.com/monitoring/custom-metrics> .
- The format is: :: projects/[PROJECT ID OR NUMBER]/metricDescriptors/[METRIC ID] An example of [METRIC ID] is: "custom.googleapis.com/my test metric" .
- Exceptions Type Description google.auth.exceptions.MutualTlsChannelError If mutual TLS transport creation failed for any reason. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create metric descriptor create metric descriptor ( request : typing .
- Iterating over this object will yield results and resolve additional pages automatically. metric descriptor path metric descriptor path ( project : str , metric descriptor : str ) - > str Returns a fully-qualified metric descriptor string. monitored resource descriptor path monitored resource descriptor path ( project : str , monitored resource descriptor : str ) - > str Returns a fully-qualified monitored resource descriptor string. parse common billing account path parse common billing account path ( path : str ) - > typing .

### "Class MetricServiceClient (2.30.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceClient)
- Source ID: `site-python-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- User-created metric descriptors define custom metrics <https://cloud.google.com/monitoring/custom-metrics> .
- The format is: :: projects/[PROJECT ID OR NUMBER]/metricDescriptors/[METRIC ID] An example of [METRIC ID] is: "custom.googleapis.com/my test metric" .
- Iterating over this object will yield results and resolve additional pages automatically. metric descriptor path metric descriptor path ( project : str , metric descriptor : str ) - > str Returns a fully-qualified metric descriptor string. monitored resource descriptor path monitored resource descriptor path ( project : str , monitored resource descriptor : str ) - > str Returns a fully-qualified monitored resource descriptor string. parse common billing account path parse common billing account path ( path : str ) - > typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 def sample list metric descriptors(): Create a client client = monitoring v3 .

### "User-defined metrics from the agent \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Auto-creation of metric descriptors .
- The time series data for this metric descriptor must contain the following information, because of the way the metric descriptor is defined: Metric type: custom.googleapis.com/nginx/active connections Metric label values: service name : either "my service a" or "my service b" Other time series information, including the associated monitored resource —the VM instance sending the data—and the metric's data point, is automatically obtained by the agent for all metrics.
- Kind: GAUGE Type: DOUBLE After you've designed the metric descriptor, you can create it by using projects.metricDescriptors.create , or you can let it be created for you from the time series metadata, discussed below.
- This behavior can be a problem when you are debugging the code that writes metric data—misspelling the metric type results in spurious metric descriptors.

