---
title: "Method: changes.watch \_|\_ Google Drive \_|\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/reference/rest/v2/changes/watch
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/reference/rest/v3
source_metadata:
  url: https://developers.google.com/workspace/drive/api/reference/rest/v2/changes/watch
  title: "Method: changes.watch \_|\_ Google Drive \_|\_ Google for Developers"
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
Method: changes.watch
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Query parameters
Request body
Response body
Authorization scopes
Subscribe to changes for a user.
HTTP request
POST https://www.googleapis.com/drive/v2/changes/watch
The URL uses gRPC Transcoding syntax.
Query parameters
Parameters
driveId
string
The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
includeCorpusRemovals
boolean
Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
includeDeleted
boolean
Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
includeItemsFromAllDrives
boolean
Whether both My Drive and shared drive items should be included in results.
includeSubscribed
boolean
Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result.
includeTeamDriveItems (deprecated)
boolean
Deprecated: Use includeItemsFromAllDrives instead.
maxResults
integer
Maximum number of changes to return.
pageToken
string
The token for continuing a previous list request on the next page. This should be set to the value of nextPageToken from the previous response or to the response from the getStartPageToken method.
spaces
string
A comma-separated list of spaces to query. Supported values are drive , appDataFolder and photos .
startChangeId (deprecated)
string ( int64 format)
Deprecated: Use pageToken instead.
supportsAllDrives
boolean
Whether the requesting application supports both My Drives and shared drives.
supportsTeamDrives (deprecated)
boolean
Deprecated: Use supportsAllDrives instead.
teamDriveId (deprecated)
string
Deprecated: Use driveId instead.
includePermissionsForView
string
Specifies which additional view's permissions to include in the response. Only published is supported.
includeLabels
string
A comma-separated list of IDs of labels to include in the labelInfo part of the response.
Request body
The request body contains an instance of Channel .
Response body
If successful, the response body contains an instance of Channel .
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
