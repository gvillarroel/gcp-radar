---
title: "Overview of bandwidth and storage usage in Cloud Storage \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/storage/docs/bandwidth-usage
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/bandwidth-usage
  title: "Overview of bandwidth and storage usage in Cloud Storage \_|\_ Google Cloud\
    \ Documentation"
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
Overview of bandwidth and storage usage in Cloud Storage
Stay organized with collections
Save and categorize content based on your preferences.
This page discusses metrics used to monitor data usage for your Cloud Storage
buckets, as well as how to request additional egress bandwidth for different
quotas if you need more than the default quota . This page also discusses
storage usage, which is available only for zonal buckets .
For instructions on accessing monitoring data in Cloud Storage, see
Access monitoring data .
Introduction to bandwidth monitoring
Cloud Storage provides bandwidth monitoring for you to track bandwidth
usage from your project's buckets to other Google Cloud services. Bandwidth
monitoring is aggregated by region and tracks usage for the last 6 weeks.
Before monitoring bandwidth usage, review the following terms:
Egress bandwidth refers to the rate at which data is retrieved from your
buckets in the course of completing requests made to Cloud Storage.
Google egress bandwidth refers to data retrieved from your buckets that
is destined for other Google services, such as Compute Engine.
Internet egress bandwidth refers to data retrieved from your buckets
that is served to the Internet, such as data downloaded directly to
your local computer or data retrieved by Cloud CDN for serving to the
Internet.
Network egress refers to the rate at which data is sent over the network
from your buckets to requesters.
In normal operation, egress bandwidth and network egress are typically about the
same; however, in some cases egress bandwidth can be meaningfully greater than
network egress. Broken connections, cancelled requests, and partial requests are
cases where the data retrieved can be greater than the data that's ultimately
sent.
Bandwidth monitoring metrics
The following bandwidth usage data is available for monitoring:
Google egress bandwidth per second per region: monitors Google egress
bandwidth usage for buckets in your project that are located in regions.
Zonal Google egress bandwidth per second per zone: monitors Google egress
bandwidth usage for buckets in your project that are located in zones.
Dual-region Google egress bandwidth per second per region per
dual-region location: monitors Google egress bandwidth usage for buckets in
your project that are located in dual-regions.
Multi-region Google egress bandwidth per second per region: monitors
Google egress bandwidth usage for buckets in your project that
are located in multi-regions.
Internet egress bandwidth per second per region: monitors Internet
egress bandwidth usage for buckets in your project that
are located in regions.
Dual-region internet egress bandwidth per second per region per dual-region
location: monitors Internet egress bandwidth usage for buckets in your project
that are located in dual-regions.
Multi-region internet egress bandwidth per second per region: monitors
Internet egress bandwidth usage for buckets in your project that
are located in multi-regions.
Monitoring alerts
You can use Monitoring alerting policies to inform you when
metrics such as storage.googleapis.com/google_egress_bandwidth ,
storage.googleapis.com/dualregion_google_egress_bandwidth , and
storage.googleapis.com/multiregion_google_egress_bandwidth approach a quota
limit.
For an overview of Monitoring alerts, see
Introduction to alerting .
To get started with Monitoring alerts using the
Google Cloud console, see Create metric-based alert policies .
For examples of Monitoring alerts, see
Chart and monitor quota metrics .
Network monitoring
In addition to Cloud Storage bandwidth monitoring, you can use the
network/sent_bytes_count metric to measure Cloud Storage
network egress. This is useful for approximating bandwidth usage for specific
buckets, because bandwidth monitoring tracks bandwidth usage by location and
project.
When using this networking metric, keep in mind the following:
network/sent_bytes_count uses bytes in its measurements, whereas typical
networking metrics often use bits. For example, a 1 GiBps measurement for
network/sent_bytes_count is equivalent to 8 Gibps.
network/sent_bytes_count tracks all the traffic sent over the network, not
only egress to co-located Google Cloud services. As such,
network/sent_bytes_count is typically greater than bandwidth usage.
In some cases, network/sent_bytes_count can be less than bandwidth
usage due to events such as broken connections, cancelled requests, and
partial requests.
network/sent_bytes_count metrics are sampled every 60 seconds. If the
traffic is spiky, it's possible that requests are throttled for a short period
of time even though the average egress over 60 seconds is below the limit.
Request more bandwidth
The following instructions apply when requesting egress bandwidth for
Cloud Storage buckets:
Make sure you have enabled the
Cloud Storage service storage.googleapis.com .
In the Google Cloud console, go to the IAM Quotas & System Limits page.
Go
to Browser
In the Filter search bar, select the Metric property, then search
for the metric for which you are requesting an increase:
Use storage.googleapis.com/google_egress_bandwidth to increase Google
egress for your buckets located in regions.
Use storage.googleapis.com/dualregion_google_egress_bandwidth to increase
Google egress for your buckets located in dual-regions.
Use storage.googleapis.com/multiregion_google_egress_bandwidth to
increase Google egress for your buckets located in multi-regions.
Use storage.googleapis.com/rapid_zonal_egress_bandwidth to increase Google
egress for your buckets located in zones.
This metric is only available for zonal buckets. For more information
about zonal buckets, see Rapid Bucket .
Use storage.googleapis.com/internet_egress_bandwidth to increase Internet
egress for your buckets located in regions.
Use storage.googleapis.com/dualregion_internet_egress_bandwidth to
increase Internet egress for your buckets located in dual-regions.
Use storage.googleapis.com/multiregion_internet_egress_bandwidth to
increase Internet egress for your buckets located in multi-regions.
In the list of results, toggle the checkbox for the locations where you want
to increase egress bandwidth. For the
storage.googleapis.com/dualregion_google_egress_bandwidth and
storage.googleapis.com/dualregion_internet_egress_bandwidth metrics, there
must be non-zero historical usage of the metric before you can request an
increase.
Click Edit Quotas .
Enter your requested quota and business justification.
Click Submit Request .
If the previous instructions don't work for you, or if you need bandwidth
greater than 5 Tbps for egress from buckets in zones, regions, or dual-regions,
contact your Technical Account Manager or Google representative.
Increase requests greater than 1 Tbps for egress from buckets
in multi-regions are not supported.
For more information, see View and manage quotas .
Request more storage
Cloud Storage provides storage usage monitoring for zonal buckets. The
following instructions apply when requesting more storage quota for zonal
buckets. For more information about zonal buckets, see Rapid Bucket .
Make sure you have enabled the
Cloud Storage service storage.googleapis.com .
In the Google Cloud console, go to the IAM Quotas & System Limits page.
Go
to Browser
In the Filter search bar, select the Metric property, then search
for the metric for which you are requesting an increase:
Use storage.googleapis.com/rapid_zonal_bytes to increase storage for your
buckets located in zones.
What's next
Access bandwidth monitoring data .
Monitor who accesses your Cloud Storage resources .
Create notifications when an object is created, updated, or deleted.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
