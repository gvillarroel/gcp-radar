---
title: "Method: conferenceRecords.participants.list \_|\_ Google Meet \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/meet/api/reference/rest/v2
source_metadata:
  url: https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.participants/list
  title: "Method: conferenceRecords.participants.list \_|\_ Google Meet \_|\_ Google\
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
Method: conferenceRecords.participants.list
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
Lists the participants in a conference record. By default, ordered by join time and in descending order. This API supports fields as standard parameters like every other API. However, when the fields request parameter is omitted, this API defaults to 'participants/*,
nextPageToken' .
HTTP request
GET https://meet.googleapis.com/v2/{parent=conferenceRecords/*}/participants
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
Maximum number of participants to return. The service might return fewer than this value. If unspecified, at most 100 participants are returned. The maximum value is 250; values above 250 are coerced to 250. Maximum might change in the future.
pageToken
string
Page token returned from previous List Call.
filter
string
Optional. User specified filtering condition in EBNF format . The following are the filterable fields:
earliest_start_time
latest_end_time
For example, latest_end_time IS NULL returns active participants in the conference.
Request body
The request body must be empty.
Response body
Response of participants.list method.
If successful, the response body contains data with the following structure:
JSON representation
{
"participants" : [
{
object ( Participant )
}
] ,
"nextPageToken" : string ,
"totalSize" : integer
}
Fields
participants[]
object ( Participant )
List of participants in one page.
nextPageToken
string
Token to be circulated back for further List call if current List doesn't include all the participants. Unset if all participants are returned.
totalSize
integer
Total, exact number of participants . By default, this field isn't included in the response. Set the field mask in SystemParameterContext to receive this field in the response.
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
