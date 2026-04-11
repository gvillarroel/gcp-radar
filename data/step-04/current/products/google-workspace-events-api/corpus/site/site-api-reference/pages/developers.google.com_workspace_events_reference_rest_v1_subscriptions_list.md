---
title: "Method: subscriptions.list \_|\_ Google Workspace \_|\_ Google for Developers"
url: https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/events/reference/rest/v1
source_metadata:
  url: https://developers.google.com/workspace/events/reference/rest/v1/subscriptions/list
  title: "Method: subscriptions.list \_|\_ Google Workspace \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Method: subscriptions.list
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Lists existing Google Workspace subscriptions, allowing retrieval of details like event types and target resources.
Enables filtering of subscriptions by event types and target resource using query parameters, requiring at least one event type for filtering.
Uses pagination to retrieve large lists of subscriptions, providing a nextPageToken for accessing subsequent pages.
Requires specific OAuth scopes for authorization, such as https://www.googleapis.com/auth/chat.bot or https://www.googleapis.com/auth/chat.spaces , to access and manage subscriptions.
Returns a response body containing a list of subscriptions and a token for pagination if further pages exist.
HTTP request
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Lists Google Workspace subscriptions. To learn how to use this method, see List Google Workspace subscriptions .
HTTP request
GET https://workspaceevents.googleapis.com/v1/subscriptions
The URL uses gRPC Transcoding syntax.
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of subscriptions to return. The service might return fewer than this value.
If unspecified or set to 0 , up to 50 subscriptions are returned.
The maximum value is 100. If you specify a value more than 100, the system only returns 100 subscriptions.
pageToken
string
Optional. A page token, received from a previous list subscriptions call. Provide this parameter to retrieve the subsequent page.
When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results.
filter
string
Required. A query filter.
You can filter subscriptions by event type ( event_types ) and target resource ( target_resource ).
You must specify at least one event type in your query. To filter for multiple event types, use the OR operator.
To filter by both event type and target resource, use the AND operator and specify the full resource name, such as //chat.googleapis.com/spaces/{space} .
For example, the following queries are valid:
event_types:"google.workspace.chat.membership.v1.updated" OR
event_types:"google.workspace.chat.message.v1.created"
event_types:"google.workspace.chat.message.v1.created" AND
target_resource="//chat.googleapis.com/spaces/{space}"
( event_types:"google.workspace.chat.membership.v1.updated" OR
event_types:"google.workspace.chat.message.v1.created" ) AND
target_resource="//chat.googleapis.com/spaces/{space}"
The server rejects invalid queries with an INVALID_ARGUMENT error.
Request body
The request body must be empty.
Response body
The response message for SubscriptionsService.ListSubscriptions .
If successful, the response body contains data with the following structure:
JSON representation
{
"subscriptions" : [
{
object ( Subscription )
}
] ,
"nextPageToken" : string
}
Fields
subscriptions[]
object ( Subscription )
List of subscriptions.
nextPageToken
string
A token, which can be sent as pageToken to retrieve the next page. If this field is omitted, there are no subsequent pages.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.bot
https://www.googleapis.com/auth/chat.spaces
https://www.googleapis.com/auth/chat.spaces.readonly
https://www.googleapis.com/auth/chat.messages
https://www.googleapis.com/auth/chat.messages.readonly
https://www.googleapis.com/auth/chat.messages.reactions
https://www.googleapis.com/auth/chat.messages.reactions.readonly
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.memberships.readonly
https://www.googleapis.com/auth/meetings.space.created
https://www.googleapis.com/auth/meetings.space.readonly
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-10 UTC."],[],["This document outlines how to list Google Workspace subscriptions using a `GET` request to `https://workspaceevents.googleapis.com/v1/subscriptions`. Key parameters include `pageSize` (max 100) to limit results, `pageToken` for pagination, and a mandatory `filter` to specify event types and/or target resources using `OR` and `AND` operators. The request body is empty. The response body contains a list of `subscriptions` and an optional `nextPageToken` for subsequent pages. Specific OAuth scopes are required for authorization.\n"]]
