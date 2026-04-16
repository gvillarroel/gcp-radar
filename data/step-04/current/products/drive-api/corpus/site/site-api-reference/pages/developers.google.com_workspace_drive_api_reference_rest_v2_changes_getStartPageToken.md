---
title: "Method: changes.getStartPageToken \_|\_ Google Drive \_|\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/reference/rest/v2/changes/getStartPageToken
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/reference/rest/v3
source_metadata:
  url: https://developers.google.com/workspace/drive/api/reference/rest/v2/changes/getStartPageToken
  title: "Method: changes.getStartPageToken \_|\_ Google Drive \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Drive
Reference
Send feedback
Method: changes.getStartPageToken
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Gets the starting pageToken for listing future changes.
HTTP request
GET https://www.googleapis.com/drive/v2/changes/startPageToken
The URL uses gRPC Transcoding syntax.
Query parameters
Parameters
driveId
string
The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned.
supportsAllDrives
boolean
Whether the requesting application supports both My Drives and shared drives.
supportsTeamDrives (deprecated)
boolean
Deprecated: Use supportsAllDrives instead.
teamDriveId (deprecated)
string
Deprecated: Use driveId instead.
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
JSON representation
{
"startPageToken" : string ,
"kind" : string
}
Fields
startPageToken
string
The starting page token for listing changes.
kind
string
Identifies what kind of resource this is. Value: the fixed string "drive#startPageToken" .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/docs
https://www.googleapis.com/auth/drive
https://www.googleapis.com/auth/drive.appdata
https://www.googleapis.com/auth/drive.apps.readonly
https://www.googleapis.com/auth/drive.file
https://www.googleapis.com/auth/drive.meet.readonly
https://www.googleapis.com/auth/drive.metadata
https://www.googleapis.com/auth/drive.metadata.readonly
https://www.googleapis.com/auth/drive.photos.readonly
https://www.googleapis.com/auth/drive.readonly
Some scopes are restricted and require a security assessment for your app to use them. For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-03 UTC."],[],[]]
