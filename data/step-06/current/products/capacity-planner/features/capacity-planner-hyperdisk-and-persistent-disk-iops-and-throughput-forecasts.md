---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:10:13.930Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner Hyperdisk and Persistent Disk IOPS and throughput forecasts"
feature_slug: "capacity-planner-hyperdisk-and-persistent-disk-iops-and-throughput-forecasts"
latest_feature_date: "2025-10-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/overview"
  - "https://docs.cloud.google.com/capacity-planner/docs/release-notes"
keywords:
  - "throughput"
  - "iops"
  - "hyperdisk"
  - "persistent"
  - "disk"
  - "capacity"
  - "planner"
  - "and"
---

# Capacity Planner Hyperdisk and Persistent Disk IOPS and throughput forecasts

Product: Capacity Planner
Coverage: LOW

## Step 02 Summary

Capacity Planner preview adds usage and forecast support for Hyperdisk and Persistent Disk IOPS and throughput metrics.

## Extended Definition

Capacity Planner preview adds usage and forecast support for Hyperdisk and Persistent Disk IOPS and throughput metrics.

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
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Usage and forecast by disk type : on the Disk page, this graph shows the history, forecast, and quota for your Hyperdisk and Persistent Disk volumes, filtered by the following: Disk type Confidentiality mode, which only appears if you use confidential mode for Hyperdisk balanced Location Resource type, which is one of the following: Storage IOPS Throughput Usage and forecast by GPU type : on the GPU page, this graph shows the usage, forecast, reservations (if any), and quota for your GPUs, filtered by the following: GPU type or machine type Location You can also show or hide data for reservations and Spot VMs.
- Google Cloud Hyperdisk and Persistent Disk volumes for storage, IOPS, and throughput, whether they are attached to instances or not.
- View the forecast and usage of your resources View the usage and forecast data about the compute instances, Persistent Disk volumes, GPUs, and TPUs in your project, folder, or organization by using the following methods: View the forecast and usage of your resources using the Google Cloud console (Recommended) View the forecast and usage of your resources using the Capacity Planner API View the forecast and usage of your resources using the Google Cloud console To view the forecast and usage of your resources using the Google Cloud console, complete the following steps.
- Go to Capacity Planner In the Usage & forecast section of the Capacity Planner navigation menu, select one of the following resource types: Virtual Machines Disk GPU TPU On the Usage and forecast chart of the resource, click Forecast Options and then follow these steps: Click the Show Historical Forecast on chart toggle to the on position.

### Capacity Planner overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview)
- Source ID: `site-api-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- You can use Capacity Planner to view the current and forecasted usage of the following resources in your Google Cloud project, folder, or organization: Compute Engine instances Persistent Disk and Hyperdisk volumes GPUs TPUs Cloud Storage buckets Use cases Capacity Planner helps you plan for future capacity and quota needs by letting you do the following: View data that helps you predict the future requirements for resources and allocation quotas across your project, folder, or organization.
- How Capacity Planner works The following sections outline how Capacity Planner calculates and displays usage data and statistical forecasts for the compute instances, Persistent Disk and Hyperdisk volumes, GPUs, and TPUs in your project, folder, or organization.
- Forecasts You can view the forecast of the compute instances, Persistent Disk and Hyperdisk volumes, GPUs, or TPUs in your project, folder, or organization to help you predict your future capacity needs.
- Usage data You can view the usage data of the compute instances, Persistent Disk and Hyperdisk volumes, GPUs, TPUs, or Cloud Storage buckets in your project, folder, or organization to see their consumption patterns.

### Capacity Planner release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/release-notes](https://docs.cloud.google.com/capacity-planner/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- October 03, 2025 Feature Preview: Capacity Planner supports the following: Usage and forecast data for Hyperdisk volumes Usage and forecast data for Persistent Disk and Hyperdisk volume IOPS and throughput Usage data for Spot VMs and TPUs that are attached to Spot VMs For more information, see View usage and forecast data .
- For more information, see the following: Export usage and forecast with the Google Cloud console Export usage and forecast with the Capacity Planner API View usage and forecast data in Capacity Planner September 05, 2024 Feature Preview : You can use the Capacity Planner API to export usage and forecast data of the VMs, Persistent Disk volumes, or GPUs in your project, folder, or organization.
- For more information, see the following pages: About Capacity Planner Export usage and forecast data in Capacity Planner View actual and forecasted usage in Capacity Planner March 28, 2024 Feature Preview : Capacity planner supports the following for data aggregated by organization ID: View and export the actual and forecasted usage data of the VMs and persistent disks in your organization.
- July 29, 2024 Feature Preview : Capacity planner supports the following for data aggregated by folder ID: View and export the actual and forecasted usage data of the VMs, Persistent Disk volumes, and GPUs in your folder.

