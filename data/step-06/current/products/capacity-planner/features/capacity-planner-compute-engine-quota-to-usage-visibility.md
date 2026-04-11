---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:10:13.953Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner Compute Engine quota-to-usage visibility"
feature_slug: "capacity-planner-compute-engine-quota-to-usage-visibility"
latest_feature_date: "2023-12-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster"
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/release-notes"
keywords:
  - "visibility"
  - "quota"
  - "compute"
  - "engine"
  - "capacity"
  - "planner"
  - "usage"
  - "to"
---

# Capacity Planner Compute Engine quota-to-usage visibility

Product: Capacity Planner
Coverage: LOW

## Step 02 Summary

Capacity Planner preview shows Compute Engine quota in relation to resource usage to support quota adjustment and capacity planning.

## Extended Definition

Capacity Planner preview shows Compute Engine quota in relation to resource usage to support quota adjustment and capacity planning.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster](https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/release-notes](https://docs.cloud.google.com/capacity-planner/docs/release-notes)

## Supporting Pages

### Enable the quota adjuster \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster](https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage the quota adjuster in Capacity Planner: To view the forecasted usage of your Compute Engine resources: capacityplanner.forecasts.list on the project To view the usage of your Compute Engine resources: capacityplanner.usageHistories.list on the project To summarize the usage of your Compute Engine resources: capacityplanner.usageHistories.summarize on the project To view the quota adjuster settings: cloudquotas.quotas.get on the project To enable or disable the quota adjuster: cloudquotas.quotas.update on the project To access your project's quota usage: monitoring.timeseries.list on the project To view your project's quota: serviceusage.quotas.get on the project serviceusage.services.get on the project You might also be able to get these permissions with custom roles or other predefined roles .
- What's next Quotas and limits for Compute Engine Audit logging information for Capacity Planner Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Compute Compute Engine Capacity Planner Guides Send feedback Enable the quota adjuster Stay organized with collections Save and categorize content based on your preferences.
- Required roles To get the permissions that you need to manage the quota adjuster in Capacity Planner, ask your administrator to grant you the following IAM roles on your project: To access and view Capacity Planner: Capacity Planner Viewer ( roles/capacityplanner.viewer ) To access and manage the quota adjuster in your project: Quota Administrator ( roles/servicemanagement.quotaAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- View the forecast and usage of your resources View the usage and forecast data about the compute instances, Persistent Disk volumes, GPUs, and TPUs in your project, folder, or organization by using the following methods: View the forecast and usage of your resources using the Google Cloud console (Recommended) View the forecast and usage of your resources using the Capacity Planner API View the forecast and usage of your resources using the Google Cloud console To view the forecast and usage of your resources using the Google Cloud console, complete the following steps.
- Limitations Before you view usage and forecast data in Capacity Planner, consider the following: Forecast data isn't supported for the following resources: Spot VMs (including the instances and any attached resources, such as GPUs and TPUs) Cloud Storage buckets Usage data for Spot VMs and preemptible quota is only available for instances, GPUs, and TPUs.
- Home Documentation Compute Compute Engine Capacity Planner Guides Send feedback View usage and forecast data Stay organized with collections Save and categorize content based on your preferences.
- You can use data about compute resources to help optimize your resource usage and plan for future capacity and quota needs in your project, folder, or organization.

### Capacity Planner release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/release-notes](https://docs.cloud.google.com/capacity-planner/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following pages: About Capacity Planner Export usage and forecast data in Capacity Planner Reserve capacity from actual or forecasted usage View actual and forecasted usage in Capacity Planner December 15, 2023 Feature Preview : When using Capacity Planner, you can enable quota adjuster for the Compute Engine resources in your project.
- Your quota in relation to the usage of your Compute Engine resources.
- For more information, see the following: Export usage and forecast with the Google Cloud console Export usage and forecast with the Capacity Planner API View usage and forecast data in Capacity Planner September 05, 2024 Feature Preview : You can use the Capacity Planner API to export usage and forecast data of the VMs, Persistent Disk volumes, or GPUs in your project, folder, or organization.
- October 03, 2025 Feature Preview: Capacity Planner supports the following: Usage and forecast data for Hyperdisk volumes Usage and forecast data for Persistent Disk and Hyperdisk volume IOPS and throughput Usage data for Spot VMs and TPUs that are attached to Spot VMs For more information, see View usage and forecast data .

