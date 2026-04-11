---
title: "Capacity Planner release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/capacity-planner/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/capacity-planner/docs
source_metadata:
  url: https://docs.cloud.google.com/capacity-planner/docs/release-notes
  title: "Capacity Planner release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Capacity Planner
Resources
Send feedback
Capacity Planner release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Capacity Planner.
Check this page for announcements about new or updated features, bug fixes,
known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
December 09, 2025
Change
The Google Cloud console has been changed as follows:
An Overview page for Capacity Planner has been added. You
can use the Overview page to view data that summarizes the overall
resource usage for a project, folder, or organization, including potential
action items and the regional distribution of your resources.
The data for the region distribution of your resources has been relocated:
the doughnut charts have been replaced with a bar chart on the
Overview page for Capacity Planner.
For more information, see View usage and forecast data .
October 03, 2025
Feature
Preview: Capacity Planner supports the following:
Usage and forecast data for Hyperdisk volumes
Usage and forecast data for Persistent Disk and Hyperdisk volume IOPS and throughput
Usage data for Spot VMs and TPUs that are attached to Spot VMs
For more information, see View usage and forecast data .
August 29, 2025
Announcement
Capacity Planner is available in Preview !
Feature
Reference documentation has been added for the REST Capacity Planner API. For more information, see Authenticate to Capacity Planner and the REST API reference overview .
August 25, 2025
Feature
Preview : You can use capacity requests to request a large number of resources for a future date and time, and across multiple regions or zones. When you use capacity requests, you get best-effort assurance for the capacity that Google Cloud provisions, and you only pay for resources when you use them. This approach helps ensure that your Google Cloud project has sufficient capacity to prevent resource availability errors during unexpected growth, without committing to pay for resources that you might not use.
For more information, see About capacity requests .
May 23, 2025
Feature
Preview : You can view and export usage and forecast data of the machine types and TPUs in your project, folder, or organization. This information helps you analyze usage trends and plan for future capacity needs. For more information, see the following:
Capacity Planner overview
View usage and forecast data in Capacity Planner
Export usage and forecast with the Google Cloud console
Export usage and forecast with the Capacity Planner API
Reserve capacity in Capacity Planner
December 19, 2024
Feature
Preview : You can create future reservation requests for VMs of a single machine type using the Google Cloud console. Reserving capacity based on your predicted VM or GPU usage helps ensure that your projects have the capacity needed to support increases in usage. For more information, see Reserve capacity in Capacity Planner .
November 15, 2024
Feature
Preview : You can view and export historical utilization of on-demand and future reservations in your project, folder, or organization. This data helps you analyze usage trends for your VMs or GPUs, as well as plan for future capacity needs. For more information, see the following:
Export usage and forecast with the Google Cloud console
Export usage and forecast with the Capacity Planner API
View usage and forecast data in Capacity Planner
September 05, 2024
Feature
Preview : You can use the Capacity Planner API to export usage and forecast data of the VMs, Persistent Disk volumes, or GPUs in your project, folder, or organization. This lets you export usage and forecast data in a Cloud Storage bucket or BigQuery table. For more information, see Export usage and forecast data using the Capacity Planner API .
Feature
Preview : You can view the on-demand reservations and future reservation requests available for consumption in your project, folder, or organization. This helps you plan for future capacity assurance, as well as view the reserved resources that cover your projected growth or peak usage. For more information, see View usage and forecast data in Capacity Planner .
July 29, 2024
Feature
Preview : Capacity planner supports the following for data aggregated by folder ID:
View and export the actual and forecasted usage data of the VMs, Persistent Disk volumes, and GPUs in your folder.
Generate gcloud CLI commands to create future reservation requests based on the actual or forecasted usage data of your VMs or GPUs by folder.
For more information, see the following pages:
About Capacity Planner
Export usage and forecast data in Capacity Planner
Reserve capacity from actual or forecasted usage
View actual and forecasted usage in Capacity Planner
July 01, 2024
Feature
Preview : Capacity Planner displays GPU usage and forecasts of the GPUs in your Google Cloud project or organization. This is useful to plan and optimize your GPU consumption.
For more information, see the following pages:
About Capacity Planner
Export usage and forecast data in Capacity Planner
View actual and forecasted usage in Capacity Planner
March 28, 2024
Feature
Preview : Capacity planner supports the following for data aggregated by organization ID:
View and export the actual and forecasted usage data of the VMs and persistent disks in your organization.
Generate gcloud CLI commands to create future reservation requests based on the actual or forecasted usage data of your VMs by organization.
For more information, see the following pages:
About Capacity Planner
Export usage and forecast data in Capacity Planner
Reserve capacity from actual or forecasted usage
View actual and forecasted usage in Capacity Planner
December 15, 2023
Feature
Preview : When using Capacity Planner, you can enable quota adjuster for the Compute Engine resources in your project. This allows Google Cloud to automatically submit quota increase requests on your behalf when your quota nears a limit.
Enabling quota adjuster is helpful to proactively respond to planned or unplanned growths in consumption, or prevent outages when reaching a quota limit. For more information, see Enable quota adjuster .
Feature
Preview : You can view the following when using Capacity Planner:
The historical or forecasted usage of your persistent disks.
Your quota in relation to the usage of your Compute Engine resources.
Viewing your persistent disks' forecasted usage and your quota is useful when reserving resources or adjusting your quota limits for planned or unplanned spikes in consumption. For more information, see About Capacity Planner .
September 07, 2023
Feature
Preview : You can view the following when using Capacity Planner:
The 50th and 75th percentile usage and forecast of your VMs.
The historical usage of your VMs up to 2 years in the past.
The usage and forecast of all machine families in a project.
For more information, see About Capacity Planner .
Feature
Preview : You can generate gcloud CLI commands to create future
reservation requests of Compute Engine zonal resources based on the actual or
forecasted usage of your VMs. Future reservations are useful to secure capacity up to 1 year in advance for forecasted spikes.
For more information, see Reserve capacity from actual or forecasted usage .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
