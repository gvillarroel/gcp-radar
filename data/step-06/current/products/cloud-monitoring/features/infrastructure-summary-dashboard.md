---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.135Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Infrastructure Summary dashboard"
feature_slug: "infrastructure-summary-dashboard"
latest_feature_date: "2020-08-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
keywords:
  - "infrastructure"
  - "summary"
  - "dashboard"
  - "the"
  - "provides"
  - "an"
  - "out"
  - "of"
---

# Infrastructure Summary dashboard

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The Infrastructure Summary dashboard provides an out-of-the-box fleet view for Compute Engine VMs and load balancers.

## Extended Definition

The Infrastructure Summary dashboard provides an out-of-the-box fleet view for Compute Engine VMs and load balancers.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- The summary pane for metric usage provides links to more detailed information about trends over time and links to preconfigured, customizable alerting policies for usage trends.
- For each metric, the table displays that metric's contribution to billable volume and provides links to to the alerting policies and custom dashboards associated with the metric, as shown in the following screenshot.
- The following screenshot shows an example: To see a summary of how many billable metrics are currently active in the projects in your metrics scope, refer to the the Active Metrics scorecard.
- View information about your metrics scope The set of metrics displayed in the Metrics Management page depends on the metrics scope of your project.

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- August 13, 2020 Feature The new, out-of-the-box Infrastructure Summary dashboard for Compute Engine VMs provides a single-pane-of-glass view into your VM fleet and load balancers.
- For information about dashboards, see the following: Create and manage custom dashboards Install a dashboard template Import Grafana dashboards April 09, 2025 Feature Application Monitoring lets you monitor the resources and infrastructure from the perspective of an App Hub application.
- The tab-group widget displays one member of a collection, and it provides tabs on the toolbar to let you select which member to display: Organize dashboard widgets describes grouping widgets and provides configuration information for the different types.
- For more information about filtering your dashboard, see the following documents: Add temporary filters Add and mange permanent filters and variables September 23, 2024 Change The layout of the incident detail page has been updated.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Troubleshoot extension policies This section provides information about troubleshooting the use of extension policies to manage the Ops Agent: gcloud beta compute zone-vm-extension-policies commands fail The extension policy is created, but the Ops Agent status is "not detected" Linux systemctl and Windows Service Manager don't work with the Ops Agent For information about troubleshooting the Ops Agent, see Troubleshoot the Ops Agent . gcloud beta compute zone-vm-extension-policies commands fail When a gcloud beta compute zone-vm-extension-policies command fails, the response includes troubleshooting suggestions.
- Install the Ops Agent with a fast rollout plan at higher priority (global only) To create a global policy that installs the latest version of the Ops Agent on by using a higher-than-default priority and the fast-rollout plan , use the following gcloud beta compute global-vm-extension-policies create command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-predefined-plan=fast rollout \ --priority=500 Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- Global Use the --inclusion-labels option to the gcloud beta compute global-vm-extension-policies create command to specify a comma-separated list of key-value pairs: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-predefined-plan=slow rollout \ --inclusion-labels= KEY1 = VALUE1 , KEY2 = VALUE2 Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- To view details of a specific extension policy, click the name of the policy. gcloud Zonal List VM extension policies To list information about all VM extension policies in a zone, use the gcloud beta compute zone-vm-extension-policies list : gcloud beta compute zone-vm-extension-policies list \ --project= PROJECT ID \ --zone= ZONE \ --page-size= PAGE SIZE INTEGER Replace the following variables in the command: PROJECT ID : The identifier of the project.

