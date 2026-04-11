---
title: "Method: users.history.list \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list
  title: "Method: users.history.list \_|\_ Gmail \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Reference
Send feedback
Method: users.history.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
HistoryType
History
JSON representation
MessageAdded
JSON representation
MessageDeleted
JSON representation
LabelAdded
JSON representation
LabelRemoved
JSON representation
Try it!
Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing historyId ).
HTTP request
GET https://gmail.googleapis.com/gmail/v1/users/{userId}/history
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
userId
string
The user's email address. The special value me can be used to indicate the authenticated user.
Query parameters
Parameters
maxResults
integer ( uint32 format)
Maximum number of history records to return. This field defaults to 100. The maximum allowed value for this field is 500.
pageToken
string
Page token to retrieve a specific page of results in the list.
startHistoryId
string
Required. Returns history records after the specified startHistoryId . The supplied startHistoryId should be obtained from the historyId of a message, thread, or previous list response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date startHistoryId typically returns an HTTP 404 error code. A historyId is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an HTTP 404 error response, your application should perform a full sync. If you receive no nextPageToken in the response, there are no updates to retrieve and you can store the returned historyId for a future request.
labelId
string
Only return messages with a label matching the ID.
historyTypes[]
enum ( HistoryType )
History types to be returned by the function
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
JSON representation
{
"history" : [
{
object ( History )
}
] ,
"nextPageToken" : string ,
"historyId" : string
}
Fields
history[]
object ( History )
List of history records. Any messages contained in the response will typically only have id and threadId fields populated.
nextPageToken
string
Page token to retrieve the next page of results in the list.
historyId
string
The ID of the mailbox's current history record.
Authorization scopes
Requires one of the following OAuth scopes:
https://mail.google.com/
https://www.googleapis.com/auth/gmail.modify
https://www.googleapis.com/auth/gmail.readonly
https://www.googleapis.com/auth/gmail.metadata
For more information, see the OAuth 2.0 Overview .
HistoryType
Enums
messageAdded
messageDeleted
labelAdded
labelRemoved
History
A record of a change to the user's mailbox. Each history change may affect multiple messages in multiple ways.
JSON representation
{
"id" : string ,
"messages" : [
{
object ( Message )
}
] ,
"messagesAdded" : [
{
object ( MessageAdded )
}
] ,
"messagesDeleted" : [
{
object ( MessageDeleted )
}
] ,
"labelsAdded" : [
{
object ( LabelAdded )
}
] ,
"labelsRemoved" : [
{
object ( LabelRemoved )
}
]
}
Fields
id
string
The mailbox sequence ID.
messages[]
object ( Message )
List of messages changed in this history record. The fields for specific change types, such as messagesAdded may duplicate messages in this field. We recommend using the specific change-type fields instead of this.
messagesAdded[]
object ( MessageAdded )
Messages added to the mailbox in this history record.
messagesDeleted[]
object ( MessageDeleted )
Messages deleted (not Trashed) from the mailbox in this history record.
labelsAdded[]
object ( LabelAdded )
Labels added to messages in this history record.
labelsRemoved[]
object ( LabelRemoved )
Labels removed from messages in this history record.
MessageAdded
JSON representation
{
"message" : {
object ( Message )
}
}
Fields
message
object ( Message )
MessageDeleted
JSON representation
{
"message" : {
object ( Message )
}
}
Fields
message
object ( Message )
LabelAdded
JSON representation
{
"message" : {
object ( Message )
} ,
"labelIds" : [
string
]
}
Fields
message
object ( Message )
labelIds[]
string
Label IDs added to the message.
LabelRemoved
JSON representation
{
"message" : {
object ( Message )
} ,
"labelIds" : [
string
]
}
Fields
message
object ( Message )
labelIds[]
string
Label IDs removed from the message.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-05 UTC."],[],[]]
