---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.644Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Google Chat space membership retrieval for Google Groups"
feature_slug: "google-chat-space-membership-retrieval-for-google-groups"
latest_feature_date: "2023-11-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list"
keywords:
  - "groups"
  - "retrieval"
  - "membership"
  - "apis"
  - "space"
  - "chat"
  - "now"
  - "for"
---

# Google Chat space membership retrieval for Google Groups

Product: Chat API
Coverage: LOW

## Step 02 Summary

Chat space membership APIs now support listing and getting memberships for Google Groups via ListMemberships(showGroups) and GetMembership.

## Extended Definition

Chat space membership APIs now support listing and getting memberships for Google Groups via ListMemberships(showGroups) and GetMembership.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list)

## Supporting Pages

### Package google.chat.v1 \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1](https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Supports the following types of authentication : App authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.app.memberships (requires administrator approval ) User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, use admin access is true , and one of the following authorization scopes is used: https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.admin.memberships Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/chat.admin.memberships https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.import https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.memberships.readonly For more information, see the Authorization guide .
- Supports the following types of authentication with an authorization scope appropriate for reading the requested data: App authentication with administrator approval with one of the following authorization scopes: https://www.googleapis.com/auth/chat.app.spaces https://www.googleapis.com/auth/chat.app.spaces.readonly https://www.googleapis.com/auth/chat.app.messages.readonly https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.app.memberships.readonly User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.spaces.readonly https://www.googleapis.com/auth/chat.spaces https://www.googleapis.com/auth/chat.messages.readonly https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.messages.reactions.readonly https://www.googleapis.com/auth/chat.messages.reactions https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships To get an event, the authenticated caller must be a member of the space.
- Supports the following types of authentication with an authorization scope appropriate for reading the requested data: App authentication with administrator approval with one of the following authorization scopes: https://www.googleapis.com/auth/chat.app.spaces https://www.googleapis.com/auth/chat.app.spaces.readonly https://www.googleapis.com/auth/chat.app.messages.readonly https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.app.memberships.readonly User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.spaces.readonly https://www.googleapis.com/auth/chat.spaces https://www.googleapis.com/auth/chat.messages.readonly https://www.googleapis.com/auth/chat.messages https://www.googleapis.com/auth/chat.messages.reactions.readonly https://www.googleapis.com/auth/chat.messages.reactions https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships To list events, the authenticated caller must be a member of the space.
- Supports the following types of authentication : App authentication with administrator approval and the authorization scope: https://www.googleapis.com/auth/chat.app.memberships (only in spaces the app created) User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, use admin access is true , and the following authorization scope is used: https://www.googleapis.com/auth/chat.admin.memberships Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.admin.memberships https://www.googleapis.com/auth/chat.import https://www.googleapis.com/auth/chat.memberships For more information, see the Authorization guide .

### REST Resource: spaces \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces)
- Source ID: `site-api-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],["Spaces in Google Chat represent conversations, defined by properties like spaceType (e.g., SPACE, DIRECT MESSAGE), displayName, and threaded status.
- Returns all spaces with spaceType == GROUP CHAT , whose human memberships contain exactly the calling user, and the users specified in FindGroupChatsRequest.users . get Returns details about a space. list Lists spaces the caller is a member of. patch Updates a space. search Returns a list of spaces in a Google Workspace organization based on an administrator's search. setup Creates a space and adds specified users to it.
- Methods completeImport Completes the import process for the specified space and makes it visible to users. create Creates a space. delete Deletes a named space. findDirectMessage Returns the existing direct message with the specified user. findGroupChats Developer Preview: Available as part of the Google Workspace Developer Preview Program , which grants early access to certain features.
- Resource: Space JSON representation Type SpaceType SpaceThreadingState SpaceDetails JSON representation HistoryState MembershipCount JSON representation AccessSettings JSON representation AccessState PredefinedPermissionSettings PermissionSettings JSON representation PermissionSetting JSON representation Methods Resource: Space A space in Google Chat.

### Method: spaces.members.list \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supports the following types of authentication : App authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.app.memberships (requires administrator approval ) User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, useAdminAccess is true , and one of the following authorization scopes is used: https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.admin.memberships HTTP request GET https://chat.googleapis.com/v1/{parent=spaces/ }/members The URL uses gRPC Transcoding syntax.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-16 UTC."],[],["This document outlines how to list memberships within a Google Chat space using the API.
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/chat.admin.memberships https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.app.memberships https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.import https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.memberships.readonly For more information, see the Authorization guide .
- Key actions involve sending a GET request to https://chat.googleapis.com/v1/{parent=spaces/ }/members, with a required parent path parameter specifying the space.

