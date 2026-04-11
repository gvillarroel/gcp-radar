---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:26:07.601Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Chat API custom emoji management"
feature_slug: "chat-api-custom-emoji-management"
latest_feature_date: "2024-10-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/delete-custom-emoji"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/delete"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/create"
keywords:
  - "emoji"
  - "delete"
  - "management"
  - "enables"
  - "custom"
  - "create"
  - "chat"
  - "api"
---

# Chat API custom emoji management

Product: Chat API
Coverage: LOW

## Step 02 Summary

Enables Chat API create, delete, get, and list operations for custom emoji when organization-level custom emoji is enabled.

## Extended Definition

Enables Chat API create, delete, get, and list operations for custom emoji when organization-level custom emoji is enabled.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/chat/delete-custom-emoji](https://developers.google.com/workspace/chat/delete-custom-emoji)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/delete](https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/delete)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/create](https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/create)

## Supporting Pages

### Delete a custom emoji \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/delete-custom-emoji](https://developers.google.com/workspace/chat/delete-custom-emoji)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Node.js chat/client-libraries/cloud/delete-custom-emoji-user-cred.js View on GitHub import { createClientWithUserCredentials } from './authentication-utils.js' ; const USER AUTH OAUTH SCOPES = [ 'https://www.googleapis.com/auth/chat.customemojis' , ]; // This sample shows how to delete a custom emoji with user credential async function main () { // Create a client const chatClient = await createClientWithUserCredentials ( USER AUTH OAUTH SCOPES , ); // Initialize request argument(s) const request = { // TODO(developer): Replace EMOJI NAME here. name : 'customEmojis/EMOJI NAME' , }; // Make the request const response = await chatClient . deleteCustomEmoji ( request ); // Handle the response console . log ( response ); } await main (); To run this sample, replace the following: EMOJI NAME : the unique name for your custom emoji, in the emoji name field.
- This guide explains how to use the delete method on the CustomEmoji resource of the Google Chat API to delete a custom emoji in a Google Workspace organization.
- Home Google Workspace Google Chat Guides Send feedback Delete a custom emoji Stay organized with collections Save and categorize content based on your preferences.
- Delete a custom emoji To delete a custom emoji with user authentication , pass the following in your request: Specify the chat.customemojis authorization scope.

### Method: customEmojis.delete \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/delete](https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/delete)
- Source ID: `site-api-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-07 UTC."],[],["This document details the process of deleting a custom emoji via an HTTP DELETE request to https://chat.googleapis.com/v1/{name=customEmojis/ }.
- Requires user authentication with the authorization scope : https://www.googleapis.com/auth/chat.customemojis HTTP request DELETE https://chat.googleapis.com/v1/{name=customEmojis/ } The URL uses gRPC Transcoding syntax.
- Home Google Workspace Google Chat Reference Send feedback Method: customEmojis.delete Stay organized with collections Save and categorize content based on your preferences.
- Authorization scopes Requires the following OAuth scope: https://www.googleapis.com/auth/chat.customemojis For more information, see the Authorization guide .

### Method: customEmojis.create \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/create](https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/create)
- Source ID: `site-api-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-07 UTC."],[],["This document outlines how to create a custom emoji using the Google Chat API.
- Requires user authentication with the authorization scope : https://www.googleapis.com/auth/chat.customemojis HTTP request POST https://chat.googleapis.com/v1/customEmojis The URL uses gRPC Transcoding syntax.
- This action is available through the Google Workspace Developer Preview Program and requires user authentication and the https://www.googleapis.com/auth/chat.customemojis OAuth scope.
- Home Google Workspace Google Chat Reference Send feedback Method: customEmojis.create Stay organized with collections Save and categorize content based on your preferences.

