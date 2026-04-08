---
title: "Settings \_|\_ Advisory Notifications \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/Settings
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/Settings
  title: "Settings \_|\_ Advisory Notifications \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Settings | Advisory Notifications | Google Cloud Documentation
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
NotificationSettings
Home
Documentation
Security
Advisory Notifications
Reference
Was this helpful?
Send feedback
Settings
Stay organized with collections
Save and categorize content based on your preferences.
On this page
NotificationSettings
JSON representation
NotificationSettings
JSON representation
Settings for Advisory Notifications.
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"name" : string ,
"notificationSettings" : {
string : {
object ( NotificationSettings )
} ,
...
} ,
"etag" : string
}
Fields
name
string
Identifier. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings or projects/{projects}/locations/{location}/settings.
notification Settings
map (key: string, value: object ( NotificationSettings ))
Required. Map of each notification type and its settings to get/set all settings at once. The server will validate the value for each notification type.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
etag
string
Required. Fingerprint for optimistic concurrency returned in Get requests. Must be provided for Update requests. If the value provided does not match the value known to the server, ABORTED will be thrown, and the client should retry the read-modify-write cycle.
Notification Settings
Settings for each NotificationType.
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"enabled" : boolean
}
Fields
enabled
boolean
Whether the associated NotificationType is enabled.
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
