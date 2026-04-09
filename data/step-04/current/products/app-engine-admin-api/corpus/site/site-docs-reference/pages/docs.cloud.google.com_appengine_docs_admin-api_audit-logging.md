---
title: "App Engine audit logging \_|\_ App Engine Admin API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/admin-api/apis
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/admin-api/audit-logging
  title: "App Engine audit logging \_|\_ App Engine Admin API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
App Engine
Admin API
Reference
Send feedback
App Engine audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for App Engine. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
App Engine audit logs use the service name appengine.googleapis.com .
Filter for this service:
protoPayload . serviceName = "appengine.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
App Engine generates an audit log whose category is dependent on the
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
google.appengine.v1.Applications.GetApplication google.appengine.v1.Services.GetService google.appengine.v1.Services.ListServices google.appengine.v1.Versions.GetVersion google.appengine.v1.Versions.ListVersions google.appengine.v1beta.Applications.GetApplication google.appengine.v1beta.Services.GetService google.appengine.v1beta.Services.ListServices google.appengine.v1beta.Versions.GetVersion google.appengine.v1beta.Versions.ListVersions
ADMIN_WRITE
google.appengine.v1.Applications.CreateApplication (LRO) google.appengine.v1.Applications.RepairApplication (LRO) google.appengine.v1.Applications.UpdateApplication (LRO) google.appengine.v1.AuthorizedCertificates.CreateAuthorizedCertificate google.appengine.v1.AuthorizedCertificates.DeleteAuthorizedCertificate google.appengine.v1.AuthorizedCertificates.UpdateAuthorizedCertificate google.appengine.v1.DomainMappings.CreateDomainMapping (LRO) google.appengine.v1.DomainMappings.DeleteDomainMapping (LRO) google.appengine.v1.DomainMappings.UpdateDomainMapping (LRO) google.appengine.v1.Firewall.BatchUpdateIngressRules google.appengine.v1.Firewall.CreateIngressRule google.appengine.v1.Firewall.DeleteIngressRule google.appengine.v1.Firewall.UpdateIngressRule google.appengine.v1.Instances.DebugInstance (LRO) google.appengine.v1.Instances.DeleteInstance (LRO) google.appengine.v1.Services.DeleteService (LRO) google.appengine.v1.Services.UpdateService (LRO) google.appengine.v1.Versions.CreateVersion (LRO) google.appengine.v1.Versions.DeleteVersion (LRO) google.appengine.v1.Versions.UpdateVersion (LRO) google.appengine.v1alpha.AuthorizedCertificates.DeleteAuthorizedCertificate google.appengine.v1alpha.AuthorizedCertificates.UpdateAuthorizedCertificate google.appengine.v1alpha.DomainMappings.CreateDomainMapping (LRO) google.appengine.v1alpha.DomainMappings.DeleteDomainMapping (LRO) google.appengine.v1alpha.DomainMappings.UpdateDomainMapping (LRO) google.appengine.v1beta.Applications.CreateApplication (LRO) google.appengine.v1beta.Applications.RepairApplication (LRO) google.appengine.v1beta.Applications.UpdateApplication (LRO) google.appengine.v1beta.AuthorizedCertificates.CreateAuthorizedCertificate google.appengine.v1beta.AuthorizedCertificates.DeleteAuthorizedCertificate google.appengine.v1beta.AuthorizedCertificates.UpdateAuthorizedCertificate google.appengine.v1beta.DomainMappings.CreateDomainMapping (LRO) google.appengine.v1beta.DomainMappings.DeleteDomainMapping (LRO) google.appengine.v1beta.DomainMappings.UpdateDomainMapping (LRO) google.appengine.v1beta.Firewall.BatchUpdateIngressRules google.appengine.v1beta.Firewall.CreateIngressRule google.appengine.v1beta.Firewall.DeleteIngressRule google.appengine.v1beta.Firewall.UpdateIngressRule google.appengine.v1beta.Instances.DebugInstance (LRO) google.appengine.v1beta.Instances.DeleteInstance (LRO) google.appengine.v1beta.Services.DeleteService (LRO) google.appengine.v1beta.Services.UpdateService (LRO) google.appengine.v1beta.Versions.CreateVersion (LRO) google.appengine.v1beta.Versions.DeleteVersion (LRO) google.appengine.v1beta.Versions.UpdateVersion (LRO)
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for App Engine.
google.appengine.v1.Applications
The following audit logs are associated with methods belonging to
google.appengine.v1.Applications .
CreateApplication
Method : google.appengine.v1.Applications.CreateApplication
Audit log type : Admin activity
Permissions : appengine.applications.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1.Applications.CreateApplication"
GetApplication
Method : google.appengine.v1.Applications.GetApplication
Audit log type : Data access
Permissions : appengine.applications.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.Applications.GetApplication"
RepairApplication
Method : google.appengine.v1.Applications.RepairApplication
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1.Applications.RepairApplication"
UpdateApplication
Method : google.appengine.v1.Applications.UpdateApplication
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1.Applications.UpdateApplication"
google.appengine.v1.AuthorizedCertificates
The following audit logs are associated with methods belonging to
google.appengine.v1.AuthorizedCertificates .
CreateAuthorizedCertificate
Method : google.appengine.v1.AuthorizedCertificates.CreateAuthorizedCertificate
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.AuthorizedCertificates.CreateAuthorizedCertificate"
DeleteAuthorizedCertificate
Method : google.appengine.v1.AuthorizedCertificates.DeleteAuthorizedCertificate
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.AuthorizedCertificates.DeleteAuthorizedCertificate"
GetAuthorizedCertificate
Method : google.appengine.v1.AuthorizedCertificates.GetAuthorizedCertificate
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.AuthorizedCertificates.GetAuthorizedCertificate"
ListAuthorizedCertificates
Method : google.appengine.v1.AuthorizedCertificates.ListAuthorizedCertificates
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.AuthorizedCertificates.ListAuthorizedCertificates"
UpdateAuthorizedCertificate
Method : google.appengine.v1.AuthorizedCertificates.UpdateAuthorizedCertificate
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.AuthorizedCertificates.UpdateAuthorizedCertificate"
google.appengine.v1.DomainMappings
The following audit logs are associated with methods belonging to
google.appengine.v1.DomainMappings .
CreateDomainMapping
Method : google.appengine.v1.DomainMappings.CreateDomainMapping
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1.DomainMappings.CreateDomainMapping"
DeleteDomainMapping
Method : google.appengine.v1.DomainMappings.DeleteDomainMapping
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1.DomainMappings.DeleteDomainMapping"
GetDomainMapping
Method : google.appengine.v1.DomainMappings.GetDomainMapping
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.DomainMappings.GetDomainMapping"
ListDomainMappings
Method : google.appengine.v1.DomainMappings.ListDomainMappings
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.DomainMappings.ListDomainMappings"
UpdateDomainMapping
Method : google.appengine.v1.DomainMappings.UpdateDomainMapping
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1.DomainMappings.UpdateDomainMapping"
google.appengine.v1.Firewall
The following audit logs are associated with methods belonging to
google.appengine.v1.Firewall .
BatchUpdateIngressRules
Method : google.appengine.v1.Firewall.BatchUpdateIngressRules
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.Firewall.BatchUpdateIngressRules"
CreateIngressRule
Method : google.appengine.v1.Firewall.CreateIngressRule
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.Firewall.CreateIngressRule"
DeleteIngressRule
Method : google.appengine.v1.Firewall.DeleteIngressRule
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.Firewall.DeleteIngressRule"
GetIngressRule
Method : google.appengine.v1.Firewall.GetIngressRule
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.Firewall.GetIngressRule"
ListIngressRules
Method : google.appengine.v1.Firewall.ListIngressRules
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.Firewall.ListIngressRules"
UpdateIngressRule
Method : google.appengine.v1.Firewall.UpdateIngressRule
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.Firewall.UpdateIngressRule"
google.appengine.v1.Instances
The following audit logs are associated with methods belonging to
google.appengine.v1.Instances .
DebugInstance
Method : google.appengine.v1.Instances.DebugInstance
Audit log type : Admin activity
Permissions : appengine.instances.enableDebug - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1.Instances.DebugInstance"
DeleteInstance
Method : google.appengine.v1.Instances.DeleteInstance
Audit log type : Admin activity
Permissions : appengine.instances.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1.Instances.DeleteInstance"
GetInstance
Method : google.appengine.v1.Instances.GetInstance
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.Instances.GetInstance"
ListInstances
Method : google.appengine.v1.Instances.ListInstances
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.Instances.ListInstances"
google.appengine.v1.Services
The following audit logs are associated with methods belonging to
google.appengine.v1.Services .
DeleteService
Method : google.appengine.v1.Services.DeleteService
Audit log type : Admin activity
Permissions : appengine.services.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1.Services.DeleteService"
GetService
Method : google.appengine.v1.Services.GetService
Audit log type : Data access
Permissions : appengine.services.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.Services.GetService"
ListServices
Method : google.appengine.v1.Services.ListServices
Audit log type : Data access
Permissions : appengine.services.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.Services.ListServices"
UpdateService
Method : google.appengine.v1.Services.UpdateService
Audit log type : Admin activity
Permissions : appengine.services.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1.Services.UpdateService"
google.appengine.v1.Versions
The following audit logs are associated with methods belonging to
google.appengine.v1.Versions .
CreateVersion
Method : google.appengine.v1.Versions.CreateVersion
Audit log type : Admin activity
Permissions : appengine.versions.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1.Versions.CreateVersion"
DeleteVersion
Method : google.appengine.v1.Versions.DeleteVersion
Audit log type : Admin activity
Permissions : appengine.versions.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1.Versions.DeleteVersion"
GetVersion
Method : google.appengine.v1.Versions.GetVersion
Audit log type : Data access
Permissions : appengine.versions.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.Versions.GetVersion"
ListVersions
Method : google.appengine.v1.Versions.ListVersions
Audit log type : Data access
Permissions : appengine.versions.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1.Versions.ListVersions"
UpdateVersion
Method : google.appengine.v1.Versions.UpdateVersion
Audit log type : Admin activity
Permissions : appengine.versions.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1.Versions.UpdateVersion"
google.appengine.v1alpha.AuthorizedCertificates
The following audit logs are associated with methods belonging to
google.appengine.v1alpha.AuthorizedCertificates .
DeleteAuthorizedCertificate
Method : google.appengine.v1alpha.AuthorizedCertificates.DeleteAuthorizedCertificate
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1alpha.AuthorizedCertificates.DeleteAuthorizedCertificate"
GetAuthorizedCertificate
Method : google.appengine.v1alpha.AuthorizedCertificates.GetAuthorizedCertificate
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1alpha.AuthorizedCertificates.GetAuthorizedCertificate"
ListAuthorizedCertificates
Method : google.appengine.v1alpha.AuthorizedCertificates.ListAuthorizedCertificates
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1alpha.AuthorizedCertificates.ListAuthorizedCertificates"
UpdateAuthorizedCertificate
Method : google.appengine.v1alpha.AuthorizedCertificates.UpdateAuthorizedCertificate
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1alpha.AuthorizedCertificates.UpdateAuthorizedCertificate"
google.appengine.v1alpha.AuthorizedDomains
The following audit logs are associated with methods belonging to
google.appengine.v1alpha.AuthorizedDomains .
ListAuthorizedDomains
Method : google.appengine.v1alpha.AuthorizedDomains.ListAuthorizedDomains
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1alpha.AuthorizedDomains.ListAuthorizedDomains"
google.appengine.v1alpha.DomainMappings
The following audit logs are associated with methods belonging to
google.appengine.v1alpha.DomainMappings .
CreateDomainMapping
Method : google.appengine.v1alpha.DomainMappings.CreateDomainMapping
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1alpha.DomainMappings.CreateDomainMapping"
DeleteDomainMapping
Method : google.appengine.v1alpha.DomainMappings.DeleteDomainMapping
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1alpha.DomainMappings.DeleteDomainMapping"
GetDomainMapping
Method : google.appengine.v1alpha.DomainMappings.GetDomainMapping
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1alpha.DomainMappings.GetDomainMapping"
ListDomainMappings
Method : google.appengine.v1alpha.DomainMappings.ListDomainMappings
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1alpha.DomainMappings.ListDomainMappings"
UpdateDomainMapping
Method : google.appengine.v1alpha.DomainMappings.UpdateDomainMapping
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1alpha.DomainMappings.UpdateDomainMapping"
google.appengine.v1beta.Applications
The following audit logs are associated with methods belonging to
google.appengine.v1beta.Applications .
CreateApplication
Method : google.appengine.v1beta.Applications.CreateApplication
Audit log type : Admin activity
Permissions : appengine.applications.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Applications.CreateApplication"
GetApplication
Method : google.appengine.v1beta.Applications.GetApplication
Audit log type : Data access
Permissions : appengine.applications.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Applications.GetApplication"
RepairApplication
Method : google.appengine.v1beta.Applications.RepairApplication
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Applications.RepairApplication"
UpdateApplication
Method : google.appengine.v1beta.Applications.UpdateApplication
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Applications.UpdateApplication"
google.appengine.v1beta.AuthorizedCertificates
The following audit logs are associated with methods belonging to
google.appengine.v1beta.AuthorizedCertificates .
CreateAuthorizedCertificate
Method : google.appengine.v1beta.AuthorizedCertificates.CreateAuthorizedCertificate
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.AuthorizedCertificates.CreateAuthorizedCertificate"
DeleteAuthorizedCertificate
Method : google.appengine.v1beta.AuthorizedCertificates.DeleteAuthorizedCertificate
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.AuthorizedCertificates.DeleteAuthorizedCertificate"
GetAuthorizedCertificate
Method : google.appengine.v1beta.AuthorizedCertificates.GetAuthorizedCertificate
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.AuthorizedCertificates.GetAuthorizedCertificate"
ListAuthorizedCertificates
Method : google.appengine.v1beta.AuthorizedCertificates.ListAuthorizedCertificates
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.AuthorizedCertificates.ListAuthorizedCertificates"
UpdateAuthorizedCertificate
Method : google.appengine.v1beta.AuthorizedCertificates.UpdateAuthorizedCertificate
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.AuthorizedCertificates.UpdateAuthorizedCertificate"
google.appengine.v1beta.DomainMappings
The following audit logs are associated with methods belonging to
google.appengine.v1beta.DomainMappings .
CreateDomainMapping
Method : google.appengine.v1beta.DomainMappings.CreateDomainMapping
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.DomainMappings.CreateDomainMapping"
DeleteDomainMapping
Method : google.appengine.v1beta.DomainMappings.DeleteDomainMapping
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.DomainMappings.DeleteDomainMapping"
GetDomainMapping
Method : google.appengine.v1beta.DomainMappings.GetDomainMapping
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.DomainMappings.GetDomainMapping"
ListDomainMappings
Method : google.appengine.v1beta.DomainMappings.ListDomainMappings
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.DomainMappings.ListDomainMappings"
UpdateDomainMapping
Method : google.appengine.v1beta.DomainMappings.UpdateDomainMapping
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.DomainMappings.UpdateDomainMapping"
google.appengine.v1beta.Firewall
The following audit logs are associated with methods belonging to
google.appengine.v1beta.Firewall .
BatchUpdateIngressRules
Method : google.appengine.v1beta.Firewall.BatchUpdateIngressRules
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Firewall.BatchUpdateIngressRules"
CreateIngressRule
Method : google.appengine.v1beta.Firewall.CreateIngressRule
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Firewall.CreateIngressRule"
DeleteIngressRule
Method : google.appengine.v1beta.Firewall.DeleteIngressRule
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Firewall.DeleteIngressRule"
GetIngressRule
Method : google.appengine.v1beta.Firewall.GetIngressRule
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Firewall.GetIngressRule"
ListIngressRules
Method : google.appengine.v1beta.Firewall.ListIngressRules
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Firewall.ListIngressRules"
UpdateIngressRule
Method : google.appengine.v1beta.Firewall.UpdateIngressRule
Audit log type : Admin activity
Permissions : appengine.applications.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Firewall.UpdateIngressRule"
google.appengine.v1beta.Instances
The following audit logs are associated with methods belonging to
google.appengine.v1beta.Instances .
DebugInstance
Method : google.appengine.v1beta.Instances.DebugInstance
Audit log type : Admin activity
Permissions : appengine.instances.enableDebug - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Instances.DebugInstance"
DeleteInstance
Method : google.appengine.v1beta.Instances.DeleteInstance
Audit log type : Admin activity
Permissions : appengine.instances.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Instances.DeleteInstance"
GetInstance
Method : google.appengine.v1beta.Instances.GetInstance
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Instances.GetInstance"
ListInstances
Method : google.appengine.v1beta.Instances.ListInstances
Audit log type : Admin activity
Permissions :
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Instances.ListInstances"
google.appengine.v1beta.Services
The following audit logs are associated with methods belonging to
google.appengine.v1beta.Services .
DeleteService
Method : google.appengine.v1beta.Services.DeleteService
Audit log type : Admin activity
Permissions : appengine.services.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Services.DeleteService"
GetService
Method : google.appengine.v1beta.Services.GetService
Audit log type : Data access
Permissions : appengine.services.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Services.GetService"
ListServices
Method : google.appengine.v1beta.Services.ListServices
Audit log type : Data access
Permissions : appengine.services.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Services.ListServices"
UpdateService
Method : google.appengine.v1beta.Services.UpdateService
Audit log type : Admin activity
Permissions : appengine.services.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Services.UpdateService"
google.appengine.v1beta.Versions
The following audit logs are associated with methods belonging to
google.appengine.v1beta.Versions .
CreateVersion
Method : google.appengine.v1beta.Versions.CreateVersion
Audit log type : Admin activity
Permissions : appengine.versions.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Versions.CreateVersion"
DeleteVersion
Method : google.appengine.v1beta.Versions.DeleteVersion
Audit log type : Admin activity
Permissions : appengine.versions.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Versions.DeleteVersion"
GetVersion
Method : google.appengine.v1beta.Versions.GetVersion
Audit log type : Data access
Permissions : appengine.versions.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Versions.GetVersion"
ListVersions
Method : google.appengine.v1beta.Versions.ListVersions
Audit log type : Data access
Permissions : appengine.versions.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Versions.ListVersions"
UpdateVersion
Method : google.appengine.v1beta.Versions.UpdateVersion
Audit log type : Admin activity
Permissions : appengine.versions.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.appengine.v1beta.Versions.UpdateVersion"
System events
System Event audit logs are generated by GCP systems, not
direct user action. For more information, see
System Event audit logs .
Method Name
Filter For This Event
Notes
google.appengine.v1.Versions.DeleteVersion
protoPayload.methodName="google.appengine.v1.Versions.DeleteVersion"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.appengine.v1.Applications.ListRuntimes
google.appengine.v1.AuthorizedDomains.ListAuthorizedDomains
google.appengine.v1beta.Applications.ListRuntimes
google.appengine.v1beta.AuthorizedDomains.ListAuthorizedDomains
google.cloud.location.Locations.GetLocation
google.cloud.location.Locations.ListLocations
google.longrunning.Operations.GetOperation
google.longrunning.Operations.ListOperations
google.longrunning.Operations.WaitOperation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
