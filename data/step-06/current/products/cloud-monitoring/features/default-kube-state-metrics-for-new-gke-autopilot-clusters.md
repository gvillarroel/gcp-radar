---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.833Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Default kube state metrics for new GKE Autopilot clusters"
feature_slug: "default-kube-state-metrics-for-new-gke-autopilot-clusters"
latest_feature_date: "2023-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/monitoring"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring-services"
keywords:
  - "default"
  - "kube"
  - "state"
  - "metrics"
  - "gke"
  - "autopilot"
  - "clusters"
  - "feature"
---

# Default kube state metrics for new GKE Autopilot clusters

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

This feature enables kube state metrics by default for new GKE Autopilot clusters starting with version 1.27.4-gke.900.

## Extended Definition

This feature enables kube state metrics by default for new GKE Autopilot clusters starting with version 1.27.4-gke.900.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/monitoring](https://docs.cloud.google.com/monitoring/agent/monitoring)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)

## Supporting Pages

### Monitoring agent overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring](https://docs.cloud.google.com/monitoring/agent/monitoring)
- Source ID: `site-iam-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Google Kubernetes Engine node instances: GKE on Google Cloud clusters are configured to collect logs and metrics with Logging and Monitoring by default.
- Linux operating systems The Monitoring agent supports the following Linux operating systems: Rocky Linux 8 RHEL 8: rhel-8-6-sap-ha, rhel-8-8-sap-ha SLES 12: sles-12-sp5-sap SLES 15: sles-15-sp5, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap The Monitoring agent does not presently support the Container-Optimized OS that is the default in Google Kubernetes Engine clusters.
- You can install the Ops Agent on Managed Service for Apache Spark clusters that use image version 2.2 and later to collect syslog logs and host metrics.
- By default, the Monitoring agent collects disk, CPU, network, and process metrics.

### Application Monitoring supported infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Golden signals for Kubernetes For Kubernetes DaemonSets, Deployments, and StatefulSets, Google Cloud Observability uses the following metric data to derive values for golden signals, when that metric data is available: Traffic : service/server/request count .
- To learn how to use a StatefulSet or deploy a stateful application, see About StatefulSets in Google Kubernetes Engine .
- Kubernetes StatefulSets (Regional and zonal) See Golden signals for Kubernetes .
- When both the L7 and L4 traffic metrics are available, the L7 metrics appear on the summary pages but the traffic chart contains tabs, which let you view both metrics.

### Ops Agent overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- Source ID: `site-iam-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Google Kubernetes Engine node instances: GKE on Google Cloud clusters are configured to collect logs and metrics with Logging and Monitoring by default.
- You can install the Ops Agent on Managed Service for Apache Spark clusters that use image version 2.2 and later to collect syslog logs and host metrics.
- Monitoring features Monitoring features include: System metrics collected with no configuration.
- Metrics collected include: cpu metrics disk metrics iis metrics (Windows only) interface metrics gpu metrics (Linux only) memory metrics mssql metrics (Windows only) pagefile metrics (Windows only) swap metrics network metrics processes metrics agent self metrics : Third-party application support Curated integrations for third-party application metrics , which collect common app metrics and offer sample dashboards and alert policies.

