---
title: "Method: customEmojis.list \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/list
  title: "Method: customEmojis.list \_|\_ Google Chat \_|\_ Google for Developers"
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
Method: customEmojis.list
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Lists custom emojis visible to the authenticated user, requiring user authentication and specific authorization scopes.
Allows filtering by creator to see emojis created by the calling user or others.
Supports pagination to retrieve large lists of custom emojis, with a default page size of 25 and a maximum of 200.
Returns a list of custom emojis and a token for retrieving subsequent pages if available.
Requires an empty request body and provides a structured JSON response containing emoji details.
HTTP request
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Lists custom emojis visible to the authenticated user.
Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see Learn about custom emojis in Google Chat and Manage custom emoji permissions .
Requires user authentication with one of the following authorization scopes :
https://www.googleapis.com/auth/chat.customemojis.readonly
https://www.googleapis.com/auth/chat.customemojis
HTTP request
GET https://chat.googleapis.com/v1/customEmojis
The URL uses gRPC Transcoding syntax.
Query parameters
Parameters
pageSize
integer
Optional. The maximum number of custom emojis returned. The service can return fewer custom emojis than this value. If unspecified, the default value is 25. The maximum value is 200; values above 200 are changed to 200.
pageToken
string
Optional. (If resuming from a previous query.)
A page token received from a previous list custom emoji call. Provide this to retrieve the subsequent page.
When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results.
filter
string
Optional. A query filter.
Supports filtering by creator.
To filter by creator, you must specify a valid value. Currently only creator("users/me") and NOT creator("users/me") are accepted to filter custom emojis by whether they were created by the calling user or not.
For example, the following query returns custom emojis created by the caller:
creator("users/me")
Invalid queries are rejected with an INVALID_ARGUMENT error.
Request body
The request body must be empty.
Response body
A response to list custom emojis.
If successful, the response body contains data with the following structure:
JSON representation
{
"customEmojis" : [
{
object ( CustomEmoji )
}
] ,
"nextPageToken" : string
}
Fields
customEmojis[]
object ( CustomEmoji )
Unordered list. List of custom emojis.
nextPageToken
string
A token that you can send as pageToken to retrieve the next page of results. If empty, there are no subsequent pages.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.customemojis
https://www.googleapis.com/auth/chat.customemojis.readonly
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-07 UTC."],[],["This document details how to list custom emojis in Google Chat via an HTTP GET request to `https://chat.googleapis.com/v1/customEmojis`. The request requires user authentication and supports optional query parameters: `pageSize` (default 25, max 200), `pageToken` (for pagination), and `filter` (to filter by emoji creator). The request body must be empty. The response includes a list of `customEmojis` and an optional `nextPageToken` for pagination. Authorization requires either `chat.customemojis` or `chat.customemojis.readonly` scope.\n"]]
