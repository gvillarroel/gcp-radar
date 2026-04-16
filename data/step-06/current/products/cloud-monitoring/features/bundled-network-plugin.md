---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:14.062Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Bundled Network Plugin"
feature_slug: "bundled-network-plugin"
latest_feature_date: "2016-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/monitoring"
  - "https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
keywords:
  - "bundled"
  - "network"
  - "plugin"
  - "monitoring"
  - "agent"
  - "includes"
---

# Bundled Network Plugin

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Monitoring agent includes a bundled network plugin.

## Extended Definition

The Monitoring agent includes a bundled network plugin.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/monitoring](https://docs.cloud.google.com/monitoring/agent/monitoring)
- [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)

## Supporting Pages

### Monitoring agent overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring](https://docs.cloud.google.com/monitoring/agent/monitoring)
- Source ID: `site-iam-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Monitoring can access some instance metrics without the Monitoring agent, including CPU utilization, some disk traffic metrics, network traffic, and uptime information.
- By default, the Monitoring agent collects disk, CPU, network, and process metrics.
- Monitoring APIs: monitoring.googleapis.com Installing the agent requires access to the following DNS names: (Linux) Google Cloud package repository: packages.cloud.google.com (Linux) Google downloads subdomain: dl.google.com (Windows) Legacy Stackdriver download server: repo.stackdriver.com Getting the Monitoring agent source code The source code for the Monitoring agent is available for only the Linux-hosted Monitoring agent.
- Linux operating systems The Monitoring agent supports the following Linux operating systems: Rocky Linux 8 RHEL 8: rhel-8-6-sap-ha, rhel-8-8-sap-ha SLES 12: sles-12-sp5-sap SLES 15: sles-15-sp5, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap The Monitoring agent does not presently support the Container-Optimized OS that is the default in Google Kubernetes Engine clusters.

### "User-defined metrics from the agent \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- Source ID: `site-iam-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Troubleshooting This section explains how to configure the Monitoring agent's write log plugin to dump out the full set of metric points, including metadata.
- To enable the plugin: As root , edit the following configuration file: /etc/stackdriver/collectd.conf Right after LoadPlugin write gcm , add: LoadPlugin write log Right after <Plugin "write gcm">…</Plugin> , add: <Plugin "write log"> Format JSON </Plugin> Search for <Target "write">…</Target> and after every Plugin "write gcm" , add: Plugin "write log" Save your changes and restart the agent: sudo service stackdriver-agent restart These changes will print one log line per metric value reported, including the full collectd identifier, the metadata entries, and the value.
- The default processing will write all metrics to Cloud Monitoring , which will drop any unrecognized metrics : ones that aren ' t in the list of curated metrics and don ' t have the user - defined metric metadata . < Rule "go back" > Target "return" < / Rule > < / Chain > Load the new configuration Restart your agent to pick up the new configuration by executing the following command on your VM instance: sudo service stackdriver-agent restart Your user-defined metric information begins to flow into Monitoring.
- Find a read plugin that works for you. (Optional) As a convenience, add the agent's collectd reference documentation to your system's man pages by updating the MANPATH variable and then running mandb : export MANPATH = "$MANPATH:/opt/stackdriver/collectd/share/man" sudo mandb The man pages are for stackdriver-collectd .

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Troubleshoot extension policies This section provides information about troubleshooting the use of extension policies to manage the Ops Agent: gcloud beta compute zone-vm-extension-policies commands fail The extension policy is created, but the Ops Agent status is "not detected" Linux systemctl and Windows Service Manager don't work with the Ops Agent For information about troubleshooting the Ops Agent, see Troubleshoot the Ops Agent . gcloud beta compute zone-vm-extension-policies commands fail When a gcloud beta compute zone-vm-extension-policies command fails, the response includes troubleshooting suggestions.
- If you haven't done so already, install the beta component of the gcloud CLI by running the following command: gcloud components install beta To check if you have the beta component installed, run the following command: gcloud components list If you previously installed the beta component, verify that have the latest version: gcloud components update Uninstall any observability agents Before creating a VM Extension Manager policy to manage the Ops Agent on a VM, ensure that there are no instances of the Ops Agent or the legacy Monitoring agent and Logging agent already on the VM.
- Enter the following query and click Run query : log id("GCEGuestAgentManager") Linux Run the following command on the Compute Engine VM: journalctl -u google-guest-agent-manager Windows Run the following command on the Compute Engine VM: Get-Eventlog -Source google guest agent manager -LogName Application If you see logs containing a string like Failed to install plugin "ops-agent-plugin" ... , or the query returns no logs, then the extension policy failed to install the Ops Agent.
- Enable the APIs Grant roles required to use the Ops Agent To get the permissions that you need to use the Ops Agent to write logs and metrics, ask your administrator to grant you the following IAM roles on your service account: To write logs: Logging Logs Writer ( roles/logging.logWriter ) To write metrics: Monitoring Metric Writer ( roles/monitoring.metricWriter ) For more information about granting roles, see Manage access to projects, folders, and organizations .

