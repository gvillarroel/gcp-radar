---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.956Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "GKE dashboard SLO management"
feature_slug: "gke-dashboard-slo-management"
latest_feature_date: "2021-04-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/metrics-management"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring"
keywords:
  - "gke"
  - "dashboard"
  - "slo"
  - "management"
  - "operations"
  - "monitoring"
  - "can"
  - "manage"
---

# GKE dashboard SLO management

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

The Cloud Operations for GKE monitoring dashboard can manage and display application service-level objectives.

## Extended Definition

The Cloud Operations for GKE monitoring dashboard can manage and display application service-level objectives.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)

## Supporting Pages

### View and manage metric usage \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- View summaries of metric usage To view summaries of the number of billable metrics, rates of metric ingestion, and error rate, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- View the volume of excluded metrics To see the volume of excluded bytes or samples as a chart in Metrics Explorer, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- To create an alerting policy that monitors a metric collection rate, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .
- Delete a metric-exclusion rule To delete a metric-exclusion rule, do the following: In the Google Cloud console, go to the query stats Metrics management page: Go to Metrics management If you use the search bar to find this page, then select the result whose subheading is Monitoring .

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- If you haven't done so already, install the beta component of the gcloud CLI by running the following command: gcloud components install beta To check if you have the beta component installed, run the following command: gcloud components list If you previously installed the beta component, verify that have the latest version: gcloud components update Uninstall any observability agents Before creating a VM Extension Manager policy to manage the Ops Agent on a VM, ensure that there are no instances of the Ops Agent or the legacy Monitoring agent and Logging agent already on the VM.
- Enable the APIs Grant roles required to use the Ops Agent To get the permissions that you need to use the Ops Agent to write logs and metrics, ask your administrator to grant you the following IAM roles on your service account: To write logs: Logging Logs Writer ( roles/logging.logWriter ) To write metrics: Monitoring Metric Writer ( roles/monitoring.metricWriter ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- When you provide a custom configuration for the Ops Agent, VM Extension Manager copies the configuration to the location used by the Ops Agent for user-specified configuration files on the target VM: Linux: /etc/google-cloud-ops-agent/config.yaml Windows: C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.yaml If there is a config.yaml file present on the VM, the extension policy overwrites it.
- When you provide a custom configuration for the Ops Agent, VM Extension Manager copies the configuration to the location used by the Ops Agent for user-specified configuration files on the target VM: Linux: /etc/google-cloud-ops-agent/config.yaml Windows: C:\Program Files\Google\Cloud Operations\Ops Agent\config\config.yaml If there is a config.yaml file present on the VM, the extension policy overwrites it.

### "Set up Google Cloud Observability for Application Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Only configure scopes To get the permissions that you need to configure the observability scope, ask your administrator to grant you the following IAM roles: Observability Editor ( roles/observability.editor ) on your App Hub host project or management project Logs Configuration Writer ( roles/logging.configWriter ) on your App Hub host project or management project Monitoring admin ( roles/monitoring.admin ) on your App Hub host project or management project and on each project that you want to add to the metrics scope Cloud Trace User ( roles/cloudtrace.user ) on your App Hub host project or management project App Hub viewer ( roles/apphub.viewer ) on your App Hub host project or management project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Monitoring Editor role ( roles/monitoring.editor ) on your App Hub host project or management project.
- Configure the metrics scope Make sure that the metrics scope for your App Hub host project or management project lists all projects that store your application's metric data: For app-enabled folders, Google Cloud Observability attempts to synchronize the list of projects in your app-enabled folder with the list of projects in the metrics scope.
- If you are using an app-enabled folder and if you don't have an organization-level aggregated sink or nested folders, then we recommend following: Create an intercepting aggregated sink for your app-enabled folder , and route those logs to the Default log bucket of the management project for your app-enabled folder.

