---
title: "Assured Workloads audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/audit-logging
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/audit-logging
  title: "Assured Workloads audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The names for some Assured Workloads control packages have changed. For information about the name change, see Control package renaming notice .
Home
Documentation
Security
Assured Workloads
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Assured Workloads audit logging
This document describes audit logging for Assured Workloads. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Assured Workloads audit logs use the service name assuredworkloads.googleapis.com .
Filter for this service:
protoPayload . serviceName = "assuredworkloads.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Assured Workloads generates an audit log whose category is dependent on the
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
google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.AnalyzeWorkloadMove google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.GetWorkload google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.ListWorkloads google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.GetWorkload google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.ListWorkloads
ADMIN_WRITE
google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.EnableComplianceUpdates google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.EnableResourceMonitoring google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.EnableComplianceUpdates google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.EnableResourceMonitoring
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Assured Workloads.
google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService
The following audit logs are associated with methods belonging to
google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService .
AnalyzeWorkloadMove
Method : google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.AnalyzeWorkloadMove
Audit log type : Data access
Permissions : assuredworkloads.workload.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.AnalyzeWorkloadMove"
EnableComplianceUpdates
Method : google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.EnableComplianceUpdates
Audit log type : Admin activity
Permissions : assuredworkloads.workload.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.EnableComplianceUpdates"
EnableResourceMonitoring
Method : google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.EnableResourceMonitoring
Audit log type : Admin activity
Permissions : assuredworkloads.workload.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.EnableResourceMonitoring"
GetWorkload
Method : google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.GetWorkload
Audit log type : Data access
Permissions : assuredworkloads.workload.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.GetWorkload"
ListWorkloads
Method : google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.ListWorkloads
Audit log type : Data access
Permissions : assuredworkloads.workload.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.ListWorkloads"
google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService
The following audit logs are associated with methods belonging to
google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService .
EnableComplianceUpdates
Method : google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.EnableComplianceUpdates
Audit log type : Admin activity
Permissions : assuredworkloads.workload.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.EnableComplianceUpdates"
EnableResourceMonitoring
Method : google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.EnableResourceMonitoring
Audit log type : Admin activity
Permissions : assuredworkloads.workload.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.EnableResourceMonitoring"
GetWorkload
Method : google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.GetWorkload
Audit log type : Data access
Permissions : assuredworkloads.workload.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.GetWorkload"
ListWorkloads
Method : google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.ListWorkloads
Audit log type : Data access
Permissions : assuredworkloads.workload.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.ListWorkloads"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.AcknowledgeViolation
google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.ApplyWorkloadUpdate
google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.CreateWorkload
google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.DeleteWorkload
google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.GetViolation
google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.ListViolations
google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.ListWorkloadUpdates
google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.MutatePartnerPermissions
google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.RestrictAllowedResources
google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.UpdateWorkload
google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.AcknowledgeViolation
google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.ApplyWorkloadUpdate
google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.CreateWorkload
google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.DeleteWorkload
google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.GetViolation
google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.ListViolations
google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.MutatePartnerPermissions
google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.RestrictAllowedResources
google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.UpdateWorkload
google.longrunning.Operations.GetOperation
google.longrunning.Operations.ListOperations
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
