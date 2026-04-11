---
title: "App Design Center audit logging \_|\_ Application Design Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs/grant-roles-service-account
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/audit-logging
  title: "App Design Center audit logging \_|\_ Application Design Center \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Design Center
Guides
Send feedback
App Design Center audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Design Center. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Design Center audit logs use the service name designcenter.googleapis.com .
Filter for this service:
protoPayload . serviceName = "designcenter.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Design Center generates an audit log whose category is dependent on the
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
google.cloud.designcenter.v1alpha.DesignCenter.DeployApplication (LRO) google.cloud.designcenter.v1alpha.DesignCenter.GenerateApplicationIaC google.cloud.designcenter.v1alpha.DesignCenter.GenerateApplicationTemplateIaC google.cloud.designcenter.v1alpha.DesignCenter.GetApplication google.cloud.designcenter.v1alpha.DesignCenter.GetApplicationTemplate google.cloud.designcenter.v1alpha.DesignCenter.GetApplicationTemplateRevision google.cloud.designcenter.v1alpha.DesignCenter.GetCatalog google.cloud.designcenter.v1alpha.DesignCenter.GetCatalogTemplate google.cloud.designcenter.v1alpha.DesignCenter.GetCatalogTemplateRevision google.cloud.designcenter.v1alpha.DesignCenter.GetSpace google.cloud.designcenter.v1alpha.DesignCenter.ListApplicationTemplates google.cloud.designcenter.v1alpha.DesignCenter.ListApplications google.cloud.designcenter.v1alpha.DesignCenter.ListCatalogs google.cloud.designcenter.v1alpha.DesignCenter.PreviewApplication (LRO)
ADMIN_WRITE
google.cloud.designcenter.v1alpha.DesignCenter.CommitApplicationTemplate google.cloud.designcenter.v1alpha.DesignCenter.CreateApplication google.cloud.designcenter.v1alpha.DesignCenter.CreateApplicationTemplate google.cloud.designcenter.v1alpha.DesignCenter.CreateCatalogTemplate google.cloud.designcenter.v1alpha.DesignCenter.CreateCatalogTemplateRevision (LRO) google.cloud.designcenter.v1alpha.DesignCenter.CreateComponent google.cloud.designcenter.v1alpha.DesignCenter.CreateConnection google.cloud.designcenter.v1alpha.DesignCenter.DeleteApplication (LRO) google.cloud.designcenter.v1alpha.DesignCenter.DeleteApplicationTemplate google.cloud.designcenter.v1alpha.DesignCenter.DeleteCatalogTemplate (LRO) google.cloud.designcenter.v1alpha.DesignCenter.DeleteComponent google.cloud.designcenter.v1alpha.DesignCenter.DeleteConnection google.cloud.designcenter.v1alpha.DesignCenter.ImportApplicationTemplate google.cloud.designcenter.v1alpha.DesignCenter.UpdateApplication google.cloud.designcenter.v1alpha.DesignCenter.UpdateComponent
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Design Center.
google.cloud.designcenter.v1alpha.DesignCenter
The following audit logs are associated with methods belonging to
google.cloud.designcenter.v1alpha.DesignCenter .
CommitApplicationTemplate
Method : google.cloud.designcenter.v1alpha.DesignCenter.CommitApplicationTemplate
Audit log type : Admin activity
Permissions : designcenter.applicationTemplates.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.CommitApplicationTemplate"
CreateApplication
Method : google.cloud.designcenter.v1alpha.DesignCenter.CreateApplication
Audit log type : Admin activity
Permissions : designcenter.applications.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.CreateApplication"
CreateApplicationTemplate
Method : google.cloud.designcenter.v1alpha.DesignCenter.CreateApplicationTemplate
Audit log type : Admin activity
Permissions : designcenter.applicationTemplates.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.CreateApplicationTemplate"
CreateCatalogTemplate
Method : google.cloud.designcenter.v1alpha.DesignCenter.CreateCatalogTemplate
Audit log type : Admin activity
Permissions : designcenter.catalogTemplates.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.CreateCatalogTemplate"
CreateCatalogTemplateRevision
Method : google.cloud.designcenter.v1alpha.DesignCenter.CreateCatalogTemplateRevision
Audit log type : Admin activity
Permissions : designcenter.catalogTemplateRevisions.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.CreateCatalogTemplateRevision"
CreateComponent
Method : google.cloud.designcenter.v1alpha.DesignCenter.CreateComponent
Audit log type : Admin activity
Permissions : designcenter.components.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.CreateComponent"
CreateConnection
Method : google.cloud.designcenter.v1alpha.DesignCenter.CreateConnection
Audit log type : Admin activity
Permissions : designcenter.connections.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.CreateConnection"
DeleteApplication
Method : google.cloud.designcenter.v1alpha.DesignCenter.DeleteApplication
Audit log type : Admin activity
Permissions : designcenter.applications.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.DeleteApplication"
DeleteApplicationTemplate
Method : google.cloud.designcenter.v1alpha.DesignCenter.DeleteApplicationTemplate
Audit log type : Admin activity
Permissions : designcenter.applicationTemplates.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.DeleteApplicationTemplate"
DeleteCatalogTemplate
Method : google.cloud.designcenter.v1alpha.DesignCenter.DeleteCatalogTemplate
Audit log type : Admin activity
Permissions : designcenter.catalogTemplates.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.DeleteCatalogTemplate"
DeleteComponent
Method : google.cloud.designcenter.v1alpha.DesignCenter.DeleteComponent
Audit log type : Admin activity
Permissions : designcenter.components.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.DeleteComponent"
DeleteConnection
Method : google.cloud.designcenter.v1alpha.DesignCenter.DeleteConnection
Audit log type : Admin activity
Permissions : designcenter.connections.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.DeleteConnection"
DeployApplication
Method : google.cloud.designcenter.v1alpha.DesignCenter.DeployApplication
Audit log type : Data access
Permissions : designcenter.applications.get - ADMIN_READ
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.DeployApplication"
GenerateApplicationIaC
Method : google.cloud.designcenter.v1alpha.DesignCenter.GenerateApplicationIaC
Audit log type : Data access
Permissions : designcenter.applications.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.GenerateApplicationIaC"
GenerateApplicationTemplateIaC
Method : google.cloud.designcenter.v1alpha.DesignCenter.GenerateApplicationTemplateIaC
Audit log type : Data access
Permissions : designcenter.applicationTemplates.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.GenerateApplicationTemplateIaC"
GetApplication
Method : google.cloud.designcenter.v1alpha.DesignCenter.GetApplication
Audit log type : Data access
Permissions : designcenter.applications.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.GetApplication"
GetApplicationTemplate
Method : google.cloud.designcenter.v1alpha.DesignCenter.GetApplicationTemplate
Audit log type : Data access
Permissions : designcenter.applicationTemplates.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.GetApplicationTemplate"
GetApplicationTemplateRevision
Method : google.cloud.designcenter.v1alpha.DesignCenter.GetApplicationTemplateRevision
Audit log type : Data access
Permissions : designcenter.applicationTemplateRevisions.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.GetApplicationTemplateRevision"
GetCatalog
Method : google.cloud.designcenter.v1alpha.DesignCenter.GetCatalog
Audit log type : Data access
Permissions : designcenter.catalogs.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.GetCatalog"
GetCatalogTemplate
Method : google.cloud.designcenter.v1alpha.DesignCenter.GetCatalogTemplate
Audit log type : Data access
Permissions : designcenter.catalogTemplates.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.GetCatalogTemplate"
GetCatalogTemplateRevision
Method : google.cloud.designcenter.v1alpha.DesignCenter.GetCatalogTemplateRevision
Audit log type : Data access
Permissions : designcenter.catalogTemplateRevisions.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.GetCatalogTemplateRevision"
GetSpace
Method : google.cloud.designcenter.v1alpha.DesignCenter.GetSpace
Audit log type : Data access
Permissions : designcenter.spaces.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.GetSpace"
ImportApplicationTemplate
Method : google.cloud.designcenter.v1alpha.DesignCenter.ImportApplicationTemplate
Audit log type : Admin activity
Permissions : designcenter.applicationTemplates.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.ImportApplicationTemplate"
ListApplicationTemplates
Method : google.cloud.designcenter.v1alpha.DesignCenter.ListApplicationTemplates
Audit log type : Data access
Permissions : designcenter.applicationTemplates.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.ListApplicationTemplates"
ListApplications
Method : google.cloud.designcenter.v1alpha.DesignCenter.ListApplications
Audit log type : Data access
Permissions : designcenter.applications.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.ListApplications"
ListCatalogs
Method : google.cloud.designcenter.v1alpha.DesignCenter.ListCatalogs
Audit log type : Data access
Permissions : designcenter.catalogs.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.ListCatalogs"
PreviewApplication
Method : google.cloud.designcenter.v1alpha.DesignCenter.PreviewApplication
Audit log type : Data access
Permissions : designcenter.applications.get - ADMIN_READ
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.PreviewApplication"
UpdateApplication
Method : google.cloud.designcenter.v1alpha.DesignCenter.UpdateApplication
Audit log type : Admin activity
Permissions : designcenter.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.UpdateApplication"
UpdateComponent
Method : google.cloud.designcenter.v1alpha.DesignCenter.UpdateComponent
Audit log type : Admin activity
Permissions : designcenter.components.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.designcenter.v1alpha.DesignCenter.UpdateComponent"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.cloud.designcenter.v1alpha.DesignCenter.CreateCatalog
google.cloud.designcenter.v1alpha.DesignCenter.CreateSpace
google.cloud.designcenter.v1alpha.DesignCenter.DeleteCatalog
google.cloud.designcenter.v1alpha.DesignCenter.DeleteCatalogTemplateRevision
google.cloud.designcenter.v1alpha.DesignCenter.DeleteShare
google.cloud.designcenter.v1alpha.DesignCenter.DeleteSpace
google.cloud.designcenter.v1alpha.DesignCenter.GetComponent
google.cloud.designcenter.v1alpha.DesignCenter.GetConnection
google.cloud.designcenter.v1alpha.DesignCenter.GetShare
google.cloud.designcenter.v1alpha.DesignCenter.GetSharedTemplate
google.cloud.designcenter.v1alpha.DesignCenter.ListApplicationTemplateRevisions
google.cloud.designcenter.v1alpha.DesignCenter.ListCatalogTemplateRevisions
google.cloud.designcenter.v1alpha.DesignCenter.ListCatalogTemplates
google.cloud.designcenter.v1alpha.DesignCenter.ListComponents
google.cloud.designcenter.v1alpha.DesignCenter.ListConnections
google.cloud.designcenter.v1alpha.DesignCenter.ListSharedTemplates
google.cloud.designcenter.v1alpha.DesignCenter.ListShares
google.cloud.designcenter.v1alpha.DesignCenter.ListSpaces
google.cloud.designcenter.v1alpha.DesignCenter.SyncShare
google.cloud.designcenter.v1alpha.DesignCenter.UpdateApplicationTemplate
google.cloud.designcenter.v1alpha.DesignCenter.UpdateCatalog
google.cloud.designcenter.v1alpha.DesignCenter.UpdateCatalogTemplate
google.cloud.designcenter.v1alpha.DesignCenter.UpdateConnection
google.cloud.designcenter.v1alpha.DesignCenter.UpdateSpace
google.cloud.designcenter.v1alpha.DesignCenterInternal.ImportSerializedApplicationTemplate
google.longrunning.Operations.WaitOperation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
