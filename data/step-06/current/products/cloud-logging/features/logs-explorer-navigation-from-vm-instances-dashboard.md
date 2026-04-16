---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.435Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Explorer Navigation from VM Instances Dashboard"
feature_slug: "logs-explorer-navigation-from-vm-instances-dashboard"
latest_feature_date: "2021-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/logging-gce-quickstart"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation"
keywords:
  - "logs"
  - "explorer"
  - "navigation"
  - "vm"
  - "instances"
  - "dashboard"
  - "compute"
  - "engine"
---

# Logs Explorer Navigation from VM Instances Dashboard

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Compute Engine VM Instances dashboard provides an Operations menu option that opens Logs Explorer.

## Extended Definition

Compute Engine VM Instances dashboard provides an Operations menu option that opens Logs Explorer.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)

## Supporting Pages

### "Quickstart: Collect logs from Apache with the Ops Agent \_|\_ Cloud Logging\

- URL: [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the APIs Required roles To get the permissions that you need to create a Compute Engine instance, install Apache, and to view metric data, ask your administrator to grant you the following IAM roles on your project: Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) Logs Viewer ( roles/logging.viewer ) Monitoring Editor ( roles/monitoring.editor ) OSPolicyAssignment Admin ( roles/osconfig.osPolicyAssignmentAdmin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- If you don't have a terminal open, then do the following: In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- If you don't have a terminal open, then do the following: In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- Install an Apache web server To install an Apache web server on your Compute Engine VM instance, do the following: On the VM instances page, locate your new VM, go to the Connect column, and then click SSH .

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- To view these logs, do the following: In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- View Compute Engine logs For certain Compute Engine resource types, such as gce instance and gce network , you see the resource name with the resource ID as subtext in several places in the Logs Explorer.
- Can't find console logs for a VM instance Logs written to the console of a Compute Engine instance might not be available in the Logs Explorer.
- View Monitoring data For certain logs, such as GKE and Compute Engine logs, you can select the resource type from the log's summary line to display a menu with the following options: View monitoring details : opens a details panel for a GKE resource.

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Ops Agent collects logs and metrics on Compute Engine instances, sending your logs to Cloud Logging and your metrics to Cloud Monitoring.
- Compute Engine In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .
- If you are running very old Compute Engine instances or if you created Compute Engine instances without the default credentials, then you might not have the proper credentials.
- Compute Engine VM instances generally have the correct credentials by default.

