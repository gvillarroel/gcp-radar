---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:57.167Z"
product_name: "Chat API"
product_slug: "chat-api"
feature_name: "User mentions with app authentication"
feature_slug: "user-mentions-with-app-authentication"
latest_feature_date: "2026-02-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef"
  - "https://developers.google.com/workspace/chat/api/reference"
  - "https://developers.google.com/workspace/chat/api/reference/rest/v1/HostApp"
keywords:
  - "user"
  - "mentions"
  - "app"
  - "authentication"
  - "chat"
  - "supports"
  - "mentioning"
  - "users"
---

# User mentions with app authentication

Product: Chat API
Coverage: LOW

## Step 02 Summary

The Chat API supports mentioning users in messages sent with app authentication, including users who have not joined a space or are in import-mode spaces.

## Extended Definition

The Chat API supports mentioning users in messages sent with app authentication, including users who have not joined a space or are in import-mode spaces.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef](https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef)
- [https://developers.google.com/workspace/chat/api/reference](https://developers.google.com/workspace/chat/api/reference)
- [https://developers.google.com/workspace/chat/api/reference/rest/v1/HostApp](https://developers.google.com/workspace/chat/api/reference/rest/v1/HostApp)

## Supporting Pages

### DriveDataRef \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef](https://developers.google.com/workspace/chat/api/reference/rest/v1/DriveDataRef)
- Source ID: `site-api-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Google Workspace Google Chat Reference Send feedback DriveDataRef Stay organized with collections Save and categorize content based on your preferences.

### Google Chat API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference](https://developers.google.com/workspace/chat/api/reference)
- Source ID: `site-api-reference`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["The Google Chat API offers gRPC and REST interfaces, with corresponding client libraries or the option to create custom ones.
- Type, method, and field names Depending on whether you're using client libraries, gRPC, or REST, the type, method, and field names for the Google Chat API vary somewhat: Cloud Client Libraries are arranged by gRPC services and their methods.
- Related topics Call the Google Chat API Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Client libraries The recommended way for most developers to call the Google Chat API is with our officially supported Cloud Client Libraries for your preferred language, like Python, Java, or Node.js.

### HostApp \_|\_ Google Chat \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/chat/api/reference/rest/v1/HostApp](https://developers.google.com/workspace/chat/api/reference/rest/v1/HostApp)
- Source ID: `site-api-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-10 UTC."],[],["The content defines the host applications for Google Workspace add-ons and Google Chat apps.
- Home Google Workspace Google Chat Reference Send feedback HostApp Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The HostApp enum indicates the Google Workspace application from which a Google Workspace Add-on or Google Chat app launches.
- For add-ons, the HostApp specifies the originating application like Gmail, Calendar, or Drive, while for Chat apps, it's always CHAT .

