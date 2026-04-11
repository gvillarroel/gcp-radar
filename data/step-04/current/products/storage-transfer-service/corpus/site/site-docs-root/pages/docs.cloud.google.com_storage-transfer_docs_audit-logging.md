---
title: "Storage Transfer Service audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/audit-logging
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/audit-logging
  title: "Storage Transfer Service audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Send feedback
Storage Transfer Service audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Storage Transfer Service. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Storage Transfer Service audit logs use the service name storagetransfer.googleapis.com .
Filter for this service:
protoPayload . serviceName = "storagetransfer.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Storage Transfer Service generates an audit log whose category is dependent on the
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
google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations google.storagetransfer.v1.StorageTransferService.CreateAgentPool google.storagetransfer.v1.StorageTransferService.GetGoogleServiceAccount google.storagetransfer.v1.StorageTransferService.GetTransferJob google.storagetransfer.v1.StorageTransferService.ListTransferJobs
ADMIN_WRITE
google.longrunning.Operations.CancelOperation google.storagetransfer.v1.StorageTransferService.CreateTransferJob google.storagetransfer.v1.StorageTransferService.DeleteTransferJob google.storagetransfer.v1.StorageTransferService.PauseTransferOperation google.storagetransfer.v1.StorageTransferService.ResumeTransferOperation google.storagetransfer.v1.StorageTransferService.RunTransferJob google.storagetransfer.v1.StorageTransferService.UpdateTransferJob
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Storage Transfer Service.
google.longrunning.Operations
The following audit logs are associated with methods belonging to
google.longrunning.Operations .
CancelOperation
Method : google.longrunning.Operations.CancelOperation
Audit log type : Admin activity
Permissions : storagetransfer.operations.cancel - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.CancelOperation"
GetOperation
Method : google.longrunning.Operations.GetOperation
Audit log type : Data access
Permissions : storagetransfer.operations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.GetOperation"
ListOperations
Method : google.longrunning.Operations.ListOperations
Audit log type : Data access
Permissions : storagetransfer.operations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.ListOperations"
google.storagetransfer.v1.StorageTransferService
The following audit logs are associated with methods belonging to
google.storagetransfer.v1.StorageTransferService .
CreateAgentPool
Method : google.storagetransfer.v1.StorageTransferService.CreateAgentPool
Audit log type : Data access
Permissions : storagetransfer.projects.getServiceAccount - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.storagetransfer.v1.StorageTransferService.CreateAgentPool"
CreateTransferJob
Method : google.storagetransfer.v1.StorageTransferService.CreateTransferJob
Audit log type : Admin activity
Permissions : storagetransfer.jobs.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.storagetransfer.v1.StorageTransferService.CreateTransferJob"
DeleteTransferJob
Method : google.storagetransfer.v1.StorageTransferService.DeleteTransferJob
Audit log type : Admin activity
Permissions : storagetransfer.jobs.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.storagetransfer.v1.StorageTransferService.DeleteTransferJob"
GetGoogleServiceAccount
Method : google.storagetransfer.v1.StorageTransferService.GetGoogleServiceAccount
Audit log type : Data access
Permissions : storagetransfer.projects.getServiceAccount - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.storagetransfer.v1.StorageTransferService.GetGoogleServiceAccount"
GetTransferJob
Method : google.storagetransfer.v1.StorageTransferService.GetTransferJob
Audit log type : Data access
Permissions : storagetransfer.jobs.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.storagetransfer.v1.StorageTransferService.GetTransferJob"
ListTransferJobs
Method : google.storagetransfer.v1.StorageTransferService.ListTransferJobs
Audit log type : Data access
Permissions : storagetransfer.jobs.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.storagetransfer.v1.StorageTransferService.ListTransferJobs"
PauseTransferOperation
Method : google.storagetransfer.v1.StorageTransferService.PauseTransferOperation
Audit log type : Admin activity
Permissions : storagetransfer.operations.pause - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.storagetransfer.v1.StorageTransferService.PauseTransferOperation"
ResumeTransferOperation
Method : google.storagetransfer.v1.StorageTransferService.ResumeTransferOperation
Audit log type : Admin activity
Permissions : storagetransfer.operations.resume - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.storagetransfer.v1.StorageTransferService.ResumeTransferOperation"
RunTransferJob
Method : google.storagetransfer.v1.StorageTransferService.RunTransferJob
Audit log type : Admin activity
Permissions : storagetransfer.jobs.run - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.storagetransfer.v1.StorageTransferService.RunTransferJob"
UpdateTransferJob
Method : google.storagetransfer.v1.StorageTransferService.UpdateTransferJob
Audit log type : Admin activity
Permissions : storagetransfer.jobs.delete - ADMIN_WRITE
storagetransfer.jobs.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.storagetransfer.v1.StorageTransferService.UpdateTransferJob"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.storagetransfer.v1.StorageTransferService.DeleteAgentPool
google.storagetransfer.v1.StorageTransferService.GetAgentPool
google.storagetransfer.v1.StorageTransferService.ListAgentPools
google.storagetransfer.v1.StorageTransferService.UpdateAgentPool
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
