---
title: "Audit logging information \_|\_ Firestore with MongoDB compatibility \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/audit-logging
  title: "Audit logging information \_|\_ Firestore with MongoDB compatibility \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Firestore with MongoDB compatibility
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Audit logging information
This document describes audit logging for Firestore with MongoDB compatibility. Google Cloud
services generate audit logs that record administrative and access activities
within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Notes
When configuring audit logging, use the service name datastore.googleapis.com
to configure both datastore.googleapis.com and firestore.googleapis.com.
Once configured, logs for the Firestore with MongoDB compatibility API include the service name firestore.googleapis.com`.
To view the time it took to process a DATA_READ or DATA_WRITE request, see
the processing_duration field within the metadata object of an AuditLog .
The processing_duration field describes the time the database took to process
a request. This is smaller than the end-user latency. In particular, it does
not include network overhead.
Service name
Firestore audit logs use the service name firestore.googleapis.com .
Filter for this service:
protoPayload.serviceName="firestore.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE , DATA_READ , or
DATA_WRITE . When you call a method, Firestore generates an audit log whose category is dependent on the
type property of the permission required to perform the method.
Methods that require an IAM permission with the type property
value of DATA_READ , DATA_WRITE , or ADMIN_READ generate
Data Access audit logs.
Methods that require an IAM permission with the type property
value of ADMIN_WRITE generate
Admin Activity audit logs.
Permission type
Methods
ADMIN_READ
google.cloud.location.Locations.GetLocation
google.cloud.location.Locations.ListLocations
google.firestore.admin.v1.FirestoreAdmin.GetBackup
google.firestore.admin.v1.FirestoreAdmin.GetBackupSchedule
google.firestore.admin.v1.FirestoreAdmin.GetDatabase
google.firestore.admin.v1.FirestoreAdmin.GetField
google.firestore.admin.v1.FirestoreAdmin.GetIndex
google.firestore.admin.v1.FirestoreAdmin.ListBackupSchedules
google.firestore.admin.v1.FirestoreAdmin.ListBackups
google.firestore.admin.v1.FirestoreAdmin.ListDatabases
google.firestore.admin.v1.FirestoreAdmin.ListFields
google.firestore.admin.v1.FirestoreAdmin.ListIndexes
google.firestore.admin.v1beta1.FirestoreAdmin.GetIndex
google.firestore.admin.v1.MongoDBCompatible.ListIndexes
google.firestore.admin.v1.MongoDBCompatible.ListDatabases
ADMIN_WRITE
google.firestore.admin.v1.FirestoreAdmin.CreateBackupSchedule
google.firestore.admin.v1.FirestoreAdmin.CreateDatabase
google.firestore.admin.v1.FirestoreAdmin.CreateIndex
google.firestore.admin.v1.FirestoreAdmin.DeleteBackup
google.firestore.admin.v1.FirestoreAdmin.DeleteBackupSchedule
google.firestore.admin.v1.FirestoreAdmin.DeleteDatabase
google.firestore.admin.v1.FirestoreAdmin.DeleteIndex
google.firestore.admin.v1.FirestoreAdmin.RestoreDatabase
google.firestore.admin.v1.FirestoreAdmin.UpdateBackupSchedule
google.firestore.admin.v1.FirestoreAdmin.UpdateDatabase
google.firestore.admin.v1.FirestoreAdmin.UpdateField
google.longrunning.Operations.CancelOperation
google.longrunning.Operations.DeleteOperation
DATA_READ
google.firestore.v1.MongoDBCompatible.Find
google.firestore.v1.MongoDBCompatible.Aggregate
google.firestore.v1.MongoDBCompatible.GetMore
google.firestore.v1.MongoDBCompatible.ListCollections
google.firestore.v1.MongoDBCompatible.Count
google.firestore.v1.MongoDBCompatible.Distinct
google.firestore.v1.MongoDBCompatible.CommitTransaction
google.firestore.v1.MongoDBCompatible.AbortTransaction
google.firestore.v1.MongoDBCompatible.EndSessions
google.firestore.v1.MongoDBCompatible.KillCursors
DATA_WRITE
google.firestore.v1.MongoDBCompatible.Insert
google.firestore.v1.MongoDBCompatible.Update
google.firestore.v1.MongoDBCompatible.Delete
google.firestore.v1.MongoDBCompatible.FindAndModify
google.firestore.v1.MongoDBCompatible.CreateCollection
Identify request callers
Audit Log entries include information about the identity that performed the
logged operation. To identify a request caller, see the following fields within
an AuditLog object:
The caller's identity is held in the
AuthenticationInfo
field. This can include the principalEmail of the user. This information
is sometimes redacted .
The callerIp field within the
requestMetadata
object of an AuditLog entry includes the IP address of the caller.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
