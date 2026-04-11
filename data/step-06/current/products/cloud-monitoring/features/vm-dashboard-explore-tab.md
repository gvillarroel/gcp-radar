---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.135Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "VM dashboard Explore tab"
feature_slug: "vm-dashboard-explore-tab"
latest_feature_date: "2020-08-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus"
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
keywords:
  - "vm"
  - "dashboard"
  - "explore"
  - "tab"
  - "the"
  - "instances"
  - "summarizes"
  - "additional"
---

# VM dashboard Explore tab

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The VM Instances dashboard Explore tab summarizes additional metrics and links to related metric types.

## Extended Definition

The VM Instances dashboard Explore tab summarizes additional metrics and links to related metric types.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)

## Supporting Pages

### Collect Prometheus metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus](https://docs.cloud.google.com/monitoring/agent/ops-agent/prometheus)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- The following sections describe the query tools available in Cloud Monitoring with Metrics Explorer: PromQL Monitoring filters You can create Cloud Monitoring dashboards and alerting policies for your metrics.
- You can use these labels and the Prometheus receiver's relabel configs section to add additional metadata to your metrics about the VM from which they were ingested.
- The full structure of the Prometheus receiver is shown in the following: metrics: receivers: prom application: type: prometheus config: scrape configs: - job name: ' STRING ' # must be unique across all Prometheus receivers scrape interval: # duration, like 10m or 15s scrape timeout: # duration, like 10m or 15s metrics path: # resource path for metrics, default = /metrics honor timestamps: # boolean, default = false scheme: # http or https, default = http params: - STRING : STRING basic auth: username: STRING password: SECRET password file: STRING authorization: type: STRING # default = Bearer credentials: SECRET credentials file: FILENAME oauth2: OAUTH2 # See Prometheus oauth2 follow redirects: # boolean, default = true enable http2: # boolean, default = true tls config: TLS CONFIG # See Prometheus tls config proxy url: STRING static configs: STATIC CONFIG # See Prometheus static config relabel configs: RELABEL CONFIG # See Prometheus relabel config metric relabel configs: METRIC RELABEL CONFIGS # See Prometheus metric relabel configs For examples of relabeling configs, see Additional receiver configuration .
- The following meta labels are available on targets for you to use in the relabel configs section: meta gce instance id : the numeric ID of the Compute Engine instance (local) meta gce instance name : the name of the Compute Engine instance (local); the Ops Agent automatically places this value in the mutable instance name label on your metrics. meta gce machine type : full or partial URL of the machine type of the instance; the Ops Agent automatically places this value in the mutable machine type label on your metrics. meta gce metadata NAME : each metadata item of the instance meta gce network : the network URL of the instance meta gce private ip : the private IP address of the instance meta gce interface ipv4 NAME : IPv4 address of each named interface meta gce project : the Google Cloud project in which the instance is running (local) meta gce public ip : the public IP address of the instance, if present meta gce tags : comma separated list of instance tags meta gce zone : the Compute Engine zone URL in which the instance is running The values of these labels are set when the Ops Agent starts.

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- October 09, 2023 Change When you install the Ops Agent on a Compute Engine VM by using the Cloud Monitoring VM Instances dashboard or the Observability tab on a Compute Engine VM details page, the agent is now installed with an Ops Agent OS policy.
- January 18, 2022 Change When you click on an entry in the Instances table on the Monitoring VM Instances dashboard, a sliding panel now appears with the instance details, replacing the VM Instance Details page.
- May 03, 2021 Feature The Inventory tab on the Cloud Monitoring VM Instances dashboard now offers the ability to filter and sort the instance table by any combination of columns.
- December 13, 2024 Feature Reporting of the "pending" status of the Ops Agent on the Cloud Monitoring VM Instances dashboard has been refined to include additional states.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- If you haven't done so already, install the beta component of the gcloud CLI by running the following command: gcloud components install beta To check if you have the beta component installed, run the following command: gcloud components list If you previously installed the beta component, verify that have the latest version: gcloud components update Uninstall any observability agents Before creating a VM Extension Manager policy to manage the Ops Agent on a VM, ensure that there are no instances of the Ops Agent or the legacy Monitoring agent and Logging agent already on the VM.
- Verify the installation of the Ops Agent This section describes how to do the following: Verify the status or version of an Ops Agent installation Verify that the Ops Agent is collecting telemetry Verify the status or version of an Ops Agent installation To determine the status or version of the Ops Agent, use one of the following Google Cloud console pages: Compute Engine In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- Cloud Monitoring In the Google Cloud console, go to the VM Instances page: Go to VM Instances If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Additional troubleshooting information For more information about troubleshooting the creation and use of VM Extension Manager policies, see Troubleshoot VM extensions .

