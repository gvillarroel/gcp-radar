---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.015Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Kubernetes Monitored Resource Types"
feature_slug: "kubernetes-monitored-resource-types"
latest_feature_date: "2018-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsPager"
  - "https://docs.cloud.google.com/monitoring/docs/region-support"
keywords:
  - "kubernetes"
  - "monitored"
  - "resource"
  - "types"
  - "monitoring"
  - "introduces"
  - "workloads"
---

# Kubernetes Monitored Resource Types

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Kubernetes Monitoring introduces new monitored resource types for Kubernetes workloads.

## Extended Definition

Kubernetes Monitoring introduces new monitored resource types for Kubernetes workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsPager)
- [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support)

## Supporting Pages

### "Class ListMonitoredResourceDescriptorsAsyncPager (2.30.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.monitoring v3.types.ListMonitoredResourceDescriptorsRequest The initial request object. response google.cloud.monitoring v3.types.ListMonitoredResourceDescriptorsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListMonitoredResourceDescriptorsResponse ], ], request : google . cloud . monitoring v3 . types . metric service .
- ListMonitoredResourceDescriptorsResponse ], ], request : google . cloud . monitoring v3 . types . metric service .
- ListMonitoredResourceDescriptorsRequest , response : google . cloud . monitoring v3 . types . metric service .

### "Class ListMonitoredResourceDescriptorsPager (2.30.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsPager)
- Source ID: `site-python-reference`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.monitoring v3.types.ListMonitoredResourceDescriptorsRequest The initial request object. response google.cloud.monitoring v3.types.ListMonitoredResourceDescriptorsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListMonitoredResourceDescriptorsResponse , ], request : google . cloud . monitoring v3 . types . metric service .
- ListMonitoredResourceDescriptorsResponse , ], request : google . cloud . monitoring v3 . types . metric service .
- ListMonitoredResourceDescriptorsRequest , response : google . cloud . monitoring v3 . types . metric service .

### Data regionality for Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/region-support](https://docs.cloud.google.com/monitoring/docs/region-support)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a list of the monitored resource types available for custom metrics, see Monitored resources for custom metrics .
- Not all monitored resource types that are available for custom metrics have a location label.
- To view a list of all monitored resources and their labels, see Monitored resource types .
- To store a time series in a specific region , the monitored resource against which the time series is written must have one of the following labels and the value of the label must be valid: location zone region A time series is discarded when the monitored resource against which the time series is written has one of the previous labels and the value of the label isn't recognized or isn't specified.

