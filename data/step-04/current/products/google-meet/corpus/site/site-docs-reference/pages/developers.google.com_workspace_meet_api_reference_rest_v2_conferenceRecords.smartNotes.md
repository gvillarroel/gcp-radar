---
title: "REST Resource: conferenceRecords.smartNotes \_|\_ Google Meet \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.smartNotes
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/meet/api/reference/rest/v2
source_metadata:
  url: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.smartNotes
  title: "REST Resource: conferenceRecords.smartNotes \_|\_ Google Meet \_|\_ Google\
    \ for Developers"
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
REST Resource: conferenceRecords.smartNotes
Stay organized with collections
Save and categorize content based on your preferences.
Resource: SmartNote
JSON representation
State
Methods
Resource: SmartNote
Metadata for a smart note generated from a conference. It refers to the notes generated from Take Notes with Gemini during the conference.
JSON representation
{
"name" : string ,
"state" : enum ( State ) ,
"startTime" : string ,
"endTime" : string ,
"docsDestination" : {
object ( DocsDestination )
}
}
Fields
name
string
Output only. Identifier. Resource name of the smart notes. Format: conferenceRecords/{conferenceRecord}/smartNotes/{smartNote} , where {smartNote} is a 1:1 mapping to each unique smart notes session of the conference.
state
enum ( State )
Output only. Current state.
startTime
string ( Timestamp format)
Output only. Timestamp when the smart notes started.
endTime
string ( Timestamp format)
Output only. Timestamp when the smart notes stopped.
Union field destination . Destination of the smart notes. destination can be only one of the following:
docsDestination
object ( DocsDestination )
Output only. The Google Doc destination where the smart notes are saved.
State
Current state of the smart notes session.
Enums
STATE_UNSPECIFIED
Default, never used.
STARTED
An active smart notes session has started.
ENDED
This smart notes session has ended, but the smart notes file hasn't been generated yet.
FILE_GENERATED
Smart notes file is generated and ready to download.
Methods
get
Gets smart notes by smart note ID.
list
Lists the set of smart notes from the conference record.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
