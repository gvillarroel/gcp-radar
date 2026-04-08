---
title: "Advisory Notifications API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest
  title: "Advisory Notifications API \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Advisory Notifications API | Google Cloud Documentation
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
Español – América Latina
Français
Português – Brasil
中文 – 简体
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
Advisory Notifications
All APIs and references
Client libraries
Advisory Notifications API
REST Reference
Overview
v1
REST Resources
organizations.locations
Overview
getSettings
updateSettings
organizations.locations.notifications
Overview
get
list
projects.locations
Overview
getSettings
updateSettings
projects.locations.notifications
Overview
get
list
Types
ListNotificationsResponse
NotificationView
Settings
RPC Reference
Overview
v1
Overview
google.cloud.advisorynotifications.v1
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
Service: advisorynotifications.googleapis.com Discovery document
Service endpoint
REST Resource: v1.organizations.locations
REST Resource: v1.organizations.locations.notifications
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.notifications
Home
Documentation
Security
Advisory Notifications
Reference
Was this helpful?
Send feedback
Advisory Notifications API
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Service: advisorynotifications.googleapis.com Discovery document
Service endpoint
REST Resource: v1.organizations.locations
REST Resource: v1.organizations.locations.notifications
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.notifications
An API for accessing Advisory Notifications in Google Cloud
REST Resource: v1.organizations.locations
REST Resource: v1.organizations.locations.notifications
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.notifications
Service: advisorynotifications. googleapis. com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://advisorynotifications.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://advisorynotifications.googleapis.com
REST Resource: v1. organizations. locations
Methods
get Settings
GET / v1/ {name=organizations/ */ locations/ */ settings}
Get notification settings.
update Settings
PATCH / v1/ {settings. name=organizations/ */ locations/ */ settings}
Update notification settings.
REST Resource: v1. organizations. locations. notifications
Methods
get
GET / v1/ {name=organizations/ */ locations/ */ notifications/ *}
Gets a notification.
list
GET / v1/ {parent=organizations/ */ locations/ *}/ notifications
Lists notifications under a given parent.
REST Resource: v1. projects. locations
Methods
get Settings
GET / v1/ {name=projects/ */ locations/ */ settings}
Get notification settings.
update Settings
PATCH / v1/ {settings. name=projects/ */ locations/ */ settings}
Update notification settings.
REST Resource: v1. projects. locations. notifications
Methods
get
GET / v1/ {name=projects/ */ locations/ */ notifications/ *}
Gets a notification.
list
GET / v1/ {parent=projects/ */ locations/ *}/ notifications
Lists notifications under a given parent.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-23 UTC."],[],[]]
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
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
