---
title: "Audit logging for workflows \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/audit-logging
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/audit-logging
  title: "Audit logging for workflows \_|\_ Workflows \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Guides
Send feedback
Audit logging for workflows
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Workflows. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Workflows audit logs use the service name workflows.googleapis.com .
Filter for this service:
protoPayload . serviceName = "workflows.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Workflows generates an audit log whose category is dependent on the
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
google.cloud.workflows.v1.Workflows.GetWorkflow google.cloud.workflows.v1.Workflows.ListWorkflowRevisions google.cloud.workflows.v1.Workflows.ListWorkflows google.cloud.workflows.v1alpha1.Workflows.GetWorkflow google.cloud.workflows.v1alpha1.Workflows.ListWorkflows google.cloud.workflows.v1beta.Workflows.GetWorkflow google.cloud.workflows.v1beta.Workflows.ListWorkflows google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations
ADMIN_WRITE
google.cloud.workflows.v1.Workflows.CreateWorkflow (LRO) google.cloud.workflows.v1.Workflows.DeleteWorkflow (LRO) google.cloud.workflows.v1.Workflows.UpdateWorkflow (LRO) google.cloud.workflows.v1alpha1.Workflows.CreateWorkflow (LRO) google.cloud.workflows.v1alpha1.Workflows.DeleteWorkflow (LRO) google.cloud.workflows.v1alpha1.Workflows.UpdateWorkflow (LRO) google.cloud.workflows.v1beta.Workflows.CreateWorkflow (LRO) google.cloud.workflows.v1beta.Workflows.DeleteWorkflow (LRO) google.cloud.workflows.v1beta.Workflows.UpdateWorkflow (LRO) google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Workflows.
google.cloud.workflows.v1.Workflows
The following audit logs are associated with methods belonging to
google.cloud.workflows.v1.Workflows .
CreateWorkflow
Method : google.cloud.workflows.v1.Workflows.CreateWorkflow
Audit log type : Admin activity
Permissions : workflows.workflows.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workflows.v1.Workflows.CreateWorkflow"
DeleteWorkflow
Method : google.cloud.workflows.v1.Workflows.DeleteWorkflow
Audit log type : Admin activity
Permissions : workflows.workflows.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workflows.v1.Workflows.DeleteWorkflow"
GetWorkflow
Method : google.cloud.workflows.v1.Workflows.GetWorkflow
Audit log type : Data access
Permissions : workflows.workflows.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.v1.Workflows.GetWorkflow"
ListWorkflowRevisions
Method : google.cloud.workflows.v1.Workflows.ListWorkflowRevisions
Audit log type : Data access
Permissions : workflows.workflows.listRevision - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.v1.Workflows.ListWorkflowRevisions"
ListWorkflows
Method : google.cloud.workflows.v1.Workflows.ListWorkflows
Audit log type : Data access
Permissions : workflows.workflows.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.v1.Workflows.ListWorkflows"
UpdateWorkflow
Method : google.cloud.workflows.v1.Workflows.UpdateWorkflow
Audit log type : Admin activity
Permissions : workflows.workflows.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workflows.v1.Workflows.UpdateWorkflow"
google.cloud.workflows.v1alpha1.Workflows
The following audit logs are associated with methods belonging to
google.cloud.workflows.v1alpha1.Workflows .
CreateWorkflow
Method : google.cloud.workflows.v1alpha1.Workflows.CreateWorkflow
Audit log type : Admin activity
Permissions : workflows.workflows.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workflows.v1alpha1.Workflows.CreateWorkflow"
DeleteWorkflow
Method : google.cloud.workflows.v1alpha1.Workflows.DeleteWorkflow
Audit log type : Admin activity
Permissions : workflows.workflows.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workflows.v1alpha1.Workflows.DeleteWorkflow"
GetWorkflow
Method : google.cloud.workflows.v1alpha1.Workflows.GetWorkflow
Audit log type : Data access
Permissions : workflows.workflows.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.v1alpha1.Workflows.GetWorkflow"
ListWorkflows
Method : google.cloud.workflows.v1alpha1.Workflows.ListWorkflows
Audit log type : Data access
Permissions : workflows.workflows.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.v1alpha1.Workflows.ListWorkflows"
UpdateWorkflow
Method : google.cloud.workflows.v1alpha1.Workflows.UpdateWorkflow
Audit log type : Admin activity
Permissions : workflows.workflows.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workflows.v1alpha1.Workflows.UpdateWorkflow"
google.cloud.workflows.v1beta.Workflows
The following audit logs are associated with methods belonging to
google.cloud.workflows.v1beta.Workflows .
CreateWorkflow
Method : google.cloud.workflows.v1beta.Workflows.CreateWorkflow
Audit log type : Admin activity
Permissions : workflows.workflows.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workflows.v1beta.Workflows.CreateWorkflow"
DeleteWorkflow
Method : google.cloud.workflows.v1beta.Workflows.DeleteWorkflow
Audit log type : Admin activity
Permissions : workflows.workflows.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workflows.v1beta.Workflows.DeleteWorkflow"
GetWorkflow
Method : google.cloud.workflows.v1beta.Workflows.GetWorkflow
Audit log type : Data access
Permissions : workflows.workflows.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.v1beta.Workflows.GetWorkflow"
ListWorkflows
Method : google.cloud.workflows.v1beta.Workflows.ListWorkflows
Audit log type : Data access
Permissions : workflows.workflows.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.v1beta.Workflows.ListWorkflows"
UpdateWorkflow
Method : google.cloud.workflows.v1beta.Workflows.UpdateWorkflow
Audit log type : Admin activity
Permissions : workflows.workflows.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.workflows.v1beta.Workflows.UpdateWorkflow"
google.longrunning.Operations
The following audit logs are associated with methods belonging to
google.longrunning.Operations .
CancelOperation
Method : google.longrunning.Operations.CancelOperation
Audit log type : Admin activity
Permissions : workflows.operations.cancel - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.CancelOperation"
DeleteOperation
Method : google.longrunning.Operations.DeleteOperation
Audit log type : Admin activity
Permissions : workflows.operations.cancel - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.DeleteOperation"
GetOperation
Method : google.longrunning.Operations.GetOperation
Audit log type : Data access
Permissions : workflows.operations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.GetOperation"
ListOperations
Method : google.longrunning.Operations.ListOperations
Audit log type : Data access
Permissions : workflows.operations.list - ADMIN_READ
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
