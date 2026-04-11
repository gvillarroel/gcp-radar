---
title: "Identity-Aware Proxy audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iap/docs/audit-log-howto
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs/managing-access
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/audit-log-howto
  title: "Identity-Aware Proxy audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Identity-Aware Proxy
Guides
Send feedback
Identity-Aware Proxy audit logging
Stay organized with collections
Save and categorize content based on your preferences.
Important: On February 14, 2024, the Cloud Audit Logging (CAL) type was inadvertently
changed from DATA_ACCESS to ADMIN_ACTIVITY . This change causes a change in the log name and log bucket location for the UpdateIapSettings and ValidateIapAttributeExpression methods.
The CAL type has been changed back to DATA_ACCESS .
This document describes audit logging for Identity-Aware Proxy. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Notes
The fields section describes important details about some fields in the audit log.
Service name
Identity-Aware Proxy audit logs use the service name iap.googleapis.com .
Filter for this service:
protoPayload . serviceName = "iap.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Identity-Aware Proxy generates an audit log whose category is dependent on the
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
google.cloud.iap.v1.IdentityAwareProxyAdminService.GetIamPolicy google.cloud.iap.v1.IdentityAwareProxyAdminService.GetIapSettings google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.GetIamPolicy
ADMIN_WRITE
google.cloud.iap.v1.IdentityAwareProxyAdminService.SetIamPolicy google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.SetIamPolicy
DATA_READ
google.cloud.iap.v1.IdentityAwareProxyAdminService.GetTunnelDestGroup google.cloud.iap.v1.IdentityAwareProxyAdminService.ListTunnelDestGroups
DATA_WRITE
google.cloud.iap.v1.IdentityAwareProxyAdminService.CreateTunnelDestGroup google.cloud.iap.v1.IdentityAwareProxyAdminService.DeleteTunnelDestGroup google.cloud.iap.v1.IdentityAwareProxyAdminService.UpdateIapSettings google.cloud.iap.v1.IdentityAwareProxyAdminService.UpdateTunnelDestGroup google.cloud.iap.v1.IdentityAwareProxyAdminService.ValidateIapAttributeExpression
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Identity-Aware Proxy.
google.cloud.iap.v1.IdentityAwareProxyAdminService
The following audit logs are associated with methods belonging to
google.cloud.iap.v1.IdentityAwareProxyAdminService .
CreateTunnelDestGroup
Method : google.cloud.iap.v1.IdentityAwareProxyAdminService.CreateTunnelDestGroup
Audit log type : Data access
Permissions : iap.tunnelDestGroups.create - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iap.v1.IdentityAwareProxyAdminService.CreateTunnelDestGroup"
DeleteTunnelDestGroup
Method : google.cloud.iap.v1.IdentityAwareProxyAdminService.DeleteTunnelDestGroup
Audit log type : Data access
Permissions : iap.tunnelDestGroups.delete - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iap.v1.IdentityAwareProxyAdminService.DeleteTunnelDestGroup"
GetIamPolicy
Method : google.cloud.iap.v1.IdentityAwareProxyAdminService.GetIamPolicy
Audit log type : Data access
Permissions : iap.web.getIamPolicy - ADMIN_READ
iap.webServiceVersions.getIamPolicy - ADMIN_READ
iap.webServices.getIamPolicy - ADMIN_READ
iap.webTypes.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iap.v1.IdentityAwareProxyAdminService.GetIamPolicy"
GetIapSettings
Method : google.cloud.iap.v1.IdentityAwareProxyAdminService.GetIapSettings
Audit log type : Data access
Permissions : iap.projects.getSettings - ADMIN_READ
iap.web.getSettings - ADMIN_READ
iap.webServiceVersions.getSettings - ADMIN_READ
iap.webServices.getSettings - ADMIN_READ
iap.webTypes.getSettings - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iap.v1.IdentityAwareProxyAdminService.GetIapSettings"
GetTunnelDestGroup
Method : google.cloud.iap.v1.IdentityAwareProxyAdminService.GetTunnelDestGroup
Audit log type : Data access
Permissions : iap.tunnelDestGroups.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iap.v1.IdentityAwareProxyAdminService.GetTunnelDestGroup"
ListTunnelDestGroups
Method : google.cloud.iap.v1.IdentityAwareProxyAdminService.ListTunnelDestGroups
Audit log type : Data access
Permissions : iap.tunnelDestGroups.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iap.v1.IdentityAwareProxyAdminService.ListTunnelDestGroups"
SetIamPolicy
Method : google.cloud.iap.v1.IdentityAwareProxyAdminService.SetIamPolicy
Audit log type : Admin activity
Permissions : iap.web.setIamPolicy - ADMIN_WRITE
iap.webServiceVersions.setIamPolicy - ADMIN_WRITE
iap.webServices.setIamPolicy - ADMIN_WRITE
iap.webTypes.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iap.v1.IdentityAwareProxyAdminService.SetIamPolicy"
UpdateIapSettings
Method : google.cloud.iap.v1.IdentityAwareProxyAdminService.UpdateIapSettings
Audit log type : Data access
Permissions : iap.projects.updateSettings - DATA_WRITE
iap.web.updateSettings - DATA_WRITE
iap.webServiceVersions.updateSettings - DATA_WRITE
iap.webServices.updateSettings - DATA_WRITE
iap.webTypes.updateSettings - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iap.v1.IdentityAwareProxyAdminService.UpdateIapSettings"
UpdateTunnelDestGroup
Method : google.cloud.iap.v1.IdentityAwareProxyAdminService.UpdateTunnelDestGroup
Audit log type : Data access
Permissions : iap.tunnelDestGroups.update - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iap.v1.IdentityAwareProxyAdminService.UpdateTunnelDestGroup"
ValidateIapAttributeExpression
Method : google.cloud.iap.v1.IdentityAwareProxyAdminService.ValidateIapAttributeExpression
Audit log type : Data access
Permissions : iap.projects.updateSettings - DATA_WRITE
iap.web.updateSettings - DATA_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iap.v1.IdentityAwareProxyAdminService.ValidateIapAttributeExpression"
google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1
The following audit logs are associated with methods belonging to
google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1 .
GetIamPolicy
Method : google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.GetIamPolicy
Audit log type : Data access
Permissions : iap.web.getIamPolicy - ADMIN_READ
iap.webServiceVersions.getIamPolicy - ADMIN_READ
iap.webServices.getIamPolicy - ADMIN_READ
iap.webTypes.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.GetIamPolicy"
SetIamPolicy
Method : google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.SetIamPolicy
Audit log type : Admin activity
Permissions : iap.webServiceVersions.setIamPolicy - ADMIN_WRITE
iap.webServices.setIamPolicy - ADMIN_WRITE
iap.webTypes.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.SetIamPolicy"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.cloud.iap.v1.IdentityAwareProxyOAuthService.CreateBrand
google.cloud.iap.v1.IdentityAwareProxyOAuthService.CreateIdentityAwareProxyClient
google.cloud.iap.v1.IdentityAwareProxyOAuthService.DeleteIdentityAwareProxyClient
google.cloud.iap.v1.IdentityAwareProxyOAuthService.GetBrand
google.cloud.iap.v1.IdentityAwareProxyOAuthService.GetIdentityAwareProxyClient
google.cloud.iap.v1.IdentityAwareProxyOAuthService.ListBrands
google.cloud.iap.v1.IdentityAwareProxyOAuthService.ListIdentityAwareProxyClients
google.cloud.iap.v1.IdentityAwareProxyOAuthService.ResetIdentityAwareProxyClientSecret
google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1.TestIamPermissions
Fields
The logs only contain information about the access levels
that a user has met. Access levels that blocked an unauthorized request are not
listed in the log entry. To determine what conditions are required to make a
successful request for a given resource, check the access levels for the
resource.
The following are important details about some fields in the log:
Field
Value
authenticationInfo
The email of the user who tried to access the resource as principalEmail . This information is not present in logs for unauthenticated requests.
requestMetadata.callerIp
The IP address the request originated from.
requestMetadata.requestAttributes
The request method and URL.
authorizationInfo.resource
The resource being accessed.
authorizationInfo.granted
A boolean representing whether IAP permitted the requested access.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
