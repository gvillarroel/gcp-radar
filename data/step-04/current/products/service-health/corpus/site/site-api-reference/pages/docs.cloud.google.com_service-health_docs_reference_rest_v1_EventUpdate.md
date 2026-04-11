---
title: "EventUpdate \_|\_ Personalized Service Health \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-health/docs/reference/rest/v1/EventUpdate
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-health/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/service-health/docs/reference/rest/v1/EventUpdate
  title: "EventUpdate \_|\_ Personalized Service Health \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Personalized Service Health
Reference
Send feedback
EventUpdate
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Records an update made to the event.
JSON representation
{
"updateTime" : string ,
"title" : string ,
"description" : string ,
"symptom" : string ,
"workaround" : string
}
Fields
update Time
string ( Timestamp format)
Output only. The time the update was posted.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
title
string
Output only. Brief title for the event.
description
string
Output only. Free-form, human-readable description.
symptom
string
Output only. Symptoms of the event, if available.
workaround
string
Output only. Workaround steps to remediate the event impact, if available.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
