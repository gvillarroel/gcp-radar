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
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Advisory Notifications
Reference
Send feedback
REST Resource: projects.locations.notifications
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Notification
JSON representation
Methods
Resource: Notification
A notification object for notifying customers about security and privacy issues.
JSON representation
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
createTime
string ( Timestamp format)
Output only. Time the notification was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
notificationType
enum ( NotificationType )
Type of notification
Methods
get
Gets a notification.
list
Lists notifications under a given parent.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-23 UTC."],[],[]]
