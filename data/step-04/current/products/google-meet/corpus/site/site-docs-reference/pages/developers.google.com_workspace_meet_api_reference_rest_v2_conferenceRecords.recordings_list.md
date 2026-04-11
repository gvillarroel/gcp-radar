---
title: "Method: conferenceRecords.recordings.list \_|\_ Google Meet \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.recordings/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/meet/api/reference/rest/v2
source_metadata:
  url: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.recordings/list
  title: "Method: conferenceRecords.recordings.list \_|\_ Google Meet \_|\_ Google\
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
Method: conferenceRecords.recordings.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Lists the recording resources from the conference record. By default, ordered by start time and in ascending order.
HTTP request
GET https://meet.googleapis.com/v2/{parent=conferenceRecords/*}/recordings
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Format: conferenceRecords/{conferenceRecord}
Query parameters
Parameters
pageSize
integer
Maximum number of recordings to return. The service might return fewer than this value. If unspecified, at most 10 recordings are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future.
pageToken
string
Page token returned from previous List Call.
Request body
The request body must be empty.
Response body
Response for recordings.list method.
If successful, the response body contains data with the following structure:
JSON representation
{
"recordings" : [
{
object ( Recording )
}
] ,
"nextPageToken" : string
}
Fields
recordings[]
object ( Recording )
List of recordings in one page.
nextPageToken
string
Token to be circulated back for further List call if current List doesn't include all the recordings. Unset if all recordings are returned.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/meetings.space.created
https://www.googleapis.com/auth/meetings.space.readonly
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-02 UTC."],[],[]]
