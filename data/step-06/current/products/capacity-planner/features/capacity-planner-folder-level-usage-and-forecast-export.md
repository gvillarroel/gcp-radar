---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:10:13.947Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner folder-level usage and forecast export"
feature_slug: "capacity-planner-folder-level-usage-and-forecast-export"
latest_feature_date: "2024-07-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/export-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/reference/rest"
keywords:
  - "folder"
  - "level"
  - "export"
  - "forecast"
  - "capacity"
  - "planner"
  - "usage"
  - "and"
---

# Capacity Planner folder-level usage and forecast export

Product: Capacity Planner
Coverage: LOW

## Step 02 Summary

For folder-scoped data, Capacity Planner preview supports viewing and exporting actual and forecasted usage for VMs, Persistent Disk, and GPUs.

## Extended Definition

For folder-scoped data, Capacity Planner preview supports viewing and exporting actual and forecasted usage for VMs, Persistent Disk, and GPUs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- [https://docs.cloud.google.com/capacity-planner/docs/reference/rest](https://docs.cloud.google.com/capacity-planner/docs/reference/rest)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST methods Query historical usage timeseries project-level query: v1beta projects.locations.usageHistories.query method folder-level query: v1beta folders.locations.usageHistories.query method organization-level query: v1beta organizations.locations.usageHistories.query method Query forecast timeseries project-level query: v1beta projects.locations.forecasts.query method folder-level query: v1beta folders.locations.forecasts.query method organization-level query: v1beta organizations.locations.forecasts.query method Query reservations timeseries project-level query: v1beta projects.locations.reservations.query method folder-level query: v1beta folders.locations.reservations.query method organization-level query: v1beta organizations.locations.reservations.query method What's next Export usage and forecast data Enable the quota adjuster Request capacity from actual or forecasted usage Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view the usage and forecast data of your resources: To view forecast data: capacityplanner.forecasts.list on the project, folder, or organization To view historical usage data: capacityplanner.usageHistories.list on the project, folder, or organization To summarize the historical usage data: capacityplanner.usageHistories.summarize on the project, folder, or organization You might also be able to get these permissions with custom roles or other predefined roles .
- View the forecast and usage of your resources View the usage and forecast data about the compute instances, Persistent Disk volumes, GPUs, and TPUs in your project, folder, or organization by using the following methods: View the forecast and usage of your resources using the Google Cloud console (Recommended) View the forecast and usage of your resources using the Capacity Planner API View the forecast and usage of your resources using the Google Cloud console To view the forecast and usage of your resources using the Google Cloud console, complete the following steps.
- Required roles To get the permissions that you need to view the usage and forecast data of your resources, ask your administrator to grant you the Capacity Planner Usage Viewer ( roles/capacityplanner.viewer ) IAM role on your project, folder, or organization.

### "Export data to your local workstation \_|\_ Capacity Planner \_|\_ Google\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to export usage and forecast data of your resources: To view forecasted usage data: capacityplanner.forecasts.list on the project, folder, or organization To view historical usage data: capacityplanner.usageHistories.list on the project, folder, or organization To summarize the usage of your resources: capacityplanner.usageHistories.summarize on the project, folder, or organization You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to export usage and forecast data of your resources, ask your administrator to grant you the following IAM roles on your project, folder, or organization: To access and view Capacity Planner: Capacity Planner Viewer ( roles/capacityplanner.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- You can export data from Capacity Planner as a CSV file for the following resources: Compute Engine instances Persistent Disk and Hyperdisk volumes GPUs TPUs Reservations Cloud Storage buckets To learn more about the data that's available from Capacity Planner, data limitations, and how you can use this data, see View usage and forecast data .
- To export data, first select the resource that you want to export, and filter the data by the following: Compute instances, CPU cores, or GPUs Region or zone Usage percentile To export usage and forecast data of your instances filtered by machine family or GPU type, do the following: In the Google Cloud console, open Capacity Planner.

### Capacity Planner API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/reference/rest](https://docs.cloud.google.com/capacity-planner/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://capacityplanner.googleapis.com REST Resource: v1beta.folders.locations.forecasts Methods export POST /v1beta/{parent=folders/ /locations/ }/forecasts:export Exports forecasted usage data requested by user into either an existing Cloud Storage bucket or a BigQuery table. query POST /v1beta/{parent=folders/ /locations/ }/forecasts:query Returns a list of the forecasts that are in the parent parameter and match your specified filters.
- REST Resource: v1beta.folders.locations.forecasts REST Resource: v1beta.folders.locations.reservations REST Resource: v1beta.folders.locations.reservationsUsage REST Resource: v1beta.folders.locations.usageHistories REST Resource: v1beta.organizations.locations.forecasts REST Resource: v1beta.organizations.locations.reservations REST Resource: v1beta.organizations.locations.reservationsUsage REST Resource: v1beta.organizations.locations.usageHistories REST Resource: v1beta.projects.locations.forecasts REST Resource: v1beta.projects.locations.reservations REST Resource: v1beta.projects.locations.reservationsUsage REST Resource: v1beta.projects.locations.usageHistories Service: capacityplanner.googleapis.com Discovery document A Discovery Document is a machine-readable specification for describing and consuming REST APIs.
- REST Resource: v1beta.folders.locations.usageHistories Methods export POST /v1beta/{parent=folders/ /locations/ }/usageHistories:export Exports historical usage data requested by user into either an existing Cloud Storage bucket or a BigQuery table. query POST /v1beta/{parent=folders/ /locations/ }/usageHistories:query Returns a list of the usage histories that are in the parent parameter and match your specified filters.
- REST Resource: v1beta.organizations.locations.forecasts Methods export POST /v1beta/{parent=organizations/ /locations/ }/forecasts:export Exports forecasted usage data requested by user into either an existing Cloud Storage bucket or a BigQuery table. query POST /v1beta/{parent=organizations/ /locations/ }/forecasts:query Returns a list of the forecasts that are in the parent parameter and match your specified filters.

