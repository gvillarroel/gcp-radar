---
title: "Error Reporting audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/docs/audit-logging
knowledge_key: corpus
source_id: site-docs-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/docs/troubleshooting
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/docs/audit-logging
  title: "Error Reporting audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Error Reporting
Guides
Send feedback
Error Reporting audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Error Reporting. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Error Reporting audit logs use the service name clouderrorreporting.googleapis.com .
Filter for this service:
protoPayload . serviceName = "clouderrorreporting.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Error Reporting generates an audit log whose category is dependent on the
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
google.devtools.clouderrorreporting.v1beta1.ErrorGroupService.GetGroup
ADMIN_WRITE
google.devtools.clouderrorreporting.v1beta1.ErrorGroupService.UpdateGroup google.devtools.clouderrorreporting.v1beta1.ErrorStatsService.DeleteEvents
DATA_READ
google.devtools.clouderrorreporting.v1beta1.ErrorStatsService.ListEvents google.devtools.clouderrorreporting.v1beta1.ErrorStatsService.ListGroupStats
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Error Reporting.
google.devtools.clouderrorreporting.v1beta1.ErrorGroupService
The following audit logs are associated with methods belonging to
google.devtools.clouderrorreporting.v1beta1.ErrorGroupService .
GetGroup
Method : google.devtools.clouderrorreporting.v1beta1.ErrorGroupService.GetGroup
Audit log type : Data access
Permissions : errorreporting.groupMetadata.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.clouderrorreporting.v1beta1.ErrorGroupService.GetGroup"
UpdateGroup
Method : google.devtools.clouderrorreporting.v1beta1.ErrorGroupService.UpdateGroup
Audit log type : Admin activity
Permissions : errorreporting.groupMetadata.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.clouderrorreporting.v1beta1.ErrorGroupService.UpdateGroup"
google.devtools.clouderrorreporting.v1beta1.ErrorStatsService
The following audit logs are associated with methods belonging to
google.devtools.clouderrorreporting.v1beta1.ErrorStatsService .
DeleteEvents
Method : google.devtools.clouderrorreporting.v1beta1.ErrorStatsService.DeleteEvents
Audit log type : Admin activity
Permissions : errorreporting.errorEvents.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.clouderrorreporting.v1beta1.ErrorStatsService.DeleteEvents"
ListEvents
Method : google.devtools.clouderrorreporting.v1beta1.ErrorStatsService.ListEvents
Audit log type : Data access
Permissions : errorreporting.errorEvents.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.clouderrorreporting.v1beta1.ErrorStatsService.ListEvents"
ListGroupStats
Method : google.devtools.clouderrorreporting.v1beta1.ErrorStatsService.ListGroupStats
Audit log type : Data access
Permissions : errorreporting.groups.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.clouderrorreporting.v1beta1.ErrorStatsService.ListGroupStats"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.devtools.clouderrorreporting.v1beta1.ReportErrorsService.ReportErrorEvent
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
