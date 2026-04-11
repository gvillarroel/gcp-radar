---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:10:13.942Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner reservation utilization history view and export"
feature_slug: "capacity-planner-reservation-utilization-history-view-and-export"
latest_feature_date: "2024-11-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/export-data"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/capacityplanner"
keywords:
  - "utilization"
  - "history"
  - "reservation"
  - "export"
  - "view"
  - "capacity"
  - "planner"
  - "and"
---

# Capacity Planner reservation utilization history view and export

Product: Capacity Planner
Coverage: LOW

## Step 02 Summary

Capacity Planner preview provides viewing and export of historical utilization for on-demand and future reservations for VMs and GPUs.

## Extended Definition

Capacity Planner preview provides viewing and export of historical utilization for on-demand and future reservations for VMs and GPUs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/capacityplanner](https://docs.cloud.google.com/iam/docs/roles-permissions/capacityplanner)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Data availability and updates When you view usage and forecast data in Capacity Planner, consider the following: Capacity Planner data is available as follows: Historical usage data : historical usage data is available for up to the past two years with the following exceptions: For reservations, historical usage data isn't available before August 1, 2024.
- REST methods Query historical usage timeseries project-level query: v1beta projects.locations.usageHistories.query method folder-level query: v1beta folders.locations.usageHistories.query method organization-level query: v1beta organizations.locations.usageHistories.query method Query forecast timeseries project-level query: v1beta projects.locations.forecasts.query method folder-level query: v1beta folders.locations.forecasts.query method organization-level query: v1beta organizations.locations.forecasts.query method Query reservations timeseries project-level query: v1beta projects.locations.reservations.query method folder-level query: v1beta folders.locations.reservations.query method organization-level query: v1beta organizations.locations.reservations.query method What's next Export usage and forecast data Enable the quota adjuster Request capacity from actual or forecasted usage Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view the usage and forecast data of your resources: To view forecast data: capacityplanner.forecasts.list on the project, folder, or organization To view historical usage data: capacityplanner.usageHistories.list on the project, folder, or organization To summarize the historical usage data: capacityplanner.usageHistories.summarize on the project, folder, or organization You might also be able to get these permissions with custom roles or other predefined roles .
- View the forecast and usage of your resources View the usage and forecast data about the compute instances, Persistent Disk volumes, GPUs, and TPUs in your project, folder, or organization by using the following methods: View the forecast and usage of your resources using the Google Cloud console (Recommended) View the forecast and usage of your resources using the Capacity Planner API View the forecast and usage of your resources using the Google Cloud console To view the forecast and usage of your resources using the Google Cloud console, complete the following steps.

### "Export data to your local workstation \_|\_ Capacity Planner \_|\_ Google\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/export-data](https://docs.cloud.google.com/capacity-planner/docs/export-data)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can export data from Capacity Planner as a CSV file for the following resources: Compute Engine instances Persistent Disk and Hyperdisk volumes GPUs TPUs Reservations Cloud Storage buckets To learn more about the data that's available from Capacity Planner, data limitations, and how you can use this data, see View usage and forecast data .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to export usage and forecast data of your resources: To view forecasted usage data: capacityplanner.forecasts.list on the project, folder, or organization To view historical usage data: capacityplanner.usageHistories.list on the project, folder, or organization To summarize the usage of your resources: capacityplanner.usageHistories.summarize on the project, folder, or organization You might also be able to get these permissions with custom roles or other predefined roles .
- Required roles To get the permissions that you need to export usage and forecast data of your resources, ask your administrator to grant you the following IAM roles on your project, folder, or organization: To access and view Capacity Planner: Capacity Planner Viewer ( roles/capacityplanner.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To export data, first select the resource that you want to export, and filter the data by the following: Compute instances, CPU cores, or GPUs Region or zone Usage percentile To export usage and forecast data of your instances filtered by machine family or GPU type, do the following: In the Google Cloud console, open Capacity Planner.

### "Capacity Planner roles and permissions \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/capacityplanner](https://docs.cloud.google.com/iam/docs/roles-permissions/capacityplanner)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Capacity Planner roles Role Permissions Capacity Planner Viewer Beta ( roles/ capacityplanner.viewer ) Read-only access to Capacity Planner resources capacityplanner. capacityPlans. get capacityplanner. capacityPlans. list capacityplanner.forecasts.list capacityplanner. planAlertInsights. list capacityplanner. usageAlertInsights. list capacityplanner. usageHistories. capacityplanner. usageHistories. list capacityplanner. usageHistories. summarize cloudquotas.quotas.get compute.futureReservations.get compute. futureReservations. list compute.reservations.get compute.reservations.list monitoring.timeSeries.list resourcemanager.folders.get resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list serviceusage. consumerpolicy. get serviceusage. effectivepolicy. get serviceusage.groups.list serviceusage. groups. listMembers serviceusage.quotas.get serviceusage.services.get serviceusage.values.test Capacity Planner Beta ( roles/ capacityplanner.planner ) Role that enables capacity planning capacityplanner. capacityplanner. capacityPlans. create capacityplanner. capacityPlans. delete capacityplanner. capacityPlans. get capacityplanner. capacityPlans. list capacityplanner. capacityPlans. update capacityplanner.forecasts.list capacityplanner. planAlertInsights. list capacityplanner. usageAlertInsights. list capacityplanner. usageHistories. list capacityplanner. usageHistories. summarize cloudquotas.quotas.get compute.futureReservations.get compute. futureReservations. list compute.reservations.get compute.reservations.list monitoring.timeSeries.list resourcemanager.folders.get resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list serviceusage. consumerpolicy. get serviceusage. effectivepolicy. get serviceusage.groups.list serviceusage. groups. listMembers serviceusage.quotas.get serviceusage.services.get serviceusage.values.test Capacity Planner permissions Permission Included in roles capacityplanner. capacityPlans. create Owner ( roles/ owner ) Editor ( roles/ editor ) Capacity Planner ( roles/ capacityplanner.planner ) capacityplanner. capacityPlans. delete Owner ( roles/ owner ) Editor ( roles/ editor ) Capacity Planner ( roles/ capacityplanner.planner ) capacityplanner. capacityPlans. get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Capacity Planner Viewer ( roles/ capacityplanner.viewer ) Capacity Planner ( roles/ capacityplanner.planner ) Cloud Hub Operator ( roles/ cloudhub.operator ) Support User ( roles/ iam.supportUser ) capacityplanner. capacityPlans. list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Capacity Planner Viewer ( roles/ capacityplanner.viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Capacity Planner ( roles/ capacityplanner.planner ) Cloud Hub Operator ( roles/ cloudhub.operator ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) capacityplanner. capacityPlans. update Owner ( roles/ owner ) Editor ( roles/ editor ) Capacity Planner ( roles/ capacityplanner.planner ) capacityplanner.forecasts.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Capacity Planner Viewer ( roles/ capacityplanner.viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Capacity Planner ( roles/ capacityplanner.planner ) Cloud Hub Operator ( roles/ cloudhub.operator ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) capacityplanner. planAlertInsights. list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Capacity Planner Viewer ( roles/ capacityplanner.viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Capacity Planner ( roles/ capacityplanner.planner ) Cloud Hub Operator ( roles/ cloudhub.operator ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) capacityplanner. usageAlertInsights. list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Capacity Planner Viewer ( roles/ capacityplanner.viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Capacity Planner ( roles/ capacityplanner.planner ) Cloud Hub Operator ( roles/ cloudhub.operator ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) capacityplanner. usageHistories. list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Capacity Planner Viewer ( roles/ capacityplanner.viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Capacity Planner ( roles/ capacityplanner.planner ) Cloud Hub Operator ( roles/ cloudhub.operator ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) capacityplanner. usageHistories. summarize Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Capacity Planner Viewer ( roles/ capacityplanner.viewer ) Capacity Planner ( roles/ capacityplanner.planner ) Cloud Hub Operator ( roles/ cloudhub.operator ) Support User ( roles/ iam.supportUser ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Security IAM Reference Send feedback Capacity Planner roles and permissions Stay organized with collections Save and categorize content based on your preferences.
- This page lists the IAM roles and permissions for Capacity Planner.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

