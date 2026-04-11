---
title: "Cloud Domains audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/domains/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/domains/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/domains/docs/audit-logging
  title: "Cloud Domains audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud Domains
Guides
Send feedback
Cloud Domains audit logging
Stay organized with collections
Save and categorize content based on your preferences.
Note: On September 7, 2023 Squarespace acquired all domain registrations and related
customer accounts from Google Domains. For more information about how this change affects
Cloud Domains, see
Cloud Domains feature deprecations ,
Renew an expired domain registration , and Squarespace purchase of Google Domains FAQ .
This document describes audit logging for Cloud Domains. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Cloud Domains audit logs use the service name domains.googleapis.com .
Filter for this service:
protoPayload . serviceName = "domains.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Cloud Domains generates an audit log whose category is dependent on the
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
google.cloud.domains.v1.Domains.GetRegistration google.cloud.domains.v1.Domains.ListRegistrations google.cloud.domains.v1.Domains.RetrieveGoogleDomainsDnsRecords google.cloud.domains.v1.Domains.RetrieveGoogleDomainsForwardingConfig google.cloud.domains.v1.Domains.RetrieveRegisterParameters google.cloud.domains.v1.Domains.SearchDomains google.cloud.domains.v1alpha2.Domains.GetRegistration google.cloud.domains.v1beta1.Domains.GetRegistration google.cloud.domains.v1beta1.Domains.ListRegistrations GetIamPolicy google.longrunning.Operations.GetOperation
ADMIN_WRITE
google.cloud.domains.v1.Domains.ConfigureContactSettings (LRO) google.cloud.domains.v1.Domains.ConfigureDnsSettings (LRO) google.cloud.domains.v1.Domains.ConfigureManagementSettings (LRO) google.cloud.domains.v1.Domains.DeleteRegistration (LRO) google.cloud.domains.v1.Domains.ExportRegistration google.cloud.domains.v1.Domains.ImportDomain google.cloud.domains.v1.Domains.InitiatePushTransfer (LRO) google.cloud.domains.v1.Domains.RegisterDomain (LRO) google.cloud.domains.v1.Domains.RenewDomain (LRO) google.cloud.domains.v1.Domains.ResetAuthorizationCode google.cloud.domains.v1.Domains.RetrieveAuthorizationCode google.cloud.domains.v1.Domains.TransferDomain google.cloud.domains.v1.Domains.UpdateRegistration (LRO) google.cloud.domains.v1alpha2.Domains.ImportDomain google.cloud.domains.v1alpha2.Domains.RegisterDomain (LRO) google.cloud.domains.v1alpha2.Domains.TransferDomain google.cloud.domains.v1beta1.Domains.ConfigureContactSettings (LRO) google.cloud.domains.v1beta1.Domains.ConfigureDnsSettings (LRO) google.cloud.domains.v1beta1.Domains.ConfigureManagementSettings (LRO) google.cloud.domains.v1beta1.Domains.ImportDomain google.cloud.domains.v1beta1.Domains.RegisterDomain (LRO) google.cloud.domains.v1beta1.Domains.TransferDomain SetIamPolicy
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Cloud Domains.
google.cloud.domains.v1.Domains
The following audit logs are associated with methods belonging to
google.cloud.domains.v1.Domains .
ConfigureContactSettings
Method : google.cloud.domains.v1.Domains.ConfigureContactSettings
Audit log type : Admin activity
Permissions : domains.registrations.configureContact - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1.Domains.ConfigureContactSettings"
ConfigureDnsSettings
Method : google.cloud.domains.v1.Domains.ConfigureDnsSettings
Audit log type : Admin activity
Permissions : domains.registrations.configureDns - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1.Domains.ConfigureDnsSettings"
ConfigureManagementSettings
Method : google.cloud.domains.v1.Domains.ConfigureManagementSettings
Audit log type : Admin activity
Permissions : domains.registrations.configureManagement - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1.Domains.ConfigureManagementSettings"
DeleteRegistration
Method : google.cloud.domains.v1.Domains.DeleteRegistration
Audit log type : Admin activity
Permissions : domains.registrations.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1.Domains.DeleteRegistration"
ExportRegistration
Method : google.cloud.domains.v1.Domains.ExportRegistration
Audit log type : Admin activity
Permissions : domains.registrations.configureManagement - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1.Domains.ExportRegistration"
GetRegistration
Method : google.cloud.domains.v1.Domains.GetRegistration
Audit log type : Data access
Permissions : domains.registrations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1.Domains.GetRegistration"
ImportDomain
Method : google.cloud.domains.v1.Domains.ImportDomain
Audit log type : Admin activity
Permissions : domains.registrations.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1.Domains.ImportDomain"
InitiatePushTransfer
Method : google.cloud.domains.v1.Domains.InitiatePushTransfer
Audit log type : Admin activity
Permissions : domains.registrations.configureManagement - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1.Domains.InitiatePushTransfer"
ListRegistrations
Method : google.cloud.domains.v1.Domains.ListRegistrations
Audit log type : Data access
Permissions : domains.registrations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1.Domains.ListRegistrations"
RegisterDomain
Method : google.cloud.domains.v1.Domains.RegisterDomain
Audit log type : Admin activity
Permissions : domains.registrations.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1.Domains.RegisterDomain"
RenewDomain
Method : google.cloud.domains.v1.Domains.RenewDomain
Audit log type : Admin activity
Permissions : domains.registrations.configureManagement - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1.Domains.RenewDomain"
ResetAuthorizationCode
Method : google.cloud.domains.v1.Domains.ResetAuthorizationCode
Audit log type : Admin activity
Permissions : domains.registrations.configureManagement - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1.Domains.ResetAuthorizationCode"
RetrieveAuthorizationCode
Method : google.cloud.domains.v1.Domains.RetrieveAuthorizationCode
Audit log type : Admin activity
Permissions : domains.registrations.configureManagement - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1.Domains.RetrieveAuthorizationCode"
RetrieveGoogleDomainsDnsRecords
Method : google.cloud.domains.v1.Domains.RetrieveGoogleDomainsDnsRecords
Audit log type : Data access
Permissions : domains.registrations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1.Domains.RetrieveGoogleDomainsDnsRecords"
RetrieveGoogleDomainsForwardingConfig
Method : google.cloud.domains.v1.Domains.RetrieveGoogleDomainsForwardingConfig
Audit log type : Data access
Permissions : domains.registrations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1.Domains.RetrieveGoogleDomainsForwardingConfig"
RetrieveRegisterParameters
Method : google.cloud.domains.v1.Domains.RetrieveRegisterParameters
Audit log type : Data access
Permissions : domains.registrations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1.Domains.RetrieveRegisterParameters"
SearchDomains
Method : google.cloud.domains.v1.Domains.SearchDomains
Audit log type : Data access
Permissions : domains.registrations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1.Domains.SearchDomains"
TransferDomain
Method : google.cloud.domains.v1.Domains.TransferDomain
Audit log type : Admin activity
Permissions : domains.registrations.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1.Domains.TransferDomain"
UpdateRegistration
Method : google.cloud.domains.v1.Domains.UpdateRegistration
Audit log type : Admin activity
Permissions : domains.registrations.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1.Domains.UpdateRegistration"
google.cloud.domains.v1alpha2.Domains
The following audit logs are associated with methods belonging to
google.cloud.domains.v1alpha2.Domains .
GetRegistration
Method : google.cloud.domains.v1alpha2.Domains.GetRegistration
Audit log type : Data access
Permissions : domains.registrations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1alpha2.Domains.GetRegistration"
ImportDomain
Method : google.cloud.domains.v1alpha2.Domains.ImportDomain
Audit log type : Admin activity
Permissions : domains.registrations.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1alpha2.Domains.ImportDomain"
RegisterDomain
Method : google.cloud.domains.v1alpha2.Domains.RegisterDomain
Audit log type : Admin activity
Permissions : domains.registrations.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1alpha2.Domains.RegisterDomain"
TransferDomain
Method : google.cloud.domains.v1alpha2.Domains.TransferDomain
Audit log type : Admin activity
Permissions : domains.registrations.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1alpha2.Domains.TransferDomain"
google.cloud.domains.v1beta1.Domains
The following audit logs are associated with methods belonging to
google.cloud.domains.v1beta1.Domains .
ConfigureContactSettings
Method : google.cloud.domains.v1beta1.Domains.ConfigureContactSettings
Audit log type : Admin activity
Permissions : domains.registrations.configureContact - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1beta1.Domains.ConfigureContactSettings"
ConfigureDnsSettings
Method : google.cloud.domains.v1beta1.Domains.ConfigureDnsSettings
Audit log type : Admin activity
Permissions : domains.registrations.configureDns - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1beta1.Domains.ConfigureDnsSettings"
ConfigureManagementSettings
Method : google.cloud.domains.v1beta1.Domains.ConfigureManagementSettings
Audit log type : Admin activity
Permissions : domains.registrations.configureManagement - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1beta1.Domains.ConfigureManagementSettings"
GetRegistration
Method : google.cloud.domains.v1beta1.Domains.GetRegistration
Audit log type : Data access
Permissions : domains.registrations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1beta1.Domains.GetRegistration"
ImportDomain
Method : google.cloud.domains.v1beta1.Domains.ImportDomain
Audit log type : Admin activity
Permissions : domains.registrations.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1beta1.Domains.ImportDomain"
ListRegistrations
Method : google.cloud.domains.v1beta1.Domains.ListRegistrations
Audit log type : Data access
Permissions : domains.registrations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1beta1.Domains.ListRegistrations"
RegisterDomain
Method : google.cloud.domains.v1beta1.Domains.RegisterDomain
Audit log type : Admin activity
Permissions : domains.registrations.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1beta1.Domains.RegisterDomain"
TransferDomain
Method : google.cloud.domains.v1beta1.Domains.TransferDomain
Audit log type : Admin activity
Permissions : domains.registrations.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.domains.v1beta1.Domains.TransferDomain"
google.iam.v1.IAMPolicy
The following audit logs are associated with methods belonging to
google.iam.v1.IAMPolicy .
GetIamPolicy
Method : GetIamPolicy
Audit log type : Data access
Permissions : domains.registrations.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="GetIamPolicy"
SetIamPolicy
Method : SetIamPolicy
Audit log type : Admin activity
Permissions : domains.registrations.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="SetIamPolicy"
google.longrunning.Operations
The following audit logs are associated with methods belonging to
google.longrunning.Operations .
GetOperation
Method : google.longrunning.Operations.GetOperation
Audit log type : Data access
Permissions : domains.operations.get - ADMIN_READ
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
google.cloud.location.Locations.GetLocation
google.cloud.location.Locations.ListLocations
google.longrunning.Operations.WaitOperation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
