---
title: "Method: spaces.members.create \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/create
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/create
  title: "Method: spaces.members.create \_|\_ Google Chat \_|\_ Google for Developers"
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
Method: spaces.members.create
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Creates memberships for the calling Chat app, a user, or a Google Group in a specified space.
Supports app authentication (with admin approval in Developer Preview) and user authentication (with optional admin access).
To use administrator privileges, set the useAdminAccess query parameter to true and ensure the user has the required permissions and scope.
Requires specific OAuth scopes for authorization, such as chat.app.memberships or chat.admin.memberships .
If the member has auto-accept turned off, an invitation is sent; otherwise, they are directly added to the space.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Creates a membership for the calling Chat app, a user, or a Google Group. Creating memberships for other Chat apps isn't supported. When creating a membership, if the specified member has their auto-accept policy turned off, then they're invited, and must accept the space invitation before joining. Otherwise, creating a membership adds the member directly to the specified space.
Supports the following types of authentication :
App authentication with administrator approval and the authorization scope:
https://www.googleapis.com/auth/chat.app.memberships
User authentication with one of the following authorization scopes:
https://www.googleapis.com/auth/chat.memberships
https://www.googleapis.com/auth/chat.memberships.app (to add the calling app to the space)
https://www.googleapis.com/auth/chat.import (import mode spaces only)
User authentication grants administrator privileges when an administrator account authenticates, useAdminAccess is true , and the following authorization scope is used:
https://www.googleapis.com/auth/chat.admin.memberships
App authentication is not supported for the following use cases:
Inviting users external to the Workspace organization that owns the space.
Adding a Google Group to a space.
Adding a Chat app to a space.
For example usage, see:
Invite or add a user to a space .
Invite or add a Google Group to a space .
Add the Chat app to a space .
HTTP request
POST https://chat.googleapis.com/v1/{parent=spaces/*}/members
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The resource name of the space for which to create the membership.
Format: spaces/{space}
Query parameters
Parameters
useAdminAccess
boolean
Optional. When true , the method runs using the user's Google Workspace administrator privileges.
The calling user must be a Google Workspace administrator with the manage chat and spaces conversations privilege .
Requires the chat.admin.memberships OAuth 2.0 scope .
Creating app memberships or creating memberships for users outside the administrator's Google Workspace organization isn't supported using admin access.
Request body
The request body contains an instance of Membership .
Response body
If successful, the response body contains a newly created instance of Membership .
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
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-25 UTC."],[],["This describes how to create a membership in Google Chat spaces using a `POST` request to `https://chat.googleapis.com/v1/{parent=spaces/*}/members`. Memberships can be created for a Chat app, user, or Google Group. Authentication supports app or user access, with optional administrator privileges via the `useAdminAccess` query parameter. The request includes path and query parameters and a `Membership` object in the body; the response returns the newly created `Membership`. Authorization requires specific OAuth scopes.\n"]]
