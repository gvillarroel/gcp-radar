---
title: "Access Context Manager audit logging information \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/audit-logging
  title: "Access Context Manager audit logging information \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Access Context Manager audit logging information | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Access Context Manager
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
How-to guides
All how-to guides
Access control with IAM
Create an access policy
Create a basic access level
Create a custom access level
Use mobile devices with access levels
Manage an access policy
Create custom constraints
Manage access levels
Make bulk changes to access levels
Audit logging
Use Context-Aware Access
Set up context-aware access
Define access policies using access levels
Apply policies to user groups with access bindings
Configure session controls for re-authentication
Configure a credential strength policy
Configure Chrome browser attributes
Configure enterprise certificate conditions
Configure time and date conditions
Manage access bindings
Context-aware access enforcement points
Use certificate-based access
Certificate-based access overview
Understand mutual TLS at Google Cloud
Set up certificate-based access
Create access levels for certificate-based access
Enforce certificate-based access for a user group
Enforce certificate-based access with VPC Service Controls
Enable certificate-based access in client applications
Enable certificate-based access for web applications
Enable certificate-based access for VMs
Setting up Endpoint Verification
Enable certificate-based access with your enterprise certificates
Enable certificate-based access with Endpoint Verification certificates
Configure certificate-based access for Workload Identity Federation
Concepts
All concepts
Overview
Scoped policies
Custom access levels
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Service name
Methods by permission type
API interface audit logs google.identity.accesscontextmanager.v1.AccessContextManager
google.identity.accesscontextmanager.v1alpha.AccessContextManager
google.longrunning.Operations
Methods that don't produce audit logs
Home
Documentation
Security
Access Context Manager
Guides
Was this helpful?
Send feedback
Access Context Manager audit logging information
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Service name
Methods by permission type
API interface audit logs google.identity.accesscontextmanager.v1.AccessContextManager
google.identity.accesscontextmanager.v1alpha.AccessContextManager
google.longrunning.Operations
Methods that don't produce audit logs
This document describes audit logging for Access Context Manager. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Access Context Manager audit logs use the service name accesscontextmanager.googleapis.com .
Filter for this service:
See more code actions.
Light code theme
Dark code theme
protoPayload . serviceName = "accesscontextmanager.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Access Context Manager generates an audit log whose category is dependent on the
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
ADMIN_ READ
google. identity. accesscontextmanager. v1. Access Context Manager. Get Access Level google. identity. accesscontextmanager. v1. Access Context Manager. Get Access Policy google. identity. accesscontextmanager. v1. Access Context Manager. Get Authorized Orgs Desc google. identity. accesscontextmanager. v1. Access Context Manager. Get Gcp User Access Binding google. identity. accesscontextmanager. v1. Access Context Manager. Get Iam Policy google. identity. accesscontextmanager. v1. Access Context Manager. Get Service Perimeter google. identity. accesscontextmanager. v1. Access Context Manager. List Access Levels google. identity. accesscontextmanager. v1. Access Context Manager. List Access Policies google. identity. accesscontextmanager. v1. Access Context Manager. List Authorized Orgs Descs google. identity. accesscontextmanager. v1. Access Context Manager. List Gcp User Access Bindings google. identity. accesscontextmanager. v1. Access Context Manager. List Service Perimeters google. identity. accesscontextmanager. v1alpha. Access Context Manager. Get Access Level google. identity. accesscontextmanager. v1alpha. Access Context Manager. Get Gcp User Access Binding google. identity. accesscontextmanager. v1alpha. Access Context Manager. Get Iam Policy google. identity. accesscontextmanager. v1alpha. Access Context Manager. Get Service Perimeter google. identity. accesscontextmanager. v1alpha. Access Context Manager. List Access Policies google. identity. accesscontextmanager. v1alpha. Access Context Manager. List Gcp User Access Bindings google. longrunning. Operations. Get Operation
ADMIN_ WRITE
google. identity. accesscontextmanager. v1. Access Context Manager. Commit Service Perimeters (LRO) google. identity. accesscontextmanager. v1. Access Context Manager. Create Access Level (LRO) google. identity. accesscontextmanager. v1. Access Context Manager. Create Access Policy (LRO) google. identity. accesscontextmanager. v1. Access Context Manager. Create Authorized Orgs Desc (LRO) google. identity. accesscontextmanager. v1. Access Context Manager. Create Gcp User Access Binding google. identity. accesscontextmanager. v1. Access Context Manager. Create Service Perimeter (LRO) google. identity. accesscontextmanager. v1. Access Context Manager. Delete Access Level (LRO) google. identity. accesscontextmanager. v1. Access Context Manager. Delete Access Policy (LRO) google. identity. accesscontextmanager. v1. Access Context Manager. Delete Authorized Orgs Desc (LRO) google. identity. accesscontextmanager. v1. Access Context Manager. Delete Gcp User Access Binding google. identity. accesscontextmanager. v1. Access Context Manager. Delete Service Perimeter (LRO) google. identity. accesscontextmanager. v1. Access Context Manager. Replace Access Levels (LRO) google. identity. accesscontextmanager. v1. Access Context Manager. Replace Service Perimeters (LRO) google. identity. accesscontextmanager. v1. Access Context Manager. Set Iam Policy google. identity. accesscontextmanager. v1. Access Context Manager. Update Access Level (LRO) google. identity. accesscontextmanager. v1. Access Context Manager. Update Access Policy (LRO) google. identity. accesscontextmanager. v1. Access Context Manager. Update Authorized Orgs Desc (LRO) google. identity. accesscontextmanager. v1. Access Context Manager. Update Gcp User Access Binding google. identity. accesscontextmanager. v1. Access Context Manager. Update Service Perimeter (LRO) google. identity. accesscontextmanager. v1alpha. Access Context Manager. Commit Service Perimeters (LRO) google. identity. accesscontextmanager. v1alpha. Access Context Manager. Create Access Level (LRO) google. identity. accesscontextmanager. v1alpha. Access Context Manager. Create Access Policy (LRO) google. identity. accesscontextmanager. v1alpha. Access Context Manager. Create Authorized Orgs Desc (LRO) google. identity. accesscontextmanager. v1alpha. Access Context Manager. Create Gcp User Access Binding google. identity. accesscontextmanager. v1alpha. Access Context Manager. Create Service Perimeter (LRO) google. identity. accesscontextmanager. v1alpha. Access Context Manager. Delete Access Level (LRO) google. identity. accesscontextmanager. v1alpha. Access Context Manager. Delete Access Policy (LRO) google.identity.accesscontextmanager.v1alpha.AccessContextManager.DeleteAuthorizedOrgsDesc (LRO) google.identity.accesscontextmanager.v1alpha.AccessContextManager.DeleteGcpUserAccessBinding google.identity.accesscontextmanager.v1alpha.AccessContextManager.DeleteServicePerimeter (LRO) google.identity.accesscontextmanager.v1alpha.AccessContextManager.ReplaceAccessLevels (LRO) google.identity.accesscontextmanager.v1alpha.AccessContextManager.ReplaceServicePerimeters (LRO) google.identity.accesscontextmanager.v1alpha.AccessContextManager.SetIamPolicy google.identity.accesscontextmanager.v1alpha.AccessContextManager.UpdateAccessLevel (LRO) google.identity.accesscontextmanager.v1alpha.AccessContextManager.UpdateAccessPolicy (LRO) google.identity.accesscontextmanager.v1alpha.AccessContextManager.UpdateAuthorizedOrgsDesc (LRO) google.identity.accesscontextmanager.v1alpha.AccessContextManager.UpdateGcpUserAccessBinding google.identity.accesscontextmanager.v1alpha.AccessContextManager.UpdateServicePerimeter (LRO)
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Access Context Manager.
google.identity.accesscontextmanager.v1.AccessContextManager
The following audit logs are associated with methods belonging to
google.identity.accesscontextmanager.v1.AccessContextManager .
CommitServicePerimeters
Method : google.identity.accesscontextmanager.v1.AccessContextManager.CommitServicePerimeters
Audit log type : Admin activity
Permissions : accesscontextmanager.servicePerimeters.commit - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.CommitServicePerimeters"
CreateAccessLevel
Method : google.identity.accesscontextmanager.v1.AccessContextManager.CreateAccessLevel
Audit log type : Admin activity
Permissions : accesscontextmanager.accessLevels.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.CreateAccessLevel"
CreateAccessPolicy
Method : google.identity.accesscontextmanager.v1.AccessContextManager.CreateAccessPolicy
Audit log type : Admin activity
Permissions : accesscontextmanager.policies.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.CreateAccessPolicy"
CreateAuthorizedOrgsDesc
Method : google.identity.accesscontextmanager.v1.AccessContextManager.CreateAuthorizedOrgsDesc
Audit log type : Admin activity
Permissions : accesscontextmanager.authorizedOrgsDescs.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.CreateAuthorizedOrgsDesc"
CreateGcpUserAccessBinding
Method : google.identity.accesscontextmanager.v1.AccessContextManager.CreateGcpUserAccessBinding
Audit log type : Admin activity
Permissions : accesscontextmanager.gcpUserAccessBindings.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.CreateGcpUserAccessBinding"
CreateServicePerimeter
Method : google.identity.accesscontextmanager.v1.AccessContextManager.CreateServicePerimeter
Audit log type : Admin activity
Permissions : accesscontextmanager.servicePerimeters.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.CreateServicePerimeter"
DeleteAccessLevel
Method : google.identity.accesscontextmanager.v1.AccessContextManager.DeleteAccessLevel
Audit log type : Admin activity
Permissions : accesscontextmanager.accessLevels.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.DeleteAccessLevel"
DeleteAccessPolicy
Method : google.identity.accesscontextmanager.v1.AccessContextManager.DeleteAccessPolicy
Audit log type : Admin activity
Permissions : accesscontextmanager.policies.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.DeleteAccessPolicy"
DeleteAuthorizedOrgsDesc
Method : google.identity.accesscontextmanager.v1.AccessContextManager.DeleteAuthorizedOrgsDesc
Audit log type : Admin activity
Permissions : accesscontextmanager.authorizedOrgsDescs.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.DeleteAuthorizedOrgsDesc"
DeleteGcpUserAccessBinding
Method : google.identity.accesscontextmanager.v1.AccessContextManager.DeleteGcpUserAccessBinding
Audit log type : Admin activity
Permissions : accesscontextmanager.gcpUserAccessBindings.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.DeleteGcpUserAccessBinding"
DeleteServicePerimeter
Method : google.identity.accesscontextmanager.v1.AccessContextManager.DeleteServicePerimeter
Audit log type : Admin activity
Permissions : accesscontextmanager.servicePerimeters.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.DeleteServicePerimeter"
GetAccessLevel
Method : google.identity.accesscontextmanager.v1.AccessContextManager.GetAccessLevel
Audit log type : Data access
Permissions : accesscontextmanager.accessLevels.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.GetAccessLevel"
GetAccessPolicy
Method : google.identity.accesscontextmanager.v1.AccessContextManager.GetAccessPolicy
Audit log type : Data access
Permissions : accesscontextmanager.policies.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.GetAccessPolicy"
GetAuthorizedOrgsDesc
Method : google.identity.accesscontextmanager.v1.AccessContextManager.GetAuthorizedOrgsDesc
Audit log type : Data access
Permissions : accesscontextmanager.authorizedOrgsDescs.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.GetAuthorizedOrgsDesc"
GetGcpUserAccessBinding
Method : google.identity.accesscontextmanager.v1.AccessContextManager.GetGcpUserAccessBinding
Audit log type : Data access
Permissions : accesscontextmanager.gcpUserAccessBindings.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.GetGcpUserAccessBinding"
GetIamPolicy
Method : google.identity.accesscontextmanager.v1.AccessContextManager.GetIamPolicy
Audit log type : Data access
Permissions : accesscontextmanager.policies.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.GetIamPolicy"
GetServicePerimeter
Method : google.identity.accesscontextmanager.v1.AccessContextManager.GetServicePerimeter
Audit log type : Data access
Permissions : accesscontextmanager.servicePerimeters.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.GetServicePerimeter"
ListAccessLevels
Method : google.identity.accesscontextmanager.v1.AccessContextManager.ListAccessLevels
Audit log type : Data access
Permissions : accesscontextmanager.accessLevels.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.ListAccessLevels"
ListAccessPolicies
Method : google.identity.accesscontextmanager.v1.AccessContextManager.ListAccessPolicies
Audit log type : Data access
Permissions : accesscontextmanager.policies.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.ListAccessPolicies"
ListAuthorizedOrgsDescs
Method : google.identity.accesscontextmanager.v1.AccessContextManager.ListAuthorizedOrgsDescs
Audit log type : Data access
Permissions : accesscontextmanager.authorizedOrgsDescs.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.ListAuthorizedOrgsDescs"
ListGcpUserAccessBindings
Method : google.identity.accesscontextmanager.v1.AccessContextManager.ListGcpUserAccessBindings
Audit log type : Data access
Permissions : accesscontextmanager.gcpUserAccessBindings.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.ListGcpUserAccessBindings"
ListServicePerimeters
Method : google.identity.accesscontextmanager.v1.AccessContextManager.ListServicePerimeters
Audit log type : Data access
Permissions : accesscontextmanager.servicePerimeters.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.ListServicePerimeters"
ReplaceAccessLevels
Method : google.identity.accesscontextmanager.v1.AccessContextManager.ReplaceAccessLevels
Audit log type : Admin activity
Permissions : accesscontextmanager.accessLevels.replaceAll - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.ReplaceAccessLevels"
ReplaceServicePerimeters
Method : google.identity.accesscontextmanager.v1.AccessContextManager.ReplaceServicePerimeters
Audit log type : Admin activity
Permissions : accesscontextmanager.servicePerimeters.replaceAll - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.ReplaceServicePerimeters"
SetIamPolicy
Method : google.identity.accesscontextmanager.v1.AccessContextManager.SetIamPolicy
Audit log type : Admin activity
Permissions : accesscontextmanager.policies.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.SetIamPolicy"
UpdateAccessLevel
Method : google.identity.accesscontextmanager.v1.AccessContextManager.UpdateAccessLevel
Audit log type : Admin activity
Permissions : accesscontextmanager.accessLevels.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.UpdateAccessLevel"
UpdateAccessPolicy
Method : google.identity.accesscontextmanager.v1.AccessContextManager.UpdateAccessPolicy
Audit log type : Admin activity
Permissions : accesscontextmanager.policies.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.UpdateAccessPolicy"
UpdateAuthorizedOrgsDesc
Method : google.identity.accesscontextmanager.v1.AccessContextManager.UpdateAuthorizedOrgsDesc
Audit log type : Admin activity
Permissions : accesscontextmanager.authorizedOrgsDescs.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.UpdateAuthorizedOrgsDesc"
UpdateGcpUserAccessBinding
Method : google.identity.accesscontextmanager.v1.AccessContextManager.UpdateGcpUserAccessBinding
Audit log type : Admin activity
Permissions : accesscontextmanager.gcpUserAccessBindings.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.UpdateGcpUserAccessBinding"
UpdateServicePerimeter
Method : google.identity.accesscontextmanager.v1.AccessContextManager.UpdateServicePerimeter
Audit log type : Admin activity
Permissions : accesscontextmanager.servicePerimeters.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1.AccessContextManager.UpdateServicePerimeter"
google.identity.accesscontextmanager.v1alpha.AccessContextManager
The following audit logs are associated with methods belonging to
google.identity.accesscontextmanager.v1alpha.AccessContextManager .
CommitServicePerimeters
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.CommitServicePerimeters
Audit log type : Admin activity
Permissions : accesscontextmanager.servicePerimeters.commit - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.CommitServicePerimeters"
CreateAccessLevel
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.CreateAccessLevel
Audit log type : Admin activity
Permissions : accesscontextmanager.accessLevels.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.CreateAccessLevel"
CreateAccessPolicy
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.CreateAccessPolicy
Audit log type : Admin activity
Permissions : accesscontextmanager.policies.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.CreateAccessPolicy"
CreateAuthorizedOrgsDesc
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.CreateAuthorizedOrgsDesc
Audit log type : Admin activity
Permissions : accesscontextmanager.authorizedOrgsDescs.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.CreateAuthorizedOrgsDesc"
CreateGcpUserAccessBinding
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.CreateGcpUserAccessBinding
Audit log type : Admin activity
Permissions : accesscontextmanager.gcpUserAccessBindings.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.CreateGcpUserAccessBinding"
CreateServicePerimeter
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.CreateServicePerimeter
Audit log type : Admin activity
Permissions : accesscontextmanager.servicePerimeters.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.CreateServicePerimeter"
DeleteAccessLevel
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.DeleteAccessLevel
Audit log type : Admin activity
Permissions : accesscontextmanager.accessLevels.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.DeleteAccessLevel"
DeleteAccessPolicy
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.DeleteAccessPolicy
Audit log type : Admin activity
Permissions : accesscontextmanager.policies.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.DeleteAccessPolicy"
DeleteAuthorizedOrgsDesc
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.DeleteAuthorizedOrgsDesc
Audit log type : Admin activity
Permissions : accesscontextmanager.authorizedOrgsDescs.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.DeleteAuthorizedOrgsDesc"
DeleteGcpUserAccessBinding
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.DeleteGcpUserAccessBinding
Audit log type : Admin activity
Permissions : accesscontextmanager.gcpUserAccessBindings.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.DeleteGcpUserAccessBinding"
DeleteServicePerimeter
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.DeleteServicePerimeter
Audit log type : Admin activity
Permissions : accesscontextmanager.servicePerimeters.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.DeleteServicePerimeter"
GetAccessLevel
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.GetAccessLevel
Audit log type : Data access
Permissions : accesscontextmanager.accessLevels.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.GetAccessLevel"
GetGcpUserAccessBinding
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.GetGcpUserAccessBinding
Audit log type : Data access
Permissions : accesscontextmanager.gcpUserAccessBindings.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.GetGcpUserAccessBinding"
GetIamPolicy
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.GetIamPolicy
Audit log type : Data access
Permissions : accesscontextmanager.policies.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.GetIamPolicy"
GetServicePerimeter
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.GetServicePerimeter
Audit log type : Data access
Permissions : accesscontextmanager.servicePerimeters.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.GetServicePerimeter"
ListAccessPolicies
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.ListAccessPolicies
Audit log type : Data access
Permissions : accesscontextmanager.policies.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.ListAccessPolicies"
ListGcpUserAccessBindings
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.ListGcpUserAccessBindings
Audit log type : Data access
Permissions : accesscontextmanager.gcpUserAccessBindings.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.ListGcpUserAccessBindings"
ReplaceAccessLevels
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.ReplaceAccessLevels
Audit log type : Admin activity
Permissions : accesscontextmanager.accessLevels.replaceAll - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.ReplaceAccessLevels"
ReplaceServicePerimeters
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.ReplaceServicePerimeters
Audit log type : Admin activity
Permissions : accesscontextmanager.servicePerimeters.replaceAll - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.ReplaceServicePerimeters"
SetIamPolicy
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.SetIamPolicy
Audit log type : Admin activity
Permissions : accesscontextmanager.policies.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.SetIamPolicy"
UpdateAccessLevel
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.UpdateAccessLevel
Audit log type : Admin activity
Permissions : accesscontextmanager.accessLevels.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.UpdateAccessLevel"
UpdateAccessPolicy
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.UpdateAccessPolicy
Audit log type : Admin activity
Permissions : accesscontextmanager.policies.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.UpdateAccessPolicy"
UpdateAuthorizedOrgsDesc
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.UpdateAuthorizedOrgsDesc
Audit log type : Admin activity
Permissions : accesscontextmanager.authorizedOrgsDescs.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.UpdateAuthorizedOrgsDesc"
UpdateGcpUserAccessBinding
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.UpdateGcpUserAccessBinding
Audit log type : Admin activity
Permissions : accesscontextmanager.gcpUserAccessBindings.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.UpdateGcpUserAccessBinding"
UpdateServicePerimeter
Method : google.identity.accesscontextmanager.v1alpha.AccessContextManager.UpdateServicePerimeter
Audit log type : Admin activity
Permissions : accesscontextmanager.servicePerimeters.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.identity.accesscontextmanager.v1alpha.AccessContextManager.UpdateServicePerimeter"
google.longrunning.Operations
The following audit logs are associated with methods belonging to
google.longrunning.Operations .
GetOperation
Method : google.longrunning.Operations.GetOperation
Audit log type : Data access
Permissions : accesscontextmanager.accessLevels.get - ADMIN_READ
accesscontextmanager.authorizedOrgsDescs.get - ADMIN_READ
accesscontextmanager.policies.get - ADMIN_READ
accesscontextmanager.servicePerimeters.get - ADMIN_READ
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
google.identity.accesscontextmanager.v1.AccessContextManager.GetSupportedService
google.identity.accesscontextmanager.v1.AccessContextManager.ListSupportedServices
google.identity.accesscontextmanager.v1.AccessContextManager.TestIamPermissions
google.identity.accesscontextmanager.v1alpha.AccessContextManager.GetSupportedService
google.identity.accesscontextmanager.v1alpha.AccessContextManager.ListSupportedServices
google.identity.accesscontextmanager.v1alpha.AccessContextManager.TestIamPermissions
google.longrunning.Operations.CancelOperation
google.longrunning.Operations.DeleteOperation
google.longrunning.Operations.ListOperations
google.longrunning.Operations.WaitOperation
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
