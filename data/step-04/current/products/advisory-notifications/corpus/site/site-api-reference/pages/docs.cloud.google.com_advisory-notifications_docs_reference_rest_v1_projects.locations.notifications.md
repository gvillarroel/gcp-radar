---
title: "REST Resource: projects.locations.notifications \_|\_ Advisory Notifications\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/projects.locations.notifications
  title: "REST Resource: projects.locations.notifications \_|\_ Advisory Notifications\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: projects.locations.notifications | Advisory Notifications | Google Cloud Documentation
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
Resource: Notification
Methods get
list
Home
Documentation
Security
Advisory Notifications
Reference
Was this helpful?
Send feedback
REST Resource: projects. locations. notifications
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: Notification
Methods get
list
Resource: Notification
JSON representation
Methods
Resource: Notification
A notification object for notifying customers about security and privacy issues.
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"name" : string ,
"subject" : {
object ( Subject )
} ,
"messages" : [
{
object ( Message )
}
] ,
"createTime" : string ,
"notificationType" : enum ( NotificationType )
}
Fields
name
string
The resource name of the notification. Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{project}/locations/{location}/notifications/{notification}.
subject
object ( Subject )
The subject line of the notification.
messages[]
object ( Message )
A list of messages in the notification.
create Time
string ( Timestamp format)
Output only. Time the notification was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
notification Type
enum ( NotificationType )
Type of notification
Methods
get
Gets a notification.
list
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
