---
title: "Export data to your local workstation \_|\_ Capacity Planner \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/capacity-planner/docs/export-data
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/capacity-planner/docs
source_metadata:
  url: https://docs.cloud.google.com/capacity-planner/docs/export-data
  title: "Export data to your local workstation \_|\_ Capacity Planner \_|\_ Google\
    \ Cloud Documentation"
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
Export data to your local workstation
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
This document explains how to export a CSV file containing the usage and
forecast data of your resources in your project, folder, or organization. To
export this data to a different Google Cloud product, see instead
Export data to a Cloud Storage bucket or BigQuery table .
You can export data from Capacity Planner as a CSV file for the following
resources:
Compute Engine instances
Persistent Disk and Hyperdisk volumes
GPUs
TPUs
Reservations
Cloud Storage buckets
To learn more about the data that's available from Capacity Planner, data
limitations, and how you can use this data, see
View usage and forecast data .
Before you begin
If you haven't used Capacity Planner before, review
Capacity Planner overview
and enable Capacity Planner by completing the
prerequisites for projects and users .
Required roles
To get the permissions that
you need to export usage and forecast data of your resources,
ask your administrator to grant you the
following IAM roles on your project, folder, or organization:
To access and view Capacity Planner:
Capacity Planner Viewer ( roles/capacityplanner.viewer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to export usage and forecast data of your resources. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to export usage and forecast data of your resources:
To view forecasted usage data:
capacityplanner.forecasts.list
on the project, folder, or organization
To view historical usage data:
capacityplanner.usageHistories.list
on the project, folder, or organization
To summarize the usage of your resources:
capacityplanner.usageHistories.summarize
on the project, folder, or organization
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Export usage and forecast data
Based on the usage and forecast data of the resources within your project,
folder, or organization that you want to export, use one of the following
methods:
To export usage and forecast data of your compute instances,
Persistent Disk volumes, GPUs, or TPUs for the past two years and for up
to six months in the future,
export data by resource type .
To export usage and forecast data of your machine types for a specific usage
period,
export data filtered by machine family or GPU type .
Export data by resource type
You can export usage and forecast data about your compute instances,
Persistent Disk volumes, GPUs, or TPUs from the
Usage and forecast by resource type graph .
You can export usage data from within two years in the past, and forecast data
for up to six months in the future. To export data, first select the page for
the resource that you want to export, and then filter the data by the following:
Resource type
Region or zone
Usage percentile
To export usage and forecast data about your instances, Persistent Disk
volumes, GPUs, or TPUs, do the following:
In the Google Cloud console, open Capacity Planner.
Go to Capacity Planner
The Overview page appears.
Optional: To change the scope (project, folder, or organization) that you
want to export data for, do the following:
On the Google Cloud console toolbar, click the resource selector.
In the Select a resource dialog that appears, select a project,
folder, or organization.
To export a specific resource, select one of the following options:
Compute instances
In the Usage & forecast section of the
Capacity Planner navigation menu, click to open the
Virtual machine page.
For Machine family , choose the machine family to export. To
export all, select All .
For Machine type , choose the machine type to export. To export
all machine types within a machine family, select Select .
For Location , select the region or zone of the instances to
export.
For Usage percentile , select a usage percentile.
In the Usage and forecast by machine family or
Usage and forecast by machine types graph, click
file_download Export .
A CSV file downloads to your workstation.
Persistent Disks
In the Usage & forecast section of the
Capacity Planner navigation menu, click to open the
Disk page.
For Disk type , choose the type of Persistent Disk to export.
For Location , select a region or zone.
For Usage percentile , select a usage percentile.
In the Usage and forecast by disk type graph, click
file_download Export .
A CSV file downloads to your workstation.
GPUs
In the Usage & forecast section of the
Capacity Planner navigation menu, click to open the
GPU page.
For GPU type , choose the type of GPU to export. To export all,
select All .
For Machine type , choose the machine type that have your chosen
GPU attached to export. To export all machine types that have a
specific GPU type attached, select Select .
For Usage percentile , select a usage percentile.
In the Usage and forecast by GPU type or
Usage and forecast by machine types graph, click
file_download Export .
A CSV file downloads to your workstation.
TPUs
In the Usage & forecast section of the
Capacity Planner navigation menu, click to open the
TPU page.
For TPU type , choose the type of TPU to export. To export
all, select All .
For Usage percentile , select a usage percentile.
In the Usage and forecast by TPU type or
Usage and forecast by machine types graph, click
file_download Export .
A CSV file downloads to your workstation.
Export data filtered by machine family or GPU type
You can export usage and forecast data of your instances from the
Usage and forecast by machine types table .
To export data, first select the resource that you want to export, and
filter the data by the following:
Compute instances, CPU cores, or GPUs
Region or zone
Usage percentile
To export usage and forecast data of your instances filtered by machine family
or GPU type, do the following:
In the Google Cloud console, open Capacity Planner.
Go to Capacity Planner
The Overview page appears.
Optional: To change the scope (project, folder, or organization) that you
want to export data for, do the following:
On the Google Cloud console toolbar, click the resource selector.
In the Select a resource dialog that appears, select a project,
folder, or organization.
To filter the usage data of your instances by machine family or GPU type,
select one of the following options:
Compute instances
In the Usage & forecast section of the
Capacity Planner navigation menu, click to open the
Virtual machine page.
For Machine family , select one of the following options:
To select a single machine family only, select one of the
available machine families.
To select all machine families, select All .
For Location , select a region or zone.
For Usage percentile , select a usage percentile.
In the Usage and forecast by machine types table, for
View data for , select one of the following options:
To view usage and forecast by instances, select VM .
To view usage and forecast by CPU cores, select Cores .
For History start date , select the start date of the usage
period.
For History end date , select the end date of the usage period.
Click file_download Export .
A CSV file downloads to your workstation.
GPUs
In the Usage & forecast section of the
Capacity Planner navigation menu, click to open the
GPU page.
For GPU type , select one of the following options:
To select a single GPU type only, select one of the available
GPU types.
To select all GPU types, select All .
For Location , select a region or zone.
For Usage percentile , select a usage percentile.
In the Usage and forecast by machine types table, for
View data for , select one of the following options:
To view usage and forecast by instances, select VM .
To view usage and forecast by GPUs, select GPU .
For History start date , select the start date of the usage
period.
For History end date , select the end date of the usage period.
Click file_download Export .
A CSV file downloads to your workstation.
What's next
Audit logging information for Capacity Planner
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
