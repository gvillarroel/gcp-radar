---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.194Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Custom emoji management API"
feature_slug: "custom-emoji-management-api"
latest_feature_date: "2024-10-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/workspace/chat/delete-custom-emoji"
  - "https://developers.google.com/workspace/chat/create-custom-emoji"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/delete"
keywords:
  - "custom"
  - "emoji"
  - "management"
  - "chat"
  - "can"
  - "create"
  - "delete"
  - "get"
---

# Custom emoji management API

Product: Chat API
Coverage: MEDIUM

## Step 02 Summary

The Chat API can create, delete, get, and list custom emoji when custom emoji is enabled for the Workspace organization.

## Extended Definition

The Chat API can create, delete, get, and list custom emoji when custom emoji is enabled for the Workspace organization.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/delete-custom-emoji](https://developers.google.com/workspace/chat/delete-custom-emoji)
- [https://developers.google.com/workspace/chat/create-custom-emoji](https://developers.google.com/workspace/chat/create-custom-emoji)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/delete](https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/delete)

## Supporting Pages

### Delete a custom emoji \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/delete-custom-emoji](https://developers.google.com/workspace/chat/delete-custom-emoji)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Node.js chat/client-libraries/cloud/delete-custom-emoji-user-cred.js View on GitHub import { createClientWithUserCredentials } from './authentication-utils.js' ; const USER AUTH OAUTH SCOPES = [ 'https://www.googleapis.com/auth/chat.customemojis' , ]; // This sample shows how to delete a custom emoji with user credential async function main () { // Create a client const chatClient = await createClientWithUserCredentials ( USER AUTH OAUTH SCOPES , ); // Initialize request argument(s) const request = { // TODO(developer): Replace EMOJI NAME here. name : 'customEmojis/EMOJI NAME' , }; // Make the request const response = await chatClient . deleteCustomEmoji ( request ); // Handle the response console . log ( response ); } await main (); To run this sample, replace the following: EMOJI NAME : the unique name for your custom emoji, in the emoji name field.
- Home Google Workspace Google Chat Guides Send feedback Delete a custom emoji Stay organized with collections Save and categorize content based on your preferences.
- This guide explains how to use the delete method on the CustomEmoji resource of the Google Chat API to delete a custom emoji in a Google Workspace organization.
- Delete a custom emoji To delete a custom emoji with user authentication , pass the following in your request: Specify the chat.customemojis authorization scope.

### Create a custom emoji \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/create-custom-emoji](https://developers.google.com/workspace/chat/create-custom-emoji)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example creates a custom emoji: Node.js chat/client-libraries/cloud/create-custom-emoji-user-cred.js View on GitHub import fs from 'node:fs' ; import { createClientWithUserCredentials } from './authentication-utils.js' ; const USER AUTH OAUTH SCOPES = [ 'https://www.googleapis.com/auth/chat.customemojis' , ]; // This sample shows how to create custom emoji with user credential async function main () { // Create a client const chatClient = await createClientWithUserCredentials ( USER AUTH OAUTH SCOPES , ); // TODO(developer) Replace FILENAME here. const filename = 'FILENAME' ; // Read custom emoji file content into a base64 encoded string. const fileContent = fs . readFileSync ( filename , { encoding : 'base64' }); // Initialize request argument(s) const request = { custom emoji : { // TODO(developer): Replace EMOJI NAME here. emoji name : 'EMOJI NAME' , payload : { file content : fileContent , filename , }, }, }; // Make the request const response = await chatClient . createCustomEmoji ( request ); // Handle the response console . log ( response ); } await main (); To run this sample, replace the following: FILENAME : A filename of the image.
- This guide explains how to use the create method on the CustomEmoji resource of the Google Chat API to create a new custom emoji in a Google Workspace organization.
- Home Google Workspace Google Chat Guides Send feedback Create a custom emoji Stay organized with collections Save and categorize content based on your preferences.
- Create a custom emoji To create a custom emoji with user authentication , pass the following in your request: Specify the chat.customemojis authorization scope.

### Method: customEmojis.delete \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/delete](https://developers.google.com/workspace/chat/api/reference/rest/v1/customEmojis/delete)
- Source ID: `site-api-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-07 UTC."],[],["This document details the process of deleting a custom emoji via an HTTP DELETE request to https://chat.googleapis.com/v1/{name=customEmojis/ }.
- Requires user authentication with the authorization scope : https://www.googleapis.com/auth/chat.customemojis HTTP request DELETE https://chat.googleapis.com/v1/{name=customEmojis/ } The URL uses gRPC Transcoding syntax.
- Home Google Workspace Google Chat Reference Send feedback Method: customEmojis.delete Stay organized with collections Save and categorize content based on your preferences.
- By default, users can only delete custom emoji they created.

