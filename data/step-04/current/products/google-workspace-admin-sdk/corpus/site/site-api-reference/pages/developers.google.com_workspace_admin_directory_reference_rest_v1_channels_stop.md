---
title: "Method: channels.stop \_|\_ Admin console \_|\_ Google for Developers"
url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/channels/stop
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/admin/directory/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/channels/stop
  title: "Method: channels.stop \_|\_ Admin console \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Admin console
Reference
Send feedback
Method: channels.stop
Stay organized with collections
Save and categorize content based on your preferences.
Stops watching resources through this channel.
HTTP request
POST https://www.googleapis.com/admin/directory/v1/channels/stop
Request body
JSON representation
{
"id" : string ,
"resourceId" : string
}
Fields
id
string
A UUID or similar unique string that identifies this channel.
resourceId
string
An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
Response body
If successful, this method returns an empty response body.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-25 UTC."],[],[]]
