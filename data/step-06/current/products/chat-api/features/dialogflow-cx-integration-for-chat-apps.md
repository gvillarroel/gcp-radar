---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.210Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "Dialogflow CX integration for Chat apps"
feature_slug: "dialogflow-cx-integration-for-chat-apps"
latest_feature_date: "2024-04-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rpc/google.type"
  - "https://developers.google.com/workspace/chat/delete-custom-emoji"
  - "https://developers.google.com/workspace/chat/create-custom-emoji"
keywords:
  - "dialogflow"
  - "cx"
  - "integration"
  - "chat"
  - "apps"
  - "can"
  - "integrate"
  - "directly"
---

# Dialogflow CX integration for Chat apps

Product: Chat API
Coverage: LOW

## Step 02 Summary

Google Chat apps can integrate directly with Dialogflow CX to understand and respond using natural language; The Chat API supports direct integration with Dialogflow CX so Chat apps can understand and respond with natural language.

## Extended Definition

Google Chat apps can integrate directly with Dialogflow CX to understand and respond using natural language; The Chat API supports direct integration with Dialogflow CX so Chat apps can understand and respond with natural language.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rpc/google.type](https://developers.google.com/workspace/chat/api/reference/rpc/google.type)
- [https://developers.google.com/workspace/chat/delete-custom-emoji](https://developers.google.com/workspace/chat/delete-custom-emoji)
- [https://developers.google.com/workspace/chat/create-custom-emoji](https://developers.google.com/workspace/chat/create-custom-emoji)

## Supporting Pages

### Package google.type \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rpc/google.type](https://developers.google.com/workspace/chat/api/reference/rpc/google.type)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Google Chat Reference Send feedback Package google.type Stay organized with collections Save and categorize content based on your preferences.

### Create a custom emoji \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/create-custom-emoji](https://developers.google.com/workspace/chat/create-custom-emoji)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example creates a custom emoji: Node.js chat/client-libraries/cloud/create-custom-emoji-user-cred.js View on GitHub import fs from 'node:fs' ; import { createClientWithUserCredentials } from './authentication-utils.js' ; const USER AUTH OAUTH SCOPES = [ 'https://www.googleapis.com/auth/chat.customemojis' , ]; // This sample shows how to create custom emoji with user credential async function main () { // Create a client const chatClient = await createClientWithUserCredentials ( USER AUTH OAUTH SCOPES , ); // TODO(developer) Replace FILENAME here. const filename = 'FILENAME' ; // Read custom emoji file content into a base64 encoded string. const fileContent = fs . readFileSync ( filename , { encoding : 'base64' }); // Initialize request argument(s) const request = { custom emoji : { // TODO(developer): Replace EMOJI NAME here. emoji name : 'EMOJI NAME' , payload : { file content : fileContent , filename , }, }, }; // Make the request const response = await chatClient . createCustomEmoji ( request ); // Handle the response console . log ( response ); } await main (); To run this sample, replace the following: FILENAME : A filename of the image.
- This guide explains how to use the create method on the CustomEmoji resource of the Google Chat API to create a new custom emoji in a Google Workspace organization.
- Home Google Workspace Google Chat Guides Send feedback Create a custom emoji Stay organized with collections Save and categorize content based on your preferences.
- Create a custom emoji To create a custom emoji with user authentication , pass the following in your request: Specify the chat.customemojis authorization scope.

### Delete a custom emoji \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/delete-custom-emoji](https://developers.google.com/workspace/chat/delete-custom-emoji)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Node.js chat/client-libraries/cloud/delete-custom-emoji-user-cred.js View on GitHub import { createClientWithUserCredentials } from './authentication-utils.js' ; const USER AUTH OAUTH SCOPES = [ 'https://www.googleapis.com/auth/chat.customemojis' , ]; // This sample shows how to delete a custom emoji with user credential async function main () { // Create a client const chatClient = await createClientWithUserCredentials ( USER AUTH OAUTH SCOPES , ); // Initialize request argument(s) const request = { // TODO(developer): Replace EMOJI NAME here. name : 'customEmojis/EMOJI NAME' , }; // Make the request const response = await chatClient . deleteCustomEmoji ( request ); // Handle the response console . log ( response ); } await main (); To run this sample, replace the following: EMOJI NAME : the unique name for your custom emoji, in the emoji name field.
- Create access credentials based on how you want to authenticate in your Google Chat API request: To authenticate as a Chat user, create OAuth client ID credentials and save the credentials as a JSON file named credentials.json to your local directory.
- Home Google Workspace Google Chat Guides Send feedback Delete a custom emoji Stay organized with collections Save and categorize content based on your preferences.
- This guide explains how to use the delete method on the CustomEmoji resource of the Google Chat API to delete a custom emoji in a Google Workspace organization.

