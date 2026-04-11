---
title: "REST Resource: conferenceRecords.transcripts.entries \_|\_ Google Meet \_\
  |\_ Google for Developers"
url: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.transcripts.entries
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/meet/api/reference/rest/v2
source_metadata:
  url: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.transcripts.entries
  title: "REST Resource: conferenceRecords.transcripts.entries \_|\_ Google Meet \_\
    |\_ Google for Developers"
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
REST Resource: conferenceRecords.transcripts.entries
Stay organized with collections
Save and categorize content based on your preferences.
Resource: TranscriptEntry
JSON representation
Methods
Resource: TranscriptEntry
Single entry for one user’s speech during a transcript session.
JSON representation
{
"name" : string ,
"participant" : string ,
"text" : string ,
"languageCode" : string ,
"startTime" : string ,
"endTime" : string
}
Fields
name
string
Output only. Resource name of the entry. Format: "conferenceRecords/{conferenceRecord}/transcripts/{transcript}/entries/{entry}"
participant
string
Output only. Refers to the participant who speaks.
text
string
Output only. The transcribed text of the participant's voice, at maximum 10K words. Note that the limit is subject to change.
languageCode
string
Output only. Language of spoken text, such as "en-US". IETF BCP 47 syntax ( https://tools.ietf.org/html/bcp47 )
startTime
string ( Timestamp format)
Output only. Timestamp when the transcript entry started.
endTime
string ( Timestamp format)
Output only. Timestamp when the transcript entry ended.
Methods
get
Gets a TranscriptEntry resource by entry ID.
list
Lists the structured transcript entries per transcript.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-02 UTC."],[],[]]
