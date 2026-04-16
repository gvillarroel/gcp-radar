---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.961Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Google Cloud Ops Agent"
feature_slug: "google-cloud-ops-agent"
latest_feature_date: "2021-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring"
keywords:
  - "ops"
  - "agent"
  - "unified"
  - "logging"
  - "metrics"
  - "linux"
  - "windows"
  - "compute"
---

# Google Cloud Ops Agent

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud Ops Agent is a unified logging and metrics agent for Linux and Windows Compute Engine VMs.

## Extended Definition

The Google Cloud Ops Agent is a unified logging and metrics agent for Linux and Windows Compute Engine VMs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/agent/monitoring](https://docs.cloud.google.com/monitoring/agent/monitoring)

## Supporting Pages

### Ops Agent overview \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent](https://docs.cloud.google.com/monitoring/agent/ops-agent)
- Source ID: `site-iam-reference`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Metrics collected include: cpu metrics disk metrics iis metrics (Windows only) interface metrics gpu metrics (Linux only) memory metrics mssql metrics (Windows only) pagefile metrics (Windows only) swap metrics network metrics processes metrics agent self metrics : Third-party application support Curated integrations for third-party application metrics , which collect common app metrics and offer sample dashboards and alert policies.
- Rocky Linux 8 Rocky Linux 9 Rocky Linux 10 RHEL 8: rhel-8, rhel-8-6-sap-ha, rhel-8-8-sap-ha, rhel-8-10-sap-ha RHEL 9: rhel-9 RHEL 10: rhel-10 CentOS Stream 10 Debian 11 (Bullseye) Debian 12 (Bookworm) Debian 13 (Trixie) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu 22.04 LTS (Jammy Jellyfish): ubuntu-2204-lts, ubuntu-minimal-2204-lts Ubuntu 24.04 LTS (Noble Numbat): ubuntu-2404-lts-amd64, ubuntu-minimal-2404-lts-amd64 Ubuntu 25.10 (Questing Quokka): ubuntu-2510-amd64, ubuntu-minimal-2510-amd64 SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap Support for Compute Engine Arm VMs The Ops Agent supports Compute Engine C4A and Tau T2A Arm VM instances.
- The Ops Agent is supported for Arm VMs on the following OS images: Debian 12 (Bookworm): Ops Agent version 2.44.0 Debian 13 (Trixie): Ops Agent version 2.61.0 Ubuntu 22.04 LTS (Jammy Jellyfish): Ops Agent version 2.42.0 Ubuntu 24.04 LTS (Noble Numbat): Ops Agent version 2.47.0 Ubuntu 25.10 (Questing Quokka): Ops Agent version 2.62.0 RHEL 9: Ops Agent version 2.40.0 RHEL 10: Ops Agent version 2.64.0 Rocky Linux 8: Ops Agent version 2.51.0 Rocky Linux 9: Ops Agent version 2.40.0 Rocky Linux 10: Ops Agent version 2.64.0 CentOS Stream 10: Ops Agent version 2.64.0 SLES 15: Ops Agent version 2.43.0 The Ops Agent is supported on a subset of the images supported by Compute Engine.
- Combining the collection of logs, metrics, and traces into a single process, the Ops Agent uses Fluent Bit for logs, which supports high-throughput logging, and the OpenTelemetry Collector for metrics and traces.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enter the following query and click Run query : severity>=DEBUG log id("GCEGuestAgentManager") "The agent config file is not valid" Linux Run the following command on the Linux Compute Engine VM: journalctl -u google-guest-agent-manager grep "The agent config file is not valid" Windows Run the following command on the Windows Compute Engine VM: Get-Eventlog -Source google guest agent manager -LogName Application Where-Object {$ .Message -like " The agent config file is not valid "} If you see logs containing the string The agent config file is not valid , then the custom configuration for the Ops Agent you provided when creating or updating the extension policy is invalid.
- Troubleshoot extension policies This section provides information about troubleshooting the use of extension policies to manage the Ops Agent: gcloud beta compute zone-vm-extension-policies commands fail The extension policy is created, but the Ops Agent status is "not detected" Linux systemctl and Windows Service Manager don't work with the Ops Agent For information about troubleshooting the Ops Agent, see Troubleshoot the Ops Agent . gcloud beta compute zone-vm-extension-policies commands fail When a gcloud beta compute zone-vm-extension-policies command fails, the response includes troubleshooting suggestions.
- Enter the following query and click Run query : log id("GCEGuestAgentManager") Linux Run the following command on the Compute Engine VM: journalctl -u google-guest-agent-manager Windows Run the following command on the Compute Engine VM: Get-Eventlog -Source google guest agent manager -LogName Application If you see logs containing a string like Failed to install plugin "ops-agent-plugin" ... , or the query returns no logs, then the extension policy failed to install the Ops Agent.
- Enable the APIs Grant roles required to use the Ops Agent To get the permissions that you need to use the Ops Agent to write logs and metrics, ask your administrator to grant you the following IAM roles on your service account: To write logs: Logging Logs Writer ( roles/logging.logWriter ) To write metrics: Monitoring Metric Writer ( roles/monitoring.metricWriter ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### Monitoring agent overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring](https://docs.cloud.google.com/monitoring/agent/monitoring)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, if you have to run the legacy Logging agent on Windows and also need to collect metrics, you must use the legacy Monitoring agent; you can't run the Ops Agent and a legacy agent on the same machine.
- Monitoring APIs: monitoring.googleapis.com Installing the agent requires access to the following DNS names: (Linux) Google Cloud package repository: packages.cloud.google.com (Linux) Google downloads subdomain: dl.google.com (Windows) Legacy Stackdriver download server: repo.stackdriver.com Getting the Monitoring agent source code The source code for the Monitoring agent is available for only the Linux-hosted Monitoring agent.
- The Ops Agent, which combines the collection of metrics and logging into a single agent, is the eventual replacement for the legacy agents.
- Linux operating systems The Monitoring agent supports the following Linux operating systems: Rocky Linux 8 RHEL 8: rhel-8-6-sap-ha, rhel-8-8-sap-ha SLES 12: sles-12-sp5-sap SLES 15: sles-15-sp5, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap The Monitoring agent does not presently support the Container-Optimized OS that is the default in Google Kubernetes Engine clusters.

