---
title: "Service Control audit logging \_|\_ Service Infrastructure \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/service-infrastructure/docs/audit-logging-service-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control
source_metadata:
  url: https://docs.cloud.google.com/service-infrastructure/docs/audit-logging-service-control
  title: "Service Control audit logging \_|\_ Service Infrastructure \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Service Infrastructure
Guides
Send feedback
Service Control audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Service Control. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Service Control audit logs use the service name servicecontrol.googleapis.com .
Filter for this service:
protoPayload . serviceName = "servicecontrol.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Service Control generates an audit log whose category is dependent on the
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
OTHER
google.api.servicecontrol.v1.QuotaController.AllocateQuota : To enable this log, enable DATA_WRITE under the service servicemanagement.googleapis.com . google.api.servicecontrol.v1.ServiceController.Check : To enable this log, enable DATA_WRITE under the service servicemanagement.googleapis.com . google.api.servicecontrol.v1.ServiceController.Report : To enable this log, enable DATA_WRITE under the service servicemanagement.googleapis.com . google.api.servicecontrol.v2.ServiceController.Check : To enable this log, enable DATA_WRITE under the service servicemanagement.googleapis.com . google.api.servicecontrol.v2.ServiceController.Report : To enable this log, enable DATA_WRITE under the service servicemanagement.googleapis.com .
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Service Control.
google.api.servicecontrol.v1.QuotaController
The following audit logs are associated with methods belonging to
google.api.servicecontrol.v1.QuotaController .
AllocateQuota
Method : google.api.servicecontrol.v1.QuotaController.AllocateQuota
Audit log type : Data access
Permissions : servicemanagement.services.quota - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.servicecontrol.v1.QuotaController.AllocateQuota"
google.api.servicecontrol.v1.ServiceController
The following audit logs are associated with methods belonging to
google.api.servicecontrol.v1.ServiceController .
Check
Method : google.api.servicecontrol.v1.ServiceController.Check
Audit log type : Data access
Permissions : servicemanagement.services.check - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.servicecontrol.v1.ServiceController.Check"
Report
Method : google.api.servicecontrol.v1.ServiceController.Report
Audit log type : Data access
Permissions : servicemanagement.services.report - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.servicecontrol.v1.ServiceController.Report"
google.api.servicecontrol.v2.ServiceController
The following audit logs are associated with methods belonging to
google.api.servicecontrol.v2.ServiceController .
Check
Method : google.api.servicecontrol.v2.ServiceController.Check
Audit log type : Data access
Permissions : servicemanagement.services.check - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.servicecontrol.v2.ServiceController.Check"
Report
Method : google.api.servicecontrol.v2.ServiceController.Report
Audit log type : Data access
Permissions : servicemanagement.services.report - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.servicecontrol.v2.ServiceController.Report"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
