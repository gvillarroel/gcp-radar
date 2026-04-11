---
title: "Method: spaces.members.get \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/get
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/get
  title: "Method: spaces.members.get \_|\_ Google Chat \_|\_ Google for Developers"
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
Method: spaces.members.get
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Returns detailed information about a specific Google Chat membership within a space.
Supports both app and user authentication, with an option for user authentication to leverage administrator privileges.
Requires providing the membership's resource name in the request path, allowing the use of email aliases for member identification.
Optionally accepts a query parameter to utilize the user's Google Workspace administrator privileges for the request.
Needs authorization with specific OAuth scopes related to Chat memberships and administration.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Returns details about a membership. For an example, see Get details about a user's or Google Chat app's membership .
Supports the following types of authentication :
App authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.bot
https://www.googleapis.com/auth/chat.app.memberships (requires administrator approval )
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.memberships.readonly
https://www.googleapis.com/auth/chat.memberships
User authentication grants administrator privileges when an administrator account authenticates, useAdminAccess is true , and one of the following authorization scopes is used:
https://www.googleapis.com/auth/chat.admin.memberships.readonly
https://www.googleapis.com/auth/chat.admin.memberships
HTTP request
GET https://chat.googleapis.com/v1/{name=spaces/*/members/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. Resource name of the membership to retrieve.
To get the app's own membership by using user authentication , you can optionally use spaces/{space}/members/app .
Format: spaces/{space}/members/{member} or spaces/{space}/members/app
You can use the user's email as an alias for {member} . For example, spaces/{space}/members/example@gmail.com where example@gmail.com is the email of the Google Chat user.
Query parameters
Parameters
useAdminAccess
boolean
Optional. When true , the method runs using the user's Google Workspace administrator privileges.
The calling user must be a Google Workspace administrator with the manage chat and spaces conversations privilege .
Requires the chat.admin.memberships or chat.admin.memberships.readonly OAuth 2.0 scopes .
Getting app memberships in a space isn't supported when using admin access.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Membership .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.admin.memberships
https://www.googleapis.com/auth/chat.admin.memberships.readonly
https://www.googleapis.com/auth/chat.app.memberships
https://www.googleapis.com/auth/chat.bot
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.memberships.readonly
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-16 UTC."],[],["This document outlines how to retrieve membership details using a `GET` request to `https://chat.googleapis.com/v1/{name=spaces/*/members/*}`. The `name` path parameter specifies the membership, with options to use a user's email as an alias. The `useAdminAccess` query parameter allows for execution with Google Workspace administrator privileges. The request body should be empty; a successful response contains a `Membership` instance. The operation requires various authorization scopes, including `chat.admin.memberships`.\n"]]
