---
title: "Database Migration Service for SQL Server \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/database-migration/docs/sqlserver/scenario-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/database-migration/docs
source_metadata:
  url: https://docs.cloud.google.com/database-migration/docs/sqlserver/scenario-overview
  title: "Database Migration Service for SQL Server \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Database Migration Service
Homogeneous migration to SQL Server
Send feedback
Database Migration Service for SQL Server
Stay organized with collections
Save and categorize content based on your preferences.
You can migrate SQL Server databases to Cloud SQL for SQL Server
instances with Database Migration Service by using a backup and restore flow.
You first upload the full database backup and transaction
log files to a Cloud Storage bucket. Database Migration Service then actively
monitors your bucket, and continuously replicates your data to the destination
Cloud SQL for SQL Server instance.
This page provides an overview of the key Database Migration Service
features for homogeneous SQL Server migrations:
Supported source and destination lists all SQL Server
versions supported by Database Migration Service.
Continuous migrations data flow provides an end-to-end overview
of how your data moves in Google Cloud during the migration process.
Monitoring
gives an introduction for logs and metrics that can
help you observe the progress and health of your migration job.
Encryption looks at how you can migrate
with encrypted SQL Server backup files.
Supported source and destination databases
You can use Database Migration Service to migrate between the same SQL Server
version and edition, or from earlier versions of
SQL Server to later versions supported in Cloud SQL, as long
as you follow the version compatibility guidelines. For more information,
see the supported version and edition upgrades for your SQL Server
version in Microsoft documentation. For example, see
Supported version and edition upgrades (SQL Server 2022) .
The following table lists all supported SQL Server source and destination
databases:
Source databases
Destination databases
Amazon RDS
Cloud SQL for SQL Server versions 2022, 2019, 2017
Self-managed SQL Server
(on premises or on any cloud VM that you fully control)
Continuous migrations data flow
For homogeneous SQL Server migrations to Cloud SQL,
Database Migration Service supports the
continuous migration flow. In this approach, your data is first
loaded from a full database backup file, then from a differential backup file,
and then continuously updated based on transaction log files you upload to
a dedicated Cloud Storage bucket.
Figure 1. Data movement during Database Migration Service for
SQL Server migrations. (click to enlarge)
At a high level, your data moves through the migration phases as follows:
You upload your backup files to Cloud Storage.
Continuous SQL Server migrations require that you first take a
full backup of your source database, and then upload the backup file to
a Cloud Storage bucket.
For subsequent updates, you can optionally provide a differential backup file,
and then upload transaction log files.
You can also automate continuous transaction log creation and uploads.
For more information on automating continuous transaction log creation and
uploads, see
Schedule transaction log backups .
For details on how Database Migration Service uses different types of backup files
in homogeneous SQL Server migrations, see
Supported backup file types .
When the migration job starts, Database Migration Service loads the latest full
database backup to the destination Cloud SQL for SQL Server instance.
Once the initial load is complete, Database Migration Service switches to the incremental
load phase. At this point, Database Migration Service performs the following:
If your migration job is configured to use a differential backup file,
Database Migration Service scans the diff folder and loads differential backup
files to your destination instance. If your migration job is configured
to use a differential backup file, but Database Migration Service can't find it
in the Cloud Storage bucket, the migration job shows an error
while continuously searching the diff folder for the differential
backup file.
Database Migration Service loads differential backup files only once, at the beginning
of the incremental load phase. When the migration job proceeds to work with
transaction log files no new differential backup files are recognized when
you upload them to the diff folder.
Now Database Migration Service continuously scans your Cloud Storage bucket
for transaction log backup files to replicate on your destination instance.
As new data shows up in your source database, you can keep exporting
the transaction log backup files and uploading them to the same Cloud Storage
bucket. Database Migration Service picks up all new transaction log backup files and
replicates them on the destination database.
You can stop the ongoing replication and promote the migration job when you want
to switch your application to so that it uses the Cloud SQL for SQL Server
destination instance as the production database. For a detailed step-by-step
migration guide, see
Cloud SQL for SQL Server migration guide .
Monitoring
Figure 2. Sample observability diagram in Database Migration Service.
(click to enlarge)
Database Migration Service provides extensive logging and observability capabilities
to help you monitor the migration progress. These features include real-time
diagnostics for replication delay and transaction log backup file processing,
as well as detailed logs for Cloud SQL for SQL Server destination instance health
and migration job state.
For more details, see
Migration job metrics .
Encryption
Database Migration Service is fully compatible with
encrypted SQL Server backups . If you upload your
encryption key to Google Cloud, Database Migration Service can safely decrypt
your data and load it to the Cloud SQL for SQL Server destination instance without
compromising your data security.
For more details, see
Encrypted SQL Server backup files .
What's next
To learn more about SQL Server data and feature support in
Database Migration Service, see
Known limitations .
To get a complete, step-by-step migration walkthrough, see
Cloud SQL for SQL Server migration guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
