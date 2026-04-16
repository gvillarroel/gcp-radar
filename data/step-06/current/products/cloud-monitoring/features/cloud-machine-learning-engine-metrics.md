---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.045Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Cloud Machine Learning Engine Metrics"
feature_slug: "cloud-machine-learning-engine-metrics"
latest_feature_date: "2017-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent"
  - "https://docs.cloud.google.com/monitoring/docs/monitoring-overview"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
keywords:
  - "machine"
  - "learning"
  - "engine"
  - "metrics"
  - "monitoring"
  - "supports"
  - "dashboards"
  - "alerting"
---

# Cloud Machine Learning Engine Metrics

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Monitoring supports Cloud Machine Learning Engine metrics for dashboards and alerting.

## Extended Definition

Monitoring supports Cloud Machine Learning Engine metrics for dashboards and alerting.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)

## Supporting Pages

### Ops Agent overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- Source ID: `site-iam-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Rocky Linux 8 Rocky Linux 9 Rocky Linux 10 RHEL 8: rhel-8, rhel-8-6-sap-ha, rhel-8-8-sap-ha, rhel-8-10-sap-ha RHEL 9: rhel-9 RHEL 10: rhel-10 CentOS Stream 10 Debian 11 (Bullseye) Debian 12 (Bookworm) Debian 13 (Trixie) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu 22.04 LTS (Jammy Jellyfish): ubuntu-2204-lts, ubuntu-minimal-2204-lts Ubuntu 24.04 LTS (Noble Numbat): ubuntu-2404-lts-amd64, ubuntu-minimal-2404-lts-amd64 Ubuntu 25.10 (Questing Quokka): ubuntu-2510-amd64, ubuntu-minimal-2510-amd64 SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap Support for Compute Engine Arm VMs The Ops Agent supports Compute Engine C4A and Tau T2A Arm VM instances.
- Google Kubernetes Engine node instances: GKE on Google Cloud clusters are configured to collect logs and metrics with Logging and Monitoring by default.
- Use of metrics in alerting policies and custom dashboards.
- Metrics collected include: cpu metrics disk metrics iis metrics (Windows only) interface metrics gpu metrics (Linux only) memory metrics mssql metrics (Windows only) pagefile metrics (Windows only) swap metrics network metrics processes metrics agent self metrics : Third-party application support Curated integrations for third-party application metrics , which collect common app metrics and offer sample dashboards and alert policies.

### Cloud Monitoring overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- If you install the Ops Agent on your Compute Engine virtual machines (VMs), then you can collect metrics and logs from your applications and from third-party applications.
- Query languages for Cloud Monitoring When you create an alerting policy or a chart, you must provide a query that describes the data that you want to monitor or chart: Google Cloud console: You can build your query by making selections from menus, or you can write a query.
- The alerting, testing, and visualization services provided by Cloud Monitoring help you answer important questions like the following: What is the load on my service?
- Incidents and notifications in Cloud Monitoring To be notified when the value of a performance metric meets criteria that you define, create an alerting policy .

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- The following sections describe the query tools available in Cloud Monitoring with Metrics Explorer: PromQL Monitoring filters You can create Cloud Monitoring dashboards and alerting policies for your metrics.
- You can also create Cloud Monitoring dashboards and alerting policies to monitor your Prometheus metrics.
- The following meta labels are available on targets for you to use in the relabel configs section: meta gce instance id : the numeric ID of the Compute Engine instance (local) meta gce instance name : the name of the Compute Engine instance (local); the Ops Agent automatically places this value in the mutable instance name label on your metrics. meta gce machine type : full or partial URL of the machine type of the instance; the Ops Agent automatically places this value in the mutable machine type label on your metrics. meta gce metadata NAME : each metadata item of the instance meta gce network : the network URL of the instance meta gce private ip : the private IP address of the instance meta gce interface ipv4 NAME : IPv4 address of each named interface meta gce project : the Google Cloud project in which the instance is running (local) meta gce public ip : the public IP address of the instance, if present meta gce tags : comma separated list of instance tags meta gce zone : the Compute Engine zone URL in which the instance is running The values of these labels are set when the Ops Agent starts.
- You must design and create any Cloud Monitoring dashboards you need, based on the set of metrics you are ingesting and on your business needs.

