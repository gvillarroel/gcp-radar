---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:10:13.958Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner historical VM usage analytics"
feature_slug: "capacity-planner-historical-vm-usage-analytics"
latest_feature_date: "2023-09-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/release-notes"
  - "https://docs.cloud.google.com/capacity-planner/docs/choose-request-method"
keywords:
  - "analytics"
  - "exposes"
  - "historical"
  - "capacity"
  - "planner"
  - "vm"
  - "usage"
  - "for"
---

# Capacity Planner historical VM usage analytics

Product: Capacity Planner
Coverage: LOW

## Step 02 Summary

Capacity Planner exposes historical usage data for virtual machines for up to two years.

## Extended Definition

Capacity Planner exposes historical usage data for virtual machines for up to two years.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/release-notes](https://docs.cloud.google.com/capacity-planner/docs/release-notes)
- [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view the usage and forecast data of your resources: To view forecast data: capacityplanner.forecasts.list on the project, folder, or organization To view historical usage data: capacityplanner.usageHistories.list on the project, folder, or organization To summarize the historical usage data: capacityplanner.usageHistories.summarize on the project, folder, or organization You might also be able to get these permissions with custom roles or other predefined roles .
- Limitations Before you view usage and forecast data in Capacity Planner, consider the following: Forecast data isn't supported for the following resources: Spot VMs (including the instances and any attached resources, such as GPUs and TPUs) Cloud Storage buckets Usage data for Spot VMs and preemptible quota is only available for instances, GPUs, and TPUs.
- Data availability and updates When you view usage and forecast data in Capacity Planner, consider the following: Capacity Planner data is available as follows: Historical usage data : historical usage data is available for up to the past two years with the following exceptions: For reservations, historical usage data isn't available before August 1, 2024.
- Go to Capacity Planner In the Usage & forecast section of the Capacity Planner navigation menu, select one of the following resource types: Virtual Machines Disk GPU TPU On the Usage and forecast chart of the resource, click Forecast Options and then follow these steps: Click the Show Historical Forecast on chart toggle to the on position.

### Capacity Planner release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/release-notes](https://docs.cloud.google.com/capacity-planner/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following: Capacity Planner overview View usage and forecast data in Capacity Planner Export usage and forecast with the Google Cloud console Export usage and forecast with the Capacity Planner API Reserve capacity in Capacity Planner December 19, 2024 Feature Preview : You can create future reservation requests for VMs of a single machine type using the Google Cloud console.
- For more information, see the following: Export usage and forecast with the Google Cloud console Export usage and forecast with the Capacity Planner API View usage and forecast data in Capacity Planner September 05, 2024 Feature Preview : You can use the Capacity Planner API to export usage and forecast data of the VMs, Persistent Disk volumes, or GPUs in your project, folder, or organization.
- For more information, see the following pages: About Capacity Planner Export usage and forecast data in Capacity Planner View actual and forecasted usage in Capacity Planner March 28, 2024 Feature Preview : Capacity planner supports the following for data aggregated by organization ID: View and export the actual and forecasted usage data of the VMs and persistent disks in your organization.
- October 03, 2025 Feature Preview: Capacity Planner supports the following: Usage and forecast data for Hyperdisk volumes Usage and forecast data for Persistent Disk and Hyperdisk volume IOPS and throughput Usage data for Spot VMs and TPUs that are attached to Spot VMs For more information, see View usage and forecast data .

### "Create future reservation requests \_|\_ Capacity Planner \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create future reservation requests: To create future reservation requests: compute.futureReservations.create on the owner project To let Compute Engine auto-create reservations: compute.reservations.create on the owner project To view the forecasted usage of your instances or GPUs: capacityplanner.forecasts.list on the project, folder, or organization To view the actual usage of your instances or GPUs: capacityplanner.usageHistories.list on the project, folder, or organization To summarize the actual usage of your instances or GPUs: capacityplanner.usageHistories.summarize on the project, folder, or organization You might also be able to get these permissions with custom roles or other predefined roles .
- Select one of the following Compute Engine resources: Compute instances In the Usage & forecast section of the Capacity Planner navigation menu, click to open the Virtual machine page.
- GPUs In the Usage & forecast section of the Capacity Planner navigation menu, click to open the GPU page.
- Required roles To get the permissions that you need to create future reservation requests, ask your administrator to grant you the following IAM roles: To access and view Capacity Planner: Capacity Planner Viewer ( roles/capacityplanner.viewer ) on the project, folder, or organization To create future reservation requests: Compute Future Reservation User ( roles/compute.futureReservationUser ) on the owner project For more information about granting roles, see Manage access to projects, folders, and organizations .

