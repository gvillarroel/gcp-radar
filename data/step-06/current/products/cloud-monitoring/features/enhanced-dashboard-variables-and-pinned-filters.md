---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:55:18.087Z"
product_name: "Cloud Monitoring"
product_slug: "cloud-monitoring"
feature_name: "Enhanced dashboard variables and pinned filters"
feature_slug: "enhanced-dashboard-variables-and-pinned-filters"
latest_feature_date: "2024-10-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/monitoring/docs/release-notes"
  - "https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies"
  - "https://docs.cloud.google.com/monitoring/docs/application-monitoring"
keywords:
  - "enhanced"
  - "dashboard"
  - "variables"
  - "and"
  - "pinned"
  - "filters"
  - "level"
  - "filtering"
---

# Enhanced dashboard variables and pinned filters

Product: Cloud Monitoring
Coverage: LOW

## Step 02 Summary

Dashboard-level filtering supports multi-value defaults, multi-select behavior, value-only variables, and SQL-generated variable values.

## Extended Definition

Dashboard-level filtering supports multi-value defaults, multi-select behavior, value-only variables, and SQL-generated variable values.

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
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following documents: Create and manage variables and pinned filters Apply a variable to a widget October 28, 2024 Feature The capabilities for dashboard-level filtering has been enhanced.
- For more information, see the following documents: Add text to a dashboard Add sections to a dashboard Create and manage variables and pinned filters November 11, 2024 Feature Dashboard variables and dashboard-level filtering is now GA.
- For more information, see the following documents: Create and manage variables and pinned filters Configure dashboard filters and variables by using the API February 04, 2025 Feature When you create a snooze from the Incident details page, you can now apply the snooze to other incidents that have one or more of the same resource labels.
- For more information about filtering your dashboard, see the following documents: Add temporary filters Add and mange permanent filters and variables September 23, 2024 Change The layout of the incident detail page has been updated.

### "Install and manage the Ops Agent by using VM Extension Manager policies\

- URL: [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- For example, suppose you created and rolled out a global policy by using the following command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" To extend the policy to VMs created in previously unused zones, restart the rollout by using the following command: gcloud beta compute global-vm-extension-policies update test-policy POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --version=ops-agent=2.61.0 \ --rollout-predefined-plan=slow rollout \ --config-from-file=ops-agent="/usr/ops-agent-config.yaml" \ --rollout-retry-uuid= UUID Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- Install the Ops Agent with a fast rollout plan at higher priority (global only) To create a global policy that installs the latest version of the Ops Agent on by using a higher-than-default priority and the fast-rollout plan , use the following gcloud beta compute global-vm-extension-policies create command: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-predefined-plan=fast rollout \ --priority=500 Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- To update an extension policy that uses a custom rollout plan, use the following gcloud beta compute global-vm-extension-policies update command: gcloud beta compute global-vm-extension-policies update POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-custom-plan=projects/ PROJECT ID /locations/global/rolloutPlans/ NEW CUSTOM PLAN NAME \ --rollout-retry-uuid= UUID Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.
- Global Use the --inclusion-labels option to the gcloud beta compute global-vm-extension-policies create command to specify a comma-separated list of key-value pairs: gcloud beta compute global-vm-extension-policies create POLICY NAME \ --project= PROJECT ID \ --extensions=ops-agent \ --rollout-predefined-plan=slow rollout \ --inclusion-labels= KEY1 = VALUE1 , KEY2 = VALUE2 Replace the following variables in the command: POLICY NAME : A name for the VM extension policy.

### View application telemetry \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- The logging query includes any applicable variables , but it doesn't include dashboard-level filters.
- Those filters are applied at the dashboard level and can't be removed.
- For trace data, the application-level dashboard groups spans by their name and by the service or workload name, and then displays the following information in a tabular format: Span name.
- Only spans that satisfy the dashboard-level filters are shown.

