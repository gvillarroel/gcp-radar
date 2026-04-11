---
title: "Service Directory audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-directory/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-directory/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/service-directory/docs/audit-logging
  title: "Service Directory audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Distributed, hybrid, and multicloud
Service Directory
Guides
Send feedback
Service Directory audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Service Directory. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Service Directory audit logs use the service name servicedirectory.googleapis.com .
Filter for this service:
protoPayload . serviceName = "servicedirectory.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Service Directory generates an audit log whose category is dependent on the
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
google.cloud.location.Locations.GetLocation google.cloud.location.Locations.ListLocations google.cloud.servicedirectory.v1.RegistrationService.GetIamPolicy google.cloud.servicedirectory.v1.RegistrationService.GetNamespace google.cloud.servicedirectory.v1.RegistrationService.ListNamespaces google.cloud.servicedirectory.v1beta1.RegistrationService.GetIamPolicy google.cloud.servicedirectory.v1beta1.RegistrationService.GetNamespace google.cloud.servicedirectory.v1beta1.RegistrationService.ListNamespaces
ADMIN_WRITE
google.cloud.servicedirectory.v1.RegistrationService.CreateNamespace google.cloud.servicedirectory.v1.RegistrationService.DeleteNamespace google.cloud.servicedirectory.v1.RegistrationService.SetIamPolicy google.cloud.servicedirectory.v1.RegistrationService.UpdateNamespace google.cloud.servicedirectory.v1beta1.RegistrationService.CreateNamespace google.cloud.servicedirectory.v1beta1.RegistrationService.DeleteNamespace google.cloud.servicedirectory.v1beta1.RegistrationService.SetIamPolicy google.cloud.servicedirectory.v1beta1.RegistrationService.UpdateNamespace
DATA_READ
google.cloud.servicedirectory.v1.LookupService.ResolveService google.cloud.servicedirectory.v1.RegistrationService.GetEndpoint google.cloud.servicedirectory.v1.RegistrationService.GetService google.cloud.servicedirectory.v1.RegistrationService.ListEndpoints google.cloud.servicedirectory.v1.RegistrationService.ListServices google.cloud.servicedirectory.v1beta1.LookupService.ResolveService google.cloud.servicedirectory.v1beta1.RegistrationService.GetEndpoint google.cloud.servicedirectory.v1beta1.RegistrationService.GetService google.cloud.servicedirectory.v1beta1.RegistrationService.ListEndpoints google.cloud.servicedirectory.v1beta1.RegistrationService.ListServices
DATA_WRITE
google.cloud.servicedirectory.v1.RegistrationService.CreateEndpoint google.cloud.servicedirectory.v1.RegistrationService.CreateService google.cloud.servicedirectory.v1.RegistrationService.DeleteEndpoint google.cloud.servicedirectory.v1.RegistrationService.DeleteService google.cloud.servicedirectory.v1.RegistrationService.UpdateEndpoint google.cloud.servicedirectory.v1.RegistrationService.UpdateService google.cloud.servicedirectory.v1beta1.RegistrationService.CreateEndpoint google.cloud.servicedirectory.v1beta1.RegistrationService.CreateService google.cloud.servicedirectory.v1beta1.RegistrationService.DeleteEndpoint google.cloud.servicedirectory.v1beta1.RegistrationService.DeleteService google.cloud.servicedirectory.v1beta1.RegistrationService.UpdateEndpoint google.cloud.servicedirectory.v1beta1.RegistrationService.UpdateService
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Service Directory.
google.cloud.location.Locations
The following audit logs are associated with methods belonging to
google.cloud.location.Locations .
GetLocation
Method : google.cloud.location.Locations.GetLocation
Audit log type : Data access
Permissions : servicedirectory.locations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.location.Locations.GetLocation"
ListLocations
Method : google.cloud.location.Locations.ListLocations
Audit log type : Data access
Permissions : servicedirectory.locations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.location.Locations.ListLocations"
google.cloud.servicedirectory.v1.LookupService
The following audit logs are associated with methods belonging to
google.cloud.servicedirectory.v1.LookupService .
ResolveService
Method : google.cloud.servicedirectory.v1.LookupService.ResolveService
Audit log type : Data access
Permissions : servicedirectory.services.resolve - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1.LookupService.ResolveService"
google.cloud.servicedirectory.v1.RegistrationService
The following audit logs are associated with methods belonging to
google.cloud.servicedirectory.v1.RegistrationService .
CreateEndpoint
Method : google.cloud.servicedirectory.v1.RegistrationService.CreateEndpoint
Audit log type : Data access
Permissions : servicedirectory.endpoints.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1.RegistrationService.CreateEndpoint"
CreateNamespace
Method : google.cloud.servicedirectory.v1.RegistrationService.CreateNamespace
Audit log type : Admin activity
Permissions : servicedirectory.namespaces.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1.RegistrationService.CreateNamespace"
CreateService
Method : google.cloud.servicedirectory.v1.RegistrationService.CreateService
Audit log type : Data access
Permissions : servicedirectory.services.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1.RegistrationService.CreateService"
DeleteEndpoint
Method : google.cloud.servicedirectory.v1.RegistrationService.DeleteEndpoint
Audit log type : Data access
Permissions : servicedirectory.endpoints.delete - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1.RegistrationService.DeleteEndpoint"
DeleteNamespace
Method : google.cloud.servicedirectory.v1.RegistrationService.DeleteNamespace
Audit log type : Admin activity
Permissions : servicedirectory.namespaces.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1.RegistrationService.DeleteNamespace"
DeleteService
Method : google.cloud.servicedirectory.v1.RegistrationService.DeleteService
Audit log type : Data access
Permissions : servicedirectory.services.delete - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1.RegistrationService.DeleteService"
GetEndpoint
Method : google.cloud.servicedirectory.v1.RegistrationService.GetEndpoint
Audit log type : Data access
Permissions : servicedirectory.endpoints.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1.RegistrationService.GetEndpoint"
GetIamPolicy
Method : google.cloud.servicedirectory.v1.RegistrationService.GetIamPolicy
Audit log type : Data access
Permissions : servicedirectory.namespaces.getIamPolicy - ADMIN_READ
servicedirectory.services.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1.RegistrationService.GetIamPolicy"
GetNamespace
Method : google.cloud.servicedirectory.v1.RegistrationService.GetNamespace
Audit log type : Data access
Permissions : servicedirectory.namespaces.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1.RegistrationService.GetNamespace"
GetService
Method : google.cloud.servicedirectory.v1.RegistrationService.GetService
Audit log type : Data access
Permissions : servicedirectory.services.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1.RegistrationService.GetService"
ListEndpoints
Method : google.cloud.servicedirectory.v1.RegistrationService.ListEndpoints
Audit log type : Data access
Permissions : servicedirectory.endpoints.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1.RegistrationService.ListEndpoints"
ListNamespaces
Method : google.cloud.servicedirectory.v1.RegistrationService.ListNamespaces
Audit log type : Data access
Permissions : servicedirectory.namespaces.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1.RegistrationService.ListNamespaces"
ListServices
Method : google.cloud.servicedirectory.v1.RegistrationService.ListServices
Audit log type : Data access
Permissions : servicedirectory.services.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1.RegistrationService.ListServices"
SetIamPolicy
Method : google.cloud.servicedirectory.v1.RegistrationService.SetIamPolicy
Audit log type : Admin activity
Permissions : servicedirectory.namespaces.setIamPolicy - ADMIN_WRITE
servicedirectory.services.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1.RegistrationService.SetIamPolicy"
UpdateEndpoint
Method : google.cloud.servicedirectory.v1.RegistrationService.UpdateEndpoint
Audit log type : Data access
Permissions : servicedirectory.endpoints.update - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1.RegistrationService.UpdateEndpoint"
UpdateNamespace
Method : google.cloud.servicedirectory.v1.RegistrationService.UpdateNamespace
Audit log type : Admin activity
Permissions : servicedirectory.namespaces.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1.RegistrationService.UpdateNamespace"
UpdateService
Method : google.cloud.servicedirectory.v1.RegistrationService.UpdateService
Audit log type : Data access
Permissions : servicedirectory.services.update - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1.RegistrationService.UpdateService"
google.cloud.servicedirectory.v1beta1.LookupService
The following audit logs are associated with methods belonging to
google.cloud.servicedirectory.v1beta1.LookupService .
ResolveService
Method : google.cloud.servicedirectory.v1beta1.LookupService.ResolveService
Audit log type : Data access
Permissions : servicedirectory.services.resolve - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1beta1.LookupService.ResolveService"
google.cloud.servicedirectory.v1beta1.RegistrationService
The following audit logs are associated with methods belonging to
google.cloud.servicedirectory.v1beta1.RegistrationService .
CreateEndpoint
Method : google.cloud.servicedirectory.v1beta1.RegistrationService.CreateEndpoint
Audit log type : Data access
Permissions : servicedirectory.endpoints.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1beta1.RegistrationService.CreateEndpoint"
CreateNamespace
Method : google.cloud.servicedirectory.v1beta1.RegistrationService.CreateNamespace
Audit log type : Admin activity
Permissions : servicedirectory.namespaces.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1beta1.RegistrationService.CreateNamespace"
CreateService
Method : google.cloud.servicedirectory.v1beta1.RegistrationService.CreateService
Audit log type : Data access
Permissions : servicedirectory.services.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1beta1.RegistrationService.CreateService"
DeleteEndpoint
Method : google.cloud.servicedirectory.v1beta1.RegistrationService.DeleteEndpoint
Audit log type : Data access
Permissions : servicedirectory.endpoints.delete - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1beta1.RegistrationService.DeleteEndpoint"
DeleteNamespace
Method : google.cloud.servicedirectory.v1beta1.RegistrationService.DeleteNamespace
Audit log type : Admin activity
Permissions : servicedirectory.namespaces.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1beta1.RegistrationService.DeleteNamespace"
DeleteService
Method : google.cloud.servicedirectory.v1beta1.RegistrationService.DeleteService
Audit log type : Data access
Permissions : servicedirectory.services.delete - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1beta1.RegistrationService.DeleteService"
GetEndpoint
Method : google.cloud.servicedirectory.v1beta1.RegistrationService.GetEndpoint
Audit log type : Data access
Permissions : servicedirectory.endpoints.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1beta1.RegistrationService.GetEndpoint"
GetIamPolicy
Method : google.cloud.servicedirectory.v1beta1.RegistrationService.GetIamPolicy
Audit log type : Data access
Permissions : servicedirectory.services.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1beta1.RegistrationService.GetIamPolicy"
GetNamespace
Method : google.cloud.servicedirectory.v1beta1.RegistrationService.GetNamespace
Audit log type : Data access
Permissions : servicedirectory.namespaces.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1beta1.RegistrationService.GetNamespace"
GetService
Method : google.cloud.servicedirectory.v1beta1.RegistrationService.GetService
Audit log type : Data access
Permissions : servicedirectory.services.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1beta1.RegistrationService.GetService"
ListEndpoints
Method : google.cloud.servicedirectory.v1beta1.RegistrationService.ListEndpoints
Audit log type : Data access
Permissions : servicedirectory.endpoints.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1beta1.RegistrationService.ListEndpoints"
ListNamespaces
Method : google.cloud.servicedirectory.v1beta1.RegistrationService.ListNamespaces
Audit log type : Data access
Permissions : servicedirectory.namespaces.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1beta1.RegistrationService.ListNamespaces"
ListServices
Method : google.cloud.servicedirectory.v1beta1.RegistrationService.ListServices
Audit log type : Data access
Permissions : servicedirectory.services.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1beta1.RegistrationService.ListServices"
SetIamPolicy
Method : google.cloud.servicedirectory.v1beta1.RegistrationService.SetIamPolicy
Audit log type : Admin activity
Permissions : servicedirectory.services.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1beta1.RegistrationService.SetIamPolicy"
UpdateEndpoint
Method : google.cloud.servicedirectory.v1beta1.RegistrationService.UpdateEndpoint
Audit log type : Data access
Permissions : servicedirectory.endpoints.update - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1beta1.RegistrationService.UpdateEndpoint"
UpdateNamespace
Method : google.cloud.servicedirectory.v1beta1.RegistrationService.UpdateNamespace
Audit log type : Admin activity
Permissions : servicedirectory.namespaces.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1beta1.RegistrationService.UpdateNamespace"
UpdateService
Method : google.cloud.servicedirectory.v1beta1.RegistrationService.UpdateService
Audit log type : Data access
Permissions : servicedirectory.services.update - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.servicedirectory.v1beta1.RegistrationService.UpdateService"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.cloud.servicedirectory.v1.RegistrationService.TestIamPermissions
google.cloud.servicedirectory.v1beta1.RegistrationService.TestIamPermissions
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
