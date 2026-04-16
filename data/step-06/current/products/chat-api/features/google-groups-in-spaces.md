---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.205Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Google Groups in spaces"
feature_slug: "google-groups-in-spaces"
latest_feature_date: "2024-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/delete"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list"
keywords:
  - "groups"
  - "spaces"
  - "chat"
  - "can"
  - "add"
  - "remove"
  - "members"
  - "space"
---

# Google Groups in spaces

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

The Chat API can add and remove Google Groups as members of a Chat space.

## Extended Definition

The Chat API can add and remove Google Groups as members of a Chat space.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/delete](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/delete)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list)

## Supporting Pages

### REST Resource: spaces.members \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],["Membership resource defines relationships within Google Chat spaces, indicating if a user or app is invited, present, or absent.
- Format: groups/{group} Methods create Creates a membership for the calling Chat app, a user, or a Google Group. delete Deletes a membership. get Returns details about a membership. list Lists memberships in a space. patch Updates a membership.
- Home Google Workspace Google Chat Reference Send feedback REST Resource: spaces.members Stay organized with collections Save and categorize content based on your preferences.
- Resource: Membership JSON representation MembershipState MembershipRole Group JSON representation Methods Resource: Membership Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space.

### Method: spaces.members.delete \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/delete](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/delete)
- Source ID: `site-api-reference`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supports the following types of authentication : App authentication with administrator approval and the authorization scope: https://www.googleapis.com/auth/chat.app.memberships User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.memberships.app (to remove the calling app from the space) https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, useAdminAccess is true , and the following authorization scope is used: https://www.googleapis.com/auth/chat.admin.memberships App authentication is not supported for the following use cases: Removing a Google Group from a space.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-25 UTC."],[],["This API action deletes a membership using a DELETE request to https://chat.googleapis.com/v1/{name=spaces/ /members/ }.
- When deleting a human membership, requires the chat.memberships scope with user authentication or the chat.memberships.app scope with app authentication and the spaces/{space}/members/{member} format.
- Home Google Workspace Google Chat Reference Send feedback Method: spaces.members.delete Stay organized with collections Save and categorize content based on your preferences.

### Method: spaces.members.list \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supports the following types of authentication : App authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.app.memberships (requires administrator approval ) User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, useAdminAccess is true , and one of the following authorization scopes is used: https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.admin.memberships HTTP request GET https://chat.googleapis.com/v1/{parent=spaces/ }/members The URL uses gRPC Transcoding syntax.
- Home Google Workspace Google Chat Reference Send feedback Method: spaces.members.list Stay organized with collections Save and categorize content based on your preferences.
- Key actions involve sending a GET request to https://chat.googleapis.com/v1/{parent=spaces/ }/members, with a required parent path parameter specifying the space.
- Listing memberships with app authentication lists memberships in spaces that the Chat app has access to, but excludes Chat app memberships, including its own.

