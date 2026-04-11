---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.160Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Bundled StatsD Plugin"
feature_slug: "bundled-statsd-plugin"
latest_feature_date: "2016-10-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
keywords:
  - "bundled"
  - "statsd"
  - "plugin"
  - "the"
  - "monitoring"
  - "agent"
  - "includes"
---

# Bundled StatsD Plugin

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The Monitoring agent includes a bundled StatsD plugin.

## Extended Definition

The Monitoring agent includes a bundled StatsD plugin.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)

## Supporting Pages

### "User-defined metrics from the agent \_|\_ Cloud Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent](https://docs.cloud.google.com/monitoring/agent/custom-metrics-agent)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Troubleshooting This section explains how to configure the Monitoring agent's write log plugin to dump out the full set of metric points, including metadata.
- To enable the plugin: As root , edit the following configuration file: /etc/stackdriver/collectd.conf Right after LoadPlugin write gcm , add: LoadPlugin write log Right after <Plugin "write gcm">…</Plugin> , add: <Plugin "write log"> Format JSON </Plugin> Search for <Target "write">…</Target> and after every Plugin "write gcm" , add: Plugin "write log" Save your changes and restart the agent: sudo service stackdriver-agent restart These changes will print one log line per metric value reported, including the full collectd identifier, the metadata entries, and the value.
- The default processing will write all metrics to Cloud Monitoring , which will drop any unrecognized metrics : ones that aren ' t in the list of curated metrics and don ' t have the user - defined metric metadata . < Rule "go back" > Target "return" < / Rule > < / Chain > Load the new configuration Restart your agent to pick up the new configuration by executing the following command on your VM instance: sudo service stackdriver-agent restart Your user-defined metric information begins to flow into Monitoring.
- Find a read plugin that works for you. (Optional) As a convenience, add the agent's collectd reference documentation to your system's man pages by updating the MANPATH variable and then running mandb : export MANPATH = "$MANPATH:/opt/stackdriver/collectd/share/man" sudo mandb The man pages are for stackdriver-collectd .

### "Overview of agent policies for the Ops Agent \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-policies-overview)
- Source ID: `site-iam-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Supported operating systems You can apply an agent policy to Compute Engine VM instances running the operating systems shown in the following table: Operating system Ops Agent (GA & beta † policies) Logging agent (beta † policies only) Monitoring agent (beta † policies only) CentOS 8 Rocky Linux 8 RHEL 6 RHEL 7: rhel-7, rhel-7-6-sap-ha, rhel-7-7-sap-ha, rhel-7-9-sap-ha ‡ RHEL 8: rhel-8, rhel-8-4-sap-ha, rhel-8-6-sap-ha, rhel-8-8-sap-ha ‡ Debian 9 (Stretch) Debian 11 (Bullseye) Deep Learning VM Images based on Debian 11 (Bullseye) Ubuntu LTS 18.04 (Bionic Beaver): ubuntu-1804-lts, ubuntu-minimal-1804-lts Ubuntu LTS 20.04 (Focal Fossa): ubuntu-2004-lts, ubuntu-minimal-2004-lts Ubuntu LTS 22.04 (Jammy Jellyfish): buntu-2204-lts, ubuntu-minimal-2204-lts SLES 12: sles-12, sles-12-sp5-sap SLES 15: sles-15, sles-15-sp2-sap, sles-15-sp3-sap, sles-15-sp4-sap, sles-15-sp5-sap, sles-15-sp6-sap OpenSUSE Leap 15: opensuse-leap (opensuse-leap-15-3- , opensuse-leap-15-4- ) Windows Server: 2016, 2019, 2022, Core 2016, Core 2019, Core 2022 † In beta agent policies, the agent columns map to an agent type specified to the gcloud beta compute instances ops-agents policies create invocation: Ops Agent maps to agent type ops-agent .
- Home Documentation Observability Cloud Monitoring Guides Send feedback Overview of agent policies for the Ops Agent Stay organized with collections Save and categorize content based on your preferences.
- The ops-agent-policy Terraform module Support for the legacy Monitoring agent and Logging agent Beta agent policies can manage the legacy Monitoring agent and Logging agent as well as the Ops Agent.
- Monitoring agent maps to agent type metrics . ‡ The Monitoring agent is not supported on rhel-7-9-sap-ha , rhel-8-2-sap-ha , or rhel-8-4-sap-ha .

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Prometheus metrics in Cloud Monitoring You can use the tools provided by Cloud Monitoring with the data collected by the Prometheus receiver.
- Some of the meta labels are relabelled for you by the default Ops Agent configuration. relabel configs: - source labels: [ meta gce zone] regex: '(.+)' replacement: '${1}' target label: zone The Prometheus receiver shown in Example: Configure the Ops Agent for Prometheus includes the addition of this label.
- Compute Engine meta labels available during relabeling When the Ops Agent scrapes metrics, it includes a set of meta labels whose values are based on the configuration of the Compute Engine VM on which the agent is running.
- For information on the existing integrations with the Ops Agent, see Monitoring third-party applications .

