---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.001Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Stackdriver Kubernetes Engine Monitoring"
feature_slug: "stackdriver-kubernetes-engine-monitoring"
latest_feature_date: "2019-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/monitoring"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
  - "https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring"
keywords:
  - "stackdriver"
  - "kubernetes"
  - "engine"
  - "monitoring"
  - "provides"
  - "newer"
  - "gke"
  - "experience"
---

# Stackdriver Kubernetes Engine Monitoring

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Stackdriver Kubernetes Engine Monitoring provides the newer GKE monitoring experience.

## Extended Definition

Stackdriver Kubernetes Engine Monitoring provides the newer GKE monitoring experience.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/monitoring](https://docs.cloud.google.com/monitoring/agent/monitoring)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- [https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring](https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring)

## Supporting Pages

### Monitoring agent overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring](https://docs.cloud.google.com/monitoring/agent/monitoring)
- Source ID: `site-iam-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Linux operating systems The Monitoring agent supports the following Linux operating systems: Rocky Linux 8 RHEL 8: rhel-8-6-sap-ha, rhel-8-8-sap-ha SLES 12: sles-12-sp5-sap SLES 15: sles-15-sp5, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap The Monitoring agent does not presently support the Container-Optimized OS that is the default in Google Kubernetes Engine clusters.
- Google Kubernetes Engine node instances: GKE on Google Cloud clusters are configured to collect logs and metrics with Logging and Monitoring by default.
- Monitoring APIs: monitoring.googleapis.com Installing the agent requires access to the following DNS names: (Linux) Google Cloud package repository: packages.cloud.google.com (Linux) Google downloads subdomain: dl.google.com (Windows) Legacy Stackdriver download server: repo.stackdriver.com Getting the Monitoring agent source code The source code for the Monitoring agent is available for only the Linux-hosted Monitoring agent.
- The Monitoring agent, stackdriver-agent , is based on the original collectd system statistics collection daemon. stackdriver-agent source code is available at Stackdriver/collectd .

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- For version information, see List all agent versions . --uninstall : Uninstalls the agent. --remove-repo : Removes the corresponding agent package repository after installing or uninstalling the agent. --dry-run : Triggers only a dry run of the script execution and prints out the commands that it is supposed to execute. --uninstall-standalone-logging-agent : Uninstalls the legacy Logging agent ( StackdriverLogging ). --uninstall-standalone-monitoring-agent : Uninstalls the legacy Monitoring agent ( StackdriverMonitoring ).
- For version information, see List all agent versions . -Uninstall : Uninstalls the agent. -RemoveRepo : Removes the corresponding agent package repository after installing or uninstalling the agent. -WhatIf : Triggers only a dry run of the script execution and prints out the commands that it is supposed to execute. -UninstallStandaloneLoggingAgent : Uninstalls the legacy Logging agent ( StackdriverLogging ). -UninstallStandaloneMonitoringAgent : Uninstalls the legacy Monitoring agent ( StackdriverMonitoring ).
- You can install the Ops Agent on one or more Compute Engine VMs by using the Google Cloud console from the Cloud Monitoring or Compute Engine pages.
- The Ops Agent collects logs and metrics on Compute Engine instances, sending your logs to Cloud Logging and your metrics to Cloud Monitoring.

### "Instrument an application for Application Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring](https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- It also describes how to have your application export a metric that is used by Application Monitoring to report the traffic level, server error rate, or the latency for HTTP requests workloads that run on Google Kubernetes Engine.
- If you run workloads on Google Kubernetes Engine, then this approach exports the HTTP server metric that Application Monitoring uses to generate values for the traffic level, server error rate, and the latency for HTTP requests.
- Metric data from instrumentation you added to your applications can include the following metric labels: metric.labels.apphub application {container,id,location} metric.labels.apphub workload {criticality type,environment type,id} Trace spans generated by instrumentation you added to your applications can include the following resource attributes: gcp.apphub.application.{container,id,location} gcp.apphub.{workload,service}.{criticality type,environment type,id} About OpenTelemetry HTTP server metrics There are no system metrics for workloads that run on Google Kubernetes Engine that can report the traffic level, server error rate, or the latency for HTTP requests.
- Resource detectors can help you set the previous attributes: resourcedetectionprocessor Go: Google Cloud resource detector Java: opentelemetry-java-contrib/gcp-resources Node.js: resource-detector-gcp Python: opentelemetry-resourcedetector-gcp Attributes for Google Kubernetes Engine workloads For a Google Kubernetes Engine workload, configure your collector or your instrumentation to do the following: Extract metadata, like the namespace , from the environment.

