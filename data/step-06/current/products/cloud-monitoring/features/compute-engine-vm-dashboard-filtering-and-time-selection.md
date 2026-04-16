---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.979Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Compute Engine VM dashboard filtering and time selection"
feature_slug: "compute-engine-vm-dashboard-filtering-and-time-selection"
latest_feature_date: "2020-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring-services"
keywords:
  - "compute"
  - "engine"
  - "vm"
  - "dashboard"
  - "filtering"
  - "time"
  - "selection"
  - "instances"
---

# Compute Engine VM dashboard filtering and time selection

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Compute Engine VM Instances dashboard supports filtering VMs and changing the inspection time window with selectors and in-chart selection.

## Extended Definition

The Compute Engine VM Instances dashboard supports filtering VMs and changing the inspection time window with selectors and in-chart selection.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)

## Supporting Pages

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, when a Google Cloud project contains multiple Compute Engine VM instances, the CPU utilization for each VM instance is a unique time series.
- System and application metrics that the Ops Agent collects about system resources and applications running on Compute Engine instances.
- Examples of monitored resources include Compute Engine instances and App Engine applications.
- The following is an example of a resource field: "resource": { "type": "gce instance", "labels": { "instance id": "2708613220420473591", "zone": "us-east1-b", "project id": "sampleproject" } } The type field lists the monitored resource as a gce instance , which indicates that these measurements are taken on a Compute Engine VM instance.

### Application Monitoring supported infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Compute Engine MIGs (Regional and zonal) Traffic : instance/network/received bytes count Saturation : instance/cpu/utilization Dataproc Metastore service (Regional and multi-regional) Traffic : The metric depends on whether the service is single- or multi-region: Single: service/request count .
- The dashboards that Application Monitoring creates display log and metric data, including the following golden signals, when that data includes application-specific labels: Traffic : Incoming request rates on the service or workload over the selected time period.
- P95 latency : reasoning engine/request latencies Google Cloud MCP servers (Global) Traffic : mcp/request count Server error rate : The ratio of the number of requests with a response status of 5xx to the total number of requests.
- Vertex AI Agent Engine agents (Regional) Traffic : reasoning engine/request count Server error rate : Ratio of requests whose response status is at least 500 and no more than 599 to the total number of requests.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Verify the installation of the Ops Agent This section describes how to do the following: Verify the status or version of an Ops Agent installation Verify that the Ops Agent is collecting telemetry Verify the status or version of an Ops Agent installation To determine the status or version of the Ops Agent, use one of the following Google Cloud console pages: Compute Engine In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- To determine the version of the installed agent, hover over the Ops Agent label on the Compute Engine or Monitoring dashboard.
- Enter the following query and click Run query : severity>=DEBUG log id("GCEGuestAgentManager") "The agent config file is not valid" Linux Run the following command on the Linux Compute Engine VM: journalctl -u google-guest-agent-manager grep "The agent config file is not valid" Windows Run the following command on the Windows Compute Engine VM: Get-Eventlog -Source google guest agent manager -LogName Application Where-Object {$ .Message -like " The agent config file is not valid "} If you see logs containing the string The agent config file is not valid , then the custom configuration for the Ops Agent you provided when creating or updating the extension policy is invalid.
- Enter the following query and click Run query : log id("GCEGuestAgentManager") Linux Run the following command on the Compute Engine VM: journalctl -u google-guest-agent-manager Windows Run the following command on the Compute Engine VM: Get-Eventlog -Source google guest agent manager -LogName Application If you see logs containing a string like Failed to install plugin "ops-agent-plugin" ... , or the query returns no logs, then the extension policy failed to install the Ops Agent.

