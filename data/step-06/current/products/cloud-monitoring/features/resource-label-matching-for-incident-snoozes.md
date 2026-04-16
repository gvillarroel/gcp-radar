---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.793Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Resource-label matching for incident snoozes"
feature_slug: "resource-label-matching-for-incident-snoozes"
latest_feature_date: "2025-02-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsAsyncPager"
keywords:
  - "resource"
  - "label"
  - "matching"
  - "incident"
  - "snoozes"
  - "created"
  - "details"
  - "page"
---

# Resource-label matching for incident snoozes

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Snoozes created from the Incident details page can apply to other incidents that share one or more resource labels.

## Extended Definition

Snoozes created from the Incident details page can apply to other incidents that share one or more resource labels.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsAsyncPager)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- List applications To list the applications you have registered with App Hub, along with information like the number of incidents and the application's location, criticality, and environment, do the following: In the Google Cloud console, go to the Application monitoring page: Go to Application monitoring If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- When you use an app-enabled folder, the Google Cloud console automatically resets the resource picker from an app-enabled folder to the folder's management project when you navigate to a Google Cloud Observability page.
- To get more information about your incidents and alerting policies, do the following: To find details about the alerting policy that caused the incident, click the policy name.
- For example, if the resource type is determined to be cloud run-revision , then charts might filter the data by the values of the location and service name labels.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- The following is an example of a resource field: "resource": { "type": "gce instance", "labels": { "instance id": "2708613220420473591", "zone": "us-east1-b", "project id": "sampleproject" } } The type field lists the monitored resource as a gce instance , which indicates that these measurements are taken on a Compute Engine VM instance.
- Typically, a record lists the status of the incident, links to logs, a chart of the recorded metric data, labels, and duration.
- The labels field contains key-value pairs that provide additional information about the monitored resource.
- Cloud Monitoring writes one time series for each combination of resource and metric label values.

### "Class ListMonitoredResourceDescriptorsAsyncPager (2.30.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.monitoring v3.types.ListMonitoredResourceDescriptorsRequest The initial request object. response google.cloud.monitoring v3.types.ListMonitoredResourceDescriptorsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- 2.30.0 (latest) 2.29.1 2.28.0 2.27.2 2.26.0 2.25.0 2.24.0 2.23.1 2.22.2 2.21.0 2.20.0 2.19.4 2.18.0 2.17.0 2.16.0 2.15.1 2.14.2 2.13.0 2.12.0 2.11.3 2.10.1 2.9.2 2.8.0 2.7.0 2.6.0 2.5.2 2.4.2 2.3.0 2.2.1 2.1.0 2.0.1 1.1.2 1.0.0 0.36.2 0.35.0 0.34.0 0.33.0 0.32.0 ListMonitoredResourceDescriptorsAsyncPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListMonitoredResourceDescriptorsAsyncPager (2.30.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListMonitoredResourceDescriptors requests and continue to iterate through the resource descriptors field on the corresponding responses.

