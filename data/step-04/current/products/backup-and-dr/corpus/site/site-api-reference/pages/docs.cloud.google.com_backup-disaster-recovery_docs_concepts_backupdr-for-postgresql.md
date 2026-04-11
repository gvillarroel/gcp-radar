---
title: "Backup and DR Service for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-postgresql
  title: "Backup and DR Service for PostgreSQL \_|\_ Google Cloud Documentation"
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
Backup and DR Service for PostgreSQL
Stay organized with collections
Save and categorize content based on your preferences.
PostgreSQL is a powerful, open source object-relational database system
that uses and extends the SQL language combined with many features that
safely store and scale the most complicated data workloads.
PostgreSQL backup API used by Backup and DR
Volume level (Linux change block tracking and LVM snapshot) backups :
Backup and DR uses the PostgreSQL pg_start_backup(label) and
pg_stop_backup() commands when performing backups with Linux change block
tracking and LVM snapshot.
Full+Incremental (file-based traditional) backups : Backup and DR
uses the PostgreSQL pg_dump file-based backups commands. The pg_dump
command doesn't have an option to capture incremental changes of a
database, so each backup is a full database dump backup.
Restore of the database recovers the database by physically
overwriting the data area.
PostgreSQL log backup : During a log backup, Backup and DR
physically copies all the PostgreSQL WALs ( WriteAheadLog ). To purge logs,
Backup and DR uses an OS-level command.
How it works: Backup and DR volume-based backup with Linux CBT
Only changed blocks are tracked in the bitmap: no copy-on-writes, no
I/O-intensive operations.
The following steps describe the process for data backup and recovery:
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
The quiesce or unquiesce command is run on the primary for a volume-level
snapshot job:
select pg_start_backup ( <label> ) ;
select pg_stop_backup () ;
The quiesce and unquiesce commands are run on a standby node for a
volume-level snapshot job:
If PostgreSQL version is 10.x or later:
select pg_wal_replay_pause () ;
select pg_wal_replay_resume () ;
If PostgreSQL version is 9.x:
select pg_xlog_replay_pause () ;
select pg_xlog_replay_resume () ;
How it works: file-based backup
The following steps describe the process for how to perform data backup and
recovery with file-based backup images:
Backup and DR agent is deployed in the database server.
Mount staging disk on the database server.
Invoke full backup using the dump backup command, writing the backup
to the mounted disk.
Backup and DR takes an internal snapshot.
Log backups are done in a similar fashion directly from the file-system at
any schedule that you configure.
For data recovery, Backup and DR instantly mounts the staging disk
to the database server and initiates the database restore operation.
Logs can be played to any point in time after the database is restored.
Note: The pg_dump API doesn't have an option to capture incremental changes
of a database, so each backup is a full database dump backup.
What's next
Prepare the database for Backup and DR
Other documentation for Backup and DR for PostgreSQL
Backup and DR for PostgreSQL
Prepare the database for Backup and DR
Add a PostgreSQL database host and discover databases
Define policy templates and resource profiles
Set application details and settings
Check staging disk format and backup method
Protect the PostgreSQL database and its logs
Mount a PostgreSQL database
Recover PostgreSQL Backups
Create a PostgreSQL Backup and DR Workflow
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
