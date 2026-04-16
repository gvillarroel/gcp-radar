---
title: "Cloud Deployment Manager audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/audit-logging
  title: "Cloud Deployment Manager audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Deployment Manager will reach end of support on March 31, 2026 . If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
For more information on the deprecation and shutdown, see Deployment Manager deprecation .
Home
Documentation
Infrastructure as code
Cloud Deployment Manager
Guides
Send feedback
Cloud Deployment Manager audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Cloud Deployment Manager. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Cloud Deployment Manager audit logs use the service name deploymentmanager.googleapis.com .
Filter for this service:
protoPayload . serviceName = "deploymentmanager.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Cloud Deployment Manager generates an audit log whose category is dependent on the
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
v2.deploymentmanager.deployments.get v2.deploymentmanager.deployments.getIamPolicy v2.deploymentmanager.deployments.list v2.deploymentmanager.manifests.get v2.deploymentmanager.manifests.list v2.deploymentmanager.operations.get v2.deploymentmanager.operations.list v2.deploymentmanager.resources.get v2.deploymentmanager.resources.list v2.deploymentmanager.types.list v2beta.deploymentmanager.deployments.get v2beta.deploymentmanager.deployments.list v2beta.deploymentmanager.manifests.get v2beta.deploymentmanager.manifests.list v2beta.deploymentmanager.operations.get v2beta.deploymentmanager.resources.list
ADMIN_WRITE
alpha.deploymentmanager.deployments.insert (LRO) v2.deploymentmanager.deployments.cancelPreview (LRO) v2.deploymentmanager.deployments.delete (LRO) v2.deploymentmanager.deployments.insert (LRO) v2.deploymentmanager.deployments.patch (LRO) v2.deploymentmanager.deployments.setIamPolicy v2.deploymentmanager.deployments.stop (LRO) v2.deploymentmanager.deployments.update (LRO) v2beta.deploymentmanager.deployments.cancelPreview (LRO) v2beta.deploymentmanager.deployments.delete (LRO) v2beta.deploymentmanager.deployments.insert (LRO) v2beta.deploymentmanager.deployments.patch (LRO) v2beta.deploymentmanager.deployments.stop (LRO) v2beta.deploymentmanager.deployments.update (LRO)
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Cloud Deployment Manager.
alpha.deploymentmanager.deployments
The following audit logs are associated with methods belonging to
alpha.deploymentmanager.deployments .
insert
Method : alpha.deploymentmanager.deployments.insert
Audit log type : Admin activity
Permissions : deploymentmanager.deployments.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="alpha.deploymentmanager.deployments.insert"
v2.deploymentmanager.deployments
The following audit logs are associated with methods belonging to
v2.deploymentmanager.deployments .
cancelPreview
Method : v2.deploymentmanager.deployments.cancelPreview
Audit log type : Admin activity
Permissions : deploymentmanager.deployments.cancelPreview - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v2.deploymentmanager.deployments.cancelPreview"
delete
Method : v2.deploymentmanager.deployments.delete
Audit log type : Admin activity
Permissions : deploymentmanager.deployments.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v2.deploymentmanager.deployments.delete"
get
Method : v2.deploymentmanager.deployments.get
Audit log type : Data access
Permissions : deploymentmanager.deployments.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v2.deploymentmanager.deployments.get"
getIamPolicy
Method : v2.deploymentmanager.deployments.getIamPolicy
Audit log type : Data access
Permissions : deploymentmanager.deployments.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v2.deploymentmanager.deployments.getIamPolicy"
insert
Method : v2.deploymentmanager.deployments.insert
Audit log type : Admin activity
Permissions : deploymentmanager.deployments.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v2.deploymentmanager.deployments.insert"
list
Method : v2.deploymentmanager.deployments.list
Audit log type : Data access
Permissions : deploymentmanager.deployments.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v2.deploymentmanager.deployments.list"
patch
Method : v2.deploymentmanager.deployments.patch
Audit log type : Admin activity
Permissions : deploymentmanager.deployments.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v2.deploymentmanager.deployments.patch"
setIamPolicy
Method : v2.deploymentmanager.deployments.setIamPolicy
Audit log type : Admin activity
Permissions : deploymentmanager.deployments.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v2.deploymentmanager.deployments.setIamPolicy"
stop
Method : v2.deploymentmanager.deployments.stop
Audit log type : Admin activity
Permissions : deploymentmanager.deployments.stop - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v2.deploymentmanager.deployments.stop"
update
Method : v2.deploymentmanager.deployments.update
Audit log type : Admin activity
Permissions : deploymentmanager.deployments.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v2.deploymentmanager.deployments.update"
v2.deploymentmanager.manifests
The following audit logs are associated with methods belonging to
v2.deploymentmanager.manifests .
get
Method : v2.deploymentmanager.manifests.get
Audit log type : Data access
Permissions : deploymentmanager.manifests.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v2.deploymentmanager.manifests.get"
list
Method : v2.deploymentmanager.manifests.list
Audit log type : Data access
Permissions : deploymentmanager.manifests.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v2.deploymentmanager.manifests.list"
v2.deploymentmanager.operations
The following audit logs are associated with methods belonging to
v2.deploymentmanager.operations .
get
Method : v2.deploymentmanager.operations.get
Audit log type : Data access
Permissions : deploymentmanager.operations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v2.deploymentmanager.operations.get"
list
Method : v2.deploymentmanager.operations.list
Audit log type : Data access
Permissions : deploymentmanager.operations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v2.deploymentmanager.operations.list"
v2.deploymentmanager.resources
The following audit logs are associated with methods belonging to
v2.deploymentmanager.resources .
get
Method : v2.deploymentmanager.resources.get
Audit log type : Data access
Permissions : deploymentmanager.resources.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v2.deploymentmanager.resources.get"
list
Method : v2.deploymentmanager.resources.list
Audit log type : Data access
Permissions : deploymentmanager.resources.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v2.deploymentmanager.resources.list"
v2.deploymentmanager.types
The following audit logs are associated with methods belonging to
v2.deploymentmanager.types .
list
Method : v2.deploymentmanager.types.list
Audit log type : Data access
Permissions : deploymentmanager.types.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v2.deploymentmanager.types.list"
v2beta.deploymentmanager.deployments
The following audit logs are associated with methods belonging to
v2beta.deploymentmanager.deployments .
cancelPreview
Method : v2beta.deploymentmanager.deployments.cancelPreview
Audit log type : Admin activity
Permissions : deploymentmanager.deployments.cancelPreview - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v2beta.deploymentmanager.deployments.cancelPreview"
delete
Method : v2beta.deploymentmanager.deployments.delete
Audit log type : Admin activity
Permissions : deploymentmanager.deployments.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v2beta.deploymentmanager.deployments.delete"
get
Method : v2beta.deploymentmanager.deployments.get
Audit log type : Data access
Permissions : deploymentmanager.deployments.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v2beta.deploymentmanager.deployments.get"
insert
Method : v2beta.deploymentmanager.deployments.insert
Audit log type : Admin activity
Permissions : deploymentmanager.deployments.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v2beta.deploymentmanager.deployments.insert"
list
Method : v2beta.deploymentmanager.deployments.list
Audit log type : Data access
Permissions : deploymentmanager.deployments.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v2beta.deploymentmanager.deployments.list"
patch
Method : v2beta.deploymentmanager.deployments.patch
Audit log type : Admin activity
Permissions : deploymentmanager.deployments.get - ADMIN_READ
deploymentmanager.deployments.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v2beta.deploymentmanager.deployments.patch"
stop
Method : v2beta.deploymentmanager.deployments.stop
Audit log type : Admin activity
Permissions : deploymentmanager.deployments.stop - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v2beta.deploymentmanager.deployments.stop"
update
Method : v2beta.deploymentmanager.deployments.update
Audit log type : Admin activity
Permissions : deploymentmanager.deployments.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="v2beta.deploymentmanager.deployments.update"
v2beta.deploymentmanager.manifests
The following audit logs are associated with methods belonging to
v2beta.deploymentmanager.manifests .
get
Method : v2beta.deploymentmanager.manifests.get
Audit log type : Data access
Permissions : deploymentmanager.manifests.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v2beta.deploymentmanager.manifests.get"
list
Method : v2beta.deploymentmanager.manifests.list
Audit log type : Data access
Permissions : deploymentmanager.manifests.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v2beta.deploymentmanager.manifests.list"
v2beta.deploymentmanager.operations
The following audit logs are associated with methods belonging to
v2beta.deploymentmanager.operations .
get
Method : v2beta.deploymentmanager.operations.get
Audit log type : Data access
Permissions : deploymentmanager.operations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v2beta.deploymentmanager.operations.get"
v2beta.deploymentmanager.resources
The following audit logs are associated with methods belonging to
v2beta.deploymentmanager.resources .
list
Method : v2beta.deploymentmanager.resources.list
Audit log type : Data access
Permissions : deploymentmanager.resources.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="v2beta.deploymentmanager.resources.list"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
