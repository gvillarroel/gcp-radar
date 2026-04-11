---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:10:13.939Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner machine type and TPU usage/forecast export"
feature_slug: "capacity-planner-machine-type-and-tpu-usage-forecast-export"
latest_feature_date: "2025-05-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/export-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/choose-request-method"
keywords:
  - "type"
  - "tpu"
  - "machine"
  - "forecast"
  - "capacity"
  - "planner"
  - "usage"
  - "and"
---

# Capacity Planner machine type and TPU usage/forecast export

Product: Capacity Planner
Coverage: LOW

## Step 02 Summary

Capacity Planner preview allows viewing and exporting usage and forecast data for machine types and TPUs across project, folder, or organization scopes.

## Extended Definition

Capacity Planner preview allows viewing and exporting usage and forecast data for machine types and TPUs across project, folder, or organization scopes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Go to Capacity Planner In the Usage & forecast section of the Capacity Planner navigation menu, select one of the following resource types: Virtual Machines Disk GPU TPU On the Usage and forecast chart of the resource, click Forecast Options and then follow these steps: Click the Show Historical Forecast on chart toggle to the on position.
- To view usage and forecast data for specific types of resources in specific regions and zones, review the pages in the Usage & forecast section as follows: In the Usage & forecast section of the Capacity Planner navigation menu, select a page based on the type of resource that you want to view data for: To view data for instances, open the Virtual machine page.
- View the forecast and usage of your resources View the usage and forecast data about the compute instances, Persistent Disk volumes, GPUs, and TPUs in your project, folder, or organization by using the following methods: View the forecast and usage of your resources using the Google Cloud console (Recommended) View the forecast and usage of your resources using the Capacity Planner API View the forecast and usage of your resources using the Google Cloud console To view the forecast and usage of your resources using the Google Cloud console, complete the following steps.
- Limitations Before you view usage and forecast data in Capacity Planner, consider the following: Forecast data isn't supported for the following resources: Spot VMs (including the instances and any attached resources, such as GPUs and TPUs) Cloud Storage buckets Usage data for Spot VMs and preemptible quota is only available for instances, GPUs, and TPUs.

### "Export data to your local workstation \_|\_ Capacity Planner \_|\_ Google\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To export data, first select the resource that you want to export, and filter the data by the following: Compute instances, CPU cores, or GPUs Region or zone Usage percentile To export usage and forecast data of your instances filtered by machine family or GPU type, do the following: In the Google Cloud console, open Capacity Planner.
- To export data, first select the page for the resource that you want to export, and then filter the data by the following: Resource type Region or zone Usage percentile To export usage and forecast data about your instances, Persistent Disk volumes, GPUs, or TPUs, do the following: In the Google Cloud console, open Capacity Planner.
- You can export data from Capacity Planner as a CSV file for the following resources: Compute Engine instances Persistent Disk and Hyperdisk volumes GPUs TPUs Reservations Cloud Storage buckets To learn more about the data that's available from Capacity Planner, data limitations, and how you can use this data, see View usage and forecast data .
- To filter the usage data of your instances by machine family or GPU type, select one of the following options: Compute instances In the Usage & forecast section of the Capacity Planner navigation menu, click to open the Virtual machine page.

### "Create future reservation requests \_|\_ Capacity Planner \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create future reservation requests: To create future reservation requests: compute.futureReservations.create on the owner project To let Compute Engine auto-create reservations: compute.reservations.create on the owner project To view the forecasted usage of your instances or GPUs: capacityplanner.forecasts.list on the project, folder, or organization To view the actual usage of your instances or GPUs: capacityplanner.usageHistories.list on the project, folder, or organization To summarize the actual usage of your instances or GPUs: capacityplanner.usageHistories.summarize on the project, folder, or organization You might also be able to get these permissions with custom roles or other predefined roles .
- For individual machine types, select one of the following options: Console In the Usage and forecast by machine types table, select the machine type that you want to create a future reservation request for, and then click add Create future reservation .
- Click Continue . gcloud In the Usage and forecast by machine types table, select the machine types that you want to create a future reservation request for, and then click add Generate future reservation gcloud commands .
- Select one of the following Compute Engine resources: Compute instances In the Usage & forecast section of the Capacity Planner navigation menu, click to open the Virtual machine page.

