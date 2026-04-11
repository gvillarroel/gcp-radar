---
title: "Cloud CDN audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cdn/docs/audit-logging
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/cdn/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/cdn/docs/audit-logging
  title: "Cloud CDN audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud CDN
Guides
Send feedback
Cloud CDN audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Cloud CDN. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Cloud CDN audit logs use the service name compute.googleapis.com .
Filter for this service:
protoPayload . serviceName = "compute.googleapis.com"
Methods by permission type
For the following API methods, there is also a beta and
alpha version available that is not listed here. When the
beta or alpha version of the API is called the method name will start
with beta or alpha respectively.
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Cloud CDN generates an audit log whose category is dependent on the
type property of the permission required to perform the method.
Methods that require an IAM permission with the type property value
of DATA_READ , DATA_WRITE , or ADMIN_READ generate
Data Access audit logs.
Methods that require an IAM permission with the type property value
of ADMIN_WRITE generate
Admin Activity audit logs.
Permission type
Methods
ADMIN_READ
v1.compute.backendServices.aggregatedList v1.compute.backendServices.get v1.compute.backendServices.getHealth v1.compute.backendServices.getIamPolicy v1.compute.backendServices.list v1.compute.backendServices.testIamPermissions
ADMIN_WRITE
v1.compute.backendServices.addSignedUrlKey v1.compute.backendServices.delete v1.compute.backendServices.deleteSignedUrlKey v1.compute.backendServices.insert v1.compute.backendServices.patch v1.compute.backendServices.setEdgeSecurityPolicy v1.compute.backendServices.setIamPolicy v1.compute.backendServices.setSecurityPolicy v1.compute.backendServices.update
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Cloud CDN.
compute.v1.BackendServicesService
The following audit logs are associated with methods belonging to
compute.v1.BackendServicesService .
addSignedUrlKey
Method : v1.compute.backendServices.addSignedUrlKey
Audit log type : Admin activity
Permissions : compute.backendServices.addSignedUrlKey - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v1.compute.backendServices.addSignedUrlKey"
aggregatedList
Method : v1.compute.backendServices.aggregatedList
Audit log type : Data access
Permissions : compute.backendServices.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v1.compute.backendServices.aggregatedList"
delete
Method : v1.compute.backendServices.delete
Audit log type : Admin activity
Permissions : compute.backendServices.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v1.compute.backendServices.delete"
deleteSignedUrlKey
Method : v1.compute.backendServices.deleteSignedUrlKey
Audit log type : Admin activity
Permissions : compute.backendServices.deleteSignedUrlKey - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v1.compute.backendServices.deleteSignedUrlKey"
get
Method : v1.compute.backendServices.get
Audit log type : Data access
Permissions : compute.backendServices.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v1.compute.backendServices.get"
getHealth
Method : v1.compute.backendServices.getHealth
Audit log type : Data access
Permissions : compute.backendServices.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v1.compute.backendServices.getHealth"
getIamPolicy
Method : v1.compute.backendServices.getIamPolicy
Audit log type : Data access
Permissions : compute.backendServices.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v1.compute.backendServices.getIamPolicy"
insert
Method : v1.compute.backendServices.insert
Audit log type : Admin activity
Permissions : compute.backendServices.create - ADMIN_WRITE
compute.instanceGroups.use - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v1.compute.backendServices.insert"
list
Method : v1.compute.backendServices.list
Audit log type : Data access
Permissions : compute.backendServices.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v1.compute.backendServices.list"
patch
Method : v1.compute.backendServices.patch
Audit log type : Admin activity
Permissions : compute.backendServices.get - ADMIN_READ
compute.backendServices.update - ADMIN_WRITE
compute.healthChecks.useReadOnly - ADMIN_READ
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v1.compute.backendServices.patch"
setEdgeSecurityPolicy
Method : v1.compute.backendServices.setEdgeSecurityPolicy
Audit log type : Admin activity
Permissions : compute.backendServices.setSecurityPolicy - ADMIN_WRITE
compute.securityPolicies.use - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v1.compute.backendServices.setEdgeSecurityPolicy"
setIamPolicy
Method : v1.compute.backendServices.setIamPolicy
Audit log type : Admin activity
Permissions : compute.backendServices.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v1.compute.backendServices.setIamPolicy"
setSecurityPolicy
Method : v1.compute.backendServices.setSecurityPolicy
Audit log type : Admin activity
Permissions : compute.backendServices.setSecurityPolicy - ADMIN_WRITE
compute.securityPolicies.use - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v1.compute.backendServices.setSecurityPolicy"
testIamPermissions
Method : v1.compute.backendServices.testIamPermissions
Audit log type : Data access
Permissions : compute.backendServices.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v1.compute.backendServices.testIamPermissions"
update
Method : v1.compute.backendServices.update
Audit log type : Admin activity
Permissions : compute.backendServices.update - ADMIN_WRITE
compute.healthChecks.useReadOnly - ADMIN_READ
compute.instanceGroups.use - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v1.compute.backendServices.update"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
