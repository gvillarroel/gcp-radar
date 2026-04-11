---
title: "Google Workspace add-on audit logging \_|\_ Google Workspace add-ons \_|\_\
  \ Google for Developers"
url: https://developers.google.com/workspace/add-ons/reference/audit-logging
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/reference
source_metadata:
  url: https://developers.google.com/workspace/add-ons/reference/audit-logging
  title: "Google Workspace add-on audit logging \_|\_ Google Workspace add-ons \_\
    |\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Add-ons
Reference
Send feedback
Google Workspace add-on audit logging
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Workspace Add-ons generate audit logs that record administrative and access activities, categorized as either Data Access or Admin Activity based on the permission type required for the method call.
Audit logs for Google Workspace Add-ons utilize the service name gsuiteaddons.googleapis.com and can be filtered using protoPayload.serviceName="gsuiteaddons.googleapis.com" .
Methods requiring DATA_READ , DATA_WRITE , or ADMIN_READ permissions generate Data Access audit logs, while those requiring ADMIN_WRITE permissions generate Admin Activity audit logs.
This document provides a detailed breakdown of each method within google.cloud.gsuiteaddons.v1.GSuiteAddOns , specifying the audit log type, required permissions, and filtering criteria.
This document describes audit logging for Google Workspace add-ons. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Google Workspace add-ons audit logs use the service name gsuiteaddons.googleapis.com .
Filter for this service:
protoPayload . serviceName = "gsuiteaddons.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Google Workspace add-ons generates an audit log whose category is dependent on the
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
google.cloud.gsuiteaddons.v1.GSuiteAddOns.GetAuthorization google.cloud.gsuiteaddons.v1.GSuiteAddOns.GetDeployment google.cloud.gsuiteaddons.v1.GSuiteAddOns.ListDeployments google.cloud.gsuiteaddons.v1.GSuiteAddOns.UninstallDeployment
ADMIN_WRITE
google.cloud.gsuiteaddons.v1.GSuiteAddOns.CreateDeployment google.cloud.gsuiteaddons.v1.GSuiteAddOns.DeleteDeployment google.cloud.gsuiteaddons.v1.GSuiteAddOns.InstallDeployment google.cloud.gsuiteaddons.v1.GSuiteAddOns.ReplaceDeployment
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Google Workspace add-ons.
google.cloud.gsuiteaddons.v1.GSuiteAddOns
The following audit logs are associated with methods belonging to
google.cloud.gsuiteaddons.v1.GSuiteAddOns .
CreateDeployment
Method : google.cloud.gsuiteaddons.v1.GSuiteAddOns.CreateDeployment
Audit log type : Admin activity
Permissions : gsuiteaddons.deployments.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.gsuiteaddons.v1.GSuiteAddOns.CreateDeployment"
DeleteDeployment
Method : google.cloud.gsuiteaddons.v1.GSuiteAddOns.DeleteDeployment
Audit log type : Admin activity
Permissions : gsuiteaddons.deployments.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.gsuiteaddons.v1.GSuiteAddOns.DeleteDeployment"
GetAuthorization
Method : google.cloud.gsuiteaddons.v1.GSuiteAddOns.GetAuthorization
Audit log type : Data access
Permissions : gsuiteaddons.authorizations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.gsuiteaddons.v1.GSuiteAddOns.GetAuthorization"
GetDeployment
Method : google.cloud.gsuiteaddons.v1.GSuiteAddOns.GetDeployment
Audit log type : Data access
Permissions : gsuiteaddons.deployments.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.gsuiteaddons.v1.GSuiteAddOns.GetDeployment"
InstallDeployment
Method : google.cloud.gsuiteaddons.v1.GSuiteAddOns.InstallDeployment
Audit log type : Admin activity
Permissions : gsuiteaddons.deployments.install - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.gsuiteaddons.v1.GSuiteAddOns.InstallDeployment"
ListDeployments
Method : google.cloud.gsuiteaddons.v1.GSuiteAddOns.ListDeployments
Audit log type : Data access
Permissions : gsuiteaddons.deployments.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.gsuiteaddons.v1.GSuiteAddOns.ListDeployments"
ReplaceDeployment
Method : google.cloud.gsuiteaddons.v1.GSuiteAddOns.ReplaceDeployment
Audit log type : Admin activity
Permissions : gsuiteaddons.deployments.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.gsuiteaddons.v1.GSuiteAddOns.ReplaceDeployment"
UninstallDeployment
Method : google.cloud.gsuiteaddons.v1.GSuiteAddOns.UninstallDeployment
Audit log type : Data access
Permissions : gsuiteaddons.deployments.execute - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.gsuiteaddons.v1.GSuiteAddOns.UninstallDeployment"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["Google Workspace add-ons generate audit logs under the service name `gsuiteaddons.googleapis.com`. Log categories are determined by IAM permission types (`ADMIN_READ`, `ADMIN_WRITE`, `DATA_READ`, `DATA_WRITE`). `ADMIN_WRITE` permissions trigger Admin Activity logs, while `ADMIN_READ`, `DATA_READ`, and `DATA_WRITE` trigger Data Access logs. Specific methods like `CreateDeployment` and `DeleteDeployment` require `ADMIN_WRITE` permissions, generating Admin Activity logs. Methods such as `GetAuthorization` and `UninstallDeployment` need `ADMIN_READ` permissions and thus generate Data access logs. Filters are provided for each method.\n"]]
