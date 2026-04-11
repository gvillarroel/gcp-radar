---
title: "Method: spaces.members.patch \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/patch
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/patch
  title: "Method: spaces.members.patch \_|\_ Google Chat \_|\_ Google for Developers"
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
Method: spaces.members.patch
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This method updates a Google Chat membership, allowing you to modify aspects like user roles within a space.
It supports both app and user authentication, with an option for administrator privileges using useAdminAccess .
Requires specifying fields to update with updateMask and includes optional use of administrator privileges.
You need appropriate OAuth scopes such as chat.app.memberships or chat.admin.memberships for authorization.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Updates a membership. For an example, see Update a user's membership in a space .
Supports the following types of authentication :
App authentication with administrator approval and the authorization scope:
https://www.googleapis.com/auth/chat.app.memberships (only in spaces the app created)
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.import (import mode spaces only)
User authentication grants administrator privileges when an administrator account authenticates, useAdminAccess is true , and the following authorization scope is used:
https://www.googleapis.com/auth/chat.admin.memberships
HTTP request
PATCH https://chat.googleapis.com/v1/{membership.name=spaces/*/members/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
membership.name
string
Identifier. Resource name of the membership, assigned by the server.
Format: spaces/{space}/members/{member}
Query parameters
Parameters
updateMask
string ( FieldMask format)
Required. The field paths to update. Separate multiple values with commas or use * to update all field paths.
Currently supported field paths:
role
useAdminAccess
boolean
Optional. When true , the method runs using the user's Google Workspace administrator privileges.
The calling user must be a Google Workspace administrator with the manage chat and spaces conversations privilege .
Requires the chat.admin.memberships OAuth 2.0 scope .
Request body
The request body contains an instance of Membership .
Response body
If successful, the response body contains an instance of Membership .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.app.memberships
https://www.googleapis.com/auth/chat.admin.memberships
https://www.googleapis.com/auth/chat.import
https://www.googleapis.com/auth/chat.memberships
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-25 UTC."],[],["This documentation details updating a membership via a `PATCH` HTTP request to `https://chat.googleapis.com/v1/{membership.name=spaces/*/members/*}`. Key actions include setting the `membership.name` path parameter and using the `updateMask` query parameter to specify fields for updating, such as `role`. Optionally, `useAdminAccess` can grant administrator privileges. The request body defines the new membership details, and the response body will contain updated membership information. Multiple authorization scopes are required.\n"]]
