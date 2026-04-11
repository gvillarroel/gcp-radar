---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:10:13.960Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner VM percentile usage and forecast view"
feature_slug: "capacity-planner-vm-percentile-usage-and-forecast-view"
latest_feature_date: "2023-09-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/overview"
  - "https://docs.cloud.google.com/capacity-planner/docs/export-data"
keywords:
  - "percentile"
  - "forecast"
  - "view"
  - "capacity"
  - "planner"
  - "vm"
  - "usage"
  - "and"
---

# Capacity Planner VM percentile usage and forecast view

Product: Capacity Planner
Coverage: LOW

## Step 02 Summary

Capacity Planner provides the 50th and 75th percentile usage and forecast views for virtual machines.

## Extended Definition

Capacity Planner provides the 50th and 75th percentile usage and forecast views for virtual machines.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview)
- [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 280
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Limitations Before you view usage and forecast data in Capacity Planner, consider the following: Forecast data isn't supported for the following resources: Spot VMs (including the instances and any attached resources, such as GPUs and TPUs) Cloud Storage buckets Usage data for Spot VMs and preemptible quota is only available for instances, GPUs, and TPUs.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view the usage and forecast data of your resources: To view forecast data: capacityplanner.forecasts.list on the project, folder, or organization To view historical usage data: capacityplanner.usageHistories.list on the project, folder, or organization To summarize the historical usage data: capacityplanner.usageHistories.summarize on the project, folder, or organization You might also be able to get these permissions with custom roles or other predefined roles .
- View the forecast and usage of your resources View the usage and forecast data about the compute instances, Persistent Disk volumes, GPUs, and TPUs in your project, folder, or organization by using the following methods: View the forecast and usage of your resources using the Google Cloud console (Recommended) View the forecast and usage of your resources using the Capacity Planner API View the forecast and usage of your resources using the Google Cloud console To view the forecast and usage of your resources using the Google Cloud console, complete the following steps.
- To view usage and forecast data for specific types of resources in specific regions and zones, review the pages in the Usage & forecast section as follows: In the Usage & forecast section of the Capacity Planner navigation menu, select a page based on the type of resource that you want to view data for: To view data for instances, open the Virtual machine page.

### Capacity Planner overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview)
- Source ID: `site-api-reference`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use Capacity Planner to view the current and forecasted usage of the following resources in your Google Cloud project, folder, or organization: Compute Engine instances Persistent Disk and Hyperdisk volumes GPUs TPUs Cloud Storage buckets Use cases Capacity Planner helps you plan for future capacity and quota needs by letting you do the following: View data that helps you predict the future requirements for resources and allocation quotas across your project, folder, or organization.
- For example, if you want to start learning how to use Capacity Planner by viewing usage and forecast data, consider requesting the Capacity Planner Viewer ( roles/capacityplanner.viewer ) role on the project.
- How Capacity Planner works The following sections outline how Capacity Planner calculates and displays usage data and statistical forecasts for the compute instances, Persistent Disk and Hyperdisk volumes, GPUs, and TPUs in your project, folder, or organization.
- What's next View usage and forecast data Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Export data to your local workstation \_|\_ Capacity Planner \_|\_ Google\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to export usage and forecast data of your resources: To view forecasted usage data: capacityplanner.forecasts.list on the project, folder, or organization To view historical usage data: capacityplanner.usageHistories.list on the project, folder, or organization To summarize the usage of your resources: capacityplanner.usageHistories.summarize on the project, folder, or organization You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to export usage and forecast data of your resources, ask your administrator to grant you the following IAM roles on your project, folder, or organization: To access and view Capacity Planner: Capacity Planner Viewer ( roles/capacityplanner.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- You can export data from Capacity Planner as a CSV file for the following resources: Compute Engine instances Persistent Disk and Hyperdisk volumes GPUs TPUs Reservations Cloud Storage buckets To learn more about the data that's available from Capacity Planner, data limitations, and how you can use this data, see View usage and forecast data .
- To export data, first select the resource that you want to export, and filter the data by the following: Compute instances, CPU cores, or GPUs Region or zone Usage percentile To export usage and forecast data of your instances filtered by machine family or GPU type, do the following: In the Google Cloud console, open Capacity Planner.

