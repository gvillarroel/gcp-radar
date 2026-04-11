---
title: "REST Resource: conferenceRecords.recordings \_|\_ Google Meet \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.recordings
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/meet/api/reference/rest/v2
source_metadata:
  url: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.recordings
  title: "REST Resource: conferenceRecords.recordings \_|\_ Google Meet \_|\_ Google\
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
REST Resource: conferenceRecords.recordings
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Recording
JSON representation
DriveDestination
JSON representation
State
Methods
Resource: Recording
Metadata about a recording created during a conference.
JSON representation
{
"name" : string ,
"state" : enum ( State ) ,
"startTime" : string ,
"endTime" : string ,
"driveDestination" : {
object ( DriveDestination )
}
}
Fields
name
string
Output only. Resource name of the recording. Format: conferenceRecords/{conferenceRecord}/recordings/{recording} where {recording} is a 1:1 mapping to each unique recording session during the conference.
state
enum ( State )
Output only. Current state.
startTime
string ( Timestamp format)
Output only. Timestamp when the recording started.
endTime
string ( Timestamp format)
Output only. Timestamp when the recording ended.
Union field destination .
destination can be only one of the following:
driveDestination
object ( DriveDestination )
Output only. Recording is saved to Google Drive as an MP4 file. The driveDestination includes the Drive fileId that can be used to download the file using the files.get method of the Drive API.
DriveDestination
Export location where a recording file is saved in Google Drive.
JSON representation
{
"file" : string ,
"exportUri" : string
}
Fields
file
string
Output only. The fileId for the underlying MP4 file. For example, "1kuceFZohVoCh6FulBHxwy6I15Ogpc4hP". Use $ GET
https://www.googleapis.com/drive/v3/files/{$fileId}?alt=media to download the blob. For more information, see https://developers.google.com/drive/api/v3/reference/files/get .
exportUri
string
Output only. Link used to play back the recording file in the browser. For example, https://drive.google.com/file/d/{$fileId}/view .
State
Current state of the recording session.
Enums
STATE_UNSPECIFIED
Default, never used.
STARTED
An active recording session has started.
ENDED
This recording session has ended, but the recording file hasn't been generated yet.
FILE_GENERATED
Recording file is generated and ready to download.
Methods
get
Gets a recording by recording ID.
list
Lists the recording resources from the conference record.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
