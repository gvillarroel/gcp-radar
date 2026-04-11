---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.147Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Kubernetes Monitored Resource Types"
feature_slug: "kubernetes-monitored-resource-types"
latest_feature_date: "2018-05-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsPager"
keywords:
  - "kubernetes"
  - "monitored"
  - "resource"
  - "types"
  - "monitoring"
  - "introduces"
  - "new"
  - "for"
---

# Kubernetes Monitored Resource Types

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Kubernetes Monitoring introduces new monitored resource types for Kubernetes workloads.

## Extended Definition

Kubernetes Monitoring introduces new monitored resource types for Kubernetes workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsPager)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- The release introduces new monitored resource types and new Kubernetes metrics .
- To learn more, see the following: List registered and discovered services and workloads Application Monitoring overview View application telemetry April 02, 2026 Feature Application Monitoring has added support for the following resources: Vertex AI Workbench GKE Gateway GKE Ingress Layer 7 cross-regional Application Load Balancers Additionally, dashboards for Kubernetes workloads display L4 and L7 traffic metrics, when both are available.
- July 30, 2024 Feature You can now troubleshoot Compute Engine issues involving host events, MIG autoscaling and health-check failures, resource-availability errors, and VM performance by using the new "interactive playbook" dashboards in Cloud Monitoring.
- May 01, 2017 Feature New metric and resource types: There are new Cloud Platform metric and resource types, including those for Cloud Bigtable, Cloud Dataflow, Cloud DNS, Cloud Internet of Things, Cloud Pub/Sub, Cloud Spanner, and Stackdriver Logging.

### "Class ListMonitoredResourceDescriptorsAsyncPager (2.30.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.monitoring v3.types.ListMonitoredResourceDescriptorsRequest The initial request object. response google.cloud.monitoring v3.types.ListMonitoredResourceDescriptorsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListMonitoredResourceDescriptorsResponse ], ], request : google . cloud . monitoring v3 . types . metric service .
- ListMonitoredResourceDescriptorsResponse ], ], request : google . cloud . monitoring v3 . types . metric service .
- ListMonitoredResourceDescriptorsRequest , response : google . cloud . monitoring v3 . types . metric service .

### "Class ListMonitoredResourceDescriptorsPager (2.30.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.pagers.ListMonitoredResourceDescriptorsPager)
- Source ID: `site-python-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.monitoring v3.types.ListMonitoredResourceDescriptorsRequest The initial request object. response google.cloud.monitoring v3.types.ListMonitoredResourceDescriptorsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListMonitoredResourceDescriptorsResponse , ], request : google . cloud . monitoring v3 . types . metric service .
- ListMonitoredResourceDescriptorsResponse , ], request : google . cloud . monitoring v3 . types . metric service .
- ListMonitoredResourceDescriptorsRequest , response : google . cloud . monitoring v3 . types . metric service .

