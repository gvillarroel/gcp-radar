---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.111Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "GKE Clusters Observability tab"
feature_slug: "gke-clusters-observability-tab"
latest_feature_date: "2022-08-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring-services"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.pagers.ListAlertPoliciesAsyncPager"
keywords:
  - "gke"
  - "clusters"
  - "observability"
  - "tab"
  - "the"
  - "list"
  - "page"
  - "includes"
---

# GKE Clusters Observability tab

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The GKE Clusters List page includes an Observability tab with Monitoring data, control-plane metrics, and ingestion visibility for Managed Service for Prometheus and Cloud Logging.

## Extended Definition

The GKE Clusters List page includes an Observability tab with Monitoring data, control-plane metrics, and ingestion visibility for Managed Service for Prometheus and Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.pagers.ListAlertPoliciesAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.pagers.ListAlertPoliciesAsyncPager)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- August 15, 2022 Feature The GKE Clusters List page now includes a new Observability tab that displays Monitoring data.
- Feature Observability for Google Kubernetes Engine: Charts on the Observability tab for each of your GKE clusters and workloads now includes an optional fleet ID filter, where applicable.
- Feature Observability for Google Kubernetes Engine: The Observability tab for each of your GKE clusters now includes filters for recommended and configured integrations.
- May 26, 2023 Feature Observability for Google Kubernetes Engine : The Observability tab for each of your GKE clusters now includes metrics for ephemeral storage.

### Application Monitoring supported infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- For workloads that run on GKE, Google Cloud Observability might derive golden signals from the Prometheus metric http server request duration seconds , which is only available when you instrument your application by using OpenTelemetry.
- When both the L7 and L4 traffic metrics are available, the L7 metrics appear on the summary pages but the traffic chart contains tabs, which let you view both metrics.
- If a preferred metric isn't available, then Google Cloud Observability searches the list until it finds an available metric.
- The following table lists the infrastructure resources that are integrated with Application Monitoring.

### "Class ListAlertPoliciesAsyncPager (2.30.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.pagers.ListAlertPoliciesAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.pagers.ListAlertPoliciesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.monitoring v3.types.ListAlertPoliciesRequest The initial request object. response google.cloud.monitoring v3.types.ListAlertPoliciesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the aiter method will make additional ListAlertPolicies requests and continue to iterate through the alert policies field on the corresponding responses.
- All the usual ListAlertPoliciesResponse attributes are available on the pager.
- 2.30.0 (latest) 2.29.1 2.28.0 2.27.2 2.26.0 2.25.0 2.24.0 2.23.1 2.22.2 2.21.0 2.20.0 2.19.4 2.18.0 2.17.0 2.16.0 2.15.1 2.14.2 2.13.0 2.12.0 2.11.3 2.10.1 2.9.2 2.8.0 2.7.0 2.6.0 2.5.2 2.4.2 2.3.0 2.2.1 2.1.0 2.0.1 1.1.2 1.0.0 0.36.2 0.35.0 0.34.0 0.33.0 0.32.0 ListAlertPoliciesAsyncPager ( method : typing .

