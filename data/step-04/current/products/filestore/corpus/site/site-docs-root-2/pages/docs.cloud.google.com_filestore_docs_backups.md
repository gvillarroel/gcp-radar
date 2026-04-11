---
title: "About backups \_|\_ Filestore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/backups
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/backups
  title: "About backups \_|\_ Filestore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Filestore
Guides
Send feedback
About backups
Stay organized with collections
Save and categorize content based on your preferences.
This page describes what a backup is, how it works, some common use cases and
best practices when creating and using backups.
What is a backup?
A Filestore backup is a differential copy of a file share that
includes all file data and metadata of the file share from the point in time
when the backup is created. Backups are regional resources that remain within the region that you specify at
the time of creation. You can create backups in the same region as the Filestore instance or to another region to help reduce the risk of data loss.
After creating a backup of a file share, you can modify or delete the original
file share without affecting the backup.
You can use a backup to restore a file share to a new Filestore instance
or, for basic tier instances, to the source of an existing file share.
Backups are globally addressable and can be used to restore file shares to any
region .
Use cases
Use backups for the following scenarios:
Disaster recovery : Schedule backups to a remote region to protect against regional outages. You can restore data to a new instance in any supported location.
Data protection : Use scheduled backups to protect your data against accidental changes or data loss. You can restore a backup to a new instance to recover specific files, or perform an in-place restore to the original instance.
Development and testing : Create clones of production data for testing, development, or offline analysis without impacting production performance.
Supported tiers
The following table shows the Filestore service tiers
that support backups, encryption, and related restore
operations:
Tier
Backups support
restore to new instance
restore to existing instance
restore to source instance
CMEK support
Basic HDD
Yes
Yes
Yes
Yes
No
Basic SSD
Yes
Yes
Yes
Yes
No
Zonal
Yes
Yes
No
No
Yes
Regional
Yes
Yes
No
No
Yes
Enterprise
Yes
Yes
No
No
Yes
Backup options
Filestore offers the following backup options:
Standard backups: Filestore creates, manages, and stores standard backups in the same project as your Filestore instances..
Enhanced backups: Backup and DR Service stores and manages backups. This is a centralized, managed backup service that offers advanced features for data protection and management.
The following table shows the differences between standard and enhanced backups:
Feature
Standard backups
Enhanced backups
Backup management
Filestore
Backup and DR Service
Tier availability
Basic , Zonal,
Regional, Enterprise
Zonal, Regional,
Enterprise
Backup scheduling
No
Yes
Backup secured against unauthorized deletion or changes
-
Immutable and indelible backups through backup vault
Automated backup frequency
-
Hourly, daily, weekly, monthly, yearly
On-demand backup retention
Retained indefinitely until manually deleted
Retained until expired (by a backup rule) or manually deleted
Backups protected against source project deletion
-
✔
Centralized backup management across resources and projects
-
✔
Long-term (>1 year) backup retention
-
✔
Backups protected against source instance deletion
✔
✔
Customer-managed encryption (CMEK)
✔
Planned
Multi-regional backups
✔
Planned
Cross-region backups
✔
Planned
Back up a file share
Backed up data include all the file system data and metadata.
Filestore backups don't include file locks
and certain instance-specific information .
The following table shows what instance information backups preserve and what information they don't:
Preserved
Not preserved
Instance ID
Description
Tier of the source instance
Location
Capacity
Network
File share name
IP address
IP-based access controls
File locks
Lock state
Snapshots
Backup deletion
Backups are project-level resources, not a sub-resource of the source instance,
and require their own separate storage. As a result, a backup's lifecycle is not
tied to that of the source instance. Deleting the source does not delete its
associated backups. If you want to delete a backup, you must explicitly perform
a delete operation on the backup, not the instance.
Be sure to delete any unwanted backups. If a source instance is deleted, any
remaining backups continue to accrue fees.
Deleting a backup is permanent and can't be undone.
If the deletion of a backup fails, the status is marked as invalid . In such case, retry the delete operation.
Backup consistency
Filestore backups have NFSv3 and NFSv4.1 consistency semantics. Before
a backup is initiated, any write that the Filestore instance
acknowledges as written to stable storage or that is followed by an acknowledged
COMMIT is included in the backup. For details, see
NFSv3 RFC-1813 section 3.3.7
or About supported file system protocols .
Pricing
Network transfer charges apply to cross-region network traffic. For details,
see the Pricing
page.
Quota
A quota limit exists regarding the number of backups per region for basic SSD
and basic HDD service tiers.
Backup quota limits don't apply to zonal, regional, and enterprise service tiers.
For more information, see Service tiers and quota .
What's next
Learn about backup limitations
Learn how to create standard backups .
Read about best practices for creating backups
Learn how to restore data
Learn how to create standard and enhanced backups.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
