---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:10:13.935Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner Spot VM usage data"
feature_slug: "capacity-planner-spot-vm-usage-data"
latest_feature_date: "2025-10-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/release-notes"
  - "https://docs.cloud.google.com/capacity-planner/docs/choose-request-method"
keywords:
  - "spot"
  - "supports"
  - "capacity"
  - "preview"
  - "planner"
  - "vm"
  - "usage"
  - "for"
---

# Capacity Planner Spot VM usage data

Product: Capacity Planner
Coverage: LOW

## Step 02 Summary

Capacity Planner preview supports usage data for Spot VMs.

## Extended Definition

Capacity Planner preview supports usage data for Spot VMs.

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
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Limitations Before you view usage and forecast data in Capacity Planner, consider the following: Forecast data isn't supported for the following resources: Spot VMs (including the instances and any attached resources, such as GPUs and TPUs) Cloud Storage buckets Usage data for Spot VMs and preemptible quota is only available for instances, GPUs, and TPUs.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view the usage and forecast data of your resources: To view forecast data: capacityplanner.forecasts.list on the project, folder, or organization To view historical usage data: capacityplanner.usageHistories.list on the project, folder, or organization To summarize the historical usage data: capacityplanner.usageHistories.summarize on the project, folder, or organization You might also be able to get these permissions with custom roles or other predefined roles .
- Usage and forecast by disk type : on the Disk page, this graph shows the history, forecast, and quota for your Hyperdisk and Persistent Disk volumes, filtered by the following: Disk type Confidentiality mode, which only appears if you use confidential mode for Hyperdisk balanced Location Resource type, which is one of the following: Storage IOPS Throughput Usage and forecast by GPU type : on the GPU page, this graph shows the usage, forecast, reservations (if any), and quota for your GPUs, filtered by the following: GPU type or machine type Location You can also show or hide data for reservations and Spot VMs.
- View the forecast and usage of your resources View the usage and forecast data about the compute instances, Persistent Disk volumes, GPUs, and TPUs in your project, folder, or organization by using the following methods: View the forecast and usage of your resources using the Google Cloud console (Recommended) View the forecast and usage of your resources using the Capacity Planner API View the forecast and usage of your resources using the Google Cloud console To view the forecast and usage of your resources using the Google Cloud console, complete the following steps.

### Capacity Planner release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/release-notes](https://docs.cloud.google.com/capacity-planner/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- October 03, 2025 Feature Preview: Capacity Planner supports the following: Usage and forecast data for Hyperdisk volumes Usage and forecast data for Persistent Disk and Hyperdisk volume IOPS and throughput Usage data for Spot VMs and TPUs that are attached to Spot VMs For more information, see View usage and forecast data .
- For more information, see the following pages: About Capacity Planner Export usage and forecast data in Capacity Planner View actual and forecasted usage in Capacity Planner March 28, 2024 Feature Preview : Capacity planner supports the following for data aggregated by organization ID: View and export the actual and forecasted usage data of the VMs and persistent disks in your organization.
- July 29, 2024 Feature Preview : Capacity planner supports the following for data aggregated by folder ID: View and export the actual and forecasted usage data of the VMs, Persistent Disk volumes, and GPUs in your folder.
- For more information, see the following: Capacity Planner overview View usage and forecast data in Capacity Planner Export usage and forecast with the Google Cloud console Export usage and forecast with the Capacity Planner API Reserve capacity in Capacity Planner December 19, 2024 Feature Preview : You can create future reservation requests for VMs of a single machine type using the Google Cloud console.

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

