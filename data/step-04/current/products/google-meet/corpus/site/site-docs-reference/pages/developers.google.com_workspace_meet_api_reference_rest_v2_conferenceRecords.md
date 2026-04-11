---
title: "REST Resource: conferenceRecords \_|\_ Google Meet \_|\_ Google for Developers"
url: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/meet/api/reference/rest/v2
source_metadata:
  url: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords
  title: "REST Resource: conferenceRecords \_|\_ Google Meet \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Meet
Reference
Send feedback
REST Resource: conferenceRecords
Stay organized with collections
Save and categorize content based on your preferences.
Resource: ConferenceRecord
JSON representation
Methods
Resource: ConferenceRecord
Single instance of a meeting held in a space.
JSON representation
{
"name" : string ,
"startTime" : string ,
"endTime" : string ,
"expireTime" : string ,
"space" : string
}
Fields
name
string
Identifier. Resource name of the conference record. Format: conferenceRecords/{conferenceRecord} where {conferenceRecord} is a unique ID for each instance of a call within a space.
startTime
string ( Timestamp format)
Output only. Timestamp when the conference started. Always set.
endTime
string ( Timestamp format)
Output only. Timestamp when the conference ended. Set for past conferences. Unset if the conference is ongoing.
expireTime
string ( Timestamp format)
Output only. Server enforced expiration time for when this conference record resource is deleted. The resource is deleted 30 days after the conference ends.
space
string
Output only. The space where the conference was held.
Methods
get
Gets a conference record by conference ID.
list
Lists the conference records.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-02 UTC."],[],[]]
