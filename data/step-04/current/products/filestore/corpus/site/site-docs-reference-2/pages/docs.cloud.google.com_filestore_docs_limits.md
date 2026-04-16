---
title: "Quotas and Limits \_|\_ Filestore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/limits
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/limits
  title: "Quotas and Limits \_|\_ Filestore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Filestore
Resources
Send feedback
Quotas and Limits
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the quotas and limits of Filestore.
Number of instances
The number of instances you can create is limited only by the amount of
Filestore quota for a given project and region as well as the minimum
file share capacity. For example, if you have 32 TiB of quota in a given
region, you can create 32 instances each with 1 TiB of capacity. To see
your available per project, per region quota, go to
the Quotas page .
Number of snapshots
Service tier
Maximum recommended number of snapshots per instance
Basic HDD
Not supported
Basic SSD
Not supported
Zonal
240
Regional
240
Enterprise
240
Number of clients
Maximum number of client connections for instances
Service tier
Instances with custom performance off
Instances with custom performance on
Basic HDD
500 connections per instance
Custom performance not supported
Basic SSD
500 connections per instance
Custom performance not supported
Zonal (1 TiB to 9.75 TiB)
2,000 connections per 1 TiB Scales in increments of 500 for up to 19,500 connections per instance
100 connections per 1,000 purchased IOPS
Zonal (10 TiB to 100 TiB) (previously high scale SSD)
8,000 connections per 10 TiB Scales in increments of 2,000 for up to 80,000 connections per instance
100 connections per 1,000 purchased IOPS
Regional (1 TiB to 9.75 TiB)
2,000 connections per 1 TiB Scales in increments of 500 for up to 19,500 connections per instance
100 connections per 1,000 purchased IOPS
Regional (10 TiB to 100 TiB)
8,000 connections per 10 TiB Scales in increments of 2,000 for up to 80,000 connections per instance
100 connections per 1,000 purchased IOPS
Enterprise
2,000 connections per 1 TiB Scales in increments of 500 for up to 20,000 connections per instance
Custom performance not supported
Number of VPC networks used with Filestore
You can create Filestore instances on no more than 49 unique VPC
networks, even if previously used networks are deleted. If you think that you've
reached this limit, see the troubleshooting guide topic on
error code 13
for possible solutions.
File share capacity
Service tier
Capacity
Basic HDD
1 TiB to 63.9 TiB
Basic SSD
2.5 TiB to 63.9 TiB
Zonal with a lower capacity range
1 TiB to 9.75 TiB
Zonal with a higher capacity range
10 TiB to 100 TiB
Regional with a lower capacity range
1 TiB to 9.75 TiB
Regional with a higher capacity range
10 TiB to 100 TiB
Enterprise
1 TiB to 10 TiB
Enterprise instances combined with the Filestore
multishares feature can support a minimum share capacity of 10 GiB.
For more information, see Filestore multishares .
File size
Service tier
Maximum supported file size
Basic HDD
Up to 16 TiB
Basic SSD
Up to 16 TiB
Zonal
Up to the size of instance capacity
Regional
Up to the size of instance capacity
Enterprise
Up to the size of instance capacity
Number of files
Service tier
Maximum file limit
Basic HDD
67,108,864 files per 1 TiB of capacity
Basic SSD
67,108,864 files per 1 TiB of capacity
Zonal
Approximately 89,000,000 files per 1 TiB of capacity
Regional
Approximately 89,000,000 files per 1 TiB of capacity
Enterprise
Approximately 89,000,000 files per 1 TiB of capacity
The number of files listed is an indication of the maximum number of supported
connections to small or empty files. The number of supported file connections
decreases as file size increases.
While no practical limit exists across service tiers, instance performance
may be delayed when supporting a large number of files.
To check your usage, run the following command:
df -i
IUsed reflects the current number of files you have and IFree reflects the
number of additional files that you can store.
File locks
A file-locking
client is a client with at least one acquired or requested file lock. Anything
greater than the maximum recommended limit listed introduces inconsistent
locking behaviors that may result in production outages when the instance
undergoes maintenance:
Service tier
Maximum recommended number of file-locking clients per instance
Basic HDD
128
Basic SSD
128
Zonal
250
Regional
250
Enterprise
250
Rate limits for backups
The following backups operations have a rate limit of
once per 10 minutes in the steady state:
Creating a backup of Filestore instance
Restoring a Filestore instance from a backup (in-place
restore)
Creating a new Filestore instance from a backup
If you want to issue a burst of requests to back up your file shares, you can
issue at most 6 requests in 60 minutes.
For more information, see Backups feature limitations .
What's next
Service tiers
Known issues
Troubleshoot performance-related issues
Scale capacity
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
