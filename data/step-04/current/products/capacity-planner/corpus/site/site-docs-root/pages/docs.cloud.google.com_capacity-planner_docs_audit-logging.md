---
title: "Capacity Planner audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/capacity-planner/docs/audit-logging
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/capacity-planner/docs
source_metadata:
  url: https://docs.cloud.google.com/capacity-planner/docs/audit-logging
  title: "Capacity Planner audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Capacity Planner
Guides
Send feedback
Capacity Planner audit logging
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA products are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document describes audit logging for Capacity Planner. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Capacity Planner audit logs use the service name capacityplanner.googleapis.com .
Filter for this service:
protoPayload . serviceName = "capacityplanner.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Capacity Planner generates an audit log whose category is dependent on the
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
google.cloud.capacityplanner.v1main.UsageService.QueryForecasts google.cloud.capacityplanner.v1main.UsageService.QueryMachineShapeUsage google.cloud.capacityplanner.v1main.UsageService.QueryReservations google.cloud.capacityplanner.v1main.UsageService.QueryUsageHistories google.cloud.capacityplanner.v1main.UsageService.SummarizeUsage
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Capacity Planner.
google.cloud.capacityplanner.v1main.UsageService
The following audit logs are associated with methods belonging to
google.cloud.capacityplanner.v1main.UsageService .
QueryForecasts
Method : google.cloud.capacityplanner.v1main.UsageService.QueryForecasts
Audit log type : Data access
Permissions : capacityplanner.forecasts.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.capacityplanner.v1main.UsageService.QueryForecasts"
QueryMachineShapeUsage
Method : google.cloud.capacityplanner.v1main.UsageService.QueryMachineShapeUsage
Audit log type : Data access
Permissions : capacityplanner.forecasts.list - ADMIN_READ
capacityplanner.usageHistories.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.capacityplanner.v1main.UsageService.QueryMachineShapeUsage"
QueryReservations
Method : google.cloud.capacityplanner.v1main.UsageService.QueryReservations
Audit log type : Data access
Permissions : capacityplanner.usageHistories.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.capacityplanner.v1main.UsageService.QueryReservations"
QueryUsageHistories
Method : google.cloud.capacityplanner.v1main.UsageService.QueryUsageHistories
Audit log type : Data access
Permissions : capacityplanner.usageHistories.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.capacityplanner.v1main.UsageService.QueryUsageHistories"
SummarizeUsage
Method : google.cloud.capacityplanner.v1main.UsageService.SummarizeUsage
Audit log type : Data access
Permissions : capacityplanner.usageHistories.summarize - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.capacityplanner.v1main.UsageService.SummarizeUsage"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
