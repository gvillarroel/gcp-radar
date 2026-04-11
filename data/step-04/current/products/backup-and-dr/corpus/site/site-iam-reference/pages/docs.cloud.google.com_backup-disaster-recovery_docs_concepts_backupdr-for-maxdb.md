---
title: "Backup and DR Service for SAP MaxDB \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-maxdb
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-maxdb
  title: "Backup and DR Service for SAP MaxDB \_|\_ Google Cloud Documentation"
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
Backup and DR Service for SAP MaxDB
Stay organized with collections
Save and categorize content based on your preferences.
SAP MaxDB is the database management system developed and supported by SAP SE.
SAP MaxDB is available on Microsoft Windows, Linux, and Unix, and for the most
prominent hardware platforms.
How it works: Backup and DR volume-based backup with Linux CBT
Only changed blocks are tracked in the bitmap—no copy-on-writes or
I/O-intensive operations.
Data backup and recovery with volume-based backup images and CBT follows these steps:
The Backup and DR agent has CBT to track changed blocks in the database data
area.
The agent calls the database API to freeze or pause database for data backup.
Agent creates LVM snapshot of database data area and synthesizes a bitmap.
Agent call to database API to unfreeze database.
Agent copies changed blocks to backup/recovery appliance, which then deletes
the snapshot and catalogs the backup.
The appliance issues an internal snapshot and synthesizes a point-in-time
virtual full backup.
For data recovery, Backup and DR instantly mounts a rewritable staging disk
and brings the database online.
How it works: file-based backup
Data backup and recovery with file-based backup images follows these
steps:
Backup and DR agent is deployed in the database server.
Mount staging disk on the database server.
Invoke Full+Incremental backup using the dump backup command,
writing the backup image to the mounted disk.
Backup and DR takes an internal snapshot.
Log backups are done in a similar fashion directly from the file-system at
any schedule that you configure.
For data recovery, Backup and DR instantly mounts the staging disk to the
database server and initiates the database restore operation.
Logs can be played to any point in time after the database is restored.
For recovery, Backup and DR instantly mounts the staging disk to the database
server and initiates the database restore operation.
Logs can be played to any point in time after the database is restored.
SAP MaxDB APIs
Backup and DR uses the following SAP MaxDB backup APIs:
Linux CBT and LVM snapshot : MaxDB UTIL_EXECUTE SUSPEND LOGWRITER and
UTIL_EXECUTE RESUME LOGWRITER API with Linux CBT and LVM snapshot
File-based backups : MaxDB
dbmcli -d &lt;dbsid&gt; -u &lt;dbm_username&gt;,&lt;dbm_password&gt;backup_start
file-based backups API
This provides the full backup of the database in backup format. The
prerequisite for data backup is to define the backup template first.
Recovery API restore db recovers the database by physically overwriting the
data area.
MaxDB log backup : MaxDB autolog backup must be enabled on the
application side. Backup and DR copies the log backup files to staging disk
with cp command. As Autolog Backup is enabled we use os command to purge the
log backup.
What's next
Prepare the database for Backup and DR
Other documentation for Backup and DR for MaxDB
This page is one in a series of pages specific to protecting and recovering
MaxDB databases with Backup and DR.
You can find additional information at the following pages:
Backup and DR for SAP MaxDB
Prepare the database for Backup and DR
Add a MaxDB database host and discover databases
Define policy templates and resource profiles
Set application details and settings
Check staging disk format and backup method
Protect the MaxDB database and its logs
Mount a MaxDB database
Recover MaxDB Backups
Create a MaxDB Backup and DR Workflow
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
