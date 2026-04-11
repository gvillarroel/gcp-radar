---
title: "System for Cross-domain Identity Management (SCIM) audit logging \_|\_ Identity\
  \ and Access Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamscim
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/audit-logging/audit-logging-iamscim
  title: "System for Cross-domain Identity Management (SCIM) audit logging \_|\_ Identity\
    \ and Access Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Guides
Send feedback
System for Cross-domain Identity Management (SCIM) audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for IAM SCIM Service. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
IAM SCIM Service audit logs use the service name iamscim.googleapis.com .
Filter for this service:
protoPayload . serviceName = "iamscim.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
IAM SCIM Service generates an audit log whose category is dependent on the
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
google.cloud.iamscim.v1alpha1.Users.ListUsers
ADMIN_WRITE
google.cloud.iamscim.v1alpha1.Groups.CreateGroup google.cloud.iamscim.v1alpha1.Groups.DeleteGroup google.cloud.iamscim.v1alpha1.Groups.PatchGroup google.cloud.iamscim.v1alpha1.Users.CreateUser google.cloud.iamscim.v1alpha1.Users.DeleteUser google.cloud.iamscim.v1alpha1.Users.PatchUser google.cloud.iamscim.v1alpha1.Users.PutUser
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for IAM SCIM Service.
google.cloud.iamscim.v1alpha1.Groups
The following audit logs are associated with methods belonging to
google.cloud.iamscim.v1alpha1.Groups .
CreateGroup
Method : google.cloud.iamscim.v1alpha1.Groups.CreateGroup
Audit log type : Admin activity
Permissions : iam.workforcePoolProviderScimGroups.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iamscim.v1alpha1.Groups.CreateGroup"
DeleteGroup
Method : google.cloud.iamscim.v1alpha1.Groups.DeleteGroup
Audit log type : Admin activity
Permissions : iam.workforcePoolProviderScimGroups.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iamscim.v1alpha1.Groups.DeleteGroup"
PatchGroup
Method : google.cloud.iamscim.v1alpha1.Groups.PatchGroup
Audit log type : Admin activity
Permissions : iam.workforcePoolProviderScimGroups.patch - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iamscim.v1alpha1.Groups.PatchGroup"
google.cloud.iamscim.v1alpha1.Users
The following audit logs are associated with methods belonging to
google.cloud.iamscim.v1alpha1.Users .
CreateUser
Method : google.cloud.iamscim.v1alpha1.Users.CreateUser
Audit log type : Admin activity
Permissions : iam.workforcePoolProviderScimUsers.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iamscim.v1alpha1.Users.CreateUser"
DeleteUser
Method : google.cloud.iamscim.v1alpha1.Users.DeleteUser
Audit log type : Admin activity
Permissions : iam.workforcePoolProviderScimUsers.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iamscim.v1alpha1.Users.DeleteUser"
ListUsers
Method : google.cloud.iamscim.v1alpha1.Users.ListUsers
Audit log type : Data access
Permissions : iam.workforcePoolProviderScimUsers.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iamscim.v1alpha1.Users.ListUsers"
PatchUser
Method : google.cloud.iamscim.v1alpha1.Users.PatchUser
Audit log type : Admin activity
Permissions : iam.workforcePoolProviderScimUsers.patch - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iamscim.v1alpha1.Users.PatchUser"
PutUser
Method : google.cloud.iamscim.v1alpha1.Users.PutUser
Audit log type : Admin activity
Permissions : iam.workforcePoolProviderScimUsers.put - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iamscim.v1alpha1.Users.PutUser"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.cloud.iamscim.v1alpha1.Schemas.GetSchema
google.cloud.iamscim.v1alpha1.Schemas.ListSchemas
google.cloud.iamscim.v1alpha1.ServiceProviderConfigService.GetServiceProviderConfig
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
