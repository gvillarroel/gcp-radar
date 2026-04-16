---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.776Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner quota adjuster for Compute Engine"
feature_slug: "capacity-planner-quota-adjuster-for-compute-engine"
latest_feature_date: "2023-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster"
keywords:
  - "automatic quota increase requests"
  - "quota increase automation"
  - "auto quota adjuster"
  - "quota near limit"
  - "Compute Engine quota adjuster"
  - "quota adjuster"
---

# Capacity Planner quota adjuster for Compute Engine

Product: Capacity Planner
Coverage: MEDIUM

## Step 02 Summary

Capacity Planner can enable a quota adjuster for Compute Engine resources that automatically submits quota increase requests when usage nears quota limits.

## Extended Definition

The Capacity Planner quota adjuster is a project-level feature that can be enabled or disabled to manage Compute Engine quota operations within Capacity Planner. It requires permissions to view forecasted and historical Compute Engine usage, summarize that usage, access project quota information, and get or update quota-adjuster settings in Cloud Quotas, and Google states it can only be enabled when the project has sufficient usage data. The provided excerpts do not explicitly confirm the exact automation trigger conditions (for example, “near quota limit”) or exact request-submission mechanics.

## Evidence Summary

The cited page provides the enablement conditions, required permissions, and IAM roles needed to manage the Compute Engine quota adjuster, including how to view usage/forecast data and read or update quota settings.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster](https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster)

## Supporting Pages

### Enable the quota adjuster \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster](https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage the quota adjuster in Capacity Planner: To view the forecasted usage of your Compute Engine resources: capacityplanner.forecasts.list on the project To view the usage of your Compute Engine resources: capacityplanner.usageHistories.list on the project To summarize the usage of your Compute Engine resources: capacityplanner.usageHistories.summarize on the project To view the quota adjuster settings: cloudquotas.quotas.get on the project To enable or disable the quota adjuster: cloudquotas.quotas.update on the project To access your project's quota usage: monitoring.timeseries.list on the project To view your project's quota: serviceusage.quotas.get on the project serviceusage.services.get on the project You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to manage the quota adjuster in Capacity Planner, ask your administrator to grant you the following IAM roles on your project: To access and view Capacity Planner: Capacity Planner Viewer ( roles/capacityplanner.viewer ) To access and manage the quota adjuster in your project: Quota Administrator ( roles/servicemanagement.quotaAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Limitations Before you enable the quota adjuster in your project, consider the following limitations: You can enable the quota adjuster in your project only if your project has sufficient usage data.
- Home Documentation Compute Compute Engine Capacity Planner Guides Send feedback Enable the quota adjuster Stay organized with collections Save and categorize content based on your preferences.

### Resources \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/resources](https://docs.cloud.google.com/capacity-planner/docs/resources)
- Source ID: `site-api-reference`
- Final score: 54
- Re-rank relevance: N/A

### "Create future reservation requests \_|\_ Capacity Planner \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

