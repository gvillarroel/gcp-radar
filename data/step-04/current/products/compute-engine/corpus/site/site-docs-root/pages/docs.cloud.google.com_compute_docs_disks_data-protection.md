---
title: "Data protection options for disks and instances \_|\_ Compute Engine \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/disks/data-protection
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/disks/data-protection
  title: "Data protection options for disks and instances \_|\_ Compute Engine \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Guides
Send feedback
Data protection options for disks and instances
Stay organized with collections
Save and categorize content based on your preferences.
This document discusses the options available on Compute Engine to
back up and replicate the following Compute Engine resources:
Persistent Disk and Google Cloud Hyperdisk volumes
Virtual machine (VM) and bare metal instances
Workloads running in Compute Engine and on-premises
To safeguard important data, Google recommends using one of the backup options
discussed in this document. You can't recover a compute instance, disk, image,
or snapshot if you delete it, even if the deletion was accidental.
Options
The following table compares the features you can use to back up and replicate
disks and instances.
Resource to back up
Feature
Description
Use cases
VMs, including attached disks
Backup and DR Service
Managed service providing secure backups for compute
instances across projects.
Defend against ransomware and other risks through insights into
security threat events.
Improve cyber resilience with immutable and indelible backups.
Protect instances while retaining governance and
oversight.
Comprehensive monitoring, auditing, and reporting for compliance.
VMs, including attached disks
Machine images
Instance backups that offer consistency at the I/O operation level
or crash level.
Stores all the configuration, metadata, permissions, and data from
one or more disks required to create an instance.
Long term instance backup and restore.
Instance cloning and replication.
Disks
Standard snapshots
Captures the state of your disk at a particular point in time.
Geo-redundant disk backups for disaster recovery.
Stored as differential copies for better performance and space
efficiency.
Disks
Archive snapshots
The lowest cost geo-redundant disk backup.
Suited for long-term backup for data that's rarely accessed
but must be retained for several months or years.
Offers all the same features as standard snapshots at a
lower cost.
Best for backups needed compliance, audits, and long-term
cold storage.
Disks
Instant snapshots
Quick local disk backup that enables rapid data restoration in
case of application failure, failed upgrades, or user error.
A capture of a disk's contents at a particular point in time
that's saved in the same zone or region as the disk.
Optimized for rapid data restoration, low
recovery time objective (RTO) and recovery point objective (RPO) .
Each instant snapshot is stored as a differential copy of the disk
for more efficient storage and better performance.
Disks
Disk clones
A clone is a live duplicate of the source disk that can be instantly
attached to an instance.
Lets you quickly create staging environments from production.
Quickly copy a disk for backup verification or export offloading.
Not designed for disaster recovery.
Disks
Images
Use to create a copy of a disk, especially a boot disk, that can be used
to create other instances.
Optimized for quickly creating many instances.
Offers instance import and fast disk creation.
Disks
Regional disks
Maintains a copy of disk data in another zone, offering RTO of less
than one minute and RPO of zero.
Provide high availability in the rare event of a zonal outage.
Not designed for data backup.
Disks
Asynchronous Replication
Maintains a copy of disk data in another region to provide
cross-region, active-passive disaster recovery (DR) with low RPO and RTO.
Business continuity for critical applications by minimizing data
loss (RPO of about one minute) in the rare event of a regional outage.
DR testing, failover and failback for multiple disks using
consistency
groups .
Can be used to replicate regional disks, thus protecting workloads
from both zonal and regional outages.
Best practices for backups
Observe the following best practices when creating backups for your disks.
Avoid temporary standard snapshots
To immediately create a copy of a disk in the same zone for verification or
export, use disk clones or instant snapshots instead of standard snapshots.
Compared to disk clones and instant snapshots, standard snapshots
have longer copy times for upload and download.
Schedule hourly standard snapshots for backup and disaster recovery
Schedule hourly standard snapshots .
If you require daily snapshots, consider scheduling snapshots every 6 hours.
Use images for fast and frequent disk creation across regions
To create many disks from a single data source,
use images
instead of snapshots. Because Compute Engine performs local caching in
target zones, disk creation from images is faster than disk creation from
snapshots.
Use machine images to create backups of all disks attached to an instance
To create backups of all disks that are attached to an instance,
use machine images .
A machine image can be used to backup multiple disks at a time to help ensure
that the data captured in the machine image is consistent across all disks. A
persistent disk snapshot can only backup a single disk at a time. For more
information, see When to use machine images .
Use Google Cloud Backup and DR Service to manage instance backups at scale
With Backup and DR Service, you manage backups of your instances across projects and
environments by using advanced policies, centralized monitoring and backup
reporting in the following way:
Create backup vaults
that serve as secure storage locations for your backups.
Create backup plans
to configure the schedule and rules for your backup.
Apply backup plans to existing instances
or during instance creation .
Assign specific permissions for backup access .
Proactively and reactively monitor backup jobs .
Create reports for tracking backups
across resources spanning multiple projects.
When needed, restore an instance from a backup vault .
You can also integrate
Security Command Center
with Backup and DR Service to additionally:
Track audit logs for backup access.
Monitor for malicious activity on your backups.
What's next
Read Best practices for persistent disk snapshots .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
