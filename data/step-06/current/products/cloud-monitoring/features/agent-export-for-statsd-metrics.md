---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.150Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Agent Export for StatsD Metrics"
feature_slug: "agent-export-for-statsd-metrics"
latest_feature_date: "2017-10-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview"
keywords:
  - "agent"
  - "export"
  - "for"
  - "statsd"
  - "metrics"
  - "the"
  - "monitoring"
  - "can"
---

# Agent Export for StatsD Metrics

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The Monitoring agent can export StatsD metrics as custom metrics.

## Extended Definition

The Monitoring agent can export StatsD metrics as custom metrics.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)

## Supporting Pages

### "User-defined metrics from the agent \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- Source ID: `site-iam-reference`
- Final score: 254
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In addition to exporting many predefined system and third-party metrics to Cloud Monitoring, the agent can export your own collectd application metrics to Monitoring as user-defined metrics .
- This guide explains how you can configure the Monitoring agent to recognize and export your application metrics to Cloud Monitoring.
- The default processing will write all metrics to Cloud Monitoring , which will drop any unrecognized metrics : ones that aren ' t in the list of curated metrics and don ' t have the user - defined metric metadata . < Rule "go back" > Target "return" < / Rule > < / Chain > Load the new configuration Restart your agent to pick up the new configuration by executing the following command on your VM instance: sudo service stackdriver-agent restart Your user-defined metric information begins to flow into Monitoring.
- The time series data for this metric descriptor must contain the following information, because of the way the metric descriptor is defined: Metric type: custom.googleapis.com/nginx/active connections Metric label values: service name : either "my service a" or "my service b" Other time series information, including the associated monitored resource —the VM instance sending the data—and the metric's data point, is automatically obtained by the agent for all metrics.

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 244
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use the following pattern to add labels staticLabel1 and staticLabel2 to all ingested metrics: metric relabel configs: - source labels: [ address ] action: replace replacement: ' STATIC VALUE 1 ' target label: staticLabel1 - source labels: [ address ] action: replace replacement: ' STATIC VALUE 2 ' target label: staticLabel2 The following version of the Prometheus receiver for the JSON Exporter example uses these configuration patterns to do the following: Set the zone label from the value of the meta gce zone meta label provided by the Ops Agent.
- To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Prometheus metrics in Cloud Monitoring You can use the tools provided by Cloud Monitoring with the data collected by the Prometheus receiver.
- The prometheus target resource has the following labels, which you can use for filtering and manipulating queried data: project id : The identifier of the Google Cloud project, like my-project , in which the Ops Agent is running. location : The Google Cloud region or zone in which the Ops Agent is running; for example, us-east1-a . cluster : Always gce for Prometheus metrics collected by using the Ops Agent. namespace : The Compute Engine instance ID of the VM on which the Ops Agent is running. job : The value of the job name field in the receiver configuration. instance : The instance label of the Prometheus target, taken from the receiver configuration; defaults to the target.
- For the JSON Exporter example, use the following procedure: Edit the Ops Agent configuration file, /etc/google-cloud-ops-agent/config.yaml , and add the following Prometheus receiver and pipeline entries: metrics: receivers: prometheus: type: prometheus config: scrape configs: - job name: 'json exporter' scrape interval: 10s metrics path: /probe params: module: [default] target: [http://localhost:8000/examples/data.json] static configs: - targets: ['localhost:7979'] service: pipelines: prometheus pipeline: receivers: - prometheus If you have other configuration entries in this file already, add the Prometheus receiver and pipeline to the existing metrics and service entries.

### "Overview of agent policies for the Ops Agent \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)
- Source ID: `site-iam-reference`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- The ops-agent-policy Terraform module Support for the legacy Monitoring agent and Logging agent Beta agent policies can manage the legacy Monitoring agent and Logging agent as well as the Ops Agent.
- You can't convert beta agent policies for the legacy Monitoring agent or Logging agent to GA agent policies.
- Supported operating systems You can apply an agent policy to Compute Engine VM instances running the operating systems shown in the following table: Operating system Ops Agent (GA & beta † policies) Logging agent (beta † policies only) Monitoring agent (beta † policies only) CentOS 8 Rocky Linux 8 RHEL 6 RHEL 7: rhel-7, rhel-7-6-sap-ha, rhel-7-7-sap-ha, rhel-7-9-sap-ha ‡ RHEL 8: rhel-8, rhel-8-4-sap-ha, rhel-8-6-sap-ha, rhel-8-8-sap-ha ‡ Debian 9 (Stretch) Debian 11 (Bullseye) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu LTS 18.04 (Bionic Beaver): ubuntu-1804-lts, ubuntu-minimal-1804-lts Ubuntu LTS 20.04 (Focal Fossa): ubuntu-2004-lts, ubuntu-minimal-2004-lts Ubuntu LTS 22.04 (Jammy Jellyfish): buntu-2204-lts, ubuntu-minimal-2204-lts SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp2-sap, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap OpenSUSE Leap 15: opensuse-leap (opensuse-leap-15-3- , opensuse-leap-15-4- ) Windows Server: 2016, 2019, 2022, Core 2016, Core 2019, Core 2022 † In beta agent policies, the agent columns map to an agent type specified to the gcloud beta compute instances ops-agents policies create invocation: Ops Agent maps to agent type ops-agent .
- The beta and GA policies are also structurally different: Policies created by using gcloud beta compute instances ops-agents policies describe agent policies by passing individual options to the commands, for example: gcloud beta compute instances ops-agents policies create ops-agents-test-policy \ --agent-rules = "type=logging,enable-autoupgrade=false;type=metrics,enable-autoupgrade=false" \ --description = "A test policy." \ --os-types = short-name = centos,version = 7 \ --instances = zones/us-central1-a/instances/test-instance \ --project PROJECT ID The agent-policy Terraform module provides the same capabilities.

