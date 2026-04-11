---
title: "Data Lineage API audit logging \_|\_ Knowledge Catalog \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataplex/docs/lineage-audit-logging
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/lineage-audit-logging
  title: "Data Lineage API audit logging \_|\_ Knowledge Catalog \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

As of April 10, 2026, Dataplex Universal Catalog is now called Knowledge Catalog. The API, client library, CLI, and IAM names remain unchanged.
Home
Documentation
Data analytics
Knowledge Catalog
Guides
Send feedback
Data Lineage API audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Data Lineage API. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Data Lineage API audit logs use the service name datalineage.googleapis.com .
Filter for this service:
protoPayload . serviceName = "datalineage.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Data Lineage API generates an audit log whose category is dependent on the
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
google.longrunning.Operations.GetOperation
DATA_READ
google.cloud.datacatalog.lineage.v1.Lineage.BatchSearchLinkProcesses google.cloud.datacatalog.lineage.v1.Lineage.GetLineageEvent google.cloud.datacatalog.lineage.v1.Lineage.GetProcess google.cloud.datacatalog.lineage.v1.Lineage.GetRun google.cloud.datacatalog.lineage.v1.Lineage.ListLineageEvents google.cloud.datacatalog.lineage.v1.Lineage.ListProcesses google.cloud.datacatalog.lineage.v1.Lineage.ListRuns google.cloud.datacatalog.lineage.v1.Lineage.SearchLinks
DATA_WRITE
google.cloud.datacatalog.lineage.v1.Lineage.CreateLineageEvent google.cloud.datacatalog.lineage.v1.Lineage.CreateProcess google.cloud.datacatalog.lineage.v1.Lineage.CreateRun google.cloud.datacatalog.lineage.v1.Lineage.DeleteLineageEvent google.cloud.datacatalog.lineage.v1.Lineage.DeleteProcess (LRO) google.cloud.datacatalog.lineage.v1.Lineage.DeleteRun (LRO) google.cloud.datacatalog.lineage.v1.Lineage.ProcessOpenLineageRunEvent google.cloud.datacatalog.lineage.v1.Lineage.UpdateProcess google.cloud.datacatalog.lineage.v1.Lineage.UpdateRun
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Data Lineage API.
google.cloud.datacatalog.lineage.v1.Lineage
The following audit logs are associated with methods belonging to
google.cloud.datacatalog.lineage.v1.Lineage .
BatchSearchLinkProcesses
Method : google.cloud.datacatalog.lineage.v1.Lineage.BatchSearchLinkProcesses
Audit log type : Data access
Permissions : datalineage.locations.searchLinks - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.datacatalog.lineage.v1.Lineage.BatchSearchLinkProcesses"
CreateLineageEvent
Method : google.cloud.datacatalog.lineage.v1.Lineage.CreateLineageEvent
Audit log type : Data access
Permissions : datalineage.events.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.datacatalog.lineage.v1.Lineage.CreateLineageEvent"
CreateProcess
Method : google.cloud.datacatalog.lineage.v1.Lineage.CreateProcess
Audit log type : Data access
Permissions : datalineage.processes.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.datacatalog.lineage.v1.Lineage.CreateProcess"
CreateRun
Method : google.cloud.datacatalog.lineage.v1.Lineage.CreateRun
Audit log type : Data access
Permissions : datalineage.runs.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.datacatalog.lineage.v1.Lineage.CreateRun"
DeleteLineageEvent
Method : google.cloud.datacatalog.lineage.v1.Lineage.DeleteLineageEvent
Audit log type : Data access
Permissions : datalineage.events.delete - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.datacatalog.lineage.v1.Lineage.DeleteLineageEvent"
DeleteProcess
Method : google.cloud.datacatalog.lineage.v1.Lineage.DeleteProcess
Audit log type : Data access
Permissions : datalineage.processes.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.datacatalog.lineage.v1.Lineage.DeleteProcess"
DeleteRun
Method : google.cloud.datacatalog.lineage.v1.Lineage.DeleteRun
Audit log type : Data access
Permissions : datalineage.runs.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.datacatalog.lineage.v1.Lineage.DeleteRun"
GetLineageEvent
Method : google.cloud.datacatalog.lineage.v1.Lineage.GetLineageEvent
Audit log type : Data access
Permissions : datalineage.events.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.datacatalog.lineage.v1.Lineage.GetLineageEvent"
GetProcess
Method : google.cloud.datacatalog.lineage.v1.Lineage.GetProcess
Audit log type : Data access
Permissions : datalineage.processes.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.datacatalog.lineage.v1.Lineage.GetProcess"
GetRun
Method : google.cloud.datacatalog.lineage.v1.Lineage.GetRun
Audit log type : Data access
Permissions : datalineage.runs.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.datacatalog.lineage.v1.Lineage.GetRun"
ListLineageEvents
Method : google.cloud.datacatalog.lineage.v1.Lineage.ListLineageEvents
Audit log type : Data access
Permissions : datalineage.events.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.datacatalog.lineage.v1.Lineage.ListLineageEvents"
ListProcesses
Method : google.cloud.datacatalog.lineage.v1.Lineage.ListProcesses
Audit log type : Data access
Permissions : datalineage.processes.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.datacatalog.lineage.v1.Lineage.ListProcesses"
ListRuns
Method : google.cloud.datacatalog.lineage.v1.Lineage.ListRuns
Audit log type : Data access
Permissions : datalineage.runs.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.datacatalog.lineage.v1.Lineage.ListRuns"
ProcessOpenLineageRunEvent
Method : google.cloud.datacatalog.lineage.v1.Lineage.ProcessOpenLineageRunEvent
Audit log type : Data access
Permissions : datalineage.locations.processOpenLineageMessage - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.datacatalog.lineage.v1.Lineage.ProcessOpenLineageRunEvent"
SearchLinks
Method : google.cloud.datacatalog.lineage.v1.Lineage.SearchLinks
Audit log type : Data access
Permissions : datalineage.locations.searchLinks - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.datacatalog.lineage.v1.Lineage.SearchLinks"
UpdateProcess
Method : google.cloud.datacatalog.lineage.v1.Lineage.UpdateProcess
Audit log type : Data access
Permissions : datalineage.processes.update - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.datacatalog.lineage.v1.Lineage.UpdateProcess"
UpdateRun
Method : google.cloud.datacatalog.lineage.v1.Lineage.UpdateRun
Audit log type : Data access
Permissions : datalineage.runs.update - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.datacatalog.lineage.v1.Lineage.UpdateRun"
google.longrunning.Operations
The following audit logs are associated with methods belonging to
google.longrunning.Operations .
GetOperation
Method : google.longrunning.Operations.GetOperation
Audit log type : Data access
Permissions : datalineage.operations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.GetOperation"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.longrunning.Operations.CancelOperation
google.longrunning.Operations.DeleteOperation
google.longrunning.Operations.ListOperations
google.longrunning.Operations.WaitOperation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
