---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.618Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Workspace-restricted space discoverability"
feature_slug: "workspace-restricted-space-discoverability"
latest_feature_date: "2024-07-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/delete"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/get"
  - "https://developers.google.com/workspace/chat/admin-overview"
keywords:
  - "discoverability"
  - "restricted"
  - "workspace"
  - "be"
  - "spaces"
  - "space"
  - "chat"
  - "can"
---

# Workspace-restricted space discoverability

Product: Chat API
Coverage: LOW

## Step 02 Summary

Chat spaces can be made discoverable to specific Google Workspace users via space accessSettings and exposed with spaceUri.

## Extended Definition

Chat spaces can be made discoverable to specific Google Workspace users via space accessSettings and exposed with spaceUri.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/delete](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/delete)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/get](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/get)
- [https://developers.google.com/workspace/chat/admin-overview](https://developers.google.com/workspace/chat/admin-overview)

## Supporting Pages

### Method: spaces.members.delete \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/delete](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/delete)
- Source ID: `site-api-reference`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Google Workspace Google Chat Reference Send feedback Method: spaces.members.delete Stay organized with collections Save and categorize content based on your preferences.
- The calling user must be a Google Workspace administrator with the manage chat and spaces conversations privilege .
- Supports the following types of authentication : App authentication with administrator approval and the authorization scope: https://www.googleapis.com/auth/chat.app.memberships User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships https://www.googleapis.com/auth/chat.memberships.app (to remove the calling app from the space) https://www.googleapis.com/auth/chat.import (import mode spaces only) User authentication grants administrator privileges when an administrator account authenticates, useAdminAccess is true , and the following authorization scope is used: https://www.googleapis.com/auth/chat.admin.memberships App authentication is not supported for the following use cases: Removing a Google Group from a space.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-25 UTC."],[],["This API action deletes a membership using a DELETE request to https://chat.googleapis.com/v1/{name=spaces/ /members/ }.

### Method: spaces.members.get \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/get](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/get)
- Source ID: `site-docs-root-2`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Google Workspace Google Chat Reference Send feedback Method: spaces.members.get Stay organized with collections Save and categorize content based on your preferences.
- The calling user must be a Google Workspace administrator with the manage chat and spaces conversations privilege .
- Supports the following types of authentication : App authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.bot https://www.googleapis.com/auth/chat.app.memberships (requires administrator approval ) User authentication with one of the following authorization scopes: https://www.googleapis.com/auth/chat.memberships.readonly https://www.googleapis.com/auth/chat.memberships User authentication grants administrator privileges when an administrator account authenticates, useAdminAccess is true , and one of the following authorization scopes is used: https://www.googleapis.com/auth/chat.admin.memberships.readonly https://www.googleapis.com/auth/chat.admin.memberships HTTP request GET https://chat.googleapis.com/v1/{name=spaces/ /members/ } The URL uses gRPC Transcoding syntax.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-16 UTC."],[],["This document outlines how to retrieve membership details using a GET request to https://chat.googleapis.com/v1/{name=spaces/ /members/ }.

### "Manage Google Chat spaces as a Google Workspace administrator \_|\_ Google\

- URL: [https://developers.google.com/workspace/chat/admin-overview](https://developers.google.com/workspace/chat/admin-overview)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As a Google Workspace administrator, you can perform a number of management tasks with the Chat API, such as the following: Search spaces based on specified criteria List members of a space Add members to and remove members from a space Get details about a member and a space Update or delete a space Update a user's membership How to authenticate and authorize as a Google Workspace administrator When using the Chat API for management tasks, administrators can authenticate and authorize requests by invoking administrator privileges or configuring domain-wide delegation of authority for an application's service account.
- The following Chat API methods enable administrator privileges with useAdminAccess=true . spaces.delete spaces.get spaces.patch spaces.search spaces.members.create spaces.members.delete spaces.members.get spaces.members.list spaces.members.patch Manage users' space memberships The following scenarios are ways that you, as a Google Workspace administrator, can manage the space membership of users in your organization with the Chat API.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["Google Workspace administrators can use the Chat API to manage spaces and automate tasks.
- Audit and manage spaces The following scenarios are ways that you, as a Google Workspace administrator, can audit and manage the spaces in your organization with the Chat API.

