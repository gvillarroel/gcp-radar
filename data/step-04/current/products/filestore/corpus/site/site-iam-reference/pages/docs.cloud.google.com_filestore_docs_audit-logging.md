---
title: "Filestore API audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/audit-logging
  title: "Filestore API audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Filestore
Guides
Send feedback
Filestore API audit logging
Stay organized with collections
Save and categorize content based on your preferences.
Note: Filestore supports only Admin Activity ,
or control plane, audit logs. While ADMIN_READ methods are considered a
type of Data Access audit logs, they are the
only Data Access audit logs available. Data plane audit logging is not supported.
This document describes audit logging for Filestore. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Notes
For a full list of Filestore resources and their methods, see the Filestore API overview.
Service name
Filestore audit logs use the service name file.googleapis.com .
Filter for this service:
protoPayload . serviceName = "file.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Filestore generates an audit log whose category is dependent on the
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
google.cloud.filestore.v1.CloudFilestoreManager.GetBackup google.cloud.filestore.v1.CloudFilestoreManager.GetInstance google.cloud.filestore.v1.CloudFilestoreManager.GetSnapshot google.cloud.filestore.v1.CloudFilestoreManager.ListBackups google.cloud.filestore.v1.CloudFilestoreManager.ListInstances google.cloud.filestore.v1.CloudFilestoreManager.ListSnapshots google.cloud.filestore.v1beta1.CloudFilestoreManager.GetBackup google.cloud.filestore.v1beta1.CloudFilestoreManager.GetInstance google.cloud.filestore.v1beta1.CloudFilestoreManager.GetShare google.cloud.filestore.v1beta1.CloudFilestoreManager.GetSnapshot google.cloud.filestore.v1beta1.CloudFilestoreManager.ListBackups google.cloud.filestore.v1beta1.CloudFilestoreManager.ListInstances google.cloud.filestore.v1beta1.CloudFilestoreManager.ListShares google.cloud.filestore.v1beta1.CloudFilestoreManager.ListSnapshots google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations
ADMIN_WRITE
google.cloud.filestore.v1.CloudFilestoreManager.CreateBackup (LRO) google.cloud.filestore.v1.CloudFilestoreManager.CreateInstance (LRO) google.cloud.filestore.v1.CloudFilestoreManager.CreateSnapshot (LRO) google.cloud.filestore.v1.CloudFilestoreManager.DeleteBackup (LRO) google.cloud.filestore.v1.CloudFilestoreManager.DeleteInstance (LRO) google.cloud.filestore.v1.CloudFilestoreManager.DeleteSnapshot (LRO) google.cloud.filestore.v1.CloudFilestoreManager.PromoteReplica (LRO) google.cloud.filestore.v1.CloudFilestoreManager.RestoreInstance (LRO) google.cloud.filestore.v1.CloudFilestoreManager.RevertInstance (LRO) google.cloud.filestore.v1.CloudFilestoreManager.UpdateBackup (LRO) google.cloud.filestore.v1.CloudFilestoreManager.UpdateInstance (LRO) google.cloud.filestore.v1.CloudFilestoreManager.UpdateSnapshot (LRO) google.cloud.filestore.v1beta1.CloudFilestoreManager.CreateBackup (LRO) google.cloud.filestore.v1beta1.CloudFilestoreManager.CreateInstance (LRO) google.cloud.filestore.v1beta1.CloudFilestoreManager.CreateShare (LRO) google.cloud.filestore.v1beta1.CloudFilestoreManager.CreateSnapshot (LRO) google.cloud.filestore.v1beta1.CloudFilestoreManager.DeleteBackup (LRO) google.cloud.filestore.v1beta1.CloudFilestoreManager.DeleteInstance (LRO) google.cloud.filestore.v1beta1.CloudFilestoreManager.DeleteShare (LRO) google.cloud.filestore.v1beta1.CloudFilestoreManager.DeleteSnapshot (LRO) google.cloud.filestore.v1beta1.CloudFilestoreManager.PromoteReplica (LRO) google.cloud.filestore.v1beta1.CloudFilestoreManager.RestoreInstance (LRO) google.cloud.filestore.v1beta1.CloudFilestoreManager.RevertInstance (LRO) google.cloud.filestore.v1beta1.CloudFilestoreManager.UpdateBackup (LRO) google.cloud.filestore.v1beta1.CloudFilestoreManager.UpdateInstance (LRO) google.cloud.filestore.v1beta1.CloudFilestoreManager.UpdateShare (LRO) google.cloud.filestore.v1beta1.CloudFilestoreManager.UpdateSnapshot (LRO) google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Filestore.
google.cloud.filestore.v1.CloudFilestoreManager
The following audit logs are associated with methods belonging to
google.cloud.filestore.v1.CloudFilestoreManager .
CreateBackup
Method : google.cloud.filestore.v1.CloudFilestoreManager.CreateBackup
Audit log type : Admin activity
Permissions : file.backups.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1.CloudFilestoreManager.CreateBackup"
CreateInstance
Method : google.cloud.filestore.v1.CloudFilestoreManager.CreateInstance
Audit log type : Admin activity
Permissions : file.instances.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1.CloudFilestoreManager.CreateInstance"
CreateSnapshot
Method : google.cloud.filestore.v1.CloudFilestoreManager.CreateSnapshot
Audit log type : Admin activity
Permissions : file.snapshots.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1.CloudFilestoreManager.CreateSnapshot"
DeleteBackup
Method : google.cloud.filestore.v1.CloudFilestoreManager.DeleteBackup
Audit log type : Admin activity
Permissions : file.backups.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1.CloudFilestoreManager.DeleteBackup"
DeleteInstance
Method : google.cloud.filestore.v1.CloudFilestoreManager.DeleteInstance
Audit log type : Admin activity
Permissions : file.instances.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1.CloudFilestoreManager.DeleteInstance"
DeleteSnapshot
Method : google.cloud.filestore.v1.CloudFilestoreManager.DeleteSnapshot
Audit log type : Admin activity
Permissions : file.snapshots.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1.CloudFilestoreManager.DeleteSnapshot"
GetBackup
Method : google.cloud.filestore.v1.CloudFilestoreManager.GetBackup
Audit log type : Data access
Permissions : file.backups.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1.CloudFilestoreManager.GetBackup"
GetInstance
Method : google.cloud.filestore.v1.CloudFilestoreManager.GetInstance
Audit log type : Data access
Permissions : file.instances.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1.CloudFilestoreManager.GetInstance"
GetSnapshot
Method : google.cloud.filestore.v1.CloudFilestoreManager.GetSnapshot
Audit log type : Data access
Permissions : file.snapshots.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1.CloudFilestoreManager.GetSnapshot"
ListBackups
Method : google.cloud.filestore.v1.CloudFilestoreManager.ListBackups
Audit log type : Data access
Permissions : file.backups.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1.CloudFilestoreManager.ListBackups"
ListInstances
Method : google.cloud.filestore.v1.CloudFilestoreManager.ListInstances
Audit log type : Data access
Permissions : file.instances.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1.CloudFilestoreManager.ListInstances"
ListSnapshots
Method : google.cloud.filestore.v1.CloudFilestoreManager.ListSnapshots
Audit log type : Data access
Permissions : file.snapshots.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1.CloudFilestoreManager.ListSnapshots"
PromoteReplica
Method : google.cloud.filestore.v1.CloudFilestoreManager.PromoteReplica
Audit log type : Admin activity
Permissions : file.instances.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1.CloudFilestoreManager.PromoteReplica"
RestoreInstance
Method : google.cloud.filestore.v1.CloudFilestoreManager.RestoreInstance
Audit log type : Admin activity
Permissions : file.instances.restore - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1.CloudFilestoreManager.RestoreInstance"
RevertInstance
Method : google.cloud.filestore.v1.CloudFilestoreManager.RevertInstance
Audit log type : Admin activity
Permissions : file.instances.revert - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1.CloudFilestoreManager.RevertInstance"
UpdateBackup
Method : google.cloud.filestore.v1.CloudFilestoreManager.UpdateBackup
Audit log type : Admin activity
Permissions : file.backups.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1.CloudFilestoreManager.UpdateBackup"
UpdateInstance
Method : google.cloud.filestore.v1.CloudFilestoreManager.UpdateInstance
Audit log type : Admin activity
Permissions : file.instances.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1.CloudFilestoreManager.UpdateInstance"
UpdateSnapshot
Method : google.cloud.filestore.v1.CloudFilestoreManager.UpdateSnapshot
Audit log type : Admin activity
Permissions : file.snapshots.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1.CloudFilestoreManager.UpdateSnapshot"
google.cloud.filestore.v1beta1.CloudFilestoreManager
The following audit logs are associated with methods belonging to
google.cloud.filestore.v1beta1.CloudFilestoreManager .
CreateBackup
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.CreateBackup
Audit log type : Admin activity
Permissions : file.backups.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.CreateBackup"
CreateInstance
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.CreateInstance
Audit log type : Admin activity
Permissions : file.instances.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.CreateInstance"
CreateShare
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.CreateShare
Audit log type : Admin activity
Permissions : file.shares.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.CreateShare"
CreateSnapshot
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.CreateSnapshot
Audit log type : Admin activity
Permissions : file.snapshots.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.CreateSnapshot"
DeleteBackup
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.DeleteBackup
Audit log type : Admin activity
Permissions : file.backups.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.DeleteBackup"
DeleteInstance
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.DeleteInstance
Audit log type : Admin activity
Permissions : file.instances.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.DeleteInstance"
DeleteShare
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.DeleteShare
Audit log type : Admin activity
Permissions : file.shares.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.DeleteShare"
DeleteSnapshot
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.DeleteSnapshot
Audit log type : Admin activity
Permissions : file.snapshots.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.DeleteSnapshot"
GetBackup
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.GetBackup
Audit log type : Data access
Permissions : file.backups.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.GetBackup"
GetInstance
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.GetInstance
Audit log type : Data access
Permissions : file.instances.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.GetInstance"
GetShare
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.GetShare
Audit log type : Data access
Permissions : file.shares.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.GetShare"
GetSnapshot
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.GetSnapshot
Audit log type : Data access
Permissions : file.snapshots.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.GetSnapshot"
ListBackups
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.ListBackups
Audit log type : Data access
Permissions : file.backups.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.ListBackups"
ListInstances
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.ListInstances
Audit log type : Data access
Permissions : file.instances.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.ListInstances"
ListShares
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.ListShares
Audit log type : Data access
Permissions : file.shares.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.ListShares"
ListSnapshots
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.ListSnapshots
Audit log type : Data access
Permissions : file.snapshots.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.ListSnapshots"
PromoteReplica
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.PromoteReplica
Audit log type : Admin activity
Permissions : file.instances.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.PromoteReplica"
RestoreInstance
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.RestoreInstance
Audit log type : Admin activity
Permissions : file.instances.restore - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.RestoreInstance"
RevertInstance
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.RevertInstance
Audit log type : Admin activity
Permissions : file.instances.revert - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.RevertInstance"
UpdateBackup
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.UpdateBackup
Audit log type : Admin activity
Permissions : file.backups.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.UpdateBackup"
UpdateInstance
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.UpdateInstance
Audit log type : Admin activity
Permissions : file.instances.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.UpdateInstance"
UpdateShare
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.UpdateShare
Audit log type : Admin activity
Permissions : file.shares.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.UpdateShare"
UpdateSnapshot
Method : google.cloud.filestore.v1beta1.CloudFilestoreManager.UpdateSnapshot
Audit log type : Admin activity
Permissions : file.snapshots.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.filestore.v1beta1.CloudFilestoreManager.UpdateSnapshot"
google.longrunning.Operations
The following audit logs are associated with methods belonging to
google.longrunning.Operations .
CancelOperation
Method : google.longrunning.Operations.CancelOperation
Audit log type : Admin activity
Permissions : file.operations.cancel - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.CancelOperation"
DeleteOperation
Method : google.longrunning.Operations.DeleteOperation
Audit log type : Admin activity
Permissions : file.operations.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.DeleteOperation"
GetOperation
Method : google.longrunning.Operations.GetOperation
Audit log type : Data access
Permissions : file.operations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.GetOperation"
ListOperations
Method : google.longrunning.Operations.ListOperations
Audit log type : Data access
Permissions : file.operations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.ListOperations"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.cloud.location.Locations.GetLocation
google.cloud.location.Locations.ListLocations
google.longrunning.Operations.WaitOperation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
