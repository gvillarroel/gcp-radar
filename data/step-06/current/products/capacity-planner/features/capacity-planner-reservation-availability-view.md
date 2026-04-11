---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:10:13.944Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner reservation availability view"
feature_slug: "capacity-planner-reservation-availability-view"
latest_feature_date: "2024-09-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/overview"
  - "https://docs.cloud.google.com/capacity-planner/docs/release-notes"
keywords:
  - "availability"
  - "reservation"
  - "adds"
  - "of"
  - "view"
  - "capacity"
  - "preview"
  - "planner"
---

# Capacity Planner reservation availability view

Product: Capacity Planner
Coverage: LOW

## Step 02 Summary

Capacity Planner preview adds a view of available on-demand reservations and future reservation requests for planning purposes.

## Extended Definition

Capacity Planner preview adds a view of available on-demand reservations and future reservation requests for planning purposes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview)
- [https://docs.cloud.google.com/capacity-planner/docs/release-notes](https://docs.cloud.google.com/capacity-planner/docs/release-notes)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Data availability and updates When you view usage and forecast data in Capacity Planner, consider the following: Capacity Planner data is available as follows: Historical usage data : historical usage data is available for up to the past two years with the following exceptions: For reservations, historical usage data isn't available before August 1, 2024.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view the usage and forecast data of your resources: To view forecast data: capacityplanner.forecasts.list on the project, folder, or organization To view historical usage data: capacityplanner.usageHistories.list on the project, folder, or organization To summarize the historical usage data: capacityplanner.usageHistories.summarize on the project, folder, or organization You might also be able to get these permissions with custom roles or other predefined roles .
- View the forecast and usage of your resources View the usage and forecast data about the compute instances, Persistent Disk volumes, GPUs, and TPUs in your project, folder, or organization by using the following methods: View the forecast and usage of your resources using the Google Cloud console (Recommended) View the forecast and usage of your resources using the Capacity Planner API View the forecast and usage of your resources using the Google Cloud console To view the forecast and usage of your resources using the Google Cloud console, complete the following steps.
- To view usage and forecast data for specific types of resources in specific regions and zones, review the pages in the Usage & forecast section as follows: In the Usage & forecast section of the Capacity Planner navigation menu, select a page based on the type of resource that you want to view data for: To view data for instances, open the Virtual machine page.

### Capacity Planner overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use Capacity Planner to view the current and forecasted usage of the following resources in your Google Cloud project, folder, or organization: Compute Engine instances Persistent Disk and Hyperdisk volumes GPUs TPUs Cloud Storage buckets Use cases Capacity Planner helps you plan for future capacity and quota needs by letting you do the following: View data that helps you predict the future requirements for resources and allocation quotas across your project, folder, or organization.
- Capacity Planner also provides an overview that summarizes the overall resource usage of your project, folder, or organization.
- This document gives an overview of Capacity Planner.
- For example, if you want to start learning how to use Capacity Planner by viewing usage and forecast data, consider requesting the Capacity Planner Viewer ( roles/capacityplanner.viewer ) role on the project.

### Capacity Planner release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/release-notes](https://docs.cloud.google.com/capacity-planner/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following: Capacity Planner overview View usage and forecast data in Capacity Planner Export usage and forecast with the Google Cloud console Export usage and forecast with the Capacity Planner API Reserve capacity in Capacity Planner December 19, 2024 Feature Preview : You can create future reservation requests for VMs of a single machine type using the Google Cloud console.
- For more information, see the following: Export usage and forecast with the Google Cloud console Export usage and forecast with the Capacity Planner API View usage and forecast data in Capacity Planner September 05, 2024 Feature Preview : You can use the Capacity Planner API to export usage and forecast data of the VMs, Persistent Disk volumes, or GPUs in your project, folder, or organization.
- For more information, see the following pages: About Capacity Planner Export usage and forecast data in Capacity Planner View actual and forecasted usage in Capacity Planner March 28, 2024 Feature Preview : Capacity planner supports the following for data aggregated by organization ID: View and export the actual and forecasted usage data of the VMs and persistent disks in your organization.
- For more information, see the following pages: About Capacity Planner Export usage and forecast data in Capacity Planner Reserve capacity from actual or forecasted usage View actual and forecasted usage in Capacity Planner July 01, 2024 Feature Preview : Capacity Planner displays GPU usage and forecasts of the GPUs in your Google Cloud project or organization.

