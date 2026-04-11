---
title: "Backup and DR Service for SAP IQ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-iq
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-iq
  title: "Backup and DR Service for SAP IQ \_|\_ Google Cloud Documentation"
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
Backup and DR Service for SAP IQ
Stay organized with collections
Save and categorize content based on your preferences.
SAP IQ, formerly Sybase IQ, is a family of relational database management
systems within SAP Information Management division that is centered on several
relational database management system offerings. This documentation explains how
to protect SAP IQ application consistent database data with Backup and DR in a
Linux environment.
Backup and DR uses these SAP IQ backup APIs:
File-based backups : SAP IQ dump database file-based backups API: This
provides the full and incremental backups of the database in backup format.
On recovery, the restore db API recovers the database by physically
overwriting the data area.
Log backup : SAP IQ PITR log backup: During a PITR log backup, the SAP IQ
API Backup database point in time recovery logs only to $TARGET_MOUNTPOINT
command is used for log backup. OS-level commands are used for logs purging.
How it works: Backup and DR volume-based backup with Linux CBT
Data backup and recovery follows these steps:
The Backup and DR agent has CBT to track changed blocks in the database data
area.
The agent calls the database API to freeze or pause database for data backup.
Agent creates LVM snapshot of database data area and synthesizes a bitmap.
Agent call to database API to unfreeze database.
Agent copies changed blocks to backup/recovery appliance appliance, which then deletes
the snapshot and catalogs the backup.
The appliance issues an internal snapshot and synthesizes a point-in-time
virtual full backup.
For data recovery, Backup and DR instantly mounts a rewritable staging disk
and brings the database online.
How it works: file-based backup
Data backup and recovery with file-based backup images follows these steps:
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
What's next
Prepare the database for Backup and DR
Other documentation for Backup and DR for SAP IQ
This page is one in a series of pages specific to protecting and recovering
SAP IQ databases with Backup and DR.
You can find additional information at the following:
Backup and DR for SAP IQ
Prepare the database for Backup and DR
Add a SAP IQ database host and discover databases
Define policy templates and resource profiles
Set application details and settings
Check staging disk format and backup method
Protect the SAP IQ database and its logs
Mount an SAP IQ database
Mount and migrate an SAP IQ database to a new location
Recover SAP IQ Backups
Create an SAP IQ Backup and DR Workflow
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
