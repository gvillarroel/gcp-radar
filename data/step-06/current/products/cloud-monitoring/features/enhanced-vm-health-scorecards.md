---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.939Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Enhanced VM health scorecards"
feature_slug: "enhanced-vm-health-scorecards"
latest_feature_date: "2021-08-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.pagers.ListAlertPoliciesAsyncPager"
keywords:
  - "enhanced"
  - "vm"
  - "health"
  - "scorecards"
  - "instances"
  - "page"
  - "includes"
  - "maintenance"
---

# Enhanced VM health scorecards

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The VM Instances page includes enhanced VM health scorecards with maintenance and system events plus improved inventory filtering and sorting.

## Extended Definition

The VM Instances page includes enhanced VM health scorecards with maintenance and system events plus improved inventory filtering and sorting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.pagers.ListAlertPoliciesAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.pagers.ListAlertPoliciesAsyncPager)

## Supporting Pages

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Monitoring services Cloud Monitoring provides different services that you can use to understand the health and performance of your applications, and of the other Google Cloud services that you use.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Proactive monitoring and validation To test the availability, consistency, and performance of your services, applications, web pages, and APIs, create synthetic monitors .
- The following screenshot illustrates a chart with this configuration: Pricing To learn about pricing for Cloud Monitoring, see the Google Cloud Observability pricing page.

### "Class ListAlertPoliciesAsyncPager (2.30.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.pagers.ListAlertPoliciesAsyncPager](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.alert_policy_service.pagers.ListAlertPoliciesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.monitoring v3.types.ListAlertPoliciesRequest The initial request object. response google.cloud.monitoring v3.types.ListAlertPoliciesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- 2.30.0 (latest) 2.29.1 2.28.0 2.27.2 2.26.0 2.25.0 2.24.0 2.23.1 2.22.2 2.21.0 2.20.0 2.19.4 2.18.0 2.17.0 2.16.0 2.15.1 2.14.2 2.13.0 2.12.0 2.11.3 2.10.1 2.9.2 2.8.0 2.7.0 2.6.0 2.5.2 2.4.2 2.3.0 2.2.1 2.1.0 2.0.1 1.1.2 1.0.0 0.36.2 0.35.0 0.34.0 0.33.0 0.32.0 ListAlertPoliciesAsyncPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListAlertPoliciesAsyncPager (2.30.0) Stay organized with collections Save and categorize content based on your preferences.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy "metadata.google.internal,169.254.169.254" /m Determine the agent version To determine the version of the Ops Agent on your system, run the following commands on your VM instance: Google Cloud console To see the version of your Ops Agent on a VM: Locate the entry for the VM in the Instances table in the Monitoring VM Instances page.
- Use VM Instances dashboard In the Google Cloud console, go to the VM Instances page: Go to VM Instances If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Compute Engine In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- Cloud Monitoring In the Google Cloud console, go to the VM Instances page: Go to VM Instances If you use the search bar to find this page, then select the result whose subheading is Monitoring .

