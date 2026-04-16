---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.025Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "HTTPS Load Balancer Metrics"
feature_slug: "https-load-balancer-metrics"
latest_feature_date: "2017-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring-services"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent"
  - "https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient"
keywords:
  - "https"
  - "load"
  - "balancer"
  - "metrics"
  - "monitoring"
  - "supports"
  - "balancers"
---

# HTTPS Load Balancer Metrics

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Monitoring supports metrics for HTTPS load balancers; Monitoring supports metrics for HTTPS load balancers.

## Extended Definition

Monitoring supports metrics for HTTPS load balancers; Monitoring supports metrics for HTTPS load balancers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)

## Supporting Pages

### Application Monitoring supported infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Layer 7 external and internal Application Load Balancers with HTTP or HTTPS traffic (Global, regional, and cross region) Traffic : Based on a Cloud Load Balancing metric type that records the request count, like https/request count .
- For Application Load Balancers, only forwarding rules and backend services are integrated with App Hub.
- The dashboards that Application Monitoring creates display log and metric data, including the following golden signals, when that data includes application-specific labels: Traffic : Incoming request rates on the service or workload over the selected time period.
- P95 latency : Based on a Cloud Load Balancing metric type that records total latencies, like https/total latencies .

### Ops Agent overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- Source ID: `site-iam-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- The agent supports the following Windows operating systems: Windows Server: windows-2016, windows-2019, windows-2022, windows-2025 Windows Server Core: windows-2016-core, windows-2019-core, windows-20h2-core, windows-2022-core, windows-2025-core Agent access requirements Installing the agent requires access to the following DNS names: Google Cloud package repository: packages.cloud.google.com Google downloads subdomain: dl.google.com Running the agent requires access to the following DNS names: OAuth2 token server: oauth2.googleapis.com Earlier versions of the agent may require access to www.googleapis.com (full URL: https://www.googleapis.com/oauth2/v3/token ).
- Combining the collection of logs, metrics, and traces into a single process, the Ops Agent uses Fluent Bit for logs, which supports high-throughput logging, and the OpenTelemetry Collector for metrics and traces.
- The Cloud Monitoring Metrics Management page provides information that can help you control the amount you spend on billable metrics without affecting observability.
- Google Kubernetes Engine node instances: GKE on Google Cloud clusters are configured to collect logs and metrics with Logging and Monitoring by default.

### "Class MetricServiceAsyncClient (2.30.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.services.metric_service.MetricServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- User-created metric descriptors define custom metrics <https://cloud.google.com/monitoring/custom-metrics> .
- Only user-created custom metrics <https://cloud.google.com/monitoring/custom-metrics> can be deleted.
- The new custom metric https://cloud.google.com/monitoring/custom-metrics descriptor.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import monitoring v3 async def sample list monitored resource descriptors(): Create a client client = monitoring v3 .

