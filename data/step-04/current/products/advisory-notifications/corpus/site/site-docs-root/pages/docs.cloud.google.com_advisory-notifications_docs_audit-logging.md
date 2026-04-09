---
title: "Advisory Notifications audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/advisory-notifications/docs/audit-logging
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/advisory-notifications/docs
source_metadata:
  url: https://docs.cloud.google.com/advisory-notifications/docs/audit-logging
  title: "Advisory Notifications audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Advisory Notifications
Guides
Send feedback
Advisory Notifications audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Advisory Notifications. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Advisory Notifications audit logs use the service name advisorynotifications.googleapis.com .
Filter for this service:
protoPayload . serviceName = "advisorynotifications.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Advisory Notifications generates an audit log whose category is dependent on the
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
google.cloud.advisorynotifications.v1.AdvisoryNotificationsService.GetNotification google.cloud.advisorynotifications.v1.AdvisoryNotificationsService.GetSettings google.cloud.advisorynotifications.v1.AdvisoryNotificationsService.ListNotifications google.cloud.advisorynotifications.v1alpha.AdvisoryNotificationsService.GetSettings google.cloud.advisorynotifications.v1beta.AdvisoryNotificationsService.GetNotification google.cloud.advisorynotifications.v1beta.AdvisoryNotificationsService.ListNotifications
ADMIN_WRITE
google.cloud.advisorynotifications.v1alpha.AdvisoryNotificationsService.UpdateSettings
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Advisory Notifications.
google.cloud.advisorynotifications.v1.AdvisoryNotificationsService
The following audit logs are associated with methods belonging to
google.cloud.advisorynotifications.v1.AdvisoryNotificationsService .
GetNotification
Method : google.cloud.advisorynotifications.v1.AdvisoryNotificationsService.GetNotification
Audit log type : Data access
Permissions : advisorynotifications.notifications.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.advisorynotifications.v1.AdvisoryNotificationsService.GetNotification"
GetSettings
Method : google.cloud.advisorynotifications.v1.AdvisoryNotificationsService.GetSettings
Audit log type : Data access
Permissions : advisorynotifications.settings.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.advisorynotifications.v1.AdvisoryNotificationsService.GetSettings"
ListNotifications
Method : google.cloud.advisorynotifications.v1.AdvisoryNotificationsService.ListNotifications
Audit log type : Data access
Permissions : advisorynotifications.notifications.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.advisorynotifications.v1.AdvisoryNotificationsService.ListNotifications"
google.cloud.advisorynotifications.v1alpha.AdvisoryNotificationsService
The following audit logs are associated with methods belonging to
google.cloud.advisorynotifications.v1alpha.AdvisoryNotificationsService .
GetSettings
Method : google.cloud.advisorynotifications.v1alpha.AdvisoryNotificationsService.GetSettings
Audit log type : Data access
Permissions : advisorynotifications.settings.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.advisorynotifications.v1alpha.AdvisoryNotificationsService.GetSettings"
UpdateSettings
Method : google.cloud.advisorynotifications.v1alpha.AdvisoryNotificationsService.UpdateSettings
Audit log type : Admin activity
Permissions : advisorynotifications.settings.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.advisorynotifications.v1alpha.AdvisoryNotificationsService.UpdateSettings"
google.cloud.advisorynotifications.v1beta.AdvisoryNotificationsService
The following audit logs are associated with methods belonging to
google.cloud.advisorynotifications.v1beta.AdvisoryNotificationsService .
GetNotification
Method : google.cloud.advisorynotifications.v1beta.AdvisoryNotificationsService.GetNotification
Audit log type : Data access
Permissions : advisorynotifications.notifications.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.advisorynotifications.v1beta.AdvisoryNotificationsService.GetNotification"
ListNotifications
Method : google.cloud.advisorynotifications.v1beta.AdvisoryNotificationsService.ListNotifications
Audit log type : Data access
Permissions : advisorynotifications.notifications.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.advisorynotifications.v1beta.AdvisoryNotificationsService.ListNotifications"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
