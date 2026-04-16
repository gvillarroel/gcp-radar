---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.964Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "VM Instances dashboard operations menu"
feature_slug: "vm-instances-dashboard-operations-menu"
latest_feature_date: "2021-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring-services"
keywords:
  - "vm"
  - "instances"
  - "dashboard"
  - "operations"
  - "menu"
  - "compute"
  - "engine"
  - "includes"
---

# VM Instances dashboard operations menu

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Compute Engine VM Instances dashboard includes an Operations menu with shortcuts to Monitoring metrics and Logging logs.

## Extended Definition

The Compute Engine VM Instances dashboard includes an Operations menu with shortcuts to Monitoring metrics and Logging logs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)

## Supporting Pages

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- For example, when a Google Cloud project contains multiple Compute Engine VM instances, the CPU utilization for each VM instance is a unique time series.
- System and application metrics that the Ops Agent collects about system resources and applications running on Compute Engine instances.
- Examples of monitored resources include Compute Engine instances and App Engine applications.
- The following is an example of a resource field: "resource": { "type": "gce instance", "labels": { "instance id": "2708613220420473591", "zone": "us-east1-b", "project id": "sampleproject" } } The type field lists the monitored resource as a gce instance , which indicates that these measurements are taken on a Compute Engine VM instance.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Compute Engine In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- If you are running very old Compute Engine instances or if you created Compute Engine instances without the default credentials, then you might not have the proper credentials.
- The Ops Agent collects logs and metrics on Compute Engine instances, sending your logs to Cloud Logging and your metrics to Cloud Monitoring.
- Compute Engine VM instances generally have the correct credentials by default.

### Application Monitoring supported infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Compute Engine MIGs (Regional and zonal) Traffic : instance/network/received bytes count Saturation : instance/cpu/utilization Dataproc Metastore service (Regional and multi-regional) Traffic : The metric depends on whether the service is single- or multi-region: Single: service/request count .
- The dashboards that Application Monitoring creates display log and metric data, including the following golden signals, when that data includes application-specific labels: Traffic : Incoming request rates on the service or workload over the selected time period.
- P95 latency : reasoning engine/request latencies Google Cloud MCP servers (Global) Traffic : mcp/request count Server error rate : The ratio of the number of requests with a response status of 5xx to the total number of requests.
- Vertex AI Agent Engine agents (Regional) Traffic : reasoning engine/request count Server error rate : Ratio of requests whose response status is at least 500 and no more than 599 to the total number of requests.

