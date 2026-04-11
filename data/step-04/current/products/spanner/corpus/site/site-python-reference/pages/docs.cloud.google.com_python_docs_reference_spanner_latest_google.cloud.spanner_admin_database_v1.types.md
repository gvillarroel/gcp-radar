---
title: "Package types (3.63.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/spanner/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types
  title: "Package types (3.63.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Package types (3.63.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
3.63.0 (latest)
3.62.0
3.61.0
3.60.0
3.59.0
3.58.0
3.57.0
3.56.0
3.55.0
3.54.0
3.53.0
3.52.0
3.51.0
3.50.1
3.46.0
3.45.0
3.44.0
3.43.0
3.42.0
3.41.0
3.40.1
3.39.0
3.38.0
3.37.0
3.36.0
3.35.1
3.34.0
3.33.0
3.32.0
3.31.0
3.30.0
3.29.0
3.28.0
3.27.1
3.26.0
3.25.0
3.24.0
3.23.0
3.22.2
3.21.0
3.20.0
3.19.0
3.18.0
3.17.0
3.16.0
3.15.1
3.14.1
3.13.0
3.12.1
3.11.1
3.10.0
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.0
3.2.0
3.1.0
3.0.0
2.1.1
2.0.0
1.19.3
1.18.0
1.17.1
1.16.0
1.15.1
1.14.0
1.13.0
1.12.0
1.11.0
1.10.0
API documentation for spanner_admin_database_v1.types package.
Classes
AddSplitPointsRequest
The request for
AddSplitPoints][google.spanner.admin.database.v1.DatabaseAdmin.AddSplitPoints] .
AddSplitPointsResponse
The response for
AddSplitPoints][google.spanner.admin.database.v1.DatabaseAdmin.AddSplitPoints] .
Backup
A backup of a Cloud Spanner database.
BackupInfo
Information about a backup.
BackupInstancePartition
Instance partition information for the backup.
BackupSchedule
BackupSchedule expresses the automated backup creation
specification for a Spanner database.
Next ID: 10
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
BackupScheduleSpec
Defines specifications of the backup schedule.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
CopyBackupEncryptionConfig
Encryption configuration for the copied backup.
CopyBackupMetadata
Metadata type for the operation returned by
CopyBackup][google.spanner.admin.database.v1.DatabaseAdmin.CopyBackup] .
CopyBackupRequest
The request for
CopyBackup][google.spanner.admin.database.v1.DatabaseAdmin.CopyBackup] .
CreateBackupEncryptionConfig
Encryption configuration for the backup to create.
CreateBackupMetadata
Metadata type for the operation returned by
CreateBackup][google.spanner.admin.database.v1.DatabaseAdmin.CreateBackup] .
CreateBackupRequest
The request for
CreateBackup][google.spanner.admin.database.v1.DatabaseAdmin.CreateBackup] .
CreateBackupScheduleRequest
The request for
CreateBackupSchedule][google.spanner.admin.database.v1.DatabaseAdmin.CreateBackupSchedule] .
CreateDatabaseMetadata
Metadata type for the operation returned by
CreateDatabase][google.spanner.admin.database.v1.DatabaseAdmin.CreateDatabase] .
CreateDatabaseRequest
The request for
CreateDatabase][google.spanner.admin.database.v1.DatabaseAdmin.CreateDatabase] .
CrontabSpec
CrontabSpec can be used to specify the version time and
frequency at which the backup should be created.
Database
A Cloud Spanner database.
DatabaseDialect
Indicates the dialect type of a database.
DatabaseRole
A Cloud Spanner database role.
DdlStatementActionInfo
Action information extracted from a DDL statement. This proto is
used to display the brief info of the DDL statement for the
operation
UpdateDatabaseDdl][google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabaseDdl] .
DeleteBackupRequest
The request for
DeleteBackup][google.spanner.admin.database.v1.DatabaseAdmin.DeleteBackup] .
DeleteBackupScheduleRequest
The request for
DeleteBackupSchedule][google.spanner.admin.database.v1.DatabaseAdmin.DeleteBackupSchedule] .
DropDatabaseRequest
The request for
DropDatabase][google.spanner.admin.database.v1.DatabaseAdmin.DropDatabase] .
EncryptionConfig
Encryption configuration for a Cloud Spanner database.
EncryptionInfo
Encryption information for a Cloud Spanner database or
backup.
FullBackupSpec
The specification for full backups.
A full backup stores the entire contents of the database at a
given version time.
GetBackupRequest
The request for
GetBackup][google.spanner.admin.database.v1.DatabaseAdmin.GetBackup] .
GetBackupScheduleRequest
The request for
GetBackupSchedule][google.spanner.admin.database.v1.DatabaseAdmin.GetBackupSchedule] .
GetDatabaseDdlRequest
The request for
GetDatabaseDdl][google.spanner.admin.database.v1.DatabaseAdmin.GetDatabaseDdl] .
GetDatabaseDdlResponse
The response for
GetDatabaseDdl][google.spanner.admin.database.v1.DatabaseAdmin.GetDatabaseDdl] .
GetDatabaseRequest
The request for
GetDatabase][google.spanner.admin.database.v1.DatabaseAdmin.GetDatabase] .
IncrementalBackupSpec
The specification for incremental backup chains.
An incremental backup stores the delta of changes between a
previous backup and the database contents at a given version
time. An incremental backup chain consists of a full backup and
zero or more successive incremental backups. The first backup
created for an incremental backup chain is always a full backup.
InternalUpdateGraphOperationRequest
Internal request proto, do not use directly.
InternalUpdateGraphOperationResponse
Internal response proto, do not use directly.
ListBackupOperationsRequest
The request for
ListBackupOperations][google.spanner.admin.database.v1.DatabaseAdmin.ListBackupOperations] .
ListBackupOperationsResponse
The response for
ListBackupOperations][google.spanner.admin.database.v1.DatabaseAdmin.ListBackupOperations] .
ListBackupSchedulesRequest
The request for
ListBackupSchedules][google.spanner.admin.database.v1.DatabaseAdmin.ListBackupSchedules] .
ListBackupSchedulesResponse
The response for
ListBackupSchedules][google.spanner.admin.database.v1.DatabaseAdmin.ListBackupSchedules] .
ListBackupsRequest
The request for
ListBackups][google.spanner.admin.database.v1.DatabaseAdmin.ListBackups] .
ListBackupsResponse
The response for
ListBackups][google.spanner.admin.database.v1.DatabaseAdmin.ListBackups] .
ListDatabaseOperationsRequest
The request for
ListDatabaseOperations][google.spanner.admin.database.v1.DatabaseAdmin.ListDatabaseOperations] .
ListDatabaseOperationsResponse
The response for
ListDatabaseOperations][google.spanner.admin.database.v1.DatabaseAdmin.ListDatabaseOperations] .
ListDatabaseRolesRequest
The request for
ListDatabaseRoles][google.spanner.admin.database.v1.DatabaseAdmin.ListDatabaseRoles] .
ListDatabaseRolesResponse
The response for
ListDatabaseRoles][google.spanner.admin.database.v1.DatabaseAdmin.ListDatabaseRoles] .
ListDatabasesRequest
The request for
ListDatabases][google.spanner.admin.database.v1.DatabaseAdmin.ListDatabases] .
ListDatabasesResponse
The response for
ListDatabases][google.spanner.admin.database.v1.DatabaseAdmin.ListDatabases] .
OperationProgress
Encapsulates progress related information for a Cloud Spanner
long running operation.
OptimizeRestoredDatabaseMetadata
Metadata type for the long-running operation used to track
the progress of optimizations performed on a newly restored
database. This long-running operation is automatically created
by the system after the successful completion of a database
restore, and cannot be cancelled.
RestoreDatabaseEncryptionConfig
Encryption configuration for the restored database.
RestoreDatabaseMetadata
Metadata type for the long-running operation returned by
RestoreDatabase][google.spanner.admin.database.v1.DatabaseAdmin.RestoreDatabase] .
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
RestoreDatabaseRequest
The request for
RestoreDatabase][google.spanner.admin.database.v1.DatabaseAdmin.RestoreDatabase] .
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
RestoreInfo
Information about the database restore.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
RestoreSourceType
Indicates the type of the restore source.
SplitPoints
The split points of a table/index.
UpdateBackupRequest
The request for
UpdateBackup][google.spanner.admin.database.v1.DatabaseAdmin.UpdateBackup] .
UpdateBackupScheduleRequest
The request for
UpdateBackupScheduleRequest][google.spanner.admin.database.v1.DatabaseAdmin.UpdateBackupSchedule] .
UpdateDatabaseDdlMetadata
Metadata type for the operation returned by
UpdateDatabaseDdl][google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabaseDdl] .
UpdateDatabaseDdlRequest
Enqueues the given DDL statements to be applied, in order but not
necessarily all at once, to the database schema at some point (or
points) in the future. The server checks that the statements are
executable (syntactically valid, name tables that exist, etc.)
before enqueueing them, but they may still fail upon later execution
(e.g., if a statement from another batch of statements is applied
first and it conflicts in some way, or if there is some data-related
problem like a NULL value in a column to which NOT NULL
would be added). If a statement fails, all subsequent statements in
the batch are automatically cancelled.
Each batch of statements is assigned a name which can be used with
the Operations][google.longrunning.Operations] API to monitor
progress. See the
operation_id][google.spanner.admin.database.v1.UpdateDatabaseDdlRequest.operation_id]
field for more details.
UpdateDatabaseMetadata
Metadata type for the operation returned by
UpdateDatabase][google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabase] .
UpdateDatabaseRequest
The request for
UpdateDatabase][google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabase] .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
