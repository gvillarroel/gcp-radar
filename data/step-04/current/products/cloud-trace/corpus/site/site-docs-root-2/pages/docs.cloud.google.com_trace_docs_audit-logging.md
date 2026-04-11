---
title: "Trace audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/audit-logging
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/audit-logging
  title: "Trace audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Trace
Guides
Send feedback
Trace audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Cloud Trace. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Cloud Trace audit logs use the service name cloudtrace.googleapis.com .
Filter for this service:
protoPayload . serviceName = "cloudtrace.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Cloud Trace generates an audit log whose category is dependent on the
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
google.devtools.cloudtrace.v2beta1.TracingConfigService.GetTraceSink google.devtools.cloudtrace.v2beta1.TracingConfigService.ListTraceSinks
ADMIN_WRITE
google.devtools.cloudtrace.v2beta1.TracingConfigService.CreateTraceSink google.devtools.cloudtrace.v2beta1.TracingConfigService.DeleteTraceSink google.devtools.cloudtrace.v2beta1.TracingConfigService.UpdateTraceSink
DATA_READ
google.devtools.cloudtrace.v1.TraceService.GetTrace google.devtools.cloudtrace.v1.TraceService.ListTraces
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Cloud Trace.
google.devtools.cloudtrace.v1.TraceService
The following audit logs are associated with methods belonging to
google.devtools.cloudtrace.v1.TraceService .
GetTrace
Method : google.devtools.cloudtrace.v1.TraceService.GetTrace
Audit log type : Data access
Permissions : cloudtrace.traces.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.cloudtrace.v1.TraceService.GetTrace"
ListTraces
Method : google.devtools.cloudtrace.v1.TraceService.ListTraces
Audit log type : Data access
Permissions : cloudtrace.traces.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.cloudtrace.v1.TraceService.ListTraces"
google.devtools.cloudtrace.v2beta1.TracingConfigService
The following audit logs are associated with methods belonging to
google.devtools.cloudtrace.v2beta1.TracingConfigService .
CreateTraceSink
Method : google.devtools.cloudtrace.v2beta1.TracingConfigService.CreateTraceSink
Audit log type : Admin activity
Permissions : cloudtrace.tracesinks.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.cloudtrace.v2beta1.TracingConfigService.CreateTraceSink"
DeleteTraceSink
Method : google.devtools.cloudtrace.v2beta1.TracingConfigService.DeleteTraceSink
Audit log type : Admin activity
Permissions : cloudtrace.tracesinks.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.cloudtrace.v2beta1.TracingConfigService.DeleteTraceSink"
GetTraceSink
Method : google.devtools.cloudtrace.v2beta1.TracingConfigService.GetTraceSink
Audit log type : Data access
Permissions : cloudtrace.tracesinks.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.cloudtrace.v2beta1.TracingConfigService.GetTraceSink"
ListTraceSinks
Method : google.devtools.cloudtrace.v2beta1.TracingConfigService.ListTraceSinks
Audit log type : Data access
Permissions : cloudtrace.tracesinks.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.cloudtrace.v2beta1.TracingConfigService.ListTraceSinks"
UpdateTraceSink
Method : google.devtools.cloudtrace.v2beta1.TracingConfigService.UpdateTraceSink
Audit log type : Admin activity
Permissions : cloudtrace.tracesinks.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.devtools.cloudtrace.v2beta1.TracingConfigService.UpdateTraceSink"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.devtools.cloudtrace.v1.TraceService.PatchTraces
google.devtools.cloudtrace.v2.TraceService.BatchWriteSpans
google.devtools.cloudtrace.v2.TraceService.CreateSpan
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
