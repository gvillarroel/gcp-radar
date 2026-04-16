---
title: "Spanner audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/spanner/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/spanner/docs/access-with-fgac
source_metadata:
  url: https://docs.cloud.google.com/spanner/docs/audit-logging
  title: "Spanner audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Spanner
Guides
Send feedback
Spanner audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Spanner. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Notes
To view the time it took to process a DATA_READ or DATA_WRITE request, refer to the Processing Duration section .
Service name
Spanner audit logs use the service name spanner.googleapis.com .
Filter for this service:
protoPayload . serviceName = "spanner.googleapis.com"
Methods by permission type
Data access methods Read , StreamingRead , ExecuteSql , and ExecuteStreamingSql that perform a read operation might also start a read-write transaction if specified in the method's TransactionSelector . In such cases, the method will check both DATA_READ and DATA_WRITE permission types.
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Spanner generates an audit log whose category is dependent on the
type property of the permission required to perform the method.
Methods that require an IAM permission with the type property value
of DATA_READ , DATA_WRITE , or ADMIN_READ generate
Data Access audit logs.
Methods that require an IAM permission with the type property value
of ADMIN_WRITE generate
Admin Activity audit logs.
API methods in the following list that are marked with (LRO) are long-running operations (LROs).
These methods usually generate two audit log entries: one when the operation starts and
another when it ends. For more information see Audit logs for long-running operations .
Permission type
Methods
ADMIN_READ
google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations google.spanner.admin.database.v1.DatabaseAdmin.GetBackup google.spanner.admin.database.v1.DatabaseAdmin.GetBackupSchedule google.spanner.admin.database.v1.DatabaseAdmin.GetDatabase google.spanner.admin.database.v1.DatabaseAdmin.GetDatabaseDdl google.spanner.admin.database.v1.DatabaseAdmin.GetIamPolicy google.spanner.admin.database.v1.DatabaseAdmin.ListBackupOperations google.spanner.admin.database.v1.DatabaseAdmin.ListBackupSchedules google.spanner.admin.database.v1.DatabaseAdmin.ListBackups google.spanner.admin.database.v1.DatabaseAdmin.ListDatabaseOperations google.spanner.admin.database.v1.DatabaseAdmin.ListDatabaseRoles google.spanner.admin.database.v1.DatabaseAdmin.ListDatabases google.spanner.admin.database.v1.DatabaseAdmin.TestIamPermissions google.spanner.admin.instance.v1.InstanceAdmin.GetIamPolicy google.spanner.admin.instance.v1.InstanceAdmin.GetInstance google.spanner.admin.instance.v1.InstanceAdmin.GetInstanceConfig google.spanner.admin.instance.v1.InstanceAdmin.GetInstancePartition google.spanner.admin.instance.v1.InstanceAdmin.ListInstanceConfigs google.spanner.admin.instance.v1.InstanceAdmin.ListInstancePartitions google.spanner.admin.instance.v1.InstanceAdmin.ListInstances google.spanner.admin.instance.v1.InstanceAdmin.TestIamPermissions
ADMIN_WRITE
google.longrunning.Operations.CancelOperation google.spanner.admin.database.v1.DatabaseAdmin.AddSplitPoints google.spanner.admin.database.v1.DatabaseAdmin.ChangeQuorum (LRO) google.spanner.admin.database.v1.DatabaseAdmin.CopyBackup (LRO) google.spanner.admin.database.v1.DatabaseAdmin.CreateBackup (LRO) google.spanner.admin.database.v1.DatabaseAdmin.CreateBackupSchedule google.spanner.admin.database.v1.DatabaseAdmin.CreateDatabase (LRO) google.spanner.admin.database.v1.DatabaseAdmin.DeleteBackup google.spanner.admin.database.v1.DatabaseAdmin.DeleteBackupSchedule google.spanner.admin.database.v1.DatabaseAdmin.DropDatabase google.spanner.admin.database.v1.DatabaseAdmin.RestoreDatabase (LRO) google.spanner.admin.database.v1.DatabaseAdmin.SetIamPolicy google.spanner.admin.database.v1.DatabaseAdmin.UpdateBackup google.spanner.admin.database.v1.DatabaseAdmin.UpdateBackupSchedule google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabase (LRO) google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabaseDdl (LRO) google.spanner.admin.instance.v1.InstanceAdmin.CreateInstance (LRO) google.spanner.admin.instance.v1.InstanceAdmin.CreateInstanceConfig (LRO) google.spanner.admin.instance.v1.InstanceAdmin.CreateInstancePartition (LRO) google.spanner.admin.instance.v1.InstanceAdmin.DeleteInstance google.spanner.admin.instance.v1.InstanceAdmin.DeleteInstanceConfig google.spanner.admin.instance.v1.InstanceAdmin.DeleteInstancePartition google.spanner.admin.instance.v1.InstanceAdmin.MoveInstance (LRO) google.spanner.admin.instance.v1.InstanceAdmin.SetIamPolicy google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstance (LRO) google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstanceConfig (LRO) google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstancePartition (LRO)
DATA_READ
google.cloud.keyvisualizer.KeyVisualizer.GetScan google.spanner.adapter.v1.Adapter.AdaptMessage google.spanner.v1.Spanner.BeginTransaction google.spanner.v1.Spanner.ExecuteSql google.spanner.v1.Spanner.ExecuteStreamingSql google.spanner.v1.Spanner.GetSession google.spanner.v1.Spanner.ListSessions google.spanner.v1.Spanner.PartitionQuery google.spanner.v1.Spanner.PartitionRead google.spanner.v1.Spanner.Read google.spanner.v1.Spanner.StreamingRead
DATA_WRITE
google.spanner.adapter.v1.Adapter.AdaptMessage google.spanner.adapter.v1.Adapter.CreateSession google.spanner.v1.Spanner.BatchCreateSessions google.spanner.v1.Spanner.BatchWrite google.spanner.v1.Spanner.BeginTransaction google.spanner.v1.Spanner.Commit google.spanner.v1.Spanner.CreateSession google.spanner.v1.Spanner.DeleteSession google.spanner.v1.Spanner.ExecuteBatchDml google.spanner.v1.Spanner.Rollback
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Spanner.
google.cloud.keyvisualizer.KeyVisualizer
The following audit logs are associated with methods belonging to
google.cloud.keyvisualizer.KeyVisualizer .
GetScan
Method : google.cloud.keyvisualizer.KeyVisualizer.GetScan
Audit log type : Data access
Permissions : spanner.databases.read - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.keyvisualizer.KeyVisualizer.GetScan"
google.longrunning.Operations
The following audit logs are associated with methods belonging to
google.longrunning.Operations .
CancelOperation
Method : google.longrunning.Operations.CancelOperation
Audit log type : Admin activity
Permissions : spanner.backupOperations.cancel - ADMIN_WRITE
spanner.databaseOperations.cancel - ADMIN_WRITE
spanner.instanceOperations.cancel - ADMIN_WRITE
spanner.instancePartitionOperations.cancel - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.CancelOperation"
GetOperation
Method : google.longrunning.Operations.GetOperation
Audit log type : Data access
Permissions : spanner.backupOperations.get - ADMIN_READ
spanner.databaseOperations.get - ADMIN_READ
spanner.instanceOperations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.GetOperation"
ListOperations
Method : google.longrunning.Operations.ListOperations
Audit log type : Data access
Permissions : spanner.backupOperations.list - ADMIN_READ
spanner.databaseOperations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.ListOperations"
google.spanner.adapter.v1.Adapter
The following audit logs are associated with methods belonging to
google.spanner.adapter.v1.Adapter .
AdaptMessage
Method : google.spanner.adapter.v1.Adapter.AdaptMessage
Audit log type : Data access
Permissions : spanner.databases.adapt - DATA_WRITE
spanner.databases.select - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.adapter.v1.Adapter.AdaptMessage"
CreateSession
Method : google.spanner.adapter.v1.Adapter.CreateSession
Audit log type : Data access
Permissions : spanner.sessions.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.adapter.v1.Adapter.CreateSession"
google.spanner.admin.database.v1.DatabaseAdmin
The following audit logs are associated with methods belonging to
google.spanner.admin.database.v1.DatabaseAdmin .
AddSplitPoints
Method : google.spanner.admin.database.v1.DatabaseAdmin.AddSplitPoints
Audit log type : Admin activity
Permissions : spanner.databases.addSplitPoints - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.AddSplitPoints"
ChangeQuorum
Method : google.spanner.admin.database.v1.DatabaseAdmin.ChangeQuorum
Audit log type : Admin activity
Permissions : spanner.databases.changequorum - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.ChangeQuorum"
CopyBackup
Method : google.spanner.admin.database.v1.DatabaseAdmin.CopyBackup
Audit log type : Admin activity
Permissions : spanner.backups.copy - ADMIN_WRITE
spanner.backups.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.CopyBackup"
CreateBackup
Method : google.spanner.admin.database.v1.DatabaseAdmin.CreateBackup
Audit log type : Admin activity
Permissions : spanner.backups.create - ADMIN_WRITE
spanner.databases.createBackup - ADMIN_READ
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.CreateBackup"
Note: The entry that is logged when the operation finishes does not contain any authentication or authorization information. Authentication and authorization information is available in the matching entry that was logged when the operation begins. To find the matching log entry in the Logs Explorer , click the log entry's operation.id field and then select Show matching entries in the menu.
CreateBackupSchedule
Method : google.spanner.admin.database.v1.DatabaseAdmin.CreateBackupSchedule
Audit log type : Admin activity
Permissions : spanner.backupSchedules.create - ADMIN_WRITE
spanner.databases.createBackup - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.CreateBackupSchedule"
CreateDatabase
Method : google.spanner.admin.database.v1.DatabaseAdmin.CreateDatabase
Audit log type : Admin activity
Permissions : spanner.databases.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.CreateDatabase"
DeleteBackup
Method : google.spanner.admin.database.v1.DatabaseAdmin.DeleteBackup
Audit log type : Admin activity
Permissions : spanner.backups.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.DeleteBackup"
DeleteBackupSchedule
Method : google.spanner.admin.database.v1.DatabaseAdmin.DeleteBackupSchedule
Audit log type : Admin activity
Permissions : spanner.backupSchedules.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.DeleteBackupSchedule"
DropDatabase
Method : google.spanner.admin.database.v1.DatabaseAdmin.DropDatabase
Audit log type : Admin activity
Permissions : spanner.databases.drop - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.DropDatabase"
GetBackup
Method : google.spanner.admin.database.v1.DatabaseAdmin.GetBackup
Audit log type : Data access
Permissions : spanner.backups.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.GetBackup"
GetBackupSchedule
Method : google.spanner.admin.database.v1.DatabaseAdmin.GetBackupSchedule
Audit log type : Data access
Permissions : spanner.backupSchedules.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.GetBackupSchedule"
GetDatabase
Method : google.spanner.admin.database.v1.DatabaseAdmin.GetDatabase
Audit log type : Data access
Permissions : spanner.databases.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.GetDatabase"
GetDatabaseDdl
Method : google.spanner.admin.database.v1.DatabaseAdmin.GetDatabaseDdl
Audit log type : Data access
Permissions : spanner.databases.getDdl - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.GetDatabaseDdl"
GetIamPolicy
Method : google.spanner.admin.database.v1.DatabaseAdmin.GetIamPolicy
Audit log type : Data access
Permissions : spanner.backups.getIamPolicy - ADMIN_READ
spanner.databases.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.GetIamPolicy"
ListBackupOperations
Method : google.spanner.admin.database.v1.DatabaseAdmin.ListBackupOperations
Audit log type : Data access
Permissions : spanner.backupOperations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.ListBackupOperations"
ListBackupSchedules
Method : google.spanner.admin.database.v1.DatabaseAdmin.ListBackupSchedules
Audit log type : Data access
Permissions : spanner.backupSchedules.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.ListBackupSchedules"
ListBackups
Method : google.spanner.admin.database.v1.DatabaseAdmin.ListBackups
Audit log type : Data access
Permissions : spanner.backups.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.ListBackups"
ListDatabaseOperations
Method : google.spanner.admin.database.v1.DatabaseAdmin.ListDatabaseOperations
Audit log type : Data access
Permissions : spanner.databaseOperations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.ListDatabaseOperations"
ListDatabaseRoles
Method : google.spanner.admin.database.v1.DatabaseAdmin.ListDatabaseRoles
Audit log type : Data access
Permissions : spanner.databaseRoles.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.ListDatabaseRoles"
ListDatabases
Method : google.spanner.admin.database.v1.DatabaseAdmin.ListDatabases
Audit log type : Data access
Permissions : spanner.databases.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.ListDatabases"
RestoreDatabase
Method : google.spanner.admin.database.v1.DatabaseAdmin.RestoreDatabase
Audit log type : Admin activity
Permissions : spanner.backups.restoreDatabase - ADMIN_READ
spanner.databases.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.RestoreDatabase"
Note: Even though restoring a database requires authorization on two resources (the backup and restored database, which might reside in different instances), the RestoreDatabase event is logged only once as a single entry in the instance of the restored database. Within this entry, there will be two authorizationInfo entries: one for the database, checking the spanner.databases.create permission, and one for the backup, checking the spanner.backups.restoreDatabase permission. The entry that is logged when the operation finishes does not contain any authentication or authorization information. Authentication and authorization information is available in the matching entry that was logged when the operation begins. To find the matching log entry in the Logs Explorer , click the log entry's operation.id field and then select Show matching entries in the menu.
SetIamPolicy
Method : google.spanner.admin.database.v1.DatabaseAdmin.SetIamPolicy
Audit log type : Admin activity
Permissions : spanner.backups.setIamPolicy - ADMIN_WRITE
spanner.databases.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.SetIamPolicy"
TestIamPermissions
Method : google.spanner.admin.database.v1.DatabaseAdmin.TestIamPermissions
Audit log type : Data access
Permissions : spanner.databases.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.TestIamPermissions"
UpdateBackup
Method : google.spanner.admin.database.v1.DatabaseAdmin.UpdateBackup
Audit log type : Admin activity
Permissions : spanner.backups.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.UpdateBackup"
UpdateBackupSchedule
Method : google.spanner.admin.database.v1.DatabaseAdmin.UpdateBackupSchedule
Audit log type : Admin activity
Permissions : spanner.backupSchedules.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.UpdateBackupSchedule"
UpdateDatabase
Method : google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabase
Audit log type : Admin activity
Permissions : spanner.databases.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabase"
UpdateDatabaseDdl
Method : google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabaseDdl
Audit log type : Admin activity
Permissions : spanner.databases.updateDdl - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabaseDdl"
google.spanner.admin.instance.v1.InstanceAdmin
The following audit logs are associated with methods belonging to
google.spanner.admin.instance.v1.InstanceAdmin .
CreateInstance
Method : google.spanner.admin.instance.v1.InstanceAdmin.CreateInstance
Audit log type : Admin activity
Permissions : spanner.instances.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.CreateInstance"
CreateInstanceConfig
Method : google.spanner.admin.instance.v1.InstanceAdmin.CreateInstanceConfig
Audit log type : Admin activity
Permissions : spanner.instanceConfigs.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.CreateInstanceConfig"
CreateInstancePartition
Method : google.spanner.admin.instance.v1.InstanceAdmin.CreateInstancePartition
Audit log type : Admin activity
Permissions : spanner.instancePartitions.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.CreateInstancePartition"
DeleteInstance
Method : google.spanner.admin.instance.v1.InstanceAdmin.DeleteInstance
Audit log type : Admin activity
Permissions : spanner.instances.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.DeleteInstance"
DeleteInstanceConfig
Method : google.spanner.admin.instance.v1.InstanceAdmin.DeleteInstanceConfig
Audit log type : Admin activity
Permissions : spanner.instanceConfigs.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.DeleteInstanceConfig"
DeleteInstancePartition
Method : google.spanner.admin.instance.v1.InstanceAdmin.DeleteInstancePartition
Audit log type : Admin activity
Permissions : spanner.instancePartitions.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.DeleteInstancePartition"
GetIamPolicy
Method : google.spanner.admin.instance.v1.InstanceAdmin.GetIamPolicy
Audit log type : Data access
Permissions : spanner.instances.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.GetIamPolicy"
GetInstance
Method : google.spanner.admin.instance.v1.InstanceAdmin.GetInstance
Audit log type : Data access
Permissions : spanner.instances.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.GetInstance"
GetInstanceConfig
Method : google.spanner.admin.instance.v1.InstanceAdmin.GetInstanceConfig
Audit log type : Data access
Permissions : spanner.instanceConfigs.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.GetInstanceConfig"
GetInstancePartition
Method : google.spanner.admin.instance.v1.InstanceAdmin.GetInstancePartition
Audit log type : Data access
Permissions : spanner.instancePartitions.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.GetInstancePartition"
ListInstanceConfigs
Method : google.spanner.admin.instance.v1.InstanceAdmin.ListInstanceConfigs
Audit log type : Data access
Permissions : spanner.instanceConfigs.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.ListInstanceConfigs"
ListInstancePartitions
Method : google.spanner.admin.instance.v1.InstanceAdmin.ListInstancePartitions
Audit log type : Data access
Permissions : spanner.instancePartitions.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.ListInstancePartitions"
ListInstances
Method : google.spanner.admin.instance.v1.InstanceAdmin.ListInstances
Audit log type : Data access
Permissions : spanner.instances.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.ListInstances"
MoveInstance
Method : google.spanner.admin.instance.v1.InstanceAdmin.MoveInstance
Audit log type : Admin activity
Permissions : spanner.instances.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.MoveInstance"
SetIamPolicy
Method : google.spanner.admin.instance.v1.InstanceAdmin.SetIamPolicy
Audit log type : Admin activity
Permissions : spanner.instances.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.SetIamPolicy"
TestIamPermissions
Method : google.spanner.admin.instance.v1.InstanceAdmin.TestIamPermissions
Audit log type : Data access
Permissions : spanner.instances.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.TestIamPermissions"
UpdateInstance
Method : google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstance
Audit log type : Admin activity
Permissions : spanner.instances.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstance"
UpdateInstanceConfig
Method : google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstanceConfig
Audit log type : Admin activity
Permissions : spanner.instanceConfigs.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstanceConfig"
UpdateInstancePartition
Method : google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstancePartition
Audit log type : Admin activity
Permissions : spanner.instancePartitions.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.spanner.admin.instance.v1.InstanceAdmin.UpdateInstancePartition"
google.spanner.v1.Spanner
The following audit logs are associated with methods belonging to
google.spanner.v1.Spanner .
BatchCreateSessions
Method : google.spanner.v1.Spanner.BatchCreateSessions
Audit log type : Data access
Permissions : spanner.sessions.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.v1.Spanner.BatchCreateSessions"
BatchWrite
Method : google.spanner.v1.Spanner.BatchWrite
Audit log type : Data access
Permissions : spanner.databases.write - DATA_WRITE
Method is a long-running or streaming operation :
Streaming RPC
Filter for this method :
protoPayload.methodName="google.spanner.v1.Spanner.BatchWrite"
BeginTransaction
Method : google.spanner.v1.Spanner.BeginTransaction
Audit log type : Data access
Permissions : spanner.databases.beginOrRollbackReadWriteTransaction - DATA_WRITE
spanner.databases.beginReadOnlyTransaction - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.v1.Spanner.BeginTransaction"
Note: This method will be DATA_READ for a ReadOnly transaction and DATA_WRITE for a ReadWrite transaction.
Commit
Method : google.spanner.v1.Spanner.Commit
Audit log type : Data access
Permissions : spanner.databases.write - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.v1.Spanner.Commit"
CreateSession
Method : google.spanner.v1.Spanner.CreateSession
Audit log type : Data access
Permissions : spanner.sessions.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.v1.Spanner.CreateSession"
DeleteSession
Method : google.spanner.v1.Spanner.DeleteSession
Audit log type : Data access
Permissions : spanner.sessions.delete - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.v1.Spanner.DeleteSession"
ExecuteBatchDml
Method : google.spanner.v1.Spanner.ExecuteBatchDml
Audit log type : Data access
Permissions : spanner.databases.write - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.v1.Spanner.ExecuteBatchDml"
ExecuteSql
Method : google.spanner.v1.Spanner.ExecuteSql
Audit log type : Data access
Permissions : spanner.databases.select - DATA_READ
spanner.databases.write - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.v1.Spanner.ExecuteSql"
Note: This method might also start a read-write transaction if specified in the method's TransactionSelector . In such cases, the method will match both DATA_READ and DATA_WRITE permission types.
ExecuteStreamingSql
Method : google.spanner.v1.Spanner.ExecuteStreamingSql
Audit log type : Data access
Permissions : spanner.databases.beginOrRollbackReadWriteTransaction - DATA_WRITE
spanner.databases.select - DATA_READ
Method is a long-running or streaming operation :
Streaming RPC
Filter for this method :
protoPayload.methodName="google.spanner.v1.Spanner.ExecuteStreamingSql"
Note: Note: This method might also start a read-write transaction if specified in the method's TransactionSelector . In such cases, the method will match both DATA_READ and DATA_WRITE permission types.
GetSession
Method : google.spanner.v1.Spanner.GetSession
Audit log type : Data access
Permissions : spanner.sessions.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.v1.Spanner.GetSession"
ListSessions
Method : google.spanner.v1.Spanner.ListSessions
Audit log type : Data access
Permissions : spanner.sessions.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.v1.Spanner.ListSessions"
PartitionQuery
Method : google.spanner.v1.Spanner.PartitionQuery
Audit log type : Data access
Permissions : spanner.databaseRoles.use - DATA_WRITE
spanner.databases.beginReadOnlyTransaction - DATA_READ
spanner.databases.partitionQuery - DATA_READ
spanner.databases.useRoleBasedAccess - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.v1.Spanner.PartitionQuery"
PartitionRead
Method : google.spanner.v1.Spanner.PartitionRead
Audit log type : Data access
Permissions : spanner.databases.partitionRead - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.v1.Spanner.PartitionRead"
Read
Method : google.spanner.v1.Spanner.Read
Audit log type : Data access
Permissions : spanner.databases.read - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.v1.Spanner.Read"
Note: This method might also start a read-write transaction if specified in the method's TransactionSelector . In such cases, the method will match both DATA_READ and DATA_WRITE permission types. Important: Requested keys are not logged.
Rollback
Method : google.spanner.v1.Spanner.Rollback
Audit log type : Data access
Permissions : spanner.databases.beginOrRollbackReadWriteTransaction - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.spanner.v1.Spanner.Rollback"
StreamingRead
Method : google.spanner.v1.Spanner.StreamingRead
Audit log type : Data access
Permissions : spanner.databases.beginOrRollbackReadWriteTransaction - DATA_WRITE
spanner.databases.read - DATA_READ
Method is a long-running or streaming operation :
Streaming RPC
Filter for this method :
protoPayload.methodName="google.spanner.v1.Spanner.StreamingRead"
Note: This method might also start a read-write transaction if specified in the method's TransactionSelector . In such cases, the method will match both DATA_READ and DATA_WRITE permission types. Important: Requested keys are not logged.
System events
System Event audit logs are generated by GCP systems, not
direct user action. For more information, see
System Event audit logs .
Method Name
Filter For This Event
Notes
AutoscaleInstance
protoPayload.methodName="AutoscaleInstance"
CreateScheduledBackup
protoPayload.methodName="CreateScheduledBackup"
OptimizeRestoredDatabase
protoPayload.methodName="OptimizeRestoredDatabase"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.cloud.keyvisualizer.KeyVisualizer.ListScans
google.longrunning.Operations.WaitOperation
Processing duration
To view the time it took to process a DATA_READ or DATA_WRITE request,
refer to the processingDurationSeconds field within the metadata object of
the AuditLog . processingDurationSeconds helps you monitor
your request latencies.
processingDurationSeconds describes the Spanner API request
latency. It is the length of time (in seconds) between when the
Spanner API frontend receives the first byte of a request to when
it sends the last byte of a response. The time needed to process API requests in
both the Spanner backend and the API layer is the latency.
However, this latency doesn't include network or Google Front End overhead
between Spanner clients and servers. To visualize the
high-level components involved in a Spanner API request, see
Spanner end-to-end latency guide .
For example, the following is an audit log that contains
processingDurationSeconds information:
{
"protoPayload" : {
"@type" : "type.googleapis.com/google.cloud.audit.AuditLog" ,
"authenticationInfo" : { ... },
"requestMetadata" : { ... },
"serviceName" : "spanner.googleapis.com" ,
"methodName" : "google.spanner.v1.Spanner.Commit" ,
"authorizationInfo" : [{ ... }],
"resourceName" : "projects/example-project/instances/example-instance/databases/example-database/sessions/example-session" ,
"request" : {
"transactionId" : "example-transactionId" ,
"@type" : "type.googleapis.com/google.spanner.v1.CommitRequest" ,
"session" : "projects/example-project/instances/example-instance/databases/example-database/sessions/example-session"
},
"response" : {
"@type" : "type.googleapis.com/google.spanner.v1.CommitResponse" ,
"commitTimestamp" : "2023-02-13T17:11:10.106602Z"
},
"metadata" : {
"@type" : "type.googleapis.com/spanner.cloud.instance_v1.QueryPerformanceMetadata" ,
"processingDurationSeconds" : 0.1932541
}
},
"insertId" : "p9ju4gdi7j0" ,
"resource" : { ... },
"timestamp" : "2023-02-13T17:11:10.000093953Z" ,
"severity" : "INFO" ,
"logName" : "projects/example-project/logs/cloudaudit.googleapis.com %2F data_access" ,
"receiveTimestamp" : "2023-02-13T17:11:11.170517524Z"
}
For ExecuteStreamingSql , StreamingRead , PartitionRead or PartitionQuery
requests, the processingDurationSeconds field is not set. To calculate the
streaming and partition request latency, see
Calculate streaming and partition request latency .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
