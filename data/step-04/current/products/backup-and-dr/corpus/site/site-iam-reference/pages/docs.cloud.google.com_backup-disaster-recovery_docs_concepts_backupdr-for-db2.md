---
title: "Backup and DR Service for IBM Db2 \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-db2
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-db2
  title: "Backup and DR Service for IBM Db2 \_|\_ Google Cloud Documentation"
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
Backup and DR Service for IBM Db2
Stay organized with collections
Save and categorize content based on your preferences.
Db2 is a is a family of relational database management systems within
IBM's Information Management division that is centered on several
relational database management system offerings. This section explains
how to protect Db2 application consistent database data with Backup and DR in
Linux environments.
Note: If you are using Pacemaker HADR, then see
Configure Pacemaker-aware snapshots for IBM Db2 HADR .
Protection method
Db2 uses WRITE SUSPEND and WRITE RESUME (Persistent Disk snapshot backup) for both primary
and secondary Db2 databases on a Compute Engine instance to incrementally back
up data and log volumes from your Persistent Disks with application consistency.
Backup and DR stores multiple copies of each snapshot across multiple
locations with automatic checksums to ensure the integrity of your data.
The following are Db2 backup APIs used by Backup and DR:
Standby (HADR) database : The Db2 database deactivate and
Db2 database activate API are used for freeze and thaw.
Db2 log backup : Logs are flushed using Db2 archive log for database .
During a log backup, the payload of the log segments is copied from
the log area to the location specified by the parameter logarchmeth1.
Protect IBM Db2 databases
To get started protecting your Db2 databases, go through the Db2 procedures in
Protect and recover an IBM Db2 database running in Compute Engine
Backup and DR uses Persistent Disk snapshots to incrementally back up data
and log volumes from your persistent disks with application consistency.
Backup and DR stores multiple copies of each snapshot across multiple
locations with automatic checksums to ensure the integrity of your data.
What's next
Prepare the database for Backup and DR
Other documentation for Backup and DR for IBM Db2
This page is one in a series of pages specific to protecting and recovering
IBM Db2 databases with Backup and DR.
You can find additional information at:
Backup and DR for Db2
Prepare the database for Backup and DR
Add a Db2 database host and discover databases
Define policy templates and resource profiles
Set application details and settings
Check staging disk format and backup method
Protect the Db2 database and its logs
Mount a Db2 database
Recover a Db2 backup image to another location
Restore Db2 backups
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
