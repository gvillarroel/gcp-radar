---
title: "REST Resource: conferenceRecords.participants.participantSessions \_|\_ Google\
  \ Meet \_|\_ Google for Developers"
url: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/meet/api/reference/rest/v2
source_metadata:
  url: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions
  title: "REST Resource: conferenceRecords.participants.participantSessions \_|\_\
    \ Google Meet \_|\_ Google for Developers"
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
REST Resource: conferenceRecords.participants.participantSessions
Stay organized with collections
Save and categorize content based on your preferences.
Resource: ParticipantSession
JSON representation
Methods
Resource: ParticipantSession
Refers to each unique join or leave session when a user joins a conference from a device. Note that any time a user joins the conference a new unique ID is assigned. That means if a user joins a space multiple times from the same device, they're assigned different IDs, and are also be treated as different participant sessions.
JSON representation
{
"name" : string ,
"startTime" : string ,
"endTime" : string
}
Fields
name
string
Identifier. Session id.
startTime
string ( Timestamp format)
Output only. Timestamp when the user session starts.
endTime
string ( Timestamp format)
Output only. Timestamp when the user session ends. Unset if the user session hasn’t ended.
Methods
get
Gets a participant session by participant session ID.
list
Lists the participant sessions of a participant in a conference record.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-02 UTC."],[],[]]
