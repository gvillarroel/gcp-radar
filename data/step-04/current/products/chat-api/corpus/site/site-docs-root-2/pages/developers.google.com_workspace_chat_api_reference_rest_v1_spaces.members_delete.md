---
title: "Method: spaces.members.delete \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/delete
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/delete
  title: "Method: spaces.members.delete \_|\_ Google Chat \_|\_ Google for Developers"
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
Method: spaces.members.delete
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Deletes a specified membership from a Google Chat space, allowing removal of human users or Chat apps.
Requires specific OAuth scopes depending on the type of membership being deleted and whether admin privileges are used.
Supports app and user authentication, with an option for administrator approval in Developer Preview for app authentication.
Uses a DELETE request with the membership's resource name specified in the path.
Provides an optional useAdminAccess query parameter to utilize administrator privileges when deleting human memberships.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Deletes a membership. For an example, see Remove a user or a Google Chat app from a space .
Supports the following types of authentication :
App authentication with administrator approval and the authorization scope:
https://www.googleapis.com/auth/chat.app.memberships
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.memberships.app (to remove the calling app from the space)
https://www.googleapis.com/auth/chat.import (import mode spaces only)
User authentication grants administrator privileges when an administrator account authenticates, useAdminAccess is true , and the following authorization scope is used:
https://www.googleapis.com/auth/chat.admin.memberships
App authentication is not supported for the following use cases:
Removing a Google Group from a space.
Removing a Chat app from a space.
To delete memberships for space managers, the requester must be a space manager. If you're using app authentication the Chat app must be the space creator.
HTTP request
DELETE https://chat.googleapis.com/v1/{name=spaces/*/members/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. Resource name of the membership to delete. Chat apps can delete human users' or their own memberships. Chat apps can't delete other apps' memberships.
When deleting a human membership, requires the chat.memberships scope with user authentication or the chat.memberships.app scope with app authentication and the spaces/{space}/members/{member} format. You can use the email as an alias for {member} . For example, spaces/{space}/members/example@gmail.com where example@gmail.com is the email of the Google Chat user.
When deleting an app membership, requires the chat.memberships.app scope and spaces/{space}/members/app format.
Format: spaces/{space}/members/{member} or spaces/{space}/members/app .
Query parameters
Parameters
useAdminAccess
boolean
Optional. When true , the method runs using the user's Google Workspace administrator privileges.
The calling user must be a Google Workspace administrator with the manage chat and spaces conversations privilege .
Requires the chat.admin.memberships OAuth 2.0 scope .
Deleting app memberships in a space isn't supported using admin access.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Membership .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/chat.app.memberships
https://www.googleapis.com/auth/chat.admin.memberships
https://www.googleapis.com/auth/chat.import
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.memberships.app
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-25 UTC."],[],["This API action deletes a membership using a `DELETE` request to `https://chat.googleapis.com/v1/{name=spaces/*/members/*}`. It requires specifying the membership's resource name in the `name` path parameter. Deleting human memberships requires the `chat.memberships` scope, while deleting app memberships requires the `chat.memberships.app` scope. Administrators can use `useAdminAccess` query parameter to operate with elevated privileges. The request body should be empty, and a successful response returns a `Membership` instance. Necessary authorization scopes include `chat.app.memberships`, `chat.admin.memberships`, `chat.import`, `chat.memberships`, and `chat.memberships.app`.\n"]]
