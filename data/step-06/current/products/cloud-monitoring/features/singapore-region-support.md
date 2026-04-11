---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.153Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Singapore Region Support"
feature_slug: "singapore-region-support"
latest_feature_date: "2017-06-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/installation"
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/install-index"
keywords:
  - "singapore"
  - "region"
  - "monitoring"
  - "supports"
  - "resources"
  - "in"
  - "the"
  - "asia"
---

# Singapore Region Support

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Monitoring supports resources in the Singapore region asia-southeast1.

## Extended Definition

Monitoring supports resources in the Singapore region asia-southeast1.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/install-index](https://docs.cloud.google.com/monitoring/agent/monitoring/install-index)

## Supporting Pages

### "Installing the Cloud Monitoring agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- This sets the HTTP PROXY and HTTPS PROXY environment variables so that the agent can send data using outbound HTTPS: setx HTTP PROXY http:// proxy-ip : proxy-port /m setx HTTPS PROXY http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Monitoring agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' stackdriver-agent SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' stackdriver-agent WINDOWS There is presently no way to determine the version of the Monitoring agent running on Windows.
- Configure an HTTP proxy If you use an HTTP proxy for proxying requests to the Logging and Monitoring APIs, do the following: Linux Edit the following configuration file (create the file if it doesn't already exist): For agent versions 6.0.0 and higher, edit: /etc/default/stackdriver-agent For agent versions earlier than 6.0.0, edit the appropriate file for your OS: For Debian and Ubuntu, edit: /etc/default/stackdriver-agent For CentOS and SLES, edit: /etc/default/stackdriver-collectd Note: If this file doesn't exist, create it.
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://repo.stackdriver.com/windows/StackdriverMonitoring-GCM-46.exe", "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe") & "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe" Alternatively, you can browse to the following URL to download and run the agent's installer: https://repo.stackdriver.com/windows/StackdriverMonitoring-GCM-46.exe Caution: You must download the installer to a non-system directory, such as C:\Users\[USERNAME] .
- Run the following PowerShell command: Restart-Service -Name StackdriverMonitoring Upgrade the agent To upgrade the Monitoring agent to the latest release, use the following instructions: Note: If you upgraded your instance's Linux operating system to a new major release, then you should first remove the agent and then re-install it using the procedures on this page, instead of completing these upgrade procedures.

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Feature Singapore region support : Stackdriver now supports the Singapore region, asia-southeast1 .
- To learn more, see the following: List registered and discovered services and workloads Application Monitoring overview View application telemetry April 02, 2026 Feature Application Monitoring has added support for the following resources: Vertex AI Workbench GKE Gateway GKE Ingress Layer 7 cross-regional Application Load Balancers Additionally, dashboards for Kubernetes workloads display L4 and L7 traffic metrics, when both are available.
- January 18, 2017 Feature New AWS regions : Monitoring now supports the AWS Canada ( ca-central-1 ) and London ( eu-west-2 ) regions.
- Feature New AWS region : Monitoring now supports the AWS region us-east-2 .

### Install the Monitoring agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/install-index](https://docs.cloud.google.com/monitoring/agent/monitoring/install-index)
- Source ID: `site-iam-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- Select an installation method Install the Monitoring agent on a fleet of VMs by using agent policies Use the Google Cloud CLI or Terraform to create an agent policy that installs and manages agents on your fleet of VMs.
- Home Documentation Observability Cloud Monitoring Guides Send feedback Install the Monitoring agent Stay organized with collections Save and categorize content based on your preferences.
- Install the Monitoring agent on a fleet of VMs using automation tools Use Ansible, Chef, or Puppet to install and manage agents on your fleet of VMs.
- Install the Monitoring agent on individual VMs Install the Monitoring agent manually on individual VMs.

