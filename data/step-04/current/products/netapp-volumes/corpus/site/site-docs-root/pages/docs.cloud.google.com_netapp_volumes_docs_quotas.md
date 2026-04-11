---
title: "Quotas and limits \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/quotas
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/quotas
  title: "Quotas and limits \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
NetApp Volumes
Resources
Send feedback
Quotas and limits
Stay organized with collections
Save and categorize content based on your preferences.
This document lists the quotas and system limits that apply to
Google Cloud NetApp Volumes.
Quotas have default values, but you can typically request
adjustments.
System limits are fixed values that can't be changed.
Google Cloud uses quotas to help ensure fairness and reduce
spikes in resource use and availability. A quota restricts how much of a
Google Cloud resource your Google Cloud project can use. Quotas
apply to a range of resource types, including hardware, software, and network
components. For example, quotas can restrict the number of API calls to a
service, the number of load balancers used concurrently by your project, or the
number of projects that you can create. Quotas protect the community of
Google Cloud users by preventing the overloading of services. Quotas also
help you to manage your own Google Cloud resources.
The Cloud Quotas system does the following:
Monitors your consumption of Google Cloud products and services
Restricts your consumption of those resources
Provides a way to
request changes to the quota value
and automate quota adjustments
In most cases, when you attempt to consume more of a resource than its quota
allows, the system blocks access to the resource, and the task that
you're trying to perform fails.
Quotas generally apply at the Google Cloud project
level. Your use of a resource in one project doesn't affect
your available quota in another project. Within a Google Cloud project, quotas
are shared across all applications and IP addresses.
For more information, see the
Cloud Quotas overview .
There are also system limits on NetApp Volumes resources.
System limits can't be changed.
Google Cloud NetApp Volumes use is subject to limits and default quotas. Limits
can't be changed, however, you can request a quota increase. To learn more,
see Request a quota increase .
View your API quotas
View your API quotas and usage for NetApp Volumes in the
Google Cloud console.
Go to NetApp API quotas
NetApp Volumes default quotas
The following table shows the default quotas for each resource. To increase or
decrease most quotas, use the Google Cloud console. For more information, see
Request a higher quota limit .
Resource
Default quota
Quota adjustable
Flex Unified storage pool capacity (GiB) per region
25 TiB
Yes
Flex Unified cross region replicated volumes per region
5
Yes
Flex Unified volumes per region
100
Yes
Flex Unified volumes with backup configuration per region
10
Yes
Flex storage pool throughput (MiBps) per region
5120
Yes
Flex storage pool IOPS per region
160,000
Yes
Flex storage pool capacity (GiB) per region
25 TiB
Yes
Flex cross region replicated volumes per region
5
Yes
Flex volumes per region
100
Yes
Flex volumes with backup configuration per region
10
Yes
Standard storage pool capacity (GiB) per region
25 TiB
Yes
Standard cross region replicated volumes per region
5
Yes
Standard hybrid replicated volumes per region
1
Yes
Standard volumes per region
100
Yes
Standard volumes with backup configuration per region
10
Yes
Premium and Extreme storage pool capacity (GiB) per region
25 TiB
Yes
Premium and Extreme cross region replicated volumes per region
5
Yes
Premium and Extreme hybrid replicated volumes per region
1
Yes
Premium and Extreme volumes per region
100
Yes
Premium and Extreme volumes with backup configuration per region
10
Yes
NetApp Volumes limits
NetApp Volumes feature limits vary by location and region. The
following tables show the current limits per resource. You can't change these
limits.
Backup limits
Resource
Limit
Number of backups per volume
1,000
Total number of scheduled backups (daily, weekly, and monthly)
1,000
Maximum number of concurrent backups per Flex storage pool
10
Storage pool limits
Resource
Limit
Minimum pool capacity
Flex Unified and Flex File service level : 1 TiB. For more information, see
NetApp Volumes service levels table
Flex Unified large capacity pool : 6 TiB
Standard, Premium, and Extreme service levels : 2 TiB
Maximum pool capacity
Flex Unified regular service level : 425 TiB
Flex Unified large capacity pool :
Without auto-tiering : 2.5 PiB
With auto-tiering : 20 PiB
Standard service level : 200 TiB
Premium and Extreme service levels : 10 PiB
Flex File service level : 300 TiB
Maximum number of volumes per storage pool
Flex service level :
File type: 50
Unified type: 1000
Standard, Premium, and Extreme service levels : not applicable
Maximum number of storage pools
Flex File service level : 100 zonal pools per zone and 100 regional pools
Standard, Premium, and Extreme service levels : not applicable
Networking limits
Resource
Limit
Number of VPC networks per project
5
Volume limits
Resource
Limit
Volumes per region
Flex Unified service level : 5,000 zonal volumes per zone and 5,000 regional volumes Standard, Premium, and Extreme service levels : not applicable Flex File service level : 5,000 zonal volumes per zone and 5,000 regional volumes
Minimum capacity of a single volume
Flex Unified and Flex File service level : 1 GiB. For more information, see NetApp Volumes service levels table Standard, Premium, and Extreme service levels : 100 GiB
Maximum capacity of a single volume
Flex File service level : 300 TiB Flex Unified service level : 128 TiB Standard, Premium, and Extreme service levels : 100 TiB
Minimum capacity of a large capacity volume (in Flex Unified large capacity pool)
4.8 TiB
Maximum capacity of a large capacity volume (in Flex Unified large capacity pool)
2.5 PiB without auto-tiering 20 PiB with auto-tiering
Minimum capacity of a large capacity volume (Premium and Extreme service levels only)
15 TiB
Maximum capacity of a large capacity volume (Premium and Extreme service levels only)
3 PiB
Number of snapshots per volume
255
Number of backups per volume
1,000
Maximum capacity of a single LUN
128 TiB
Maximum capacity of a single file
128 TiB for all service levels, except 16 TiB for Flex File
Maximum size of a single directory
Approximately 4 million files
Maximum filename length
255 characters
Maximum number of NFS export rules per volume
20
Maximum length of an NFS export rule
4,096 characters
Maximum number of user and group quota rules
100
Network File System (NFS) limits
Resource
Limit
Maximum number of UNIX groups supported for LDAP-enabled volumes
1,024
Active Directory policy limits
Resource
Limit
Maximum number of Active Directory policies per region
5
Inode limits
Every directory, file, or link uses an inode, but each volume has a limit on how
many inodes it can store. If that limit is reached, you can't create new files
or directories, even if there is free space. To resolve this, you must delete
existing files or directories to free up inodes. Alternatively, you can also
increase the volume capacity to add more inodes.
Google Cloud NetApp Volumes allocates one inode for every 32 KB of volume
capacity, based on an average file size of 32 KB. If your average file size
is smaller, you might run out of inodes before using up all the available
storage capacity.
Volumes in Standard, Premium, and Extreme service levels provide a minimum of
21.2 million inodes for each volume. Beyond 683 GiB of capacity, the inode
count increases linearly with volume capacity, adding one inode for every
32 KB. Flex volumes start with approximately 31,000 inodes for a 1 GiB
volume and grow linearly with volume capacity at one inode for every 32 KB.
Auto-tiering reduces the amount of hot data in a volume, but doesn't impact the
number of used inodes.
The maximum hard limit for each volume is 2,040 million inodes. For large
capacity volumes, the limit can increase up to 24 times the standard volume
limit.
The following table provides a few examples of volume capacity versus maximum
inodes for volumes:
Volume capacity in GiB
Inode limit for Standard, Premium, and Extreme service levels
Inode limit for Flex service level
100
21.2 million
3.1 million
512
21.2 million
15.9 million
1024
31.8 million
31.8 million
2048
63.7 million
63.7 million
4096
127.5 million
127.5 million
5200
161.8 million
161.8 million
For more information about monitoring inode usage, see
Methods for monitoring volume usage .
Request a quota increase
To adjust most quotas, use the Google Cloud console.
For more information, see
Request a quota adjustment .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
