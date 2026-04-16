---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:01:13.759Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Observability Analytics project ID SQL variable"
feature_slug: "observability-analytics-project-id-sql-variable"
latest_feature_date: "2026-03-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring"
keywords:
  - "observability"
  - "analytics"
  - "project"
  - "id"
  - "sql"
  - "variable"
  - "queries"
  - "can"
---

# Observability Analytics project ID SQL variable

Product: Cloud Monitoring
Coverage: MEDIUM

## Step 02 Summary

Observability Analytics SQL queries can use a system-defined variable that resolves to the project ID.

## Extended Definition

Observability Analytics SQL queries can use a system-defined variable that resolves to the project ID.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)

## Supporting Pages

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- To determine what trace data to analyze, Google Cloud Observability queries the resources listed in the default trace scope for trace data, and then retains only the data that is for projects within your application management boundary.
- When you use an app-enabled folder, the Google Cloud console automatically resets the resource picker from an app-enabled folder to the folder's management project when you navigate to a Google Cloud Observability page.
- Make sure that you've configured the observability scope of your App Hub host project or management project.
- The observability scope controls which data is available to your App Hub host project or management project.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- For example, suppose you created and rolled out a global policy by using the following command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" To extend the policy to VMs created in previously unused zones, restart the rollout by using the following command: gcloud beta compute global-vm-extension-policies update test-policy POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" \ --rollout-retry-uuid= UUID Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- Install the Ops Agent with a fast rollout plan at higher priority (global only) To create a global policy that installs the latest version of the Ops Agent on by using a higher-than-default priority and the fast-rollout plan , use the following gcloud beta compute global-vm-extension-policies create command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-predefined-plan=fast rollout \ --priority=500 Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- To update an extension policy that uses a custom rollout plan, use the following gcloud beta compute global-vm-extension-policies update command: gcloud beta compute global-vm-extension-policies update POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-custom-plan=projects/ PROJECT ID /locations/global/rolloutPlans/ NEW CUSTOM PLAN NAME \ --rollout-retry-uuid= UUID Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- Global Use the --inclusion-labels option to the gcloud beta compute global-vm-extension-policies create command to specify a comma-separated list of key-value pairs: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-predefined-plan=slow rollout \ --inclusion-labels= KEY1 = VALUE1 , KEY2 = VALUE2 Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.

### "Set up Google Cloud Observability for Application Monitoring \_|\_ Google\

- URL: [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Only configure scopes To get the permissions that you need to configure the observability scope, ask your administrator to grant you the following IAM roles: Observability Editor ( roles/observability.editor ) on your App Hub host project or management project Logs Configuration Writer ( roles/logging.configWriter ) on your App Hub host project or management project Monitoring admin ( roles/monitoring.admin ) on your App Hub host project or management project and on each project that you want to add to the metrics scope Cloud Trace User ( roles/cloudtrace.user ) on your App Hub host project or management project App Hub viewer ( roles/apphub.viewer ) on your App Hub host project or management project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Configure and set the default trace scope Do the following: For each project that will store your application's trace data, we recommend that you enable the Observability API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Configure the metrics scope Make sure that the metrics scope for your App Hub host project or management project lists all projects that store your application's metric data: For app-enabled folders, Google Cloud Observability attempts to synchronize the list of projects in your app-enabled folder with the list of projects in the metrics scope.
- When the number of projects in your app-enabled folder doesn't exceed your metrics scope quota, which defaults to 375 projects per metrics scope, then Google Cloud Observability can keep the list of projects in the metrics scope synchronized with the list of projects in your app-enabled folder.

