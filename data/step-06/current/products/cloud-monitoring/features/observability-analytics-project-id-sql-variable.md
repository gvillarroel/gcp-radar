---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.074Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Observability Analytics project ID SQL variable"
feature_slug: "observability-analytics-project-id-sql-variable"
latest_feature_date: "2026-03-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
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
Coverage: LOW

## Step 02 Summary

Observability Analytics SQL queries can use a system-defined variable that resolves to the project ID.

## Extended Definition

Observability Analytics SQL queries can use a system-defined variable that resolves to the project ID.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)

## Supporting Pages

### Monitoring release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/release-notes](https://docs.cloud.google.com/monitoring/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- March 02, 2026 Feature The SQL queries issued by Observability Analytics can now use a system-defined variable which resolves to the project ID.
- For more information, see the following documents: Create and manage variables and pinned filters Apply a variable to a widget October 24, 2024 Feature You can now create alerting policies that monitor the results of your SQL queries.
- February 20, 2025 Feature When you add an Observability Analytics widget to a custom Cloud Monitoring dashboard, you can now select other log views and analytics views to query in the Views & Schema section.
- If a dashboard template uses the project ID variable, then you don't need to update the SQL query after installing the template.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- For example, suppose you created and rolled out a global policy by using the following command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" To extend the policy to VMs created in previously unused zones, restart the rollout by using the following command: gcloud beta compute global-vm-extension-policies update test-policy POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" \ --rollout-retry-uuid= UUID Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- Install the Ops Agent with a fast rollout plan at higher priority (global only) To create a global policy that installs the latest version of the Ops Agent on by using a higher-than-default priority and the fast-rollout plan , use the following gcloud beta compute global-vm-extension-policies create command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-predefined-plan=fast rollout \ --priority=500 Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- To update an extension policy that uses a custom rollout plan, use the following gcloud beta compute global-vm-extension-policies update command: gcloud beta compute global-vm-extension-policies update POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-custom-plan=projects/ PROJECT ID /locations/global/rolloutPlans/ NEW CUSTOM PLAN NAME \ --rollout-retry-uuid= UUID Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- Global Use the --inclusion-labels option to the gcloud beta compute global-vm-extension-policies create command to specify a comma-separated list of key-value pairs: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-predefined-plan=slow rollout \ --inclusion-labels= KEY1 = VALUE1 , KEY2 = VALUE2 Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- When you use an app-enabled folder, the Google Cloud console automatically resets the resource picker from an app-enabled folder to the folder's management project when you navigate to a Google Cloud Observability page.
- Home Documentation Observability Cloud Monitoring Guides Send feedback View application telemetry Stay organized with collections Save and categorize content based on your preferences.
- This section describes how you can use options on a dashboard or on a widget, like a chart, to get more information about the data that is shown.
- These dashboards display telemetry data and incident information, and they can help you understand the health of a specific service or workload.

