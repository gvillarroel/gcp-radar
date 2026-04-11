---
title: "Backup and DR Service for MySQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-mysql
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-mysql
  title: "Backup and DR Service for MySQL \_|\_ Google Cloud Documentation"
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
Backup and DR Service for MySQL
Stay organized with collections
Save and categorize content based on your preferences.
MySQL is the world's most popular open source database, used by high profile web
properties.
This page explains how to protect MySQL application consistent database
data with Backup and DR in a Linux environment.
MySQL backup API used by Backup and DR
Volume level (Linux change block tracking and LVM snapshot) backups :
MySQL Flush tables overwriting the data area. With read lock and
Unlock tables API.
Full+Incremental (file-based traditional) backups : MySQL mysqldump
API. This provides the full backup of the database in backup
format. On recovery, the restore db API recovers the database by physically
overwriting the data area.
MySQL log backup : During a log backup, Backup and DR physically copies
all the MySQL binary logs. The MySQL purge binary logs before API is used
to purge the binary logs.
How it works: Backup and DR volume-based backup with Linux CBT
Only changed blocks are tracked in the bitmap: no copy-on-writes, no I/O-intensive operations.
Data backup and recovery follows these steps:
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
The following instructions describe the process for how to perform data backup
and recovery with file-based backup images:
Backup and DR agent is deployed in the database server.
Mount staging disk on the database server.
Invoke full backup using the dump backup command, writing the backup
to the mounted disk.
Backup and DR takes an internal snapshot.
Log backups are done in a similar fashion directly from the file-system at
any schedule that you configure.
For data recovery, Backup and DR instantly mounts the staging disk to the
database server and initiates the database restore operation.
Logs can be played to any point in time after the database is restored.
What's next
Prepare the database for Backup and DR
Other documentation for Backup and DR for MySQL
This page is one in a series of pages specific to protecting and recovering
MySQL databases with Backup and DR.
You can find additional information at:
Backup and DR for MySQL
Prepare the database for Backup and DR
Add a MySQL database host and discover databases
Define policy templates and resource profiles
Set application details and settings
Check staging disk format and backup method
Protect the MySQL database and its logs
Mount a MySQL database
Recover MySQL Backups
Create a MySQL Backup and DR Workflow
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
