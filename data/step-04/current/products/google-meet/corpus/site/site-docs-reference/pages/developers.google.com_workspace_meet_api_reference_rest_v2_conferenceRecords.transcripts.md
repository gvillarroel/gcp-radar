---
title: "REST Resource: conferenceRecords.transcripts \_|\_ Google Meet \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.transcripts
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/meet/api/reference/rest/v2
source_metadata:
  url: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.transcripts
  title: "REST Resource: conferenceRecords.transcripts \_|\_ Google Meet \_|\_ Google\
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
REST Resource: conferenceRecords.transcripts
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Transcript
JSON representation
State
Methods
Resource: Transcript
Metadata for a transcript generated from a conference. It refers to the ASR (Automatic Speech Recognition) result of user's speech during the conference.
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
Output only. Resource name of the transcript. Format: conferenceRecords/{conferenceRecord}/transcripts/{transcript} , where {transcript} is a 1:1 mapping to each unique transcription session of the conference.
state
enum ( State )
Output only. Current state.
startTime
string ( Timestamp format)
Output only. Timestamp when the transcript started.
endTime
string ( Timestamp format)
Output only. Timestamp when the transcript stopped.
Union field destination .
destination can be only one of the following:
docsDestination
object ( DocsDestination )
Output only. Where the Google Docs transcript is saved.
State
Current state of the transcript session.
Enums
STATE_UNSPECIFIED
Default, never used.
STARTED
An active transcript session has started.
ENDED
This transcript session has ended, but the transcript file hasn't been generated yet.
FILE_GENERATED
Transcript file is generated and ready to download.
Methods
get
Gets a transcript by transcript ID.
list
Lists the set of transcripts from the conference record.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
