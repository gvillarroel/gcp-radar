---
title: "Capacity Planner overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/capacity-planner/docs/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/capacity-planner/docs
source_metadata:
  url: https://docs.cloud.google.com/capacity-planner/docs/overview
  title: "Capacity Planner overview \_|\_ Google Cloud Documentation"
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
Guides
Send feedback
Capacity Planner overview
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA products are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document gives an overview of Capacity Planner.
You can use Capacity Planner to view the current and forecasted
usage of the following resources in your Google Cloud project, folder, or
organization:
Compute Engine instances
Persistent Disk and Hyperdisk volumes
GPUs
TPUs
Cloud Storage buckets
Use cases
Capacity Planner helps you plan for future capacity and quota
needs by letting you do the following:
View data that helps you predict the future requirements for resources and
allocation quotas across your project, folder, or organization. This data
includes the following:
Historical usage, forecasted usage, and quota availability for your
compute instances, Persistent Disk volumes, Hyperdisk
volumes, GPUs, and TPUs.
Historical usage for the egress bandwidth of your Cloud Storage
buckets.
Reservations, including current on-demand reservations as well as past
and current future reservation requests, for your instances and GPUs.
Act on data to prevent issues with obtaining resources. These actions
include the following:
Request resources in advance
to prepare for expected or unexpected growth.
Set up
automatic quota increase requests
when your quota nears a limit to do the following:
Prevent outages when you reach a quota.
Reduce the need to submit manual quota increase requests.
How Capacity Planner works
The following sections outline how Capacity Planner calculates
and displays usage data and statistical forecasts for the compute instances,
Persistent Disk and Hyperdisk volumes, GPUs, and TPUs in your
project, folder, or organization.
For more information about usage data and forecasts—including limitations,
data availability, and data updates—also see
View usage and forecast data .
Usage data
You can view the usage data of the compute instances, Persistent Disk and
Hyperdisk volumes, GPUs, TPUs, or
Cloud Storage buckets in your project, folder, or organization to see
their consumption patterns. The usage data in Capacity Planner is
a daily percentile usage of your resources.
For compute instances, Persistent Disk and Hyperdisk
volumes, GPUs, and TPUs, you can select from the following usage percentiles
to track the usage data of your resources:
P50 . The P50 usage percentile is the 50th percentile usage data that
separates the lower 50% of the usage data of your resources from the upper
50%.
P75 . The P75 usage percentile is the 75th percentile usage data that
separates the lower 75% of the usage data of your resources from the upper
25%.
P99 . The P99 usage percentile is the 99th percentile usage data that
separates the lower 99% of the usage data of your resources from the upper
1%.
For the usage data of Cloud Storage buckets, only P100
(maximum usage per day) is available.
Capacity Planner also provides an overview that summarizes the
overall resource usage of your project, folder, or organization. The overview
includes potential action items and the regional distribution of your resources.
Forecasts
You can view the forecast of the compute instances, Persistent Disk and
Hyperdisk volumes, GPUs, or TPUs in your project,
folder, or organization to help you predict your future capacity needs. The
forecast in Capacity Planner is a combination of the following:
A linear and superlinear model.
Yearly seasonality effects on usage, for projects, folders and organizations
that have at least two years of usage data.
The forecast provides an estimate of future usage based on historical usage
patterns for a specified period of time. You can apply the following prediction
intervals to the forecast:
P25-P75 . The P25-P75 interval is a prediction interval of 50%, which
means that there is a 50% probability that actual future usage will fall
within the lower bound and upper bound forecast.
P05-P95 . The P05-P95 interval is a prediction interval of 90%, which
means that there is a 90% probability that actual future usage will fall
within the lower bound and upper bound forecast.
In addition to viewing the latest future predictions,
Capacity Planner lets you view historical forecast snapshots.
These snapshots help you compare the past predictions of your resources
with their actual usage or current forecasts. You can use this data to analyze
forecast accuracy and assess how usage trends have evolved over time.
Pricing
There is no additional cost for using Capacity Planner. You
are only charged for any billable Google Cloud resources that you create or use
with Capacity Planner.
For example, if you
reserve capacity in Capacity Planner ,
then any Compute Engine resources in your project are subject to
Compute Engine pricing . Additionally, if you
export data to a Cloud Storage bucket or BigQuery table ,
then any Cloud Storage resources or BigQuery resources
in your project are subject to
Cloud Storage pricing
and BigQuery pricing respectively.
Get support
To learn how to get help with Capacity Planner, see
Get support .
Prerequisites
To start using Capacity Planner, complete the following prerequisites:
If your project has not used Capacity Planner before,
enable Capacity Planner for your project .
Set up Capacity Planner for each new user .
Enable Capacity Planner for a project
Important: If you can't access Capacity Planner, then
your organization might not be eligible to access and use
Capacity Planner. To request access, contact your
technical account manager (TAM) or the sales team .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Capacity Planner API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Set up Capacity Planner for a new user
To start using Capacity Planner as a user, do the following:
To get the permissions that you need to use Capacity Planner,
ask your administrator to grant you the required IAM roles
on the project. Refer to the documentation for each task to see its
required permissions.
For example, if you want to start learning how to use Capacity Planner
by viewing usage and forecast data, consider requesting the
Capacity Planner Viewer ( roles/capacityplanner.viewer ) role on the
project.
For more information about granting roles, see
Manage access .
If you want to use the API for Capacity Planner, learn how to
Authenticate to Capacity Planner .
What's next
View usage and forecast data
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
