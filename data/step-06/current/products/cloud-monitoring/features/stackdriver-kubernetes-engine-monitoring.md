---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.144Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Stackdriver Kubernetes Engine Monitoring"
feature_slug: "stackdriver-kubernetes-engine-monitoring"
latest_feature_date: "2019-05-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/installation"
  - "https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring"
keywords:
  - "stackdriver"
  - "kubernetes"
  - "engine"
  - "monitoring"
  - "provides"
  - "the"
  - "newer"
  - "gke"
---

# Stackdriver Kubernetes Engine Monitoring

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Stackdriver Kubernetes Engine Monitoring provides the newer GKE monitoring experience.

## Extended Definition

Stackdriver Kubernetes Engine Monitoring provides the newer GKE monitoring experience.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- [https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring](https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- September 10, 2019 Change When creating a new Google Kubernetes Engine (GKE) cluster, Stackdriver Kubernetes Engine Monitoring is now the default Stackdriver support option.
- Users of the legacy Stackdriver support for monitoring and logging for Google Kubernetes Engine are encouraged to migrate to Stackdriver Kubernetes Engine Monitoring as soon as possible.
- If you're using Legacy Stackdriver, then you must migrate to Stackdriver Kubernetes Engine Monitoring before Legacy Stackdriver is decommissioned.
- As a result, the beta version of Stackdriver Kubernetes Engine Monitoring is no longer supported.

### "Installing the Cloud Monitoring agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Monitoring agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' stackdriver-agent SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' stackdriver-agent WINDOWS There is presently no way to determine the version of the Monitoring agent running on Windows.
- Configure an HTTP proxy If you use an HTTP proxy for proxying requests to the Logging and Monitoring APIs, do the following: Linux Edit the following configuration file (create the file if it doesn't already exist): For agent versions 6.0.0 and higher, edit: /etc/default/stackdriver-agent For agent versions earlier than 6.0.0, edit the appropriate file for your OS: For Debian and Ubuntu, edit: /etc/default/stackdriver-agent For CentOS and SLES, edit: /etc/default/stackdriver-collectd Note: If this file doesn't exist, create it.
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://repo.stackdriver.com/windows/StackdriverMonitoring-GCM-46.exe", "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe") & "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe" Alternatively, you can browse to the following URL to download and run the agent's installer: https://repo.stackdriver.com/windows/StackdriverMonitoring-GCM-46.exe Caution: You must download the installer to a non-system directory, such as C:\Users\[USERNAME] .
- Run the following PowerShell command: Restart-Service -Name StackdriverMonitoring Upgrade the agent To upgrade the Monitoring agent to the latest release, use the following instructions: Note: If you upgraded your instance's Linux operating system to a new major release, then you should first remove the agent and then re-install it using the procedures on this page, instead of completing these upgrade procedures.

### "Instrument an application for Application Monitoring \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring](https://docs.cloud.google.com/monitoring/docs/instrument-for-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Use Google Cloud Managed Service for Prometheus on GKE To have Google Cloud Observability attach application labels to metric data generated by your application's workloads that runs on Google Kubernetes Engine clusters, do the following: Use Google Cloud Managed Service for Prometheus with managed collection .
- It also describes how to have your application export a metric that is used by Application Monitoring to report the traffic level, server error rate, or the latency for HTTP requests workloads that run on Google Kubernetes Engine.
- If you run workloads on Google Kubernetes Engine, then this approach exports the HTTP server metric that Application Monitoring uses to generate values for the traffic level, server error rate, and the latency for HTTP requests.
- Metric data from instrumentation you added to your applications can include the following metric labels: metric.labels.apphub application {container,id,location} metric.labels.apphub workload {criticality type,environment type,id} Trace spans generated by instrumentation you added to your applications can include the following resource attributes: gcp.apphub.application.{container,id,location} gcp.apphub.{workload,service}.{criticality type,environment type,id} About OpenTelemetry HTTP server metrics There are no system metrics for workloads that run on Google Kubernetes Engine that can report the traffic level, server error rate, or the latency for HTTP requests.

