---
title: "Service Management audit logging \_|\_ Service Infrastructure \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/service-infrastructure/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control
source_metadata:
  url: https://docs.cloud.google.com/service-infrastructure/docs/audit-logging
  title: "Service Management audit logging \_|\_ Service Infrastructure \_|\_ Google\
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
Service Management audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Service Management. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Service Management audit logs use the service name servicemanagement.googleapis.com .
Filter for this service:
protoPayload . serviceName = "servicemanagement.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Service Management generates an audit log whose category is dependent on the
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
google.iam.v1.IAMPolicy.GetIamPolicy
ADMIN_WRITE
google.api.servicemanagement.v1.ServiceManager.CreateService (LRO) google.api.servicemanagement.v1.ServiceManager.CreateServiceConfig google.api.servicemanagement.v1.ServiceManager.CreateServiceRollout (LRO) google.api.servicemanagement.v1.ServiceManager.DeleteService (LRO) google.api.servicemanagement.v1.ServiceManager.SubmitConfigSource (LRO) google.api.servicemanagement.v1.ServiceManager.UndeleteService (LRO) google.iam.v1.IAMPolicy.SetIamPolicy google.longrunning.Operations.GetOperation
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Service Management.
google.api.servicemanagement.v1.ServiceManager
The following audit logs are associated with methods belonging to
google.api.servicemanagement.v1.ServiceManager .
CreateService
Method : google.api.servicemanagement.v1.ServiceManager.CreateService
Audit log type : Admin activity
Permissions : servicemanagement.services.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.servicemanagement.v1.ServiceManager.CreateService"
CreateServiceConfig
Method : google.api.servicemanagement.v1.ServiceManager.CreateServiceConfig
Audit log type : Admin activity
Permissions : servicemanagement.services.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.api.servicemanagement.v1.ServiceManager.CreateServiceConfig"
CreateServiceRollout
Method : google.api.servicemanagement.v1.ServiceManager.CreateServiceRollout
Audit log type : Admin activity
Permissions : servicemanagement.services.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.servicemanagement.v1.ServiceManager.CreateServiceRollout"
DeleteService
Method : google.api.servicemanagement.v1.ServiceManager.DeleteService
Audit log type : Admin activity
Permissions : servicemanagement.services.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.servicemanagement.v1.ServiceManager.DeleteService"
SubmitConfigSource
Method : google.api.servicemanagement.v1.ServiceManager.SubmitConfigSource
Audit log type : Admin activity
Permissions : servicemanagement.services.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.servicemanagement.v1.ServiceManager.SubmitConfigSource"
UndeleteService
Method : google.api.servicemanagement.v1.ServiceManager.UndeleteService
Audit log type : Admin activity
Permissions : servicemanagement.services.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.api.servicemanagement.v1.ServiceManager.UndeleteService"
google.iam.v1.IAMPolicy
The following audit logs are associated with methods belonging to
google.iam.v1.IAMPolicy .
GetIamPolicy
Method : google.iam.v1.IAMPolicy.GetIamPolicy
Audit log type : Data access
Permissions : servicemanagement.consumers.getIamPolicy - ADMIN_READ
servicemanagement.services.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.iam.v1.IAMPolicy.GetIamPolicy"
SetIamPolicy
Method : google.iam.v1.IAMPolicy.SetIamPolicy
Audit log type : Admin activity
Permissions : servicemanagement.consumers.setIamPolicy - ADMIN_WRITE
servicemanagement.services.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.iam.v1.IAMPolicy.SetIamPolicy"
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
google.api.servicemanagement.v1.ServiceManager.GenerateConfigReport
google.api.servicemanagement.v1.ServiceManager.GetService
google.api.servicemanagement.v1.ServiceManager.GetServiceConfig
google.api.servicemanagement.v1.ServiceManager.GetServiceRollout
google.api.servicemanagement.v1.ServiceManager.ListServiceConfigs
google.api.servicemanagement.v1.ServiceManager.ListServiceRollouts
google.api.servicemanagement.v1.ServiceManager.ListServices
google.longrunning.Operations.ListOperations
google.longrunning.Operations.WaitOperation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
