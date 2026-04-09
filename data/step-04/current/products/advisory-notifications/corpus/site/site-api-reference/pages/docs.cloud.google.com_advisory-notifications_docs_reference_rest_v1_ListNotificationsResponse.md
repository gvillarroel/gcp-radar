---
title: "ListNotificationsResponse \_|\_ Advisory Notifications \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/ListNotificationsResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/advisory-notifications/docs/reference/rest/v1/ListNotificationsResponse
  title: "ListNotificationsResponse \_|\_ Advisory Notifications \_|\_ Google Cloud\
    \ Documentation"
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
ListNotificationsResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Response of ListNotifications endpoint.
JSON representation
{
"notifications" : [
{
object ( Notification )
}
] ,
"nextPageToken" : string ,
"totalSize" : integer
}
Fields
notifications[]
object ( Notification )
List of notifications under a given parent.
nextPageToken
string
A token, which can be sent as pageToken to retrieve the next page. If this field is omitted, there are no subsequent pages.
totalSize
integer
Estimation of a total number of notifications.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-23 UTC."],[],[]]
