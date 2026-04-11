---
title: "Backup and DR Service for Compute Engine for self-managed storage \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-compute-engine
  title: "Backup and DR Service for Compute Engine for self-managed storage \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Backup and DR
Reference
Send feedback
Backup and DR Service for Compute Engine for self-managed storage
Stay organized with collections
Save and categorize content based on your preferences.
A Compute Engine instance is a virtual machine (VM) hosted on Google Cloud.
Each instance stores data on Persistent Disk that are attached to the
instance.
Backup and DR Service uses snapshots to incrementally back up data from your
Persistent Disks at the instance level. After Backup and DR creates a
snapshot to back up the current state of some or all Persistent Disks
attached to an instance, you can use the backup image to either:
Mount the image to create a new instance .
Mount the image to a new disk attached to the source instance or a different instance .
Restore the image to the source instance .
Compute Engine stores multiple copies of each snapshot across multiple
locations with automatic checksums to ensure the integrity of your data.
To learn more, see Snapshots .
Note that snapshots are different from
custom images and
machine images , which are useful for creating
instance boot disks. To learn more, see the
table comparing the use of images, snapshots, and instance templates .
How it works: Backup and DR Persistent Disk snapshots
Data backup with Persistent Disk snapshots follows these steps:
The first successful snapshot of an instance creates a snapshot of
each Persistent Disk. For each disk this is a full snapshot that contains
all the data on the Persistent Disk. Metadata relating to the instance is
also backed up to a OnVault pool that is automatically created.
Note: Protection of Compute Engine instances using Backup and DR Service does
not consume any space in the backup/recovery appliance Snapshot pool.
The second snapshot only contains any new data or modified data since the
first snapshot. Data that hasn't changed since snapshot 1 isn't included.
Instead, snapshot 2 contains references to snapshot 1 for any unchanged data.
The third snapshot contains any new or changed data since snapshot 2 but won't
contain any unchanged data from snapshot 1 or 2. Instead, snapshot 3 contains
references to blocks in snapshot 1 and snapshot 2 for any unchanged data.
This repeats for all subsequent snapshots of each protected instances Persistent Disk.
Snapshots are always created based on the last successful snapshot taken.
If an additional disk is added to the instance, this disk is automatically
included in the next snapshot of the instance. You can also use include and exclude
rules to control which persistent disks are included in each backup.
Data restore with Persistent Disk snapshots follows these steps:
Select the instance and point in time that they want to work with.
You should take note also of the storage type and regional location.
Select if you want to mount to an existing instance, create a
new instance or restore the disks of the source instance.
If creating a new instance, select the location variables such as in
which project or zone the instance is created.
Backup and DR requests Compute Engine to create new disks from the snapshots
When these disks are created they are attached to the new or existing instance.
Note: If you create application consistent snapshots of Windows Compute Engine
instances then on mount to existing VM or mount as new VM, you need to
mark your disk as available for read and write to make them usable.
Snapshot storage location
When you create a backup plan for a Compute Engine instance, you can specify
where the backup is stored. The location of a snapshot affects its
availability and can incur networking costs
when creating the snapshot or restoring it to a new disk.
Snapshots can be stored in either one Cloud Storage multi-regional location , such as asia, or one Cloud Storage regional location , such as asia-south1.
A multi-regional storage location provides the highest availability and resilience.
A regional storage location gives you more control over the physical location of
your data because you specify a single region.
A snapshot can be used to create a new instance or disk in any region and zone,
regardless of the storage location of the snapshot.
If you have an organization policy
that includes the resource locations constraint , any snapshot storage location that you specify must
be in the set of locations defined by the constraint. See
Compute Engine resource locations for more information.
If you don't specify a storage location for a snapshot, Backup and DR uses
the default location , which stores
your snapshot in a Cloud Storage multi-regional location closest to the region of
the source disk.
The Backup and DR Compute Engine guide
Check for the cloud credentials
Discover and protect Compute Engine instances
Mount backup images of Compute Engine instances
Restore a Compute Engine instance
Import Persistent Disk snapshot images
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
