---
title: "Backup and DR Service for Filestore and file systems on self-managed storage\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-filesystems
  title: "Backup and DR Service for Filestore and file systems on self-managed storage\
    \ \_|\_ Google Cloud Documentation"
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
Backup and DR Service for Filestore and file systems on self-managed storage
Stay organized with collections
Save and categorize content based on your preferences.
Backup and DR Service lets you capture data from production SMB, NFS, and
Filestore file systems, manage it in the most efficient way possible,
and use virtual copies of the data for business requirements like backup, test
and development, analytics, and AI.
When configuring a backup plan for a file system, you have the following
settings to help ensure that you get exactly what you need:
Exclude Patterns and Include Patterns: You can exclude or include certain
file types. Using either the Exclude Patterns or Include Patterns option,
only the most crucial data is backed-up. Only files are excluded or included,
this does not impact directories. A pattern can include wildcard characters.
On Windows, files named pagefile.sys and hiberfil.sys that appear in the root
directory of a drive are automatically ignored.
Start Paths: Specifies the point in the file share where backup starts. If
the Start Path field is left blank, backup starts at the root directory of
the file system to be backed-up.
Linux example: /usr/local backs up the /usr/local directory.
Windows example: \\SERVERNAME\SHARENAME\abc backs up the abc directory on the file share.
Prune Paths: A prune path specifies a point in the file system where
directory traversals stop. If this field is left blank, the directory
traversal descends into every subdirectory of the start paths being backed up.
Linux example: /usr/local/lib ensures that nothing within /usr/local/lib is
copied, but all other directories and files in /usr/local are copied.
Windows example: \\SERVERNAME\SHARENAME\abc ensures that nothing within
\\SERVERNAME\SHARENAME\abc is copied, but all other directories and files
in \\SERVERNAME\SHARENAME are copied.
Service access point IP address: This allows the backup/recovery appliance
to connect to the Backup and DR agent using the cluster resource IP and to
back up the file system from the active cluster node.
How it works example: Backup and DR volume-based backup with Linux CBT
Only changed blocks are tracked in the bitmap, there are no copy-on-writes or
I/O-intensive operations.
The following steps describe the process for how to perform data backup and
recovery with volume-based backup images and CBT:
The Backup and DR agent has CBT to track changed blocks in the file system.
The agent calls the OS API to freeze or pause file changes.
Agent creates a LVM snapshot of the file system and synthesizes a bitmap.
Agent API call to unfreeze the file system.
Agent copies changed blocks to backup/recovery appliance, which then deletes
the snapshot and catalogs the backup.
The appliance issues an internal snapshot and synthesizes a point-in-time
virtual full backup.
For data recovery, Backup and DR instantly mounts a rewritable staging disk
and brings the file system online.
What's next
Manage hosts and their connected applications
Other documentation for Backup and DR for file systems
This page is one in a series of pages specific to protecting and recovering
filesystems with Backup and DR Service.
You can find additional information in the following pages:
Backup and DR for file systems
Manage hosts and their connected applications
Configure application details and settings to protect file system data
Apply a backup plan to protect a file system
Restore a file system to the source
Mount a file system or file share
Mount and migrate a file system for instant recovery to any target
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
