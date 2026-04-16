---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.426Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Ansible Management for Cloud Logging Agent on Windows"
feature_slug: "ansible-management-for-cloud-logging-agent-on-windows"
latest_feature_date: "2021-04-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent"
keywords:
  - "ansible"
  - "management"
  - "logging"
  - "agent"
  - "windows"
  - "can"
  - "provision"
  - "manage"
---

# Ansible Management for Cloud Logging Agent on Windows

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Ansible can provision and manage the Cloud Logging agent on Windows systems.

## Extended Definition

Ansible can provision and manage the Cloud Logging agent on Windows systems.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent](https://docs.cloud.google.com/logging/docs/agent/ops-agent)

## Supporting Pages

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Restart an Ops Agent installed by an extension policy When the Ops Agent is installed and managed by VM Extension Manager, the Ops Agent isn't managed by the system-management service of the operating system, that is, systemd on Linux or the Windows Service Manager on Windows.
- When the Ops Agent is installed and managed by VM Extension Manager, the Ops Agent isn't managed by the system-management service of the operating system, that is, systemd on Linux or the Windows Service Manager on Windows.
- When the Ops Agent is installed and managed by VM Extension Manager, the Ops Agent isn't managed by the system-management service of the operating system, that is, systemd on Linux or the Windows Service Manager on Windows.
- Enter the following query and click Run query : severity>=DEBUG log id("GCEGuestAgentManager") "The agent config file is not valid" Linux Run the following command on the Linux Compute Engine VM: journalctl -u google-guest-agent-manager grep "The agent config file is not valid" Windows Run the following command on the Windows Compute Engine VM: Get-Eventlog -Source google guest agent manager -LogName Application Where-Object {$ .Message -like " The agent config file is not valid "} If you see logs containing the string The agent config file is not valid , then the custom configuration for the Ops Agent you provided when creating or updating the extension policy is invalid.

### Use agent policies (beta) \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Grant the Identity and Access Management roles Logs Writer ( roles/logging.logWriter ) and Monitoring Metric Writer ( roles/monitoring.metricWriter ) to the Compute Engine default service account so that the agents can write logs and metrics to the Logging and Cloud Monitoring APIs.
- Agent policies use the VM Manager suite of tools in Compute Engine to manage OS policies , which can automate the deployment and maintenance of software configurations like the Google Cloud Observability agents: the Ops Agent, the legacy Monitoring agent, and the legacy Logging agent.
- The policy is created, but seems to have no effect OS Config agents are deployed to each Compute Engine instance to manage the packages for the Logging and Monitoring agents.
- For new policies, we recommend that you use VM Extension Manager policies for fleet-wide installation and management of the Ops Agent.

### Ops Agent overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent](https://docs.cloud.google.com/logging/docs/agent/ops-agent)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- The agent supports the following Windows operating systems: Windows Server: windows-2016, windows-2019, windows-2022, windows-2025 Windows Server Core: windows-2016-core, windows-2019-core, windows-20h2-core, windows-2022-core, windows-2025-core Agent access requirements Installing the agent requires access to the following DNS names: Google Cloud package repository: packages.cloud.google.com Google downloads subdomain: dl.google.com Running the agent requires access to the following DNS names: OAuth2 token server: oauth2.googleapis.com Earlier versions of the agent may require access to www.googleapis.com (full URL: https://www.googleapis.com/oauth2/v3/token ).
- Metrics collected include: cpu metrics disk metrics iis metrics (Windows only) interface metrics gpu metrics (Linux only) memory metrics mssql metrics (Windows only) pagefile metrics (Windows only) swap metrics network metrics processes metrics agent self metrics : Third-party application support Curated integrations for third-party application metrics , which collect common app metrics and offer sample dashboards and alert policies.
- Combining the collection of logs, metrics, and traces into a single process, the Ops Agent uses Fluent Bit for logs, which supports high-throughput logging, and the OpenTelemetry Collector for metrics and traces.
- Linux operating systems The agent supports the following Linux operating systems: Note: To use Cloud Logging on VMs with Container-Optimized OS, follow Using Cloud Logging with Container-Optimized OS instead.

