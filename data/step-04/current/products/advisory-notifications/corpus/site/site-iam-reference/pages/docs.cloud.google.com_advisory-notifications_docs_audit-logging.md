---
title: "Advisory Notifications audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/advisory-notifications/docs/audit-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/advisory-notifications/docs/recommendations-overview
source_metadata:
  url: https://docs.cloud.google.com/advisory-notifications/docs/audit-logging
  title: "Advisory Notifications audit logging \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Advisory Notifications audit logging | Google Cloud Documentation
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
Advisory Notifications
Start free
Overview
Guides
Reference
Support
Resources
More
Technology areas
More
Overview
Guides
Reference
Support
Resources
Cross-product tools
More
Console
Discover
Product overview
Security and Privacy Advisory notifications overview
Sensitive Actions notifications overview
Security MSA notifications overview
Threat Horizons preview notifications overview
Get started
View notifications
Recommendations
Opt in to or out of notifications
Respond
Respond to Sensitive Actions notifications
Monitor
Audit logging
Work with Sensitive Actions logs
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
API interface audit logs google.cloud.advisorynotifications.v1.AdvisoryNotificationsService
google.cloud.advisorynotifications.v1alpha.AdvisoryNotificationsService
google.cloud.advisorynotifications.v1beta.AdvisoryNotificationsService
Home
Documentation
Security
Advisory Notifications
Guides
Was this helpful?
Send feedback
Advisory Notifications audit logging
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Service name
Methods by permission type
API interface audit logs google.cloud.advisorynotifications.v1.AdvisoryNotificationsService
google.cloud.advisorynotifications.v1alpha.AdvisoryNotificationsService
google.cloud.advisorynotifications.v1beta.AdvisoryNotificationsService
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
See more code actions.
Light code theme
Dark code theme
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
ADMIN_ READ
google. cloud. advisorynotifications. v1. Advisory Notifications Service. Get Notification google. cloud. advisorynotifications. v1. Advisory Notifications Service. Get Settings google. cloud. advisorynotifications. v1. Advisory Notifications Service. List Notifications google. cloud. advisorynotifications. v1alpha. Advisory Notifications Service. Get Settings google. cloud. advisorynotifications. v1beta. Advisory Notifications Service. Get Notification google. cloud. advisorynotifications. v1beta. Advisory Notifications Service. List Notifications
ADMIN_ WRITE
google. cloud. advisorynotifications. v1alpha. Advisory Notifications Service. Update Settings
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Advisory Notifications.
google. cloud. advisorynotifications. v1. Advisory Notifications Service
The following audit logs are associated with methods belonging to
google.cloud.advisorynotifications.v1.AdvisoryNotificationsService .
Get Notification
Method : google.cloud.advisorynotifications.v1.AdvisoryNotificationsService.GetNotification
Audit log type : Data access
Permissions : advisorynotifications.notifications.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.advisorynotifications.v1.AdvisoryNotificationsService.GetNotification"
Get Settings
Method : google.cloud.advisorynotifications.v1.AdvisoryNotificationsService.GetSettings
Audit log type : Data access
Permissions : advisorynotifications.settings.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.advisorynotifications.v1.AdvisoryNotificationsService.GetSettings"
List Notifications
Method : google.cloud.advisorynotifications.v1.AdvisoryNotificationsService.ListNotifications
Audit log type : Data access
Permissions : advisorynotifications.notifications.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.advisorynotifications.v1.AdvisoryNotificationsService.ListNotifications"
google. cloud. advisorynotifications. v1alpha. Advisory Notifications Service
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
