---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.136Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "VM dashboard recommended alerts"
feature_slug: "vm-dashboard-recommended-alerts"
latest_feature_date: "2020-08-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/monitoring/installation"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/installation"
keywords:
  - "vm"
  - "dashboard"
  - "recommended"
  - "alerts"
  - "the"
  - "instances"
  - "includes"
  - "button"
---

# VM dashboard recommended alerts

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

The VM Instances dashboard includes a Recommended Alerts button to configure fleet-wide alerts.

## Extended Definition

The VM Instances dashboard includes a Recommended Alerts button to configure fleet-wide alerts.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- You can also use the Recommended Alerts button on the dashboard to configure fleet-wide alerts.
- October 09, 2023 Change When you install the Ops Agent on a Compute Engine VM by using the Cloud Monitoring VM Instances dashboard or the Observability tab on a Compute Engine VM details page, the agent is now installed with an Ops Agent OS policy.
- January 18, 2022 Change When you click on an entry in the Instances table on the Monitoring VM Instances dashboard, a sliding panel now appears with the instance details, replacing the VM Instance Details page.
- May 03, 2021 Feature The Inventory tab on the Cloud Monitoring VM Instances dashboard now offers the ability to filter and sort the instance table by any combination of columns.

### "Installing the Cloud Monitoring agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/monitoring/agent/monitoring/installation](https://docs.cloud.google.com/monitoring/agent/monitoring/installation)
- Source ID: `site-iam-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- The List view on the Inventory tab on the dashboard lists all VMs and includes a status column for your agent, as shown in the following screenshot: The Agent column reports the following values: Not detected : Either you don't have an agent installed or it is not running.
- To reach this dashboard, do the following: In the Google Cloud console, go to the VM Instances page: Go to VM Instances If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Viewing agent information by using the Google Cloud console You can find status information about the agent on the pre-configured Monitoring VM Instances dashboard.
- Using the agent is optional but recommended for Compute Engine VM instances.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Monitoring \_|\_\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/installation](https://docs.cloud.google.com/monitoring/agent/ops-agent/installation)
- Source ID: `site-iam-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- However, the status might be inaccurate if the VM lacks necessary access scopes or if the associated service account has insufficient IAM roles. gcpdiag : gcpdiag provides more reliable and robust information about agent status than the VM Instances dashboard, verifying both agent installation and transmission of telemetry from the VM.
- The List view on the Inventory tab on the dashboard lists all VMs and includes a status column for your agent, as shown in the following screenshot: The Agent column reports the following values: Not detected : Either you don't have an agent installed or it is not running.
- Verify that the Ops Agent is running To verify that the Ops Agent is running, you can use either of the following: VM Instances dashboard : This dashboard lets you view the agent installation status across your VM fleet.
- Use VM Instances dashboard In the Google Cloud console, go to the VM Instances page: Go to VM Instances If you use the search bar to find this page, then select the result whose subheading is Monitoring .

