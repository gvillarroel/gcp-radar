---
title: "REST Resource: backupRuns \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/backupRuns
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/backupRuns
  title: "REST Resource: backupRuns \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
PostgreSQL
Reference
Send feedback
REST Resource: backupRuns
Stay organized with collections
Save and categorize content based on your preferences.
Resource: BackupRun
JSON representation
SqlBackupRunStatus
SqlBackupRunType
Methods
Resource: BackupRun
A BackupRun resource.
JSON representation
{
"kind" : string ,
"status" : enum ( SqlBackupRunStatus ) ,
"enqueuedTime" : string ,
"id" : string ,
"startTime" : string ,
"endTime" : string ,
"error" : {
object ( OperationError )
} ,
"type" : enum ( SqlBackupRunType ) ,
"description" : string ,
"windowStartTime" : string ,
"instance" : string ,
"selfLink" : string ,
"location" : string ,
"databaseVersion" : enum ( SqlDatabaseVersion ) ,
"diskEncryptionConfiguration" : {
object ( DiskEncryptionConfiguration )
} ,
"diskEncryptionStatus" : {
object ( DiskEncryptionStatus )
} ,
"backupKind" : enum ( SqlBackupKind ) ,
"timeZone" : string ,
"maxChargeableBytes" : string
}
Fields
kind
string
This is always sql#backupRun .
status
enum ( SqlBackupRunStatus )
The status of this run.
enqueuedTime
string ( Timestamp format)
The time the run was enqueued in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
id
string ( int64 format)
The identifier for this backup run. Unique only for a specific Cloud SQL instance.
startTime
string ( Timestamp format)
The time the backup operation actually started in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
The time the backup operation completed in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
error
object ( OperationError )
Information about why the backup operation failed. This is only present if the run has the FAILED status.
type
enum ( SqlBackupRunType )
The type of this run; can be either "AUTOMATED" or "ON_DEMAND" or "FINAL". This field defaults to "ON_DEMAND" and is ignored, when specified for insert requests.
description
string
The description of this run, only applicable to on-demand backups.
windowStartTime
string ( Timestamp format)
The start time of the backup window during which this the backup was attempted in RFC 3339 format, for example 2012-11-15T16:19:00.094Z .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
instance
string
Name of the database instance.
selfLink
string
The URI of this resource.
location
string
Location of the backups.
databaseVersion
enum ( SqlDatabaseVersion )
Output only. The instance database version at the time this backup was made.
diskEncryptionConfiguration
object ( DiskEncryptionConfiguration )
Encryption configuration specific to a backup.
diskEncryptionStatus
object ( DiskEncryptionStatus )
Encryption status specific to a backup.
backupKind
enum ( SqlBackupKind )
Specifies the kind of backup, PHYSICAL or DEFAULT_SNAPSHOT.
timeZone
string
Backup time zone to prevent restores to an instance with a different time zone. Now relevant only for SQL Server.
maxChargeableBytes
string ( int64 format)
Output only. The maximum chargeable bytes for the backup.
SqlBackupRunStatus
The status of a backup run.
Enums
SQL_BACKUP_RUN_STATUS_UNSPECIFIED
The status of the run is unknown.
ENQUEUED
The backup operation was enqueued.
OVERDUE
The backup is overdue across a given backup window. Indicates a problem. Example: Long-running operation in progress during the whole window.
RUNNING
The backup is in progress.
FAILED
The backup failed.
SUCCESSFUL
The backup was successful.
SKIPPED
The backup was skipped (without problems) for a given backup window. Example: Instance was idle.
DELETION_PENDING
The backup is about to be deleted.
DELETION_FAILED
The backup deletion failed.
DELETED
The backup has been deleted.
SqlBackupRunType
Type of backup (i.e. automated, on demand, etc).
Enums
SQL_BACKUP_RUN_TYPE_UNSPECIFIED
This is an unknown BackupRun type.
AUTOMATED
The backup schedule automatically triggers a backup.
ON_DEMAND
The user manually triggers a backup.
Methods
delete
Deletes the backup taken by a backup run.
get
Retrieves a resource containing information about a backup run.
insert
Creates a new backup run on demand.
list
Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-23 UTC."],[],[]]
