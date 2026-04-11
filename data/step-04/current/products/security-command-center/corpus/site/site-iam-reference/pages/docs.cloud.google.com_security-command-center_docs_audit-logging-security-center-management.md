---
title: "Security Center Management API audit logging \_|\_ Security Command Center\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/security-command-center/docs/audit-logging-security-center-management
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/security-command-center/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/security-command-center/docs/audit-logging-security-center-management
  title: "Security Center Management API audit logging \_|\_ Security Command Center\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Security Command Center
Guides
Send feedback
Security Center Management API audit logging
Stay organized with collections
Save and categorize content based on your preferences.
Standard-legacy, Standard, Premium, and Enterprise service tiers
This document describes audit logging for Security Center Management API. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Security Center Management API audit logs use the service name securitycentermanagement.googleapis.com .
Filter for this service:
protoPayload . serviceName = "securitycentermanagement.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Security Center Management API generates an audit log whose category is dependent on the
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
google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetEffectiveEventThreatDetectionCustomModule google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetEffectiveSecurityHealthAnalyticsCustomModule google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetEventThreatDetectionCustomModule google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetSecurityCenterService google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetSecurityHealthAnalyticsCustomModule google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListDescendantEventThreatDetectionCustomModules google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListDescendantSecurityHealthAnalyticsCustomModules google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListEffectiveEventThreatDetectionCustomModules google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListEffectiveSecurityHealthAnalyticsCustomModules google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListEventThreatDetectionCustomModules google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListSecurityCenterServices google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListSecurityHealthAnalyticsCustomModules google.cloud.securitycentermanagement.v1.SecurityCenterManagement.SimulateSecurityHealthAnalyticsCustomModule google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ValidateEventThreatDetectionCustomModule
ADMIN_WRITE
google.cloud.securitycentermanagement.v1.SecurityCenterManagement.CreateEventThreatDetectionCustomModule google.cloud.securitycentermanagement.v1.SecurityCenterManagement.CreateSecurityHealthAnalyticsCustomModule google.cloud.securitycentermanagement.v1.SecurityCenterManagement.DeleteEventThreatDetectionCustomModule google.cloud.securitycentermanagement.v1.SecurityCenterManagement.DeleteSecurityHealthAnalyticsCustomModule google.cloud.securitycentermanagement.v1.SecurityCenterManagement.UpdateEventThreatDetectionCustomModule google.cloud.securitycentermanagement.v1.SecurityCenterManagement.UpdateSecurityCenterService google.cloud.securitycentermanagement.v1.SecurityCenterManagement.UpdateSecurityHealthAnalyticsCustomModule
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Security Center Management API.
google.cloud.securitycentermanagement.v1.SecurityCenterManagement
The following audit logs are associated with methods belonging to
google.cloud.securitycentermanagement.v1.SecurityCenterManagement .
CreateEventThreatDetectionCustomModule
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.CreateEventThreatDetectionCustomModule
Audit log type : Admin activity
Permissions : securitycentermanagement.eventThreatDetectionCustomModules.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.CreateEventThreatDetectionCustomModule"
CreateSecurityHealthAnalyticsCustomModule
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.CreateSecurityHealthAnalyticsCustomModule
Audit log type : Admin activity
Permissions : securitycentermanagement.securityHealthAnalyticsCustomModules.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.CreateSecurityHealthAnalyticsCustomModule"
DeleteEventThreatDetectionCustomModule
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.DeleteEventThreatDetectionCustomModule
Audit log type : Admin activity
Permissions : securitycentermanagement.eventThreatDetectionCustomModules.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.DeleteEventThreatDetectionCustomModule"
DeleteSecurityHealthAnalyticsCustomModule
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.DeleteSecurityHealthAnalyticsCustomModule
Audit log type : Admin activity
Permissions : securitycentermanagement.securityHealthAnalyticsCustomModules.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.DeleteSecurityHealthAnalyticsCustomModule"
GetEffectiveEventThreatDetectionCustomModule
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetEffectiveEventThreatDetectionCustomModule
Audit log type : Data access
Permissions : securitycentermanagement.effectiveEventThreatDetectionCustomModules.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetEffectiveEventThreatDetectionCustomModule"
GetEffectiveSecurityHealthAnalyticsCustomModule
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetEffectiveSecurityHealthAnalyticsCustomModule
Audit log type : Data access
Permissions : securitycentermanagement.effectiveSecurityHealthAnalyticsCustomModules.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetEffectiveSecurityHealthAnalyticsCustomModule"
GetEventThreatDetectionCustomModule
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetEventThreatDetectionCustomModule
Audit log type : Data access
Permissions : securitycentermanagement.eventThreatDetectionCustomModules.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetEventThreatDetectionCustomModule"
GetSecurityCenterService
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetSecurityCenterService
Audit log type : Data access
Permissions : securitycentermanagement.securityCenterServices.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetSecurityCenterService"
GetSecurityHealthAnalyticsCustomModule
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetSecurityHealthAnalyticsCustomModule
Audit log type : Data access
Permissions : securitycentermanagement.securityHealthAnalyticsCustomModules.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetSecurityHealthAnalyticsCustomModule"
ListDescendantEventThreatDetectionCustomModules
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListDescendantEventThreatDetectionCustomModules
Audit log type : Data access
Permissions : securitycentermanagement.eventThreatDetectionCustomModules.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListDescendantEventThreatDetectionCustomModules"
ListDescendantSecurityHealthAnalyticsCustomModules
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListDescendantSecurityHealthAnalyticsCustomModules
Audit log type : Data access
Permissions : securitycentermanagement.securityHealthAnalyticsCustomModules.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListDescendantSecurityHealthAnalyticsCustomModules"
ListEffectiveEventThreatDetectionCustomModules
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListEffectiveEventThreatDetectionCustomModules
Audit log type : Data access
Permissions : securitycentermanagement.effectiveEventThreatDetectionCustomModules.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListEffectiveEventThreatDetectionCustomModules"
ListEffectiveSecurityHealthAnalyticsCustomModules
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListEffectiveSecurityHealthAnalyticsCustomModules
Audit log type : Data access
Permissions : securitycentermanagement.effectiveSecurityHealthAnalyticsCustomModules.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListEffectiveSecurityHealthAnalyticsCustomModules"
ListEventThreatDetectionCustomModules
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListEventThreatDetectionCustomModules
Audit log type : Data access
Permissions : securitycentermanagement.eventThreatDetectionCustomModules.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListEventThreatDetectionCustomModules"
ListSecurityCenterServices
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListSecurityCenterServices
Audit log type : Data access
Permissions : securitycentermanagement.securityCenterServices.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListSecurityCenterServices"
ListSecurityHealthAnalyticsCustomModules
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListSecurityHealthAnalyticsCustomModules
Audit log type : Data access
Permissions : securitycentermanagement.securityHealthAnalyticsCustomModules.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListSecurityHealthAnalyticsCustomModules"
SimulateSecurityHealthAnalyticsCustomModule
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.SimulateSecurityHealthAnalyticsCustomModule
Audit log type : Data access
Permissions : securitycentermanagement.securityHealthAnalyticsCustomModules.simulate - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.SimulateSecurityHealthAnalyticsCustomModule"
UpdateEventThreatDetectionCustomModule
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.UpdateEventThreatDetectionCustomModule
Audit log type : Admin activity
Permissions : securitycentermanagement.eventThreatDetectionCustomModules.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.UpdateEventThreatDetectionCustomModule"
UpdateSecurityCenterService
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.UpdateSecurityCenterService
Audit log type : Admin activity
Permissions : securitycentermanagement.securityCenterServices.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.UpdateSecurityCenterService"
UpdateSecurityHealthAnalyticsCustomModule
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.UpdateSecurityHealthAnalyticsCustomModule
Audit log type : Admin activity
Permissions : securitycentermanagement.securityHealthAnalyticsCustomModules.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.UpdateSecurityHealthAnalyticsCustomModule"
ValidateEventThreatDetectionCustomModule
Method : google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ValidateEventThreatDetectionCustomModule
Audit log type : Data access
Permissions : securitycentermanagement.eventThreatDetectionCustomModules.validate - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ValidateEventThreatDetectionCustomModule"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
