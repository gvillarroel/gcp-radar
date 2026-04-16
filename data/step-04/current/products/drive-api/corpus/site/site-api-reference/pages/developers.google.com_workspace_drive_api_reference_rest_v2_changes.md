---
title: "REST Resource: changes \_|\_ Google Drive \_|\_ Google for Developers"
url: https://developers.google.com/workspace/drive/api/reference/rest/v2/changes
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/drive/api/reference/rest/v3
source_metadata:
  url: https://developers.google.com/workspace/drive/api/reference/rest/v2/changes
  title: "REST Resource: changes \_|\_ Google Drive \_|\_ Google for Developers"
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
REST Resource: changes
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Change
JSON representation
Methods
Resource: Change
Representation of a change to a file or shared drive.
JSON representation
{
"id" : string ,
"deleted" : boolean ,
"file" : {
object ( File )
} ,
"fileId" : string ,
"modificationDate" : string ,
"kind" : string ,
"type" : string ,
"teamDriveId" : string ,
"teamDrive" : {
object ( TeamDrive )
} ,
"changeType" : string ,
"selfLink" : string ,
"driveId" : string ,
"drive" : {
object ( Drive )
}
}
Fields
id
string ( int64 format)
The ID of the change.
deleted
boolean
Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access.
file
object ( File )
The updated state of the file. Present if the type is file and the file has not been removed from this list of changes.
fileId
string
The ID of the file associated with this change.
modificationDate
string
The time of this modification.
kind
string
This is always drive#change .
type (deprecated)
string
This item is deprecated!
Deprecated: Use changeType instead.
teamDriveId (deprecated)
string
This item is deprecated!
Deprecated: Use driveId instead.
teamDrive (deprecated)
object ( TeamDrive )
This item is deprecated!
Deprecated: Use drive instead.
changeType
string
The type of the change. Possible values are file and drive .
selfLink
string
A link back to this change.
driveId
string
The ID of the shared drive associated with this change.
drive
object ( Drive )
The updated state of the shared drive. Present if the changeType is drive, the user is still a member of the shared drive, and the shared drive has not been deleted.
Methods
get
Deprecated: Use changes.getStartPageToken and changes.list to retrieve recent changes.
getStartPageToken
Gets the starting pageToken for listing future changes.
list
Lists the changes for a user or shared drive.
watch
Subscribe to changes for a user.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-03 UTC."],[],[]]
