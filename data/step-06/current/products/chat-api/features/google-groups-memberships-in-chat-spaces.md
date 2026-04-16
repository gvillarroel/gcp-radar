---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.229Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Google Groups memberships in Chat spaces"
feature_slug: "google-groups-memberships-in-chat-spaces"
latest_feature_date: "2023-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/get"
keywords:
  - "groups"
  - "memberships"
  - "chat"
  - "spaces"
  - "can"
  - "retrieve"
  - "members"
  - "space"
---

# Google Groups memberships in Chat spaces

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

The Chat API can retrieve Google Groups that are members of a Chat space through membership APIs.

## Extended Definition

The Chat API can retrieve Google Groups that are members of a Chat space through membership APIs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/get](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/get)

## Supporting Pages

### REST Resource: spaces.members \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members)
- Source ID: `site-api-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Format: groups/{group} Methods create Creates a membership for the calling Chat app, a user, or a Google Group. delete Deletes a membership. get Returns details about a membership. list Lists memberships in a space. patch Updates a membership.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-24 UTC."],[],["Membership resource defines relationships within Google Chat spaces, indicating if a user or app is invited, present, or absent.
- Resource: Membership JSON representation MembershipState MembershipRole Group JSON representation Methods Resource: Membership Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space.
- Home Google Workspace Google Chat Reference Send feedback REST Resource: spaces.members Stay organized with collections Save and categorize content based on your preferences.

### Method: spaces.members.list \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list)
- Source ID: `site-docs-root-2`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supports the following types of authentication : App authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.app.memberships (requires administrator approval ) User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, useAdminAccess is true , and one of the following authorization scopes is used: https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.admin.memberships HTTP request GET https://chat.googleapis.com/v1/{parent=spaces/ }/members The URL uses gRPC Transcoding syntax.
- Listing memberships with app authentication lists memberships in spaces that the Chat app has access to, but excludes Chat app memberships, including its own.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-16 UTC."],[],["This document outlines how to list memberships within a Google Chat space using the API.
- Home Google Workspace Google Chat Reference Send feedback Method: spaces.members.list Stay organized with collections Save and categorize content based on your preferences.

### Method: spaces.members.get \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/get](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/get)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supports the following types of authentication : App authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.app.memberships (requires administrator approval ) User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships User authentication grants administrator privileges when an administrator account authenticates, useAdminAccess is true , and one of the following authorization scopes is used: https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.admin.memberships HTTP request GET https://chat.googleapis.com/v1/{name=spaces/ /members/ } The URL uses gRPC Transcoding syntax.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-16 UTC."],[],["This document outlines how to retrieve membership details using a GET request to https://chat.googleapis.com/v1/{name=spaces/ /members/ }.
- Home Google Workspace Google Chat Reference Send feedback Method: spaces.members.get Stay organized with collections Save and categorize content based on your preferences.
- For example, spaces/{space}/members/example@gmail.com where example@gmail.com is the email of the Google Chat user.

