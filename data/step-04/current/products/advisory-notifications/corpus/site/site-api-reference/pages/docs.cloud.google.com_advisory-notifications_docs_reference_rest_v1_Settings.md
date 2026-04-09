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
Settings
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
NotificationSettings
JSON representation
Settings for Advisory Notifications.
JSON representation
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
notificationSettings
map (key: string, value: object ( NotificationSettings ))
Required. Map of each notification type and its settings to get/set all settings at once. The server will validate the value for each notification type.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
etag
string
Required. Fingerprint for optimistic concurrency returned in Get requests. Must be provided for Update requests. If the value provided does not match the value known to the server, ABORTED will be thrown, and the client should retry the read-modify-write cycle.
NotificationSettings
Settings for each NotificationType.
JSON representation
{
"enabled" : boolean
}
Fields
enabled
boolean
Whether the associated NotificationType is enabled.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-23 UTC."],[],[]]
