---
title: "Audit logging for workflow executions \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/audit-logging-workflow-executions
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/audit-logging-workflow-executions
  title: "Audit logging for workflow executions \_|\_ Workflows \_|\_ Google Cloud\
    \ Documentation"
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
Audit logging for workflow executions
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
Workflows audit logs use the service name workflowexecutions.googleapis.com .
Filter for this service:
protoPayload . serviceName = "workflowexecutions.googleapis.com"
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
DATA_READ
google.cloud.workflows.executions.v1.Events.ListCallbacks google.cloud.workflows.executions.v1.ExecutionHistory.GetStepEntry google.cloud.workflows.executions.v1.ExecutionHistory.ListStepEntries google.cloud.workflows.executions.v1.Executions.ExportData google.cloud.workflows.executions.v1.Executions.GetExecution google.cloud.workflows.executions.v1.Executions.ListExecutions google.cloud.workflows.executions.v1alpha1.Executions.GetExecution google.cloud.workflows.executions.v1alpha1.Executions.ListExecutions google.cloud.workflows.executions.v1beta.Executions.GetExecution google.cloud.workflows.executions.v1beta.Executions.ListExecutions
DATA_WRITE
google.cloud.workflows.executions.v1.Events.SendHttpCallback google.cloud.workflows.executions.v1.Executions.CancelExecution google.cloud.workflows.executions.v1.Executions.CreateExecution google.cloud.workflows.executions.v1.Executions.DeleteExecutionHistory google.cloud.workflows.executions.v1.Executions.TriggerPubsubExecution google.cloud.workflows.executions.v1alpha1.Executions.CancelExecution google.cloud.workflows.executions.v1alpha1.Executions.CreateExecution google.cloud.workflows.executions.v1beta.Executions.CancelExecution google.cloud.workflows.executions.v1beta.Executions.CreateExecution
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Workflows.
google.cloud.workflows.executions.v1.Events
The following audit logs are associated with methods belonging to
google.cloud.workflows.executions.v1.Events .
ListCallbacks
Method : google.cloud.workflows.executions.v1.Events.ListCallbacks
Audit log type : Data access
Permissions : workflows.callbacks.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.executions.v1.Events.ListCallbacks"
SendHttpCallback
Method : google.cloud.workflows.executions.v1.Events.SendHttpCallback
Audit log type : Data access
Permissions : workflows.callbacks.send - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.executions.v1.Events.SendHttpCallback"
google.cloud.workflows.executions.v1.ExecutionHistory
The following audit logs are associated with methods belonging to
google.cloud.workflows.executions.v1.ExecutionHistory .
GetStepEntry
Method : google.cloud.workflows.executions.v1.ExecutionHistory.GetStepEntry
Audit log type : Data access
Permissions : workflows.stepEntries.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.executions.v1.ExecutionHistory.GetStepEntry"
ListStepEntries
Method : google.cloud.workflows.executions.v1.ExecutionHistory.ListStepEntries
Audit log type : Data access
Permissions : workflows.stepEntries.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.executions.v1.ExecutionHistory.ListStepEntries"
google.cloud.workflows.executions.v1.Executions
The following audit logs are associated with methods belonging to
google.cloud.workflows.executions.v1.Executions .
CancelExecution
Method : google.cloud.workflows.executions.v1.Executions.CancelExecution
Audit log type : Data access
Permissions : workflows.executions.cancel - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.executions.v1.Executions.CancelExecution"
CreateExecution
Method : google.cloud.workflows.executions.v1.Executions.CreateExecution
Audit log type : Data access
Permissions : workflows.executions.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.executions.v1.Executions.CreateExecution"
DeleteExecutionHistory
Method : google.cloud.workflows.executions.v1.Executions.DeleteExecutionHistory
Audit log type : Data access
Permissions : workflows.executions.cancel - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.executions.v1.Executions.DeleteExecutionHistory"
ExportData
Method : google.cloud.workflows.executions.v1.Executions.ExportData
Audit log type : Data access
Permissions : workflows.executions.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.executions.v1.Executions.ExportData"
GetExecution
Method : google.cloud.workflows.executions.v1.Executions.GetExecution
Audit log type : Data access
Permissions : workflows.executions.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.executions.v1.Executions.GetExecution"
ListExecutions
Method : google.cloud.workflows.executions.v1.Executions.ListExecutions
Audit log type : Data access
Permissions : workflows.executions.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.executions.v1.Executions.ListExecutions"
TriggerPubsubExecution
Method : google.cloud.workflows.executions.v1.Executions.TriggerPubsubExecution
Audit log type : Data access
Permissions : workflows.executions.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.executions.v1.Executions.TriggerPubsubExecution"
google.cloud.workflows.executions.v1alpha1.Executions
The following audit logs are associated with methods belonging to
google.cloud.workflows.executions.v1alpha1.Executions .
CancelExecution
Method : google.cloud.workflows.executions.v1alpha1.Executions.CancelExecution
Audit log type : Data access
Permissions : workflows.executions.cancel - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.executions.v1alpha1.Executions.CancelExecution"
CreateExecution
Method : google.cloud.workflows.executions.v1alpha1.Executions.CreateExecution
Audit log type : Data access
Permissions : workflows.executions.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.executions.v1alpha1.Executions.CreateExecution"
GetExecution
Method : google.cloud.workflows.executions.v1alpha1.Executions.GetExecution
Audit log type : Data access
Permissions : workflows.executions.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.executions.v1alpha1.Executions.GetExecution"
ListExecutions
Method : google.cloud.workflows.executions.v1alpha1.Executions.ListExecutions
Audit log type : Data access
Permissions : workflows.executions.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.executions.v1alpha1.Executions.ListExecutions"
google.cloud.workflows.executions.v1beta.Executions
The following audit logs are associated with methods belonging to
google.cloud.workflows.executions.v1beta.Executions .
CancelExecution
Method : google.cloud.workflows.executions.v1beta.Executions.CancelExecution
Audit log type : Data access
Permissions : workflows.executions.cancel - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.executions.v1beta.Executions.CancelExecution"
CreateExecution
Method : google.cloud.workflows.executions.v1beta.Executions.CreateExecution
Audit log type : Data access
Permissions : workflows.executions.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.executions.v1beta.Executions.CreateExecution"
GetExecution
Method : google.cloud.workflows.executions.v1beta.Executions.GetExecution
Audit log type : Data access
Permissions : workflows.executions.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.executions.v1beta.Executions.GetExecution"
ListExecutions
Method : google.cloud.workflows.executions.v1beta.Executions.ListExecutions
Audit log type : Data access
Permissions : workflows.executions.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.workflows.executions.v1beta.Executions.ListExecutions"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
