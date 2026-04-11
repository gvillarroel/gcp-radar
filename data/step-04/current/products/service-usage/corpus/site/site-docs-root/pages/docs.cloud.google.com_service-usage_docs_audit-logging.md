---
title: "Service Usage audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/audit-logging
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/audit-logging
  title: "Service Usage audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Service Usage
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Service Usage audit logging
This document describes audit logging for Service Usage. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Service Usage audit logs use the service name serviceusage.googleapis.com .
Filter for this service:
protoPayload . serviceName = "serviceusage.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Service Usage generates an audit log whose category is dependent on the
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
ADMIN_WRITE
google.api.serviceusage.v1.ServiceUsage.BatchEnableServices (LRO) google.api.serviceusage.v1.ServiceUsage.DisableService (LRO) google.api.serviceusage.v1.ServiceUsage.EnableService (LRO) google.api.serviceusage.v1beta1.ServiceUsage.BatchEnableServices (LRO) google.api.serviceusage.v1beta1.ServiceUsage.CreateAdminOverride (LRO) google.api.serviceusage.v1beta1.ServiceUsage.CreateConsumerOverride (LRO) google.api.serviceusage.v1beta1.ServiceUsage.DeleteAdminOverride (LRO) google.api.serviceusage.v1beta1.ServiceUsage.DeleteConsumerOverride (LRO) google.api.serviceusage.v1beta1.ServiceUsage.DisableService (LRO) google.api.serviceusage.v1beta1.ServiceUsage.EnableService (LRO) google.api.serviceusage.v1beta1.ServiceUsage.ImportAdminOverrides (LRO) google.api.serviceusage.v1beta1.ServiceUsage.ImportConsumerOverrides (LRO) google.api.serviceusage.v1beta1.ServiceUsage.UpdateAdminOverride (LRO) google.api.serviceusage.v1beta1.ServiceUsage.UpdateConsumerOverride (LRO) google.longrunning.Operations.GetOperation
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Service Usage.
google.api.serviceusage.v1.ServiceUsage
The following audit logs are associated with methods belonging to
google.api.serviceusage.v1.ServiceUsage .
BatchEnableServices
Method : google.api.serviceusage.v1.ServiceUsage.BatchEnableServices
Audit log type : Admin activity
Permissions : servicemanagement.services.bind - DATA_WRITE
serviceusage.services.enable - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.serviceusage.v1.ServiceUsage.BatchEnableServices"
DisableService
Method : google.api.serviceusage.v1.ServiceUsage.DisableService
Audit log type : Admin activity
Permissions : servicemanagement.services.bind - DATA_WRITE
serviceusage.services.disable - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.serviceusage.v1.ServiceUsage.DisableService"
EnableService
Method : google.api.serviceusage.v1.ServiceUsage.EnableService
Audit log type : Admin activity
Permissions : servicemanagement.services.bind - DATA_WRITE
serviceusage.services.enable - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.serviceusage.v1.ServiceUsage.EnableService"
google.api.serviceusage.v1beta1.ServiceUsage
The following audit logs are associated with methods belonging to
google.api.serviceusage.v1beta1.ServiceUsage .
BatchEnableServices
Method : google.api.serviceusage.v1beta1.ServiceUsage.BatchEnableServices
Audit log type : Admin activity
Permissions : servicemanagement.services.bind - DATA_WRITE
serviceusage.services.enable - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.serviceusage.v1beta1.ServiceUsage.BatchEnableServices"
CreateAdminOverride
Method : google.api.serviceusage.v1beta1.ServiceUsage.CreateAdminOverride
Audit log type : Admin activity
Permissions : serviceusage.quotas.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.serviceusage.v1beta1.ServiceUsage.CreateAdminOverride"
CreateConsumerOverride
Method : google.api.serviceusage.v1beta1.ServiceUsage.CreateConsumerOverride
Audit log type : Admin activity
Permissions : serviceusage.quotas.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.serviceusage.v1beta1.ServiceUsage.CreateConsumerOverride"
DeleteAdminOverride
Method : google.api.serviceusage.v1beta1.ServiceUsage.DeleteAdminOverride
Audit log type : Admin activity
Permissions : serviceusage.quotas.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.serviceusage.v1beta1.ServiceUsage.DeleteAdminOverride"
DeleteConsumerOverride
Method : google.api.serviceusage.v1beta1.ServiceUsage.DeleteConsumerOverride
Audit log type : Admin activity
Permissions : serviceusage.quotas.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.serviceusage.v1beta1.ServiceUsage.DeleteConsumerOverride"
DisableService
Method : google.api.serviceusage.v1beta1.ServiceUsage.DisableService
Audit log type : Admin activity
Permissions : serviceusage.services.disable - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.serviceusage.v1beta1.ServiceUsage.DisableService"
EnableService
Method : google.api.serviceusage.v1beta1.ServiceUsage.EnableService
Audit log type : Admin activity
Permissions : servicemanagement.services.bind - DATA_WRITE
serviceusage.services.enable - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.serviceusage.v1beta1.ServiceUsage.EnableService"
ImportAdminOverrides
Method : google.api.serviceusage.v1beta1.ServiceUsage.ImportAdminOverrides
Audit log type : Admin activity
Permissions : serviceusage.quotas.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.serviceusage.v1beta1.ServiceUsage.ImportAdminOverrides"
ImportConsumerOverrides
Method : google.api.serviceusage.v1beta1.ServiceUsage.ImportConsumerOverrides
Audit log type : Admin activity
Permissions : serviceusage.quotas.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.serviceusage.v1beta1.ServiceUsage.ImportConsumerOverrides"
UpdateAdminOverride
Method : google.api.serviceusage.v1beta1.ServiceUsage.UpdateAdminOverride
Audit log type : Admin activity
Permissions : serviceusage.quotas.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.serviceusage.v1beta1.ServiceUsage.UpdateAdminOverride"
UpdateConsumerOverride
Method : google.api.serviceusage.v1beta1.ServiceUsage.UpdateConsumerOverride
Audit log type : Admin activity
Permissions : serviceusage.quotas.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.serviceusage.v1beta1.ServiceUsage.UpdateConsumerOverride"
google.longrunning.Operations
The following audit logs are associated with methods belonging to
google.longrunning.Operations .
GetOperation
Method : google.longrunning.Operations.GetOperation
Audit log type : Admin activity
Permissions : serviceusage.operations.get - DATA_READ
serviceusage.services.enable - ADMIN_WRITE
serviceusage.services.get - DATA_READ
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
google.api.serviceusage.v1.ServiceUsage.BatchGetServices
google.api.serviceusage.v1.ServiceUsage.GetService
google.api.serviceusage.v1.ServiceUsage.ListServices
google.api.serviceusage.v1beta1.ServiceUsage.GenerateServiceIdentity
google.api.serviceusage.v1beta1.ServiceUsage.GetConsumerQuotaLimit
google.api.serviceusage.v1beta1.ServiceUsage.GetConsumerQuotaMetric
google.api.serviceusage.v1beta1.ServiceUsage.GetService
google.api.serviceusage.v1beta1.ServiceUsage.ListAdminOverrides
google.api.serviceusage.v1beta1.ServiceUsage.ListConsumerOverrides
google.api.serviceusage.v1beta1.ServiceUsage.ListConsumerQuotaMetrics
google.api.serviceusage.v1beta1.ServiceUsage.ListServices
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
