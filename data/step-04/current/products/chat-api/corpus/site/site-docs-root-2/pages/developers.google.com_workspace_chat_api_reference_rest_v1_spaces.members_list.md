---
title: "Method: spaces.members.list \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list
  title: "Method: spaces.members.list \_|\_ Google Chat \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Reference
Send feedback
Method: spaces.members.list
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Lists memberships in a Google Chat space, including details like member roles and types.
Supports both app and user authentication, with an option for administrator privileges.
Allows filtering memberships by role, type, and other criteria using query parameters.
Provides pagination to retrieve large lists of memberships in manageable chunks.
Requires specific OAuth scopes for authorization, as detailed in the documentation.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Lists memberships in a space. For an example, see List users and Google Chat apps in a space . Listing memberships with app authentication lists memberships in spaces that the Chat app has access to, but excludes Chat app memberships, including its own. Listing memberships with User authentication lists memberships in spaces that the authenticated user has access to.
Supports the following types of authentication :
App authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.bot
https://www.googleapis.com/auth/chat.app.memberships (requires administrator approval )
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.memberships.readonly
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.import (import mode spaces only)
User authentication grants administrator privileges when an administrator account authenticates, useAdminAccess is true , and one of the following authorization scopes is used:
https://www.googleapis.com/auth/chat.admin.memberships.readonly
https://www.googleapis.com/auth/chat.admin.memberships
HTTP request
GET https://chat.googleapis.com/v1/{parent=spaces/*}/members
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The resource name of the space for which to fetch a membership list.
Format: spaces/{space}
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of memberships to return. The service might return fewer than this value.
If unspecified, at most 100 memberships are returned.
The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000.
Negative values return an INVALID_ARGUMENT error.
pageToken
string
Optional. A page token, received from a previous call to list memberships. Provide this parameter to retrieve the subsequent page.
When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.
filter
string
Optional. A query filter.
You can filter memberships by a member's role ( role ) and type ( member.type ).
To filter by role, set role to ROLE_MEMBER or ROLE_MANAGER .
To filter by type, set member.type to HUMAN or BOT . You can also filter for member.type using the != operator.
To filter by both role and type, use the AND operator. To filter by either role or type, use the OR operator.
Either member.type = "HUMAN" or member.type != "BOT" is required when useAdminAccess is set to true. Other member type filters will be rejected.
For example, the following queries are valid:
role = "ROLE_MANAGER" OR role = "ROLE_MEMBER"
member.type = "HUMAN" AND role = "ROLE_MANAGER"
member.type != "BOT"
The following queries are invalid:
member.type = "HUMAN" AND member.type = "BOT"
role = "ROLE_MANAGER" AND role = "ROLE_MEMBER"
Invalid queries are rejected by the server with an INVALID_ARGUMENT error.
showGroups
boolean
Optional. When true , also returns memberships associated with a Google Group , in addition to other types of memberships. If a filter is set, Google Group memberships that don't match the filter criteria aren't returned.
showInvited
boolean
Optional. When true , also returns memberships associated with invited members, in addition to other types of memberships. If a filter is set, invited memberships that don't match the filter criteria aren't returned.
Currently requires user authentication .
useAdminAccess
boolean
Optional. When true , the method runs using the user's Google Workspace administrator privileges.
The calling user must be a Google Workspace administrator with the manage chat and spaces conversations privilege .
Requires either the chat.admin.memberships.readonly or chat.admin.memberships OAuth 2.0 scope .
Listing app memberships in a space isn't supported when using admin access.
Request body
The request body must be empty.
Response body
Response to list memberships of the space.
If successful, the response body contains data with the following structure:
JSON representation
{
"memberships" : [
{
object ( Membership )
}
] ,
"nextPageToken" : string
}
Fields
memberships[]
object ( Membership )
Unordered list. List of memberships in the requested (or first) page.
nextPageToken
string
A token that you can send as pageToken to retrieve the next page of results. If empty, there are no subsequent pages.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.admin.memberships
https://www.googleapis.com/auth/chat.admin.memberships.readonly
https://www.googleapis.com/auth/chat.app.memberships
https://www.googleapis.com/auth/chat.bot
https://www.googleapis.com/auth/chat.import
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.memberships.readonly
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-16 UTC."],[],["This document outlines how to list memberships within a Google Chat space using the API. Key actions involve sending a `GET` request to `https://chat.googleapis.com/v1/{parent=spaces/*}/members`, with a required `parent` path parameter specifying the space. Optional query parameters such as `pageSize`, `pageToken`, and `filter` allow for pagination and filtering by roles or types. The response is a list of memberships and a token for subsequent pages. It also details the authorization methods, including app and user authentication and the required scopes.\n"]]
