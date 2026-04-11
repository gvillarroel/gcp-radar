---
title: "Policy Simulator audit logging \_|\_ Policy Intelligence \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/policy-intelligence/docs/audit-logging/simulator-audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/policy-intelligence/docs/analyze-iam-policies
source_metadata:
  url: https://docs.cloud.google.com/policy-intelligence/docs/audit-logging/simulator-audit-logging
  title: "Policy Simulator audit logging \_|\_ Policy Intelligence \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Policy Intelligence
Guides
Send feedback
Policy Simulator audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Policy Simulator. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Policy Simulator audit logs use the service name policysimulator.googleapis.com .
Filter for this service:
protoPayload . serviceName = "policysimulator.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Policy Simulator generates an audit log whose category is dependent on the
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
google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService.GetOrgPolicyViolationsPreview google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService.ListOrgPolicyViolations google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService.ListOrgPolicyViolationsPreviews google.cloud.policysimulator.v1.Simulator.GetReplay google.cloud.policysimulator.v1.Simulator.ListReplayResults google.cloud.policysimulator.v1beta.AccessPolicySimulator.ListAccessPolicySimulationResults google.cloud.policysimulator.v1beta.OrgPolicyViolationsPreviewService.ListOrgPolicyViolations google.cloud.policysimulator.v1beta.Simulator.GetReplay google.cloud.policysimulator.v1beta.Simulator.ListReplayResults
ADMIN_WRITE
google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService.CreateOrgPolicyViolationsPreview (LRO) google.cloud.policysimulator.v1.Simulator.CreateReplay (LRO) google.cloud.policysimulator.v1beta.OrgPolicyViolationsPreviewService.CreateOrgPolicyViolationsPreview (LRO) google.cloud.policysimulator.v1beta.OrgPolicyViolationsPreviewService.GenerateOrgPolicyViolationsPreview (LRO) google.cloud.policysimulator.v1beta.Simulator.CreateReplay (LRO)
Audit logs for each API interface
google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService
The following audit logs are associated with methods belonging to
google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService .
CreateOrgPolicyViolationsPreview
Method : google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService.CreateOrgPolicyViolationsPreview
Audit log type : Admin activity
Permissions : policysimulator.orgPolicyViolationsPreviews.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService.CreateOrgPolicyViolationsPreview"
GetOrgPolicyViolationsPreview
Method : google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService.GetOrgPolicyViolationsPreview
Audit log type : Data access
Permissions : policysimulator.orgPolicyViolationsPreviews.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService.GetOrgPolicyViolationsPreview"
ListOrgPolicyViolations
Method : google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService.ListOrgPolicyViolations
Audit log type : Data access
Permissions : policysimulator.orgPolicyViolations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService.ListOrgPolicyViolations"
ListOrgPolicyViolationsPreviews
Method : google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService.ListOrgPolicyViolationsPreviews
Audit log type : Data access
Permissions : policysimulator.orgPolicyViolationsPreviews.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.policysimulator.v1.OrgPolicyViolationsPreviewService.ListOrgPolicyViolationsPreviews"
google.cloud.policysimulator.v1.Simulator
The following audit logs are associated with methods belonging to
google.cloud.policysimulator.v1.Simulator .
CreateReplay
Method : google.cloud.policysimulator.v1.Simulator.CreateReplay
Audit log type : Admin activity
Permissions : policysimulator.replays.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.policysimulator.v1.Simulator.CreateReplay"
GetReplay
Method : google.cloud.policysimulator.v1.Simulator.GetReplay
Audit log type : Data access
Permissions : policysimulator.replays.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.policysimulator.v1.Simulator.GetReplay"
ListReplayResults
Method : google.cloud.policysimulator.v1.Simulator.ListReplayResults
Audit log type : Data access
Permissions : policysimulator.replayResults.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.policysimulator.v1.Simulator.ListReplayResults"
google.cloud.policysimulator.v1beta.AccessPolicySimulator
The following audit logs are associated with methods belonging to
google.cloud.policysimulator.v1beta.AccessPolicySimulator .
ListAccessPolicySimulationResults
Method : google.cloud.policysimulator.v1beta.AccessPolicySimulator.ListAccessPolicySimulationResults
Audit log type : Data access
Permissions : policysimulator.accessPolicySimulationResults.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.policysimulator.v1beta.AccessPolicySimulator.ListAccessPolicySimulationResults"
google.cloud.policysimulator.v1beta.OrgPolicyViolationsPreviewService
The following audit logs are associated with methods belonging to
google.cloud.policysimulator.v1beta.OrgPolicyViolationsPreviewService .
CreateOrgPolicyViolationsPreview
Method : google.cloud.policysimulator.v1beta.OrgPolicyViolationsPreviewService.CreateOrgPolicyViolationsPreview
Audit log type : Admin activity
Permissions : policysimulator.orgPolicyViolationsPreviews.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.policysimulator.v1beta.OrgPolicyViolationsPreviewService.CreateOrgPolicyViolationsPreview"
GenerateOrgPolicyViolationsPreview
Method : google.cloud.policysimulator.v1beta.OrgPolicyViolationsPreviewService.GenerateOrgPolicyViolationsPreview
Audit log type : Admin activity
Permissions : policysimulator.orgPolicyViolationsPreviews.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.policysimulator.v1beta.OrgPolicyViolationsPreviewService.GenerateOrgPolicyViolationsPreview"
ListOrgPolicyViolations
Method : google.cloud.policysimulator.v1beta.OrgPolicyViolationsPreviewService.ListOrgPolicyViolations
Audit log type : Data access
Permissions : policysimulator.orgPolicyViolations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.policysimulator.v1beta.OrgPolicyViolationsPreviewService.ListOrgPolicyViolations"
google.cloud.policysimulator.v1beta.Simulator
The following audit logs are associated with methods belonging to
google.cloud.policysimulator.v1beta.Simulator .
CreateReplay
Method : google.cloud.policysimulator.v1beta.Simulator.CreateReplay
Audit log type : Admin activity
Permissions : policysimulator.replays.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.policysimulator.v1beta.Simulator.CreateReplay"
GetReplay
Method : google.cloud.policysimulator.v1beta.Simulator.GetReplay
Audit log type : Data access
Permissions : policysimulator.replays.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.policysimulator.v1beta.Simulator.GetReplay"
ListReplayResults
Method : google.cloud.policysimulator.v1beta.Simulator.ListReplayResults
Audit log type : Data access
Permissions : policysimulator.replayResults.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.policysimulator.v1beta.Simulator.ListReplayResults"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.cloud.policysimulator.v1beta.Simulator.ListReplays
google.longrunning.Operations.GetOperation
google.longrunning.Operations.ListOperations
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
