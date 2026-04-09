---
title: "API Keys audit logging \_|\_ API Keys API Documentation \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/api-keys/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/api-keys/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/api-keys/docs/audit-logging
  title: "API Keys audit logging \_|\_ API Keys API Documentation \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Keys API Documentation
Guides
Send feedback
API Keys audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for API keys. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
API keys audit logs use the service name apikeys.googleapis.com .
Filter for this service:
protoPayload . serviceName = "apikeys.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
API keys generates an audit log whose category is dependent on the
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
google.api.apikeys.v2.ApiKeys.GetKeyString
ADMIN_WRITE
google.api.apikeys.v2.ApiKeys.CreateKey (LRO) google.api.apikeys.v2.ApiKeys.DeleteKey (LRO) google.api.apikeys.v2.ApiKeys.UndeleteKey (LRO) google.api.apikeys.v2.ApiKeys.UpdateKey (LRO) google.longrunning.Operations.GetOperation
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for API keys.
google.api.apikeys.v2.ApiKeys
The following audit logs are associated with methods belonging to
google.api.apikeys.v2.ApiKeys .
CreateKey
Method : google.api.apikeys.v2.ApiKeys.CreateKey
Audit log type : Admin activity
Permissions : serviceusage.apiKeys.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.apikeys.v2.ApiKeys.CreateKey"
DeleteKey
Method : google.api.apikeys.v2.ApiKeys.DeleteKey
Audit log type : Admin activity
Permissions : serviceusage.apiKeys.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.apikeys.v2.ApiKeys.DeleteKey"
GetKeyString
Method : google.api.apikeys.v2.ApiKeys.GetKeyString
Audit log type : Data access
Permissions : apikeys.keys.getKeyString - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.apikeys.v2.ApiKeys.GetKeyString"
UndeleteKey
Method : google.api.apikeys.v2.ApiKeys.UndeleteKey
Audit log type : Admin activity
Permissions : apikeys.keys.undelete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.apikeys.v2.ApiKeys.UndeleteKey"
UpdateKey
Method : google.api.apikeys.v2.ApiKeys.UpdateKey
Audit log type : Admin activity
Permissions : serviceusage.apiKeys.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.apikeys.v2.ApiKeys.UpdateKey"
google.longrunning.Operations
The following audit logs are associated with methods belonging to
google.longrunning.Operations .
GetOperation
Method : google.longrunning.Operations.GetOperation
Audit log type : Admin activity
Permissions : apikeys.keys.create - ADMIN_WRITE
apikeys.keys.delete - ADMIN_WRITE
serviceusage.operations.get - DATA_READ
serviceusage.services.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.GetOperation"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
