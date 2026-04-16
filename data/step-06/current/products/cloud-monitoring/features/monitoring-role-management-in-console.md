---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.891Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Monitoring role management in console"
feature_slug: "monitoring-role-management-in-console"
latest_feature_date: "2022-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring"
keywords:
  - "monitoring"
  - "role"
  - "management"
  - "console"
  - "pages"
  - "can"
  - "used"
  - "manage"
---

# Monitoring role management in console

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Cloud Monitoring pages in the Google Cloud console can be used to manage Monitoring-specific roles.

## Extended Definition

Cloud Monitoring pages in the Google Cloud console can be used to manage Monitoring-specific roles.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring](https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- View summaries of metric usage To view summaries of the number of billable metrics, rates of metric ingestion, and error rate, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- View the volume of excluded metrics To see the volume of excluded bytes or samples as a chart in Metrics Explorer, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- To create an alerting policy that monitors a metric collection rate, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Delete a metric-exclusion rule To delete a metric-exclusion rule, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Enable the APIs Grant roles required to use the Ops Agent To get the permissions that you need to use the Ops Agent to write logs and metrics, ask your administrator to grant you the following IAM roles on your service account: To write logs: Logging Logs Writer ( roles/logging.logWriter ) To write metrics: Monitoring Metric Writer ( roles/monitoring.metricWriter ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Grant roles required to use VM Extension Manager To get the permissions that you need to create, view, modify, and delete VM extension policies, ask your administrator to grant you the following IAM roles on the project: To create extension policies: VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) To view extension policies: VM Extension Policy Viewer ( roles/compute.vmExtensionPolicyViewer ) VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) To modify extension policies: VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) To delete extension policies: VM Extension Policy Admin ( roles/compute.vmExtensionPolicyAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- If you haven't done so already, install the beta component of the gcloud CLI by running the following command: gcloud components install beta To check if you have the beta component installed, run the following command: gcloud components list If you previously installed the beta component, verify that have the latest version: gcloud components update Uninstall any observability agents Before creating a VM Extension Manager policy to manage the Ops Agent on a VM, ensure that there are no instances of the Ops Agent or the legacy Monitoring agent and Logging agent already on the VM.
- Verify the installation of the Ops Agent This section describes how to do the following: Verify the status or version of an Ops Agent installation Verify that the Ops Agent is collecting telemetry Verify the status or version of an Ops Agent installation To determine the status or version of the Ops Agent, use one of the following Google Cloud console pages: Compute Engine In the Google Cloud console, go to the VM instances page: Go to VM instances If you use the search bar to find this page, then select the result whose subheading is Compute Engine .

### Troubleshoot Application Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring](https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To get the permissions that you need to save changes to a custom dashboard, ask your administrator to grant you the Monitoring Editor ( roles/monitoring.editor ) IAM role on your App Hub host project or the management project for your app-enabled folder.
- To resolve this failure, do the following: To get the permissions that you need to view log data, ask your administrator to grant you the following IAM roles: Logs Viewer ( roles/logging.viewer ) on your App Hub host project or the management project for your app-enabled folder and any other projects listed its default log scope.
- Logs View Accessor ( roles/logging.viewAccessor ) on the log views listed in the default log scope of your App Hub host project or the management project for your app-enabled folder.
- In the toolbar of the Google Cloud console, select your App Hub host project or the management project for your app-enabled folder.

