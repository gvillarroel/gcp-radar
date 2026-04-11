---
title: "Move your Cloud Storage data to another location \_|\_ Storage Transfer Service\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/move-your-cloud-storage-data-to-another-location
  title: "Move your Cloud Storage data to another location \_|\_ Storage Transfer\
    \ Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Send feedback
Move your Cloud Storage data to another location
Stay organized with collections
Save and categorize content based on your preferences.
Last reviewed 2022-06-20 UTC
When you create a Cloud Storage bucket, you choose its permanent
geographic location. As your business needs change, where you store your data
might need to change too. For example, your data might be better situated in a
highly available dual-region bucket, a lower cost regional bucket, or simply a
different region of the world.
This tutorial helps you to select a location
that best fits your needs.
Objectives
Choose a new location for the Cloud Storage data.
Costs
In this document, you use the following billable components of Google Cloud:
Cloud Storage
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Before you begin
There are no prerequisites to this tutorial.
Choose a new location
When you choose the location for a Cloud Storage bucket, consider the
differences in availability, and price, as shown in the following
table.
Zone
Region
Dual-region
Multi-region
Availability
Data redundancy within one availability zone
Zonal outages might affect availability
Data redundancy across availability zones (synchronous)
RTO(recovery time objective)=0: automated failover and failback on
zonal failure (no need to change storage paths)
Higher availability than regions for a given storage class
Data redundancy across regions (asynchronous)
Turbo replication option for replication within 15 minutes
RTO(recovery time objective)=0: automated failover and failback on
regional failure (no need to change storage paths)
Higher availability than regions for a given storage class
Data redundancy across regions (asynchronous)
RTO(recovery time objective)=0: automated failover and failback on
regional failure (no need to change storage paths)
Pricing
Offers the highest performance in Cloud Storage for demanding
workloads at the highest storage price, out of all location types
Zonal bucket-specific data transfer charges apply. For more
information, see Cloud Storage pricing .
Lowest storage price
No replication charges
No outbound data transfer charges when reading data inside the same
region
Highest storage price
Replication charges apply on write
No outbound data transfer charges when reading data within either
region
Higher storage price than regions, but lower than dual-regions
Replication charges apply on write
Outbound data transfer charges always apply when reading data
Location recommendations
Requirements
Recommended bucket location
Workload examples
Ultra-low latency
Ultra-high bandwidth and I/O
High performance
Zone 1
Artificial Intelligence (AI) and Machine Learning (ML)
High-performance computing
Data-intensive analytics
Optimized latency and bandwidth
Lowest data storage cost
Cross-zone redundancy
Region 2
Analytics
Backup and archive
Optimized latency and bandwidth
Cross-region redundancy, with precise control of the locations where copies of data are stored
Dual-region 3
Analytics
Backup and archive
Disaster recovery
Cross-geography data access
Cross-region redundancy
Multi-region
Content serving
Zonal locations for buckets are only available through Rapid Bucket .
For more information about region-specific considerations, see
Geography and regions .
If you need a short and predictable
recovery point objective (RPO) ,
enable the premium
turbo replication
feature.
To maximize performance and lower the latency between requests and responses,
colocate your stored data in the same zone as the compute resources accessing
your data. To store data in zones, use
Rapid Bucket .
To withstand the risk of losing data within an individual zone, use regions or
dual-regions.
To avoid data replication charges, store short-lived datasets in regions.
For moderate performance and ad hoc analytics workloads, multi-region storage
can be a cost-effective choice.
Note that the performance of workloads that use data in a multi-region bucket
might vary over time because storage and compute aren't colocated. When a
multi-region workload has strict performance requirements, consider enabling
Rapid Cache .
When transferring to a new bucket, consider if the current
storage class still
suits your needs.
Plan and start the transfer
After you've decided on a new location, see
Transfer between Cloud Storage buckets
to plan and perform your data move.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2022-06-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2022-06-20 UTC."],[],[]]
