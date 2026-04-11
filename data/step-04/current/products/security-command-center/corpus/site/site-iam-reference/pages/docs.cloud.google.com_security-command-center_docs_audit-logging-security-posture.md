---
title: "Security posture audit logging \_|\_ Security Command Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/audit-logging-security-posture
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/audit-logging-security-posture
  title: "Security posture audit logging \_|\_ Security Command Center \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Security posture audit logging
Stay organized with collections
Save and categorize content based on your preferences.
Premium and Enterprise service tiers (requires organization-level activation )
This document describes audit logging for Security posture. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Security posture audit logs use the service name securityposture.googleapis.com .
Filter for this service:
protoPayload . serviceName = "securityposture.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Security posture generates an audit log whose category is dependent on the
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
DATA_READ
google.cloud.securityposture.v1.SecurityPosture.GetPosture google.cloud.securityposture.v1.SecurityPosture.GetPostureDeployment google.cloud.securityposture.v1.SecurityPosture.GetPostureTemplate google.cloud.securityposture.v1.SecurityPosture.GetReport google.cloud.securityposture.v1.SecurityPosture.ListPostureDeployments google.cloud.securityposture.v1.SecurityPosture.ListPostureRevisions google.cloud.securityposture.v1.SecurityPosture.ListPostureTemplates google.cloud.securityposture.v1.SecurityPosture.ListPostures
DATA_WRITE
google.cloud.securityposture.v1.SecurityPosture.CreatePosture (LRO) google.cloud.securityposture.v1.SecurityPosture.CreatePostureDeployment (LRO) google.cloud.securityposture.v1.SecurityPosture.DeletePosture (LRO) google.cloud.securityposture.v1.SecurityPosture.DeletePostureDeployment (LRO) google.cloud.securityposture.v1.SecurityPosture.ExtractPosture (LRO) google.cloud.securityposture.v1.SecurityPosture.UpdatePosture (LRO) google.cloud.securityposture.v1.SecurityPosture.UpdatePostureDeployment (LRO)
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Security posture.
google.cloud.securityposture.v1.SecurityPosture
The following audit logs are associated with methods belonging to
google.cloud.securityposture.v1.SecurityPosture .
CreatePosture
Method : google.cloud.securityposture.v1.SecurityPosture.CreatePosture
Audit log type : Data access
Permissions : securityposture.postures.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.securityposture.v1.SecurityPosture.CreatePosture"
CreatePostureDeployment
Method : google.cloud.securityposture.v1.SecurityPosture.CreatePostureDeployment
Audit log type : Data access
Permissions : securityposture.postureDeployments.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.securityposture.v1.SecurityPosture.CreatePostureDeployment"
DeletePosture
Method : google.cloud.securityposture.v1.SecurityPosture.DeletePosture
Audit log type : Data access
Permissions : securityposture.postures.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.securityposture.v1.SecurityPosture.DeletePosture"
DeletePostureDeployment
Method : google.cloud.securityposture.v1.SecurityPosture.DeletePostureDeployment
Audit log type : Data access
Permissions : securityposture.postureDeployments.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.securityposture.v1.SecurityPosture.DeletePostureDeployment"
ExtractPosture
Method : google.cloud.securityposture.v1.SecurityPosture.ExtractPosture
Audit log type : Data access
Permissions : securityposture.postures.extract - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.securityposture.v1.SecurityPosture.ExtractPosture"
GetPosture
Method : google.cloud.securityposture.v1.SecurityPosture.GetPosture
Audit log type : Data access
Permissions : securityposture.postures.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securityposture.v1.SecurityPosture.GetPosture"
GetPostureDeployment
Method : google.cloud.securityposture.v1.SecurityPosture.GetPostureDeployment
Audit log type : Data access
Permissions : securityposture.postureDeployments.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securityposture.v1.SecurityPosture.GetPostureDeployment"
GetPostureTemplate
Method : google.cloud.securityposture.v1.SecurityPosture.GetPostureTemplate
Audit log type : Data access
Permissions : securityposture.postureTemplates.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securityposture.v1.SecurityPosture.GetPostureTemplate"
GetReport
Method : google.cloud.securityposture.v1.SecurityPosture.GetReport
Audit log type : Data access
Permissions : securityposture.reports.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securityposture.v1.SecurityPosture.GetReport"
ListPostureDeployments
Method : google.cloud.securityposture.v1.SecurityPosture.ListPostureDeployments
Audit log type : Data access
Permissions : securityposture.postureDeployments.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securityposture.v1.SecurityPosture.ListPostureDeployments"
ListPostureRevisions
Method : google.cloud.securityposture.v1.SecurityPosture.ListPostureRevisions
Audit log type : Data access
Permissions : securityposture.postures.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securityposture.v1.SecurityPosture.ListPostureRevisions"
ListPostureTemplates
Method : google.cloud.securityposture.v1.SecurityPosture.ListPostureTemplates
Audit log type : Data access
Permissions : securityposture.postureTemplates.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securityposture.v1.SecurityPosture.ListPostureTemplates"
ListPostures
Method : google.cloud.securityposture.v1.SecurityPosture.ListPostures
Audit log type : Data access
Permissions : securityposture.postures.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securityposture.v1.SecurityPosture.ListPostures"
UpdatePosture
Method : google.cloud.securityposture.v1.SecurityPosture.UpdatePosture
Audit log type : Data access
Permissions : securityposture.postures.update - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.securityposture.v1.SecurityPosture.UpdatePosture"
UpdatePostureDeployment
Method : google.cloud.securityposture.v1.SecurityPosture.UpdatePostureDeployment
Audit log type : Data access
Permissions : securityposture.postureDeployments.update - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.securityposture.v1.SecurityPosture.UpdatePostureDeployment"
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
google.cloud.securityposture.v1.SecurityPosture.CreateIaCValidationReport
google.longrunning.Operations.CancelOperation
google.longrunning.Operations.DeleteOperation
google.longrunning.Operations.GetOperation
google.longrunning.Operations.ListOperations
google.longrunning.Operations.WaitOperation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
