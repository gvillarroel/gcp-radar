---
title: "Access monitoring data in Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/access-monitoring
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/access-monitoring
  title: "Access monitoring data in Cloud Storage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Cloud Storage
Guides
Send feedback
Access monitoring data in Cloud Storage
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to access monitoring data from your Cloud Storage
buckets, including request rates, bandwidth usage, and storage usage
(only available for zonal buckets ). For information about monitoring in
Cloud Storage and what metrics to use to find
the data you want, see Overview of monitoring or
Overview of bandwidth usage monitoring .
Monitor bucket data for individual buckets
In the Google Cloud console, go to the Cloud Storage Buckets page.
Go to Buckets
In the list of buckets, click the name of the bucket for which you want to
see monitoring data.
In the Bucket details page, click the Observability tab.
Monitoring charts are displayed.
Monitor bucket data for all buckets within a project
In the Google Cloud console, go to the Cloud Storage Buckets page.
Go to Buckets
In the Cloud Storage navigation pane, click Monitoring .
Monitoring charts are displayed.
The Monitoring page can also be directly accessed using the following URL:
https://console.cloud.google.com/storage/monitoring?project= PROJECT_ID
Where PROJECT_ID is the ID of the project whose
metrics you want to monitor.
Monitor bandwidth and storage usage
Use the instructions in this section to monitor bandwidth usage for buckets or
storage usage for zonal buckets only.
For data egress from a Cloud Storage bucket to Google services:
If the bucket is located in a region, the usage must be by resources located
in the same region.
If the bucket is located in a dual-region , the usage must be by
resources located in either of the regions that makes up the dual-region.
The usage must be by Google Cloud resources other than Cloud Storage
buckets.
The usage must be from either a JSON API GET Object request or a
XML API GET Object request.
Before you begin
In order to track bandwidth monitoring, you must have the Cloud Storage
service storage.googleapis.com enabled for your project.
To monitor bandwidth or storage usage:
Console
You can view egress bandwidth usage for your project's buckets or storage
usage for zonal buckets only by using the Quotas and system limits page
with the appropriate metric. For information about bandwidth monitoring
metrics and what data they return, see Bandwidth monitoring metrics .
Open Cloud Storage Quotas and systems limits
Google Egress Bandwidth per second per region
Rapid Zonal Egress Bandwidth per second per zone
Dualregion Google Egress Bandwidth per second per region per dualregion_location
MultiRegion Google Egress Bandwidth per second per region
Internet Egress Bandwidth per second per region
Dualregion Internet Egress Bandwidth per second per region per dualregion_location
Multiregion Internet Egress Bandwidth per second per region
Rapid Zonal Bytes per zone
You can also view the Google egress bandwidth usage of buckets in your
project that are located in regions on the
Cloud Storage monitoring page .
For more information on viewing and managing quotas, see
View and manage quotas . For information about bandwidth monitoring
metrics and what data they return, see Bandwidth monitoring metrics .
Command line
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Use the following command to return Cloud Storage quota
information for a project:
gcloud alpha services quota list --service=storage.googleapis.com --consumer=projects/ PROJECT_ID
Where PROJECT_ID is the project ID.
In the YAML response, look for the following:
storage.googleapis.com/google_egress_bandwidth
storage.googleapis.com/rapid_zonal_egress_bandwidth
storage.googleapis.com/dualregion_google_egress_bandwidth
storage.googleapis.com/multiregion_google_egress_bandwidth
storage.googleapis.com/internet_egress_bandwidth
storage.googleapis.com/dualregion_internet_egress_bandwidth
storage.googleapis.com/multiregion_internet_egress_bandwidth
storage.googleapis.com/rapid_zonal_bytes
For information about bandwidth monitoring metrics and what data they
represent, see Bandwidth monitoring metrics .
For more information, see
Manage your quota using the Google Cloud CLI .
JSON API
For information on programmatically retrieving time series information
for non dual-region quotas, see the ListTimeSeries command , using the
following values for filter :
metric.type="serviceruntime.googleapis.com/quota/rate/net_usage"
resource.type="consumer_quota"
One of the following:
metric.label.quota_metric="storage.googleapis.com/google_egress_bandwidth"
metric.label.quota_metric="storage.googleapis.com/rapid_zonal_egress_bandwidth"
metric.label.quota_metric="storage.googleapis.com/internet_egress_bandwidth"
metric.label.quota_metric="storage.googleapis.com/multiregion_google_egress_bandwidth"
metric.label.quota_metric="storage.googleapis.com/multiregion_internet_egress_bandwidth"
For information on programmatically retrieving time series information for
dual-region quotas, see the ListTimeSeries command , using the
following values for filter :
resource.type="storage.googleapis.com/Project"
One of the following:
metric.type="storage.googleapis.com/quota/dualregion_google_egress_bandwidth/usage"
metric.type="storage.googleapis.com/quota/dualregion_internet_egress_bandwidth/usage"
For information about bandwidth monitoring metrics and what data they
represent, see Bandwidth monitoring metrics .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
