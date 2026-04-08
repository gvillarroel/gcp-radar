---
title: "Method: projects.locations.notifications.list \_|\_ Advisory Notifications\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications/list
  title: "Method: projects.locations.notifications.list \_|\_ Advisory Notifications\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Method: projects.locations.notifications.list | Advisory Notifications | Google Cloud Documentation
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
organizations. locations
Overview
getSettings
updateSettings
organizations. locations. notifications
Overview
get
list
projects. locations
Overview
getSettings
updateSettings
projects. locations. notifications
Overview
get
list
Types
List Notifications Response
Notification View
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
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
Home
Documentation
Security
Advisory Notifications
Reference
Was this helpful?
Send feedback
Method: projects. locations. notifications. list
Stay organized with collections
Save and categorize content based on your preferences.
On this page
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
Lists notifications under a given parent.
HTTP request
GET https://advisorynotifications.googleapis.com/v1/{parent=projects/*/locations/*}/notifications
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent, which owns this collection of notifications. Must be of the form "organizations/{organization}/locations/{location}" or "projects/{project}/locations/{location}".
Query parameters
Parameters
page Size
integer
The maximum number of notifications to return. The service may return fewer than this value. If unspecified or equal to 0, at most 50 notifications will be returned. The maximum value is 50; values above 50 will be coerced to 50.
page Token
string
A page token returned from a previous request. When paginating, all other parameters provided in the request must match the call that returned the page token.
view
enum ( NotificationView )
Specifies which parts of the notification resource should be returned in the response.
language Code
string
ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of ListNotificationsResponse .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
advisorynotifications.notifications.list
For more information, see the IAM documentation .
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
