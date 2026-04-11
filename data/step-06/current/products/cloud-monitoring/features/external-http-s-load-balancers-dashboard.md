---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.126Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "External HTTP(S) Load Balancers dashboard"
feature_slug: "external-http-s-load-balancers-dashboard"
latest_feature_date: "2021-07-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring-services"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
keywords:
  - "external"
  - "http"
  - "load"
  - "balancers"
  - "dashboard"
  - "monitoring"
  - "provides"
  - "dedicated"
---

# External HTTP(S) Load Balancers dashboard

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Monitoring provides a dedicated dashboard with visualizations for understanding and troubleshooting external HTTP(S) load balancers.

## Extended Definition

Monitoring provides a dedicated dashboard with visualizations for understanding and troubleshooting external HTTP(S) load balancers.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- July 26, 2021 Feature The new External HTTP(S) Load Balancers dashboard in Monitoring provides powerful visualizations to help you understand and troubleshoot connectivity issues on your external load balancers.
- To learn more, see the following: List registered and discovered services and workloads Application Monitoring overview View application telemetry April 02, 2026 Feature Application Monitoring has added support for the following resources: Vertex AI Workbench GKE Gateway GKE Ingress Layer 7 cross-regional Application Load Balancers Additionally, dashboards for Kubernetes workloads display L4 and L7 traffic metrics, when both are available.
- August 13, 2020 Feature The new, out-of-the-box Infrastructure Summary dashboard for Compute Engine VMs provides a single-pane-of-glass view into your VM fleet and load balancers.
- To learn more, see the following: Correlate metric and log data Explore application telemetry August 25, 2025 Feature Your Application Monitoring dashboards will display latency, error rates, and traffic level for workloads deployed on Google Kubernetes Engine, when you instrument your application with OpenTelemetry.

### Application Monitoring supported infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring-services](https://docs.cloud.google.com/monitoring/docs/application-monitoring-services)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Layer 7 external and internal Application Load Balancers with HTTP or HTTPS traffic (Global, regional, and cross region) Traffic : Based on a Cloud Load Balancing metric type that records the request count, like https/request count .
- The dashboards that Application Monitoring creates display log and metric data, including the following golden signals, when that data includes application-specific labels: Traffic : Incoming request rates on the service or workload over the selected time period.
- For workloads that run on GKE, Google Cloud Observability might derive golden signals from the Prometheus metric http server request duration seconds , which is only available when you instrument your application by using OpenTelemetry.
- P95 latency : Based on a Cloud Load Balancing metric type that records total latencies, like https/total latencies .

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy "metadata.google.internal,169.254.169.254" /m Determine the agent version To determine the version of the Ops Agent on your system, run the following commands on your VM instance: Google Cloud console To see the version of your Ops Agent on a VM: Locate the entry for the VM in the Instances table in the Monitoring VM Instances page.
- Download the agent installation script: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.ps1", "${env:UserProfile}\add-google-cloud-ops-agent-repo.ps1") When running the add-google-cloud-ops-agent-repo.ps1 script, you can also set the following flags: -Verbose : Turns on verbose logging during the script execution. -AlsoInstall : Installs the agent after adding the agent package repository. -Version : Sets the agent version for the script to install.
- Configure an HTTP proxy If you use an HTTP proxy for proxying requests to the Logging and Monitoring APIs, do the following: Linux Edit the following configuration file (create the file if it doesn't already exist): /etc/systemd/system.conf Add the following to the file: DefaultEnvironment="HTTP PROXY=http:// proxy-ip : proxy-port " "HTTPS PROXY=http:// proxy-ip : proxy-port " "NO PROXY=http://metadata.google.internal" # Skip proxy for the local Metadata Server.
- Download the agent installation script: curl -sSO https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.sh When running the add-google-cloud-ops-agent-repo.sh script, you can also set the following flags: --verbose : Turns on verbose logging during the script execution. --also-install : Installs the agent after adding the agent package repository. --version : Sets the agent version for the script to install.

